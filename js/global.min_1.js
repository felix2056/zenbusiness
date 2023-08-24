"use strict";let zb={};!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):self.uuidv4=e()}(function(){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=[],e=0;e<256;++e)c.push((e+256).toString(16).substr(1));return function(e,t,i){var n=(e=e||{}).random||(e.rng||function(){if(r)return r(a);throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")})();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){i=i||0;for(var o=0;o<16;++o)t[i+o]=n[o];return t}return function(e,t){var t=1<arguments.length&&void 0!==t?t:0,e=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if("string"==typeof(t=e)&&s.test(t))return e;throw TypeError("Stringified UUID is invalid")}(n)}}),zb.processed=!1,zb.getCookie=function(e){return(null==(e=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))?void 0:e.pop())||""},zb.setCookie=function(e,t,i){const n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3);i="expires="+n.toUTCString();document.cookie=e+`=${t};${i};path=/`},zb.setVisitUUID=function(e){"false"!=window.localStorage.getItem("uc_accepted_all_functional")&&zb.setCookie("visit-uuid",e,30)},zb.isMobileDevice=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},zb.getQueryParams=function(){let e=window.location.search,i=e?e.substring(1):"",n={params:{},hasParams:!1};if(i){let t=i.split("&");for(let e=0;e<t.length;e+=1){var o=t[e].split("=");try{n.params[o[0]]=decodeURIComponent(o[1]),n.hasParams=!0}catch(e){}}}return n},zb.getConvertedWebsiteUrl=function(){let e=window.location.href,t=(e=-1===e.indexOf("://")?"://"+e:e).split("://")[1].split("?")[0];return t="/"===(t=-1===t.indexOf("www")?"www."+t:t).charAt(t.length-1)?t.substr(0,t.length-1):t},zb.getVisitUuid=function(){let e=window.localStorage;if(!e)return null;let t=zb.getCookie("visit-uuid"),i=e.getItem("visitUUID"),n="true"===e.getItem("visitProcessed"),o=zb.getQueryParams(),r=o.hasParams,a=o.params;if(t&&(i=t,e.setItem("visitUUID",t)),i&&!t&&zb.setVisitUUID(i),i&&(zb.processed||n&&!r))return zb.processed=!0,i;i||(i=uuidv4(),e.setItem("visitUUID",i),zb.setVisitUUID(i)),e.removeItem("visitProcessed"),zb.processed=!0;let s=document.location.href,c=(-1<s.indexOf("/tv/")&&(a.utm_source="blisspoint"),a.utm_medium||a.medium||""),d=a.utm_campaign||a.campaignid||"",l={partner:a.partner||e.getItem("zenbusiness_partner")||"",visituuid:i,pricingid:a.pricingid||"",pricing_test:a.pricingtest||a.pricing_test||"",website:zb.getConvertedWebsiteUrl(),referrer:document.referrer,landing_url:document.location.href,campaignsource:a.utm_source||a.source||"",campaignmedium:c,campaignname:d,campaigncontent:a.CT||a.utm_content||a.content||"",campaignterm:a.utm_term||a.keywork||"",affiliate_id:"affiliate"===c?d:"",banner_id:"affiliate"===c&&(a.utm_content||a.content)||"",mixpanelid:a.mixpaneldistinctid||"",gclid:a.gclid||"",gbraid:a.gbraid||"",wbraid:a.wbraid||"",msclkid:a.msclkid||""};var u="_gaexp=GAX1.2.";let p=document.cookie;if(!!p&&-1<p.indexOf(u)&&(l.testing_id_variant=zb.getExperimentData(p,u)),"development"!==wpEnv&&"local"!==wpEnv){let e=new XMLHttpRequest,t=(e.onreadystatechange=function(){4!==this.readyState||200!==this.status&&201!==this.status||window.localStorage.setItem("visitProcessed","true")},new XMLHttpRequest);t.onreadystatechange=function(){if(4===this.readyState){if(200===this.status||201===this.status)try{l.ip_address=JSON.parse(this.responseText).ipString}catch(e){l.ip_address="0.0.0.0"}e.open("POST","/r/api/initialization/setVisit"),e.setRequestHeader("content-type","application/json;charset=UTF-8"),e.setRequestHeader("accept","application/json, text/plain, */*"),e.send(JSON.stringify(l))}};t.open("GET","https://api.bigdatacloud.net/data/client-ip"),t.setRequestHeader("content-type","application/json;charset=UTF-8"),t.setRequestHeader("accept","application/json, text/plain, */*"),t.send()}return i},zb.readLoggedIn=function(){return!!window.localStorage&&!!window.localStorage.getItem("loggin_in_email")},zb.getExperimentData=function(e,t){let i=[],n=e.split(t)[1].split(";")[0],o=n.split("!");for(let t=0;t<o.length;t++){let e=o[t].split(".");var r=e.shift(),a=e.pop();i.push(r+"."+a)}return i},zb.setSscid=function(){let e=window.localStorage;if(!e)return null;var t=zb.getQueryParams(),i=t.hasParams,t=t.params;return i&&t.sscid?(e.setItem("shareASale",t.sscid),t.sscid):void 0},zb.consoleDevOnlyLog=function(){"production"!==wpEnv[0]&&console.log(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",1<arguments.length&&void 0!==arguments[1]?arguments[1]:"")},zb.UC_LocalStorage=function(){if("undefined"!=typeof UC_UI){let t="true",i="true",n="true",e=window.localStorage;UC_UI.getServicesBaseInfo().forEach(e=>{e.consent.status||(t="false","functional"==e.categorySlug&&(i="false"),"marketing"==e.categorySlug&&(n="false"))}),e.setItem("uc_accepted_all",t),e.setItem("uc_accepted_all_functional",i),e.setItem("uc_accepted_all_marketing",n),gtag("consent","update",{ad_storage:"true"===t?"granted":"denied",analytics_storage:"true"===t?"granted":"denied"})}},zb.setEntryUrlParams=function(){const e=document.querySelectorAll("a:not(header a):not(.zenbusiness-footer a)");e.forEach(n=>{const e=n.getAttribute("href");if(e&&(e.includes("/r/")||e.includes("/r2/"))){let e=new URL(n.href),t=new URLSearchParams(e.search),i=window.location.pathname.split("/");var o="/"+(i=i[1]?i.slice(1).join("/"):"");t.delete("fbclid"),t.set("entry_uri",o),n.href=e.pathname+"?"+t.toString()}})},window.addEventListener("load",()=>{try{let e=document.querySelectorAll("#trigger_chat"),t=document.querySelectorAll(".hide-until-intercom-loaded");var n=navigator.userAgent;let i=/android|iphone/i;var o=i.test(n),r=window.innerWidth<480,a="undefined"!=typeof showIntercomInMobile&&showIntercomInMobile;"undefined"!=typeof Intercom&&(t&&t.forEach(e=>{e.style.visibility="visible"}),o&&r&&!a||Intercom.init()),e&&e.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),"undefined"!=typeof Intercom&&Intercom.toggle(!0)})})}catch(e){console.log(e)}zb.setEntryUrlParams()});let manageUCBannerMinHeight;window.addEventListener("UC_UI_CMP_EVENT",function(e){if(zb.UC_LocalStorage(),"CMP_SHOWN"===e.detail.type){let e=new MutationObserver(()=>{document.getElementById("usercentrics-root").shadowRoot&&(document.body.classList.remove("overflowHidden"),document.getElementById("usercentrics-root").shadowRoot.querySelector("#focus-lock-id > #focus-lock-id div:not([data-testid='uc-default-banner'])")&&e.disconnect())});e.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1})}}),zb.getVisitUuid(),zb.setSscid();
