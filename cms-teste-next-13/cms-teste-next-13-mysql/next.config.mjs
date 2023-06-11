import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        // serverActions: true,
        //     nextScriptWorkers: true,
    },
};

//module.exports = nextConfig
export default million.next(nextConfig);
