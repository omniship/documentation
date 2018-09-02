module.exports = [
    {
        title: 'Prologue',
        collapsable: false,
        children: [
            '',
        ],
    },
    {
        title: 'Setup',
        collapsable: false,
        children: prefix('setup', [
            '',
        ]),
    },
    {
        title: 'Carriers',
        collapsable: false,
        children: prefix('carriers', [
            '',
            'carrier-ups',
        ]),
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
