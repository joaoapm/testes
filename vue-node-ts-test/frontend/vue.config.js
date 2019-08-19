
module.exports = {
    devServer: {
        proxy: {
            '**': {
                target: 'https://localhost:3000',
                ws: true,
                changeOrigin: true
            }
        }
    }
}