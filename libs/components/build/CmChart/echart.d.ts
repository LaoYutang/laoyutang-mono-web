import * as echarts from 'echarts/core';
import { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts';
import { TitleComponentOption, TooltipComponentOption, GridComponentOption, DatasetComponentOption, LegendComponentOption, ToolboxComponentOption } from 'echarts/components';
export type { EChartsType as ChartsType } from 'echarts/types/dist/shared';
export type ChartOptionType = echarts.ComposeOption<BarSeriesOption | LineSeriesOption | PieSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption | DatasetComponentOption | LegendComponentOption | ToolboxComponentOption>;
export declare const Chart: typeof echarts;
