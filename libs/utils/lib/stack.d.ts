/**
 * 栈构造类
 * @type T 栈中成员的类型
 */
export declare class _Stack<T> {
    #private;
    /**
     * 初始化一个栈
     * @param initData 初始栈的成员，可以任意个参数
     */
    constructor(...initData: Array<T>);
    /**
     * 推入栈
     * @param member 要推入的成员
     * @returns 栈长度
     */
    push(member: T): number;
    /**
     * 抛出最后一个成员
     * @returns 最后一个成员
     */
    pop(): T | undefined;
    /**
     * 当前栈的长度
     * @returns 长度
     */
    length(): number;
}
