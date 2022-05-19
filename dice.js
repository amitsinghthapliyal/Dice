function score(){
    return Math.floor(Math.random() * 6) + 1;
}

var winner = document.querySelector("#winner")

var member_1 = document.querySelector("#member-1").innerText = score();
var member_2 = document.querySelector("#member-2").innerText = score();
var member_3 = document.querySelector("#member-3").innerText = score();

if(member_1>member_2 && member_1>member_3){
    var element = document.querySelector("#member-1");
    element.classList.add("green");
    winner.innerText= "";
    winner.append("Member-1")
}
else if(member_1>member_2 && member_1<member_3){
    var element = document.querySelector("#member-1");
    element.classList.add("yellow");
}
else if(member_1<member_2 && member_1>member_3){
    var element = document.querySelector("#member-1");
    element.classList.add("yellow");
}
else if(member_1<member_2 && member_1<member_3){
    var element = document.querySelector("#member-1");
    element.classList.add("red");
}
else if(member_1==member_2 || member_1==member_3){
    var element = document.querySelector("#member-1");
    element.classList.add("blue");
    winner.innerText= "";
    winner.append("Draw");
}


if(member_2>member_1 && member_2>member_3){
    var element = document.querySelector("#member-2");
    element.classList.add("green");
    winner.innerText= "";
    winner.append("Member-2")
}
else if(member_2>member_1 && member_2<member_3){
    var element = document.querySelector("#member-2");
    element.classList.add("yellow");
}
else if(member_2<member_1 && member_2>member_3){
    var element = document.querySelector("#member-2");
    element.classList.add("yellow");
}
else if(member_2<member_1 && member_2<member_3){
    var element = document.querySelector("#member-2");
    element.classList.add("red");
}
else if(member_2==member_1 || member_2==member_3){
    var element = document.querySelector("#member-2");
    element.classList.add("blue");
    winner.innerText= "";
    winner.append("Draw");
}

if(member_3>member_1 && member_3>member_2){
    var element = document.querySelector("#member-3");
    element.classList.add("green");
    winner.innerText= "";
    winner.append("Member-3")
}
else if(member_3>member_1 && member_3<member_2){
    var element = document.querySelector("#member-3");
    element.classList.add("yellow");
}
else if(member_3<member_1 && member_3>member_2){
    var element = document.querySelector("#member-3");
    element.classList.add("yellow");
}
else if(member_3<member_1 && member_3<member_2){
    var element = document.querySelector("#member-3");
    element.classList.add("red");
}
else if(member_3==member_1 || member_3==member_2){
    var element = document.querySelector("#member-3");
    element.classList.add("blue");
    winner.innerText="";
    winner.append("Draw");
}


document.querySelector("#roll").addEventListener("click", function(){
    window.location.reload();
})