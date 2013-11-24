// ==UserScript==
// @name       隐藏行情系统广告
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://bitcoinwisdom.com/*
// @copyright  2012+, You
// ==/UserScript==

$('#leftbar_outer').hide();
$(".logo").html("<b>声音提醒</b><input type='checkbox' checked='checked' id='checkboxplay' name='checkboxplay'/>")