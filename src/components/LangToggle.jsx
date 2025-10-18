"use client"

import * as React from "react"
import { useContext } from "react"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CardContext } from '@/app/contexts/cardContext';

export function LangToggle() {
    const { setLang } = useContext(CardContext);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="cursor-pointer">
                    <Languages className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => { setLang("en") }} className="cursor-pointer">
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setLang("it") }} className="cursor-pointer">
                    Italian
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}