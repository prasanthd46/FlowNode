"use client"
import React from 'react'
import {usePathname} from "next/navigation" 
import Link from 'next/link'
import {Separator} from "@/components/ui/separator"
type Props = {}
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { menuOptions } from '@/lib/constant'
import clsx from 'clsx'
import { ModeToggle } from '../ModeToggle'
const MenuOptions = (props: Props) => {
  const pathName = usePathname()
    return (
        <nav className="dark:bg-black h-full justify-between flex items-center flex-col gap-10 py-6 px-2">
            <div className="flex  items-center jusitfy-center flex-col gap-8">
                <Link
                className="flex font-bold flex-row"
                href="/"
                >
                    fuzzie.
                </Link>
                <TooltipProvider>
                    {
                        menuOptions.map((menuItem)=>
                            (<ul key={menuItem.name}>
                                <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link
                                            href={menuItem.href}
                                            className={clsx('group h-6 w-6 flex items-center justify-center scale-[1.5] rounded -lg p-[3px] cursor-pointer',{'dark:bg-[#2F006B] bg-[#EEE0FF]':pathName=== menuItem.href})}
                                        >
                                            <menuItem.Component selected={pathName === menuItem.href } />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent
                                side="right"
                                className="bg-black/30 backdrop-blue-xl px-[10px]"
                                >
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                                </Tooltip>
                            </ul>)
                        )
                    }
                </TooltipProvider>
                <Separator />
                <ModeToggle />
            </div>
        </nav>
        
  )
}

export default MenuOptions