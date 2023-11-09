document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showPhone").addEventListener("click", function (e) {
        let div = document.getElementById("contactShowData");
        div.innerHTML = '<a rel="noreferrer" target="_blank" href="tel:+358404129151" class="cta-btn cta-btn--resume">+358 404129151</a>';
    })
}); 