'use client'
import { useState } from 'react';

import { FaChevronRight, FaComment, FaThumbsDown, FaThumbsUp, FaSearch } from 'react-icons/fa';
import Preview from '@/images/prev.webp'
import Results from '@/components/Results';
import Filters from './Filters';
import { toast } from 'react-toastify'


const mockSearchResults = [
        {
          "id": "1",
          "title": "Quantumly Secure Messenger",
          "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
          "tags": ["Communication", "Encryption", "Privacy", "Open Source", "Cross-Platform", "Tag1", "Tag2", "Tag3"],
          "likes": 70,
          "dislikes": 3,
          "comments": 10,
          "previewImage": Preview.src
        },
        {
          "id": "2",
          "title": "OpenSpace 3D",
          "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
          "tags": ["3D Modeling", "Open Source", "Design", "Graphics", "Tag1", "Tag2", "Tag3"],
          "likes": 90,
          "dislikes": 6,
          "comments": 20,
          "previewImage": Preview.src
        },
        {
          "id": "3",
          "title": "EcoTrack",
          "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
          "tags": ["Sustainability", "Environment", "Open Source", "Analytics", "Tag1", "Tag2", "Tag3"],
          "likes": 110,
          "dislikes": 9,
          "comments": 30,
          "previewImage": Preview.src
        },
        {
          "id": "4",
          "title": "CryptoVault",
          "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
          "tags": ["Security", "Cryptography", "Open Source", "Storage", "Tag1", "Tag2", "Tag3"],
          "likes": 130,
          "dislikes": 12,
          "comments": 40,
          "previewImage": Preview.src
        },
        {
          "id": "5",
          "title": "HealthBridge",
          "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
          "tags": ["Healthcare", "Open Source", "Data Sharing", "Privacy", "Tag1", "Tag2", "Tag3"],
          "likes": 150,
          "dislikes": 15,
          "comments": 50,
          "previewImage": Preview.src
        },
        {
          "id": "6",
          "title": "CodeComet",
          "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
          "tags": ["Development", "IDE", "Programming", "Open Source", "Tag1", "Tag2", "Tag3"],
          "likes": 170,
          "dislikes": 18,
          "comments": 60,
          "previewImage": Preview.src
        },
        {
          "id": "7",
          "title": "SkyMap",
          "description": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
          "tags": ["Astronomy", "Open Source", "Education", "Star Gazing", "Tag1", "Tag2", "Tag3"],
          "likes": 190,
          "dislikes": 21,
          "comments": 70,
          "previewImage": Preview.src
        },
     
]




const SearchBox = () => {


    const [search, setSearch] = useState({
        query: '',
        tags: [],

    });

    const [results, setResults] = useState([]);


    /// update input query for state
    const handleSearch = (id, state) => {

        const tags = state.split(' ');

        setSearch((prevState) => ({
            ...prevState,
            tags: tags,
            [`${id}`]: state
        }))
    }

    /// function to handle tags
    const handleTags = (modifiedTag, add) => {

        /// if empty tag
        if (!modifiedTag) { return; }
        if (typeof (modifiedTag) !== 'string') { return; } /// ts will resolve this

        /// copy tags
        let tags = search.tags.length === 0 ? [] : Array.from(search.tags);

        /// remove tags
        if (!add) {
            tags = tags.filter((tag) => tag !== modifiedTag);
        }

        /// add tags
        if (add) {
            tags.push(modifiedTag);
        }

        /// update state
        setSearch((prevState) => ({
            ...prevState,
            tags: tags
        }));

    }



    /// mock get results
    const getResults = () => {

        if(search.query.length === 0){
            toast.error('Please enter a search query.');
            setResults([])
            return;
        }
        setResults(mockSearchResults);
    }

    /// clear results
    const clearResults = () => {
        setResults([]);
    }





    return (
        <div className="w-full">

            {/* Search bar */}
            <div className="">
                <div className="mt-12 sm:flex justify-between gap-2">
                    <label className="sr-only">Enter a search query</label>
                    <input
                        type="text"
                        name="query"
                        onChange={(e) => handleSearch('query', e.target.value)}
                        value={search.query}
                        id="query"
                        className="h-16 sm:h-20 w-full text-xl font-press-start-2p border border-[#ACC156] bg-black block w-full rounded-md py-1.5 text-white shadow-sm placeholder:text-gray-400 text-sm  sm:leading-6"
                        placeholder="Enter A Search"
                    />
                    <button onClick={getResults} className="bg-black w-full sm:w-fit mt-6 sm:mt-0 h-12 sm:h-20 px-6 text-white flex items-center justify-center rounded-md border border-[#ACC156]">
                        <FaSearch className="w-6 h-6" />
                    </button>
                </div>
                <div className="mt-4">
                    <Filters search={search} handleTags={handleTags} />
                </div>
            </div>
            <div className="">
                {/* Results */}
                {results?.length > 0 && (
                <Results results={results} clearResults={clearResults} />
                )}

                {/* Map through the results */}
               
            </div>
        </div>
    )
}
export default SearchBox