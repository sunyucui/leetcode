/**
 * 自动机？？
 * 
 */
var myAtoi = function (s) {
  class Automation {
    constructor() {
      this.state = 'start';
      this.sign = 1;
      this.answer = 0;
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']],
      ])
    }
    // 0-start;1-signed;2-in_number;3-end;
    getStateIndex(char) {
      if(char === ' ') { //必须是空格
        return 0;
      }
      if(char === '-' || char === '+'){
        return 1;
      }
      if(typeof Number(char) == 'number' && !isNaN(char)){
        return 2;
      }
      return 3;
    }

    //处理当前char
    get(char) {
      // 下一状态
      this.state = this.map.get(this.state)[this.getStateIndex(char)];
      if(this.state === 'in_number'){
        this.answer = this.answer*10 + Number(char)
        // 边界判断
        this.answer = this.sign === 1 ?
        Math.min(this.answer, Math.pow(2,31)-1):
        Math.min(this.answer, -Math.pow(-2, 31)); //注意负号
      }
      if(this.state === 'signed') {
        this.sign = char === '+' ? 1:-1;
      }
    }
  }

  let automation = new Automation();

  for(let char of s){ //数组 for of
    automation.get(char);
  }
  return automation.sign * automation.answer;
  

};