<template>
    <li>
      <router-link :to="`/report-list/report/${report.Idx}?nPage=${nPage}`">
          <div>
              <img :src="defaultImage" alt="">
          </div>
          <div>
              <h6>{{ report.Title ? report.Title.replaceAll('[레퍼런스]', '') : report.Title }}</h6>
              <p v-html="getContent()" />
              <p>{{ report.Created && report.Created.length >= 10 ? report.Created.substring(0, 10) : report.Created}}</p>
          </div>
        </router-link>
    </li> 
</template>

<script>
import defaultImage from '../../assets/images/default.png'
export default {
  name: 'ReportItem',
  props: [
    'report',
    'nPage'
  ],
  data() {
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
  }
}
</script>

<style>

</style>