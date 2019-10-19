import commonConfig from "./common";

const config = (env: any) => {

    if (!commonConfig[env]) {
        throw new Error(`${env} is not defined`);
    }
    return commonConfig[env];
};

export default config;