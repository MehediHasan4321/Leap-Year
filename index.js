window.onload = () => {
    main()
}
function main() {
    //collect all referacce......
    const yearInput = document.getElementById("year-input");
    const leapYearGeneratorBtn = document.getElementById("leap-year-btn")




    leapYearGeneratorBtn.addEventListener("keypress",(e)=>{
        if(e.target.value ===13){
            let value = e.target.value;
            isLeapYear(value)
        }
    })


}

function isLeapYear(value) {
    let leapYearShowBox = document.getElementById("leap-year-show-box")
    if (value % 4 === 0 || value % 400 === 0 && value % 1000 !== 0) {
        leapYearShowBox.innerHTML = value + " is a Leap Year";
    } else {
        value + " is not a Leap Yar"
    }
}