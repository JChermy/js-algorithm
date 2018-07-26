/**
 * 根据关键词找出所在对象的id
 * @param {Array} docs 
 * @param {Array} word 
 */
function findDocList(docs, word=[]) {
    if(word.constructor !== Array) return ;
    let ids = [];
    for(let i=0;i<docs.length;i++) {
        let {id, words} = docs[i];
        let flag = word.every((item) => {
            return words.indexOf(item) > -1;
        })
        if(flag) {
            ids.push(id);
        }
    }
    return ids;
}


var docs = [
    {
        id: 1,
        words: ['hello', "world"]
    }, {
        id: 2,
        words: ['hello', "hihi"]
    }, {
        id: 3,
        words: ['haha', "hello"]
    }, {
        id: 4,
        words: ['world', "nihao"]
    }
];

findDocList(docs, ['hello', 'world']); //[1]
findDocList(docs, ['hello']); //[1, 2, 3]
findDocList(docs, ['world']); // [1, 4]
