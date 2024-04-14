const imgContainer=document.querySelector(".image-container");
const btne=document.querySelector(".btn");

btne.addEventListener("click",()=>{
    let numimg=6
    updateimg()
})


function updateimg(){
    for(let i=0;i<numimg;i++){
        const newimg=document.createElement("img");
        newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
        imgContainer.appendChild(newimg);
    }

}