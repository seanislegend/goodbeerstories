import {Globe, InstagramLogo, XLogo} from '@phosphor-icons/react/dist/ssr';
import {Metadata} from 'next';

const Home: React.FC = async () => (
    <div className="flex min-h-[100vh] items-center justify-center">
        <div className="max-w-screen-sm space-y-8 p-4">
            <h1 className="font-mono text-2xl font-bold uppercase text-red-600 underline underline-offset-4">
                Good Beer Stories
            </h1>
            <div className="space-y-2 text-balance">
                <p>This site will be live soon.</p>
                <p>
                    It&apos;ll be a place to share photos and stories about beer culture. It could
                    be your new favourite pub, or a nice afternoon walk with a cold beer in hand. It
                    could be whatever you want.
                </p>
                <p className="mt-2">
                    This is starting out as a small personal project, but who knows where it will
                    go? Check back soon for updates.
                </p>
            </div>
            <div className="mt-6 flex flex-col gap-4 text-sm sm:flex-row sm:items-center">
                <a
                    className="group inline-flex items-center space-x-1 font-medium"
                    href="https://instagram.com/seanislegend"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramLogo className="h-5 w-5 text-red-600" />
                    <span className="transition duration-200 ease-in-out group-hover:text-red-600">
                        seanislegend
                    </span>
                </a>
                <a
                    className="group inline-flex items-center space-x-1 font-medium"
                    href="https://x.com/seanislegend"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <XLogo className="h-5 w-5 text-red-600" />
                    <span className="transition duration-200 ease-in-out group-hover:text-red-600">
                        seanislegend
                    </span>
                </a>
                <a
                    className="group inline-flex items-center space-x-1 font-medium"
                    href="https://seanislegend.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Globe className="h-5 w-5 text-red-600" />
                    <span className="transition duration-200 ease-in-out group-hover:text-red-600">
                        seanislegend.com
                    </span>
                </a>
            </div>
        </div>
    </div>
);

export const metadata: Metadata = {
    description: 'A place to share photos and stories about beer culture. Coming soon.',
    title: 'Good Beer Stories'
};

export default Home;
