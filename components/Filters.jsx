'use client'

import { useState } from "react"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Tag from "./Tag";
import { toast } from 'react-toastify'
import SelectBox from "./SelectBox";



const languages = [
  'Any',
  'C++',
  'Python',
  'Javascript',
  'Java',
  '...'
]

const operatingSystem = [
  'Any',
  'Windows',
  'Linux',
  'Mac',
]

const deviceTypes = [
  'Any',
  'Computer',
  'Phone',
]



const Filters = ({ search, handleTags }) => {

  const [showRefine, setShowRefine] = useState(false);

  const [tagState, setTagState] = useState('');

  const handleNewTag = () => {

    if (tagState.length === 0) {
      return toast.error('Please enter a tag.')
    }
    handleTags(tagState, true);
    setTagState('');
    toast.success('Tag Added!');
  }

  const removeTag = (tag) => {
    handleTags(tag, false);
    toast.success('Tag Removed');
  }

  const handleRefine = () => setShowRefine((prevState) => !prevState);

  return (

    <div className="">
      <button onClick={handleRefine} className="text-[#ACC156] text-sm sm:text-base font-press-start-2p flex justify-between items-center gap-2">
        Refine

        {showRefine ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4" />}

      </button>


      {showRefine && (

        <div className="w-full h-full bg-black/20 p-6 text-white rounded-md mt-6 mb-12 relative">

          <button onClick={handleRefine} className="absolute top-2 right-2 rounded-full h-6 w-6 flex items-center justify-center hover:text-red-600 font-press-start-2p">X</button>
          <section>
            <div className="font-press-start-2p text-lg mb-4">Tags</div>

            {search?.tags?.length === 0 && (
              <div className="text-slate-500">No tags to display.</div>
            )}

            {search?.tags?.length > 0 && (
              <div className="flex gap-2">
                {search.tags?.map((tag, index) =>
                  <Tag key={index}>
                    <button onClick={() => removeTag(tag)} className="absolute -top-3 -right-2 bg-red-500 rounded-full h-6 w-6 flex items-center justify-center hover:bg-red-900">x</button>
                    {tag}
                  </Tag>
                )}
              </div>
            )}

            <div className="w-[200px] mt-4">
              <label htmlFor="tagInput" className="block text-sm font-medium leading-6 text-white">
                Add a tag
              </label>
              <div className="mt-2 flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  </div>
                  <input
                    type="text"
                    name="tagInput"
                    id="tagInput"
                    value={tagState}
                    onChange={(e) => setTagState(e.target.value)}
                    className="block w-full rounded-none rounded-l-md py-1.5  ring-0 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-[#ACC156]
            border border-[#ACC156] bg-black text-white shadow-sm text-sm  sm:leading-6"
                    placeholder="Open Source"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNewTag}
                  className="text-white relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold ring-0 border-[#ACC156] border ring-inset ring-gray-300 hover:text-[#ACC156] hover:bg-black"
                >

                  Add
                </button>
              </div>
            </div>

          </section>
          <section>
            <div className="font-press-start-2p text-lg mb-4 mt-6">Filters</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">


             <SelectBox title="Programming Language" options={languages} />
             <SelectBox title="Operating System" options={operatingSystem} />
             <SelectBox title="Device Type" options={deviceTypes} />
            </div>
          </section>
        </div>




      )}


    </div >






  )
}
export default Filters