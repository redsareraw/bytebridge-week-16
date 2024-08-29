function regexChecker() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let firstNameRegex = /(^[A-Z][a-zA-Z]+$)/;
    let lastNameRegex = /(^[A-Z][a-zA-Z]+$)/;

    if (firstName.match(firstNameRegex) && lastName.match(lastNameRegex)) {
        alert("Yay! Your inputs were all correct!");
    } else {
        alert("Oh no! That's an invalid format!")
    }
}