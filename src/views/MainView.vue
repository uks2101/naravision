<template>
  <div>
        <!-- main_visual / sec01 -->
        <section class="sec01">
            <div class="slider">
                <carousel :autoplay="false" :loop="true" :autoWidth="false" :autoHeight="false" :nav="false" :center="false" :items="1">
                    <a href="javascript:void(0);" class="main_slide01">
                        <h3><strong>에어즈락 커뮤니케이션즈,</strong><br>커뮤니케이션의 중심에 서다</h3>
                        <p>에어즈락 커뮤니케이션즈는<br>웹메일 솔루션 전문기업 나라비전의 기업브랜드입니다.<br>에어즈락 커뮤니케이션즈로<br>새로운 업무환경을 경험해보세요.</p>
                        <router-link to="/communications" tag="button">
                            <strong>BRAND</strong> 더 알아보기
                            <img src="../assets/images/mainslide_arrow.png" alt="더 알아보기">
                        </router-link>
                    </a>
                    <a href="javascript:void(0);" class="main_slide02">
                        <h4>국내 최초 웹메일 솔루션, 점유율 1위<br><span>에어즈락</span> <strong>메일</strong></h4>
                        <p>업무 프로세스에 최적화된 기능 구성과<br>강력한 보안성을 갖춘 에어즈락 메일이<br>효율적인 비즈니스 공간을 제시합니다.</p>
                        <router-link to="/mail" tag="button">
                            <strong>MAIL</strong> 더 알아보기
                            <img src="../assets/images/mainslide_arrow.png" alt="더 알아보기">
                        </router-link>
                    </a>
                    <a href="javascript:void(0);" class="main_slide03">
                        <h4>언제 어디서나 편리한 내 손안의 메일<br><span>에어즈락</span> <strong>모바일 메일</strong></h4>
                        <p>최상의 모바일 UX, 강력한 보안 체계, 다양한<br>스마트 디바이스에 최적화된 에어즈락 모바일 메일로<br>새로운 업무 환경을 경험하세요.</p>
                        <router-link to="/mobile-mail" tag="button">
                            <strong>MOBILE MAIL</strong> 더 알아보기
                            <img src="../assets/images/mainslide_arrow.png" alt="더 알아보기">
                        </router-link>
                    </a>
                    <a href="javascript:void(0);" class="main_slide04">
                        <h4>우리기관 메일 세이프가드<br><span>에어즈락</span> <strong>안전메일</strong></h4>
                        <p>메일 보안정책으로 메일사용 제한이<br>불편하지 않으셨나요?<br>정보시스템 보안과 메일 활용성<br>어느 것도 놓치지 마세요.</p>
                    </a>
                    <a href="javascript:void(0);" class="main_slide05">
                        <h4>메일 데이터를 안전하게<br><span>에어즈락</span> <strong>아카이브</strong></h4>
                        <p>실시간 메일 백업은 물론<br>메일 검색 및 복구 기능 등 메일 데이터의<br>통합관리를 위한 필수 솔루션입니다.</p>
                        <router-link to="/archive" tag="button">
                            <strong>ARCHIVE</strong> 더 알아보기
                            <img src="../assets/images/mainslide_arrow.png" alt="더 알아보기">
                        </router-link>
                    </a>
                </carousel>
            </div>
        </section>

        <!-- sec02 -->
        <section class="sec02">
            <div class="sec_wrap">
                <h1>믿음의 27년, 고객감동 100년</h1>
                <p>나라비전은 27년 동안 축적된 메일 시스템 구축 경험과<br>
                    노하우를 바탕으로 메시징 솔루션 시장을<br>
                    선도하고 있습니다.<br>
                    앞으로도 최상의 솔루션을 제공할 것을 약속드립니다.
                </p>
                <div>
                    <div><img src="../assets/images/sec02_1.png" alt=""><p>The 1st</p></div>
                    <div><img src="../assets/images/sec02_2.png" alt=""><p>27 Years</p></div>
                    <div><img src="../assets/images/sec02_3.png" alt=""><p>Over 1,000</p></div>
                    <div><img src="../assets/images/sec02_4.png" alt=""><p>Satisfied</p></div>
                </div>
                <router-link to="/communications">더 자세히 알아보기<img src="../assets/images/sec02_arrow.png" alt="더 자세히 알아보기"></router-link>
            </div>
        </section>

        <!-- sec03 -->
        <section class="sec03">
            <div class="sec_wrap">
                <h1>Light, Bright and Dynamic!<br><span>Ayersrock Communication!</span></h1>
                <div>
                    <router-link to="/mail">
                        <div>
                            <h3>메일</h3>
                            <p>업무프로세스에 맞는 최신 기능</p>
                        </div>
                    </router-link>
                    <router-link to="/mobile-mail">
                        <div>
                            <h3>모바일메일</h3>
                            <p>스마트워크를 위한 솔루션</p>
                        </div>
                    </router-link>
                    <router-link to="/" onclick="alert('페이지 준비 중입니다.')">
                        <div>
                            <h3>메신저</h3>
                            <p>업무용 메신저의 완성</p>
                        </div>
                    </router-link>
                    <router-link to="/archive">
                        <div>
                            <h3>아카이브</h3>
                            <p>메일데이터를 안전하게 관리</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- sec04 -->
        <section class="sec04">
            <div class="sec_wrap">
                <h1>Project Reports</h1>
                <p>나라비전만의 차별화된 프로젝트<br>수행능력을 직접 확인하세요.</p>
                <div>
                    <ReportMainItem :report="reportItem" :key="reportItem.Idx" v-for="reportItem in paginatorReport.data"/>
                </div>
            </div>
        </section>

        <!-- sec05 -->
        <section class="sec05">
            <div class="sec_wrap">
                <h1>Reference</h1>
                <p>국내 1000여 개 주요기관들과 함께<br>최고의 기술과 특별한 가치를 나누고 있습니다.</p>
                <carousel class="slider_ref" :autoplay="false" :loop="false" :autoWidth="false" :autoHeight="false" :nav="true" :center="false" :items="1" :dots="false" :navText="['','']" :rewind="false">
                    <div>
                        <img src="../assets/images/main_ref/01.gif" alt="">
                        <img src="../assets/images/main_ref/02.gif" alt="">
                        <img src="../assets/images/main_ref/03.gif" alt="">
                    </div>
                    <div>
                        <img src="../assets/images/main_ref/04.gif" alt="">
                        <img src="../assets/images/main_ref/05.gif" alt="">
                        <img src="../assets/images/main_ref/06.gif" alt="">
                    </div>
                    <div>
                        <img src="../assets/images/main_ref/07.gif" alt="">
                        <img src="../assets/images/main_ref/08.gif" alt="">
                        <img src="../assets/images/main_ref/09.gif" alt="">
                    </div>
                    <div>
                        <img src="../assets/images/main_ref/10.gif" alt="">
                        <img src="../assets/images/main_ref/11.gif" alt="">
                        <img src="../assets/images/main_ref/12.gif" alt="">
                    </div>
                    <div>
                        <img src="../assets/images/main_ref/13.gif" alt="">
                        <img src="../assets/images/main_ref/14.gif" alt="">
                        <img src="../assets/images/main_ref/15.gif" alt="">
                    </div>
                    <div>
                        <img src="../assets/images/main_ref/16.gif" alt="">
                        <img src="../assets/images/main_ref/17.gif" alt="">
                        <img src="../assets/images/main_ref/18.gif" alt="">
                    </div>
                </carousel>
            </div>
        </section>

        <!-- sec06 -->
        <section class="sec06">
            <div class="sec_wrap">
                <h1>Relations</h1>
                <div class="sec06_01">
                    <div>
                        <h4>News</h4>
                        <router-link to="/news-list/1"><img src="../assets/images/sec06_plus.png" alt="소식 더보기"></router-link>
                    </div>
                    <carousel v-if="paginatorNews && paginatorNews.data && paginatorNews.data.length > 0" class="slider_rel" :autoplay="false" :loop="false" :autoWidth="false" :autoHeight="false" :nav="true" :center="false" :items="1" :dots="false" :navText="['','']" :rewind="false">
                        <NewsMainItem :news="newsItem" :key="newsItem.Idx" v-for="newsItem in paginatorNews.data" />
                    </carousel>
                </div>
                <div class="sec06_02">
                    <div>
                        <h4>Notice</h4>
                        <router-link to="/news-list/1"><img src="../assets/images/sec06_plus.png" alt="공지 더보기"></router-link>
                    </div>
                    <div>
                        <NoticeMainItem :news="newsItem" :key="newsItem.Idx" v-for="newsItem in paginatorNotice.data" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import ReportMainItem from '@/components/report/ReportMainItem'
import NewsMainItem from '@/components/news/NewsMainItem'
import NoticeMainItem from '@/components/news/NoticeMainItem'

export default {
    name: 'MainView',
    components: {
        carousel,
        ReportMainItem,
        NewsMainItem,
        NoticeMainItem
    },
    data () {
        return {
            paginatorReport: {
                data: [],
                listNum: 2
            },
            paginatorNews: {
                data: [],
                listNum: 5
            },
            paginatorNotice: {
                data: [],
                listNum: 5
            }
        }
    },
    beforeMount () {
        this.getPaginatorReport()
        this.getPaginatorNews()
        this.getPaginatorNotice()
    },
    methods: {
        async getPaginatorReport () {
            const url = '/list/R'
            const params = {
                listNum: this.paginatorReport.listNum,
            }
            await this.$axios.get(url, { params: params }).then(res => {
                if (res && res.data) {
                this.paginatorReport = res.data
                }
            })
        },
        async getPaginatorNews () {
            const url = '/list/A'
            const params = {
                listNum: this.paginatorNews.listNum,
            }
            await this.$axios.get(url, { params: params }).then(res => {
                if (res && res.data) {
                this.paginatorNews = res.data
                }
            })
        },
        async getPaginatorNotice () {
            const url = '/list/N'
            const params = {
                listNum: this.paginatorNotice.listNum,
            }
            await this.$axios.get(url, { params: params }).then(res => {
                if (res && res.data) {
                this.paginatorNotice = res.data
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
