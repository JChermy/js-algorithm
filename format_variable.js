/**
 * 问题：将驼峰式变量转换为下划线变量,或者将下划线变量转换为驼峰式变量
 * 示例：camelCasetoUnderLine("getObjectName"); //"get-object-name"
 *          underLinetocamelCase('get_object_name'); //"getObjectName"
 */
function camelCasetoUnderLine(str) {
  if(typeof str !== 'string') {
       throw TypeError('请传入字符串类型的参数');
  }
  return  str.replace(/[A-Z]/g, function(val, index) {
       const char = val.toLowerCase();
       return index === 0 ? char : '_'+char;
   })
}

function underLinetocamelCase(str) {
    if(typeof str !== 'string') {
        throw TypeError('请传入字符串类型的参数');
    }
    return str.replace(/_([a-zA-z])/g, function(match, letter, index) {
        if(index > 0) {
            return letter.toUpperCase();
        }
        return match;
    })
}