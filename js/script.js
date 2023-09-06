// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button ("Add Guest")
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");


// Jordan's code (above is starter code)
addGuestButton.addEventListener("click", function () { 
    const guest = guestInput.value;
    // console.log(guest); -- Testing to make sure guest is working properly
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

const clearInput = function () { 
    guestInput.value = "";
};

// Code for adding user input to list
const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;
    // To prevent more than 8 guests added to the list:
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestInput.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

// //Jordan's Test - Creating a singular function for adding a guest
// const addGuestFunction = function () { 
//     const guest = guestInput.value;
//     if (guest !== "") {
//         let listItem = document.createElement("li");
//         listItem.innerText = guest;
//         guestList.append(listItem);
//         clearInput();
//     }
// };

// //Jordan's Test - Having "Enter" work the same as pressing the Add Button
// document.addEventListener("keydown", function (e) { 
//     if (e.key === "Enter") {
//         addGuestFunction();
//     }
// });

// // Jordan's Test - Streamlining the "click" event listener
// addGuestButton.addEventListener("click", function () { 
//   addGuestFunction();
// });