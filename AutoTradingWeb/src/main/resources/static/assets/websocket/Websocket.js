var CurrentBTC = document.getElementById("BTC_DATA");
var CurrentEMA = document.getElementById("EMA_DATA");
var CurrentCCI = document.getElementById("CCI_DATA");
var ChartBTC = document.getElementById("CurrentBTC");
var ChartEMA = document.getElementById("CurrentEMA");
var ChartCCI= document.getElementById("CurrentCCI");
const socket = new WebSocket('ws://localhost:8080/websocket');

socket.onopen = function(event) {
  console.log('WebSocket Connection!.');
};

socket.onmessage = function(event) {
  var Messages = event.data.split("#");
  Classify(Messages);

};

socket.onclose = function(event) {
  console.log('WebSocket 연결이 닫혔습니다.');
};

socket.onerror = function(error) {
  console.error('WebSocket 오류:', error.message);
};

function Classify(Messages){
	if (Messages[0] === "Condition"){
		Condition(Messages);
	}else if (Messages[0] === "Error"){
		UpdateErrorCount(); 
	}
}

function Condition(Messages){
	Time.shift();
	EMA200N.shift();
	CCIN.shift();
	price.shift();
	console.log(Messages[1],Messages[13],Messages[Messages.length-1],Messages[9]);
	Time.push(TimeFormat(Messages[1].substring(8,14)));
	EMA200N.push(Messages[13]);
	CCIN.push(Messages[Messages.length-1]);
	price.push(Messages[9]);
	ToggleChart();
}