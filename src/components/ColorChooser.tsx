import { HexColorPicker } from "react-colorful"
import addIcon from '../assets/add.svg'
import eraserIcon from '../assets/eraser.svg'
import useColor from '../hooks/color'

function ColorChooser() {
  const {
    color,
    documentColors,
    togglePicker,
    handlePickerChange,
    pickColor,
    togglePickerHandler,
    setEraser
  } = useColor()
  return (
    <div className='flex relative flex-row gap-2 color-picker'>
      <div className="flex flex-col items-start">
        <span className="text-xs text-stone-400 pb-1">Eraser</span>
        <div
          className='w-[2.5em] relative h-[2.5em] rounded flex justify-center items-center'
          onClick={setEraser}>
          <img className="w-[2.5em] h-[2.5em] rounded" src={eraserIcon} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs text-stone-400 pb-1">Choose color</span>
        <div
          className='w-[2.5em] relative h-[2.5em] rounded flex justify-center items-center'
          style={{ backgroundImage: 'conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)' }}
          onClick={togglePickerHandler}
          onBlur={togglePickerHandler}>
          <img className="w-[1.5em] h-[1.5em] rounded" src={addIcon} />
        </div>
      </div>
      {
        togglePicker ?
          <HexColorPicker
            color={color}
            onChange={handlePickerChange} />
          : <></>
      }
      <div className="flex flex-col items-start">
        <span className="text-xs text-stone-400 pb-1">Document colors</span>
        <div className="flex gap-2">
          <div
            className='w-[2.5em] h-[2.5em] rounded border-black ring-2 ring-sky-400 shadow-lg shadow-sky-300'
            style={{ backgroundColor: color }}
          ></div>
          {
            documentColors.filter(c => c != color).map(
              c =>
                <div
                  className='w-[2.5em] h-[2.5em] rounded'
                  hex-code={c}
                  onClick={pickColor}
                  style={{ backgroundColor: c }}
                ></div>
            )
          }
        </div>
      </div>
    </div >
  )
}

export default ColorChooser;
