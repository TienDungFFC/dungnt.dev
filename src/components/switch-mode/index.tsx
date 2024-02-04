'use client'

import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function SwitchMode() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  if (resolvedTheme === 'dark') {
    return (
      <div className="p-2 bg-secondary w-11 h-11 flex items-center justify-center rounded-full">
        <MdSunny onClick={() => setTheme('light')} size={'1.25em'} color="#328AF1"/>
      </div>
      )
    
  }

  if (resolvedTheme === 'light') {
    return (
      <div className="p-2 bg-secondary w-11 h-11 flex items-center justify-center rounded-full">
        <BsMoonStarsFill onClick={() => setTheme('dark')} size={'1.25em'} color="#328AF1"/>
      </div>
    )
  }

}