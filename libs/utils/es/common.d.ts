/**
 * 获取变量类型的构造函数名
 * @param variables 需要判断变量类型的变量
 * @returns 变量类型
 */
export declare const _getVarType: (variables: any) => string;
/**
 * 判断是否为原始型变量
 * @param variables 需要判断的变量
 * @returns 是否原始型
 */
export declare const _isPrimitVar: (variables: any) => boolean;
/**
 * 防抖函数
 * @param fn 原函数
 * @param delay 延迟间隔
 * @param immediate 是否立即执行
 * @returns 防抖函数
 */
export declare const _debounce: (fn: Function, delay?: number, immediate?: boolean) => Function;
/**
 * 节流函数
 * @param fn 原函数
 * @param delay 延迟间隔
 * @param immediate 是否立即执行
 * @returns 节流函数
 */
export declare const _throttle: (fn: Function, delay?: number, immediate?: boolean) => Function;
/**
 * 延迟函数
 * @param delay 延迟的时间
 */
export declare const _sleep: (delay: number) => Promise<void>;
