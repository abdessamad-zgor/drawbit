import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-slate-900 w-full min-h-screen p-12'>
      <section className='rounded bg-emerald-500 shadow flex flex-row p-20'>
        <div className='basis-8/12'>
          <h1 className='text-zinc-100 text-6xl'>Drawbit</h1>
          <span className='text-xl font-thin text-zinc-100'>Draw your pixel art characters and bring them to life.</span>
        </div>
        <div className="basis-4/12">
          <Link to="/editor" className="bg-stone-100 text-blue-800 p-4 text-3xl rounded shadow">Start a scene</Link>
        </div>

      </section>
    </div>
  )
}

export default Home
