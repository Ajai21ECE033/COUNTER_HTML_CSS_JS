const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
let count=0;
increasebtn.onclick = function(){
    count++;
    countlabel.textContent=count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent=count;
}
resetbtn.onclick = function(){
    count=0;
    countlabel.textContent=count;
}
