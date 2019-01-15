// 创建克隆对象
function createData(deep = 0, breadth = 0) {
    const root = {}
    let pointer = root
    for (let i = 0; i < deep; i++) {
        pointer.data = {}
        pointer = pointer.data
        for (let j = 0; j < breadth && i === deep -1; j++) {
            pointer[j] = j
        }
    }
    return root
}

/**
 * 深度克隆
 * @description 简单的克隆，无法解决循环应用以及层级过深会爆栈，无法处理Date，RegExp， Dom Node 函数复制
 * @version 1.0
 * @param {*} obj 
 */
function deepClone (obj) {
    // 处理非object类型
    if (typeof obj !== 'object') return obj
    // 处理object
    const result = {};
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            result[key] = deepClone(obj[key])
        } else {
            result[key] = obj[key]
        }
    })
}