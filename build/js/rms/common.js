function createMenuButtons(){$(function(){$("a",".menu-main-menu").button({icons:{primary:"ui-icon-home"}}),$("a",".menu-account").button({icons:{primary:"ui-icon-gear"}}),$("a",".menu-admin-panel").button({icons:{primary:"ui-icon-wrench"}}),$("a",".menu-study-panel").button({icons:{primary:"ui-icon-person"}}),$("a",".menu-logout").button({icons:{primary:"ui-icon-power"}})})}function createModalPageLoading(){$("#LOADING-DIV")&&$("#LOADING-DIV").remove(),$("body").append('<div id="LOADING-DIV" class="modal"></div>'),$("body").addClass("loading")}function removeModalPageLoading(){$("#LOADING-DIV").remove(),$("body").removeClass("loading")}function createErrorDialog(a){$("#ERROR-DIALOG")&&$("#ERROR-DIALOG").remove();var b='<div id="ERROR-DIALOG"><b>';b+='<span class="ui-icon ui-icon-alert" ',b+='style="float: left; margin: 0 7px 50px 0;"></span>',b+=a,b+="</b></div>",$("body").append(b),$("#ERROR-DIALOG").dialog({title:"Error!",draggable:!1,resizable:!1,dialogClass:"alert",modal:!0,show:"fade",hide:"fade",buttons:{Ok:function(){$(this).dialog("close")}}})}function createSlideshow(){$(function(){$("#slides").slides({preload:!0,preloadImage:"css/images/loading.gif",play:5e3,pause:3500,hoverPause:!0,animationStart:function(){$(".caption").animate({bottom:-35},100)},animationComplete:function(){$(".caption").animate({bottom:0},200)},slidesLoaded:function(){$(".caption").animate({bottom:0},200)}})})}function rosonline(a,b,c,d){var e=new ROSLIB.Ros({url:a+b+":"+c});e.on("connection",function(){d(!0)}),e.on("error",function(){d(!1)})}function logout(){createModalPageLoading();var a=new FormData;a.append("request","destroy_session"),$.ajax("../../api/users/user_accounts/",{data:a,cache:!1,contentType:!1,processData:!1,type:"POST",beforeSend:function(a){a.setRequestHeader("RMS-Use-Session","true")},success:function(){window.location="../"}})}function base64Encode(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=a.replace(/\r\n/g,"\n");for(var c="",d=0;a.length>d;d++){var e=a.charCodeAt(d);128>e?c+=String.fromCharCode(e):e>127&&2048>e?(c+=String.fromCharCode(192|e>>6),c+=String.fromCharCode(128|63&e)):(c+=String.fromCharCode(224|e>>12),c+=String.fromCharCode(128|63&e>>6),c+=String.fromCharCode(128|63&e))}for(var f,g,h,i,j,k,l,m="",n=0;c.length>n;)f=c.charCodeAt(n++),g=c.charCodeAt(n++),h=c.charCodeAt(n++),i=f>>2,j=(3&f)<<4|g>>4,k=(15&g)<<2|h>>6,l=63&h,isNaN(g)?k=l=64:isNaN(h)&&(l=64),m=m+b.charAt(i)+b.charAt(j)+b.charAt(k)+b.charAt(l);return m}