import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'
import babel      from 'rollup-plugin-babel'

//paths are relative to the execution path
export default {
    entry: 'app/main-aot.js',
    dest: 'aot/dist/build.js', // output a single application bundle
    sourceMap: true,
    sourceMapFile: 'aot/dist/build.js.map',
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            include: ['node_modules/rxjs/**']
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
}
