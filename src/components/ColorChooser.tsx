import { SketchPicker } from "react-color"
import useColor from '../hooks/color'

function ColorChooser() {
  const { color, suggestedColors, togglePicker, handlePickerChange, pickColor, togglePickerHandler } = useColor()
  return (
    <div className='flex flex-row gap-2'>
      <div
        className='w-[2em] h-[2em] rounded'
        style={{ backgroundImage: 'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)' }}
        onClick={togglePickerHandler} onBlur={togglePickerHandler}></div>
      {

        togglePicker ?
          <SketchPicker className="absolute bottom-[110%] " color={color} onChangeComplete={handlePickerChange} /> : <></>
      }
      <div
        className='w-[2em] h-[2em] rounded border-black ring-2 ring-sky-400 shadow-lg shadow-sky-300'
        style={{ backgroundColor: color }}
      ></div>
      {
        suggestedColors.map(
          c =>
            <div className='w-[2em] h-[2em] rounded' hex-code={c} onClick={pickColor} style={{ backgroundColor: c }}></div>
        )
      }
    </div>
  )
}

export default ColorChooser
