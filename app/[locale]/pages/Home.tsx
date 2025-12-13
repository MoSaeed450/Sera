'use client'

import React, { useEffect, useRef } from 'react'
import HomeNav from '../Components/homeNav'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import LightRays from '../Components/Lightrays';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const t = useTranslations('Common')

  const containerRef = useRef(null);
  const mainRef = useRef(null);
  const heroRef = useRef(null);
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

          scrub: .5,
          pin: true,

          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      tl.to([text1Ref.current], {
        y: '100%',
        duration: 3,
        ease: 'power1.inOut',
        willChange: 'transform, opacity',
        force3D: true 
      }, 0);

      tl.fromTo([text2Ref.current], {
        y: '-100%'
      },
        {
          y: '0%',
          duration: 3,
          ease: 'power1.inOut',
          willChange: 'transform, opacity',
          force3D: true 
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


      tl.fromTo([heroRef.current], {
        scale: 10,
        transformOrigin: 'center center', // 👈 أضفها هنا
        force3D: true,
        immediateRender: true,
      },
        {
          scale: 100,
          transformOrigin: 'center center', // 👈 أضفها هنا
          duration: 20,
          force3D: true,
          ease: 'power1.in'
        }, 30);

      tl.fromTo([mainRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: 5,
          ease: 'power2.inOut'
        }, 45);

      tl.fromTo([heroRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          duration: 20,
          ease: 'power2.inOut'
        }, 55);

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();

  }, [])


  return (
    <main
      ref={mainRef}
      className='min-h-screen relative bg-[#19191b]'
      style={{ willChange: 'opacity' }}
    >

      <div className='absolute' style={{ width: '100%', height: '100%' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={6}
          rayLength={6}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0.1}
          distortion={0.09}
          className="custom-rays"
        />
      </div>

      {/* <div className='relative'>
        </div> */}

      <div
        ref={navRef}
        className='px-5 pt-1 absolute w-screen z-999'>
        <HomeNav />
      </div>

      <div className='absolute flex items-center justify-center z-998 bge-amber-300 text-white w-screen h-dvh'>
        {/* <span ref={heroRef} className='hero text-[40px] mb-80'>
            محمد
          </span> */}
        {/* <svg ref={heroRef} xmlns="http://www.w3.org/2000/svg" height="46" fill="none" viewBox="0 0 106 86"><g filter="url(#a)"><path fill="#fff" d="m36.086 39.496-.07.246q-.457 1.617-4.57 5.977-9.072 9.492-15.505 9.492-4.71 0-5.695-4.676A11.7 11.7 0 0 1 10 48.11q.035-3.902 1.863-9.386.141-.422.405-.528.263-.105.298.211 0 .211-.527 2.215-.667 2.566-.633 4.957.07 3.762 3.024 4.852 1.02.14 1.441.105 7.524 0 18.492-12.094a65 65 0 0 0 1.828-2.109Q35.453 28 29.934 15.344l-.422-.774L31.094 10a.9.9 0 0 0 .175.316q4.114 6.187 5.977 14.766a97 97 0 0 1 1.195 6.54q.599 4.112 1.371 6.433 2.004 6.293 7.067 9.633 0-.07-.229-.827a5.3 5.3 0 0 1-.228-1.529q0-3.024 2.654-5.203t10.67-5.309q-17.895.633-19.723.774l1.09-4.008q.089-.3.211-.492.774-1.125 9.387-7.278.246-.175 5.344-2.953-1.934-2.074-1.934-4.781 0-2.812 1.969-4.008.879-.527 2.144-.562 3.868 0 7.102 3.023 1.687 1.582 1.687 2.672-.034 1.758-.984 3.902l-.07-.07v.14q-2.11.176-5.59 1.688.633 1.863.633 3.692v.843q-.422-1.44-2.426-3.726-6.75 3.165-12.41 7.172 3.726-.141 12.498-.264t16.646-.475l-2.285 4.711h-1.16q-.316.105-5.186 1.6-4.869 1.494-11.056 4.043t-7.98 5.185q2.109 3.06 7.804 5.028.914.315 1.688.527h.07l-.07 3.34v.844l.07.07q-12.059-.809-17.227-10.898-1.723-3.341-2.953-8.227-.35 1.23-.95 3.164m19.3-23.344q.634 1.195 2.919 3.586 2.074-.95 4.886-1.863-2.038-1.44-5.484-2.11a3.6 3.6 0 0 0-.703-.07q-.879 0-1.617.457" /></g><defs><filter id="a" width="105.32" height="85.457" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dx="10" dy="10" /><feGaussianBlur stdDeviation="10" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_100_4" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_100_4" result="shape" /></filter></defs></svg> */}

        <svg className='' ref={heroRef} xmlns="http://www.w3.org/2000/svg" width="66" height="46" fill="none" viewBox="0 0 66 46"><path fill="#fff" d="m26.086 29.496-.07.246q-.457 1.617-4.57 5.977Q12.373 45.21 5.94 45.21q-4.71 0-5.695-4.676A11.7 11.7 0 0 1 0 38.11q.035-3.902 1.863-9.386.141-.422.405-.528.263-.105.298.211 0 .211-.527 2.215-.668 2.566-.633 4.957.07 3.762 3.024 4.852 1.02.14 1.441.105 7.524 0 18.492-12.094a65 65 0 0 0 1.828-2.109Q25.453 18 19.934 5.344l-.422-.774L21.094 0a.9.9 0 0 0 .175.316q4.114 6.188 5.977 14.766a97 97 0 0 1 1.195 6.54q.598 4.112 1.372 6.433 2.002 6.293 7.066 9.633 0-.07-.229-.827a5.3 5.3 0 0 1-.228-1.529q0-3.024 2.654-5.203t10.67-5.309q-17.895.633-19.723.774l1.09-4.008q.089-.3.211-.492.774-1.125 9.387-7.278.246-.175 5.344-2.953Q44.12 8.79 44.12 6.082q0-2.812 1.969-4.008.879-.527 2.144-.562 3.868 0 7.102 3.023 1.687 1.582 1.687 2.672-.035 1.758-.984 3.902l-.07-.07v.14q-2.11.177-5.59 1.688.633 1.863.633 3.692v.843q-.422-1.44-2.426-3.726-6.75 3.164-12.41 7.172 3.726-.141 12.498-.264t16.646-.475l-2.285 4.711h-1.16q-.316.105-5.185 1.6-4.87 1.494-11.057 4.043t-7.98 5.185q2.109 3.06 7.804 5.028.914.315 1.688.527h.07l-.07 3.34v.844l.07.07q-12.059-.809-17.227-10.898-1.723-3.341-2.953-8.227-.35 1.23-.95 3.164m19.3-23.344q.634 1.196 2.919 3.586 2.074-.95 4.886-1.863-2.038-1.44-5.484-2.11a3.6 3.6 0 0 0-.703-.07q-.879 0-1.617.457"/></svg>

      </div>

      <div className='absolute bottom-20 w-full'>

        <div
          className='flex flex-col items-center justify-center absolute bottom-0 left-[28%] z-999 overflow-hidden h-14 w-200'>
          <h1
            style={{ willChange: 'transform, opacity' }}
            ref={text1Ref}
            className='absolute inset-0 text-[40px] text-white ml-50'>{t('hero1')}</h1>
          <h1
            style={{ willChange: 'transform, opacity' }}
            ref={text2Ref}
            className='absolute inset-0 text-[40px] text-center text-white ml-5'>{t('hero2')}</h1>
        </div>
      </div>
    </main>
  )
}
// 'use client'

// import React, { useEffect, useRef } from 'react'
// import HomeNav from '../Components/homeNav'
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useTranslations } from 'next-intl';
// import { useGSAP } from '@gsap/react';
// import Image from 'next/image';
// import LightRays from '../Components/Lightrays';

// gsap.registerPlugin(ScrollTrigger);


// export default function Home() {
//   const t = useTranslations('Common')

//   const containerRef = useRef(null);
//   const mainRef = useRef(null);
//   const maskRef = useRef(null);
//   const text1Ref = useRef(null);
//   const text2Ref = useRef(null);
//   const navRef = useRef(null);
//   useGSAP(() => {
//     const ctx = gsap.context(() => {

//       gsap.fromTo([mainRef.current],
//         { opacity: 0 },
//         {
//           opacity: 1,
//           duration: 1,
//           ease: 'power2.out',
//           immediateRender: true,
//           willChange: 'opacity'
//         });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: mainRef.current,

//           start: 'top top',
//           end: '+=300%',

//           scrub: 1,
//           pin: true,

//           pinSpacing: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         }
//       });

//       tl.to([text1Ref.current], {
//         y: '100%',
//         duration: 3,
//         ease: 'power3.Out'
//       }, 0);

//       tl.fromTo([text2Ref.current], {
//         y: '-100%'
//       },
//         {
//           y: '0%',
//           duration: 3,
//           ease: 'power3.Out'
//         },
//         0
//       );

//       tl.fromTo([text1Ref.current, text2Ref.current, navRef.current],
//         { opacity: 1 },
//         {
//           opacity: 0,
//           duration: 5,
//           ease: 'power1.inOut'
//         }, 15);


//       tl.fromTo([maskRef.current], {
//         maskSize: '420px',
//         force3D: true,
//         immediateRender: true,
//       },
//         {
//           maskSize: '4500%',
//           duration: 20,
//           force3D: true,
//           ease: 'power2.inOut'
//         }, 30);

//       tl.fromTo([mainRef.current],
//         { opacity: 1 },
//         {
//           opacity: 0,
//           duration: 5,
//           ease: 'power2.inOut'
//         }, 45);

//       tl.fromTo([maskRef.current],
//         { opacity: 1 },
//         {
//           opacity: 0,
//           duration: 20,
//           ease: 'power2.inOut'
//         }, 50);

//       ScrollTrigger.refresh();
//     }, mainRef);

//     return () => ctx.revert();

//   }, [])


//   return (
//     <main
//       ref={mainRef}
//       className='min-h-screen relative bg-[#19191b]'
//       style={{ willChange: 'opacity' }}
//     >
// <div className='absolute' style={{ width: '100%', height: '100%'}}>
//   <LightRays
//     raysOrigin="top-center"
//     raysColor="#ffffff"
//     raysSpeed={1.5}
//     lightSpread={0.8}
//     rayLength={1.2}
//     followMouse={true}
//     mouseInfluence={0}
//     noiseAmount={0.1}
//     distortion={0.05}
//     className="custom-rays"
//   />
// </div>
//       {/* <div ref={maskRef}></div> */}
//       <div className='relative'>
//         <div
//           ref={navRef}
//           className='px-5 pt-1 absolute w-screen z-999'>
//           <HomeNav />
//         </div>
//         <div className='absolute z-998 w-screen h-dvh'>
//         <div
//           ref={maskRef}
//           className='bg-white absolute z-998 w-screen h-dvh flex items-center overflow-visible justify-center drop-shadow-2xl drop-shadow-white'
//           style={{
//             // '--mask-size': '420px',
//             WebkitMaskImage: 'url(/muhammed.svg)',
//             maskImage: 'url(/muhammed.svg)',
//             WebkitMaskSize: 'var(--mask-size)',
//             maskSize: 'var(--mask-size)',
//             WebkitMaskRepeat: 'no-repeat',
//             maskRepeat: 'no-repeat',
//             WebkitMaskPosition: 'center',
//             maskPosition: 'center',
//             willChange: 'mask-size',
//           } as React.CSSProperties}
//         />
//             </div>

//       </div>
//       <div className='absolute bottom-20 w-full'>

//         <div
//           className='flex flex-col items-center justify-center absolute bottom-0 left-[28%] z-999 overflow-hidden h-14 w-200'>
//           <h1
//             ref={text1Ref}
//             className='absolute inset-0 text-[40px] text-white ml-50'>{t('hero1')}</h1>
//           <h1
//             ref={text2Ref}
//             className='absolute inset-0 text-[40px] text-center text-white ml-5'>{t('hero2')}</h1>
//         </div>
//       </div>
//     </main>
//   )
// }
