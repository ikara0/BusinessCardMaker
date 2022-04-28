const template = document.getElementById("cardTemplate");
const addButton = document.getElementById("add");
const record = document.getElementsByClassName("records")[0];
const txtFirstName = document.getElementById("txtFirstName");
const txtLastName = document.getElementById("txtLastName");
const txtAge = document.getElementById("txtAge");
const description = document.getElementById("txtDescription");

function clear() {
    txtFirstName.value = "";
    txtLastName.value = "";
    txtAge.value = "";
    txtDescription.value = "";
}

addButton.onclick = function () {
    if (txtFirstName.value == "" || txtLastName.value == "" || txtAge.value == "") { return alert("Required fields cannot be left blank") }

    template.content.getElementById("firstName").innerHTML = txtFirstName.value;
    template.content.getElementById("lastName").innerHTML = txtLastName.value;
    template.content.getElementById("age").innerHTML = txtAge.value;
    template.content.getElementById("description").innerHTML = txtDescription.value;
    record.innerHTML += template.innerHTML;
    clear();
}

