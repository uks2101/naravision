<template>
<div class="gnb_sub_wrap">
<!-- sec01 -->
<section class="gnb_sub_sec news_sub_sec01">
    <div class="gnb_sec_wrap">
        <h1>뉴스 및 공지</h1>
        <p>나라비전의 각 매체별 보도자료와 새로운 소식을 전해드립니다.</p>
    </div>
</section>
<section class="news_sub_sec02">
    <div class="gnb_sec_wrap">
        <ul>
            <template v-for="newsItem in paginator.data">
                <NewsItem :key="newsItem.Idx" :news="newsItem" :n-page="paginator.nPage" />
            </template>
        </ul>
      <Pager base-url="/news-list" :query="$route.query" :last-page="lastPage" :n-page="paginator.nPage" />
    </div>
</section>
</div>
</template>

<script>
import NewsItem from "@/components/news/NewsItem";
import Pager from "@/components/common/Pager";
export default {
    name: 'NewsListView',
  components: {Pager, NewsItem},
  data () {
      return {
        paginator : {
          data: [],
          count: 0,
          nPage: this.$route.params.nPage || 1 ,
        },
        listNum: 10,
      }
    },
    computed: {
      lastPage () {
        let last = Math.floor(this.paginator.count / this.listNum)
        if (this.paginator.count % this.listNum > 0) {
          last++
        }
        return last
      },
      nPage () {
        return this.$route.params.nPage
      }
    },
    watch: {
      nPage () {
        this.paginator.nPage = this.$route.params.nPage
        this.getPaginator()
      }
    },
    beforeMount () {
      this.getPaginator()
    },
    methods: {
        async getPaginator () {
          const url = '/list/AN'
          const params = {
            nPage: this.paginator.nPage,
            listNum: this.listNum,
          }
          await this.$axios.get(url, { params: params }).then(res => {
            if (res && res.data) {
              this.paginator = res.data
            }
          })
        }
      }
}
</script>

<style>

</style>
