<template>
  <div class="gnb_sub_wrap">
    <!-- sec01 -->
    <section class="gnb_sub_sec report_sub_sec01">
            <div class="gnb_sec_wrap">
                <h1>실적보고</h1>
                <p>차별화된 프로젝트 수행능력을 직접 확인하세요.</p>
            </div>
        </section>
        <section class="report_sub_sec02">
            <div class="gnb_sec_wrap">
                <ul>
                    <template v-for="reportItem in paginator.data">
                        <ReportItem :key="reportItem.Idx" :report="reportItem" :n-page="paginator.nPage" />
                    </template>
                </ul>
                <Pager base-url="/report-list" :query="$route.query" :last-page="lastPage" :n-page="paginator.nPage" />
            </div>
        </section>
  </div>
</template>

<script>
import ReportItem from '@/components/report/ReportItem.vue'
import Pager from '@/components/common/Pager.vue'
export default {
    name: 'ReportListView',
    components: {Pager, ReportItem},
    data () {
        return {
            paginator: {
                data: [],
                count: 0,
                nPage: this.$route.params.nPage || 1,
            },
            listNum: 10
        }
    },
    computed: {
        lastPage() {
            let last = Math.floor(this.paginator.count / this.listNum)
            if(this.paginator.count % this.listNum > 0) {
                last++
            }
            return last
        },
        nPage() {
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
        async getPaginator() {
            const url = '/list/R'
            const params = {
                nPage: this.paginator.nPage,
                listNum: this.listNum,
            }
            await this.$axios.get(url, {params: params}).then(res => {
                if(res && res.data) {
                    this.paginator = res.data
                }
            })
        }
    }
}
</script>

<style>

</style>
