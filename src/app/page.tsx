import Image from 'next/image'

export default function Home() {
  return (
<div className='rounded-md  dark:bg-white bg-black h-screen motion-safe:marker: text-white p-2'>
  Login SignUp
<p className='flex '>Welcome to the Dashboard</p>
<div className='flex-auto space-x-4'> 
<button className="btn btn--secondary">Sign in with Google</button>
    <button className="btn btn--primary">Log In</button>
    </div>
</div>
  )
}
