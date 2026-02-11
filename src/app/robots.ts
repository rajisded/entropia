import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.entropiacity.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/private'], // Hypothetical admin routes we don't want indexed
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
