import { Ifoods } from '@/helper/interfaces'
import React from 'react'
import Card from '../modules/Card'
interface params{
    data:[Ifoods]
}
function RenderCard({data}:params) {
  return (
    <div className='flex flex-wrap items-center justify-center gap-5'>
    {data.map(item=><Card key={item.id} card={item}/>)}
    </div>
  )
}

export default RenderCard