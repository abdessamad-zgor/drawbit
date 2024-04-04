import React from 'react'
import { Link } from 'react-router-dom'
import EditorBar from '../components/EditorBar'

function Home() {
  return (
    <div className=' w-full min-h-screen bg-skin'>
      <div className='bg-darkblue'>
        <EditorBar />
      </div>
      <section className='rounded bg-skin shadow flex flex-row p-20'>
        <div className='basis-8/12'>
          <h1 className='text-teal-500 text-6xl'>Drawbit</h1>
          <span className='text-xl font-thin text-zinc-100'>Draw your pixel art characters and bring them to life.</span>
        </div>
      </section>
    </div>
  )
}

export default Home
