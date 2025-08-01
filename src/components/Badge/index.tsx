import React from "react";
import type { BadgeProps } from "./Badge.types";

export const Badge: React.FC<BadgeProps> = ({ ...props }) => (

    <div className={`w-fit shadow rounded text-sm overflow-hidden ${props.leftBg}`} >
        <a className="flex gap-1.5 cursor-pointer" href={props.href}>
            <span className="px-1 py-1 font-mono text-amber-50">{props.title}</span><span className={`px-1 py-1 font-mono text-amber-50 ${props.rightBg}`}>{props.count}</span>
        </a>
    </div>
)