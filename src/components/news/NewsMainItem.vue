<template>
  <router-link :to="`/news-list/news/${news.Idx}?nPage=${nPage}`" >
      <img :src="defaultImage" @error="getDefaultImage" alt="">
      <h6 v-html="news.Title ? news.Title.replaceAll('[언론기사]', '').replaceAll('[공지사항]', '') : news.Title" />
      <p v-html="getContent()" />
      <span>{{ news.Created && news.Created.length >= 10 ? news.Created.substring(0, 10) : news.Created }}</span>
  </router-link>
</template>

<script>
import defaultImage from '../../assets/images/default.png'

export default {
  name: 'NewsMainItem',
  props: [
      'news',
      'nPage',
  ],
  data () {
    return {
      defaultImage: this.api + '/image/' + this.news.Idx
    }
  },
  computed: {
    isNotice () {
      const title = this.news.Title
      if (title.indexOf('[공지사항]') == 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    getContent () {
      return this.news.Content.replace(/<[^>]*>?/g, '')
    },
    getDefaultImage (e) {
      e.target.src = defaultImage
    },
  },
}
</script>

<style scoped>

</style>
