import webpack, { RuleSetRule } from "webpack";
import {BuildPaths} from "../build/types/config";

import {buildCssLoader} from "../build/loaders/buildCssLoaders";
import path from "path";


export default ({config}:{config:webpack.Configuration})=>{
    const paths:BuildPaths={
        build:'',
        entry:'',
        src:path.resolve(__dirname,'..','..','src'),
        html:'',
    }
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts','.tsx');
    config.module.rules =config.module.rules.map((rule:RuleSetRule)=>{
    if(/svg/.test(rule.test as string)){
        return {...rule,exclude:/\.svg$/i}
    }
    return rule;
})
    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    })

    config.module?.rules?.push(buildCssLoader(true))
    return config;
}