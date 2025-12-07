import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: {
            Common: (await import(`../messages/${locale}/common.json`)).default,
            CreedActsOfWorship: (await import(`../messages/${locale}/Creed-Acts-of-Worship.json`)).default,
            EthicsPersonalConduct: (await import(`../messages/${locale}/Ethics-Personal-Conduct.json`)).default,
            SocialDealingsLegalPrinciples: (await import(`../messages/${locale}/Social-Dealings-Legal-Principles.json`)).default,
            InfoPage: (await import(`../messages/${locale}/info-page.json`)).default,
            Overview: (await import(`../messages/${locale}/overview.json`)).default,
            Scenes: (await import(`../messages/${locale}/scenes.json`)).default
        }
    };
});
