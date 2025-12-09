'use client'

import React, { useEffect, useRef } from 'react'
import HomeNav from '../Components/homeNav'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

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
        maskSize: '500px',
        immediateRender: true
      },
        {
          maskSize: '4500%',
          duration: 20,
          force3D: true,
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
        <div className='absolute z-998 w-screen h-dvh'>
        <div
          ref={maskRef}
          className='bg-white absolute z-998 w-screen h-dvh flex items-center overflow-visible justify-center drop-shadow-2xl drop-shadow-white'
          style={{
            '--mask-size': '500px',
            WebkitMaskImage: 'url(/muhammed.svg)',
            maskImage: 'url(/muhammed.svg)',
            WebkitMaskSize: 'var(--mask-size)',
            maskSize: 'var(--mask-size)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            willChange: 'mask-size',
          } as React.CSSProperties}
        />
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
