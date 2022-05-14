import $ from "jquery"

function toggle(button) {
    switch (button.value) {
        case "ON":
            button.value = "OFF";
            break;
        case "OFF":
            button.value = "ON";
            break;
    }
}
const rootApp = document.getElementById("root");
rootApp.innerHTML = '<input type = "button" value = "ON" id = "button" onclick = "toggle();"/>'