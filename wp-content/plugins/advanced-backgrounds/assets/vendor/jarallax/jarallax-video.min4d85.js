/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(o){var i={};function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=o,n.c=i,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},,function(o,e,t){(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o.exports=t}).call(this,t(5))},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(i=window)}e.exports=i},function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";o.r(t);var i=o(8),n=o.n(i),a=o(4),r=o.n(a),l=o(2),p=o.n(l),u=o(10);r.a.VideoWorker=r.a.VideoWorker||n.a,Object(u.default)(),p()(function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-video]"))})},function(e,t,o){e.exports=o(9)},function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(){this._done=[],this._fail=[]}o.r(t),o.d(t,"default",function(){return c}),i.prototype={execute:function(e,t){var o=e.length;for(t=Array.prototype.slice.call(t);o--;)e[o].apply(null,t)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(e){this._done.push(e)},fail:function(e){this._fail.push(e)}};var r=0,l=0,p=0,u=0,s=0,d=new i,y=new i,c=function(){function i(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var o=this;o.url=e,o.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},o.options=o.extend({},o.options_default,t),o.videoID=o.parseURL(e),o.videoID&&(o.ID=r++,o.loadAPI(),o.init())}return function(e,t,o){t&&a(e.prototype,t),o&&a(e,o)}(i,[{key:"extend",value:function(o){var i=arguments;return o=o||{},Object.keys(arguments).forEach(function(t){i[t]&&Object.keys(i[t]).forEach(function(e){o[e]=i[t][e]})}),o}},{key:"parseURL",value:function(e){var t,o,i,n,a,r=!(!(t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==t[1].length)&&t[1],l=!(!(o=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!o[3])&&o[3],p=(i=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),n={},a=0,i.forEach(function(e){var t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(n["ogv"===t[1]?"ogg":t[1]]=t[2],a=1)}),!!a&&n);return r?(this.type="youtube",r):l?(this.type="vimeo",l):!!p&&(this.type="local",p)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}},{key:"off",value:function(o,i){var n=this;this.userEventsList&&this.userEventsList[o]&&(i?this.userEventsList[o].forEach(function(e,t){e===i&&(n.userEventsList[o][t]=!1)}):delete this.userEventsList[o])}},{key:"fire",value:function(e){var t=this,o=[].slice.call(arguments,1);this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(function(e){e&&e.apply(t,o)})}},{key:"play",value:function(e){var t=this;t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(function(e){e&&t.player.play()})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}},{key:"pause",value:function(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then(function(e){e||t.player.pause()}),"local"===t.type&&(t.player.paused||t.player.pause()))}},{key:"mute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0))}},{key:"unmute",value:function(){var e=this;e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1))}},{key:"setVolume",value:function(e){var t=0<arguments.length&&void 0!==e&&e,o=this;o.player&&t&&("youtube"===o.type&&o.player.setVolume&&o.player.setVolume(t),"vimeo"===o.type&&o.player.setVolume&&o.player.setVolume(t),"local"===o.type&&(o.$video.volume=t/100))}},{key:"getVolume",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.getVolume&&t(e.player.getVolume()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(e)}),"local"===e.type&&t(100*e.$video.volume)):t(!1)}},{key:"getMuted",value:function(t){var e=this;e.player?("youtube"===e.type&&e.player.isMuted&&t(e.player.isMuted()),"vimeo"===e.type&&e.player.getVolume&&e.player.getVolume().then(function(e){t(!!e)}),"local"===e.type&&t(e.$video.muted)):t(null)}},{key:"getImageURL",value:function(t){var o=this;if(o.videoImage)t(o.videoImage);else{if("youtube"===o.type){var e=["maxresdefault","sddefault","hqdefault","0"],i=0,n=new Image;n.onload=function(){120!==(this.naturalWidth||this.width)||i===e.length-1?(o.videoImage="https://img.youtube.com/vi/".concat(o.videoID,"/").concat(e[i],".jpg"),t(o.videoImage)):(i++,this.src="https://img.youtube.com/vi/".concat(o.videoID,"/").concat(e[i],".jpg"))},n.src="https://img.youtube.com/vi/".concat(o.videoID,"/").concat(e[i],".jpg")}if("vimeo"===o.type){var a=new XMLHttpRequest;a.open("GET","https://vimeo.com/api/v2/video/".concat(o.videoID,".json"),!0),a.onreadystatechange=function(){if(4===this.readyState&&200<=this.status&&this.status<400){var e=JSON.parse(this.responseText);o.videoImage=e[0].thumbnail_large,t(o.videoImage)}},a.send(),a=null}}}},{key:"getIframe",value:function(e){this.getVideo(e)}},{key:"getVideo",value:function(p){var u=this;u.$video?p(u.$video):u.onAPIready(function(){var e,t;if(u.$video||((e=document.createElement("div")).style.display="none"),"youtube"===u.type){var o,i;u.playerOptions={},u.playerOptions.videoId=u.videoID,u.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},u.options.showContols||(u.playerOptions.playerVars.iv_load_policy=3,u.playerOptions.playerVars.modestbranding=1,u.playerOptions.playerVars.controls=0,u.playerOptions.playerVars.showinfo=0,u.playerOptions.playerVars.disablekb=1),u.playerOptions.events={onReady:function(t){if(u.options.mute?t.target.mute():u.options.volume&&t.target.setVolume(u.options.volume),u.options.autoplay&&u.play(u.options.startTime),u.fire("ready",t),u.options.loop&&!u.options.endTime){u.options.endTime=u.player.getDuration()-.1}setInterval(function(){u.getVolume(function(e){u.options.volume!==e&&(u.options.volume=e,u.fire("volumechange",t))})},150)},onStateChange:function(e){u.options.loop&&e.data===YT.PlayerState.ENDED&&u.play(u.options.startTime),o||e.data!==YT.PlayerState.PLAYING||(o=1,u.fire("started",e)),e.data===YT.PlayerState.PLAYING&&u.fire("play",e),e.data===YT.PlayerState.PAUSED&&u.fire("pause",e),e.data===YT.PlayerState.ENDED&&u.fire("ended",e),e.data===YT.PlayerState.PLAYING?i=setInterval(function(){u.fire("timeupdate",e),u.options.endTime&&u.player.getCurrentTime()>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())},150):clearInterval(i)}};var n=!u.$video;if(n){var a=document.createElement("div");a.setAttribute("id",u.playerID),e.appendChild(a),document.body.appendChild(e)}u.player=u.player||new window.YT.Player(u.playerID,u.playerOptions),n&&(u.$video=document.getElementById(u.playerID),u.videoWidth=parseInt(u.$video.getAttribute("width"),10)||1280,u.videoHeight=parseInt(u.$video.getAttribute("height"),10)||720)}if("vimeo"===u.type){if(u.playerOptions={id:u.videoID,autopause:0,transparent:0,autoplay:u.options.autoplay?1:0,loop:u.options.loop?1:0,muted:u.options.mute?1:0},u.options.volume&&(u.playerOptions.volume=u.options.volume),u.options.showContols||(u.playerOptions.badge=0,u.playerOptions.byline=0,u.playerOptions.portrait=0,u.playerOptions.title=0),!u.$video){var r="";Object.keys(u.playerOptions).forEach(function(e){""!==r&&(r+="&"),r+="".concat(e,"=").concat(encodeURIComponent(u.playerOptions[e]))}),u.$video=document.createElement("iframe"),u.$video.setAttribute("id",u.playerID),u.$video.setAttribute("src","https://player.vimeo.com/video/".concat(u.videoID,"?").concat(r)),u.$video.setAttribute("frameborder","0"),u.$video.setAttribute("mozallowfullscreen",""),u.$video.setAttribute("allowfullscreen",""),e.appendChild(u.$video),document.body.appendChild(e)}var l;u.player=u.player||new Vimeo.Player(u.$video,u.playerOptions),u.options.startTime&&u.options.autoplay&&u.player.setCurrentTime(u.options.startTime),u.player.getVideoWidth().then(function(e){u.videoWidth=e||1280}),u.player.getVideoHeight().then(function(e){u.videoHeight=e||720}),u.player.on("timeupdate",function(e){l||(u.fire("started",e),l=1),u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&e.seconds>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.on("play",function(e){u.fire("play",e),u.options.startTime&&0===e.seconds&&u.play(u.options.startTime)}),u.player.on("pause",function(e){u.fire("pause",e)}),u.player.on("ended",function(e){u.fire("ended",e)}),u.player.on("loaded",function(e){u.fire("ready",e)}),u.player.on("volumechange",function(e){u.fire("volumechange",e)})}"local"===u.type&&(u.$video||(u.$video=document.createElement("video"),u.options.showContols&&(u.$video.controls=!0),u.options.mute?u.$video.muted=!0:u.$video.volume&&(u.$video.volume=u.options.volume/100),u.options.loop&&(u.$video.loop=!0),u.$video.setAttribute("playsinline",""),u.$video.setAttribute("webkit-playsinline",""),u.$video.setAttribute("id",u.playerID),e.appendChild(u.$video),document.body.appendChild(e),Object.keys(u.videoID).forEach(function(e){!function(e,t,o){var i=document.createElement("source");i.src=t,i.type=o,e.appendChild(i)}(u.$video,u.videoID[e],"video/".concat(e))})),u.player=u.player||u.$video,u.player.addEventListener("playing",function(e){t||u.fire("started",e),t=1}),u.player.addEventListener("timeupdate",function(e){u.fire("timeupdate",e),u.options.endTime&&u.options.endTime&&this.currentTime>=u.options.endTime&&(u.options.loop?u.play(u.options.startTime):u.pause())}),u.player.addEventListener("play",function(e){u.fire("play",e)}),u.player.addEventListener("pause",function(e){u.fire("pause",e)}),u.player.addEventListener("ended",function(e){u.fire("ended",e)}),u.player.addEventListener("loadedmetadata",function(){u.videoWidth=this.videoWidth||1280,u.videoHeight=this.videoHeight||720,u.fire("ready"),u.options.autoplay&&u.play(u.options.startTime)}),u.player.addEventListener("volumechange",function(e){u.getVolume(function(e){u.options.volume=e}),u.fire("volumechange",e)}));p(u.$video)})}},{key:"init",value:function(){this.playerID="VideoWorker-".concat(this.ID)}},{key:"loadAPI",value:function(){if(!l||!p){var e="";if("youtube"!==this.type||l||(l=1,e="https://www.youtube.com/iframe_api"),"vimeo"!==this.type||p||(p=1,e="https://player.vimeo.com/api/player.js"),e){var t=document.createElement("script"),o=document.getElementsByTagName("head")[0];t.src=e,o.appendChild(t),t=o=null}}}},{key:"onAPIready",value:function(e){if("youtube"===this.type&&("undefined"!=typeof YT&&0!==YT.loaded||u?"object"===("undefined"==typeof YT?"undefined":n(YT))&&1===YT.loaded?e():d.done(function(){e()}):(u=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,d.resolve("done"),e()})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||s)"undefined"!=typeof Vimeo?e():y.done(function(){e()});else{s=1;var t=setInterval(function(){"undefined"!=typeof Vimeo&&(clearInterval(t),y.resolve("done"),e())},20)}"local"===this.type&&e()}}]),i}()},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return a});var i=o(8),r=o.n(i),n=o(4),p=o.n(n);function a(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:p.a.jarallax;if(void 0!==e){var t=e.constructor,i=t.prototype.onScroll;t.prototype.onScroll=function(){var o=this;i.apply(o),o.isVideoInserted||!o.video||o.options.videoLazyLoading&&!o.isElementInViewport||o.options.disableVideo()||(o.isVideoInserted=!0,o.video.getVideo(function(e){var t=e.parentNode;o.css(e,{position:o.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),o.$video=e,o.image.$container.appendChild(e),t.parentNode.removeChild(t)}))};var l=t.prototype.coverImage;t.prototype.coverImage=function(){var e=this,t=l.apply(e),o=!!e.image.$item&&e.image.$item.nodeName;if(t&&e.video&&o&&("IFRAME"===o||"VIDEO"===o)){var i=t.image.height,n=i*e.image.width/e.image.height,a=(t.container.width-n)/2,r=t.image.marginTop;t.container.width>n&&(i=(n=t.container.width)*e.image.height/e.image.width,a=0,r+=(t.image.height-i)/2),"IFRAME"===o&&(i+=400,r-=200),e.css(e.$video,{width:"".concat(n,"px"),marginLeft:"".concat(a,"px"),height:"".concat(i,"px"),marginTop:"".concat(r,"px")})}return t};var o=t.prototype.initImg;t.prototype.initImg=function(){var e=this,t=o.apply(e);return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t};var n=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){var o=this,e=n.apply(o);if(!o.options.videoSrc)return e;var t=new r.a(o.options.videoSrc,{autoplay:!0,loop:o.options.videoLoop,showContols:!1,startTime:o.options.videoStartTime||0,endTime:o.options.videoEndTime||0,mute:o.options.videoVolume?0:1,volume:o.options.videoVolume||0});if(t.isValid())if(e){if(t.on("ready",function(){if(o.options.videoPlayOnlyVisible){var e=o.onScroll;o.onScroll=function(){e.apply(o),!o.options.videoLoop&&(o.options.videoLoop||o.videoEnded)||(o.isVisible()?t.play():t.pause())}}else t.play()}),t.on("started",function(){o.image.$default_item=o.image.$item,o.image.$item=o.$video,o.image.width=o.video.videoWidth||1280,o.image.height=o.video.videoHeight||720,o.coverImage(),o.clipContainer(),o.onScroll(),o.image.$default_item&&(o.image.$default_item.style.display="none")}),t.on("ended",function(){o.videoEnded=!0,o.options.videoLoop||o.image.$default_item&&(o.image.$item=o.image.$default_item,o.image.$item.style.display="block",o.coverImage(),o.clipContainer(),o.onScroll())}),o.video=t,!o.defaultInitImgResult)return o.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"===t.type||(t.getImageURL(function(e){o.image.bgImage='url("'.concat(e,'")'),o.init()}),!1)}else o.defaultInitImgResult||t.getImageURL(function(e){var t=o.$item.getAttribute("style");t&&o.$item.setAttribute("data-jarallax-original-styles",t),o.css(o.$item,{"background-image":'url("'.concat(e,'")'),"background-position":"center","background-size":"cover"})});return e};var a=t.prototype.destroy;t.prototype.destroy=function(){var e=this;e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),a.apply(e)}}}}]);
//# sourceMappingURL=jarallax-video.min.js.map