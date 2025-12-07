'use client'

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export interface Scene {
  id: number;
  title: string;
  image: string;
  paragraph: string;
  year: string;
}

const scene: Scene = {
  id: 1,
  title: "Arabia in the Shadows",
  image: "/Scenes/scene1.png",
  paragraph:
    "Before Islam, Arabia was a land of beauty and hardship—tribes divided, justice dictated by power, and spirituality scattered among idols. Yet beneath the dust and silence, people longed for a truth that could gather their hearts and give purpose to their lives.",
  year: "53 years before Hijra"
}

export default function Scene1() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        sceneRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "20% top",
            scrub: 0.5,
          }
        }
      );

      gsap.to(sceneRef.current, {
        scale: 1.2,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            filter: "blur(10px)",
            y: 20
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "20% top",
              end: "35% top",
              scrub: 1,
            }
          }
        );
      }

      if (yearRef.current) {
        gsap.fromTo(
          yearRef.current,
          {
            opacity: 0,
            filter: "blur(10px)",
            y: 20
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "30% top",
              end: "45% top",
              scrub: 1,
            }
          }
        );
      }

      if (paragraphRef.current) {
        const split = new SplitText(paragraphRef.current, { type: "lines" });
        const allLines: HTMLElement[] = split.lines.map(line => line as HTMLElement);

        gsap.fromTo(
          allLines,
          {
            opacity: 0,
            filter: "blur(10px)",
            y: 30
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            stagger: 0.25,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "50% top",
              end: "90% top",
              scrub: 1.5,
            }
          }
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className='absolute inset-0'
    >
      <div className="absolute right-15 top-20 z-20 flex flex-col gap-2 ">
        <h1 ref={titleRef} className="text-2xl text-white opacity-0">{scene.title}</h1>
        <span ref={yearRef} className="text-lg text-white self-center opacity-0">{scene.year}</span>
      </div>

      <p
        ref={paragraphRef}
        className="text-xl text-white absolute max-w-xl p-4 top-50 z-20"
      >
        {scene.paragraph}
      </p>

      <div
        ref={sceneRef}
        className='absolute inset-0 bg-[#0A1A2F] bg-[url("/Scenes/scene1.png")] bg-cover bg-center bg-no-repeat opacity-0'
        style={{ willChange: 'opacity' }}
      />
    </section>
  );
}