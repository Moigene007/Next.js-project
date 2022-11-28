import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <>
    
    <nav>
      <div className="logo">
        <Link href='/'><Image src='/logo.png' alt='company logo' width={70} height={50}/></Link>
      </div>
      <ul>
        <Link href='/'><li>Homepage</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/ninjas'><li>NinjaList</li></Link>
      </ul>
    </nav>
    </>
  )
}

export default Navbar;
