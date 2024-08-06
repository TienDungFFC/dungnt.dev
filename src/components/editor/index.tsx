'use client';
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import { useEffect } from "react";

export default function Editor() {

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
      },
      placeholder: 'Type "/" for commands...'
    });
  }, []);


  return <div id="editorjs"></div>;
}
