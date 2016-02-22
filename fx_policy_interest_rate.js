//		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["2013/3","2013/4","2013/5","2013/6","2013/7","2013/8","2013/9","2013/10","2013/11","2013/12","2014/1","2014/2","2014/3","2014/4","2014/5","2014/6","2014/7","2014/8","2014/9","2014/10","2014/11","2014/12","2015/1","2015/2","2015/3","2015/4","2015/5","2015/6","2015/7","2015/8","2015/9"],
			datasets : [
				{
					label: "JAPAN",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(255,0,0,1)",
					pointColor : "rgba(255,0,0,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(255,0,0,1)",
					data : ["0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1","0.1"]
				},
				{
					label: "米国",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(255,20,147,1)",
					pointColor : "rgba(255,20,147,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(255,20,147,1)",
					data : ["0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.25"]
				},
				{
					label: "欧州",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(255,69,0,1)",
					pointColor : "rgba(255,69,0,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(255,69,0,1)",
					data : ["0.75","0.75","0.5","0.5","0.5","0.5","0.5","0.5","0.25","0.25","0.25","0.25","0.25","0.25","0.25","0.15","0.15","0.15","0.05","0.05","0.05","0.05","0.05","0.05","0.05","0.05","0.05","0.05","0.05","0.05","0.05"]
				},
				{
					label: "英国",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(255,255,0,1)",
					pointColor : "rgba(255,255,0,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(255,255,0,1)",
					data : ["0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5"]
				},
				{
					label: "カナダ",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(148,0,211,1)",
					pointColor : "rgba(148,0,211,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(148,0,211,1)",
					data : ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","0.75","0.75","0.75","0.75","0.75","0.75","0.5","0.5","0.5"]
				},
				{
					label: "豪州",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(50,205,50,1)",
					pointColor : "rgba(50,205,50,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(50,205,50,1)",
					data : ["3","3","2.75","2.75","2.75","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.25","2.25","2.25","2","2","2","2","2"]
				},
				{
					label: "NZ",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(0,139,139,1)",
					pointColor : "rgba(0,139,139,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(0,139,139,1)",
					data : ["2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.5","2.75","3","3","3.25","3.5","3.5","3.5","3.5","3.5","3.5","3.5","3.5","3.5","3.5","3.5","3.25","3","3","2.75"]
				},
				{
					label: "スイス",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(244,164,96,1)",
					pointColor : "rgba(244,164,96,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(244,164,96,1)",
					data : ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","-0.75","-1.25","-1.25","-1.25","-1.25","-1.25","-1.25","-1.25","-1.25"]
				},
				{
					label: "香港",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(165,42,42,1)",
					pointColor : "rgba(165,42,42,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(165,42,42,1)",
					data : ["0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5"]
				},
				{
					label: "南ア",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(47,79,79,1)",
					pointColor : "rgba(47,79,79,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(47,79,79,1)",
					data : ["5","5","5","5","5","5","5","5","5","5","5.5","5.5","5.5","5.5","5.5","5.5","5.75","5.75","5.75","5.75","5.75","5.75","5.75","5.75","5.75","5.75","5.75","5.75","6.00","6.00"]
				},
				{
					label: "トルコ",
					fillColor : "rgba(255,255,255,0)",
					strokeColor : "rgba(0,183,79,1)",
					pointColor : "rgba(0,183,79,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(0,183,79,1)",
					data : ["5.5","5","4.5","4.5","4.5","4.5","4.5","4.5","4.5","4.5","10","10","10","10","9.5","8.75","8.25","8.25","8.25","8.25","8.25","8.25","7.75","7.5","7.5","7.5","7.5","7.5","7.5","7.5"]
				}
			]

		};

var chart_option = {
    legendTemplate : "<% for (var i=0; i<datasets.length; i++){%><li><span style=\"color:<%=datasets[i].strokeColor%>\">■</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%>"
};


	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			bezierCurve : false,
			responsive: true
		});

	}