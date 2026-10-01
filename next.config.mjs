/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Canonical host: the apex domain 301s to www.
   *
   * The `has` host condition means this never fires on localhost or on
   * *.vercel.app previews — only on the bare production domain.
   *
   * HTTP -> HTTPS is NOT handled here. Behind a proxy Next sees the
   * forwarded protocol, not the real one, so the host must enforce it.
   * On Vercel that is automatic once the domain is attached.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "yemcurrency.com" }],
        destination: "https://www.yemcurrency.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
