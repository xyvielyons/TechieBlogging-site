"use client"
import { FaUser } from "react-icons/fa"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger

} from "@/components/ui/dropdown-menu"

import {
Avatar,
AvatarFallback,
AvatarImage
} from "@/components/ui/avatar"
import { useCurrentUser } from "@/hooks/use-current-user"
import { LogoutButton } from "@/components/auth/logout-button"
import { ExitIcon } from "@radix-ui/react-icons"

export const UserButton = ()=>{
    const user = useCurrentUser()
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                <AvatarImage src={user?.image || ""}/>
                <AvatarFallback className="bg-accentcolor">
                    <FaUser className="text-white"/>

                </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                <LogoutButton>
                    <DropdownMenuItem>
                        <ExitIcon className="h-4 w-4 mr-2"></ExitIcon>
                        Logout
                    </DropdownMenuItem>

                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}