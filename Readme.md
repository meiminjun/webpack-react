# [webpack+react+redux+es6 开发版本](https://github.com/meiminjun/webpack-react/tree/react+redux)

> 项目地址：https://github.com/meiminjun/webpack-react/tree/react+redux

到当前目录命令行：

> npm install   下载依赖包

开发环境运行:

> npm start

## 目录结构说明

* app/index：默认用react 编码完成的一个例子
* app/demo：一个静态样例
* app/redux：react+redux结合的一个例子
* app/react-router-redux：添加了react+react-router+redux结合的一个例子

## 添加redux-devtool:

这个插件可以对redux 的state、action可视化查看

笔者直接使用的是chrome扩展redux-devtools

详情请参考：

https://github.com/gaearon/redux-devtools

## 添加[cross-env](https://www.npmjs.com/package/cross-env)

> npm install -s cross-env

这个包是在package.json 中用来切换环境的
```
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```

## 添加sublime 对es-6的语法检测

你需要下载：
> npm install -g eslint eslint-plugin-react

SublimeLinter-eslint插件安装(插件官网是没有,需到github下载，放到sulime 的packages文件夹中)：

下载地址：

https://github.com/roadhump/SublimeLinter-eslint

在项目目录需要下载：
> npm install  babel-eslint eslint eslint-plugin-react --save-dev

在项目根目录添加.eslintrc 和 .babelrc文件，请参考笔者的配置

参考：http://cheng.logdown.com/posts/2015/09/15/linting-react-jsx-and-es6-javascript-with-eslint

## 参考资料：

### 入门级别：

* http://www.alloyteam.com/2015/09/react-redux/

* http://cn.redux.js.org/docs/basics/UsageWithReact.html

## 学习进程：
* 2016-07-18：已整合好redux
* 2016-07-19：开始介入react-router
* 2016-07-21：已经整合好react-router+redux
