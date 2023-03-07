import type { PropType as __PropType } from 'vue';
interface radioNode {
    label: string;
    value: string | number;
    disabled?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    getData: {
        type: __PropType<() => Promise<radioNode[]>>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    getData: {
        type: __PropType<() => Promise<radioNode[]>>;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
