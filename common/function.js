/**
 * 将有父子关系的平行数组转为树形数组
 * @param data  平行数组
 * @param parentId 父id的名称
 * @param id 数据的唯一id
 * @param child 返回数据的 key
 * @returns 
 */
module.exports.translateDataToTree = function(data, parentId="pid", id="id", child="children") {
  let parents = data.filter(value => value[parentId] == 'undefined' || value[parentId] == null || value[parentId] == 0)
  let children = data.filter(value => value[parentId] !== 'undefined' && value[parentId] != null)
  let translator = (parents, children) => {
    parents.forEach((parent) => {
      children.forEach((current, index) => {
        if (current[parentId] === parent[id]) {
          let temp = JSON.parse(JSON.stringify(children))
          temp.splice(index, 1)
          translator([current], temp)
          typeof parent[child] !== 'undefined' ? parent[child].push(current) : parent[child] = [current]
        }
      }
      )
    }
    )
  }
  translator(parents, children)
  return parents
}

/**
 * 统一数据返回格式
 * @param data 数据
 * @param code 状态码
 * @param msg 响应信息
 */
module.exports.returnJson = function(data, code="2000", msg="成功"){
  let res = new Object();
  res.data = {}
  // res.data.authRules = data
  res.data = data
  res.code = code
  res.msg = msg
  return res
}

/**
 * 参数提交检查是否为空
 * @param data object 数据
 * @param unCheckData array 不用检查的参数
 * @returns boolean true 检查通过 false 存在为空
 */
module.exports.checkDataComplete = function(data, unCheckData=[]){
  for(let key in data){
    if(unCheckData.indexOf(key) > -1){
    } else {
      if(data[key] === "undefined" || data[key] === null || data[key] === ""){
        return false;
      }
    }
  }
  return true;
}
