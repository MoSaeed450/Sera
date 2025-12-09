'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function useScrollTriggerCleanup() {
    const pathname = usePathname()

    useEffect(() => {
        // Cleanup all ScrollTriggers when pathname changes (route navigation)
        return () => {
            const triggers = ScrollTrigger.getAll()
            triggers.forEach(trigger => {
                trigger.kill(true) // true = remove immediately without animation
            })
        }
    }, [pathname])
}
