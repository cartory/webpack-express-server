(()=>{var e={672:(e,s,r)=>{const o=r(479),t=r(127);r(334).config();const n=t();n.use(o()).use(t.urlencoded({extended:!0})).use(t.json({limit:process.env.BODY_SIZE})).get("/",((e,s)=>s.send("<h1>HELLO FROM EXPRESS-HEROKU 👋</h1>"))),e.exports=n},479:e=>{"use strict";e.exports=require("cors")},334:e=>{"use strict";e.exports=require("dotenv")},127:e=>{"use strict";e.exports=require("express")}},s={};(function r(o){var t=s[o];if(void 0!==t)return t.exports;var n=s[o]={exports:{}};return e[o](n,n.exports,r),n.exports})(672).listen(process.env.PORT||80,(()=>{console.log(`Server running on [33mhttp://${process.env.HOST}:${process.env.PORT}[0m`),console.log(new Date)}))})();