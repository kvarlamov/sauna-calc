(function(e){function t(t){for(var r,i,c=t[0],l=t[1],f=t[2],d=0,s=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);a&&a(t);while(s.length)s.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var a=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("cf05"),u=n.n(o),i=Object(r["d"])("img",{alt:"Vue logo",src:u.a},null,-1);function c(e,t,n,o,u,c){var l=Object(r["i"])("HelloWorld");return Object(r["f"])(),Object(r["c"])(r["a"],null,[i,Object(r["e"])(l,{msg:"Welcome to Your Vue.js App"})],64)}Object(r["h"])("data-v-b6cd3a36");var l={class:"hello",id:"main"},f=Object(r["d"])("h1",null,"Sauna calculator",-1),a={class:"step",id:"first"},d=Object(r["d"])("label",{for:"numberOfPeople"},"Количество людей: ",-1),s={class:"step",id:"second"},p=Object(r["d"])("label",{for:"numberWithoutAdditional"},"Людей без увеличения стоимости влезает: ",-1),b={class:"step",id:"third"},h=Object(r["d"])("label",{for:"hourPrice"},"Стоимость часа: ",-1),m={class:"step",id:"fourth"},O=Object(r["d"])("label",{for:"numOfHours"},"Количество часов: ",-1);function j(e,t,n,o,u,i){return Object(r["f"])(),Object(r["c"])("div",l,[f,Object(r["d"])("div",a,[d,Object(r["m"])(Object(r["d"])("input",{type:"text",name:"numberOfPeople",id:"numberOfPeople",ref:"numberOfPeople","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.numberOfPeople=t}),onKeyup:t[1]||(t[1]=Object(r["n"])((function(e){return i.enterClicked()}),["enter"])),onChange:t[2]||(t[2]=function(e){return i.hourPriceChange()})},null,544),[[r["k"],e.numberOfPeople]])]),Object(r["m"])(Object(r["d"])("div",s,[p,Object(r["m"])(Object(r["d"])("input",{type:"text",name:"numberWithoutAdditional",id:"numberWithoutAdditional",ref:"numberWithoutAdditional","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.numberWithoutAdditional=t}),onKeyup:t[4]||(t[4]=Object(r["n"])((function(e){return i.enterClicked()}),["enter"])),onChange:t[5]||(t[5]=function(e){return i.hourPriceChange()})},null,544),[[r["k"],e.numberWithoutAdditional]])],512),[[r["l"],i.showElem2]]),Object(r["m"])(Object(r["d"])("div",b,[h,Object(r["m"])(Object(r["d"])("input",{type:"text",name:"hourPrice",id:"hourPrice","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.hourPrice=t}),ref:"hourPrice",onKeyup:t[7]||(t[7]=Object(r["n"])((function(e){return i.enterClicked()}),["enter"])),onChange:t[8]||(t[8]=function(e){return i.hourPriceChange()})},null,544),[[r["k"],e.hourPrice]])],512),[[r["l"],i.showElem3]]),Object(r["m"])(Object(r["d"])("div",m,[O,Object(r["m"])(Object(r["d"])("input",{type:"text",name:"numOfHours",id:"numOfHours","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.numOfHours=t}),ref:"numOfHours",onKeyup:t[10]||(t[10]=Object(r["n"])((function(e){return i.enterClicked()}),["enter"]))},null,544),[[r["k"],e.numOfHours]])],512),[[r["l"],i.showElem4]]),Object(r["m"])(Object(r["d"])("h3",null,"Final price is "+Object(r["j"])(e.finalPrice),513),[[r["l"],e.step>=5]]),Object(r["m"])(Object(r["d"])("h2",null,"Final price for you: "+Object(r["j"])(e.finalPrice/e.numberOfPeople),513),[[r["l"],e.step>=5]])])}Object(r["g"])();var P={name:"HelloWorld",data:function(){return{step:1,numberOfPeople:6,numberWithoutAdditional:6,hourPrice:1300,numOfHours:5,finalPrice:0}},mounted:function(){document.getElementById("numberOfPeople").focus()},computed:{showElem2:function(){return this.step>=2},showElem3:function(){return this.step>=3},showElem4:function(){return this.step>=4}},methods:{enterClicked:function(){this.step++,this.step>=5&&(this.finalPrice=this.numOfHours*this.hourPrice)},hourPriceChange:function(){console.log("fired"),this.numberOfPeople>this.numberWithoutAdditional&&(this.hourPrice=this.hourPrice*(10*(this.numberOfPeople-this.numberWithoutAdditional)/100+1))}}};n("c9e2");P.render=j,P.__scopeId="data-v-b6cd3a36";var v=P,g={name:"App",components:{HelloWorld:v}};n("f248");g.render=c;var y=g;Object(r["b"])(y).mount("#app")},"7f43":function(e,t,n){},"7fb8":function(e,t,n){},c9e2:function(e,t,n){"use strict";n("7f43")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f248:function(e,t,n){"use strict";n("7fb8")}});
//# sourceMappingURL=app.cf4b9f26.js.map