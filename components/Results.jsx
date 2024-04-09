'use client'

import { useState } from "react";
import Link from 'next/link';
import { FaChevronRight, FaComment, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

const ResultsHeader = ({ results, clearResults }) => {

  const [showRefine, setShowRefine] = useState(false);

  const handleRefine = () => setShowRefine((prevState) => !prevState);

  if (results?.length > 0) return (

    <div className="mt-24">

      {/* Result info / refine button */}
      <div className="flex justify-between items-center mb-12">
        <div className="text-white text-sm sm:text-xl font-press-start-2p">
          {results?.length} Results Found
        </div>

        <button onClick={clearResults} className="text-white font-press-start-2p text-xs font-light text-red-500 ">Clear Results</button>
      </div>

      <div className="relative z-40 grid grid-cols-1 gap-6">
        {results?.map((result, index) => (
          <div key={result.id} className="bg-black/50 rounded-md p-6 text-white">
            <div className="sm:flex justify-between gap-12">

              {/* Result content section */}
              <div className="w-fit">
                <div className="font-press-start-2p text-lg mb-6">{result.title}</div>
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

            {/* View button */}
            <Link href={`/${result.id}/${result.title.toLowerCase().split(' ').join('-')}`} 
            className="w-fit mt-6 bg-black p-2 sm:p-4 border border-[#ACC156] rounded-md font-press-start-2p text-xs flex items-center gap-2 hover:border-white hover:text-primary z-40 relative"> View <FaChevronRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

    </div>






  )
}
export default ResultsHeader