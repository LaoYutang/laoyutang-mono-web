<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const configs = [
  {
    type: 'pie',
    config: {
      // 数据系列设置
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            position: 'outside',
            formatter: '{@org} {@value}TB ({d}%)',
          },
        },
      ],
    },
  },
]

const getData = async () => {
  await _sleep(2000)
  return Promise.resolve([
    ['org', 'value'],
    ['管委会', 0.0496],
    ['总裁办', 26.8125],
    ['联合创新中心', 0.068],
    ['风险与存客经营中心', 4.8334],
    ['财务管理中心', 4.433],
    ['商业增长中心', 1.534],
  ])
}
</script>

<template>
  <el-config-provider :locale="zhCn">
    <CmChartCard
      name="testPie"
      title="shhahah书局12 "
      :configs="configs"
      :get-data="getData"
    />
    <CmChartCard
      name="testPie"
      title="shhahah书局 2"
      :configs="configs"
      :get-data="getData"
    />
    <CmChartCard
      name="testPie"
      title="shhahah书局3 "
      :configs="configs"
      :get-data="getData"
    />
    <CmChartCard
      name="testPie"
      title="shhahah书局4 "
      :configs="configs"
      :get-data="getData"
    />
    <CmChartCard
      name="testPie"
      title="shhahah书局5 "
      :configs="configs"
      :get-data="getData"
    />
    <CmChartCard
      name="testPie"
      title="shhahah书局6 "
      :configs="configs"
      :get-data="getData"
    />
    <CmChartCard
      name="testPie"
      title="shhahah书局7 "
      :configs="configs"
      :get-data="getData"
    />
    <CmChartCard
      name="testPie"
      title="shhahah书局 "
      :configs="configs"
      :get-data="getData"
    />
  </el-config-provider>
</template>
