module.exports = {
    title: 'Omniship',
    base: '/',

    themeConfig: {
        repo: 'omniship/omniship',

        docsRepo: 'omniship/documentation',
        docsBranch: 'docs',

        displayAllHeaders: true,

        editLinks: true,
        editLinkText: 'Found a mistake or want to contribute to the documentation?',

        // nav: [
        //     {text: 'Version', link: '/', items: [{text: '1.0', link: '/1.0/'}]},
        // ],

        sidebar: {
            '/1.0/': require('./1.0'),
        },
    },
}
