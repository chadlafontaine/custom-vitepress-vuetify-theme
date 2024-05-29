import typescript from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue'
import json from '@rollup/plugin-json';
import {cleandir} from "rollup-plugin-cleandir";

export default {
    input: [
        'src/index.ts',
        'src/config.mts',
    ],
    output: [
        {
            dir: "dist",
            format: 'es'
        }
    ],
    plugins: [
        typescript(),
        vuePlugin(),
        json(),
        cleandir("./dist")
    ]
}