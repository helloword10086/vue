<template>
    <div class="main-content">
      <Header></Header>
      <silde/>
    </div>
</template>
<script>
import Header from '@/components/common/Header'
import silde from  '@/components/common/Slide'
export default {
  name: 'mainConten',
  data() {
    return {
      mas: 'hello world'
    }
  },
  components: {
    Header,
    silde
  }
}
</script>