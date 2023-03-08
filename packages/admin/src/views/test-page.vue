<script lang="ts" setup name="testPage">
const getData = async () => {
  await _sleep(2000)
  return {
    datas: [
      { a: 1, b: 2 },
      { a: 2, b: 2 },
      { a: 3, b: 2 },
      { a: 4, b: 2 },
      { a: 5, b: 2 },
      { a: 6, b: 2 },
      { a: 7, b: 2 },
      { a: 8, b: 2 },
      { a: 9, b: 2 },
      { a: 10, b: 2 },
      { a: 11, b: 2 },
      { a: 12, b: 2 },
      { a: 13, b: 2 },
      { a: 14, b: 2 },
      { a: 15, b: 2 },
      { a: 16, b: 2 },
      { a: 17, b: 2 },
      { a: 18, b: 2 },
      { a: 19, b: 2 },
      { a: 20, b: 2 },
    ],
    total: 2000,
  }
}

ElMessage.success('111')

const test = ref('')
</script>

<template>
  <div>
    <CmFilter>
      <el-form inline>
        <el-form-item label="1111" prop="">
          <CmInput v-model="test" />
        </el-form-item>
      </el-form>
    </CmFilter>
    <CmTable :get-data="getData">
      <el-table-column prop="a" label="a1111" />
      <el-table-column prop="b" label="b2222" />
    </CmTable>
  </div>
</template>

<style lang="scss" scoped></style>
