/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();     // to store results
  let callCount = 0;           // to count real fn calls
    return function(...args) {
         const key = JSON.stringify(args); // turn arguments into a string to use as a key

    if (cache.has(key)) {
      return cache.get(key);  // return saved result
    } else {
      const result = fn(...args); // call the original function
      cache.set(key, result);     // save it in cache
      callCount++;                // increase call count
      return result;
    }
  };

  memoizedFn.getCallCount = () => callCount; // helper to get how many times fn was called

  return memoizedFn;
        
    }



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */