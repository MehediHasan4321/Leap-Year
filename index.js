window.onload = () => {
    main()
}
function main() {
    //collect all referacce......
    const yearInput = document.getElementById("year-input");
    const leapYearGeneratorBtn = document.getElementById("leap-year-btn")




    leapYearGeneratorBtn.addEventListener("click", (e) => {
        let value = yearInput.value;
        isLeapYear(value)
    })

}

function isLeapYear(value) {
    let leapYearShowBox = document.getElementById("leap-year-show-box")

    if (value === "") {
        alert("Your Input field is empty")
    } else {
        if (value % 400 === 0 || value % 4 === 0) {
            return leapYearShowBox.innerHTML = value + " Leap Year"
        } else {
            return leapYearShowBox.innerHTML = value + " Not Leap Year"
        }
    }

}