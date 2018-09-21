<template>
  <div class="cs-el-test">
    <div>
      select value: {{value7}}
      <el-button type="warning" @click="value.shift()">value.shift()</el-button>
      <el-input v-model="input"></el-input>
      <el-button type="primary" @click="addSelectOption(input)">option add()</el-button>
    </div>
    <el-select v-model="value7" placeholder="Select" @change="changeSelect"
    filterable multiple collapse-tags>
      <el-option-group
        v-for="group in options3"
        :key="group.label"
        :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-option-group>
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'ElementTest',
  data() {
    return {
      options3: [{
        label: 'selected',
        options: [{
          value: 'Shanghai',
          label: 'Shanghai',
          select: true,
        }, {
          value: 'Beijing',
          label: 'Beijing',
          select: true,
        }],
      }, {
        label: 'unselected',
        options: [{
          value: 'Chengdu',
          label: 'Chengdu',
          select: true,
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen',
          select: true,
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou',
          select: true,
        }, {
          value: 'Dalian',
          label: 'Dalian',
          select: true,
        }],
      }],
      value7: [],
      input: '',
      lastSelectStatus: {
        count: 0,
        value: null,
      },
    };
  },
  mounted() {
  },
  methods: {
    addSelectOption(str) {
      this.options3.push({ value: str, label: str });
    },

    sortSelectOption(options) {
      if (!Array.isArray(options)) {
        throw new Error('sortSelectOption()의 options는 Array type이어야 합니다.');
      }

      let selectOption;
      let unselectOption;

      options.forEach((opt) => {
        if (opt.label === 'selected') {
          selectOption = opt;
        } else if (opt.label === 'unselected') {
          unselectOption = opt;
        }
      });

      if (!selectOption || !unselectOption) {
        throw new Error('selectOption 또는 unselectOption을 찾을 수 없습니다.');
      }
    },

    changeSelect(selectedArr) {
      let selectedVal;

      if (this.lastSelectStatus.count < selectedArr.length) { // 새로운 option을 선택한 경우
        selectedVal = selectedArr[selectedArr.length - 1]; // last selected value
        console.log('추가');
      } else if (this.lastSelectStatus.count > selectedArr.length) { // 선택된 option을 해제한 경우
        selectedVal = selectedArr[selectedArr.length - 1]; // last selected value
        console.log('삭제');
      } else {
        throw new Error('this.lastSelectStatus.count는 selectedArr.length과 같을 수 없습니다.');
      }

      this.lastSelectStatus.count = selectedArr.length;
      console.log('changeSelect ', selectedVal);
    },
  },
};
</script>
<style lang="scss"></style>
