"use client"

import React, { useState, useMemo, useEffect } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { FaImage } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { fetcher } from '@/utils/fetcher';
import dynamic from "next/dynamic";
import { TagsInput } from "react-tag-input-component";
import CustomSelect from '@/components/select';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

  
const NewPost = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<ReactQuill.Value>();
    const [title, setTitle] = useState('');
    const [thumb, setThumb] = useState<File>(); 
    const [category, setCategory] = useState();
    const [listCategory, setListCategory] = useState([]);
    const [tags, setTags] = useState<string[]>([]);

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
    const handleSubmit = async () => {
        console.log("handle: ", thumb)
        
        const res = await fetcher('api/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                thumb,
                content: value,
                category,
                tags,
                status: 1,
            })
        })
    }

    const handleFile = (e: React.FormEvent) => {
        const files = (e.target as HTMLInputElement).files

        if (files && files.length > 0) {
            setThumb(files[0])
        }
    }

    const handleSelectChange = (value: any) => {
        console.log('Selected:', value);
        setCategory(value)
    };
    
    const fetchData = () => {
        fetch('http://localhost:8081/api/categories')
        .then((list) => {
            return list.json();
        })
        .then((cates) => {
            const categories = cates.data
            const cateResults = []
            for (const category of categories) {
                cateResults.push({
                    value: category.id,
                    label: category.title
                })
            }
            setListCategory(cateResults)
        })
        .catch((error) => {
            console.error("Can't fetch categories", error)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container mx-auto relative flex-col justify-start'>
            <CustomSelect options={listCategory} onChange={handleSelectChange} />
            <input type="text" placeholder='Title' className='p-12 w-full text-3xl border-none outline-none bg-transparent' onChange={e => setTitle(e.target.value)}/>
            <input type="file" className='file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50
            bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60' onChange={handleFile}/>
            <div className="editor flex gap-5 h-[700px] mt-4 relative">
                <button className='button flex' onClick={() => setOpen(!open)}>
                    <CiCirclePlus className='w-9 h-9 rounded-full cursor-pointer'/>
                </button>
                {open && (
                    <div className='add flex gap-5 absolute w-full left-14'>
                        <button className="addButton">
                            <FaImage className='w-9 h-9 rounded-full cursor-pointer'/>
                        </button>
                        <button className="addButton">
                            <GoLinkExternal className='w-9 h-9 rounded-full cursor-pointer'/>
                        </button>
                        <button className='addButton'>
                            <FaCode className='w-9 h-9 rounded-full cursor-pointer'/>
                        </button>
                    </div>
                )}
                <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder='Tell your story...' className='w-full'/>

            </div>
            <TagsInput
                value={tags}
                onChange={setTags}
                name="fruits"
                placeHolder="enter fruits"
            />
            <button className='absolute top-0 right-5 px-5 py-3 border-none text-white bg-lightgreen rounded-full cursor-pointer' onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default NewPost