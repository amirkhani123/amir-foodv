import { Ifoods } from '@/helper/interfaces'
import React from 'react'
import RenderCard from './RenderCard'
import Cart from './Cart'

interface params{
    data:[Ifoods]
}
function HomePageT({data}:params) {
  return (
    <div>
        <h1 className='text-2xl font-normal my-5 mx-2 max-md:font-medium max-md:text-center max-md:text-[1.5rem]'>Desserts</h1>
      <main className='flex gap-2 max-md:flex-col' >
        <section className='w-[70%] max-md:w-full'> 
               <RenderCard data={data}/>
        </section>
        <aside> 
          <Cart/>
        </aside>
      </main>
    </div>
  )
}

export default HomePageT