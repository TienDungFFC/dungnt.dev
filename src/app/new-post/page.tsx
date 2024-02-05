"use client"

import React, { useState, useMemo } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { FaImage } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";
import { fetcher } from '@/utils/fetcher';
import dynamic from "next/dynamic";

const NewPost = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<ReactQuill.Value>();
    const [title, setTitle] = useState('');
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
    const handleSubmit = async () => {
        console.log("handle")
        const res = await fetcher('api/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content: value,
                status: 1,
            })
        })
        
    }

    return (
        <div className='container mx-auto relative'>
            <input type="text" placeholder='Title' className='p-12 text-3xl border-none outline-none bg-transparent' onChange={e => setTitle(e.target.value)}/>
            <div className="editor flex gap-5 h-[700px] relative">
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
            <button className='absolute top-0 right-5 px-5 py-3 border-none text-white bg-lightgreen rounded-full cursor-pointer' onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default NewPost