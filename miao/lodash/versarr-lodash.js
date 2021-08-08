var versarr = function(){
  function chunk(array, size = 1) {
    let ans = [],
        step = Math.ceil(array.length / size)
    if (array.length == 0 || size < 0) {
      return []
    }
   let j = 0
      for (let i = 0; i < step ; i++) {
        ans.push(array.slice(j, j + size))
        j += size
      }
    return ans
  }
  function compact(array) {
    let ans = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            ans.push(array[i])
        }
    }
    return ans
}
function concat(array, values) {
  let ans = array
  for (let i = 1; i < arguments.length; i++) {
      if (typeof arguments[i] == 'number') {
          ans.push(arguments[i])
      } else {
          for (let j = 0; j < arguments[i].length; j++) {
              ans.push(arguments[i][j])
          }
      }
  }
  return ans
}
function drop(array, n = 1) {
  if (n > array.length) {
      return []
  }
  return array.slice(n, array.length)
}
function dropRight(array, n = 1) {
  if (n > array.length) {
      return []
  }
  return array.slice(0, array.length - n)
}
function fill(array, value, start = 0, end = array.length) {
  for (let i = start; i < end; i++) {
      array[i] = value
  }
  return array
}
function flatten(array) {
  let ans = []
  for (let i = 0; i < array.length; i++) {
      if(Array.isArray(array[i])) {
          for (let j = 0; j < array[i].length; j++) {
              ans.push(array[i][j])
          }
      } else {
          ans.push(array[i])
      }
  }
  return ans
}
function flattenDeep(array) {
  let ans = [];
  (function flat(array) {
      array.forEach((item) => {
      if (Array.isArray(item)) {
          flat(item)
      } else {
          ans.push(item)
      }
  })
  })(array)
  return ans
}
function flattenDepth(array, depth = 1) {
  let ans = [];
  (function flat(array, depth) {
      array.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
          flat(item, depth - 1)
      } else {
          ans.push(item)
      }
  })
  })(array, depth)
  return ans
}
function head(array) {
  return array.length > 0 ? array[0] : undefined
}
function indexOf(array, value, fromIndex = 0) {
  if (fromIndex >= 0) {
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
} else {
    for (let i = array.length + fromIndex; i < array.length; i++) {
        if (array[i] === value) {
          return i
        }
    }
}
return -1
}
function initial(array) {
  return array.slice(0, array.length - 1)
}
function join(array, separator = ',') {
  let ans = ''
  for (let i = 0; i < array.length - 1; i++) {
      ans += array[i]
      ans += separator
  }
  ans += array[array.length - 1]
  return ans
}
function last(array) {
  return array[array.length - 1]
}
function lastIndexOf(array, value, fromIndex = array.length - 1) {
  if (fromIndex >= 0) {
      for (let i = fromIndex; i >= 0; i--) {
          if (array[i] === value) {
              return i
          }
      }
  } else {
      for (let i = array.length + fromIndex; i >= 0; i--) {
          if (array[i] === value) {
              return i
          }
      }
  }
  return -1
}
function nth(array, n = 0) {
  if (n >= 0) {
      return array[n]
  } else {
      return array[array.length + n]
  }
}
function pull(array, ...values) {
  for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (array[j] === values[i]) {
              array.splice(j, 1)
          }
      }
  }
  return array
}
function reverse(array) {
  let i = 0,
      j = array.length - 1
  while (j > i) {
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp
          i++
          j--
  }
  return array
}
function slice(array, start = 0, end = array.length) {
  let res = []
  if (start >= 0 ) {
      if (end > 0) {
          for ( let i = start; i < (end > array.length ? array.length : end); i++) {
              res.push(array[i])
          }
      } else {
          for (let i = start; i < array.length + end; i++) {
              res.push(array[i])
          }
      }
  } else {
      if (end > 0) {
          for (let i = array.length + start; i < (end > array.length ? array.length : end); i++) {
              res.push(array[i])
          }
      } else {
          for (let i = array.length + start; i < array.length + end; i++) {
              res.push(array[i])
          }
      }
  }
  return res
}
function sortedIndex(array, value) {
  let i = 0,
  j = array.length - 1
  while(i < j) {
      var mid = (i + j) >> 1
      if (array[mid] > value) {
          j = mid 
      } else {
          i = mid + 1
      }
  }
  return mid + 1
}
function tail(array) {
  return array.slice(1)
}
function take(array, n = 1) {
  return array.slice(0, n)
}
function takeRight(array, n = 1) {
  return n > array.length ? array.slice() : array.slice(array.length - n)
}
function union(arrays) {
  let res = []
  for (let ary of arguments) {
      for (let i = 0; i < ary.length; i++) {
          if (!res.includes(ary[i])) {
              res.push(ary[i])
          }
      }
  }
  return res
}
function uniq(array) {
  let res = []
  for (let i = 0; i < array.length; i++) {
      if (!res.includes(array[i])) {
          res.push(array[i])
      }
  }
  return res
}
function unzip(array) {
  let res = [],
  temp = []
  for (let i = 0; i < array[0].length; i++) {
      for (let ary of array) {
          temp.push(ary[i])
      }
      res.push(temp.slice())
      temp = []
  }
  return res
}
function without(array, ...values) {
  let res = [],
  temp = [...values]
  for (let i = 0; i < array.length; i++) {
      if (!temp.includes(array[i])) {
          res.push(array[i])
      }
  } 
  return res
}
function xor(arrays) {
  let res = [],
  temp = []
  for (let array of arguments) {
      for (let i = 0; i < array.length; i++) {
          if (!res.includes(array[i])) {
              res.push(array[i])
          } else {
              temp.push(array[i])
          }
      }
  }
  //let t = [... new Set(temp)]
  pull(res, ...temp)
  return res
}
function zip(arrays) {
  let res = [],
  temp = []
  for (let i = 0; i < arguments[0].length; i++) {
      for (let array of arguments) {
          temp.push(array[i])
      }
      res.push(temp.slice())
      temp = []
  }
  return res
}
function zipObject(props, values) {
  let res = {}
  for (let i = 0; i < props.length; i++) {
      Object.defineProperty(res, props[i], {
          value: values[i]
      }) 
  }
  return res
}
function bind(f, thisArg, ...partials) {
  Object.defineProperty(bind, 'placeholder', {
      value: '_'
  })
  return function(...args) {
      let pars = partials.slice(),
      j = 0
      for (let i = 0; i < pars.length; i++) {
          if (pars[i] === bind.placeholder) {
              if (j < args.length) {
                  pars[i] = args[j++]
              } else {
              pars[i] = undefined
              }
          } 
      }
      while (j < args.length) {
          pars.push(args[j++])
      }
      return f.apply(thisArg, pars)
  }
}
var parseJson = (function() {
  var str 
  var i = 0
  return function parseJson(values) {
    str = values
    i = 0
    return parseValue()
  }
  function parseValue() {
    var c = str[i]
    if (c == '[') {
      return parseArray()
    }
    if (c == '{') {
      return parseObject()
    }
    if (c == '"') {
      return parseString()
    }
    if (c == 't') {
      return parseTrue()
    }
    if (c == 'f') {
      return parseFalse()
    }
    if (c == 'n') {
      return parseNull()
    }
    return parseNumber()
  }
  function parseTrue() {
    let s = str.substr(i, 4)
         if (s !== 'true') {
           throw new SyntaxError('unexpected token:' + s + 'at' + i)
         }
        i += 4
        return true
  }
  function parseFalse() {
    let s = str.substr(i, 5)
         if (s !== 'false') {
           throw new SyntaxError('unexpected token:' + s + 'at' + i)
         }
        i += 5
        return false
  }
  function parseNull() {
    i += 4
    return null
  }
  function parseString() {
    i++  //跳过字符串开头的引号
    let res = ''
    while (str[i] !== '"') {
      res += str[i++]
    }
    i++  //跳过字符串末尾引号
    return res
  }
  function parseNumber() {
    let numStr = ''
    while (str[i] >= '0' && str[i] <= '9') {
      numStr += str[i++]
    }
    return Number(numStr)
  }
  function parseArray() {
    let res = []
    i++
    while (str[i] !== ']') {
      var val = parseValue() //此处因为数组元素可以是任何类型,所以调用parseValue
      res.push(val)
      if (str[i] == ',') {
        i++
      } else if (str[i] == ']') { //遇到]当前数组结束
        break
      } else {
        throw new SyntaxError('unexpected token at' + i)
      }
    }
    i++
    return res
  }
  function parseObject() {
    let res = {}
    i++
    while (str[i] !== '}') {
      var key = parseString()
      i++  //跳过冒号
      var val = parseValue()
      res[key] = val
      if (str[i] == ',') {
        i++
      }
    }
    i++
    return res
  }
})()
  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    head: head,
    indexOf: indexOf,
    initial: initial,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    nth: nth,
    pull: pull,
    reverse: reverse,
    slice: slice,
    sortedIndex: sortedIndex,
    tail: tail,
    take: take,
    takeRight: takeRight,
    union: union,
    uniq: uniq,
    unzip: unzip,
    without: without,
    xor: xor,
    zip: zip,
    zipObject: zipObject,
    bind: bind,
    parseJson: parseJson
  }
}()