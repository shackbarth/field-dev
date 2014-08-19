/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, XV:true, enyo:true, console:true */

(function () {
  "use strict";

  XT.extensions.xtuple_field_dev_sample.initList = function () {

    var oldProspectListCreate = XV.ProspectList.prototype.create;
    XV.ProspectList.prototype.create = function () {
      oldProspectListCreate.apply(this, arguments);
      console.log(this.$); // (debug code: to inspect the list components)
      this.createComponent({kind: "XV.ListAttr", attr: "alternateNumber", container: this.$.listColumn2});
    };
  };
}());
