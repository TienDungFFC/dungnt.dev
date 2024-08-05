import { useEffect, useRef } from "react";

export default function UploadImage({
  setOpenCover,
}: {
  setOpenCover: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const uploadRef = useRef(null);

  const handleClickOutside = (e: any) => {
    console.log("click outside: ", e.target);
    if (uploadRef.current && !uploadRef.current?.contains(e.target)) {
      setOpenCover(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-[750px] fixed bg-white left-0 top-0 border-[1px] translate-x-[540px] translate-y-[275px] shadow-2xl rounded-xl z-50"
      onBlur={() => {
        console.log("openCover:");
        setOpenCover(false);
      }}
      ref={uploadRef}
    >
      <div className="py-2 px-2">
        <div className="flex gap-4">
          <button className="p-3">Upload</button>
          <button>Unsplash</button>
        </div>
        <div className="p-4">
          <div className="border-dotted h-[250px] w-full"></div>
        </div>
      </div>
    </div>
  );
}

function UploadBtn() {
  return <button></button>;
}
