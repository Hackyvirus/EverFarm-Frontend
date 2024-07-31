/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/auth/:path*',
                destination: 'https://everfarm-backend.onrender.com/auth/:path*',
            },
            {
                source: '/api/:path*',
                destination: 'https://everfarm-backend.onrender.com/api/:path*', 
            }
        ];
        ;
    }, 
};

export default nextConfig;
