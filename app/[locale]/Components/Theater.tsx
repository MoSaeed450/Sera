'use client'

import React, { useRef, useState, useEffect } from 'react'
import Scene from './scene'
import NavFacts from './NavFacts'
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const scenesData = [
  { id: 1, key: 'scene1', image: '/Scenes/scene1.png' },
  { id: 2, key: 'scene2', image: '/Scenes/scene2.png' },
  { id: 3, key: 'scene3', image: '/Scenes/scene3.png' },
  { id: 4, key: 'scene4', image: '/Scenes/scene4.png' },
  { id: 5, key: 'scene5', image: '/Scenes/scene5.png' },
  { id: 6, key: 'scene6', image: '/Scenes/scene6.png' },
  { id: 7, key: 'scene7', image: '/Scenes/scene7.png' },
  { id: 8, key: 'scene8', image: '/Scenes/scene8.png' },
  { id: 9, key: 'scene9', image: '/Scenes/scene9.png' },
  { id: 10, key: 'scene10', image: '/Scenes/scene10.png' },
  { id: 11, key: 'scene11', image: '/Scenes/scene11.png' },
  { id: 12, key: 'scene12', image: '/Scenes/scene12.png' },
  { id: 13, key: 'scene13', image: '/Scenes/scene13.png' },
  { id: 14, key: 'scene14', image: '/Scenes/scene14.png' },
  { id: 15, key: 'scene15', image: '/Scenes/scene15.webp' },
  { id: 16, key: 'scene16', image: '/Scenes/scene16.png' },
  { id: 17, key: 'scene17', image: '/Scenes/scene17.webp' },
];

export default function Theater() {
  const blurOverlayRef = useRef<HTMLDivElement>(null)
  const [currentScene, setCurrentScene] = useState(0)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroSectionHeight = window.innerHeight * 5.8
      const sceneHeight = window.innerHeight * 2.3

      if (scrollY < heroSectionHeight) {
        setShowNav(false)
      } else {
        setShowNav(true)
      }

      const scrollAfterHero = scrollY - heroSectionHeight
      const calculatedScene = Math.floor(scrollAfterHero / sceneHeight)
      const clampedScene = Math.max(0, Math.min(scenesData.length - 1, calculatedScene))

      setCurrentScene(clampedScene)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Refresh ScrollTrigger when currentScene changes to register newly mounted scenes
  useEffect(() => {
    // Small delay to ensure DOM updates are complete
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timer)
  }, [currentScene])

  const goToScene = (index: number) => {
    if (index === currentScene) return

    const heroSectionHeight = window.innerHeight * 3
    const targetScroll = (index + 1) * (window.innerHeight * 2.6) + heroSectionHeight
    const tl = gsap.timeline()

    tl.to(blurOverlayRef.current, {
      backdropFilter: "blur(100px)",
      duration: 1.2,
      ease: "power2.inOut"
    })

    tl.to(window, {
      scrollTo: targetScroll,
      duration: 1,
      ease: "power3.inOut"
    }, "-=0.4")

    tl.to(blurOverlayRef.current, {
      backdropFilter: "blur(0px)",
      duration: 1.2,
      ease: "power2.inOut"
    }, "-=0.5")
  }

  const navigateScene = (direction: 'prev' | 'next') => {
    const newScene = direction === 'next'
      ? Math.min(currentScene + 1, scenesData.length - 1)
      : Math.max(currentScene - 1, 0)
    goToScene(newScene)
  }

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        navigateScene('next')
      } else if (e.key === 'ArrowLeft') {
        navigateScene('prev')
      }
    }

    window.addEventListener('keydown', handleKeyboard)
    return () => {
      window.removeEventListener('keydown', handleKeyboard)
    }
  }, [currentScene, navigateScene])

  return (
    <>
      <div
        ref={blurOverlayRef}
        className="fixed inset-0 z-[998] pointer-events-none"
        style={{ backdropFilter: "blur(0px)" }}
      />

      <NavFacts
        currentScene={currentScene}
        onSceneChange={goToScene}
        onNavigate={navigateScene}
        showNav={showNav}
      />

      <div className="relative z-30 min-h-screen">
        {scenesData.map((scene, index) => {
          const isLastScene = index === scenesData.length - 1;
          const shouldRender = Math.abs(currentScene - index) <= 2;

          if (isLastScene) {
            return (
              <div key={scene.id} className="relative z-40" style={{ height: '350vh' }}>
                {shouldRender && (
                  <div className="sticky top-0 z-40 h-screen">
                    <Scene
                      sceneKey={scene.key}
                      id={scene.id}
                      index={index}
                      image={scene.image}
                      isLast={true}
                    />
                  </div>
                )}
              </div>
            );
          }

          return (
            <div
              key={scene.id}
              className="sticky top-0 z-40 h-[250vh]"
            >
              {shouldRender && (
                <Scene
                  sceneKey={scene.key}
                  id={scene.id}
                  index={index}
                  image={scene.image}
                  isLast={false}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  )
}