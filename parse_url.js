/**
 * 问题：尽可能的全面正确的解析一个任意 url 的所有参数为 Object，注意边界条件的处理。
 */
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
 
function parseParam(url) {
    const queryStr = /^.+\?(.+)$/.exec(url)[1];
    const queryArr = queryStr.split('&');
    const paramsObj = {}
    queryArr.map((item) => {
        let [key, value] = item.split('=');
        if(/=/.test(item)) {
            let _value = decodeURIComponent(value);
            if(paramsObj.hasOwnProperty(key)) {
                paramsObj[key] = [].concat(paramsObj[key], _value);
            } else {
                paramsObj[key] = _value;
            }
        }else {
            paramsObj[key] = true;
        }
    })
    return paramsObj;
}

