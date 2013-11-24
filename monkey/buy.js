// ==UserScript==
// @name      buy
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      https://www.okcoin.com/sell.do?symbol=0&success
// @copyright  2012+, You
// ==/UserScript==
(function(){
    
jQuery('.freetitle').html('<span style="color:red;font-size:bold;font-size:20px;">'+jQuery(jQuery('.Tenbody td')[3]).html() +'-'+jQuery('.lightorange1').html()+' &nbsp;|&nbsp; '+jQuery(jQuery('.Tenbody td')[7]).html())
    //设置密码
jQuery('#tradePwd').val('pasword');


var $price = jQuery('#tradeCnyPrice');

var $amout = jQuery('#tradeAmount');

var $all = jQuery('#tradeTurnover');


//获得资金总数
var money = jQuery(jQuery('.moneynum')[0]).html().split('&')[0]*1;

//卖1价格
var sell = jQuery(jQuery('.c2')[5]).html()*1;

//买1价格
var buy = jQuery(jQuery('.c2')[6]).html()*1;



//如果是买，要比买1更高，如果是卖，要比卖1更低

var tarMoney = buy+0.01;
$price.val(tarMoney);
$all.val(money);
$all.keyup();
    
})()