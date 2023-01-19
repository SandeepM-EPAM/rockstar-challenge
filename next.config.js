const path = require('path')
const { URL } = require('url')

const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.plugins.push(new WebpackAssetsManifest({
            output: '../public/asset-manifest.json',
            transform: assets => {
                const entrypoints = [];
                for (let file in assets) {
                    if (assets[file].endsWith('.js') || assets[file].endsWith('.css')) {
                        entrypoints.push(assets[file]);
                    }
                }
                return {
                    files: assets,
                    entrypoints: entrypoints
                };
            }
        }));

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      loader: 'graphql-tag/loader',
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname),
    }

    return config
  },
  async rewrites() {
    return [
      /**
       * Rewrite /graphql requests to Magento
       */
      {
        source: '/graphql/:pathname*',
        destination: new URL('graphql', process.env.MAGENTO_URL).href,
      },

      /**
       * Sample of how to use APIs to Proxy Images
       */
      {
        source: '/store/:pathname*',
        destination: '/api/proxy',
      },

      /**
       * URlResolver 🙌
       */
      {
        source: '/:pathname*',
        destination: '/_url-resolver',
      },
    ]
  },
}
