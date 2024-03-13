var AllOfTable = document.getElementById("AllOfTable");
var currentPage = 1;
var totalPages;
var pagesPerGroup = 5;
var TableBody = [];
var TableHeader = [];
var Dat;
var Time;
var url;
var currentURL = window.location.href;
if (currentURL.includes("/ErrorTable")){
	Tab("/GetError",1,1,10);
	//latelyTradesHistory = document.getElementById("latelyTradesHistory").setAttribute("checked", "checked");
	latelyErrorHistory = document.getElementById("latelyErrorHistory").setAttribute("checked", "checked");
	
}else{
	Tab("/GetTradesHistory",1,1,10);	
}
function Tab(URL,Type,PageNumber,PageSize){
	url = URL.substring(1,URL.length);
	currentPage = 1;
	$.ajax({
    	url: URL,
	    type: "GET",
	    dataType: "json",
	    data: {
				param1: Type,							// Type			(INT)
                param2: PageNumber,						// PageNumber	(INT)
                param3: PageSize,						// PageSize		(INT)
                param4: URL.substring(1,URL.length)		// PageList		(STRING)
        },
	    success: function(data) {
			Dat = data.map(function(item) { return item.DATE });
			Time = data.map(function(item) { return item.TIME });
			ClassifyTable(URL.substring(1,URL.length),data);
	    },
	    error: function() {
	        console.log("Error while fetching Conditions from the server.");
	    }
	});
	
	$.ajax({
    	url: URL,
	    type: "GET",
	    dataType: "json",
	    data: {
				param1: 2,							// Type			(INT)
                param2: 1,							// PageNumber	(INT)
                param3: 10,							// PageSize		(INT)
                param4: URL.substring(1,URL.length)	// PageList		(STRING)
        },
	    success: function(data) {
			Pagination(data);
	    },
	    error: function() {
	        console.log("Error while fetching Conditions from the server.");
	    }
	});
}

function ClassifyTable(URL,Data){
	if (URL === "GetTradesHistory") GetTradesHistory(Data);
	if (URL === "GetOrderCondition") GetOrderCondition(Data);
	if (URL === "GetError") GetError(Data);
	ShowTable();
}

function ShowTable(){
	var Table = document.getElementById("datatablesSimple");
	while (Table.firstChild) { Table.removeChild(Table.firstChild); }
	var Str = "<thead> <tr>";
	Str = PushHeaderAndFooter(Str,TableHeader,1);
	Str += "</tr> </thead> <tbody>";
	for (var i = 0; i < TableBody[0].length; i++) {
	    Str += "<tr>";
	    for (var j = 0; j < TableBody.length; j++) {
	        Str += "<td>" + TableBody[j][i] + "</td>";
	    }
	    Str += "</tr>";
	}
	Str += "</tbody>";
	Table.innerHTML = Str;
}

function PushHeaderAndFooter(Str,TableHeader,Type){
	for (var i = 0; i < TableHeader.length; i++) {
    	Str += "<th>"+TableHeader[i]+"</th>";			
	}
	return Str;
}

   
function GetTradesHistory(Data){
	var Name = Data.map(function(item) { return item.NAME });
	var EntryPrice = Data.map(function(item) { return item.ENTRYPRICE });
	var SoldPrice = Data.map(function(item) { return item.SOLDPRICE });
	var Cost = Data.map(function(item) { return item.COST });
	var ProfitAndLoss = Data.map(function(item) { return item.PROFITANDLOSS });
	var Fee = Data.map(function(item) { return item.FEE });
	var Position = Data.map(function(item) { return item.POSITION });
	TableHeader = ['Date','Time','Name','EntryPrice','SoldPrice','Cost','ProfitAndLoss','Fee','Position'];
	TableBody = [Dat,Time,Name,EntryPrice,SoldPrice,Cost,ProfitAndLoss,Fee,Position];
}

function GetOrderCondition(Data){
	var CurrentPrice = Data.map(function(item) { return item.CURRENT_PRICE });
	var EMA5 = Data.map(function(item) { return item.EMA5 });
	var EMA10 = Data.map(function(item) { return item.EMA10 });
	var EMA200 = Data.map(function(item) { return item.EMA200 });
	var EMA200N = Data.map(function(item) { return item.CURRENT_EMA200 });
	var MACD12 = Data.map(function(item) { return item.MACD12 });
	var MACD26 = Data.map(function(item) { return item.MACD26 });
	var CCI = Data.map(function(item) { return item.CCI });
	var CURRENTCCI = Data.map(function(item) { return item.CURRENTCCI });
	TableHeader = ['Date','Time','CurrentPrice','EMA5','EMA10','EMA200','CurrentEMA200','MACD12','MACD26','CCI','CurrentCCI'];
	TableBody = [Dat,Time,CurrentPrice,EMA5,EMA10,EMA200,EMA200N,MACD12,MACD26,CCI,CURRENTCCI];
}

function GetError(Data){
	var ErrorTitle = Data.map(function(item) { return item.ERROR_TITLE });
	var ErrorContents = Data.map(function(item) { return item.ERROR_CONTENTS });
	TableHeader = ['Date','Time','ErrorTitle','ErrorContents'];
	TableBody = [Dat,Time,ErrorTitle,ErrorContents];
}

function Pagination(Data){
	totalPages = Data[0].TotalPages;	
    updatePageInfo();
}


function MovePage(Type,Page,PageSize){
    currentPage = Page;
    updatePageInfo();
    $.ajax({
    	url: "/"+url,
	    type: "GET",
	    dataType: "json",
	    data: {
				param1: Type,							// Type			(INT)
                param2: Page,						// PageNumber	(INT)
                param3: PageSize,						// PageSize		(INT)
                param4: url								// PageList		(STRING)
        },
	    success: function(data) {
			Dat = data.map(function(item) { return item.DATE });
			Time = data.map(function(item) { return item.TIME });
			ClassifyTable(url,data);
	    },
	    error: function() {
	        console.log("Error while fetching Conditions from the server.");
	    }
	});    
}

function updatePageInfo() {
    var pageNumbers = "";
    var startPage = Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;
    var endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
    pageNumbers += "<nav class='datatable-pagination'>";
    pageNumbers += "    <ul class='datatable'>";

    if (startPage > 1) {
		if (currentPage == 1){
			pageNumbers += "        <li class='datatable-pagination-list-item'>";
        	pageNumbers += `			<a class="datatable-pagination-list-item-link" onclick="MovePage(1,${startPage - 1},10)">‹</a>`;
        	pageNumbers += "		</li>";	
		}else{
			pageNumbers += "        <li class='datatable-pagination-list-item'>";
        	pageNumbers += `			<a class="datatable-pagination-list-item-link" onclick="MovePage(1,${startPage - 1},10)">‹</a>`;
        	pageNumbers += "		</li>";
		} 	
    }
    for (var i = startPage; i <= endPage; i++) {
		if (currentPage == i){
			pageNumbers += "		<li class='datatable-pagination-list-item datatable-active'>";
        	pageNumbers += `			<a class="pageBtn" onclick="MovePage(1,${i},10) style="min-width: 3vw;"">${i}</a>`;
        	pageNumbers += "		</li>";	
		}else {
			pageNumbers += "		<li class='datatable-pagination-list-item'>";
        	pageNumbers += `			<a class="pageBtn" onclick="MovePage(1,${i},10)" style="min-width: 3vw;"">${i}</a>`;
        	pageNumbers += "		</li>";	
		}
    }
    if (endPage < totalPages) {
		if (currentPage == totalPages){
			pageNumbers += "        <li class='datatable-pagination-list-item'>";
        	pageNumbers += `			<a class="datatable-pagination-list-item-link" onclick="MovePage(1,${endPage + 1},10)">›</a>`;
        	pageNumbers += "		</li>";	
		}else{
			pageNumbers += "        <li class='datatable-pagination-list-item'>";
        	pageNumbers += `			<a class="datatable-pagination-list-item-link" onclick="MovePage(1,${endPage + 1},10)">›</a>`;
        	pageNumbers += "		</li>";	
		}
        
    }
    pageNumbers += "	</ui>";
    pageNumbers += "</nav>";
    document.getElementById("pageNumbers").innerHTML = pageNumbers;
}
