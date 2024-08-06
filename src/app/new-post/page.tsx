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
          <UploadImage />
        </div>
        <input
          value={title}
          type="text"
          placeholder="Title"
          className="py-4 w-full text-3xl border-none outline-none bg-transparent font-bold"
          onChange={handleChangeTitle}
        />
        <Editor />
      </div>
    </div>
  );
};

export default NewPost;
