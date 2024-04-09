
import Logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { mockSearchResults } from '../libs/constants';

import { FaArrowLeft, FaComment, FaThumbsDown, FaThumbsUp, FaSearch } from 'react-icons/fa';


const SoftwarePage = ({ params }) => {

  const softwareId = params?.id[0];

  const result = mockSearchResults.find((item) => item.id === softwareId);


  return (
    <>

      {/* Container */}
      <div className="min-h-screen w-full flex items-center">
        <div className="max-w-6xl w-full mx-auto relative">

          {/* Logo */}
          <Link href="/" className="flex justify-center ">
            <Image src={Logo.src} height={150} width={400} alt="logo" />
          </Link>



          <div className="w-full mt-12">

            <div className="relative mb-4 ">
              <Link href="/" >
                <div className="flex items-center justify-center rounded-md p-2 w-fit text-primary bg-black/50 border border-primary">
                  <FaArrowLeft className="w-4 h-4" />
                </div>
              </Link>
            </div>

            <div className="w-full bg-black border border-primary p-6 sm:p-10 text-white rounded-md">

            <div className="sm:flex justify-between gap-12">

              {/* Result content section */}
              <div className="w-fit">
                <div className="font-press-start-2p text-xl sm:text-2xl mb-6">{result.title}</div>
                <p>{result.description}</p>

                {/* Map through tags */}
                <div className="flex flex-wrap gap-4 mt-10">
                  {result.tags.map((tag, index) => (
                    <div key={index} className="border border-green-300/50 text-xs text-white p-2 rounded-full">{tag}</div>
                  ))}

                </div>


                {/* Likes dislikes comments */}
                <div className="mt-10 relative h-full">
                  <div className="flex justify-between">
                    <div className="flex gap-6">
                      <div className="flex gap-2 items-center">
                        <div className="font-press-start-2p ">{result.likes}</div>
                        <FaThumbsUp className="h-5 w-5 text-[#ACC156]" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="font-press-start-2p">{result.dislikes}</div>
                        <FaThumbsDown className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="font-press-start-2p">{result.comments}</div>
                        <FaComment className="h-5 w-5 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Images */}
              <div className="hidden sm:block w-[500px]">
                <img src={result.previewImage} className="h-[300px] w-[500px] rounded-md" />
              </div>
            </div>



            {/* quick hack to enable scrollbar */}
            <div className="h-[200px]"></div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
export default SoftwarePage