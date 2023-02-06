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
    
    if (value % 400 === 0 || value % 4 === 0) {
       return leapYearShowBox.innerText = "Leap Year"
    } else {
       return leapYearShowBox.innerText = "Not Leap Year"
    }
    
}