
import Logo from '@/images/logo.png';
import Image from 'next/image';

import SearchBox from '@/components/SearchBox';




export default function Home() {

  return (
    <>

      {/* Container */}
      <div className="min-h-screen w-full flex items-center">
        <div className="max-w-6xl w-full mx-auto relative">

          {/* Logo */}
          <div className="flex justify-center ">
            <Image src={Logo.src} height={150} width={400} alt="logo" />
          </div>



          <div className="w-full">
    
              <SearchBox />
            

            {/* quick hack to enable scrollbar */}
            <div className="h-[200px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}