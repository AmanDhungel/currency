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
  /**
   * /og/* is immutable in practice — the share image only changes when the
   * filename does — so let CDNs and scrapers cache it hard. Everything
   * under /_next/static already ships with immutable headers from Next.
   */
  async headers() {
    return [
      {
        source: "/og/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },

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
