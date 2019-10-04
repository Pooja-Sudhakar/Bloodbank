document.querySelector('#subm').addEventListener("click", () => {
    var name = document.querySelector("#name").value;
    var phno = document.querySelector("#phn").value;
    var bldgrp = document.querySelector("#bld").value;
    var loc = document.querySelector("#loc").value;
    var flag = 1;
    let data = [];
    if(phno.length!=10){
        
        flag=0;
        alert("Provide proper phone numer");
    }
    if(bldgrp==="AB+" || bldgrp==="AB-" || bldgrp==="ab+" || bldgrp==="ab-" ||
    bldgrp==="A+" || bldgrp==="A-" || bldgrp==="a+" || bldgrp==="a-" ||
    bldgrp==="B+" || bldgrp==="B-" || bldgrp==="b+" || bldgrp==="b-" ||
    bldgrp==="o+" || bldgrp==="o-" || bldgrp==="O+" || bldgrp==="O-")
    {
        flag=1;
        }
    else{
        alert("Provide proper blood group");
    
    }
    if (flag == 1) {
        firebase.database().ref('beneficiary/' + phno).set({
            name: name,
            location: loc,
            bldgrp: bldgrp,
            phno: phno

        });


        firebase.database().ref('donor/').on('value', (snapshot) => {

            snapshot.forEach((e) => {
                if (e.val()["bldgrp"] === bldgrp) {
                    data.push({
                        n: e.val().name,
                        p: e.val().phno,
                        bg: e.val().bldgrp,
                        l: e.val().location,
                        a: e.val().age

                    })

                }

            });
            if (!data) {
                alert("No blood grp matched");
            } 
            else {
            data.forEach((e) => {
            
        
        
                    // document.getElementById("cards").classList.add("card");
                    // document.getElementById("cbody").classList.add("card-body");
                    // var x=document.getElementById("title");
                    // x.classList.add("card-title");
                    // x.innerHTML="Donor Found!";
        
        
                    // var y=document.getElementById("title1");
                    // y.classList.add("card-subtitle", "mb-2", "text-muted");
                    // y.innerHTML=e.n;
        
                    // var z= document.getElementById("text");
                    // z.classList.add("card-text");
                    // z.innerHTML=e.p;
        
                    // var za= document.getElementById("loca")
                    // za.classList.add("card-link");
                    // za.innerHTML=e.l;
        
                    var maind = document.createElement("div");
                    var subbody = document.createElement("div");
                    var tit = document.createElement("h5");
                    var tit1 = document.createElement("h6");
                    var subtext = document.createElement("div");
                    var atag = document.createElement("a");
        
                    maind.appendChild(subbody);
                    subbody.appendChild(subtext);
                    subbody.appendChild(tit);
                    subbody.appendChild(tit1);
                    subbody.appendChild(atag);
        
        
                    maind.classList.add("card");
                    subbody.classList.add("card-body");
                    tit.classList.add("card-title");
                    tit1.classList.add("card-subtitle", "mb-2", "text-muted");
                    subtext.classList.add("card-text");
                    atag.classList.add("card-link");
        
                    tit.innerHTML = "Donor found!!";
                    tit1.innerHTML = "Name of donor : "+e.n;
                    subtext.innerHTML = "Phone number of donor : "+e.p;
                    atag.innerHTML = "Location : "+e.l;
        
                    var sel = document.getElementById("cards");
                    sel.appendChild(maind);
        
        
                })
            }

        })
    }
})
