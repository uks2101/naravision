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
                    <!-- <span class="board_notify">공지</span>나라비전, 웹메일 솔루션 '에어즈락 메일 조달청 나라비전나라비전나라비전나라비전' -->
                    <span v-if="isNotice" class="board_notify">공지</span>
                    <span v-else class="board_news">보도자료</span>
                    {{ news.Title ? news.Title.replaceAll('[언론기사]', '').replaceAll('[공지사항]', '') : news.Title }}
                  </h6>
                  <p>2018-08-21</p>
              </li>
              <li class="board_txt">
                    {{ getContent() }}
              </li>
          </ul>
          <div class="board_pager">
              <div>
                  <a href="javascript:void(0);">이전</a>
                  <a href="javascript:void(0);">다음</a>
              </div>
              <router-link to="/news-list">목록</router-link>
          </div>
      </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  computed: {
    isNotice() {
        const title = this.news.Title
        if(title.indexOf('[공지사항]') == 0) {
            return true
        } else {
            return false
        }
    }
  },
  methods: {
    getContent() {
        return this.news.Content.replace(/<[^>]*>?/g, '')
    }
  }
}
</script>

<style scoped>

</style>