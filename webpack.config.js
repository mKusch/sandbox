const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    // eslint-disable-next-line no-console
    console.log('Building sandbox app');

    const browserlist = ['> 1%', 'iOS >= 9', 'IE > 10'];
    const mode = 'development';
    const wwwRootAssets = path.resolve(__dirname, './wwwroot');

    const config = {
        entry: {
            app: [path.resolve(__dirname, './src/index.tsx'), path.resolve(__dirname, './src/styles')]
        },
        mode,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        },
                    ],
                },
                {
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'less-loader',
                        },
                    ],
                    test: /\.less$/,
                },
                {
                    test: /\.ts$|\.tsx$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            corejs: 3,
                                            modules: 'commonjs',
                                            targets: browserlist,
                                            useBuiltIns: 'entry',
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: path.resolve(__dirname, './tsconfig.json'),
                                silent: true,
                            },
                        },
                    ],
                },
            ]
        },
        output: {
            filename: '[name].js',
            path: wwwRootAssets,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            })
        ]
    };

    return [config];
};