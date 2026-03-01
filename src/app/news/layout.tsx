import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Newsletter | ENTROPIA',
    description: 'Get the most critical AI developments, insights, and analysis delivered straight to your inbox every morning. No noise, just signal.',
    openGraph: {
        title: 'AI Newsletter | ENTROPIA',
        description: 'Your Daily Source of Truth About AI. Get critical developments and analysis delivered straight to your inbox.',
        url: 'https://www.entropiacity.com/news',
    },
    twitter: {
        title: 'AI Newsletter | ENTROPIA',
        description: 'Your Daily Source of Truth About AI. Get critical developments and analysis delivered straight to your inbox.',
    },
};

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
