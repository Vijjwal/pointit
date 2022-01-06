// ADD AN ELEMENT

var listofnumbers = []
function addelement(){



var text = document.getElementById("thing").value
var tell = document.getElementById("tell")

if (text == null || text == ""){
var tell = document.getElementById("tell").innerHTML = "Please write something"
}
else{

 let x = Math.floor((Math.random() * 100) + 1);
  let y = Math.floor((Math.random() * 100) + 2);
  let z = Math.floor((Math.random() * 100) + 3);
  let w = Math.floor((Math.random() * 100) + 4);
  let v = Math.floor((Math.random() * 100) + 5);
  let t = Math.floor((Math.random() * 100) + 6);
  let theuniquenumber = x+y+z+w+v+t
  let theuniquenumberinstring = String(theuniquenumber)
  listofnumbers.push(theuniquenumberinstring)

//Putting the element in the list
  thelist = document.getElementById("theelements");
 var node = document.createElement("li");
 node.id = "thenode"+ theuniquenumberinstring;
  var textnode = document.createTextNode(text);
  node.className = ("mx-4 my-2")
  node.appendChild(textnode);
thelist.appendChild(node)

  //putting the edit button
  var btn = document.createElement("button");
  btn.id = "edit" + theuniquenumberinstring;
    btn.className = "btn btn-primary mx-2 shadow-none"
  btn.innerHTML = "Edit";

  btn.onclick= function()

  {


var thing = btn.id
   var theid = thing.split("edit")
   console.log(theid[1])
let c = document.getElementById("thenode" + theid[1]).innerHTML

    let a = document.getElementById("thenode" + theid[1])



      let b = prompt("Edit", document.getElementById("thenode"+theid[1]).innerHTML)
      if (b == ""){
      alert("Please fill something")
      }
    else{
    a.innerHTML = b
    if (a.innerHTML == ""){
      a.innerHTML = c
    }
    }

  }
  thelist.appendChild(btn);




  // putting the delete button
var deletebtn = document.createElement("button")
deletebtn.id = "delete" + theuniquenumberinstring;
  deletebtn.innerHTML = "Delete";
  deletebtn.className = "btn btn-danger shadow-none"
  thelist.appendChild(deletebtn);
  var theline = document.createElement("hr")
theline.id = "line" + theuniquenumberinstring
thelist.appendChild(theline)
  deletebtn.onclick = function()


  {


  var thing = btn.id


      var theid = thing.split("delete");
    let thething = document.getElementById("thenode" + theuniquenumberinstring)
    let thethingedit = document.getElementById("edit" + theuniquenumberinstring)
    let thethingdelete = document.getElementById("delete" + theuniquenumberinstring)
  let thelinething = document.getElementById("line" + theuniquenumberinstring)
    thelist.removeChild(thething)


    thelist.removeChild(thethingedit)
    thelist.removeChild(thethingdelete)
    thelist.removeChild(thelinething)






  }




  document.getElementById("thing").value = ""








}
}






