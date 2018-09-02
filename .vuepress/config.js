module.exports = {
    base: '/',

    title: 'Omniship',
    description: 'Framework agnostic shipping library for PHP',

    themeConfig: {
        repo: 'omniship/omniship',

        docsRepo: 'omniship/documentation',
        docsBranch: 'docs',

        displayAllHeaders: false,

        editLinks: true,
        // editLinkText: 'Found a mistake or want to contribute to the documentation?',

        nav: [
            {text: 'Guide', link: '/guide/',},
            // {text: 'Version', link: '/', items: [{text: '1.0', link: '/1.0/'}]},
        ],

        sidebar: {
            '/guide/': require('./sidebar/guide.js'),
        },
    },
}
