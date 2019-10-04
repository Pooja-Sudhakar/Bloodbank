document.querySelector('#subm').addEventListener("click",()=>{
    var name = document.querySelector("#name").value;
    var phno = document.querySelector("#phn").value;
    var age= document.querySelector("#age").value;
    var bldgrp = document.querySelector("#bld").value;
    var loc = document.querySelector("#loc").value;
    console.log(name,phno,age,loc);
    var flag=1;
        if(phno.length!=10){
             flag=0;
             alert("Provide proper phone numer");
    }
    if(flag==1){

    firebase.database().ref('donor/' + phno).set({
            name: name,
            age:age,
            location:loc,
            bldgrp:bldgrp,
            phno: phno

        });
        alert("Added in the Donor database!!");
    }
    })

