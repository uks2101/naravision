<template>
  <router-link :to="`/news-list/news/${news.Idx}?nPage=${nPage}`">
      <p v-html="news.Title ? news.Title.replaceAll('[언론기사]', '').replaceAll('[공지사항]', '') : news.Title" />
      <span>{{ news.Created && news.Created.length >= 10 ? news.Created.substring(0, 7) : news.Created }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'NoticeMainItem',
  props: [
      'news',
      'nPage',
  ],
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
  },
}
</script>

<style scoped>

</style>
