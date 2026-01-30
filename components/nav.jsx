'use client'
import {FaBars,FaWindowClose ,FaRegWindowClose} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

import {useState,useEffect} from 'react'
import { signOut, useSession } from 'next-auth/react'

const Nav = () => {
    const [toggle,setToggle]=useState(false);
    const {data:session} = useSession();
    const siteTitle = "Ebba Tickets";
  
    

    
  return (
    <nav className='h-[5rem] bg-black flex flex-col  justify-center'>
        {/* DESKTOP NAVIGATION */}
          <section className='max-md:hidden flex items-center justify-between px-10 text-white'>
        <div className=' flex flex-1 items-center justify-center font-bold text-2xl'><Link href={'/'}><h2 className='font-mono'>{siteTitle}</h2></Link></div>
              <div className='flex flex-3 items-center justify-center'>
                <div> </div>
                <div className='flex items-center justify-between gap-4'>
                      <Link href={'/'}>Home</Link>
                      <Link href={'/'}>Features</Link>
                      <Link href={'/'}>Services</Link>
                      <Link href={'/'}>Support</Link>
                </div>
              </div>
              <div className='flex flex-1 items-center justify-center'>
          {session && session.user ? <div className='flex w-full gap-8 items-center justify-center'>
            <button onClick={() => signOut()} className='bg-blue-600  rounded-2xl px-2 py-2 font-bold cursor-pointer hover:bg-blue-400 flex items-center justify-center'>Sign Out</button> 
            <Image alt='user' className='rounded-full cursor-pointer object-contain' src={session.user.image || '/globe.svg'} width={40} height={40}/>
          </div>: <Link href='/sign_in' className='bg-blue-600  rounded-2xl px-4 py-2 font-bold cursor-pointer hover:bg-blue-400 flex items-center justify-center'>Sign In</Link>}
              </div>
        </section>
        {/* MOBILE NAVIGATION */}
          <section className='md:hidden px-4 flex justify-between items-center'>
        <div><Link href={'/'}><h2 className='text-white font-bold text-2xl'>{siteTitle}</h2></Link></div>
              <div className='relative'>
                  <FaBars className='cursor-pointer text-white font-bold text-3xl'  alt='' onClick={()=>setToggle((prev) => !prev)} />
                  {toggle && <div className='h-screen w-full  fixed top-0 left-0 z-10 bg-neutral-800 '> 
                      <div className='w-full relative'><FaRegWindowClose onClick={() => setToggle(false)} className='fixed top-4 right-6 text-4xl font-bold cursor-pointer hover:text-red-600 text-white' /></div>
                    <div className='flex items-center justify-center w-full  mt-50 flex-col gap-10'>
                          <Link href='/' className='text-white font-bold   ' onClick={() => setToggle(false)}>Home</Link>
                          <Link href='/' className='text-white font-bold' onClick={() => setToggle(false)}>Features</Link>
                          <Link href='/' className='text-white font-bold' onClick={() => setToggle(false)}>Services</Link>
                          <Link href='/' className='text-white font-bold' onClick={() => setToggle(false)}>Support</Link>

                        <div>
                {session && session.user ? <div className='flex flex-col gap-4 items-center justify-center'>
                  <Image onClick={() => setToggle(false)} alt='user' src={session.user.image || '/globe.svg'} width={30} height={30} />
                  <button onClick={() => {setToggle(false); signOut()}} className='bg-blue-600  rounded-2xl px-2 py-2 font-bold cursor-pointer hover:bg-blue-400 flex items-center justify-center'>Sign Out</button>

                </div> : <Link href='/sign_in' onClick={() => setToggle(false)} className='bg-blue-600  rounded-2xl px-4 py-2 font-bold cursor-pointer hover:bg-blue-400 flex items-center justify-center'>Sign In</Link>}
                        </div>

                    </div>
                    </div>}
              </div>

          </section>
    </nav>
  )
}

export default Nav
