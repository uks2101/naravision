<template>
  <div class="news_pager">
    <router-link
        :to="hasPrev ? { path: baseUrl + '/1', query: query } : {}"
    >
      <img :src="hasPrev ? arrows.prevStart.on : arrows.prevStart.off" alt="처음">
    </router-link>
    <router-link
        :to="hasPrev ? { path: baseUrl + '/' + (nPage - 1), query: query } : {}"
    >
      <img :src="hasPrev ? arrows.prev.on : arrows.prev.off" alt="이전">
    </router-link>
    <template
        v-for="i in lastPage"
    >
      <router-link
          v-if="i >= start && i <= end"
          :key="'pager-' + i"
          :class="{ 'on': nPage === i}"
          :to="{ path: baseUrl + '/' + i, query: query }"
      >
        {{ i }}
      </router-link>
    </template>
    <router-link
        :to="hasNext ? { path: baseUrl + '/' + (nPage + 1), query: query } : {}"
    >
      <img :src="hasNext ? arrows.next.on : arrows.next.off" alt="다음">
    </router-link>
    <router-link
        :to="hasNext ? { path: baseUrl + '/' + lastPage, query: query } : {}"
    >
      <img :src="hasNext ? arrows.nextEnd.on : arrows.nextEnd.off" alt="끝">
    </router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pager',
  props: [
      'baseUrl',
      'query',
      'lastPage',
      'nPage'
  ],
  data () {
    return {
      arrows: {
        prevStart: {
          on: require('@/assets/images/10news/prev_start_active.png'),
          off: require('@/assets/images/10news/prev_start.png')
        },
        prev: {
          on: require('@/assets/images/10news/prev_active.png'),
          off: require('@/assets/images/10news/prev.png')
        },
        next: {
          on: require('@/assets/images/10news/next_active.png'),
          off: require('@/assets/images/10news/next.png')
        },
        nextEnd: {
          on: require('@/assets/images/10news/next_end_active.png'),
          off: require('@/assets/images/10news/next_end.png')
        }
      }
    }
  },
  computed: {
    hasPrev () {
      if (this.nPage === 1) {
        return false
      } else {
        return true
      }
    },
    hasNext () {
      if (this.nPage === this.lastPage) {
        return false
      } else {
        return true
      }
    },
    start () {
      const nPage = this.nPage
      const lastPage = this.lastPage
      let page = 1
      if (nPage < 2) {
        page = 1
      } else {
        if (nPage > lastPage - 3) {
          page = lastPage - 3
        } else {
          page = nPage - 1
        }
      }
      return page
    },
    end () {
      const nPage = this.nPage
      const lastPage = this.lastPage
      let page
      if (nPage > lastPage - 3) {
        if (nPage < 2) {
          page = 4
        } else {
          page = lastPage
        }
      } else {
        if (nPage < 2) {
          page = 4
        } else {
          page = nPage + 2
        }
      }
      return page
    },
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
