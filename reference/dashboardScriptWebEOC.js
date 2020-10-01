<script>
	$('h2').each(function(){
				var size = $(this).text().length;
				if(size &lt; 4){
		$(this).css('font-size', '9vw');
				}else if(size == 4 || size == 5){
		$(this).css('font-size', '6vw');
				}else{
		$(this).css('font-size', '4vw');
				}
			});
			//
			var totalHopitalized = '<value-of select="//@exp_total_hospitalized" />';
			var totalQuarantinedMandatory = '<value-of select="//@exp_total_quarantine_mandatory" />';
			var totalQuarantinedVoluntary = '<value-of select="//@exp_total_quarantine_voluntary" />';
			var pieObj = $('#status-pie');
			var pieChart = new Chart(pieObj, {
		type: 'pie',
				data: {
		labels: ['Hospitalized', 'Mandatory Quarantine', 'Voluntary Quarantine'],
					datasets: [{
		data: [totalHopitalized, totalQuarantinedMandatory, totalQuarantinedVoluntary],
						backgroundColor: ['#3498db', '#8e44ad', '#e67e22']
					}]
				},
				options: {
		tooltips: {
		enabled: false
					},
					title: {
		display: true,
						position: 'bottom',
						text: 'Quarantine Status',
						fontSize: 16,
						fontColor: '#666'
					},
					plugins: {
		datalabels: {
		color: 'white',
							font: {
		weight: 'bold'
							}
						}
					},
					legend: {
		position: 'top'
					}
				}
			});
			var totalCovidED = '<value-of select="//@exp_EDPosPts" />';
			var totalConfirmed = '<value-of select="//@exp_total_confirmed" />';
			var totalFatalities = '<value-of select="//@exp_total_fatalities" />';
			var totalRecovered = '<value-of select="//@exp_total_recovered" />';
			var barObj = $('#status-bar');
			var barChart = new Chart(barObj, {
		type: 'horizontalBar',
				data: {
		labels: ['COVID + ED', 'Confirmed', 'Fatalities', 'Recovered'],
					datasets: [{
		data: [totalCovidED, totalConfirmed, totalFatalities, totalRecovered],
						backgroundColor: ['rgba(241, 196, 15, 0.8)', 'rgba(231, 76, 60, 0.8)', 'rgba(52, 73, 94, 0.8)', 'rgba(46, 204, 113, 0.8)'],
						borderColor: ['rgba(241, 196, 15, 1)', 'rgba(231, 76, 60, 1)', 'rgba(52, 73, 94, 1)', 'rgba(46, 204, 113, 1)'],
						borderWidth: 1
					}]
				},
				options: {
		maintainAspectRatio: false,
					tooltips: {
		enabled: false
					},
					plugins: {
		datalabels: {
		anchor: 'end',
							align: 'start',
							color: 'white',
							font: {
		weight: 'bold'
							}
						}
					},
					legend:{
		display: false
					},
					scales: {
		xAxes: [{
		ticks: {
		beginAtZero: true
							}
						}],
						yAxes: [{
		gridLines: {
		offsetGridLines: false
							},
							ticks: {
		fontSize: 10
							}
						}]
					},
					title: {
		display: true,
						position: 'bottom',
						text: 'Case Status',
						fontSize: 16,
						fontColor: '#666'
					}
				}
			});
	</script>
