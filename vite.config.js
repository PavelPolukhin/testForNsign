/*** @type {import('vite').UserConfig}*/
const config = {
    root: './src',
    base: '/testForNsign/',
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080,
        hot: true,
    }
}

export default config;
