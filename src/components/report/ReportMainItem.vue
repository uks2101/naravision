<template>
    <router-link :to="`/report-list/report/${report.Idx}?nPage=${nPage}`">
        <div><img :src="defaultImage" @error="getDefaultImage" alt=""></div>
        <div>
            <h6 v-html="report.Title ? report.Title.replaceAll('[레퍼런스]', '') : report.Title" />
            <p v-html="getContent()" />
        </div>
        <div>
            <span>{{ report.Created && report.Created.length >= 10 ? report.Created.substring(0, 10) : report.Created }}</span>
            <img src="../../assets/images/sec04_arrow.png" alt="자세히 보기">
        </div>
      </router-link>
</template>

<script>
import defaultImage from '../../assets/images/default.png'

export default {
  name: 'ReportMainItem',
  props: [
      'report',
      'nPage',
  ],
  data () {
    return {
      defaultImage: this.api + '/image/' + this.report.Idx
    }
  },
  methods: {
    getContent () {
      return this.report.Content.replace(/<[^>]*>?/g, '')
    },
    getDefaultImage (e) {
      e.target.src = defaultImage
    }
  },
}
</script>

<style scoped>

</style>
