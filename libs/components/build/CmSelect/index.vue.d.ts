import type { PropType as __PropType } from 'vue';
import type { DataNodeType } from './select';
declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: __PropType<"normal" | "tree" | undefined>;
        required: false;
        default: string;
    };
    getData: {
        type: __PropType<(params?: any) => Promise<DataNodeType[]>>;
        required: true;
    };
    params: {
        type: __PropType<string | number | any[] | {
            [attr: string]: any;
        } | undefined>;
        required: false;
        default: string;
    };
    multiple: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: __PropType<"normal" | "tree" | undefined>;
        required: false;
        default: string;
    };
    getData: {
        type: __PropType<(params?: any) => Promise<DataNodeType[]>>;
        required: true;
    };
    params: {
        type: __PropType<string | number | any[] | {
            [attr: string]: any;
        } | undefined>;
        required: false;
        default: string;
    };
    multiple: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: "normal" | "tree" | undefined;
    params: string | number | any[] | {
        [attr: string]: any;
    } | undefined;
    multiple: boolean | undefined;
}>;
export default _sfc_main;
