$(function(){ 
            $("[id$='circle']").percircle();
            
            $("#clock").percircle({
                perclock: true
            });
			
			$("#countdown").percircle({
                perdown: true,
				secs: 14,
				timeUpText: 'finally!',
				reset: true
            });
            
            $("#custom").percircle({
                text:"custom",
                percent: 27
            });
			$("#custom-color").percircle({
				progressBarColor: "#CC3366",
				percent: 64
			});
        });