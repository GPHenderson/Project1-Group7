$(document).ready(function() {
$("#currency").submit(function (e) {
  
    e.preventDefault();
  
    var amount = $("#usDollarAmount").val();
    console.log("User Enter Amount "+amount);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=EUR&amount="+amount,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log("Inside the Currencey");
          var results = response;
          console.log(results);
          var rates = results.rates;
          console.log()
          

          $("#beginningCurrency").val(response.base_currency_name);
          $("#endingCurrenctName").val(response.rates.EUR.currency_name);
          $("#endingCurrency").val(response.rates.EUR.currency_name);
          $("#eurAmount").val(response.rates.EUR.rate_for_amount);
          $("#eurRate").val(response.rates.EUR.rate);
    $(this).submit();
    // alert("END OF FUnction");
})
});     
$("#exchange").submit(function(e){
// alert("Exchange");
e.preventDefault();
var exchangeSettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://investors-exchange-iex-trading.p.rapidapi.com/stock/intc/book",
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
    $("#stockName").val(response.quote.companyName);
});
});

$("#cryto").submit(function(e){
    // alert("Cryto");
    e.preventDefault();
    var crytoSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=btc",
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
})

// // Currency converter API Documentation
// var settings = {
//  "async": true,
//  "crossDomain": true,
//  "url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=EUR&amount=1",
//  "method": "GET",
//  "headers": {
//      "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
//      "x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
//  }
// }

// $.ajax(settings).done(function (response) {
//  console.log(response);
//  console.log(response.base_currency_name);
//  console.log(response.rates.EUR.currency_name);
//  console.log(response.rates.EUR.rate_for_amount);
// });

// // Investors Exchange API Documentation//
// var settings = {
//  "async": true,
//  "crossDomain": true,
//  "url": "https://investors-exchange-iex-trading.p.rapidapi.com/stock/intc/book",
//  "method": "GET",
//  "headers": {
//      "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
//      "x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
//  }
// }

// $.ajax(settings).done(function (response) {
//  console.log(response);
//  console.log(response.quote.latestPrice);
//  console.log(response.quote.week52High);
//  console.log(response.quote.week52Low);
//  console.log(response.quote.ytdChange)

//  // code for Investors Exchange goes here
//     //////////////////////////////////////////////////
//  //
// });

// ///////////////////////////////column break//////////////////////////////////////////////////////////////////////////

// // Crypto Asset Ticker API documentation//
// var settings = {
//  "async": true,
//  "crossDomain": true,
//  "url": "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=btc",
//  "method": "GET",
//  "headers": {
//      "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
//      "x-rapidapi-key": "7b1446c9edmshf8adfa5f76f3cc9p15e989jsn47a76e99940a"
//  }
// }

// $.ajax(settings).done(function (response) {
//  console.log(response);
//  console.log(response.coin_name);
//  console.log(response.last_price);
//  console.log(response.price_24hr_pcnt);
//  console.log(response.vol_24hr_pcnt);

//  // code for Crypto Asset Ticker goes here
//     //////////////////////////////////////////////////
//  //
// 
})