{
    const convertCurrency = (amount, currency) => {
        const rateEUR = 4.5481;
        const rateCHF = 4.1279;
        const rateUSD = 3.7978;
        const rateGBP = 5.2235;
        const rateRUB = 0.0502;

        switch (currency) {
            case "EUR":
                return (amount / rateEUR);

            case "CHF":
                return (amount / rateCHF);

            case "USD":
                return (amount / rateUSD);

            case "GBP":
                return (amount / rateGBP);

            case "RUB":
                return (amount / rateRUB);
        }
    };

    const resetResult = () => {
        const resultElement = document.querySelector(".js-form__paragraph--result");
        resultElement.innerText = "";
    };

    const updateResult = (result, currency) => {
        const resultElement = document.querySelector(".js-form__paragraph--result");
        resultElement.innerText = `You receive ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-form__input");
        const currencyElement = document.querySelector(".js-form__select");
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = convertCurrency(amount, currency);

        updateResult(result, currency);
    };

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
        form.addEventListener("reset", resetResult);
    };

    init();
};
