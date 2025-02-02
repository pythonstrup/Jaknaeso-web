import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  env: {
    MAIN_HOST: '',
    SERVER_HOST: '',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'scss', 'styles')],
    silenceDeprecations: ['legacy-js-api'],
    additionalData: `@use '@/styles/scss/main.scss' as *;`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
