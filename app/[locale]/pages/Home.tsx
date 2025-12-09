'use client'

import React, { useEffect, useRef } from 'react'
import HomeNav from '../Components/homeNav'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const t = useTranslations('Common')

  const containerRef = useRef(null);
  const mainRef = useRef(null);
  const maskRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const navRef = useRef(null);
  useGSAP(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo([mainRef.current],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          immediateRender: true,
          willChange: 'opacity'
        });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,

          start: 'top top',
          end: '+=300%',

          scrub: 1,
          pin: true,

          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      tl.to([text1Ref.current], {
        y: '100%',
        duration: 3,
        ease: 'power3.Out'
      }, 0);

      tl.fromTo([text2Ref.current], {
        y: '-100%'
      },
        {
          y: '0%',
          duration: 3,
          ease: 'power3.Out'
        },
        0
      );

      tl.fromTo([text1Ref.current, text2Ref.current, navRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: 5,
          ease: 'power1.inOut'
        }, 15);


      tl.fromTo([maskRef.current], {
        scale:1,
      },
        {
          scale: 45,
          duration: 20,
          ease: 'power2.inOut'
        }, 30);

      tl.fromTo([mainRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: 5,
          ease: 'power2.inOut'
        }, 45);

      tl.fromTo([maskRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: 20,
          ease: 'power2.inOut'
        }, 50);

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();

  }, [])


  return (
    <main
      ref={mainRef}
      className='min-h-screen relative'
      style={{ willChange: 'opacity' }}
    >
      {/* <div ref={maskRef}></div> */}
      <div className='relative'>

        <div
          ref={navRef}
          className='px-5 pt-1 absolute w-screen z-999'>
          <HomeNav />
        </div>
        <div className='absolute z-998 w-screen h-dvh flex items-center justify-center bg-amber-600'>
          <svg ref={maskRef} className='mr-10 mb-24' xmlns="http://www.w3.org/2000/svg" height="550" fill="none" viewBox="0 0 117 81"><path fill="#fff" d="m46.375 52.438-.125.437q-1.062 3.188-8.125 10.625Q22 80.375 10.563 80.375q-8.376 0-10.125-8.312A20.7 20.7 0 0 1 0 67.75q.063-6.937 3.313-16.687.249-.75.75-.938.437-.187.5.375 0 .375-.938 3.938Q2.437 59 2.5 63.25q.125 6.687 5.375 8.625 1.813.25 2.563.188 13.374 0 32.875-21.5a115 115 0 0 0 3.25-3.75Q45.25 32 35.437 9.5l-.75-1.375L37.5 0q.063.25.313.563 7.312 11 10.624 26.25 1.188 5.374 2.126 11.625Q51.625 45.749 53 49.875 56.563 61.063 65.563 67q0-.124-.438-1.5a9.7 9.7 0 0 1-.375-2.687q0-5.376 4.688-9.25 4.75-3.876 19-9.438Q56.625 45.25 53.375 45.5l-.25.75 2.188-7.875q.125-.5.374-.875 3.939-5.688 16.688-12.937.438-.313 9.5-5.25-3.437-3.688-3.437-8.5 0-5 3.5-7.126 1.562-.937 3.812-1 6.875 0 12.625 5.376 3 2.812 3 4.75-.063 3.124-1.75 6.937l-.125-.125v.25q-3.75.312-9.937 3 1.124 3.312 1.124 6.563v1.5q-.75-2.563-4.312-6.625-12 5.625-22.062 12.75 6.624-.25 22.187-.438 15.625-.25 29.625-.875l-4.063 8.375H110q-.562.187-9.25 2.875-8.625 2.625-19.625 7.188-11 4.5-14.187 9.187 3.75 5.437 13.874 8.938a47 47 0 0 0 3 .937h.126l-.126 5.938v1.5l.126.124Q62.5 79.376 53.311 61.439q-3.061-5.938-5.25-14.626a285 285 0 0 1-1.687 5.626m34.313-41.5q1.125 2.124 5.187 6.374 3.687-1.687 8.688-3.312-3.625-2.562-9.75-3.75a6.4 6.4 0 0 0-1.25-.125q-1.562 0-2.876.813"/></svg>
        </div>
      </div>
      <div className='absolute bottom-20 w-full'>

        <div
          className='flex flex-col items-center justify-center absolute bottom-0 left-[28%] z-999 overflow-hidden h-14 w-200'>
          <h1
            ref={text1Ref}
            className='absolute inset-0 text-[40px] text-white ml-50'>{t('hero1')}</h1>
          <h1
            ref={text2Ref}
            className='absolute inset-0 text-[40px] text-center text-white ml-5'>{t('hero2')}</h1>
        </div>
      </div>
    </main>
  )
}

{/* <div
  ref={maskRef}
  className='bg-white h-dvh w-screen absolute z-998'
  style={{
    '--mask-size': '750px',
    WebkitMaskImage: 'url(/muhammed.svg)',
    maskImage: 'url(/muhammed.svg)',
    WebkitMaskSize: 'var(--mask-size)',
    maskSize: 'var(--mask-size)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    willChange: 'mask-size',
    filter: 'drop-shadow(0 0 80px rgba(0,0,0,1))'
  } as React.CSSProperties}
/> */}