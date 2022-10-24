<template>
  <div>
    <!-- footer -->
    <footer>
            <div class="footer_upper">
                <a href="https://www.facebook.com/naravision" target="_blank"><img src="../../assets/images/footer_fb_icon.png" alt="페이스북"></a>
                <a href="https://blog.naver.com/kebiportal" target="_blank"><img src="../../assets/images/footer_blog_icon.png" alt="블로그"></a>
            </div>
            <nav class="footer_nav">
                <dl>
                    <dt>솔루션 소개</dt>
                    <dd>
                        <router-link to="/mail">메일</router-link>
                        <router-link to="/mobile-mail">모바일메일</router-link>
                        <!-- <a href="04messenger.html">메신저</a> -->
                        <router-link to="/archive">아카이브</router-link>
                        <router-link to="/extension">확장솔루션</router-link>
                        <!-- <a href="07cs.html">에어즈락 CS</a> -->
                        <router-link to="/communications" style="color: #c66600;">에어즈락 커뮤니케이션즈</router-link>
                    </dd>
                </dl>
                <dl>
                    <dt>클라우드 서비스</dt>
                    <dd>
                        <router-link to="/cloud">클라우드 서비스</router-link>
                    </dd>
                </dl>
                <dl>
                    <dt>고객사</dt>
                    <dd>
                        <router-link to="/customer">레퍼런스</router-link>
                    </dd>
                </dl>
                <dl>
                    <dt>PR센터</dt>
                    <dd>
                        <router-link to="/news-list">뉴스 및 공지</router-link>
                        <router-link to="/report-list">실적보고</router-link>
                    </dd>
                </dl>
                <dl>
                    <dt>고객만족</dt>
                    <dd>
                        <router-link to="/cs-center">고객만족센터</router-link>
                    </dd>
                </dl>
                <dl>
                    <dt>회사소개</dt>
                    <dd>
                        <router-link to="/introduce">회사소개</router-link>
                        <router-link to="/year">연혁</router-link>
                        <router-link to="/certificate">인증</router-link>
                        <router-link to="/locate">오시는 길</router-link>
                    </dd>
                </dl>
            </nav>
            <div class="footer_lower">
                <p>CopyrightⓒNaravision. All rights reserved.</p>
            </div>
        </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>