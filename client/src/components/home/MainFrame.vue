<template>
  <div class="main-frame">
    <header>
      json
    </header>
    <section class="main-frame-content">
      <nav>
      </nav>

      <main>
        <router-view></router-view>
      </main>

      <aside>
      </aside>
    </section>
    <footer>
      <a href="http://www.naver.com">JSON</a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'MainFrame',
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
$content-max-width: 800px;

@media all {
  .main-frame { // It's me
    display: flex;
    flex-flow: column;
  }

  header {
    border-bottom: 1px solid gray;
  }

  footer {
    background: #626795;
    padding: 10px 0;
  }

  .main-frame-content {
    display: flex;
    nav {
      border-right: 1px solid gray;
    }
    aside {
      // border-left: 1px solid gray;
    }

    nav, aside {
      flex-basis: 150px;
      flex-shrink: 0;
    }
    main {
      flex-grow: 1;
    }
  }

  .content {
    max-width: $content-max-width;
    word-wrap: break-word;
  }
}

@media all and (max-width: 480px) {
  .main-frame-content {
    flex-flow: column wrap;
  }
}

@media all and (max-width: 320px) {
}

</style>
