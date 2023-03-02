import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    getData: {
        type: __PropType<(params?: any) => Promise<{
            datas: any[];
            total: number;
        }>>;
        required: true;
    };
    isInitData: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    initParams: {
        type: __PropType<{
            [attr: string]: any;
        } | undefined>;
        required: false;
        default: () => {};
    };
    isUsePager: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    isUseCheckBox: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {
    update: (params?: any, isResetPager?: boolean) => Promise<void>;
    selection: globalThis.Ref<any[]>;
    test: {
        a: number;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    getData: {
        type: __PropType<(params?: any) => Promise<{
            datas: any[];
            total: number;
        }>>;
        required: true;
    };
    isInitData: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    initParams: {
        type: __PropType<{
            [attr: string]: any;
        } | undefined>;
        required: false;
        default: () => {};
    };
    isUsePager: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    isUseCheckBox: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>>, {
    isInitData: boolean | undefined;
    initParams: {
        [attr: string]: any;
    } | undefined;
    isUsePager: boolean | undefined;
    isUseCheckBox: boolean | undefined;
}>;
export default _sfc_main;
