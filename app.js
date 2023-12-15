const userId = {
name:null,
identity:null,
image:null,
message:null,
date:null
}
const userComment = document.querySelector(".usercomment")
const publishBtn = document.querySelector("#publish")
const comments = document.querySelector(".comments")
const userName = document.querySelector(".user")

userComment.addEventListener("input", e=>{
    if(!userComment.value){
publishBtn.setAttribute("disabled", "disabled")
publishBtn.classList.remove("abled")
    }else{
        publishBtn.removeAttribute("disabled")
        publishBtn.classList.add("abled")
    }
})

function addPost(){
    console.log("the btn work");
    if(!userComment.value)return;
userId.name=userName.value
if(userId.name==="Anonymous"){
    userId.identity=true
userId.image="anonymus.PNG"
}
else{
    userId.identity=false
    userId.image="user-3296.png"
}
userId.message=userComment.value
userId.date= new Date().toLocaleString();
let published=`<div class="parents">
<img src="${userId.image}" width="1000px">
<div>
<h1 style="font-size="24.5px"  color: #000;
font-weight: 800; ">${userId.name}<h1>
<p>${userId.message}</p>
<div class="engagements">
<i class="fa-regular fa-thumbs-up"></i> <i class="fa-solid fa-share"></i>
</div>
<span class="date">${userId.date}</span>
</div>
</div>`;
comments.innerHTML+= published;
userComment.value="";

}
publishBtn.addEventListener("click", addPost)