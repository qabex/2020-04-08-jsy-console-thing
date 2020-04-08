import rpi_jsy from 'jsy-transpile/esm/rollup.mjs'
import rpi_resolve from '@rollup/plugin-node-resolve'

const sourcemap = true
const plugins = [rpi_jsy(), rpi_resolve()]

export default {
  input: `code/index.jsy`,
  output: { file: `esm/index.mjs`, format: 'es', sourcemap },
  plugins }
