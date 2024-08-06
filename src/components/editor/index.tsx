"use client";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect, useRef } from "react";

export default function Editor() {
  const isReady = useRef(false);

  useEffect(() => {
    if (!isReady.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
        },
        placeholder: 'Type "/" for commands...',
      });
      isReady.current = true;
    }
  }, []);

  return <div id="editorjs"></div>;
}
