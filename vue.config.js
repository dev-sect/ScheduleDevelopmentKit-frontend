module.exports = {
    chainWebpack: config => {
        config.module.rules.delete("svg");
    },
    configureWebpack: () => {
        return {
            resolve: {
                extensions: ['.web.js', '.vue', '.js', '.json', '.less', '.scss', '.sass'],
            },
            module: {
                rules: [
                    {
                        test: /\.less$/,
                        use: [
                            'vue-style-loader',
                            'css-loader',
                            'less-loader'
                        ],
                    },
                    {
                        test: /\.svg$/,
                        use: [
                            'vue-loader',
                            'vue-svg-loader',
                        ],
                    },
                ],
            },
        };
    },

}
