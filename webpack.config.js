const path = require("path");
module.exports = {
    mode:"development",
    devtool:"sorce-map",
    resolve:{
        extensions:[".ts",".tsx"]
    },
    entry:{
        main:path.resolve(__dirname,"src/index.tsx"),
        utils:path.resolve(__dirname,"src/utils/take.ts")
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {test: /\.ts(x?)$/,
            exclude:/node_modules/,
            use: [
                {
                    loader:"ts-loader"
                }
            ]
            },
            {
                enforce:"pre",
                test:/\.js$/,
                loader:"source-map-loader"
            }

        ]
    },
    externals:{
        "react": "React",
        "react-dom":"ReactDOM"
    }
}