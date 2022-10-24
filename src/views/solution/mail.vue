<template>
    <div>
        <!-- main_visual / sec01 -->
        <section class="sub_sec mail_sub_sec01">
        <div class="main_txt">
            <span>에어즈락 메일</span>
            <h6>Ayersrock <strong>Mail</strong></h6>
            <p>국내 최고의 웹메일 솔루션,<br>점유율 1위</p>
        </div>
        <div class="main_img"></div>
    </section>
    <section class="blue_txt mail_sub_sec02">
        <p>다양한 기업용 메일 기능으로 더욱 효율적인 비즈니스 공간을 제시합니다.</p>
    </section>
    <section class="mail_sub_sec03">
        <div class="sec_wrap">
            <h1>제품개요</h1>
            <div>
                <h3>신뢰성 있는 제품</h3>
                <p>관련 분야 국내 최대 레퍼런스 보유</p>
                <p>GS인증 및 중소기업청 성능인증을 통한</p>
                <p class="notp">검증된 제품</p>
                <p>조달청 나라장터 등록 제품</p>
            </div>
            <div>
                <h3>우수한 기술</h3>
                <p>자체 개발 메일엔진 Beehive</p>
                <p class="notp">(직접생산 인증 보유)</p>
                <p>최신 웹표준, 차세대 웹 패러다임</p>
                <p class="notp">기술 적용</p>
                <p>메시징 시스템 R&D 기술연구소 운영</p>
            </div>
            <div>
                <h3>체계적인 고객지원 관리</h3>
                <p>업계 최초 고객만족 센터 운영</p>
                <p>실시간 서버관리와 장애알림 서비스</p>
                <p>전담 엔지니어 배정 및 실시간 진행상황</p>
                <p class="notp">알림</p>
                <p>고객사별 기술지원 내역 관리</p>
            </div>
        </div>
    </section>
    <section class="mail_sub_sec04">
        <div class="sec_wrap">
            <h1>제품특장점</h1>
            <div>
                <div>
                    <h3>최신 기술 반영</h3>
                </div>
                <div>
                    <p>SPA, 크로스 브라우저, 크로스 플랫폼 지원</p>
                    <p>최신 프레임웍을 적용하여 서버부하 최소화</p>
                    <p>HTML5를 이용한 Non-ActiveX 방식의 파일 첨부</p>
                    <p>Ajax 적용을 통한 페이지 이동 최소화</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>안정적인 서비스 구현</h3>
                </div>
                <div>
                    <p>시스템 이중화 구성으로 안정적인 서비스 제공</p>
                    <p>OTP 2단계 로그인/RSA 암호화 패킷 처리</p>
                    <p>OWASP Top10/국정원 8대 취약점 해결</p>
                    <p>사용자와 관리자 웹 환경 분리 운영(Session 분리)</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>업무 시스템 연동 및 확장성</h3>
                </div>
                <div>
                    <p>SSO 및 인증서 연동 지원</p>
                    <p>기간계 시스템과 유연한 연동</p>
                    <p>시스템 연동 표준 API 제공</p>
                    <p>연동이 용이한 RESTful 기반 체계</p>
                </div>
            </div>
        </div>
    </section>
    <section class="mail_sub_sec05">
        <div class="sec_wrap">
            <h1>제품 UI</h1>
            <carousel class="mail_product" :autoplay="false" :loop="false" :autoWidth="false" :autoHeight="false" :nav="true" :center="true" :items="1" :dots="true" :navText="['','']" :rewind="false">
                <div>
                    <img src="../../assets/images/02mail/sec05_1.png" alt="보내기함">
                    <p>[보내기함 슬라이드]</p>
                </div>
                <div>
                    <img src="../../assets/images/02mail/sec05_2.png" alt="메일라벨">
                    <p>[메일라벨]</p>
                    
                </div>
                <div>
                    <img src="../../assets/images/02mail/sec05_3.png" alt="보안메일">
                    <p>[보안메일]</p>
                </div>
                <div>
                    <img src="../../assets/images/02mail/sec05_4.png" alt="승인메일">
                    <p>[승인메일]</p>
                </div>
                <div>
                    <img src="../../assets/images/02mail/sec05_5.png" alt="관리자">
                    <p>[관리자]</p>
                </div>
            </carousel>
        </div>
    </section>
    <section class="mail_sub_sec06">
        <div class="sec_wrap">
            <h1>주요기능</h1>
            <div>
                <div>
                    <h3>편리한 인터페이스</h3>
                </div>
                <div>
                    <p>다이나믹한 '보내기함 대시보드' 슬라이딩 다운</p>
                    <p>주소록 연동의 수신인 자동완성 기능</p>
                    <p>드래그-드랍 파일첨부, 컨텍스트 메뉴</p>
                    <p>상세한 조건을 통한 메일검색</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>업무환경에 최적화</h3>
                </div>
                <div>
                    <p>팀 대표 계정 생성을 통한 팀원간 계정 공유</p>
                    <p>조직도 기반 협업을 위한 공유 메일함</p>
                    <p>비밀번호 설정으로 더욱 안전한 보안 메일함</p>
                    <p>대용량 첨부 메일 관리</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>효율적인 메일 관리</h3>
                </div>
                <div>
                    <p>검색조건으로 관리하는 검색메일함</p>
                    <p>메일 라벨 설정으로 편리한 메일 구분</p>
                    <p>다양한 필터링 조건을 통한 자동분류 정책 수립</p>
                    <p>날짜/대상 별 메일 묶어보기</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>관리자를 위한 시스템</h3>
                </div>
                <div>
                    <p>전체 사용자 및 조직도 관리</p>
                    <p>사용자 별 로그인 및 관리자 작업 로그 조회</p>
                    <p>다양한 프로토콜에 대한 모니터링 및 차단 설정</p>
                    <p>시스템 운영/메시지 송수신 통계 및 로그 관리</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>보안메일</h3>
                </div>
                <div>
                    <p>256비트 이상의 대칭키 방식 암호화</p>
                    <p>발송된 메일 원본 송신 메일서버에 저장</p>
                    <p>송신된 보안메일 회수</p>
                    <p>보안메일 열람 정보 확인(열람시간 및 IP)</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>승인메일</h3>
                </div>
                <div>
                    <p>망분리 환경에 최적화된 승인 프로세스</p>
                    <p>다양한 필터링 조건을 통한 승인 정책 수립</p>
                    <p>승인 대상 메일 처리 방법 설정</p>
                    <p>자료 유출 방지를 위한 승인 절차 체계 수립</p>
                </div>
            </div>
        </div>
    </section>
    <section class="mail_sub_sec07">
        <div class="sec_wrap">
            <h1>시스템환경</h1>
            <div>
                <div>
                    <h3>서버</h3>
                </div>
                <ul>
                    <li>
                        <p>메일서버 SW</p>
                        <p>에어즈락 메일</p>
                    </li>
                    <li>
                        <p>WAS</p>
                        <p>Tomcat / JEUS / WebLogic</p>
                    </li>
                    <li>
                        <p>WEB</p>
                        <p>Apache / WebtoB / WebTier</p>
                    </li>
                    <li>
                        <p>DBMS</p>
                        <p>MySQL / Oracle / MariaDB / Tibero</p>
                    </li>
                    <li>
                        <p>OS</p>
                        <p>Linux / Unix / Windows</p>
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <h3>클라이언트</h3>
                </div>
                <ul>
                    <li>
                        <p>웹브라우저</p>
                        <p>IE8이상 / 크롬 / 사파리 / 파이어폭스</p>
                    </li>
                    <li>
                        <p></p>
                        <p>HTML5를 지원하는 모든 웹브라우저</p>
                    </li>
                    <li>
                        <p>PC OS</p>
                        <p>모든 PC OS</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'MailView',
  components: {
    carousel,
  }
}
</script>

<style scoped>

</style>