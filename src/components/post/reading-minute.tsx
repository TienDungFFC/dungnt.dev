import { MdAccessTime } from "react-icons/md";

export default function ReadingMinute({reading_minute}: {reading_minute: number}) {
    return (
        <div className="flex justify-start items-center">
            <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">{reading_minute} phút đọc</span>
        </div>
    )
}

