'use client'

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { cn } from './cn';
import { HugeiconsIcon } from '@hugeicons/react';
import { UserQuestion01Icon } from '@hugeicons/core-free-icons';

interface NavFactsProps {
    currentScene: number;
    onSceneChange: (index: number) => void;
    onNavigate: (direction: 'prev' | 'next') => void;
    showNav: boolean;
}

const scenesData = [
    { id: 1, key: 'scene1' },
    { id: 2, key: 'scene2' },
    { id: 3, key: 'scene3' },
    { id: 4, key: 'scene4' },
    { id: 5, key: 'scene5' },
    { id: 6, key: 'scene6' },
    { id: 7, key: 'scene7' },
    { id: 8, key: 'scene8' },
    { id: 9, key: 'scene9' },
    { id: 10, key: 'scene10' },
    { id: 11, key: 'scene11' },
    { id: 12, key: 'scene12' },
    { id: 13, key: 'scene13' },
    { id: 14, key: 'scene14' },
    { id: 15, key: 'scene15' },
    { id: 16, key: 'scene16' },
    { id: 17, key: 'scene17' },
];

export default function NavFacts({ currentScene, onSceneChange, onNavigate, showNav }: NavFactsProps) {
    const t = useTranslations('Scenes');
    const tNav = useTranslations('Common');
    const [isHovered, setIsHovered] = useState(false);
    const [rotateDirection, setRotateDirection] = useState<'left' | 'right'>('right');
    const [hoveredButton, setHoveredButton] = useState<number | null>(null);
    const hideTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
      const locale = useLocale();
    
      const isArabic = locale === "ar";
    // const [isArabic, setIsArabic] = useState(false);

    // useEffect(() => {
    //         setIsArabic(document.documentElement.lang === 'ar');
    //     const interval = setInterval(() => {
    //         setRotateDirection(prev => prev === 'right' ? 'left' : 'right');
    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, []);

    const handleMouseEnter = () => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        hideTimeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 300);
    };

    const getVisibleButtons = () => {
        const totalScenes = scenesData.length;
        const maxVisible = 7;

        if (totalScenes <= maxVisible) {
            return scenesData.map((scene, idx) => ({
                sceneKey: scene.key,
                sceneIndex: idx,
                displayNumber: idx + 1
            }));
        }

        let start = 0;
        let end = maxVisible - 1;

        if (currentScene < 3) {
            start = 0;
            end = maxVisible - 1;
        } else if (currentScene >= totalScenes - 4) {
            start = totalScenes - maxVisible;
            end = totalScenes - 1;
        } else {
            start = currentScene - 3;
            end = currentScene + 3;
        }

        return scenesData.slice(start, end + 1).map((scene, idx) => ({
            sceneKey: scene.key,
            sceneIndex: start + idx,
            displayNumber: start + idx + 1
        }));
    };

    const getButtonSize = (sceneIndex: number) => {
        if (sceneIndex === currentScene) return 'w-5 h-5';

        const distance = Math.abs(sceneIndex - currentScene);
        if (distance === 1) return 'w-3.5 h-3.5';
        if (distance === 2) return 'w-3 h-3';
        return 'w-2.5 h-2.5';
    };

    const visibleButtons = getVisibleButtons();
    const currentSceneKey = scenesData[currentScene]?.key || 'scene1';
    const currentFact = t(`${currentSceneKey}.fact`);

    return (
        <>
            {showNav && (
                <div className={`fixed bottom-8 z-1000 flex items-center gap-4 ${isArabic ? 'right-8 flex-row-reverse' : 'left-8'}`}>
                    <div
                        className="relative flex items-center gap-4"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={cn(
                                "absolute bottom-full mb-4 -translate-x-8 backdrop-blur-xl rounded-2xl transition-all duration-700 ease-out origin-bottom w-96",
                                isHovered
                                    ? "opacity-100 scale-100 translate-y-0"
                                    : "opacity-0 scale-90 translate-y-4 pointer-events-none",
                                isArabic ? "-right-8" : "left-8"
                            )}
                            style={{
                                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                            }}
                        >
                            <div
                                className={`bg-white/10 flex flex-col ${isArabic && "items-end"} border border-white/20 rounded-2xl p-6 shadow-2xl transform`}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                }}
                            >
                                <h3 className="text-white font-semibold text-lg mb-2 tracking-wide">
                                    {tNav('didYouKnow')}
                                </h3>
                                <p className={`text-white/90 text-base leading-relaxed mb-4 ${isArabic && "text-end"}`}>
                                    {currentFact}
                                </p>

                                <Link
                                    href="/Legacy"
                                    className={`inline-flex w-fit ${isArabic && "flex-row-reverse"} items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 text-white text-sm font-medium`}
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                    }}
                                >
                                    {tNav('viewMore')}
                                    <svg
                                        className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <button
                            className={cn(
                                "group relative backdrop-blur-2xl text-white w-14 h-14 rounded-full transition-all duration-300",
                                "border border-white/20 shadow-lg hover:shadow-2xl",
                                "flex items-center justify-center cursor-pointer",
                                "opacity-40 hover:opacity-100",
                                isHovered ? "bg-white/20" : "bg-white/5"
                            )}
                            style={{
                                background: isHovered
                                    ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
                                    : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                            }}
                            aria-label={tNav('didYouKnow')}
                        >
                            <HugeiconsIcon
                                icon={UserQuestion01Icon}
                                className={cn(
                                    rotateDirection === 'right' && !isHovered ? "animate-rotate-right" : "",
                                    rotateDirection === 'left' && !isHovered ? "animate-rotate-left" : "",
                                )}
                                size={28}
                                strokeWidth={2}
                                style={{
                                    filter: 'drop-shadow(0 2px 10px rgba(255,255,255,0.3))',
                                }}
                            />

                            <div
                                className={cn(
                                    "absolute inset-0 rounded-full transition-opacity duration-300",
                                    isHovered ? "opacity-100" : "opacity-0"
                                )}
                                style={{
                                    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                                }}
                            />
                        </button>
                    </div>

                    <nav>
                        <div
                            className="rounded-full opacity-40 hover:opacity-100 transition-opacity duration-700 bg-white/5 border border-white/10"
                            style={{
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                            }}
                        >
                            <div className={`flex items-center gap-0 p-2 opacity-30 hover:opacity-100 transition-opacity duration-700 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                <button
                                    onClick={() => onNavigate('prev')}
                                    disabled={currentScene === 0}
                                    className={`px-3 py-2 bg-white/10 ${isArabic ? 'rounded-r-full' : 'rounded-l-full'} transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer`}
                                    aria-label={tNav('previousScene')}
                                />

                                <div className={`flex items-center gap-2.5 px-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                                    {visibleButtons.map(({ sceneKey, sceneIndex, displayNumber }) => (
                                        <div
                                            key={sceneKey}
                                            className="relative flex items-center justify-center"
                                            onMouseEnter={() => setHoveredButton(sceneIndex)}
                                            onMouseLeave={() => setHoveredButton(null)}
                                        >
                                            {hoveredButton === sceneIndex && (
                                                <div
                                                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg text-white text-xs font-medium pointer-events-none"
                                                    style={{
                                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
                                                        backdropFilter: 'blur(12px)',
                                                        WebkitBackdropFilter: 'blur(12px)',
                                                        border: '1px solid rgba(255,255,255,0.2)',
                                                    }}
                                                >
                                                    {displayNumber}. {t(`${sceneKey}.title`)}
                                                </div>
                                            )}

                                            <button
                                                onClick={() => onSceneChange(sceneIndex)}
                                                className={`${getButtonSize(sceneIndex)} ${sceneIndex === currentScene ? 'bg-white' : 'bg-white/40'} rounded-full hover:bg-white transition-all duration-300 cursor-pointer shrink-0`}
                                                aria-label={`${tNav('goToScene')} ${displayNumber}`}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => onNavigate('next')}
                                    disabled={currentScene === scenesData.length - 1}
                                    className={`px-3 py-2 bg-white/10 ${isArabic ? 'rounded-l-full' : 'rounded-r-full'} transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer`}
                                    aria-label={tNav('nextScene')}
                                />
                            </div>
                        </div>
                    </nav>
                </div>
            )}

            <style jsx>{`
        @keyframes rotate-right {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }

        @keyframes rotate-left {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
        }

        .animate-rotate-right {
          animation: rotate-right 1s ease-in-out;
        }

        .animate-rotate-left {
          animation: rotate-left 1s ease-in-out;
        }
      `}</style>
        </>
    );
}