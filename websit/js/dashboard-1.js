(function($) {
    /* "use strict" */


 var dzChartlist = function(){
	//let draw = Chart.controllers.line.__super__.draw; //draw shadow
	var screenWidth = $(window).width();
	var donutChart = function(){
		$("span.donut").peity("donut", {
			width: "65",
			height: "65"
		});
	}
	var lineChart = function(){
		var options = {
          series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 60, 40]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 70, 41]
        }],
          chart: {
          height: 300,
		  toolbar:{
			show:false
		  },
          type: 'area'
        },
		colors:['#2BC155','#3F9AE0'],
		legend:{
			show:false
		},
        dataLabels: {
          enabled: false
        },
        stroke: {
			width:4,
          curve: 'smooth'
        },
       xaxis: {
			show: false,
			lines: {
				show: false,
			},
			labels: {
				show: false,
			},
			axisBorder: {
			  show: false,
			},
			
		},
		fill:{
			opacity:0.05,
			type:'solid'
		},
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#lineChart"), options);
        chart.render();
	}
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				donutChart();
				lineChart();
			},
			
			resize:function(){
				
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		
		
	});     

})(jQuery);