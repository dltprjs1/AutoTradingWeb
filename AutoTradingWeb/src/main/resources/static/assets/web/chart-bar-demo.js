
$.ajax({
    url: "/GetBalance",
    type: "GET",
    dataType: "json",
    success: function(data) {
		console.log(data);   
        var Dat = data.map(function(item) { return DateFormat(item.AUTOTRADING_EVENT_NO); });
        var price = data.map(function(item) { return item.CURRENT_USDT; });
    	ShowBarChart(Dat,price);
    },
    error: function() {
        console.log("Error while fetching Conditions from the server.");
    }
});

function DateFormat(Dat){
	var Dat = Dat.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
	return Dat
}

function ShowBarChart(Dat,Price){
	var ctx = document.getElementById("myBarChart");
	var myLineChart = new Chart(ctx, {
  		type: 'bar',
  		data: {
	    	labels: Dat,
		datasets: [{
        label: "Revenue",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: Price,
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
