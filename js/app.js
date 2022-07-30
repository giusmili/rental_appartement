document.addEventListener("DOMContentLoaded",()=>{
    console.log("loadad")
    let el = document.querySelectorAll(".visit-room ul li");
    const el_img  = document.querySelectorAll(".visit-room li img");
   
    let target_img = function(){
        console.log(this)
      
        let image = this.dataset.image;
        let title =this.dataset.title;
        document.getElementById("target").setAttribute("src",`${image}`)
        document.querySelector(".visit-room figure figcaption").innerText=title
        
    }

    for(rows of el){
        rows.addEventListener("click",target_img)
        
     }

    //click image and remove class
    
    for(let i = 0; i < el_img.length; i++) {
        el_img[i].addEventListener("click", ()  => {
            for(let n = 0; n< el_img.length; n++) {
                el_img[n].classList.remove("active-image");
            }
            el_img[i].classList.add("active-image");
        });
    }
})