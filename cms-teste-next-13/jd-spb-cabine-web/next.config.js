/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "821321ef8398b80a0483918dfbac6ff9",
        AUTH0_ID: "piloto",
        AUTH0_SECRET: "p",
        AUTH0_ISSUER: "jd.spb.auth",
    },
}

module.exports = nextConfig
