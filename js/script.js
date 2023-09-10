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
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () { 
    const guest = guestInput.value;
    // console.log(guest); -- Testing to make sure guest is working properly
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

// Code for adding user input to list
const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const clearInput = function () { 
    guestInput.value = "";
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
        assignButton.disabled = false;
            // This line of code is for the Enter button functionality I wrote
    }
};

const assignItems = function () {
    const potluckItems = [
        "fruit salad", 
        "potato salad", 
        "dessert", 
        "sandwhiches", 
        "drinks", 
        "cake", 
        "chips", 
        "cheese & crackers", 
        "baked beans", 
        "green beans", 
        "smoked sausages"];

    const allGuests = document.querySelectorAll(".guest-list li");

    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];
            // In order to get a random element from the array, you must target the elements' index positions within the array

        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}`;
            //  You’re using guest.innerText to access the name inside the li element. If you used guest without innerText, you’d grab the actual list element instead of the text. The names will appear in the same order in this new list as they did in the original list (allGuests)
        assignedItems.append(listItem);

        potluckItems.splice(randomPotluckIndex, 1);
            // To prevent assigning duplicate items, you must update the potluckItems array each time a dish is assigned. This line of code goes in the for..of loop so that it can be applied to every element that passes through the loop before the next itterarion begins
    };
};

assignButton.addEventListener("click", function () { 
    assignItems();
    assignButton.disabled = true;
        // This line of code fixes the duplicate dish assignment by disabling the button once the loop completes using the disabled property and the boolean true
});

// Jordan's Test to make Enter button work the same as addGuestButton and AssignItems button (both buttons!) - Taken from instructor's tips
document.addEventListener("keydown", function (e) { 
    if (e.key === "Enter" && assignButton.disabled) {
        const guest = guestInput.value;
        if (guest !== "") {
            addToList(guest);
            updateGuestCount();
            clearInput();
        };
    } else if (e.key === "Enter" && !assignButton.disabled) {
        assignItems();
        assignButton.disabled = true;
    };
});