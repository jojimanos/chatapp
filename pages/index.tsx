import { Inter } from '@next/font/google';
import React, {useContext} from 'react';
import { Context } from '../context';
import { useRouter } from 'next/router';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
        const {
        username,
        setUsername,
        secret,
        setSecret,
        } = useContext(Context)

        const router = useRouter();
        
function onSubmit(e: any) {
  e.preventDefault();

if (username.lenght === 0 || secret.lenght === 0) return

axios.put(
  'https://api.chatengine.io/users/',
  {username, secret},
  {headers: {'Private-key': 'a5a42b50-c097-4f6e-9c46-6140adb251c5'}}
)
  .then(r => router.push('/chats'))
}

  return (
    <div className='container w-screen h-screen'>
    <div className='max-w-sm max-h-max mx-auto my-auto grid place-content-center'>
      <div className='text-xl text-center p-2 '>ChatApp</div>
      <form className='bg-gray-600/75 rounded-md p-10 grid place-content-center' onSubmit={(e) => onSubmit(e)}>
      <div className='py-3'>
      <input className='bg-gray-600/75 text-white' placeholder='Email' onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className='py-3'>
      <input className='bg-gray-600/75 text-white' placeholder='Password' onChange={(e) => setSecret(e.target.value)}/>
      </div>
      <button className='rounded-md border border-white text-white bg-black p-1' type='submit'>Login / Sign Up</button>
      </form>
    </div>
    </div>
  )
}
