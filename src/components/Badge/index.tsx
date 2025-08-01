import React from "react";
import type { BadgeProps } from "./Badge.types";

export const Badge: React.FC<BadgeProps> = ({ ...props }) => (

    <div className={`w-fit shadow rounded text-sm font-mono overflow-hidden ${props.leftBg}`} >
        <a className="flex gap-1.5 text-white cursor-pointer" href={props.href}>
            <span className="pl-1.5 py-1">{props.title}</span><span className={`px-1.5 py-1 ${props.rightBg}`}>{props.count}</span>
        </a>
    </div>
)