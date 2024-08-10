import { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Cross1Icon } from "@radix-ui/react-icons";
const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isInput, setIsInput] = useState(false);
  return (
    <div className="flex justify-between gap-2">
      <div className="flex-1">
        <div
          className={`rounded-3xl relative w-full border-[1px] ${
            isFocus ? "border-[#2563eb]" : ""
          } `}
        >
          <input
            type="text"
            placeholder="Type something and press enter"
            className="p-[8px_48px_8px_32px] outline-none rounded-full w-full"
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
            onInput={() => setIsInput(true)}
          />
          <MagnifyingGlassIcon className="absolute top-[50%] translate-y-[-50%] left-3 text-2xl" />
          {isInput && (
            <Cross1Icon className="absolute right-3 top-[50%] translate-y-[-50%]" />
          )}
        </div>
      </div>
      <button className="rounded-3xl py-2 px-4 bg-[#2563eb] text-white font-bold">
        Search
      </button>
    </div>
  );
};

export default Search;
