'use client';

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  
  const currentLocale = params.locale as string;

  function changeLocale(newLocale: string) {
    if (newLocale === currentLocale) return;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className={`flex items-center gap-6 px-4  border-2 ${pathname === "/" ? "border-white" : "border-[#6b4423] dark:border-white"} rounded-2xl`}>
      <button
        onClick={() => changeLocale('ar')}
        disabled={isPending}
        className='cursor-pointer'
      // className={`
      //   font-medium transition
      //   disabled:opacity-50
      //   ${pathname === "/"
      //       ? (currentLocale === 'ar'
      //         ? 'text-white hover:text-white/75 scale-105'
      //         : 'text-white/60 hover:text-white/75')
      //       : (currentLocale === 'ar'
      //         ? 'text-[#6b4423] dark:text-white hover:brightness-75 scale-105'
      //         : 'text-[#6b4423]/50 dark:text-white/70 hover:text-[#6b4423]/30')
      //     }
      //     `}
      >
        <svg
          className={`
          font-medium transition
          disabled:opacity-50
          ${pathname === "/"
              ? (currentLocale === 'ar'
                ? 'text-white hover:text-white/75 scale-105'
                : 'text-white/60 hover:text-white/75')
              : (currentLocale === 'ar'
                ? 'text-[#6b4423] dark:text-white hover:brightness-75 scale-105'
                : 'text-[#6b4423]/50 dark:text-white/70 hover:text-[#6b4423]/30')
            }
            `}
          xmlns="http://www.w3.org/2000/svg" height="40" fill="none" viewBox="0 0 73 115"><path fill="currentColor" d="M42.624 114.304q-6.912 0-14.336-1.664a42.3 42.3 0 0 1-13.824-5.504q-6.4-3.84-10.496-10.496Q0 90.112 0 80.128q0-9.216 3.712-17.28t10.496-14.592q6.912-6.528 16.256-11.008t20.608-6.4l2.688 9.984q-9.345 1.664-17.28 4.992t-13.824 8.192q-5.76 4.736-8.96 10.88-3.2 6.272-3.2 13.696 0 6.016 2.048 10.368 2.047 4.351 5.376 7.168a27 27 0 0 0 7.68 4.608 38.7 38.7 0 0 0 8.576 2.304q4.48.768 8.448.768 6.784 0 13.824-1.28 7.04-1.152 12.8-3.584l3.328 8.96q-3.072 1.536-8.192 2.944-4.992 1.536-10.752 2.432-5.76 1.024-11.008 1.024m-21.12-67.84a23.5 23.5 0 0 1-9.216-4.608A25.4 25.4 0 0 1 5.76 33.92a21.5 21.5 0 0 1-2.304-9.728q0-8.064 3.712-13.44 3.84-5.376 9.728-8.064Q22.912 0 29.568 0q2.944 0 6.272.512 3.328.511 6.4 1.536l-2.176 9.856a50 50 0 0 0-5.376-1.024q-2.816-.384-5.12-.384-4.608 0-8.192 1.664t-5.632 4.608q-2.048 2.816-2.048 6.656 0 3.456 1.92 6.272 2.048 2.688 5.12 4.736 3.072 1.92 6.272 2.944 3.2.896 5.632.768z" /></svg>
        {/* <h1>ع</h1> */}
      </button>

      <button
        onClick={() => changeLocale('en')}
        disabled={isPending}
        className={`
          cursor-pointer font-medium text-[44px] transition
          disabled:opacity-50
          ${pathname === "/"
            ? (currentLocale === 'en'
              ? 'text-white hover:brightness-75 scale-105'
              : 'text-white/60 hover:text-white/75')
            : (currentLocale === 'en'
              ? 'text-[#6b4423] dark:text-white hover:brightness-75 scale-105'
              : 'text-[#6b4423]/50 dark:text-white/70  hover:text-[#6b4423]/30')
          }
        `}
      >
        En
      </button>
    </div>
  );
}