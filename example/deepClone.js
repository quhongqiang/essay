/**
 * 深度克隆
 * @description 简单的克隆，无法解决循环应用以及层级过深会爆栈，无法处理Date，RegExp， Dom Node 函数复制
 * @version 1.0
 * @param {*} obj 
 * @returns {*}
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
    return result
}

/**
 * 深度克隆
 * @description 相比较上一版本，解决了层级较深会爆栈的问题，采用深度优先遍历
 * @version 2.0
 * @param {*} obj 
 * @returns {*}
 */
function deepClone (obj) {
    // 处理非object类型
    if (typeof obj !== 'object') return obj
    // 处理object
    const result = {}
    const stack = []
    stack.push({
        parent: result,
        key: null,
        data: obj
    })
    while (stack.length) {
        const { parent, key, data } = stack.pop();
        let pointer = parent
        if (!!key) {
            parent[key] = {}
            pointer = parent[key]
        }
        Object.keys(data).forEach(keyItem => {
            if (data[keyItem] && typeof data[keyItem] === 'object') {
                stack.push({
                    parent: pointer,
                    key: keyItem,
                    data: data[keyItem]
                })
            } else {
                pointer[keyItem] = data[keyItem]
            }
        } )
    }
    return result
}

/**
 * 深度克隆
 * @description 相比较上一版本，解决了循环引用的问题，并改用了广度优先遍历
 * @version 3.0
 * @param {*} obj 
 * @returns {*}
 */
function deepClone (obj) {
    // 处理非object类型
    if (typeof obj !== 'object') return obj
    // 处理object
    const result = {}
    const store = new Map()
    const stack = []
    stack.push({
        parent: result,
        key: null,
        data: obj
    })
    while (stack.length) {
        const { parent, key, data } = stack.shift();
        let pointer = parent
        if (!!key) {
            parent[key] = {}
            pointer = parent[key]
        }
        const copyItem = store.get(data)
        if (copyItem) {// key不存在时，copyItem也不可能存在
            parent[key] = copyItem
            continue;
        } else {
            store.set(data, pointer)
        }
        Object.keys(data).forEach(keyItem => {
            if (data[keyItem] && typeof data[keyItem] === 'object') {
                stack.push({
                    parent: pointer,
                    key: keyItem,
                    data: data[keyItem]
                })
            } else {
                pointer[keyItem] = data[keyItem]
            }
        } )
    }
    return result
}


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
// 测试
try {
    console.log.call(null, deepClone(createData(3000,100)))
} catch (error) {
    console.log(err)
}