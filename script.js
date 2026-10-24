const slide = document.getElementById("slide-show").src;

//this will change the placeholder to empty anytime i click on the input element//
function clearValue() {
    const searchInput = document.getElementById("search-bar");
        searchInput.placeholder = "";
}

function slideShow() {
    slide.src = "./IMG/C1.png";
};