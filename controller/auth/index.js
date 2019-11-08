var UserRule = require("../../model/userRule");
var translateDataToTree = require("../../common/function").translateDataToTree;
var returnJson = require("../../common/function").returnJson;
var checkDataComplete = require("../../common/function").checkDataComplete;

/**
 * 获取规则菜单
 */
exports.getRuleMenu = (req, res) => {
  UserRule.findAll({
    where: {
      status: 'normal'
    },
    attributes: ['id', 'pid', 'title']
  }).then(rules => {
    // ORM 获取数据是对象，数据操作只要数据
    let data = []
    rules.forEach((ele) => {
      data.push(ele['dataValues'])
    })
    let ruleTree = translateDataToTree(data, "pid", "id", "children");
    let result = {};
    result.authRules = ruleTree
    res.send(JSON.stringify(returnJson(result)))
  })
}

/**
 * 增加规则
 */
exports.addUserRule = (req, res) => {
  let has = checkDataComplete(req.body)
  if(!has){
    res.send(returnJson({}, '1001', '参数缺失'))
    return;
  }
  if(req.body.status == "1") {
    req.body.status = 'normal'
  } else {
    req.body.status = 'hidden'
  }
  req.body.createDate = Date.parse(new Date());
  req.body.updateDate = Date.parse(new Date());
  UserRule.create(req.body).then((res) => {
    
  }).catch((err) => {
    // TODO 日志功能
    console.log(err.message)
  })

  res.send(returnJson({}, '2000', '请求成功'))
}

/**
 * 获取所有规则
 */
exports.getAllRule = (req, res) => {
  UserRule.findAll({
    attributes: ['id', 'pid', 'name', 'title', 'remark', 'isMenu', 'weigh', 'status']
  }).then((rules) => {
    let data = []
    rules.forEach((ele) => {
      data.push(ele['dataValues'])
    })
    let ruleTree = translateDataToTree(data, "pid", "id", "children");
    let result = {};
    result.authRules = ruleTree
    res.send(JSON.stringify(returnJson(result)))
  })
}
