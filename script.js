const image =document.querySelector("img");

image.addEventListener("click",function(){
 const source = image.getAttribute ("src");

if (source === "sun.jpeg"){
image.setAttribute("src", "moon.jpeg")
}

});