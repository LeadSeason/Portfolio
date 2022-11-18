import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("showPhone").addEventListener("click", function (e) {
        let div = document.getElementById("contactShowData");
        div.innerHTML = '<a rel="noreferrer" target="_blank" class="cta-btn cta-btn--resume">+358 404129151</a>';
    })
}); 