'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Basmallah() {
  const containerRef = useRef(null);
  const basmallahRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,

        start: 'top top',
        end: '+=250%',

        scrub: 1,
        pin: true,

        pinSpacing: true,
        anticipatePin: 1
      }
    });

    gsap.set(basmallahRef.current, { opacity: 0 });

    tl.to(basmallahRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    }, "+=0.1")
      .to(basmallahRef.current, {
        opacity: 1,
        duration: 2,
      })
      .to(basmallahRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      }, "+=0.3");

    tl.to({}, { duration: 1 }, "+=.2");

  }, [])

  return (
    <div
      ref={containerRef}
      className='min-h-screen relat4ive flex items-center justify-center sti3cky top-0'>
      <h1
        ref={basmallahRef}
        className='text-6xl text-white opacity-0'>
        بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
      </h1>
    </div>
  )
}
