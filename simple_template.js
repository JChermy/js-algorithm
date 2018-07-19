/**
 * 问题：实现一个 render(template, obj) 方法，将 template 中的占位符用 obj 填充。
 * 示例：
 * var template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
    var obj = {
    name: '姓名',
    age: 18
    }
    render(template, obj); // 我是姓名，年龄18，性别undefined
 */

//方法1
function render(template, obj) {
    Object.keys(obj).forEach((key)=> {
        template = template.replace(new RegExp(`{{${key}}}`, 'g'), obj[key]);
    });
    return template;
}

//方法2
function render(template, obj) {
        return template.replace(/\{\{(.*?)\}\}/g, (macth,key) => obj[key.trim()]);
}


