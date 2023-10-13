/**
 * 1-双向链表 微软可能就考这个知识点
 * https://leetcode.cn/problems/lru-cache/solutions/2456294/tu-jie-yi-zhang-tu-miao-dong-lrupythonja-czgt/
 * 上面这个也用到了map 但是为什么不直接就用map的性质啊 故意搞麻烦
 * 2-Map 数据结构 ok 
 * map.get(key) 
 * map.delete(key) 
 * map.set(key)
 * map.has(key)
 * map.keys(); map.keys().next().value
 * map.size
 */


/** Map数据结构
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.map.has(key)) {
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key,value);
    return value;
  }else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.map.has(key)){
    this.map.delete(key);
  }
  this.map.set(key,value);
  if(this.map.size > this.capacity) {
    //keys() 返回一个引用的迭代器对象。它包含按照顺序插入 Map 对象中每个元素的 key 值。
    this.map.delete(this.map.keys().next().value)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */