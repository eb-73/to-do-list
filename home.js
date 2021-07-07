const div=document.querySelector("div.items");
const nitem=document.querySelector("#item");
const search=document.querySelector("#searchb");
const items=[];
let itemsearch="";
nitem.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        add();
    }
    
});

div.addEventListener("click",function(e){
    if(e.target.nodeName==="IMG"){
        let delItem;
        let index;
        e.target.parentElement.remove();
        delItem=e.target.parentElement.querySelector("h5").innerText;
        index=items.indexOf(delItem);
        items.splice(index,1);
    }
    if(e.target.nodeName==="INPUT"){
        
        if(e.target.checked === true){
            
            e.target.nextElementSibling.style.textDecoration="line-through";
        }
        else if(e.target.checked === false){
            
            e.target.nextElementSibling.style.textDecoration="none";
        }
        
    }
});


search.addEventListener("input",function(e){
   items.map(d => {div.querySelectorAll("div")[items.indexOf(d)].style.display="flex"})
   itemsearch=search.value;
   items.map(x => {
       if(!x.includes(itemsearch)){
        div.querySelectorAll("div")[items.indexOf(x)].style.display="none";
       }
    });

});

const add= ()=>{
    const content=nitem.value;
    items.push(content);
    let innerDiv=document.createElement("div");
    const h=document.createElement("h5");
    const img=document.createElement("img");
    const check=document.createElement("input");
    check.type="checkbox";
    h.innerText=content;
    innerDiv.append(check);
    innerDiv.append(h);
    img.src="trash.png";
    innerDiv.append(img);
    div.append(innerDiv);
    nitem.value=" ";
}