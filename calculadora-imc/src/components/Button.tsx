import { ButtonHTMLAttributes } from "react"

function Button({children, ...props}: ButtonHTMLAttributes<HTMLButtonElement> & {children: React.ReactNode}) {
    return (
        <button className="mt-6 bg-blue-400 hover:bg-blue-500 text-white font-bold w-full p-3 rounded cursor-pointer" {...props}>
            {children}
        </button>
    )
}
export default Button