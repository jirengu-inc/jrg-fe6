# 对象的操作

* 判断属性是否存在 obj[pro] === undefined 或者 pro in obj
* 遍历的问题

```
var obj = {
  a : 1,
  b : 2
};

for(var key in obj){
  // 这里的key是以字符串的形式展现

  console.log(key);
  
  console.log(obj.key);
  
  console.log(obj[key]);
}
```

**obj.key等价于obj["key"]**


* 数组是特殊的对象

```
var obj = {};
var array = [];

typeof obj; // object
typeof array; // object
```

* delete array[2] 不会影响数组本身的length属性


