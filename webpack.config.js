const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/, // 排除不处理的目录
                // include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
                // include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(svg)$/,
                // exclude: /(node_modules|bower_components|build)/,
                use: ['svg-url-loader']
            }
        ]
    },
    externals: {
        'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
};
//
// module.exports = {
//     mode:'development',
//     entry: './src/indexDevLocal.tsx',
//     output: {
//         filename: "app2.js",
//         path: path.resolve(__dirname, 'dist'),
//     },
//     devtool: "source-map",
//     resolve: {
//         extensions: [".ts", ".tsx", ".js"]
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: 'ts-loader'
//             },
//             {
//                 test: /\.(css|less)$/,
//                 use: ["style-loader", "css-loader"],
//                 exclude: /\.module\.css$/,
//             }
//         ]
//     }
// };
//
