
import Logo from '@/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { mockSearchResults } from '../libs/constants';

import { FaArrowLeft, FaComment, FaThumbsDown, FaThumbsUp, FaSearch } from 'react-icons/fa';
import CommentModal from '@/components/CommentModal';


const SoftwarePage = ({ params }) => {

  const softwareId = params?.id[0];

  const result = mockSearchResults.find((item) => item.id === softwareId);


  return (
    <>

      {/* Container */}
      <div className="h-full w-full flex items-center">
        <div className="max-w-6xl w-full mx-auto relative">

          <div className="w-full mt-12">

            {/* Top Arrow with likes, dislikes, comment counts */}
            <div className="relative mb-4 flex gap-6">
              <Link href="/" >
                <div className="flex items-center justify-center rounded-md p-2 w-fit text-primary bg-black/50 border border-primary">
                  <FaArrowLeft className="w-4 h-4" />
                </div>
              </Link>

              <div className="flex gap-6">
                <div className="flex gap-2 items-center">
                  <div className="font-press-start-2p text-white ">{result?.likes}</div>
                  <FaThumbsUp className="h-5 w-5 text-[#ACC156]" />
                </div>
                <div className="flex gap-2 items-center">
                  <div className="font-press-start-2p text-white">{result?.dislikes}</div>
                  <FaThumbsDown className="h-5 w-5 text-red-500" />
                </div>
                <div className="flex gap-2 items-center">
                  <div className="font-press-start-2p text-white">{result?.comments}</div>
                  <FaComment className="h-5 w-5 text-blue-500" />
                </div>
              </div>
            </div>


            {/* column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className=" w-full bg-black border border-primary text-white rounded-md">

                  {/* Content section description and padding */}
                  <div className="p-4 sm:p-10">
                    {/* Result content section */}
                    <div className="w-fit">
                      <div className="font-press-start-2p text-xl sm:text-2xl mb-6">{result?.title}</div>



                      <div className="space-y-6">
                        <p>{result?.description}</p>


                        <div className="">
                          <div className="text-xl font-bold pb-4">Features</div>
                          <ul className="list-disc line-inside ml-6 text-primary space-y-4">
                            <li><span className="text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</span></li>
                            <li><span className="text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</span></li>
                            <li><span className="text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</span></li>
                          </ul>
                        </div>

                        <div className="">
                          <div className="text-xl font-bold pb-4">Specifics</div>

                          <table className="w-full">
                            <tbody>
                              <tr className="m-0 border-t p-0 even:bg-muted">
                                <td className="border border-primary/50 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                  A simple headless table
                                </td>
                                <td className="border border-primary/50 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                  for displaying more data
                                </td>
                              </tr>
                              <tr className="m-0 border-t p-0 even:bg-muted">
                                <td className="border border-primary/50 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                  A simple headless table
                                </td>
                                <td className="border border-primary/50 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                  for displaying more data
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* <div className="relative">
                    <div className="absolute h-[400px] bottom-0 w-full bg-gradient-to-t from-black z-10" />

                    <div className="w-full flex items-center justify-center relative z-40">
                      <div className="w-fit text-center text-white font-press-start-2p  border border-primary rounded-md p-3 text-xs">
                        View Full Description
                        </div>
                    </div>
                  </div> */}


                  <div className="my-6 mt-12 w-full  p-4 sm:p-10 relative text-wrap">
                    <div className="font-press-start-2p text-xl sm:text-xl mb-6">Where To Download</div>
                    <div className="relative w-full text-wrap relative">

                      <ul className="list-disc line-inside ml-6 text-white space-y-4 w-full text-pretty pr-4 sm:pr-0">
                        <li><span className="text-primary underline underline-offset-4 text-pretty break-words">https://www.theSoftwareWebsite.com/downloads</span></li>
                      </ul>
                    </div>



                  </div>
                </div>


                <div className="sm:hidden rounded-md  mt-6 sm:px-6 space-y-6">

<div className="flex gap-4">
  <div className="w-full bg-black rounded-md p-2 py-3 border border-primary">
    <div className="flex gap-2 items-center justify-center">
      <FaThumbsUp className="h-5 w-5 text-[#ACC156]" />
    </div>
  </div>

  <div className="w-full bg-black rounded-md p-2 py-3 border border-red-500">
    <div className="flex gap-2 items-center justify-center">
      <FaThumbsDown className="h-5 w-5 text-red-500" />
    </div>
  </div>
</div>

<div className="bg-black border border-primary p-6 rounded-md">

  <div className="font-press-start-2p text-white mb-6">Tags</div>

  <div className="flex flex-wrap gap-2">
    {result?.tags?.map((tag, index) => (
      <div key={index} className="border border-primary text-xs text-white p-2 rounded-full">{tag}</div>
    ))}
  </div>

</div>



<button className="w-full bg-black rounded-md border border-primary p-2 text-white font-press-start-2p text-xs py-3">Report A Problem</button>





</div>


                <div className="w-full py-6 text-white rounded-md">


                  <div className="mt-10 relative h-full mb-6">
                    <div className="flex items-center justify-between">
                      <div className="font-press-start-2p text-lg text-white">{result?.comments} Comments</div>
                      <div className="flex items-center gap-2 bg-black rounded-md p-2 border border-primary font-press-start-2p text-xs">
                        <CommentModal>

                          Add A Comment <FaComment className="h-5 w-5 text-blue-500" />
                        </CommentModal>
                      </div>
                    </div>
                  </div>



                  <div className="w-full bg-black rounded-md border border-primary p-6 ">
                    <div className="w-full flex justify-between">
                      <div className="text-white font-press-start-2p">User Name</div>
                      <div className="text-slate-400  text-sm">05/05/2024</div>
                    </div>

                    <div className="mt-6">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.

                    </div>
                  </div>




                </div>



              </div>

              <div className="hidden sm:block rounded-md sm:px-6 space-y-6">

                <div className="flex gap-4">
                  <div className="w-full bg-black rounded-md p-2 py-3 border border-primary">
                    <div className="flex gap-2 items-center justify-center">
                      <FaThumbsUp className="h-5 w-5 text-[#ACC156]" />
                    </div>
                  </div>

                  <div className="w-full bg-black rounded-md p-2 py-3 border border-red-500">
                    <div className="flex gap-2 items-center justify-center">
                      <FaThumbsDown className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                </div>

                <div className="bg-black border border-primary p-6 rounded-md">

                  <div className="font-press-start-2p text-white mb-6">Tags</div>

                  <div className="flex flex-wrap gap-2">
                    {result?.tags?.map((tag, index) => (
                      <div key={index} className="border border-primary text-xs text-white p-2 rounded-full">{tag}</div>
                    ))}
                  </div>

                </div>



                <button className="w-full bg-black rounded-md border border-primary p-2 text-white font-press-start-2p text-xs py-3">Report A Problem</button>





              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SoftwarePage