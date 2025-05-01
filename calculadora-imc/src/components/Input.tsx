import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

function Input ({className, ...props}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
    return (
        <input
            className={cn(`block w-full border-2 border-blue-400 rounded p-3`, className)}
            {...props}
        />
    );
}
export default Input;