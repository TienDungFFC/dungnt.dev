'use client'
import { useEffect, useState } from "react";
import { fetcher } from "@/utils/fetcher";
import { Categories, CategoryItemType } from "./types";

interface Props {
    handleActiveCategory?: any
    cateActive?: string
}

const Categories = (props: Props) => {
    const [categories, setCategories] = useState<CategoryItemType[]>([])

    const fetchCategories = async () => {
        fetcher<Categories>('/api/categories')
        .then((categories) => {
            console.log("fetch cateogry", categories);
            setCategories(categories.data)
        })
        .catch((error) => {
          console.error("Can't fetch categories", error)
        })
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
                <a onClick={() => props.handleActiveCategory(null)} href="#" className={`inline-block font-bold relative p-1 text-lightMainText ${!props.cateActive ? 'dark:text-lightPrimary' : 'dark:text-blueSecondary'} rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}>Tất cả bài viết
                    {!props.cateActive && <span className="after:content-[''] block after:absolute h-[4px] w-full bg-blueMain rounded-full mt-1"></span>}
                </a>
            </li>
            {categories && categories.length > 0 && categories.map((category) => {
                return (
                    <li key={category.id} className="me-2">
                        <a onClick={() => props.handleActiveCategory(category.slug)} href="#" className={`inline-block font-bold relative p-1 text-lightMainText ${props.cateActive == category.slug ? 'dark:text-lightPrimary' : 'dark:text-blueSecondary'} rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}>{category.title}
                            {props.cateActive == category.slug && <span className="after:content-[''] block after:absolute h-[4px] w-full bg-blueMain rounded-full mt-1"></span>}
                        </a>
                    </li>
                )
            })}
        </ul> 
        
    )
}

export default Categories