var moveOnTimer;

$(function(){
	$('.year-div, .photo-div').click(function(){
		var newYear = Number($('#main').attr('data-year')) + 1;
		newYear = (newYear == 2015 ? 2004 : newYear);
		$('#main').attr('data-year', newYear);
		
		var digitObj = $('.digit'), tenObj = $('.ten'), tagObj = $('.tag');
		
		flipChar(digitObj, newYear.toString().slice(3,4));
		flipImg($('.images'), newYear);
		
		switch (newYear) {
		    case 2004:
		    	flipChar(tenObj, 0);
		    	tagObj.text('We got married!');
		        break;
		    case 2005:
		        tagObj.text('Student life...');
		        break;
		    case 2006:
		        tagObj.text('Graduation');
		        break;
		    case 2007:
		        tagObj.text('Move to North Shields');
		        break;
		    case 2008:
		    	tagObj.text('It\'s a girl!');
		        break;
		    case 2009:
		        tagObj.text('First birthday in hospital and all that stuff');
		        break;
		    case 2010:
		        flipChar(tenObj, 1);
		        tagObj.text('Holiday in Spain!');
		        break;
		    case 2011:
		        tagObj.text('Some other stuff probably happened...');
		        break;
			case 2012:
		        tagObj.text('It\'s a boy!');
		        break;
		    case 2013:
		        tagObj.text('Let\'s move South!');
		        break;
		    case 2014:
		        tagObj.text('What\'s next?');
		        break;
		}
		clearInterval(moveOnTimer);
		moveOnTimer = setInterval(function(){
				$('.year-div').click();
		},10000);
		
		return true;
	});

})

function flipChar(charObj,newValue){

	charObj.prepend(newValue + '<br/>');
	charObj.css('top','-77px');
	charObj.animate({ "top": "+=77px" }, "slow" , function() {
		charObj.text(newValue);
	});
	
}

function flipImg(imgObj,newYear){
	
	nextYear = (newYear == 2014 ? 2004 : newYear + 1);
	lastYear = (newYear == 2004 ? 2014 : newYear - 1);
	
	imgObj.animate({ "top": "+=250px" }, "slow" , function() {
		imgObj.children('img:eq(0)').attr('src','img\\' + nextYear + '.jpg')
		imgObj.children('img:eq(1)').attr('src','img\\' + newYear + '.jpg')
		imgObj.children('img:eq(2)').attr('src','img\\' + lastYear + '.jpg')
		imgObj.css('top','-250px');
	});
	
}



