/**
 * @file Wiki Hover
 * @description Hover over a link to see the content of the link
 * Doesn't work on mobile and header
 * @see tippy https://atomiks.github.io/tippyjs/
 */

const blogURL = document.querySelector('meta[name="site_url"]')
  ? document.querySelector('meta[name="site_url"]').content
  : location.origin;
let position = ["top", "right", "bottom", "left"];

/** 
 * @description Replace broken image with encoded image in first para
 * @param {Element} firstPara
 * @returns {Element} firstPara
 */
function brokenImage(firstPara) {
  const brokenImage = firstPara?.querySelectorAll("img");
  if (brokenImage) {
    for (let i = 0; i < brokenImage.length; i++) {
      const encodedImage = brokenImage[i];
      encodedImage.src = decodeURI(decodeURI(encodedImage.src));
      //replace broken image with encoded image in first para
      encodedImage.src = encodedImage.src.replace(
        location.origin,
        blogURL
      );
    }
  }
  return firstPara
}



/**
 * Strip text of first para of unwanted characters
 * @param {Element} firstPara 
 * @returns {Element} firstPara
 */
function cleanText(firstPara) {
  firstPara.innerText = firstPara.innerText
    .replaceAll("↩", "")
    .replaceAll("¶", "");
  return firstPara
}

try {
  tippy(`.md-content a[href^="${blogURL}"], a.footnote-ref, a[href^="./"]`, {
    content: "",
    allowHTML: true,
    animation: "scale-subtle",
    theme: "translucent",
    followCursor: true,
    arrow: false,
    placement: position[Math.floor(Math.random() * position.length - 1)],
    onShow(instance) {
      fetch(instance.reference.href)
        .then((response) => response.text())
        .then((html) => {
          const parser = new DOMParser();
          return parser.parseFromString(html, "text/html");
        })
        .then((doc) => {
          //create section for each content after header
          const headers = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
          headers.forEach(function (header) {
            const div = doc.createElement("div");
            const headerName = header.id || header.innerText.split("\n")[0].toLowerCase().replaceAll(" ", "-");
            div.classList.add(headerName);
            let nextElement = header.nextElementSibling;
            while (nextElement && !nextElement.matches("h1, h2, h3, h4, h5, h6")) {
              div.appendChild(nextElement);
              nextElement = nextElement.nextElementSibling;
            }
            header.parentNode.insertBefore(div, header.nextSibling);
          });
          return doc;
        })
        //inject head into doc
        .then((doc) => {
          if (location.href.replace(location.hash, "") === instance.reference.href) {
            instance.hide();
            instance.destroy();
            return;
          }
          let firstPara = doc.querySelector("article");
          const firstHeader = doc.querySelector("h1");
          if (firstHeader && firstHeader.innerText === "Index") {
            const realFileName = decodeURI(
              doc.querySelector('link[rel="canonical"]').href
            )
              .split("/")
              .filter((e) => e)
              .pop();
            firstHeader.innerText = realFileName;
          }
          //broken link in first para
          firstPara = brokenImage(firstPara);
          const element1 = document.querySelector(`[id^="tippy"]`);
          if (element1) {
            element1.classList.add("tippy");
          }
          const partOfText = instance.reference.href.replace(/.*#/, "#");
          let toDisplay = firstPara;
          let displayType;
          if (partOfText.startsWith("#")) {
            firstPara = doc.querySelector(
              `[id="${partOfText.replace("#", "")}"]`
            );
            if (firstPara.tagName.includes("H")) {
              const articleDOM = doc.createElement("article");
              articleDOM.classList.add("md-content__inner", "md-typeset");
              articleDOM.appendChild(doc.querySelector(`div.${partOfText.replace("#", "")}`));
              toDisplay = articleDOM;
              firstPara = toDisplay;
            } else if (firstPara.innerText.replace(partOfText).length === 0) {
              firstPara = doc.querySelector("div.citation");
              toDisplay = firstPara;
            } else {
              toDisplay = cleanText(firstPara).innerText;
            }
            instance.popper.style.height = "auto";
          } else {
            const height = Math.floor(
              firstPara.innerText.split(" ").length / 100
            );
            if (height < 2) {
              instance.popper.style.height = `auto`;
            } else if (height >= 5) {
              instance.popper.style.height = `5px`;
            }
          }

          instance.popper.placement =
            position[Math.floor(Math.random() * position.length)];
          if (firstPara.innerText.length > 0) {
            if (!displayType) {
              instance.setContent(toDisplay)
            }
          } else {
            firstPara = doc.querySelector("article");
            instance.reference.href.replace(/.*#/, "#");
          }
        })
        .catch((error) => {
          console.log(error);
          instance.hide();
          instance.destroy();
        });
    },
  });
} catch {
  console.log("tippy error, ignore it");
}
