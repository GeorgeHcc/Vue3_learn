
//#region  Vue3响应式的实现
/**
 * 为什么Vue3使用proxy？
 * defineproperty劫持的是对象的属性，如果新增元素会再次调用defineproperty，
 * 而proxy劫持的是整个对象，不需要做特殊处理Object。
 * 缺点：不兼容IE，也没有polyfill
 */

//#endregion