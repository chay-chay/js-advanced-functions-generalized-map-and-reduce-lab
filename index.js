// Add your functions here

function map(sourceArray, num){
    let a = [];
    for ( let i = 0; i < sourceArray.length; i++ ){
        a.push(num(sourceArray[i]))
    }
    return a
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }

