"use strict";

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/web.url.to-json");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/web.url.to-json");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/web.url.to-json");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/web.url.to-json");
/**
 * Module dependencies
 */


var util = require('util');

var Entity = require('./entity');

var EntityType = require('../../consts/consts').EntityType;
/**
 * Initialize a new 'Item' with the given 'opts'.
 * Item inherits Entity
 *
 * @param {Object} opts
 * @api public
 */


var Item = function Item(opts) {
  Entity.call(this, opts);
  this.type = EntityType.ITEM;
  this.name = opts.name;
  this.desc = opts.desc;
  this.englishDesc = opts.englishDesc;
  this.hp = opts.hp;
  this.mp = opts.mp;
  this.price = opts.price;
  this.heroLevel = opts.heroLevel;
  this.imgId = opts.imgId;
  this.lifetime = 30000;
  this.time = Date.now();
  this.playerId = opts.playerId;
  this.died = false;
};

util.inherits(Item, Entity);
/**
 * Expose 'Item' constructor.
 */

module.exports = Item;
/**
 * Item refresh every 'lifetime' millisecond
 *
 * @api public
 */

Item.prototype.update = function () {
  var next = Date.now();
  this.lifetime -= next - this.time;
  this.time = next;

  if (this.lifetime <= 0) {
    this.died = true;
  }
};

Item.prototype.toJSON = function () {
  return {
    entityId: this.entityId,
    kindId: this.kindId,
    x: this.x,
    y: this.y,
    playerId: this.playerId,
    type: this.type
  };
};