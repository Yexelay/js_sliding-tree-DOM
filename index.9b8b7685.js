document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(t),t.addEventListener("click",function(t){var n=e.querySelector("ul");n&&(n.hidden=!n.hidden)})});
//# sourceMappingURL=index.9b8b7685.js.map
