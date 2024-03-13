var Time;
var BTC_DataList = [];
var EMA_DataList = [];
var MACD_DataList = [];
var CCI_DataList = [];
var CONDITION_DataList = [];

var ChartBTC = document.getElementById("30MIN_BTC_DATA");
var Condition = document.getElementById("CONDITION_DATA");
var ChartEMA = document.getElementById("30MIN_EMA_DATA");
var ChartMACD = document.getElementById("30MIN_MACD_DATA");
var ChartCCI = document.getElementById("30MIN_CCI_DATA");

var CanvasBTC = document.getElementById("30Min_BTC_Canvas");
var CanvasCondition = document.getElementById("Condition_Canvas");
var CanvasEMA = document.getElementById("30Min_EMA_Canvas");
var CanvasMACD = document.getElementById("30Min_MACD_Canvas");
var CanvasCCI = document.getElementById("30Min_CCI_Canvas");

$.ajax({
    url: "/GetConditionDetails",
    type: "GET",
    dataType: "json",
    success: function(Data) {
		console.log(Data);
		setInterval(Update_Charts_Per_Thirty_Min, 1800 * 1000);
        ClassifyCharData(Data);                
    },
    error: function() {
        console.log("Error while fetching Conditions from the server.");
    }
});

function Update_Charts_Per_Thirty_Min(){
	$.ajax({
    url: "/GetConditionDetails",
    type: "GET",
    dataType: "json",
    success: function(Data) {
		console.log(Data);
        ClassifyCharData(Data);                
    },
    error: function() {
        console.log("Error while fetching Conditions from the server.");
    }
});
}


function ClassifyCharData(Data){
	Time = Data.map(function(item) { return item.TIME });
	var Current_Price = Data.map(function(item) { return item.CURRENT_PRICE });
	var EMA5 = Data.map(function(item) { return item.EMA5 });
	var EMA10 = Data.map(function(item) { return item.EMA10 });
	var EMA200 = Data.map(function(item) { return item.EMA200 });
	var MACD12 = Data.map(function(item) { return item.MACD12 });
	var MACD26 = Data.map(function(item) { return item.MACD26 });
	var CCI = Data.map(function(item) { return item.CCI });
	var CCIN = Data.map(function(item) { return item.CURRENTCCI });
	var COMPARE_CURRENT_PRICE_WITH_EMA200 = CheckPosition(Data[Data.length-1].COMPARE_CURRENT_PRICE_WITH_EMA200);
	var COMPARE_EMA5_WITH_EMA10 = CheckPosition(Data[Data.length-1].COMPARE_EMA5_WITH_EMA10);
	var COMPARE_EMA5_WITH_EMA200 = CheckPosition(Data[Data.length-1].COMPARE_EMA5_WITH_EMA200);
	var COMPARE_MACD12_WITH_MACD26 = CheckPosition(Data[Data.length-1].COMPARE_MACD12_WITH_MACD26);
	var COMPARE_MACD12_WITH_ZERO = CheckPosition(Data[Data.length-1].COMPARE_MACD12_WITH_ZERO);
	var CHECK_CCI_OR_CURRENT_CCI = CheckPosition(Data[Data.length-1].CHECK_CCI_OR_CURRENT_CCI);
	var CompareName = ['Condition1','Condition2','Condition3','Condition4','Condition5','Condition6'];
	BTC_DataList = [Time,Current_Price,EMA200,null,null];
	EMA_DataList = [Time,EMA5,EMA10,null,null];
	MACD_DataList = [Time,MACD12,MACD26,null,null];
	CCI_DataList = [Time,CCI,CCIN,null,null];
	CONDITION_DataList = [COMPARE_CURRENT_PRICE_WITH_EMA200,COMPARE_EMA5_WITH_EMA10,COMPARE_EMA5_WITH_EMA200,COMPARE_MACD12_WITH_MACD26,COMPARE_MACD12_WITH_ZERO,CHECK_CCI_OR_CURRENT_CCI];
	
	console.log(CONDITION_DataList);
	
	ShowAreaChart(CanvasBTC,BTC_DataList);
	ShowAreaChart(CanvasEMA,EMA_DataList);
	ShowAreaChart(CanvasMACD,MACD_DataList);
	ShowAreaChart(CanvasCCI,CCI_DataList);
	ShowbarChart(CanvasCondition,CompareName,CONDITION_DataList);
}

function CheckPosition(Position){
	var Return = -1;
	if (Position == 'L'){ Return = 1; }
	return Return;
}

function ShowAreaChart(id,DataList){
	new Chart(id, {
  		type: 'line',
  		data: {
    	labels: DataList[0],
    	datasets: [
			{
                label: "Data1",
                lineTension: 0.3,
                backgroundColor: "rgba(2,117,216,0.2)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: DataList[1],
            },
            {
                label: "Data2",
                lineTension: 0.3,
                backgroundColor: "rgba(46, 204, 113, 0.2)", // 초록색으로 변경
                borderColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointRadius: 5,
                pointBackgroundColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: DataList[2],
            },
            {
                label: "Data3",
                lineTension: 0.3,
                backgroundColor: "rgba(46, 204, 113, 0.2)", // 초록색으로 변경
                borderColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointRadius: 5,
                pointBackgroundColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: DataList[3],
            },
            {
                label: "Data4",
                lineTension: 0.3,
                backgroundColor: "rgba(46, 204, 113, 0.2)", // 초록색으로 변경
                borderColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointRadius: 5,
                pointBackgroundColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(46, 204, 113, 1)", // 초록색으로 변경
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: DataList[4],
            },
		],
  	},
  	options: {
    	legend: {
      	display: false
    	}
  	}
	});
}

function ShowbarChart(id,CompareName,DataList){
	new Chart(id, {
  		type: 'bar',
  		data: {
	    	labels: CompareName,
		datasets: [{
        label: "Revenue",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: DataList,
        }],
  	    },
  		options: {
    		scales: {
      		xAxes: [{
        		gridLines: {
          		display: false
        		},
      		}],
      		yAxes: [{
        		gridLines: {
          		display: true
       			}
      		}],
    		},
    		legend: {
      		display: false
    		}
  		}
	});	
}