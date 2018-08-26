module.exports = [
    {
        title: 'Essentials',
        collapsable: false,
        children: [
            '',
        ],
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
