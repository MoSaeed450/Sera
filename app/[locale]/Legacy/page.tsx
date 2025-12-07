'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useMessages } from 'next-intl';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  ArrowRight01Icon, 
  ArrowLeft01Icon, 
  MuhammadIcon, 
  AlmsIcon, 
  Mosque02Icon, 
  SujoodIcon, 
  Home01Icon 
} from '@hugeicons/core-free-icons';
import Image from 'next/image';
import LanguageSwitcher from '../Components/languageSwitcher';
import { useTheme } from 'next-themes';

type TabType = 'overview' | 'creed' | 'ethics' | 'social';

interface Hadith {
  number: number;
  narrator: string;
  text: string;
  source: string;
  clarification?: string;
}

interface OverviewItem {
  id: number;
  category: string;
  fact: string;
  detail: string;
}

export default function InfoPage() {
  const t = useTranslations('InfoPage');
  const messages = useMessages() as any;

  const prophetOverview = (messages.Overview || []) as OverviewItem[];
  const CreedActsOfWorship = (messages.CreedActsOfWorship || []) as Hadith[];
  const EthicsPersonalConduct = (messages.EthicsPersonalConduct || []) as Hadith[];
  const SocialDealings = (messages.SocialDealingsLegalPrinciples || []) as Hadith[];

  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showClarification, setShowClarification] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const tabButtons = [
    {
      id: 'overview',
      icon: MuhammadIcon,
      label: t('tabs.overview'),
      action: () => handleTabChange('overview'),
    },
    {
      id: 'creed',
      icon: Mosque02Icon,
      label: t('tabs.faithWorship'),
      action: () => handleTabChange('creed'),
    },
    {
      id: 'ethics',
      icon: SujoodIcon,
      label: t('tabs.ethicsConduct'),
      action: () => handleTabChange('ethics'),
    },
    {
      id: 'social',
      icon: AlmsIcon,
      label: t('tabs.socialLegal'),
      action: () => handleTabChange('social'),
    },
  ];

  function handleTabChange(tab: TabType) {
    setActiveTab(tab);
    setCurrentIndex(0);
    setShowClarification(false);
  }

  const getCurrentData = (): Hadith[] => {
    switch (activeTab) {
      case 'creed': return CreedActsOfWorship;
      case 'ethics': return EthicsPersonalConduct;
      case 'social': return SocialDealings;
      default: return CreedActsOfWorship;
    }
  };

  const getOverviewItems = (): OverviewItem[] => {
    const start = currentIndex * 5;
    return prophetOverview.slice(start, start + 5);
  };

  const currentData = getCurrentData();
  const currentHadith = currentData[currentIndex];

  const handleNext = () => {
    if (activeTab === 'overview') {
      const maxIndex = Math.ceil(prophetOverview.length / 5) - 1;
      if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
    } else {
      if (currentIndex < currentData.length - 1) {
        setShowClarification(false);
        setCurrentIndex(prev => prev + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setShowClarification(false);
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <main className="bg-[#e9edc9] dark:bg-gray-900 min-h-screen relative overflow-hidden">

      <h1 className="text-4xl font-ghorab">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ</h1>

      <Image src="/pattern.png" alt="" width={300} height={0} className="absolute -bottom-22 -right-22 opacity-50" />
      <Image src="/pattern.png" alt="" width={300} height={0} className="absolute -top-40 -left-40 opacity-50" />

      <div className="grid grid-cols-[1fr_2fr] items-start gap-20 px-40 pt-20 mr-40">

        {/* LEFT SIDE — TABS */}
        <div className="flex flex-col items-center justify-center h-80">

          {/* Home + Theme */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <button className="p-3 rounded-full border-2 border-[#d4a373] dark:border-amber-500 bg-white dark:bg-gray-800 hover:bg-[#d4a373] dark:hover:bg-amber-600 hover:text-white shadow-lg">
                <HugeiconsIcon icon={Home01Icon} size={28} />
              </button>
            </Link>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-3 rounded-full border-2 border-[#d4a373] dark:border-amber-500 bg-white dark:bg-gray-800 hover:bg-[#d4a373] dark:hover:bg-amber-600 shadow-lg"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            )}
          </div>

          {/* TABS (mapped) */}
          {tabButtons.map((btn , index) => (
            <button
              key={btn.id}
              onClick={btn.action}
              className={`
                p-4 w-60 flex items-center justify-center gap-4 mt-4 rounded-lg border-2 border-[#d4a373] dark:border-amber-500 
                transition-all cursor-pointer
                ${activeTab === btn.id
                  ? 'bg-[#d4a373] dark:bg-amber-600 text-white font-semibold'
                  : 'bg-transparent dark:bg-gray-800/50 dark:text-amber-100 hover:bg-[#d4a373]/20 dark:hover:bg-amber-600/30'}
              `}
            >
              <HugeiconsIcon icon={btn.icon} size={35} className={`${index > 0 ? "flex-1" : ""}`}/>
              <span className={`${index > 0 ? "flex-2" : ""}`}>
                {btn.label}
              </span>

            </button>
          ))}
        </div>

        {/* RIGHT SIDE — CONTENT */}
        <div className="relative">

          {/* Card */}
          <div className="relative border-2 border-[#d4a373] dark:border-amber-500 rounded-3xl bg-white/50 dark:bg-gray-800/70">


            {activeTab === 'overview' ? (
              <div className="relative flex flex-col gap-4 h-full overflow-y-auto p-8">
                <Image src="/or.png" alt="" width={200} height={0} className="absolute -top-20 -right-20 opacity-30 rotate-3" />
                {getOverviewItems().map(item => (
                  <div key={item.id} className="border-b border-[#d4a373]/30 dark:border-amber-500/30 pb-4">
                    <div className="text-sm text-[#d4a373] dark:text-amber-400 font-semibold">
                      <h2 className="inline-block font-black mr-1 text-[#d4a373] dark:text-amber-400">#{item.id}</h2>
                    </div>
                    <div className="text-base font-semibold text-[#6b4423] dark:text-amber-200">
                      {item.fact}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {item.detail}
                    </div>
                  </div>
                ))}

                <div className="text-xs text-gray-500 dark:text-gray-400 mt-auto pt-4">
                  {(currentIndex + 1) * 5} {t('hadith.of')} {prophetOverview.length}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 h-full p-8">
                <div className="text-sm text-[#d4a373] dark:text-amber-400 font-semibold">
                  {t('hadith.hadithNumber')} {currentHadith?.number}
                </div>

                <div className="text-lg font-semibold text-[#6b4423] dark:text-amber-200">
                  {t('hadith.narrator')}: {currentHadith?.narrator}
                </div>

                <div className="text-base leading-relaxed text-gray-800 dark:text-gray-200 overflow-y-auto flex-1">
                  {currentHadith?.text}
                </div>

                <div className="text-sm text-[#d4a373] dark:text-amber-400">
                  {t('hadith.source')}: {currentHadith?.source}
                </div>

                {/* Clarification */}
                {currentHadith?.clarification && (
                  <div className="flex flex-col gap-2 mt-2 border-t border-[#d4a373]/30 dark:border-amber-500/30 pt-2">
                    <button
                      onClick={() => setShowClarification(!showClarification)}
                      className="text-sm font-semibold text-[#6b4423] dark:text-amber-300 hover:text-[#d4a373] dark:hover:text-amber-400"
                    >
                      {showClarification ? t('hadith.hideClarification') : t('hadith.showClarification')}
                    </button>

                    {showClarification && (
                      <div className="text-sm text-gray-700 dark:text-gray-300 bg-[#e9edc9]/30 dark:bg-gray-700/50 p-3 rounded-lg">
                        <span className="font-semibold block mb-1">{t('hadith.clarificationLabel')}</span>
                        {currentHadith.clarification}
                      </div>
                    )}
                  </div>
                )}

                <div className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
                  {currentIndex + 1} {t('hadith.of')} {currentData.length}
                </div>
              </div>
            )}
          </div>

          {/* ARROWS */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`
              absolute -left-20 top-35 p-2 rounded-full border-2 border-[#d4a373] dark:border-amber-500
              ${currentIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-[#d4a373] dark:hover:bg-amber-600 hover:text-white shadow-lg bg-white/50 dark:bg-gray-800/50'}
            `}
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={24} />
          </button>

          <button
            onClick={handleNext}
            disabled={activeTab === 'overview'
              ? currentIndex === Math.ceil(prophetOverview.length / 5) - 1
              : currentIndex === currentData.length - 1}
            className={`
              absolute -right-20 top-35 p-2 rounded-full border-2 border-[#d4a373] dark:border-amber-500
              ${(activeTab === 'overview'
                ? currentIndex === Math.ceil(prophetOverview.length / 5) - 1
                : currentIndex === currentData.length - 1)
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-[#d4a373] dark:hover:bg-amber-600 hover:text-white shadow-lg bg-white/50 dark:bg-gray-800/50'}
            `}
          >
            <HugeiconsIcon icon={ArrowRight01Icon} size={24} />
          </button>
        </div>
      </div>

      <div className="absolute top-5 right-5 z-[999]">
        <LanguageSwitcher />
      </div>

    </main>
  );
}
