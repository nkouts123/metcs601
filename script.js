let boolParam = true;

window.onload = (e)=> {
 PopulateItems(); 
}

//adds items to respective unordered lists
function PopulateItems()
{
 URLs=["http://localhost:3000/pastries","http://localhost:3000/hot-beverages"]; 
 
 console.clear();
  
 URLs.map((e)=>getJSON(e)); 
}

//gets JSON data that contains the 2 sets of data
function getJSON(url) { 
 //set variables
 let ulId = "ul1";
 let divDropId = "div_drop_1";
 let strType = getType();
  
 if (!boolParam) {
  ulId = "ul2";
  divDropId="div_drop_2";
 }

 //clear previous items 
 listItems = document.querySelectorAll("#" + ulId + " > li");  
 listItems.forEach(e=>document.getElementById(ulId).removeChild(e)); 
     
 //fetch JSON 
 fetch(url)
  .then((response)=>response.json())
  .then((data)=>{
    //change JSON to string and split each row into an array
    const n = JSON.stringify(data);
    const o = n.substring(1,n.length);
    const p = o.substring(0,o.length-1);
    const ar = p.split('},');
    
    //create <li> items    
    for(i=0;i<ar.length;i++) {
     let row = ar[i];
     
     if (row.substring(row.length-1)=="\"")
     {row = row + "}"};
      
     const o = JSON.parse(row);     
     const ul_drag = document.getElementById(ulId);
     const li = document.createElement("li");
     
     ul_drag.appendChild(li).innerText = o["name"];
     li.setAttribute("draggable","true");
     li.setAttribute("id",(strType+(i+1))); 
     li.addEventListener("dragstart",dragstart);
     li.addEventListener("dragend",dragend); 
    }
  })
 
  .catch(console.error);      
 
  //add events & methods
  const divDrop = document.getElementById(divDropId);
  
  divDrop.addEventListener("dragover",dragover);
  divDrop.addEventListener("drop",drop);
  divDrop.addEventListener("dragleave",dragleave); 
  
  //toggle value 
  boolParam = !boolParam;
};

//
function dragstart(e) {
  
 const strId = e.target.id; 
 let strType = "croissant";
  
 if(strId.indexOf("coffee")>-1)
 {strType = "coffee";} 
  
 //add id and type
 e.dataTransfer.setData('text/plain', e.target.id);
 e.dataTransfer.setData('type', strType); 
 e.target.classList.add('dragging');  
}  

//drag end event method
function dragend(e) {
 e.target.classList.remove('dragging'); 
}  

//dragover  event method
function dragover(e) {
 e.preventDefault()
 e.currentTarget.classList.add('drag-over'); 
}

//drop event method
function drop(e) {
 e.preventDefault(); //prevent default behavior
 
 //set variables 
 const itemType = e.dataTransfer.getData('type');
 const divDropId = e.target.id;
 const divDropZone = document.getElementById(divDropId); 
 
 //determine if item can be dropped to desired target 
 let boolAcceptDrop = false; 
 
 if ((itemType=="croissant" && divDropId=="div_drop_1")
 ||(itemType=="coffee" && divDropId=="div_drop_2")) 
 {boolAcceptDrop = true;} 
     
 if (boolAcceptDrop) {
  //add item to drop zone 
  const itemId = e.dataTransfer.getData('text/plain');
  const item = document.getElementById(itemId);
 
  divDropZone.appendChild(item); 
 }
}

//dragleave event method
function dragleave(e) {
 e.currentTarget.classList.remove('drag-over');
} 

//return type
function getType()
{
 let strType = "croissant"; 
 
 if(!boolParam){strType = "coffee";}  
  
 return strType;
}