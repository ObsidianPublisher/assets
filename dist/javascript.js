function parseURL(e,t){let r="",n="";return 0===t?(r=e.href,n=e.title):1===t&&(r=e.src,n=e.alt),(r=(r=r.match(/index$/)?r.replace(/index$/,""):r).includes("%5C")?r.replace(/%5C/g,"/"):r).match(/\.md\/$/)&&(r=r.replace(/\.md\/$/,"/")),r=decodeURI(r),0===t?(e.href=r,0===(e.title=n).length&&(n=e.innerText,e.title=n)):1===t&&(e.src=r,e.alt=n),{title:n,ref:r,url:e}}function checkIfInternalLinksExists(t,r,n,i){let l=n.href.replace(n.host,"").replace(/http(s)?:(\/){1,3}/gi,"").replace(/^\//,"");l=0===l.trim().length?"./":decodeURI(l).toLowerCase();var e=document.querySelector('meta[name="site_url"]').content,o=e.split("/").filter(e=>0<e.length).pop()+"/";return l=l.replace(o.replace(/^\//,""),""),i.includes(l.replace(/\/$/,""))||"./"===l||fetch(e+"/search/all_files.json").then(e=>e.json()).then(e=>{if(e.forEach(e=>{decodeURI(e.url).toLowerCase()===l&&i.push(l.replace(/\/$/,""))}),!(i=[...new Set(i)]).includes(l.replace(/\/$/,""))&&"./"!==l){e=document.createElement("div");e.innerHTML=r,e.classList.add("not_found"),e.setAttribute("href",t);try{n.parentNode.replaceChild(e,n)}catch(e){console.log(e)}}}).catch(e=>{console.log(e)}),i}window.MathJax={tex:{inlineMath:[["\\(","\\)"]],displayMath:[["\\[","\\]"]],processEscapes:!0,processEnvironments:!0},options:{ignoreHtmlClass:".*|",processHtmlClass:"arithmatex"}},document$.subscribe(()=>{MathJax.typesetPromise()});let history=[];const ht=document.querySelectorAll("article a:not(img, .headerlink)");for(const u of ht)0<!u.getElementsByTagName("img").length&&0<!u.getElementsByTagName("svg").length&&!u.href.includes("#")&&u.hostname===window.location.hostname&&(link=parseURL(u,0),history=checkIfInternalLinksExists(link.ref,link.title,u,history));for(const v of document.querySelectorAll("img")){var link;v.hostname===window.location.hostname&&(link=parseURL(v,1),history=checkIfInternalLinksExists(link.ref,link.title,v,history))}const mkDocsChirpyTranslator={default:"light",slate:"dark"},mkDocs=document.querySelector("[data-md-color-scheme]"),chirpy=document.querySelector("[data-chirpy-theme]");if(chirpy){"default"===mkDocs.getAttribute("data-md-color-scheme")&&chirpy.setAttribute("data-chirpy-theme","light");const w=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&chirpy.setAttribute("data-chirpy-theme",mkDocsChirpyTranslator[mkDocs.dataset.mdColorScheme])})});w.observe(mkDocs,{attributes:!0,attributeFilter:["data-md-color-scheme"]})}const header_links=document.querySelectorAll('a[href*="#"]');if(header_links)for(var i=0;i<header_links.length;i++){const z=header_links[i].getAttribute("href").replace("^.*#","");let e=z.replace(/\s/g,"-");e=z.normalize("NFD").replace(/[\u0300-\u036f]/g,""),header_links[i].setAttribute("href",header_links[i].getAttribute("href").replace(z,e))}function getHeightWidth(e,t,r){var n=new RegExp("\\d+x\\d+"),i=new RegExp("\\d+");return e.match(n)?[parseInt(e.split("x")[0]),parseInt(e.split("x")[1])]:e.match(i)?[parseInt(e.match(i)[0]),r]:[t,r]}for(const i of document.querySelectorAll("img")){const J=new RegExp("\\|"),K=i.alt;if(K.match(J)){const L=K.split("|");for(const M of L){var size,partReg;M.match(new RegExp("\\d+","g"))&&(size=getHeightWidth(M,i.width,i.height),i.width=0<size[0]?size[0]:i.width,i.height=0<size[1]?size[1]:i.height,partReg=new RegExp("\\"+M),i.alt=K.replace(partReg,""))}}else if(K!==i.title&&K.match(/^\d+(x\d+)?|\|\d+(x\d+)/g)){const size=getHeightWidth(K,i.width,i.height);i.width=0<size[0]?size[0]:i.width,i.height=0<size[1]?size[1]:i.height,i.alt=K.replace(/^\d+(x\d+)?|\|\d+(x\d+)?/gi,"")}}const article=document.querySelectorAll("article.md-content__inner.md-typeset > *:not(.highlight)"),embed_id_regex=/\^\w+\s*$/gi;for(const N of article){const O=N.innerText.match(embed_id_regex);O&&(N.innerHTML=N.innerText.replace(O,""))}document.innerText=article;const cite=document.querySelectorAll(".citation");if(cite)for(i=0;i<cite.length;i++){const P=cite[i].innerHTML.match(/!?(\[{2}|\[).*(\]{2}|\))/gi);if(P){for(const Q of P)cite[i].innerHTML=cite[i].innerHTML.replace(Q,"");cite[i].innerText.trim().length<2&&(cite[i].style.display="none")}}window.onload=function(){var e=document.querySelector("iframe");if(e){const t=[];document.querySelectorAll("link").forEach(e=>{e.href.endsWith(".css")&&t.push(e.href)});const r=e.contentDocument||e.contentWindow.document;t.forEach(e=>{var t=document.createElement("link");t.rel="stylesheet",t.href=e,t.type="text/css",r.head.appendChild(t)});var e=document.querySelector("[data-md-color-scheme]");"default"===e.getAttribute("data-md-color-scheme")?r.body.setAttribute("class","light"):(r.body.setAttribute("class","dark"),e=getComputedStyle(e).getPropertyValue("--md-default-bg-color"),r.body.style.setProperty("--md-default-bg-color",e)),r.body.classList.add("graph-view")}};const paletteSwitcher1=document.getElementById("__palette_1"),paletteSwitcher2=document.getElementById("__palette_2"),isMermaidPage=document.querySelector(".mermaid"),blogURL=(isMermaidPage&&(paletteSwitcher1.addEventListener("change",()=>{location.reload()}),paletteSwitcher2.addEventListener("change",()=>{location.reload()})),document.querySelector('meta[name="site_url"]')?document.querySelector('meta[name="site_url"]').content:location.origin),position=["top","right","bottom","left"];function brokenImage(e){var t=e?.querySelectorAll("img");if(t)for(let e=0;e<t.length;e++){var r=t[e];r.src=decodeURI(decodeURI(r.src)),r.src=r.src.replace(location.origin,blogURL)}return e}function cleanText(e){return e.innerText=e.innerText.replaceAll("↩","").replaceAll("¶",""),e}function calculateHeight(e){e=e?e.innerText||e:"",e=Math.floor(e.split(" ").length/100);return e<2?"auto":5<=e?"20rem":e+"rem"}try{tippy(`.md-content a[href^="${blogURL}"], a.footnote-ref, a[href^="./"]`,{content:"",allowHTML:!0,animation:"scale-subtle",theme:"translucent",followCursor:!0,arrow:!1,touch:"hold",inlinePositioning:!0,placement:position[Math.floor(Math.random()*position.length-1)],onShow(l){fetch(l.reference.href).then(e=>e.text()).then(e=>{return(new DOMParser).parseFromString(e,"text/html")}).then(i=>{return i.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(function(t){var r=t.id||t.innerText.split("\n")[0].toLowerCase().replaceAll(" ","-");if(0<r.length){var n=i.createElement("div");n.classList.add(r);let e=t.nextElementSibling;for(;e&&!e.matches("h1, h2, h3, h4, h5, h6");)n.appendChild(e),e=e.nextElementSibling;t.parentNode.insertBefore(n,t.nextSibling)}}),i}).then(r=>{if(location.href.replace(location.hash,"")===l.reference.href)l.hide(),l.destroy();else{let e=r.querySelector("article");var n=r.querySelector("h1"),n=(n&&"Index"===n.innerText&&(i=decodeURI(r.querySelector('link[rel="canonical"]').href).split("/").filter(e=>e).pop(),n.innerText=i),e=brokenImage(e),document.querySelector('[id^="tippy"]')),i=(n&&n.classList.add("tippy"),l.reference.href.replace(/.*#/,"#"));let t=e;i.startsWith("#")?((e=r.querySelector(`[id="${i.replace("#","")}"]`)).tagName.includes("H")?((n=r.createElement("article")).classList.add("md-content__inner","md-typeset"),n.appendChild(r.querySelector("div."+i.replace("#",""))),t=n,e=t):t=0===e.innerText.replace(i).length?e=r.querySelector("div.citation"):cleanText(e).innerText,l.popper.style.height="auto"):l.popper.style.height=calculateHeight(e),l.popper.placement=position[Math.floor(Math.random()*position.length)],0<e.innerText.length?(l.setContent(t),l.popper.style.height=calculateHeight(t)):(e=r.querySelector("article"),l.reference.href.replace(/.*#/,"#"),l.popper.style.height=calculateHeight(e))}}).catch(e=>{console.log(e),l.hide(),l.destroy()})}})}catch{console.log("tippy error, ignore it")}