import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.entropiacity.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/private'],
            },
            {
                // Explicitly allow AI/LLM bots for GEO (Generative Engine Optimization)
                userAgent: ['GPTBot', 'CCBot', 'Google-Extended', 'Anthropic-AI', 'OAI-SearchBot', 'Claude-Web'],
                allow: '/',
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
