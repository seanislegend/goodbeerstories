// @ts-check

const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: "default-src 'self' https://vercel.live; img-src 'self' data: https://assets.vercel.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'"
    },
    {key: 'Referrer-Policy', value: 'origin-when-cross-origin'},
    {key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload'},
    {key: 'X-Content-Type-Options', value: 'nosniff'},
    {key: 'X-DNS-Prefetch-Control', value: 'on'},
    {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
    {key: 'X-XSS-Protection', value: '1; mode=block'}
];

/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [{source: '/:path*', headers: securityHeaders}];
    },
    experimental: {reactCompiler: true},
    reactStrictMode: true
};
