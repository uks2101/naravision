<template>
  <div class="gnb_sub_wrap">
    <!-- sec01 -->
    <section class="gnb_sub_sec board_report_sub_sec01">
            <div class="gnb_sec_wrap">
                <h1>실적보고</h1>
                <p>차별화된 프로젝트 수행능력을 직접 확인하세요.</p>
            </div>
        </section>
        <section class="board_report_sub_sec02">
            <div class="gnb_sec_wrap">
                <ul>
                    <li class="board_title">
                        <h6>
                            <span class="board_report">실적보고</span>
                            <span v-html="report.Title ? report.Title.replaceAll('[레퍼런스]', '') : report.Title" />
                        </h6>
                        <p>{{ report.Created ? report.Created.substring(0, report.Created.indexOf(' ')) : report.Created }}</p>
                    </li>
                    <li class="board_txt">
                        <img v-if="showImage" :src="mainImage" @error="showImage" alt="" />
                        <div v-html="report.Content" />
                    </li>
                </ul>
                <div class="board_pager">
                    <div>
                        <a href="javascript:void(0);">이전</a>
                        <a href="javascript:void(0);">다음</a>
                    </div>
                    <router-link :to="`/report-list/${this.nPage}`">목록</router-link>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
  name: 'ReportView',
  data () {
    return {
        report: {},
        showImage: true
    }
  },
  computed: {
    mainImage() {
        if(this.report.Idx) {
            return this.api + '/image/' + this.report.Idx
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
  beforeMount() {
    this.getReport()
  },
  methods: {
    async getReport () {
        const url = `/view/R/${this.idx}`
        const params = {
            nPage: this.nPage
        }
        await this.$axios.get(url, {params: params}).then(res => {
            if(res && res.data) {
                this.report = res.data.data
            }
        })
    }
  }
}
</script>

<style>

</style>