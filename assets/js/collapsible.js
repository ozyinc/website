
for (const collapsible of document.getElementsByClassName("collapsible")) {
    collapsible.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.parentElement.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = "initial";
        }
    });
}

for (const link of document.links) {
    if (link.hostname !== window.location.hostname) {
        link.target = "_blank";
        link.rel = "nofollow,noopener";
    }
}
