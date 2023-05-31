// inside this .js file, i defined a function that will allow users to search for food items they might want to order
function search () {
    // inside function search(), i defined three variables...

    // searchBar takes the user input from the <input> tag by connecting it to its id "searchBar" and turns that string value into lowercase characters
    let searchBar = document.getElementById("searchBar").value.toLowerCase();
    // foodItems takes selects every .itembox in the .html file
    let foodItems = document.querySelectorAll(".itembox");
    // itemName takes the value of every paragraph <p> tag inside the .html file
    let itemName = document.getElementsByTagName("p");

    // in simple terms, the for loop defined here will display any .itembox so long as conditions are met
    // (the condition is basically "as long as there the letters of input match any .itembox")
    for (var a = 0; a < itemName.length; a++) {
        // i defined another variable that will get the value of the first paragraph <p> tag inside .itembox
        let match = foodItems[a].getElementsByTagName("p")[0];
        
        if (match) {
            // and here, we have the comparison of the user's input and the paragraph <p> tag
            let typedValue = match.innerHTML || match.textContent;

            // if they match, then the function will display all that are matched;
            if (typedValue.toLowerCase().indexOf(searchBar) > -1) {
                foodItems[a].style.display = "";
            }
            // while hiding the ones that aren't
            else {
                foodItems[a].style.display = "none";
            }
        }
    }
}