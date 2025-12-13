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

      gsap.to(sceneRef.current, {
        scale: 1.1,
        duration: 28,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,

          start: 'top top',
          end: 'bottom bottom',

          scrub: 1,
          pin: false,

        }

      });

      tl.fromTo(sceneRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 4,
          ease: 'power1.inOut'
        }, 2);

      if (headerRef.current) {
        const headerChildren = gsap.utils.toArray(headerRef.current.children);
        tl.fromTo(
          headerChildren,
          {
            opacity: 0,
            filter: "blur(10px)",
            y: 20
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 4,
            stagger: .5,
            ease: 'power1.inOut'
          }, 8);
      }

      if (paragraphRef.current) {
        splitInstance = new SplitText(paragraphRef.current, {
          type: "lines",
          linesClass: "split-line"
        });

        const allLines: HTMLElement[] = splitInstance.lines.map(line => line as HTMLElement);

        tl.fromTo(allLines,
          {
            opacity: 0,
            filter: "blur(10px)",
            y: 30
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,

            duration: 6,

            stagger: .4,
            ease: "power1.inOut"
          }, 12
        );

        tl.to({}, { duration: 4 }, 16);
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
        style={{ display: 'inline-block' }}
      >
        {t(`${sceneKey}.paragraph`)}
      </p>
      <div
        ref={sceneRef}
        className={cn('absolute h-screen inset-0 bg-cover bg-center bg-no-repeat')}
        style={{ backgroundImage: `url(${image})`, willChange: "opacity" }}
      />
    </section>
  );
}

// useEffect(() => {
//   const ctx = gsap.context(() => {
//     const heroHeight = window.innerHeight * 3;
//     const sceneHeight = window.innerHeight * 3.5;
//     const startScroll = heroHeight + index * sceneHeight;

//     // Image fade in
//     gsap.fromTo(
//       sceneRef.current,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         scrollTrigger: {
//           trigger: "body",
//           start: () => startScroll,
//           end: () => startScroll + (sceneHeight * 1),
//           scrub: 1,
//         }
//       }
//     );

//     // Continuous scale animation
//     gsap.to(sceneRef.current, {
//       scale: 1.1,
//       duration: 28,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut"
//     });

//     // Title animation
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         {
//           opacity: 0,
//           filter: "blur(10px)",
//           y: 20
//         },
//         {
//           opacity: 1,
//           filter: "blur(0px)",
//           y: 0,
//           scrollTrigger: {
//             trigger: "body",
//             start: () => startScroll + (sceneHeight * 0.2),
//             end: () => startScroll + (sceneHeight * 0.35),
//             scrub: 1,
//           }
//         }
//       );
//     }

//     // Year animation
//     if (yearRef.current) {
//       gsap.fromTo(
//         yearRef.current,
//         {
//           opacity: 0,
//           filter: "blur(10px)",
//           y: 20
//         },
//         {
//           opacity: 1,
//           filter: "blur(0px)",
//           y: 0,
//           scrollTrigger: {
//             trigger: "body",
//             start: () => startScroll + (sceneHeight * 0.3),
//             end: () => startScroll + (sceneHeight * 0.45),
//             scrub: 1,
//           }
//         }
//       );
//     }

//     // Paragraph animation
//     if (paragraphRef.current) {
//       if (isArabic) {
//         // Simple fade-in for Arabic to avoid SplitText issues
//         gsap.fromTo(
//           paragraphRef.current,
//           {
//             opacity: 0,
//             y: 30,
//             filter: "blur(10px)",
//           },
//           {
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: "body",
//               start: () => startScroll + (sceneHeight * 0.5),
//               end: () => startScroll + (sceneHeight * 0.75),
//               scrub: 1.5,
//             }
//           }
//         );
//       } else {
//         // SplitText for English
//         document.fonts.ready.then(() => {
//           if (!paragraphRef.current) return;

//           const split = new SplitText(paragraphRef.current, {
//             type: "lines",
//             linesClass: "split-line"
//           });

//           const allLines: HTMLElement[] = split.lines.map(line => line as HTMLElement);

//           gsap.fromTo(
//             allLines,
//             {
//               opacity: 0,
//               filter: "blur(10px)",
//               y: 30
//             },
//             {
//               opacity: 1,
//               filter: "blur(0px)",
//               y: 0,
//               stagger: 0.25,
//               ease: "power2.out",
//               scrollTrigger: {
//                 trigger: "body",
//                 start: () => startScroll + (sceneHeight * 0.5),
//                 end: () => startScroll + (sceneHeight * 0.75),
//                 scrub: 1.5,
//               }
//             }
//           );

//           return () => split.revert();
//         });
//       }
//     }

//   }, containerRef);

//   return () => ctx.revert();
// }, [index, t, isArabic]);