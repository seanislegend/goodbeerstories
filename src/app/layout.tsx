import {GeistMono} from 'geist/font/mono';
import {GeistSans} from 'geist/font/sans';
import {Metadata} from 'next';
import './global.css';

interface Props {
    children: React.ReactNode;
}

const RootLayout = async ({children}: Props) => (
    <html lang="en" className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="flex h-full min-h-[100vh] flex-grow flex-col bg-beige-50 text-blue-950">
            {children}
        </body>
    </html>
);

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.goodbeerstories.com'
    },
    referrer: 'origin-when-cross-origin',
    title: {
        default: 'Good Beer Stories',
        template: '%s / Good Beer Stories'
    }
};

export default RootLayout;
