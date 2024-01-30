import withPlugins from "next-compose-plugins";
import withTM from "next-transpile-modules";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPlugins([withTM(["@hub/hds"])], nextConfig);
