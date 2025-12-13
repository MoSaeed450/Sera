'use client'

import React, { useEffect, useRef } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { cn } from "./cn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface sceneProps {
  sceneKey: string;
  id: number;
  index: number;
  image: string;
  isLast?: boolean;
}

export default function Scene({ sceneKey, id, index, image, isLast }: sceneProps) {
  const t = useTranslations('Scenes');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    let splitInstance: SplitText | null = null;

    const ctx = gsap.context(() => {

      // Optimize scale animation - only animate transform, not layout
      gsap.to(sceneRef.current, {
        scale: 1.1,
        duration: 28,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true // Hardware acceleration
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,

          start: 'top top',
          end: 'bottom bottom',

          scrub: 0.5, // Reduced from 1 for smoother performance
          pin: false,

        }

      });

      // Optimize opacity animation - remove blur during fade
      tl.fromTo(sceneRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 4, // Reduced from 6
          ease: 'power1.out' // Changed from sine for better performance
        }, 2); // Start earlier

      if (headerRef.current) {
        const headerChildren = gsap.utils.toArray(headerRef.current.children);
        tl.fromTo(
          headerChildren,
          {
            opacity: 0,
            y: 15 // Reduced movement
          },
          {
            opacity: 1,
            y: 0,
            duration: 3, // Reduced from 4
            stagger: .3, // Reduced from .5
            ease: 'power2.out',
            force3D: true
          }, 6); // Adjusted timing
      }

      if (paragraphRef.current) {
        splitInstance = new SplitText(paragraphRef.current, {
          type: "lines",
          linesClass: "split-line"
        });

        const allLines: HTMLElement[] = splitInstance.lines.map(line => line as HTMLElement);

        // Remove blur filter for better performance
        tl.fromTo(allLines,
          {
            opacity: 0,
            y: 20 // Reduced from 30
          },
          {
            opacity: 1,
            y: 0,

            duration: 4, // Reduced from 6

            stagger: .3, // Reduced from .4
            ease: "power2.out",
            force3D: true
          }, 10 // Adjusted timing
        );

        tl.to({}, { duration: 3 }, 14); // Adjusted timing
      }

    }, containerRef);

    return () => {
      if (splitInstance) {
        splitInstance.revert();
      }
      ctx.revert();
    };
  }, [index, t, isArabic])

  return (
    <section
      ref={containerRef}
      className='absolute inset-0'
    >
      <div ref={headerRef} className={`absolute top-20 z-20 flex flex-col gap-2 ${isArabic ? 'right-15 items-end' : 'left-15'}`}>
        <h1 className="text-2xl text-white font-semibold">{t(`${sceneKey}.title`)}</h1>
        <span className="text-lg text-white self-center">{t(`${sceneKey}.year`)}</span>
        {/* <span className="text-lg text-white self-center">{id}</span> */}
      </div>

      <p
        ref={paragraphRef}
        className={`text-2xl leading-10 font-semibold text-white absolute max-w-5xl p-4 top-160 z-20 ${isArabic ? 'left-15 text-right' : 'right-15'}`}
        style={{ display: 'inline-block', willChange: 'opacity, transform' }}
      >
        {t(`${sceneKey}.paragraph`)}
      </p>
      <div
        ref={sceneRef}
        className={cn('absolute h-screen inset-0 bg-cover bg-center bg-no-repeat')}
        style={{ backgroundImage: `url(${image})`, willChange: "opacity, transform" }}
      />
    </section>
  );
}

