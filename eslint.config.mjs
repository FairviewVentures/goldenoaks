import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Static export: next/image cannot resize at runtime, so the carousel
      // and grid use plain <img> with pre-generated sizes (npm run images).
      "@next/next/no-img-element": "off",
    },
  },
  {
    ignores: [".next/**", "out/**", "next-env.d.ts"],
  },
];

export default config;
