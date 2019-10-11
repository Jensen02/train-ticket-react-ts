/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-10-10 18:23:43
 * @LastEditors: Jensen
 * @LastEditTime: 2019-10-10 22:05:02
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }), 
);