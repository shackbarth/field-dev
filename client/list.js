/*jshint indent:2, curly:true, eqeqeq:true, immed:true, latedef:true,
newcap:true, noarg:true, regexp:true, undef:true, strict:true, trailing:true,
white:true*/
/*global XT:true, XM:true, XV:true, enyo:true, console:true */

(function () {
  "use strict";

  XT.extensions.xtuple_field_dev_sample.initList = function () {
    var rowExtensions = [
      {kind: "XV.ListAttr", attr: "alternateNumber", container: "listColumn"},
      {kind: "XV.ListAttr", attr: "numberLength", container: "listColumn"}
    ];
    XV.appendExtension("XV.ProspectList", rowExtensions);

    var columnExtensions = [
      {kind: "XV.ListColumn", classes: "last", fit: true, container: "fittableColumns", components: [
        {kind: "XV.ListAttr", attr: "site.code"},
        {kind: "XV.ListAttr", attr: "contact.jobTitle"}
      ]}
    ];
    XV.appendExtension("XV.ProspectList", columnExtensions);


  };
}());
