/*
 * @Author: xgj
 * @since: 2020-06-08 13:52:17
 * @lastTime: 2020-09-23 10:27:53
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
import * as Picture from './modules/Picture';
import * as Config from './modules/Config';
import * as Goods from './modules/Goods';
import * as ExchangeCard from './modules/ExchangeCard';


export default {
  File,
  Role,
  User,
  Menu,
  Picture,
  Config,
  Goods,
  ExchangeCard,
};
