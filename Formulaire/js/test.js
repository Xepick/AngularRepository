

function Reset()
{
    var champDocument=document.getElementsByClassName("checkable");

    for(var i=0; i<champDocument.length;i++)
    {
        champDocument[i].value="";
    }
    //
    //console.log(champDocument);
    document.getElementById("radiob1").checked=false;
    document.getElementById("radiob2").checked=false;
    document.getElementById("spam").checked=false;
// adresse mail prof : manoel.deligny@gmail.com
// l'inviter sur un git perso
}

function checkSubmit()
{
    var champDocument=document.getElementsByClassName("checkable");
    var ok=true;
    for(var i=0; i<champDocument.length;i++)
    {
        if(champDocument[i].value=="")
        {
            ok=false;
            console.log("Le champ"+champDocument[i]+"a foiré");
        }
    }
    if(document.getElementById("radiob1").checked==false && document.getElementById("radiob2").checked==false)
    {
        console.log("Bouttons radios foired");
        ok=false;
    }

    if(document.getElementById("pass1").value!=document.getElementById("pass2").value)
    {
        ok=false;
        console.log("Les pass ont foiré");
    }

    if(ok==true)
        alert("ALL FIELDS SUCCESFULLY PASSED THE TEST");
    else
        alert("TEST FAILED");

}

document.addEventListener("DOMContentLoaded",function(event){

        var champ1=document.getElementById("nom");
        var champ2=document.getElementById("prenom");
        var champ3=document.getElementById("pass1");
        var champ4=document.getElementById("pass2");

        champ1.addEventListener("change", function(){
            if(document.getElementById("nom").value.length>3)
                champ1.style.borderColor="green";
            else
                champ1.style.borderColor="red";
        });

        champ2.addEventListener("change", function(){
            if(champ2.value.length>3)
                 champ2.style.borderColor="green";
            else
                 champ2.style.borderColor="red";
        });

        champ3.addEventListener("change", function(){
            if(champ3.value.length>3)
                 champ3.style.borderColor="green";
            else
                champ3.style.borderColor="red";
        });


        champ4.addEventListener("change", function(){
            if(champ4.value.length>3 && champ4.value==champ3.value)
            {
                champ4.style.borderColor="green";
            }
            else
                champ4.style.borderColor="red";
        } )

})
