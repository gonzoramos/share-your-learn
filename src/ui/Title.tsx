// define a react functional component

import { FC, ReactNode } from "react"

interface TitleProps {
    children?: ReactNode
    color?: string
}

export const Title: FC<TitleProps> = ({ children, color }) => {
    return (
        <h1><span style={{ color: color }}>{children}</span></h1>
    )
}