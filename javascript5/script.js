function myFunction(imgs) {
    var expandImg = document.getElementById("nagykep");
    var imgText = document.getElementById("kepszoveg");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
// a javascript kódot a https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp oldalról szedtem