import Link from 'next/link';
import React from 'react';

const Button = () => {
    return (
        <div className="flex justify-center">
            <svg width={0} height={0} style={{ position: 'absolute' }}>
                <defs>
                    <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
                    </clipPath>
                </defs>
            </svg>
            <div className="relative">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />
                <div className="relative flex items-end gap-x-2 p-2">
                    <div className="relative">
                        <div onClick={() => window.open("https://github.com/MiniProject25")} style={{ clipPath: 'url(#squircleClip)' }} className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <div onClick={() => window.open("https://www.linkedin.com/in/sumith-s-429497254/")} style={{ clipPath: 'url(#squircleClip)' }} className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            onClick={() => window.open("https://x.com/10HagRED")}
                            style={{ clipPath: 'url(#squircleClip)' }}
                            className="w-14 h-14 bg-gradient-to-br from-black to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-700/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M18.244 2H21.5l-7.6 8.7L22.5 22h-7.3l-5.7-7.3L3.5 22H0l8.3-9.5L.5 2H8l5.2 6.7L18.244 2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            onClick={() => window.open("mailto:codernerd04@gmail.com")}
                            style={{ clipPath: 'url(#squircleClip)' }}
                            className="w-14 h-14 bg-gradient-to-br from-black to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-700/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-8 w-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 12 20 4.01V4H4zm16 16V8.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 8.41V20h16z" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Button;
