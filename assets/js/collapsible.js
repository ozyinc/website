
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

const cvDetailed = window.location.href.includes("detailed");
for (const detailsElement of document.getElementsByClassName("detail")) {
    detailsElement.style.display = cvDetailed ? "block" : "none";
}
const detailIds = {};
for (const detailsLink of document.getElementsByClassName("detail-link")) {
    detailsLink.style.display = "none";
    if(!cvDetailed && !detailIds[detailsLink.id]) {
        detailIds[detailsLink.id] = 1;
        detailsLink.style.display = "block";
    }
}

if (cvDetailed) {
    document.getElementById("cv-link-detailed").classList.add("selected");
} else {
    document.getElementById("cv-link-basic").classList.add("selected");
}

for (const link of document.links) {
    if (link.hostname !== window.location.hostname) {
        link.target = "_blank";
        link.rel = "nofollow,noopener"
    }
}
