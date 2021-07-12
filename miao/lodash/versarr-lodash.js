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
  return {
    chunk: chunk,
    compact: compact,
    
  }
}()