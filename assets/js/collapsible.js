const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
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
Array.from(document.getElementsByClassName("detail")).map(elem => {
    elem.style.display = cvDetailed ? "block" : "none";
})
if (cvDetailed) {
    document.getElementById("cv-link-detailed").classList.add("selected");
} else {
    document.getElementById("cv-link-basic").classList.add("selected");
}
