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
export interface TagOption {
  readonly value: string;
  readonly label: string;
}

const NewPost = () => {
  const editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: Header,
    },
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<ReactQuill.Value>();
  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState<File>();
  const [category, setCategory] = useState();
  const [listCategory, setListCategory] = useState([]);
  const [tags, setTags] = useState<TagOption[]>([]);

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
        categoryId: category,
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

  const handleSelectChange = (value: any) => {
    setCategory(value);
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

  const handleChangeTags = (inputValue: any) => {
    setTags([...tags, ...inputValue]);
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
      <div className="max-w-[900px] m-auto mt-5">
        <input
          type="text"
          placeholder="Title"
          className="p-4 w-full text-3xl border-none outline-none bg-transparent font-bold"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div id="editorjs"></div>
      </div>
    </div>
  );
};

export default NewPost;
