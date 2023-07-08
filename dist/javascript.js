function parseURL(e,t){let r="",i="";return 0===t?(r=e.href,i=e.title):1===type_url&&(r=e.src,i=e.alt),(r=(r=r.match(/index$/)?r.replace(/index$/,""):r).includes("%5C")?r.replace(/%5C/g,"/"):r).match(/\.md\/$/)&&(r=r.replace(/\.md\/$/,"/")),r=decodeURI(r),0===t?(e.href=r,0===(e.title=i).length&&(i=e.innerText,e.title=i)):1===t&&(e.src=r,e.alt=i),{title:i,ref:r,url:e}}function checkIfInternalLinksExists(t,r,i,n){let l=i.href.replace(i.host,"").replace(/http(s)?:(\/){1,3}/gi,"").replace(/^\//,"");return l=0===l.trim().length?"./":decodeURI(l).toLowerCase(),n.includes(l.replace(/\/$/,""))||"./"===l||fetch("/search/all_files.json").then(e=>e.json()).then(e=>{if(e.forEach(e=>{if(decodeURI(e.url).toLowerCase()===l)return n.push(l.replace(/\/$/,"")),n}),!(n=[...new Set(n)]).includes(l.replace(/\/$/,""))&&"./"!==l){e=document.createElement("div");e.innerHTML=r,e.classList.add("not_found"),e.setAttribute("href",t);try{i.parentNode.replaceChild(e,i)}catch(e){console.log(e)}}}).catch(e=>{console.log(e)}),n}window.MathJax={tex:{inlineMath:[["\\(","\\)"]],displayMath:[["\\[","\\]"]],processEscapes:!0,processEnvironments:!0},options:{ignoreHtmlClass:".*|",processHtmlClass:"arithmatex"}},document$.subscribe(()=>{MathJax.typesetPromise()});let history=[];var p_search=/\.{2}\//gi,ht=document.querySelectorAll("a:not(img)");for(const s of ht)0<!s.getElementsByTagName("img").length&&0<!s.getElementsByTagName("svg").length&&!s.href.includes("#")&&s.hostname===window.location.hostname&&(link=parseURL(s,0),history=checkIfInternalLinksExists(link.ref,link.title,s,history));var link,p_img=/\.+\\/gi;for(const t of img=document.querySelectorAll("img"))t.hostname===window.location.hostname&&(link=parseURL(t,1),history=checkIfInternalLinksExists(link.ref,link.title,t,history));const mkDocsChirpyTranslator={default:"light",slate:"dark"},mkDocs=document.querySelector("[data-md-color-scheme]"),chirpy=document.querySelector("[data-chirpy-theme]");if(chirpy){"default"===mkDocs.getAttribute("data-md-color-scheme")&&chirpy.setAttribute("data-chirpy-theme","light");const u=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&chirpy.setAttribute("data-chirpy-theme",mkDocsChirpyTranslator[mkDocs.dataset.mdColorScheme])})});u.observe(mkDocs,{attributes:!0,attributeFilter:["data-md-color-scheme"]})}const header_links=document.querySelectorAll('a[href*="#"]');if(header_links)for(var i=0;i<header_links.length;i++){const x=header_links[i].getAttribute("href").replace("^.*#","");let e=x.replace(/\s/g,"-");e=x.normalize("NFD").replace(/[\u0300-\u036f]/g,""),header_links[i].setAttribute("href",header_links[i].getAttribute("href").replace(x,e))}function getHeightWidth(e){var t=new RegExp("\\d+x\\d+"),r=new RegExp("\\d+");return e.match(t)?[parseInt(e.split("x")[0]),parseInt(e.split("x")[1])]:e.match(r)?[parseInt(e.match(r)[0]),0]:[0,0]}for(var p_img=/\.+\\/gi,img=document.querySelectorAll("img"),i=0;i<img.length;i++){var size,partReg,regAlt=new RegExp("\\|");if(img[i].alt.match(regAlt)){const E=img[i].alt.split("|");for(var part of E)part.match(new RegExp("\\d+","g"))&&(size=getHeightWidth(part),img[i].width=0<size[0]?size[0]:img[i].width,img[i].height=0<size[1]?size[1]:img[i].height,partReg=new RegExp("\\"+part),img[i].alt=img[i].alt.replace(partReg,""))}}const article=document.querySelectorAll("article.md-content__inner.md-typeset > *:not(.highlight)"),embed_id_regex=/\^\w+\s*$/gi;for(let e=0;e<article.length;e++){const G=article[e].innerText.match(embed_id_regex);G&&(article[e].innerHTML=article[e].innerText.replace(G,""))}document.innerText=article;var cite=document.querySelectorAll(".citation");if(cite)for(i=0;i<cite.length;i++)if(img=cite[i].innerHTML.match(/!?(\[{2}|\[).*(\]{2}|\))/gi)){for(var j=0;j<img.length;j++)cite[i].innerHTML=cite[i].innerHTML.replace(img[j],"");cite[i].innerText.trim().length<2&&(cite[i].style.display="none")}window.onload=function(){var e=document.querySelector("iframe");if(e){let t=[];document.querySelectorAll("link").forEach(e=>{e.href.endsWith(".css")&&t.push(e.href)});let r=e.contentDocument||e.contentWindow.document;t.forEach(e=>{var t=document.createElement("link");t.rel="stylesheet",t.href=e,t.type="text/css",r.head.appendChild(t)});const i=document.querySelector("[data-md-color-scheme]");"default"===i.getAttribute("data-md-color-scheme")?r.body.setAttribute("class","light"):(r.body.setAttribute("class","dark"),e=getComputedStyle(i).getPropertyValue("--md-default-bg-color"),r.body.style.setProperty("--md-default-bg-color",e)),r.body.classList.add("graph-view"),new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&r.body.setAttribute("class",mkDocsChirpyTranslator[i.dataset.mdColorScheme])})}).observe(i,{attributes:!0,attributeFilter:["data-md-color-scheme"]})}};var paletteSwitcher1=document.getElementById("__palette_1"),paletteSwitcher2=document.getElementById("__palette_2");const isMermaidPage=document.querySelector(".mermaid"),blogURL=(isMermaidPage&&(paletteSwitcher1.addEventListener("change",function(){location.reload()}),paletteSwitcher2.addEventListener("change",function(){location.reload()})),document.querySelector('meta[name="site_url"]')?document.querySelector('meta[name="site_url"]').content:location.origin);let position=["top","right","bottom","left"];function brokenImage(e){var t=e?.querySelectorAll("img");if(t)for(let e=0;e<t.length;e++){var r=t[e];r.src=decodeURI(decodeURI(r.src)),r.src=r.src.replace(location.origin,blogURL)}return e}function cleanText(e){return e.innerText=e.innerText.replaceAll("↩","").replaceAll("¶",""),e}function calculateHeight(e){e=Math.floor(e.innerText.split(" ").length/100);return e<2?"auto":5<=e?"20rem":e+"rem"}try{tippy(`.md-content a[href^="${blogURL}"], a.footnote-ref, a[href^="./"]`,{content:"",allowHTML:!0,animation:"scale-subtle",theme:"translucent",followCursor:!0,arrow:!1,placement:position[Math.floor(Math.random()*position.length-1)],onShow(l){fetch(l.reference.href).then(e=>e.text()).then(e=>{return(new DOMParser).parseFromString(e,"text/html")}).then(n=>{return n.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(function(t){var r=t.id||t.innerText.split("\n")[0].toLowerCase().replaceAll(" ","-");if(0<r.length){var i=n.createElement("div");i.classList.add(r);let e=t.nextElementSibling;for(;e&&!e.matches("h1, h2, h3, h4, h5, h6");)i.appendChild(e),e=e.nextElementSibling;t.parentNode.insertBefore(i,t.nextSibling)}}),n}).then(r=>{if(location.href.replace(location.hash,"")===l.reference.href)l.hide(),l.destroy();else{let e=r.querySelector("article");var i=r.querySelector("h1"),i=(i&&"Index"===i.innerText&&(n=decodeURI(r.querySelector('link[rel="canonical"]').href).split("/").filter(e=>e).pop(),i.innerText=n),e=brokenImage(e),document.querySelector('[id^="tippy"]')),n=(i&&i.classList.add("tippy"),l.reference.href.replace(/.*#/,"#"));let t=e;n.startsWith("#")?((e=r.querySelector(`[id="${n.replace("#","")}"]`)).tagName.includes("H")?((i=r.createElement("article")).classList.add("md-content__inner","md-typeset"),i.appendChild(r.querySelector("div."+n.replace("#",""))),t=i,e=t):t=0===e.innerText.replace(n).length?e=r.querySelector("div.citation"):cleanText(e).innerText,l.popper.style.height="auto"):l.popper.style.height=calculateHeight(e),l.popper.placement=position[Math.floor(Math.random()*position.length)],0<e.innerText.length?(l.setContent(t),l.popper.style.height=calculateHeight(t)):(e=r.querySelector("article"),l.reference.href.replace(/.*#/,"#"),l.popper.style.height=calculateHeight(e))}}).catch(e=>{console.log(e),l.hide(),l.destroy()})}})}catch{console.log("tippy error, ignore it")}