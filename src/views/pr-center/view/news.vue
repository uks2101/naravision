<template>
  <div class="gnb_sub_wrap">
    <!-- sec01 -->
    <section class="gnb_sub_sec board_news_sub_sec01">
      <div class="gnb_sec_wrap">
          <h1>뉴스 및 공지</h1>
          <p>나라비전의 각 매체별 보도자료와 새로운 소식을 전해드립니다.</p>
      </div>
  </section>
  <section class="board_news_sub_sec02">
      <div class="gnb_sec_wrap">
          <ul>
              <li class="board_title">
                  <h6>
                    <span v-if="isNotice" class="board_notify">공지</span>
                    <span v-else class="board_news">보도자료</span>
                    <span v-html="news.Title ? news.Title.replaceAll('[언론기사]', '').replaceAll('[공지사항]', '') : news.Title" />
                  </h6>
                  <p>{{ news.Created ? news.Created.substring(0, news.Created.indexOf(' ')) : news.Created }}</p>
              </li>
              <li class="board_txt">
                  <img v-if="showImage" :src="mainImage" @error="showImage = false" alt=""/>
                  <div v-html="news.Content" />
              </li>
          </ul>
          <div class="board_pager">
              <div>
                  <router-link v-if="prevIdx > 0" :to="prevIdx > 0 ? `/news-list/news/${prevIdx}?nPage=${nPage}` : ''">이전</router-link>
                  <router-link v-if="nextIdx > 0" :to="nextIdx > 0 ? `/news-list/news/${nextIdx}?nPage=${nPage}` : ''">다음</router-link>
              </div>
              <router-link :to="`/news-list/${this.nPage}`">목록</router-link>
          </div>
      </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  data () {
    return {
      news: {},
      showImage: true,
      prevIdx: 0,
      nextIdx: 0,
    }
  },
  computed: {
    isNotice() {
        const title = this.news.Title
        if(title && title.indexOf('[공지사항]') == 0) {
            return true
        } else {
            return false
        }
    },
    mainImage () {
      if (this.news.Idx) {
        return this.api + '/image/' + this.news.Idx
      } else {
        return null
      }
    },
    idx () {
      return this.$route.params.idx
    },
    nPage () {
      return this.$route.query.nPage
    }
  },
  watch: {
    idx () {
      this.getNews()
    }
  },
  beforeMount () {
    this.getNews()
  },
  methods: {
    async getNews () {
      const url = `/view/AN/${this.idx}`
      const params = {
        nPage: this.nPage
      }
      await this.$axios.get(url, { params: params }).then(res => {
        if (res && res.data) {
          this.showImage = true
          this.news = res.data.data
          this.prevIdx = res.data.prevIdx
          this.nextIdx = res.data.nextIdx
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
