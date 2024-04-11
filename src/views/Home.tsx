import React from 'react'
import { Link } from 'react-router-dom'
import EditorBar from '../components/EditorBar'

function Home() {
  return (
    <div className=' w-full min-h-screen bg-'>
      <div className='bg-purple-50 border-b-2 border-blue-800'>
        <EditorBar />
      </div>
      <section className='rounded bg-purple-300 shadow h-[90vh] flex-row p-20'>
        <div className='text-center w-full h-full'>
          <h1 className='text-stone-500 text-9xl'>Drawbit</h1>
          <span className='text-xl font-thin text-zinc-900'>Draw your pixel art characters and bring them to life.</span>
          <div className='flex justify-center items-center h-[50%]'>
            <Link
              className='bg-purple-700 py-2 rounded-lg shadow ripple w-1/5 text-white font-bold '
              to='/editor'>
              Create a scene
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
