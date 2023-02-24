import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { RequestMethodType, RequestConfigType, RequestMapType, CustomConfigType, RequestParamType } from './axios';
export declare class _Request {
    #private;
    instance: AxiosInstance;
    requestMap: RequestMapType;
    customConfig: CustomConfigType | undefined;
    constructor(config: AxiosRequestConfig, customConfig?: CustomConfigType);
    /**
     * @description axios请求方法
     * @param url 请求相对路径
     * @param params 请求参数对象
     * @param method 请求方法
     * @param config 请求的额外配置
     * @returns 请求的返回Promise
     */
    request(url: string, params: RequestParamType, method: RequestMethodType, config?: RequestConfigType): Promise<any>;
}
