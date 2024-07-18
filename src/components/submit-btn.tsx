import React from "react";
import { useFormStatus } from "react-dom";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export default function SubmitBtn() {

    const { pending } = useFormStatus();

    return (
        <button 
        className="group flex items-center justify-center gap-2 h-[3rem] w-[9rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white/10 dark:hover:bg-white/40" 
        type="submit">{
            pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> : (
                <>
                    Submit{""}
                    <PaperPlaneIcon className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
            )
        }
         </button>
    )
}