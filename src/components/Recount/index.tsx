import type { RecountProps } from "./Recount.type";
import React, { useState, useEffect } from 'react';

export const Recount: React.FC<RecountProps> = ({
    text,
    speed = 100,
    delay,
    className,
    onTypingStart,
    onTypingEnd,
    style
}) => {
    const [displayedText, setDisplayedText] = useState('');
    let currentIndex: number = 0;
    let reader: string | number | NodeJS.Timeout | undefined;
    const type = () => {

        if (currentIndex === 0 && displayedText.length === 0) {
            if (typeof onTypingStart === 'function') {
                onTypingStart();
            }
        }

        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex < text.length - 1) {
            reader = setTimeout(type, speed);
        }

        if (currentIndex === text.length - 1) {
            if (typeof onTypingEnd === 'function') {
                onTypingEnd();
            }
            clearTimeout(reader);
        }
    }

    useEffect(() => {
        const startReader = setTimeout(() => {
            type()
        }, delay);
        return () => {
            if (startReader) {
                clearTimeout(startReader);
            }
        };
    }, []);

    return (
        <span
            className={`typewriter ${className || ''}`}
            style={style}
            aria-live="polite"
        >
            {displayedText}
        </span>
    );
};