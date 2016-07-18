# webpack+react+redux+es6 开发版本

到当前目录命令行：npm install   下载依赖包

windows 开发环境运行: npm run start-win  

mac 开发环境运行:npm run start


## 添加redux-tool:

https://github.com/gaearon/redux-devtools

## 添加sublime 对es-6的语法检测

你需要下载：
> npm install -g eslint eslint-plugin-react

SublimeLinter-eslint插件安装(插件官网是没有,需到github下载，放到sulime 的packages文件夹中)：

下载地址：
https://github.com/roadhump/SublimeLinter-eslint

在项目目录需要下载：
> npm install  babel-eslint eslint eslint-plugin-react --save-dev

在项目根目录添加.eslintrc 和 .babelrc文件
请参考笔者的配置

参考：http://cheng.logdown.com/posts/2015/09/15/linting-react-jsx-and-es6-javascript-with-eslint


## 参考资料：

### 入门级别：

* http://www.alloyteam.com/2015/09/react-redux/

* http://cn.redux.js.org/docs/basics/UsageWithReact.html