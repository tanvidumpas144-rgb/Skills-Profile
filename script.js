function addSkill() {
    var list = document.getElementById("skillList");
    var item = document.createElement("li");
    item.innerHTML = "New Skill Added";
    list.appendChild(item);
}

function showMessage() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML =
        "Hello " + name + "! Thanks for visiting.";
}