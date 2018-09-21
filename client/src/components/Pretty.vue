<template>
  <div class="pretty content">
    <el-button type="primary">button</el-button>
    <div>
      {{ errorMsg}}
    </div>
    <input id="upload-file" type="file" multiple @change="uploadFile"/>
    <div>
      {{fileContent}}
    </div>
  </div>
</template>
<script>
import PrettyMaker from '@/classes/PrettyMaker';

export default {
  name: 'Pretty',
  data() {
    return {
      errorMsg: '',
      fileData: {},
      fileContent: '',
      maker: null,
      printArr: [],
    };
  },
  mounted() {
    if (!this.checkBrowserSupportFileApi()) {
      this.errorMsg = 'The File APIs are not fully supported in this browser.';
    }
  },
  methods: {
    checkBrowserSupportFileApi() {
      return !!(window.File && window.FileReader && window.FileList && window.Blob);
    },

    uploadFile(event) {
      const reader = new FileReader();
      this.fileData = event.target.files[0]; // get one file data.
      reader.onload = this.onReaderLoad;
      reader.readAsText(this.fileData);
    },

    onReaderLoad(event) {
      this.fileContent = JSON.parse(event.target.result);
      this.maker = new PrettyMaker(this.fileContent);
      // console.log('object: ', this.maker.data);
      this.printArr = [];
      this.print(this.maker.data, 0, 0);
    },

    prefixMaker(spaceLen) {
      return `${' '.repeat(spaceLen)}- `;
      // return '-'.repeat(depth);
    },

    print(data, depth, spaceLen) {
      const keys = Object.keys(data);
      const prefix = this.prefixMaker(spaceLen);

      keys.forEach((key) => {
        if (key !== 'cnt') {
          // console.log(`${'  '.repeat(depth)}depth [${depth}]`);
          const str = `${key} ${data[key].cnt}`;
          console.log(prefix + str);
          this.print(data[key], depth + 1, spaceLen + str.length + 1);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.pretty {
  border: 1px dotted green;
}

#upload-file {
  border: 1px solid blue;
}
</style>
