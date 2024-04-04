import { HexColorPicker } from "react-colorful"
import addIcon from '../assets/add.svg'
import useColor from '../hooks/color'

function ColorChooser() {
  const {
    color,
    suggestedColors,
    togglePicker,
    handlePickerChange,
    pickColor,
    togglePickerHandler
  } = useColor()
  return (
    <div className='flex relative flex-row gap-2 color-picker'>
      <div
        className='w-[2em] relative h-[2em] rounded flex justify-center items-center'
        style={{ backgroundImage: 'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)' }}
        onClick={togglePickerHandler}
        onBlur={togglePickerHandler}>
        <img className="w-[1.5em] h-[1.5em] rounded" src={addIcon} />
      </div>
      {
        togglePicker ?
          <HexColorPicker
            color={color}
            onChange={handlePickerChange} />
          : <></>
      }
      <div
        className='w-[2em] h-[2em] rounded border-black ring-2 ring-sky-400 shadow-lg shadow-sky-300'
        style={{ backgroundColor: color }}
      ></div>
      {
        suggestedColors.map(
          c =>
            <div
              className='w-[2em] h-[2em] rounded'
              hex-code={c}
              onClick={pickColor}
              style={{ backgroundColor: c }}
            ></div>
        )
      }
    </div>
  )
}

export default ColorChooser
