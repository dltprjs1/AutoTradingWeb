var TradingCount = document.getElementById("TradingCount");
var ProfitAndLoss = document.getElementById("ProfitAndLoss")
var ErrorCount = document.getElementById("ErrorCount");

var TradingCountVar;
var ProfitAndLossVar;
var ErrorCountVar;

$.ajax({
    url: "/GetTodayInformation",
    type: "GET",
    dataType: "json",
    success: function(data) {	
		console.log(data);
		TradingCountVar = data[0].TRADINGCOUNT;
		ProfitAndLossVar = data[0].PROFITANDLOSS;
		ErrorCountVar = data[0].ERRORCOUNT;
		
		TradingCount.innerText = TradingCountVar+" 건";
		ProfitAndLoss.innerText = "$ "+ProfitAndLossVar;
		ErrorCount.innerText = ErrorCountVar+" 건";
    },
    error: function() {
        console.log("Error while fetching Conditions from the server.");
    }
});

function UpdateErrorCount(){	
	ErrorCount.innerText = (parseInt(ErrorCountVar)+1)+" 건";
}