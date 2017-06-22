	function walkLeft(){
		walkDivEuIcon()
		walkDivEuText()
		walkDivWave()
		walkDivSocialNetworkFace()
		walkDivSocialNetworkLinkedin()

	}
	function walkDivEuIcon() {
		leftStyle = $("#divEuIcon").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = split1[1]-15
		$("#divEuIcon").attr("style", "left:" + actualNumber + "px")
	}
	function walkDivEuText(){
		leftStyle = $("#divTextLeft").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = split1[1]-15
		$("#divTextLeft").attr("style", "left:" + actualNumber + "px")
	}
	function walkDivWave(){
		leftStyle = $("#divWave").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = split1[1]-15
		$("#divWave").attr("style", "left:" + actualNumber + "px")
	}
	function walkDivSocialNetworkFace(){
		leftStyle = $("#divSocialNetworkFace").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = split1[1]-15
		$("#divSocialNetworkFace").attr("style", "left:" + actualNumber + "px")
	}
	function walkDivSocialNetworkLinkedin(){
		leftStyle = $("#divSocialNetworkLinkedin").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = split1[1]-15
		$("#divSocialNetworkLinkedin").attr("style", "left:" + actualNumber + "px")
	}
	
	
	function walkRight(){
		walkDivEuIconRight()
		walkDivEuTextRight()
		walkDivWaveRight()
		walkDivSocialNetworkFaceRight()
		walkDivSocialNetworkLinkedinRight()
	}
	function walkDivEuIconRight() {
		leftStyle = $("#divEuIcon").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = parseInt(split1[1])+parseInt(15)
		$("#divEuIcon").attr("style", "left:" + actualNumber + "px")
	}
	function walkDivEuTextRight(){
		leftStyle = $("#divTextLeft").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = parseInt(split1[1])+parseInt(15)
		$("#divTextLeft").attr("style", "left:" + actualNumber + "px")
	}
	function walkDivWaveRight(){
		leftStyle = $("#divWave").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = parseInt(split1[1])+parseInt(15)
		$("#divWave").attr("style", "left:" + actualNumber + "px")
	}
	function walkDivSocialNetworkFaceRight(){
		leftStyle = $("#divSocialNetworkFace").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = parseInt(split1[1])+parseInt(15)
		$("#divSocialNetworkFace").attr("style", "left:" + actualNumber + "px")
	}
	function walkDivSocialNetworkLinkedinRight(){
		leftStyle = $("#divSocialNetworkLinkedin").attr("style")
		split = leftStyle.split("px")
		split1 = split[0].split(":")
		actualNumber = parseInt(split1[1])+parseInt(15)
		$("#divSocialNetworkLinkedin").attr("style", "left:" + actualNumber + "px")
	}
	
	
	
	$('#body').bind('mousewheel', function(e){
		var delta = e.originalEvent.wheelDelta;
		if(delta > 0){
			walkRight();
		  }
		else{
			walkLeft();
		}
	});
	
	$( document ).ready(function() {
			document.onkeydown = function(e) {
			switch (e.keyCode) {
				case 37:
					walkRight();
					break;
				case 39:
					walkLeft();
					break;
			}
		};
				
	});
	
