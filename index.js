let index=0;
let color=["Red","beige","peacock","green","teal"];
let myButton=document.getElementById("btn");
let mycontainer=document.getElementsByClassName("container")[0];

myButton.addEventListener
("click",() =>{   
mycontainer.style.backgroundColor=color[index++]
if(index>color.length){
    index=0;
}
}
);                                                                                                                                                                                                                                                                                                                                                                                                                                                                              