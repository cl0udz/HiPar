"use strict";

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

require("core-js/modules/web.timers");

function Buff(opts) {
  this.type = opts.type;
  this.timeout = opts.timeout;
  this.useCallback = opts.useCallback;
  this.unuseCallback = opts.unuseCallback;
}

Buff.prototype.use = function (player) {
  if (!!this.useCallback) {
    player.addBuff(this);
    this.useCallback(player);

    if (this.timeout > 0) {
      if (!!this.unuseCallback) {
        setTimeout(function () {
          player.removeBuff(this);
          this.unuseCallback(player);
        }, this.timeout);
      }
    }
  }
};

var ConfuseBuff = function () {
  return function (timeout) {
    return new Buff({
      type: 'confuse',
      useCallback: function useCallback(player) {
        player.confused = true;
      },
      unuseCallback: function unuseCallback(player) {
        player.confused = false;
      }
    });
  };
}();

var AttackStrengthenBuff = function () {
  return function (increaseParam, timeout) {
    return new Buff({
      type: 'attackStrengthen',
      useCallback: function useCallback(player) {
        player.attackParam *= increaseParam;
      },
      unuseCallback: function unuseCallback(player) {
        player.attackParam /= increaseParam;
      }
    });
  };
}();

var DefenceStrengthenBuff = function () {
  return function (increaseParam, timeout) {
    return new Buff({
      type: 'defenceStrengthen',
      useCallback: function useCallback(player) {
        player.defeneceParam *= increaseParam;
      },
      unuseCallback: function unuseCallback(player) {
        player.defence /= increaseParam;
      }
    });
  };
}();

var EquipmentStrengthenBuff = function () {
  return function (increaseParam, timeout) {
    return new Buff({
      type: 'equipmentStrengthen',
      useCallback: function useCallback(player) {
        player.equipmentParam *= increaseParam;
      },
      unuseCallback: function unuseCallback(player) {
        player.equipmentParam /= increaseParam;
      }
    });
  };
}(); // 背水一战
// increase attack, decrease defence


var BeishuiyizhanBuff = function () {
  return function (increaseParam, decreaseParam, timeout) {
    return new Buff({
      type: 'beishuiyizhan',
      useCallback: function useCallback(player) {
        player.attackParam *= increaseParam;
        player.defenceParam /= decreaseParam;
      },
      unuseCallback: function unuseCallback(player) {
        player.attackParam /= increaseParam;
        player.defenceParam *= decreaseParam;
      }
    });
  };
}(); //苦肉计


var KuroujiBuff = function () {
  return function (increaseParam, hp, timeout) {
    var used = false;
    return new Buff({
      type: 'kurouji',
      useCallback: function useCallback(player) {
        if (player.hp < hp) {
          return;
        }

        used = true;
        player.hp -= hp;
        player.attackParam *= increaseParam;
        player.updateTeamMemberInfo();
      },
      unuseCallback: function unuseCallback(player) {
        if (used) {
          player.attackParam /= increaseParam;
        }
      }
    });
  };
}();

var create = function create(skill) {
  return null;
};

module.exports.ConfuseBuff = ConfuseBuff;
module.exports.AttackStrengthenBuff = ConfuseBuff;
module.exports.DefenceStrengthenBuff = DefenceStrengthenBuff;
module.exports.EqipmentStrengthenBuff = EquipmentStrengthenBuff;
module.exports.BeishuiyizhanBuff = BeishuiyizhanBuff;
module.exports.KuroujiBuff = KuroujiBuff;
module.exports.create = create;