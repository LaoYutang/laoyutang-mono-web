import type { PropType as __PropType } from 'vue';
import { ChartsType, ChartOptionType } from './echart';
interface NodeChartOptionType extends ChartOptionType {
    type: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: __PropType<NodeChartOptionType>;
        required: true;
    };
}, {
    chartInstance: ChartsType;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: __PropType<NodeChartOptionType>;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
