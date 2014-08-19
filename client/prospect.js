/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, Backbone:true, _:true, console:true */

(function () {
  "use strict";

  XT.extensions.xtuple_field_dev_sample.initModels = function () {
    XM.ProspectRelation.prototype.augment({
      numberLength: function () {
        return "_lengthIs".loc() + ": " + this.get("number").length;
      }
    });
  };
}());
