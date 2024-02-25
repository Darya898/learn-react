import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoaders";
export function buildLoaders({isDev}:BuildOptions):webpack.RuleSetRule[] {
    const svgLoader={
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }
    const cssLoader= buildCssLoader(isDev)
    const typescriptloader={
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const fileloader={
                test: /\.(png|jpe?g|gif|woff2|woff)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
return [
    fileloader,
    svgLoader,
    typescriptloader,
    cssLoader
]
}