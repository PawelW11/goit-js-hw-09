!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");n.disabled=!0;var o=null;e.addEventListener("click",(function(){o=setInterval(a,1e3),n.disabled=!1,e.disabled=!0})),n.addEventListener("click",(function(){clearTimeout(o),n.disabled=!0,e.disabled=!1}));var a=function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.9ddbabc9.js.map
