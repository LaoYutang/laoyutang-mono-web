import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<boolean>;
        required: true;
    };
    isShowButtons: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    beforeconfrim: {
        type: __PropType<(() => Promise<void>) | undefined>;
        required: false;
        default: () => Promise<never>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<boolean>;
        required: true;
    };
    isShowButtons: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    beforeconfrim: {
        type: __PropType<(() => Promise<void>) | undefined>;
        required: false;
        default: () => Promise<never>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    isShowButtons: boolean | undefined;
    beforeconfrim: (() => Promise<void>) | undefined;
}>;
export default _sfc_main;
