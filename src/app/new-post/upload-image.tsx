import Cover from "@/components/icons/cover";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

interface Tab {
  name: string;
  component: React.ReactNode;
}

const tabs: Tab[] = [
  {
    name: "Upload",
    component: (
      <>
        <h1>Upload</h1>
      </>
    ),
  },
  {
    name: "Unsplash",
    component: (
      <>
        <h1>Unsplash</h1>
      </>
    ),
  },
];

export default function UploadImage() {
  const uploadRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [openCover, setOpenCover] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleClickOutside = (e: any) => {
    if (
      uploadRef.current &&
      !uploadRef.current?.contains(e.target) &&
      !btnRef.current?.contains(e.target)
    ) {
      setOpenCover(false);
    }
  };

  const handleTriggerCover = () => {
    setOpenCover(!openCover);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (uploadRef.current) {
        const btnRect = btnRef?.current?.getBoundingClientRect();
        uploadRef.current.style.transform = `translate(${btnRect?.left}px, ${
          275 - scrollY
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (uploadRef.current && btnRef.current && openCover) {
      const btnRect = btnRef.current.getBoundingClientRect();
      uploadRef.current.style.transform = `translate(${btnRect.left}px, ${
        275 - window.scrollY
      }px)`;
    }
  }, [openCover]);

  return (
    <>
      <button
        className="py-2 px-3 flex items-center gap-1 text-black hover:bg-[#f1f5f9] rounded-3xl"
        onClick={handleTriggerCover}
        ref={btnRef}
      >
        <Cover />
        <span className="min-w-[80px]">Add Cover</span>
      </button>
      {openCover && (
        <div
          className="w-[750px] fixed bg-white left-0 top-0 border-[1px] translate-y-[275px] shadow-2xl rounded-xl z-50 "
          ref={uploadRef}
        >
          <div className="border-b-[1px] flex relative">
            <div className="flex gap-4 py-2 px-4">
              {tabs.map((tab, i) => (
                <UploadBtn
                  key={i}
                  active={i == activeTab}
                  tabIndex={i}
                  setActive={setActiveTab}
                >
                  {tab.name}
                </UploadBtn>
              ))}
            </div>
            <div className="absolute h-full right-0 top-0 inline-flex justify-center items-center p-2">
              <button className=" rounded-2xl py-2 px-4 hover:bg-[#e2e8f0]" onClick={handleTriggerCover}>
                <Cross1Icon />
              </button>
            </div>

          </div>
          <div className="p-4">
            <div className="border-dotted h-[250px] w-full"></div>
          </div>
        </div>
      )}
    </>
  );
}

function UploadBtn({
  children,
  active,
  setActive,
  tabIndex,
}: {
  children: ReactNode;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<number>>;
  tabIndex: number;
}) {
  const handleActive = () => {
    if (setActive) {
      setActive(tabIndex);
    }
  };

  return (
    <button
      className={`z-50 p-2 relative rounded-lg font-normal hover:bg-[#e2e8f0] ${
        active
          ? "border-b-blue-200 text-[#2563eb] after:content-[''] after:h-[2px] after:w-full after:absolute after:bg-[#2553eb] after:bottom-[-8px] after:left-0"
          : ""
      }`}
      onClick={handleActive}
    >
      {children}
    </button>
  );
}
