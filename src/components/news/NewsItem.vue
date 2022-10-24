<template>
  <li>
    <router-link :to="`/news-list/news/${news.Idx}?nPage=${nPage}`">
      <div>
        <img :src="defaultImage" @error="getDefaultImage" alt="">
      </div>
      <div>
        <h6>
          <span v-if="isNotice" class="board_notify">공지</span>
          <span v-else class="board_news">보도자료</span>
          {{ news.Title ? news.Title.replaceAll('[언론기사]', '').replaceAll('[공지사항]', '') : news.Title }}
        </h6>
        <p>{{ getContent() }}</p>
        <p>{{ news.Created && news.Created.length >= 10 ? news.Created.substring(0, 10) : news.Created }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
import defaultImage from '../../assets/images/default.png'
export default {
  name: 'NewsItem',
  props: [
      'news',
      'nPage'
  ],
  data () {
    return {
      defaultImage: this.api + '/image/' + this.news.Idx,
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
    }
  },
}
</script>

<style scoped>

</style>
