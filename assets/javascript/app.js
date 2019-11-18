$(document).ready(function() {
$("#currency").submit(function (e) {
        e.preventDefault();
        $("#beginningCurrency").val("");
        $("#endingCurrenctName").empty();
        $("#endingCurrenctName").prepend("");            
        $("#endingCurrency").val("");
        $("#eurAmount").val("");
        $("#eurRate").val("");
        var e = document.getElementById("currenyDrop");
        var convertCurrency = e.options[e.selectedIndex].value;
        var text = e.options[e.selectedIndex].text;
        console.log(convertCurrency);
        console.log(text);
        var amount = $("#usDollarAmount").val();
        console.log("User Enter Amount " + amount);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to="+convertCurrency+"&amount=" + amount,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                "x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log("Inside the Currency");
            var results = response;
            console.log(results);
            var rates = results.rates;
            console.log();

            $("#beginningCurrency").val(response.base_currency_name);
            $("#endingCurrenctName").empty();
            $("#endingCurrenctName").prepend(getCurrencyName(rates, convertCurrency)+":");            
            $("#endingCurrency").val(getCurrencyName(rates, convertCurrency));
            $("#usDollarAmount").val();
            $("#eurAmount").val(getAmount(rates, convertCurrency));
            $("#eurRate").val(getRate(rates, convertCurrency));
            $(this).submit();
        })

        function getCurrencyName(rates, convertCurrency) {
            console.log(rates);
            switch(convertCurrency){
                case "EUR" : return rates.EUR.currency_name;
                case "GBP" : return rates.GBP.currency_name;
                case "CAD" : return rates.CAD.currency_name;
                case "MXN" : return rates.MXN.currency_name;
            }
                }

       function getAmount(rates, convertCurrency){
           switch(convertCurrency){
            case "EUR" : return rates.EUR.rate_for_amount;
            case "GBP" : return rates.GBP.rate_for_amount;
            case "CAD" : return rates.CAD.rate_for_amount;
            case "MXN" : return rates.MXN.rate_for_amount;

           }
       }

       function getRate(rates, convertCurrency){
           switch(convertCurrency){
            case "EUR" : return rates.EUR.rate;
            case "GBP" : return rates.GBP.rate;
            case "CAD" : return rates.CAD.rate;
            case "MXN" : return rates.MXN.rate;

           }
       }
    })    
$("#exchange").submit(function(e){
// alert("Exchange");

e.preventDefault();
$("#latestPrice").val("");
$("#week52High").val("");
$("#week52Low").val("");
$("#ytdChange").val("");
$("#companyName").val("");

var stock = $("#stockName").val();
console.log (stock);
var exchangeSettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://investors-exchange-iex-trading.p.rapidapi.com/stock/"+stock+"/book",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
        "x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
    }
}
$.ajax(exchangeSettings).done(function (response) {
    console.log("Exchange Information");

    console.log(response);
    console.log(response.quote.latestPrice);
    console.log(response.quote.week52High);
    console.log(response.quote.week52Low);
    console.log(response.quote.ytdChange);
    $("#latestPrice").val(response.quote.latestPrice);
    $("#week52High").val(response.quote.week52High);
    $("#week52Low").val(response.quote.week52Low);
    $("#ytdChange").val(response.quote.ytdChange);
    $("#companyName").val(response.quote.companyName);

})
.fail(function(xhr, status, error){
    $("#stockName").val("");
    alert("Entet valid stock symbol");
});
});

$("#cryto").submit(function(e){
    // alert("Cryto");
    e.preventDefault();

    
    var e = document.getElementById("coinDrop");
        var crypto = e.options[e.selectedIndex].value;

    console.log ("crypto");

    var crytoSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin="+crypto,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
            "x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
        }
    }
    $.ajax(crytoSettings).done(function (response) {
        // alert("inside ajax");
        console.log(response);
        console.log(response.coin_name);
        console.log(response.last_price);
        console.log(response.price_24hr_pcnt);
        console.log(response.vol_24hr_pcnt);
        $("#coinName").val(response.coin_name);
        $("#lastPrice").val(response.last_price);
        $("#price24hr").val(response.price_24hr_pcnt);
        $("#vol24hr").val(response.vol_24hr_pcnt);
    });
});

$("#cryptoReset").click(function(){
    $("#coinName").val("");
    $("#lastPrice").val("");
    $("#price24hr").val("");
    $("#vol24hr").val("");
});


$("#stockReset").click(function(){
    $("#latestPrice").val("");
$("#week52High").val("");
$("#week52Low").val("");
$("#ytdChange").val("");
$("#companyName").val("");
});

$("#exchangeReset").click(function(){
    $("#beginningCurrency").val("");
    $("#endingCurrenctName").empty();
    $("#endingCurrenctName").prepend("");            
    $("#endingCurrency").val("");
    $("#eurAmount").val("");
    $("#eurRate").val("");
    $("#usDollarAmount").val("");
});

})