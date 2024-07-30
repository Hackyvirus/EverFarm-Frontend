/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            
            {
                source: '/auth/:path*',
                destination: 'http://localhost:4000/auth/:path*', // This should match the backend's API path
            },
            {
                source: '/api/:path*',
                destination: 'http://localhost:4000/api/:path*', // This should match the backend's API path
            }
        ];
    }, 
};

export default nextConfig;
