/** * @type {{server: {port: number, hot: boolean}, root: string}}*/
const config = {
    root: './src',
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080,
        hot: true,
    }
}

export default config;
