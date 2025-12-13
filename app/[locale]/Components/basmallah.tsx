'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useLocale } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

interface ayah {
  text: string;
  verse: string;
  en: string;
}

const ayat : ayah[] = [
  {
    text: ' وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ ',
    verse:'الأنبياء: 107' ,
    en: 'We have sent you ˹O Prophet˺ only as a mercy for the whole world'
  },
  {
    text:'لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنْفُسِكُمْ، عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ، حَرِيصٌ عَلَيْكُم، بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ',
    verse:'التوبة: 128',
    en: 'There certainly has come to you a messenger from among yourselves. He is concerned by your suffering, anxious for your well-being, and gracious and merciful to the believers'
  },
  {
    text:'يَا أَيُّهَا النَّبِيُّ إِنَّا أَرْسَلْنَاكَ شَاهِدًا وَمُبَشِّرًا وَنَذِيرًا ۝ وَدَاعِيًا إِلَى اللَّهِ بِإِذْنِهِ وَسِرَاجًا مُّنِيرًا',
    verse:'الأحزاب: 45–46',
    en: 'O Prophet! We have sent you as a witness, and a deliverer of good news, and a warner, and a caller to ˹the Way of˺ Allah by His command, and a beacon of light'
  }
]

export default function Basmallah() {
  const containerRef = useRef(null);
  const basmallahRef = useRef(null);

  const locale = useLocale();
  
  const isEnglish = locale === "en";

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,

        start: 'top top',
        end: '+=200%',

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
      className='min-h-screen flex flex-col items-center justify-center'>
      <h1
        ref={basmallahRef}
        className='text-white hereo opacity-0 flex flex-col gap-10 items-center'>
        <span className='text-4xl hero mb-24'>
          بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ  
        </span>
        <div className='flex flex-col items-center gap-18'>
          {ayat.map((a , i) => (
            <div
            key={i}
            className='hero flex flex-row-reverse  gap-6 text-2xl'
            >
                <div className='flex flex-col items-center gap-10'>
                  <span className='tracking-widest'>﴾ {a.text} ﴿</span>
                  {isEnglish && (<span className='text-base'>{a.en}</span>)}
                </div>

                <span className='text-xl opacity-60'>{a.verse}</span>
            </div>
          ))}
      </div>
      </h1>
    </div>
  )
}
