"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dns = require("dns");

/**
 * @fileOverview 实现Index 数据模型
 * @author yuanzhijia@yidengxuetang.com
 */

/**
 * IndexModel类，生成一段异步的数据
 * @class
 */
class IndexModel {
  /**
   * @constructor
   * @param {string} app koa2的上下文环境
   */
  constructor(app) {}
  /**
   * 获取具体的API接口数据
   * @returns {Promise} 返回的异步处理结果
   * @example
   * return new Promise
   * getData()
   */


  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello IndexAction");
      }, 1000); //throw new Error("")
      //reject("")
    });
  }

}

exports.default = IndexModel;