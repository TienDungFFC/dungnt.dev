"use client";

import React, { useState, useMemo, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { FaImage } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { fetcher } from "@/utils/fetcher";
import dynamic from "next/dynamic";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import Editor from "@/components/editor";
import Cover from "@/components/icons/cover";
import UploadImage from "./upload-image";
export interface TagOption {
  readonly value: string;
  readonly label: string;
}

const NewPost = () => {
  const [value, setValue] = useState<ReactQuill.Value>();
  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState<File>();
  const [tags, setTags] = useState<TagOption[]>([]);
  const [openCover, setOpenCover] = useState<boolean>(false);

  const handleSubmit = async () => {
    const res = await fetcher("api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        thumb,
        content: value,
        tags,
        status: 1,
      }),
    });
  };

  const handleFile = (e: React.FormEvent) => {
    const files = (e.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      setThumb(files[0]);
    }
  };

  const fetchData = () => {
    fetch("http://localhost:8081/api/categories")
      .then((list) => {
        return list.json();
      })
      .then((cates) => {
        const categories = cates.data;
        const cateResults = [];
        for (const category of categories) {
          cateResults.push({
            value: category.id,
            label: category.title,
          });
        }
        setListCategory(cateResults);
      })
      .catch((error) => {
        console.error("Can't fetch categories", error);
      });
  };

  const handleChangeTitle = (e: any) => {
    console.log("e.current: ", e.currentTarget.value);
    setTitle(e.currentTarget.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto relative flex-col justify-start">
      <header className="flex justify-end gap-3">
        <button className="px-4 py-2 border rounded-full">Preview</button>
        <button
          className="px-4 py-2 border-none text-white bg-lightgreen rounded-full cursor-pointer"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </header>
      <div className="max-w-[650px] m-auto mt-5">
        <div className="flex">
          <button
            className="py-2 px-3 flex items-center gap-1 text-black hover:bg-[#f1f5f9] rounded-3xl"
            onClick={() => setOpenCover(!openCover)}
          >
            <svg
              fill="#000000"
              height="18px"
              width="18px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 58 58"
            >
              <g>
                <path d="M57,6H1C0.448,6,0,6.447,0,7v44c0,0.553,0.448,1,1,1h56c0.552,0,1-0.447,1-1V7C58,6.447,57.552,6,57,6z M56,50H2V8h54V50z" />
                <path
                  d="M16,28.138c3.071,0,5.569-2.498,5.569-5.568C21.569,19.498,19.071,17,16,17s-5.569,2.498-5.569,5.569
		C10.431,25.64,12.929,28.138,16,28.138z M16,19c1.968,0,3.569,1.602,3.569,3.569S17.968,26.138,16,26.138s-3.569-1.601-3.569-3.568
		S14.032,19,16,19z"
                />
                <path
                  d="M7,46c0.234,0,0.47-0.082,0.66-0.249l16.313-14.362l10.302,10.301c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414
		l-4.807-4.807l9.181-10.054l11.261,10.323c0.407,0.373,1.04,0.345,1.413-0.062c0.373-0.407,0.346-1.04-0.062-1.413l-12-11
		c-0.196-0.179-0.457-0.268-0.72-0.262c-0.265,0.012-0.515,0.129-0.694,0.325l-9.794,10.727l-4.743-4.743
		c-0.374-0.373-0.972-0.392-1.368-0.044L6.339,44.249c-0.415,0.365-0.455,0.997-0.09,1.412C6.447,45.886,6.723,46,7,46z"
                />
              </g>
            </svg>
            <span className="min-w-[80px]">Add Cover</span>
          </button>
        </div>
        <input
          value={title}
          type="text"
          placeholder="Title"
          className="p-4 w-full text-3xl border-none outline-none bg-transparent font-bold"
          onChange={handleChangeTitle}
        />
        <Editor />
      </div>
      {openCover && <UploadImage setOpenCover={setOpenCover} />}
    </div>
  );
};

export default NewPost;
