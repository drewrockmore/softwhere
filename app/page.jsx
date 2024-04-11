
import Logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from '@/components/SearchBox';




export default function Home() {

  return (
    <>

      {/* Container */}
      <div className="h-full w-full flex items-center">
        <div className="max-w-6xl w-full mx-auto relative">
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