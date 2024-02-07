import Image from "next/image";
import Link from "next/link";
import RobotPost from "~/assets/thumb-post-2.png"
import { MdDateRange } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

export default function Home() {
  return (
    <div className="container mx-auto w-full px-4 md:w-[60%]">
      <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a href="#" className="inline-block font-bold relative p-1 text-lightMainText dark:text-lightPrimary rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Tất cả bài viết
              <span className="after:content-[''] block after:absolute h-[4px] w-full bg-blueMain rounded-full mt-1"></span>
            </a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block text-blueSecondary relative p-1 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">CTDL & GT
            </a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block text-blueSecondary relative p-1 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Coding
            </a>            
          </li>
          <li className="me-2">
            <a href="#" className="inline-block text-blueSecondary relative p-1 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Database
            </a>            
          </li>
        </ul>
      </div>

      <div className="md:mt-[60px] mt-[40px]">
        <div className="flex-col justify-start gap-6 md:hidden">
          <div className="w-full md:w-[70%]">
            <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
              Mastering React Components: Building Reusable and Well-Organized UIs
            </h1>
            <div className="time flex justify-start items-start gap-6 my-4">
              <div className="flex justify-start items-center">
                <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">29/01/2024</span>
              </div>
              <div className="flex justify-start items-center">
                <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">5 phút truóc</span>
              </div>

            </div>
            <div className="description text-lightSubText dark:text-textMain">
              A Guide to Efficiently Harnessing the Power of React Components for Clean Code and Seamless Development · Introduction
            </div>
          </div>
          <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <Image src={RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
          </div>
        </div>

        <div className="hidden md:flex justify-start gap-6">
          <div className="w-full md:w-[70%]">
            <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
              Mastering React Components: Building Reusable and Well-Organized UIs
            </h1>
            <div className="time flex justify-start items-start gap-6 my-4">
              <div className="flex justify-start items-center">
                <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">29/01/2024</span>
              </div>
              <div className="flex justify-start items-center">
                <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">5 phút truóc</span>
              </div>

            </div>
            <div className="description text-lightSubText dark:text-textMain">
              A Guide to Efficiently Harnessing the Power of React Components for Clean Code and Seamless Development · Introduction
            </div>
          </div>
          <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <Image src={RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
          </div>
        </div>
      </div>

      <div className="md:mt-[60px] mt-[40px]">
        <div className="flex-col justify-start gap-6 md:hidden">
          <div className="w-full md:w-[70%]">
            <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
              Mastering React Components: Building Reusable and Well-Organized UIs
            </h1>
            <div className="time flex justify-start items-start gap-6 my-4">
              <div className="flex justify-start items-center">
                <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">29/01/2024</span>
              </div>
              <div className="flex justify-start items-center">
                <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">5 phút truóc</span>
              </div>

            </div>
            <div className="description text-lightSubText dark:text-textMain">
              A Guide to Efficiently Harnessing the Power of React Components for Clean Code and Seamless Development · Introduction
            </div>
          </div>
          <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <Image src={RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
          </div>
        </div>

        <div className="hidden md:flex justify-start gap-6">
          <div className="w-full md:w-[70%]">
            <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
              Mastering React Components: Building Reusable and Well-Organized UIs
            </h1>
            <div className="time flex justify-start items-start gap-6 my-4">
              <div className="flex justify-start items-center">
                <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">29/01/2024</span>
              </div>
              <div className="flex justify-start items-center">
                <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">5 phút truóc</span>
              </div>

            </div>
            <div className="description text-lightSubText dark:text-textMain">
              A Guide to Efficiently Harnessing the Power of React Components for Clean Code and Seamless Development · Introduction
            </div>
          </div>
          <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <Image src={RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
          </div>
        </div>
      </div>

      <div className="md:mt-[60px] mt-[40px]">
        <div className="flex-col justify-start gap-6 md:hidden">
          <div className="w-full md:w-[70%]">
            <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
              Mastering React Components: Building Reusable and Well-Organized UIs
            </h1>
            <div className="time flex justify-start items-start gap-6 my-4">
              <div className="flex justify-start items-center">
                <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">29/01/2024</span>
              </div>
              <div className="flex justify-start items-center">
                <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">5 phút truóc</span>
              </div>

            </div>
            <div className="description text-lightSubText dark:text-textMain">
              A Guide to Efficiently Harnessing the Power of React Components for Clean Code and Seamless Development · Introduction
            </div>
          </div>
          <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <Image src={RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
          </div>
        </div>

        <div className="hidden md:flex justify-start gap-6">
          <div className="w-full md:w-[70%]">
            <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
              Mastering React Components: Building Reusable and Well-Organized UIs
            </h1>
            <div className="time flex justify-start items-start gap-6 my-4">
              <div className="flex justify-start items-center">
                <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">29/01/2024</span>
              </div>
              <div className="flex justify-start items-center">
                <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">5 phút truóc</span>
              </div>

            </div>
            <div className="description text-lightSubText dark:text-textMain">
              A Guide to Efficiently Harnessing the Power of React Components for Clean Code and Seamless Development · Introduction
            </div>
          </div>
          <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <Image src={RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
          </div>
        </div>
      </div>
    </div>
  );
}
