import React from 'react'
import {Button} from '../utils'
import { useRouter } from 'next/router'

export default function ErrorPage () {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center justify-center w-screen my-8'>
      <h1 className='font-extrabold text-lg uppercase mb-3'>404! Not found this page</h1>
      <Button onClick={() => router.push('/')}>Back to home</Button>
    </div>
  )
}
