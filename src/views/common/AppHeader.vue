<template>
    <div>
    <!-- 헤더 -->
        <header>
            <div class="header_wrap">
                <router-link to="/" class="h-logo"><img src="../../assets/images/logo.png" alt="나라비전"></router-link>
                <a href="javascript:void(0)" class="menu_btn" @click="toggleMenu()" :class="{'on': drawer.show}">
                    <img src="../../assets/images/hamburger.png" alt="메뉴">
                </a>
            </div>
        </header>
        <!-- 우측 메뉴 -->
        <div class="right_gnb" :class="{'on': drawer.show}">
            <ul>
                <li>
                    <div>
                        <img src="../../assets/images/gnb_logo.png" alt="나라비전">
                        <a href="javascript:void(0)" class="close_btn" @click="toggleMenu()"><img src="../../assets/images/menu_x.png" alt="메뉴 닫기"></a>
                    </div>
                </li>
                <li
                    v-for="(menu, i) in menus"
                    :key="'menu-' + i"
                    class="gnb_arrow"
                    :class="{ 'active': isActive(menu) }"
                    @click="toggleBtn(menu.name, isActive(menu))"
                >
                  <template v-if="menu.path">
                    <router-link :to="menu.path">
                      {{ menu.title }}
                    </router-link>
                  </template>
                  <template v-else>
                    <a href="javascript:void(0)">
                      {{ menu.title }}
                    </a>
                    <img src="../../assets/images/gnb_arrow.png" alt="소메뉴 보기" :class="{'on': isActive(menu)}">
                    <ul v-if="menu.subMenus && menu.subMenus.length > 0" :class="{ 'on': isActive(menu) }">
                      <li v-for="(subMenu, j) in menu.subMenus" :key="'sub-menu-' + i + '-' + j"
                        :class="{ 'onn': $route.path === subMenu.path || $route.path.indexOf(subMenu.name) >= 0 }">
                        <router-link :to="subMenu.path" class="sub-menu" :style="{ color: subMenu.color }">
                          {{ subMenu.title }}
                        </router-link>
                      </li>
                    </ul>
                  </template>
                </li>
            </ul>
            <div class="right_gnb_foot">
                <div>
                    <a href="https://www.facebook.com/naravision" target="_blank"><img src="../../assets/images/fb_icon.png" alt="페이스북"></a>
                    <a href="https://blog.naver.com/kebiportal" target="_blank"><img src="../../assets/images/blog_icon.png" alt="블로그"></a>
                </div>
                <p>Copyright ⓒ Naravision. All rights reserved.</p>
            </div>
        </div>
        <div class="mobile_bg" :class="{'on' : drawer.show}" @click="toggleMenu()"></div>
    </div>
</template>

<script>
import {
  mapMutations,
  mapState,
} from 'vuex'

export default {
  name: 'AppHeader',
  data() {
      return {
        menus: [
          {
            title: 'Home',
            name: 'home',
            path: '/'
          },
          {
            title: '솔루션 소개',
            name: 'solution',
            subMenus: [
              {
                title: '메일',
                name: 'mail',
                path: '/mail'
              },
              {
                title: '모바일메일',
                name: 'mobile-mail',
                path: '/mobile-mail'
              },
              {
                title: '아카이브',
                name: 'archive',
                path: '/archive'
              },
              {
                title: '확장솔루션',
                name: 'extension',
                path: '/extension'
              },
              {
                title: '에어즈락 커뮤니케이션즈',
                name: 'communications',
                path: '/communications',
                color: '#ff7e00'
              },
            ]
          },
          {
            title: '클라우드 서비스',
            name: 'clouds',
            subMenus: [
              {
                title: '클라우드 서비스',
                name: 'cloud',
                path: '/cloud'
              }
            ]
          },
          {
            title: '고객사',
            name: 'customers',
            subMenus: [
              {
                title: '레퍼런스',
                name: 'customer',
                path: '/customer'
              }
            ]
          },
          {
            title: 'PR센터',
            name: 'prcenter',
            subMenus: [
              {
                title: '뉴스 및 공지',
                name: 'news-list',
                path: '/news-list/1'
              },
              {
                title: '실적보고',
                name: 'report-list',
                path: '/report-list/1'
              }
            ]
          },
          {
            title: '고객만족',
            name: 'cs',
            subMenus: [
              {
                title: '고객만족센터',
                name: 'cs-center',
                path: '/cs-center'
              }
            ]
          },
          {
            title: '회사 소개',
            name: 'company',
            subMenus: [
              {
                title: '회사소개',
                name: 'introduce',
                path: '/introduce'
              },
              {
                title: '연혁',
                name: 'year',
                path: '/year'
              },
              {
                title: '인증',
                name: 'certificate',
                path: '/certificate'
              },
              {
                title: '오시는 길',
                name: 'locate',
                path: '/locate'
              }
            ]
          }
        ],
        lastScrollTop: 0,
        delta: 5,
        fixBoxHeight: 0
      }
  },
  computed: {
    ...mapState('app', ['drawer']),
  },
  mounted () {
    window.addEventListener('scroll', this.headerBehavior)
  },
  methods: {
    headerBehavior () {
      const self = this
      let fixBox = document.querySelector('header');
      this.fixBoxHeight = fixBox.offsetHeight;
      let didScroll;
      window.onscroll = function() {
        didScroll = true;
      };
      setInterval(function(){
        if(didScroll){
          self.hasScrolled(fixBox);
          didScroll = false;
        }
      }, 100);
    },
    hasScrolled (fixBox) {
      let nowScrollTop = window.scrollY;
      if(Math.abs(this.lastScrollTop - nowScrollTop) <= this.delta){
        return;
      }
      if(nowScrollTop > this.lastScrollTop && nowScrollTop > this.fixBoxHeight){
        //Scroll down
        fixBox.classList.add('show');
      }else{
        if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
          //Scroll up
          fixBox.classList.remove('show');
        }
      }
      this.lastScrollTop = nowScrollTop;
    },
    isActive (menu) {
      let active = false
      if (menu.name === 'home') {
        active = this.drawer.menus.home || this.$route.path === '/'
      } else if (menu.name === 'solution') {
        active = this.drawer.menus.solution
      } else if (menu.name === 'clouds') {
        active = this.drawer.menus.clouds
      } else if (menu.name === 'customers') {
        active = this.drawer.menus.customers
      } else if (menu.name === 'prcenter') {
        active = this.drawer.menus.prcenter
      } else if (menu.name === 'cs') {
        active = this.drawer.menus.cs
      } else if (menu.name === 'company') {
        active = this.drawer.menus.company
      }
      const path = this.$route.path
      const subMenus = menu.subMenus
      if (!active) {
        if (subMenus && subMenus.length > 0) {
          for (const subMenu of subMenus) {
            if (path === subMenu.path || path.indexOf(subMenu.name) >= 0) {
              active = true
              break
            }
          }
        }
      }
      return active
    },
    toggleMenu() {
      if (this.drawer.show) {
        this.closeDrawer()
      } else {
        this.openDrawer()
      }
    },
    toggleBtn(name, isOpened) {
      const classes = event.target.classList
      if (!classes.contains('sub-menu')) {
        if (isOpened) {
          this.closeMenu(name)
        } else {
          this.openMenu(name)
        }
      }
    },
    ...mapMutations('app', ['closeDrawer', 'openDrawer', 'openMenu', 'closeMenu']),

  }

}
</script>

<style scoped>
    .right_gnb.on {right: 0;}
    .mobile_bg.on {display: block;}
    .gnb_arrow > ul.on {display: block; }

</style>
