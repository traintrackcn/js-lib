module.exports = {
    presets: [
        // ['@babel/preset-env',  { "modules": false } ],
        ['@babel/preset-env', { "loose": true }],
        // ['@babel/preset-env', { "debug": true }],
        // '@babel/preset-react'
    ],
    plugins: [
        [
            "@babel/plugin-proposal-class-properties", 
            // { 'loose': true }
        ],
        // [
        //     "@babel/transform-runtime"
        // ],
        // [
        //     "transform-remove-strict-mode",
        // ]
    ]
};