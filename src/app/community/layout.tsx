import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Community | ENTROPIA',
    description: 'Join the Entropia community. Discover our social media channels, Telegram groups, and connect with the most knowledgeable AI community in the world.',
    openGraph: {
        title: 'Community | ENTROPIA',
        description: 'Join the Entropia community. Discover our social media channels, Telegram groups, and connect with the most knowledgeable AI community in the world.',
        url: 'https://www.entropiacity.com/community',
    },
    twitter: {
        title: 'Community | ENTROPIA',
        description: 'Join the Entropia community. Discover our social media channels, Telegram groups, and connect with the most knowledgeable AI community in the world.',
    },
};

export default function CommunityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
