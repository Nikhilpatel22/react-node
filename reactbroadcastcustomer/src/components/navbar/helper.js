import React from 'react';
function helper(event, id) {

    let menuArr = ["language_menu", "msg_menu", "notification_menu", "profile_menu"]
    event.stopPropagation();
    menuArr.forEach(el => {
        if (el == id) {
            document.getElementById(id).classList.toggle("show");
        }
        else {
            document.getElementById(el).classList.remove("show");
        }
    })

    window.onclick = function (event) {
        menuArr.forEach(item => {
            document.getElementById(item).classList.remove("show");
        })
    }
    return <>

    </>;
}

export default helper;
