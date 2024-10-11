import { ReactNode } from "react"

export default function Error({ children }: { children: ReactNode }) {
    return (
        <p className="text-center my-4 text-red-600 font-bold p-3 uppercase text-sm">
            {children}
        </p>
    )
}
