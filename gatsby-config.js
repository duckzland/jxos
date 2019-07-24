const theme = require('./src/settings/theme');

module.exports = {
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
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'JXOS Mining Operating System',
                short_name: 'JXOS',
                start_url: '/',
                background_color: '#000000',
                theme_color: '#000000',
                display: 'standalone',
                orientation: 'portrait',
                icon: 'src/images/favicon.png'
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
        }
        /**{
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-64916263-1'
            }
        }**/
    ]
};
