import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://entropia.civilization'; // Placeholder URL

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/private'], // Hypothetical admin routes we don't want indexed
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
