import SwitchMode from "../switch-mode";
import Image from "next/image";
import Logo from "~/assets/robot.png";
import { IoIosMail } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-primary dark:bg-primary h-[152px] md:!h-[108px] flex items-center">
      <div className="container max-w-screen-xl mx-auto md:flex justify-between items-center gap-2 hidden">
        <div className="flex justify-center items-center">
          <Image
            src={Logo}
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <strong className="ml-2 text-white">Nygma</strong>
        </div>
        <form className="flex-1 hidden md:block">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block mx-auto w-[70%] p-4 rounded-full text-sm text-white bg-secondary focus:ring-secondary dark:bg-secondary dark:text-white"
              placeholder="Tìm kiếm bài viết..."
              required
            />
            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">                            
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.04939 16.0918C9.837 16.0918 11.5735 15.4954 12.9838 14.3969L18.3045 19.7176C18.7019 20.1014 19.3353 20.0904 19.7191 19.6929C20.0936 19.3052 20.0936 18.6906 19.7191 18.3029L14.3985 12.9822C17.1243 9.47345 16.4895 4.41937 12.9807 1.69362C9.47196 -1.03214 4.41792 -0.397406 1.69217 3.11138C-1.03359 6.62016 -0.398856 11.6742 3.10993 14.4C4.52254 15.4974 6.26061 16.0927 8.04939 16.0918ZM3.7743 3.77268C6.13539 1.41154 9.96347 1.4115 12.3246 3.77259C14.6857 6.13368 14.6858 9.96176 12.3247 12.3229C9.9636 14.684 6.13552 14.6841 3.77439 12.323L3.7743 12.3229C1.41322 9.979 1.3993 6.16488 3.74319 3.80379L3.7743 3.77268Z" fill="#328AF1"/>
                            </svg>
                        </button> */}
          </div>
        </form>

        <div className="flex gap-2">
          <SwitchMode />
          <div className="p-2 bg-secondary w-11 h-11 flex items-center justify-center rounded-full">
            <IoIosMail size={"1.25em"} color="#328AF1" />
          </div>
          <div className="p-2 bg-secondary w-11 h-11 flex items-center justify-center rounded-full">
            <CiMenuFries size={"1.25em"} color="#328AF1" />
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="container px-4 md:max-w-screen-xl mx-auto md:hidden justify-between items-center gap-2 flex">
          <div className="flex justify-center items-center">
            <Image
              src={Logo}
              alt="logo"
              className="rounded-full w-11 h-11 md:w-[60px] md:h-[60px]"
            />
            <strong className="ml-2">DungNT</strong>
          </div>

          <div className="flex gap-2">
            <SwitchMode />
            <div className="p-2 bg-secondary w-11 h-11 flex items-center justify-center rounded-full">
              <IoIosMail size={"1.25em"} color="#328AF1" />
            </div>
            <div className="p-2 bg-secondary w-11 h-11 flex items-center justify-center rounded-full">
              <CiMenuFries size={"1.25em"} color="#328AF1" />
            </div>
          </div>
        </div>
        <form className="w-full mt-4">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block mx-auto w-[95%] py-2 px-4 rounded-full text-sm text-white bg-secondary focus:ring-secondary dark:bg-secondary dark:text-white"
              placeholder="Tìm kiếm bài viết..."
              required
            />
            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">                            
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.04939 16.0918C9.837 16.0918 11.5735 15.4954 12.9838 14.3969L18.3045 19.7176C18.7019 20.1014 19.3353 20.0904 19.7191 19.6929C20.0936 19.3052 20.0936 18.6906 19.7191 18.3029L14.3985 12.9822C17.1243 9.47345 16.4895 4.41937 12.9807 1.69362C9.47196 -1.03214 4.41792 -0.397406 1.69217 3.11138C-1.03359 6.62016 -0.398856 11.6742 3.10993 14.4C4.52254 15.4974 6.26061 16.0927 8.04939 16.0918ZM3.7743 3.77268C6.13539 1.41154 9.96347 1.4115 12.3246 3.77259C14.6857 6.13368 14.6858 9.96176 12.3247 12.3229C9.9636 14.684 6.13552 14.6841 3.77439 12.323L3.7743 12.3229C1.41322 9.979 1.3993 6.16488 3.74319 3.80379L3.7743 3.77268Z" fill="#328AF1"/>
                            </svg>
                        </button> */}
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
