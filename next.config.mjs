if (
  process.env.NODE_ENV === "production" &&
  !process.env.NEXT_PUBLIC_STRIPE_GROWTH_SNAPSHOT_LINK
) {
  console.warn(
    "\n[build warning] NEXT_PUBLIC_STRIPE_GROWTH_SNAPSHOT_LINK is not set.\n" +
      "All Growth Snapshot CTA buttons site-wide will render as non-functional " +
      '"Coming soon" placeholders without it.\n'
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
};

export default nextConfig;
