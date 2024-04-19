import useScene from '../hooks/scene'
import Frame from './Frame'
import PlusIcon from "../assets/plus-square.svg"
import TrashIcon from "../assets/trash.svg"
import DuplicateIcon from "../assets/duplicate.svg"

function Scene() {
  const { frames, addFrame, deleteFrame, duplicateFrame, zoom, unit, dimensions } = useScene()
  let [sceneWidth, sceneHeight] = [(zoom * unit / 100) * dimensions[0], (zoom * unit / 100) * dimensions[1]]
  return (
    <div id="scene" className='flex flex-col h-[80vh] m-auto'>
      <div style={{ width: `${sceneWidth + 50}px`, height: `${sceneHeight + 50}px` }} className='mx-4'>
        {
          frames.length == 0 ?
            <div className='flex flex-row justify-end p-px gap-3 frame-actions'>
              <button className='bg-stone-200 text-center text-3xl font-bold' onClick={() => addFrame(0)} >
                <img src={PlusIcon} className='w-[2em] h-[2em]' />
              </button>
            </div> :
            frames.map(
              (f, i) =>
                <div className='flex flex-row justify-center items-center m-auto' key={f.id}>
                  <div className='flex flex-col m-auto'>
                    <Frame frame={f.data} id={f.id} index={i} />
                    {/* FrameActions Component */}
                    <div className='flex flex-row justify-end p-px gap-3 frame-actions'>
                      <button className='bg-stone-200 text-center text-3xl font-bold' onClick={() => duplicateFrame(i)} >
                        <img src={DuplicateIcon} className='w-[1em] h-[1em]' />
                      </button>
                      <button className='bg-stone-200 text-center text-3xl font-bold' onClick={() => addFrame(i)} >
                        <img src={PlusIcon} className='w-[1em] h-[1em]' />
                      </button>
                      <button className='bg-stone-200 text-center text-3xl font-bold' onClick={() => deleteFrame(i)} >
                        <img src={TrashIcon} className='w-[1em] h-[1em]' />
                      </button>
                    </div>
                    {/* FrameActions Component */}
                  </div>
                </div>
            )
        }
      </div>

    </div>
  )
}

export default Scene
