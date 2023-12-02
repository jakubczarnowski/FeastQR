/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "flagsapi.com",
      },
      {
        hostname: "feastqr.com",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "izrwqrxvegrajxtlvafn.supabase.co",
      },
      {
        hostname: "xxvyufhdtunogxjibato.supabase.co",
      },
    ],
  },
  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  eslint: { ignoreDuringBuilds: true },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: 'https://tryhards.space/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: 'https://tryhards.space/terms-of-service',
        permanent: true,
      },
      {
        source:'/return-policy',
        destination: 'https://tryhards.space/return-policy',
        permanent: true,
      }
    ]
  }
};

export default config;
