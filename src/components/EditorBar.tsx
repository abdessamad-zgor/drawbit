import Logo from './Logo'
import { Link } from 'react-router-dom'
import ExportButton from './ExportButton'
import useScene from '../hooks/scene'
import { useLocation } from 'react-router-dom'

function EditorBar() {
  const { name, updateName } = useScene()
  const location = useLocation()

  return (
    <nav className='px-12 py-2 z-10 flex flex-row sticky left-0 right-0 top-0 w-full'>
      <Logo />
      <div className='flex justify-end w-full gap-4'>

        <div className='flex justify-center items-center w-3/12 gap-2' >
          {
            location.pathname == '/' ?
              <>
                <Link
                  className='bg-purple-700 py-2 rounded-lg shadow ripple w-1/2 text-white font-bold flex items-center justify-center'
                  to='/editor'>
                  Create a scene
                </Link>
              </> :
              location.pathname == "/editor" ?
                <>
                  <input type="text" value={name} onChange={updateName} className='p-2 outline-none border bg-white/50 rounded w-1/2 hover:border-purple-300 focus:border-2 focus:border-purple-700' />
                  <div className='flex flex-row gap-4'>
                    <ExportButton />
                  </div>
                </> :
                <></>
          }
        </div>
      </div>
    </nav>
  )
}

export default EditorBar
