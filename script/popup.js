function openPopup(imgSrc, imgAlt) {
    document.getElementById("popup-image").src = imgSrc;
    document.getElementById("popup-image").alt = imgAlt;
    document.getElementById("popup-caption").innerHTML = imgAlt;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
