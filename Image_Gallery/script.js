var images=document.querySelectorAll(".image");
var mainimage=document.querySelector("#main-img");

for(var i=0;i<images.length;i++){
    images[i].addEventListener("click",function(){
mainimage.src=this.src
    });
}