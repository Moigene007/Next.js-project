import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


function NotFound() {

  const router = useRouter();

  useEffect(()=>{
    setTimeout(()=> {
      router.push('/');
    }, 3000)
  }, [])
  return (
    <div className='notfound'>
      <h1>0ooops...</h1>
      <h2>This page cannot be found</h2>
      <p>Go back to <Link href='/'>Homepage</Link></p>
    </div>
  )
}

export default NotFound
