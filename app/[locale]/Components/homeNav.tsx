'use client'

import React, { useState } from 'react'
import LanguageSwitcher from './languageSwitcher'
import { Link } from '@/i18n/routing'
import { cn } from './cn'
import { HugeiconsIcon } from '@hugeicons/react'
import { UserQuestion01Icon, AlertCircleIcon } from '@hugeicons/core-free-icons'
import { useTranslations } from 'next-intl'

export default function HomeNav() {
  const [questionHovered, setQuestionHovered] = useState(false)
  const [exclamationHovered, setExclamationHovered] = useState(false)
  
  const t = useTranslations('Common')
  
  return (
    <nav className='flex items-center justify-between p-2'>
      <div className='flex items-center gap-4'>
        <Link href="/Legacy">
          <button
            className={cn(
              "group relative backdrop-blur-2xl text-white w-14 h-14 rounded-full transition-all duration-300",
              "border border-gray-300 shadow-lg hover:shadow-2xl",
              "flex items-center justify-center cursor-pointer",
              "opacity-100",
              questionHovered ? "bg-white/20" : "bg-white/5"
            )}
            style={{
              background: questionHovered
                ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
            onMouseEnter={() => setQuestionHovered(true)}
            onMouseLeave={() => setQuestionHovered(false)}
            aria-label="Info"
          >
            <HugeiconsIcon
              icon={UserQuestion01Icon}
              size={28}
              strokeWidth={2}
              style={{
                filter: 'drop-shadow(0 2px 10px rgba(255,255,255,0.3))',
              }}
            />

            <div
              className={cn(
                "absolute inset-0 rounded-full transition-opacity duration-300",
                questionHovered ? "opacity-100" : ""
              )}
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              }}
            />
          </button>
        </Link>

        {/* زر علامة التعجب */}
        <div className="relative">
          {/* Tooltip */}
          <div
            className={cn(
              "absolute top-full mb-4 left-50 -translate-x-70 backdrop-blur-xl rounded-2xl transition-all duration-700 ease-out origin-bottom w-96",
              exclamationHovered
                ? "opacity-100 scale-100 translate-y-5"
                : "opacity-0 scale-90 translate-y-0 pointer-events-none"
            )}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div
              className="bg-white/10 flex flex-col rtl:text-end border border-white/20 rounded-2xl p-6 shadow-2xl transform"
            >
              <h3 className="text-white font-semibold text-lg mb-2 tracking-wide">
                {t('disclaimer')}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {t('disclaimertext')}
              </p>
            </div>
          </div>

          <button
            className={cn(
              "group relative backdrop-blur-2xl w-14 h-14 text-white rounded-full transition-all duration-300",
              "border border-gray-300 shadow-lg hover:shadow-2xl",
              "flex items-center justify-center cursor-pointer",
              "opacity-100",
              exclamationHovered ? "bg-white/20" : "bg-white/5"
            )}
            style={{
              background: exclamationHovered
                ? 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
            onMouseEnter={() => setExclamationHovered(true)}
            onMouseLeave={() => setExclamationHovered(false)}
            aria-label="Disclaimer"
          >
            <HugeiconsIcon
              icon={AlertCircleIcon}
              size={28}
              strokeWidth={2}
              style={{
                filter: 'drop-shadow(0 2px 10px rgba(255,255,255,0.3))',
              }}
            />

            <div
              className={cn(
                "absolute inset-0 rounded-full transition-opacity duration-300",
                exclamationHovered ? "opacity-100" : "opacity-0"
              )}
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              }}
            />
          </button>
        </div>
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </nav>
  )
}
