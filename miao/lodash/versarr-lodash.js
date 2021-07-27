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
  let ans = []
  for (let i = 0; i < arguments.length; i++) {
      ans.push(arguments[i])
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
    reverse: reverse,
    slice: slice,
    sortedIndex: sortedIndex,
    tail: tail,
    take: take,
    takeRight: takeRight,
    union: union
  }
}()