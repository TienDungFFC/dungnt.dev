import { MdDateRange } from "react-icons/md";

export default function PublishDate({publish_at}: {publish_at: string}) {
    return (
        <div className="flex justify-start items-center">
            <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">{publish_at}</span>
        </div>
    )
}

