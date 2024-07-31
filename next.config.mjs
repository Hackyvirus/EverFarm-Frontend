/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/auth/:path*',
                destination: 'https://ever-farm-backend-ndg5-1iqisgun1-sushants-projects-c40f823c.vercel.app/auth/:path*',
            },
            {
                source: '/api/:path*',
                destination: 'https://ever-farm-backend-ndg5-1iqisgun1-sushants-projects-c40f823c.vercel.app/api/:path*', 
            }
        ];
        ;
    }, 
};

export default nextConfig;
