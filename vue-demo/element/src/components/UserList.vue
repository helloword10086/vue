<template>
  <div class="user-list">
    <div class="list-title">
      <div class="block">
        <span class="demonstration">城市</span>
        <el-cascader
          :options="options"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      
    }
  }
}
</script>


