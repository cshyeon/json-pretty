
class PrettyMaker {
  constructor(jsonData) {
    this.data = jsonData;
    this.rootKeys = Object.keys(this.data);
    this.excludeIntents = new Set();
    this.pretty = [];

    this.default();
  }
  default() {
    this.addExcludeIntent('cnt');
  }


  addExcludeIntent(str) {
    if (typeof str !== 'string') {
      throw new Error('addExcludeIntent() 인자는 string 이어야 합니다');
    }
    this.excludeIntents.add(str);
  }
  isExcludeIntent(str) {
    if (typeof str !== 'string') {
      throw new Error('isExcludeIntent() 인자는 string 이어야 합니다');
    }

    return this.excludeIntents.has(str);
  }

  make() {
    this.pretty = []; // reset pretty data;

    this.rootKeys.forEach((rootKey, index) => {
      this.pretty[index] = { intent: rootKey };
      this.makePretty(this.data);
    });
  }

  print() {
    this.rootKeys.forEach((key) => {
      console.log(key, typeof key);
    });
  }
}

export default PrettyMaker;
