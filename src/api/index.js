/*
 * @Author: xgj
 * @since: 2020-06-08 13:52:17
 * @lastTime: 2020-09-17 17:33:42
 * @LastAuthor: xgj
 * @FilePath: /admin/src/api/index.js
 * @message:
 */

/**
 * 网络请求接口
 * @namespace apis
 */


import * as Menu from './modules/Menu';
import * as User from './modules/User';
import * as Role from './modules/Role';
import * as File from './modules/File';


export default {
  File,
  Role,
  User,
  Menu
};
