<!--
 * @Author: hepeng
 * @Date: 2020-01-07 14:58:39
 * @LastEditTime : 2020-01-13 16:49:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \easy-dsj-api-web\README.md
 -->
# 大数据 前端API网站
    框架技术栈: Vue + Vue-router + Vuex + TS
    模块NPM: easy-dsj
    Vue模板: https://github.com/he8hepeng/myVue-compontent.git
    Vue-cli3脚手架: vue create --preset he8hepeng/cli3
    开发小组: Code-destroys-the-world
    API开发地址: https://github.com/Code-destroys-the-world/easy-dsj-api-web.git
    NPM模块开发地址: https://github.com/Code-destroys-the-world/esay-dsj-components.git
    vue3.0模板: https://github.com/Code-destroys-the-world/vue-template-cli3.git
    vue2.x模板: https://github.com/Code-destroys-the-world/vue-template-cli2.x.git

### Api网站 TS+Vue(全家桶)

---
期望完成: easy-dsj Vue模板 数据操作 等查询的 学习的功能
---

### 开发须知
1.已完成自动化router构建
  · scr/views/pages 文件夹下的.vue文件 为模块入口文件
  · src/components/pages 为模块的子路由 命名方式 模块名 + '_' + 组件名.vue
  · 之后router会自动添加路由文件 不许要进行维护

### 提交规范
---
Lslint必须开启 无任何警告,报错方可提交
新建个人 feature/your-name 分支进行开发
模块开发完成后 提交并联系管理员 进行merge
---

#### 常见错误

    依赖错误

| 错误信息                                                                                                                                                    | 解决方法                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Declaration of public instance field not allowed after declaration of private instance field. Instead, this should come at the beginning of the class/interface | vueX声明顺序修改               |
| 行3" should be '                                                                                                                                               | 双引号 改为 单引号           |
| Calls to 'console.log' are not allowed.                                                                                                                         | 使用后 请删除                  |
| Expected 1 arguments, but got 0.                                                                                                                                | @Component 在无其它声明时 不许要括号 |


