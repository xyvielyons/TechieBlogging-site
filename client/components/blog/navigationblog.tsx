'use client'
import React,{useState} from 'react'
import { Button } from '../ui/button'

export default function NavigationBlog({navigation}:any) {
    const [nav,setNav]=useState<string>('All')
   navigation(nav)
  return (
   
    <div>
        <nav className='grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6'>
            <Button className={`hover:bg-accentcolor ${nav==="All"?'bg-accentcolor':''}`} onClick={()=>setNav('All')}>All</Button>
            <Button className={`hover:bg-accentcolor ${nav==="Ai"?'bg-accentcolor':''} `} onClick={()=>setNav('Ai')}>Ai</Button>
            <Button className={`hover:bg-accentcolor ${nav==="Cloud"?'bg-accentcolor':''}`} onClick={()=>setNav('Cloud')}>Cloud</Button>
            <Button className={`hover:bg-accentcolor ${nav==="Enginnering"?'bg-accentcolor':''}`} onClick={()=>setNav('Engineering')}>Engineering</Button>
            <Button className={`hover:bg-accentcolor ${nav==="Programming"?'bg-accentcolor':''}`} onClick={()=>setNav('Programming')}>Programming</Button>
            <Button className={`hover:bg-accentcolor ${nav==="Other"?'bg-accentcolor':''}`} onClick={()=>setNav('Other')}>Other</Button>
            
        </nav>

        <div className="">
          
        </div>
    </div>
  )
}
