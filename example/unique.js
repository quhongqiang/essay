/**
 * 待处理的数组
 */
const array = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN]

/**
 * 数组去重
 * @param {array} array 
 * @param {function} computed 支持element, index, array三个参数
 */
function unique(array, computed) {
    if (!(array instanceof Array)) return array
    computed = computed && typeof computed === 'function' ? computed : value => value
    const filter = {}
    return array.filter((element, index) => {
        element = computed(element, index, array)
        const key = typeof element + JSON.stringify(element);
        return filter.hasOwnProperty(key) ? false : (filter[key] = true)
    });
}
console.log(unique(array))