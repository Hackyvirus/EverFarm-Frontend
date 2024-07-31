/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            
            {
                source: '/auth/:path*',
                destination: 'https://ever-farm-backend-g57m-p9i4m9r9n-sushants-projects-c40f823c.vercel.app:/auth/:path*', // This should match the backend's API path
            },
            {
                source: '/api/:path*',
                destination: 'https://ever-farm-backend-g57m-p9i4m9r9n-sushants-projects-c40f823c.vercel.app/api/:path*', // This should match the backend's API path
            }
        ];
    }, 
};

export default nextConfig;
