import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import riot from 'rollup-plugin-riot'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import includePaths from 'rollup-plugin-includepaths'
import uglify from 'rollup-plugin-uglify'
import strip from 'rollup-plugin-strip'

export default {
    entry: 'src/app.js',
    dest: 'dest/app.js',
    format: 'iife',
    globals: {
        riot: 'riot'
    },
    external: [
        'riot'
    ],
    plugins: [
        includePaths({
            include: {
                // import RiotControl without relative path
                'RiotControl': './src/flux/RiotControl.js'
            },
            paths: [],
            external: [],
            extensions: ['.js', '.json']
        }),
        json(),
        riot({
            ext: 'html'
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        babel({
            "presets": [
                ["es2015", {"modules": false}]
            ],
            "plugins": ["external-helpers"]
        }),
        strip(),
        uglify()
    ]
}