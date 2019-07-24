const theme = require('./src/settings/theme');

module.exports = {
    pathPrefix: "/jxos",
    plugins: [
        {
            resolve: 'gatsby-plugin-jss',
            options: {theme}
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: './src/data/documentation',
                name: 'documentation'
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'JXOS Mining Operating System',
                short_name: 'JXOS',
                start_url: '/',
                background_color: '#000000',
                theme_color: '#000000',
                display: 'standalone',
                orientation: 'portrait',
                icon: 'src/images/favicon.png',
                icons: [
                    {
                        src: `/favicons/icon-48x48.png`,
                        sizes: `48x48`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/icon-72x72.png`,
                        sizes: `72x72`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/icon-96x96.png`,
                        sizes: `96x96`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/icon-144x144.png`,
                        sizes: `144x144`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/icon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/icon-256x256.png`,
                        sizes: `256x256`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/icon-384x384.png`,
                        sizes: `384x384`,
                        type: `image/png`
                    },
                    {
                        src: `/favicons/icon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/layouts/Template`)
            }
        },
        'gatsby-transformer-yaml',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: './src/data'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: '`',
                            aliases: {sh: 'bash'},
                            showLineNumbers: false,
                            noInlineHighlight: false
                        }
                    },
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-htaccess',
            options: {
                RewriteBase: '/',
                https: true,
                www: false,
                SymLinksIfOwnerMatch: true,
                host: 'jxos.work'
            }
        }
        /**{
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-64916263-1'
            }
        }**/
    ]
};
