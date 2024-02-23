'use client'
import { useEffect, useState } from "react";
import { fetcher } from "@/utils/fetcher";
import { Categories, CategoryItemType } from "./types";

const Categories = () => {
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
                <a href="#" className="inline-block font-bold relative p-1 text-lightMainText dark:text-lightPrimary rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Tất cả bài viết
                    <span className="after:content-[''] block after:absolute h-[4px] w-full bg-blueMain rounded-full mt-1"></span>
                </a>
            </li>
            {categories && categories.length > 0 && categories.map((category) => {
                return (
                    <li key={category.id} className="me-2">
                        <a href="#" className="inline-block text-blueSecondary relative p-1 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">{category.title}
                        </a>
                    </li>
                )
            })}
            {/* <li className="me-2">
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
            </li> */}
        </ul> 
        
    )
}

export default Categories