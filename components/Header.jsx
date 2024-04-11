import LoginModal from "./LoginModal"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/images/logo.png'
const Header = () => {
  return (
    <div className="relative z-40 w-full">

      <div className="max-w-6xl w-full mx-auto h-20 flex justify-between items-center">
        <div></div>
        <LoginModal />
      </div>

      <div className="w-full mx-auto mt-12 sm:mt-32">
      <Link href="/" className="flex justify-center ">
            <Image src={Logo.src} height={150} width={400} alt="logo" />
          </Link>
      </div>

    </div>
  )
}
export default Header