"use client"

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {Terminal} from 'lucide-react'

export default function NotFoundPage() {
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev)
        }, 500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-black text-primary font-mono flex flex-col justify-center items-center p-4">
            <Terminal className="w-16 h-16 mb-8"/>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 glitch" data-text="404_NOT_FOUND">404_NOT_FOUND</h1>
            <p className="text-xl md:text-2xl mb-8 text-center">
                The page you are looking for has been moved, deleted, or never existed.
            </p>
            <div className="text-lg md:text-xl mb-8 flex items-center">
                <span className="mr-2">&gt;</span>
                <span>cd /home</span>
                <span className={`w-3 h-6 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
            <Link
                href="/"
                className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-hover transition-colors">
                Return to Base
            </Link>
        </div>
    )
}