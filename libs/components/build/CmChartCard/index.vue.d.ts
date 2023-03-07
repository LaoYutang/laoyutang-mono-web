import type { PropType as __PropType } from 'vue';
import type { ChartOptionType } from '../CmChart';
interface NodeChartOptionType extends ChartOptionType {
    type: string;
}
type DataNodeType = number | string | null | undefined;
declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: __PropType<string>;
        required: true;
    };
    title: {
        type: __PropType<string>;
        required: true;
    };
    configs: {
        type: __PropType<NodeChartOptionType[]>;
        required: true;
    };
    getData: {
        type: __PropType<() => Promise<DataNodeType[][]>>;
        required: true;
    };
    publicConfig: {
        type: __PropType<NodeChartOptionType | undefined>;
        required: false;
        default: undefined;
    };
    height: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    isInitData: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: __PropType<string>;
        required: true;
    };
    title: {
        type: __PropType<string>;
        required: true;
    };
    configs: {
        type: __PropType<NodeChartOptionType[]>;
        required: true;
    };
    getData: {
        type: __PropType<() => Promise<DataNodeType[][]>>;
        required: true;
    };
    publicConfig: {
        type: __PropType<NodeChartOptionType | undefined>;
        required: false;
        default: undefined;
    };
    height: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    isInitData: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>>, {
    height: number | undefined;
    publicConfig: NodeChartOptionType | undefined;
    isInitData: boolean | undefined;
}>;
export default _sfc_main;
