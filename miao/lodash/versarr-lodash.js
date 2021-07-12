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
  }
}()