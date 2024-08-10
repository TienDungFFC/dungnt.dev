import { useRef } from "react";

export default function Upload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickBtn = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div className="p-4">
      <div className="h-[125px] border-[1px] rounded-xl border-dashed flex flex-col gap-4 justify-center items-center w-full p-4">
        <button
          className="border-[1px] py-1 px-3 flex justify-center items-center gap-2 rounded-2xl hover:bg-[#e2e8f0]"
          onClick={handleClickBtn}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Upload Image</span>
        </button>
        <p className="text-[#64748b]">Recommended dimension is 1600 x 840</p>
        <input
          type="file"
          hidden
          ref={inputRef}
          accept="image/avif, image/gif, image/jpeg, image/png, image/webp, image/bmp, image/x, image/tiff, image/vnd, image/xbm"
        />
      </div>
    </div>
  );
}
