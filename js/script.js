let form = document.querySelector(".js-form");
let formInput = document.querySelector(".js-form__input");
let formSelect = document.querySelector(".js-form__select");
let paragraph = document.querySelector(".jsForm__paragraph--result");
let buttonSubmit = document.querySelector(".js-form__button--submit");
let buttonReset = document.querySelector(".js-form__button--reset");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let euroRate = 4.5481;
    let frankRate = 4.1279;
    let usdRate = 3.7978;
    let poundRate = 5.2235;
    let rubleRate = 0.0502;

    let defaultValue = +formInput.value;
    let currency = formSelect.value;


    let resultAmount;
    let resultSentence = "You receive";
    let resetSentence = "Form has been reset. Please enter new values.";

    switch (currency) {
        case "EUR":
            resultAmount = (defaultValue / euroRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} EUR`;
            break;
        case "CHF":
            resultAmount = (defaultValue / frankRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} CHF`;
            break;
        case "USD":
            resultAmount = (defaultValue / usdRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} USD`;
            break;
        case "GBP":
            resultAmount = (defaultValue / poundRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} GBP`;
            break;
        case "RUB":
            resultAmount = (defaultValue / rubleRate).toFixed(2);
            paragraph.innerText = `${resultSentence} ${resultAmount} RUB`;
            break;
        default:
            paragraph.innerText = "Something went wrong, please come back later.";
    }

    form.addEventListener("reset", () => {
        paragraph.innerText = `${resetSentence}`;
        console.log("Form has been reset.");
    });
});