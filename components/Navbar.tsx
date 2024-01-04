'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import nextAuth from 'next-auth'
import { SignInOptions,signIn,signOut,getProviders, useSession } from 'next-auth/react'


const Navbar = () => {
    const [user,setUser]=useState(null)
    const [providers,setProviders]=useState(null)
const {data:session}=useSession();
useEffect(()=>{
  const Provide =async ()=>{
    const res=await getProviders();
    setProviders(res);
  }
Provide();
},[])
console.log(session)
  return (
    <>
    <nav className='flex-between w-full mb-16 pt-3'>
        <Image
        src={session?.user?.image}
        alt='Logo Image'
        width={50}
        height={50}
        />
      <Link href={"/"} className='ml-20 cursor-pointer hover:text-cyan-600 hover:underline'>Home</Link>
      <Link href={"/create-post"} className='ml-20 cursor-pointer hover:text-cyan-600 hover:underline'>Create Post</Link>
      {/* <Link href={"/"} className='ml-20 cursor-pointer hover:text-cyan-600 hover:underline'>Home</Link> */}
      <Link href={"/"} className='ml-20 cursor-pointer hover:text-cyan-600 hover:underline'>Profile</Link>
{
    session?.user ?
    <>
      <Link href={"/"}  className='ml-20 cursor-pointer hover:text-cyan-600 hover:underline'> <p onClick={signOut}>LogOut</p> </Link>
    </>
    :
    <>
    {
      providers && 
      Object.values(providers).map((provider)=>(
        <button key={provider.name} onClick={()=>{signIn(provider.id)}} className='black_btn'>
Sign In
        </button>
      ))
    }
    </>
}
    </nav>
    </>
  )
}

export default Navbar
