/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const page = () => {
  const [submitting,setSubmitting]= useState(false)
  const {data:session}=useSession();

  const [tagg,setTagg]= useState(false)
  const [promptname,setPromptName]= useState(false)
console.log(session?.user.id)
const createPost= async (e)=>{
// e.preventDefault();
setSubmitting(true);
try {
  const response=await fetch('/api/prompt/new',{
    method:'POST',
    body: JSON.stringify({
      prompt: "promptname",
      userId: session?.user.id,
      tag: "tagg",
    })
  })
} catch (error) {
  console.log(error)
}
}
  return (
    <div>
      <h1 className=' text-zinc-500 '>Creat Post</h1>
      <input type="text" placeholder='Enter Header' className='bg-white '/>
    <textarea name=""  className='form_textarea' placeholder='Enter Post Content'/>
    <input name=""  className='form_input' placeholder='Enter Post Content'/>

    <button disabled={submitting} onClick={()=>{createPost()}}>Create Post</button>
    </div>
  )
}

export default page
