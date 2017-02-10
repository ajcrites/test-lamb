const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./index.js",
    target: "node",
    output: {
        filename: "lib/index.js",
        libraryTarget: "commonjs2"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    externals: [nodeExternals()],
};
