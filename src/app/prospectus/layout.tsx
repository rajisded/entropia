import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prospectus | ENTROPIA',
    description: 'Entropia City Prospectus. A detailed overview of the Sovereign Intellectual Civilization, including our vision, governance, economy, and tech goals.',
    openGraph: {
        title: 'Entropia Prospectus',
        description: 'A detailed overview of the Sovereign Intellectual Civilization, including our vision, governance model, economic model, and technological goals.',
        url: 'https://www.entropiacity.com/prospectus',
    },
    twitter: {
        title: 'Entropia Prospectus',
        description: 'A detailed overview of the Sovereign Intellectual Civilization, including our vision, governance model, economic model, and technological goals.',
    },
};

export default function ProspectusLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
