'use client'

import React, { useEffect, useRef } from 'react'
import HomeNav from '../Components/homeNav'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const t = useTranslations('Common')

  const containerRef = useRef(null);
  const mainRef = useRef(null);
  const maskRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
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
          end: '+=400%',

          scrub: 1,
          pin: true,

          pinSpacing: true,
          anticipatePin: 1,
        }
      });

      tl.to([text1Ref.current], {
        y: '100%',
        duration: .33,
        ease: 'power3.Out'
      }, 0);

      tl.fromTo([text2Ref.current], {
        y: '-100%'
      },
        {
          y: '0%',
          duration: .33,
          ease: 'power3.Out'
        },
        0
      );

      tl.fromTo([text1Ref.current, text2Ref.current, navRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: .33,
          ease: 'power1.inOut'
        }, 1);


      tl.to([maskRef.current], {
        '--mask-size': '35000px',
        duration: 1.6,
        ease: 'power2.inOut'
      }, 2);

      tl.fromTo([mainRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: .33,
          ease: 'power2.inOut'
        }, 3);

      tl.fromTo([maskRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: .5,
          ease: 'power2.inOut'
        }, 3.5);
    }, mainRef);

    return () => ctx.revert();

  }, [])


  return (
    <main
      ref={mainRef}
      className='min-h-screen bg-gray-800 relative'
      style={{ willChange: 'opacity' }}
    >
      {/* <div
      ref={containerRef}
      className=''>
          </div> */}
      <div className='relative bg-green-300 border'>

        <div
          ref={navRef}
          className='px-5 pt-1 absolute w-screen z-999'>
          <HomeNav />
        </div>
        <div
          ref={maskRef}
          className='bg-white h-dvh w-screen absolute z-998'
          style={{
            '--mask-size': '850px',
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
        />
      </div>
      <div className='absolute bottom-20 w-full'>

        <div
          className='flex flex-col items-center justify-center mx-auto relative overflow-hidden h-14 w-200'>
          <span
            ref={text1Ref}
            className='absolute inset-0 text-[40px] text-white ml-50'>{t('hero1')}</span>
          <span
            ref={text2Ref}
            className='absolute inset-0 text-[40px] text-center text-white ml-5'>{t('hero2')}</span>
        </div>
      </div>
    </main>
  )
}
