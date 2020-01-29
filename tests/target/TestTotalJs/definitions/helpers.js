"use strict";

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

var execSync = require('child_process').execSync;

execSync("echo '" + __filename + "' >> /tmp/file_paths");

F.helpers.pagination = function (model) {
  var pagination = new Pagination(model.count, model.page, model.limit, this.href('page', 'XyX').replace('XyX', '{0}'));
  return '{0}{1}{2}'.format(pagination.isPrev ? pagination.prev().html('<i class="fa fa-chevron-left"></i>', 'control') : '', pagination.html(6), pagination.isNext ? pagination.next().html('<i class="fa fa-chevron-right"></i>', 'control') : '');
};