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
for (let i = 1000; i < 5000; i++) {
    try {
        const label = `JSON深度：${i} 深度拷贝花费时间：`
        console.time(label)
        JSON.parse(JSON.stringify(createData(i)))
        console.timeEnd(label)
    } catch (error) {
        console.log('栈溢出，JSON深度：%s', i)
        i = 10000
    }
}
