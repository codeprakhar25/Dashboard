/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react'


const page = () => {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const fetchData=async ()=>{
      const response =await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }
  })
  return (
    <>
      {posts &&
        posts.map((post:any)=>{
         <li key={post._id}>{post._id}</li>
        })
      }
    </>
  )
}

export default page
