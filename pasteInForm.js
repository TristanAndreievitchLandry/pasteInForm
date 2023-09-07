function dontTreadOnMe(e) { 

    e.stopImmediatePropagation(); 

} 

document.addEventListener( 

    "paste", 

    dontTreadOnMe, 

    true 

); 
