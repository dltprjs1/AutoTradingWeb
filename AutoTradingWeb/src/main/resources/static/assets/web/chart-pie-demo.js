var ErrorTitle = [];
var ErrorName = [];

$.ajax({
    url: "/GetTodayError",
    type: "GET",
    dataType: "json",
    success: function(data) {
        var Error1 = data.map(function(item) { return item.ErrorTitle1; });
        var Error2 = data.map(function(item) { return item.ErrorTitle2; });
        var Error3 = data.map(function(item) { return item.ErrorTitle3; });
        var Error4 = data.map(function(item) { return item.ErrorTitle4; });
        var None = 0.001;
        ErrorTitle = [Error1,Error2,Error3,Error4,None];
        ErrorName = ['Check_Reset_Future_Condition','After_Order','Searching_Transaction_Condition_BTC','All_Coin_Buy','None'];
    	ShowPieChart(ErrorTitle,ErrorName);
    },
    error: function() {
        console.log("Error while fetching Conditions from the server.");
    }
});

function ShowPieChart(ErrorTitle,ErrorName){
	var ctx = document.getElementById("ErrorPieChart");
	new Chart(ctx, {
	  type: 'pie',
	  data: {
	    labels: ErrorName,
	    datasets: [{
	      data: ErrorTitle,
	      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
	    }],
	  },
	  options: {
	        legend: {
	            position: 'right' // 라벨을 오른쪽으로 정렬
	        },
	        tooltip: { // 기존 툴팁 사용 안 함
	          enabled: false
	        }
	    }
	});
}
