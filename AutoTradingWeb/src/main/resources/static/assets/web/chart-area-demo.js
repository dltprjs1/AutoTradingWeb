var Time;
var price;
var EMA200N;
var CCIN;
var DataList = [];
var CurrentBTC = document.getElementById("BTC_DATA");
var CurrentEMA = document.getElementById("EMA_DATA");
var CurrentCCI = document.getElementById("CCI_DATA");
var ChartBTC = document.getElementById("CurrentBTC");
var ChartEMA = document.getElementById("CurrentEMA");
var ChartCCI= document.getElementById("CurrentCCI");


$.ajax({
    url: "/GetCondition",
    type: "GET",
    dataType: "json",
    success: function(Data) {
		console.log(Data);
		//setInterval(ToggleChart, 5000);
		/*CurrentEMA.style.display = "none";
		CurrentCCI.style.display = "none";*/
        Time = Data.map(function(item) { return TimeFormat(item.TIME); });
        price = Data.map(function(item) { return item.CURRENT_PRICE; });
        EMA200N = Data.map(function(item) { return item.CURRENT_EMA200; });
        CCIN = Data.map(function(item) { return item.CURRENTCCI; });
        DataList = [Time,price];
        ShowAreaChart(ChartBTC,DataList);
        ToggleChart();
    },
    error: function() {
        console.log("Error while fetching Conditions from the server.");
    }
});

function ToggleChart(){
	DataList = [];
	var ChartComplication = [CurrentBTC,CurrentEMA,CurrentCCI];
	var CanvasComplication = [ChartBTC,ChartEMA,ChartCCI]
	for (var i = 0;i<=ChartComplication.length-1;i++){
		DataList = CheckData(ChartComplication[i]);
		ShowAreaChart(CanvasComplication[i],DataList);
		/*if (window.getComputedStyle(ChartComplication[i]).getPropertyValue("display") === 'block' && i+1 != ChartComplication.length){
			ChartComplication[i].style.display = "none";
			ChartComplication[i+1].style.display = "block";
			DataList = CheckData(ChartComplication[i+1]);
			ShowAreaChart(CanvasComplication[i+1],DataList);
			break;
		}
		if(i+1 == ChartComplication.length){
			ChartComplication[i].style.display = "none";
			ChartComplication[0].style.display = "block";
			DataList = CheckData(ChartComplication[0]);
			ShowAreaChart(CanvasComplication[0],DataList);
			break;
		} */
	}
}

function CheckData(Chart){
	DataList = [];
	if ((Chart.querySelector('#chartTitle').innerHTML).includes("실시간 EMA")){
		DataList = [Time,EMA200N,null];
	}else if ((Chart.querySelector('#chartTitle').innerHTML).includes("실시간 CCI")){
		DataList = [Time,CCIN,null];
	}else{
		DataList = [Time,price,null];
	}
	return DataList;
}

function TimeFormat(Time){
	var formattedTime = Time.replace(/(\d{2})(\d{2})(\d{2})/, '$1:$2:$3');
	return formattedTime
}

function ShowAreaChart(id,DataList){
	new Chart(id, {
  		type: 'line',
  		data: {
    	labels: DataList[0],
    	datasets: [
			{
                label: "BTC-Price",
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
                label: "New-Data",
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
		],
  	},
  	options: {
    	legend: {
      	display: false
    	}
  	}
	});
}