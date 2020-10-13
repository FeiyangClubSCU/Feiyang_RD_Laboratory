var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var labels1Fifty = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
console.log('Hey，小伙子，报名请在“还有什么想说的”表单中注明来自 console');
//飞扬研发历年代码行增量
var canvas2 = {
	labels : ["2009","2010","2011","2012","2013","2014"],
	datasets : [
		{
			label: "飞扬研发历年代码行增量/万行",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			scaleShowGridLines : true,
			scaleShowLabels : true,
			data : [22,26,27,31,38,56]
		}
	]
}

var canvas5 = {
	labels : ["python","c","c++","nodejs","php","java","other"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data : [7,4,5,16,15,5,3]
		}
	]
}


var canvas6 = [
		{
			value: 27,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "计算机"
		},
		{
			value: 13,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "软件"
		},{
			value: 4,
			color: "#949FB1",
			highlight: "#A8B3C5",
			label: "法学院"
		},
		{
			value: 3,
			color: "#4D5360",
			highlight: "#616774",
			label: "吴玉章"
		},
		{
			value: 3,
			color: "rgb(142, 68, 173)",
			highlight: "rgb(155, 89, 182)",
			label: "其他"
		},
		{
			value: 5,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "物理"
		}
		

	];


$(document).ready(function() {

	setTimeout(function(){
		var ref = (document.referrer?document.referrer.replace('&','_'):'local')+'__'+navigator.userAgent;
		$.get('http://203.195.164.179:5555/index.html?referrer='+ref, function(data){});
	},1000);

	$('#button').click(function(){
					$('#button').val('提交中···');
					$("#button").attr("disabled","true").css('background','#646464');
					var name = $('#name').val();
					var phone = $('#phone').val();
					var sex = $('#sex').val();
					var college = $('#college').val();
					var grade = $('#grade').val();
					var say = $('#say').val();

					if(name == '姓名'){
						name = '';
					}
					if(phone == '手机'){
						phone = '';
					}
					if(sex == -1) {
						sex = '';
					}
					if(college == -1){
						college = '';
					}
					if(grade == -1){
						grade = '';
					}
					if(say == '如果你有在博客/Github/知乎/微博或其他社区活跃，请在这里附上你的ID，以及你擅长的编程语言（如果有）和其他想说的话。最多255字'){
						say = '';
					}

					//console.log(name + phone + sex + college + grade + say);
					var url = 'http://203.195.164.179:5555/forms';
					$.post(url, {name:name, phone:phone, sex:sex, college:college, grade:grade, say:say}, function(data,status){
						// console.log(data);
						// console.log(status);
						if(data.code == 0){
							alert('报名成功！请保持手机畅通，我们将在周六统一发送面试通知！如果你喜欢这个页面，请把它分享给你的朋友们吧');
							location.href = "#page1";	
						}else if(data.code == 1){
							alert('姓名不能为空');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else if(data.code == 2){
							alert('性别不能为空');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else if(data.code == 3){
							alert('性别格式错误');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else if(data.code == 4){
							alert('手机号不能为空');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else if(data.code == 5){
							alert('手机号格式不正确');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else if(data.code == 6){
							alert('年级不能为空');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else if(data.code == 7){
							alert('年级格式错误');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else if(data.code == 8){
							alert('学院不能为空');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else if(data.code == 9){
							alert('学院格式错误');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F')
						}else if(data.code == 500){
							alert('服务器内部错误！');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}else{
							alert('请不要频繁提交');
							$('#button').val('提 交');
							$('#button').removeAttr("disabled").css('background','#40A46F');
						}

					}).error(function(){
						alert('请不要频繁提交');
						$('#button').val('提 交');
						$('#button').removeAttr("disabled").css('background','#40A46F');
					});

				});

	$.fn.fullpage({
		slidesColor: ['#232830','rgb(155, 89, 182)', '#4BBFC3', '#1bbc9b', 'rgb(44, 62, 80)', 'rgb(211, 84, 0)','#1bbc9b', '#3C4C55'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6', 'page7', 'page8'],
		resize: true, //字体是否随着窗口缩放而缩放
		scrollingSpeed: 700,  //滚动速度，单位为毫秒
		easing: 'easeInQuart',	//滚动动画方式
		navigation:	false, //	是否显示项目导航
		navigationPosition:	'right',	//项目导航的位置，可选 left 或 right
		navigationColor: '#000',//项目导航的颜色
		continuousVertical:true,	//布尔值	false	是否循环滚动，与 loopTop 及 loopBottom 不兼容

		afterRender: function(){
			$('.s1').find('h1').fadeIn(1000);
			$('.s1').find('p').delay(100).fadeIn(1200);
			$('.s1').find('h3').delay(100).fadeIn(1200);
			$('.s1').find('.down').fadeIn(1).animate({bottom:'10%'}, 1500);
			var ctx = document.getElementById("canvas1").getContext("2d");
			window.myBar = new Chart(ctx).Bar({labels : labels1Fifty,
				datasets : [
					{	
						fillColor : "rgba(91, 144, 191, 0.3)",
						strokeColor : "rgba(91, 144, 191, 3)",
						highlightFill: "rgba(91, 144, 191, 0.3)",
						highlightStroke: "rgba(91, 144, 191, 0.3)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						},
				]}, {
					responsive: true,
					scaleShowGridLines : false,
					scaleShowLabels : false,
					scaleFontSize : 0,
					barValueSpacing : 1,
					scaleLineColor : "rgba(0,0,0,0)",
					barShowStroke : false,
				});

			
			if(window.screen.availWidth > 1024) {
				$('#canvas1').attr('style', 'width:' + document.body.clientWidth + 'px;' + 'height:' + document.body.clientHeight + 'px');
			}
		},

		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.s1').find('h1').fadeIn(1000);
				$('.s1').find('p').fadeIn(2000);
				$('.s1').find('h3').fadeIn(2000);
				$('.s1').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
				var ctx = document.getElementById("canvas1").getContext("2d");
				window.myBar = new Chart(ctx).Bar({labels : labels1Fifty,
					datasets : [
					{	
						//scaleOverlay : false,
						fillColor : "rgba(91, 144, 191, 0.3)",
						strokeColor : "rgba(91, 144, 191, 3)",
						highlightFill: "rgba(91, 144, 191, 0.3)",
						highlightStroke: "rgba(91, 144, 191, 0.3)",
						data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
						},
				]}, {
					responsive: true,
					scaleShowGridLines : false,
					scaleShowLabels : false,
					scaleFontSize : 0,
					barValueSpacing : 1,
					scaleLineColor : "rgba(0,0,0,0)",
					barShowStroke : false
				});	
			//$('#canvas1').attr('style', 'width:' + clientWidth + 'px;' + 'height:' + clientHeight + 'px');
			}

			else if(index == 2){
				$('.s2').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
				$('.s2').find('.number').fadeIn(1000);
				$('.s2').find('h1').delay(100).fadeIn(1000);
				if(window.screen.width > 780 || window.screen.width == 780) {
					$('.s2').find('p').animate({left:'10%'}, 1000).animate({left:'2%'}, 500); //当小于480时
				}else if(window.screen.width > 479 && window.screen.width < 780){
					$('.s2').find('p').animate({left:'20%'}, 1000).animate({left:'13%'}, 500); //当小于480时
				}else{
					$('.s2').find('p').animate({left:'20%'}, 1000).animate({left:'40px'}, 500); //当小于480时
				}
				var ctx = document.getElementById("canvas2").getContext("2d");
					window.myLine = new Chart(ctx).Line(canvas2, {
						responsive: true,
						scaleShowGridLines : false,
						tooltipTemplate: "<%if (label){%><%=label%>年: <%}%><%= value %>万行",
						bezierCurve : false,
						scaleLineColor : "rgba(255,255,255,.5)",
						scaleFontColor : "rgba(255,255,255,.5)",
				});

			}

			else if(index == 3){
				$('.s3').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
				$('.s3').find('.number').fadeIn(1000);
				$('.s3').find('h1').delay(100).fadeIn(1000);
				$('.s3').find('.progress').fadeIn(1000);
				if(window.screen.width > 780 || window.screen.width == 780){
					$('.s3').find('p').fadeIn(1000);
				}else{
					$('.s3').find('p').animate({bottom:'18%'}, 1000).animate({bottom:'12%'}, 1000);
				}
				
			}

			else if(index == 4){
				$('.s4').find('p').animate({bottom:'17%'}, 1000).animate({bottom:'15%'}, 1000);
				$('.s4').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
				$('.s4').find('.number').fadeIn(1000);
				$('.s4').find('.title').delay(100).fadeIn(1000);
				$('.s4 .coder').find('i').fadeIn(1000);
			}

			else if(index == 5){
				$('.s5').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
				$('.s5').find('.number').fadeIn(1000);
				$('.s5').find('h1').delay(100).fadeIn(1000);
				$('.s5').find('.lable').delay(100).fadeIn(1000);
				$('.s5').find('p').animate({left:'10%'}, 1000).animate({left:'5%'}, 1000);
				if(window.screen.width > 500 && window.screen < 780 ){
					var barvaluespacing = 10;
				}else if(window.screen.width > 780 || window.screen.width == 780 ){
					var barvaluespacing = 20;
				}else{
					var barvaluespacing = 5;
				}
				var ctx = document.getElementById("canvas5").getContext("2d");
				window.myBarChart = new Chart(ctx).Bar(canvas5, {
					responsive: true,
					scaleShowGridLines:false,
					tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> 万行",
					scaleLineColor : "rgba(255,255,255,.5)",
					scaleFontColor : "rgba(255,255,255,.5)",
					barValueSpacing : barvaluespacing,
				});
			}
			else if(index == 6){
				$('.s6').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
				$('.s6').find('.number').fadeIn(1000);
				$('.s6').find('h1').delay(100).fadeIn(1000);
				$('.s6').find('.lable').delay(100).fadeIn(1000);
				$('.s6').find('p').animate({right:'10%'}, 1000);
				var ctx = document.getElementById("canvas6").getContext("2d");
				window.myDoughnut = new Chart(ctx).Doughnut(canvas6, {
					responsive: true,
					animationSteps : 50,
					tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> 万",
				});
			}
			else if(index ==7){
				$('.s7').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);
				$('.s7').find('p').fadeIn(1000);
				//$('.s7 p').typewriter(200); 
			}
			else if(index == 8){
				$('.s8').find('form').fadeIn(1000);
				$('.s8').find('.down').fadeIn(1).animate({bottom:'5%'}, 1000);

			}
		},

		onLeave: function(index, direction){
			if(index == 1){
				$('.s1').find('h1').fadeOut(2000);
				$('.s1').find('p').fadeOut(1000);
				$('.s1').find('h3').fadeOut(1000);
				$('.s1').find('.down').animate({bottom:'0'}, 300).fadeOut(1).animate({bottom:'-50%'}, 1);
			}
			else if(index ==2){
				$('.s2').find('.down').animate({bottom:'0'}, 300).fadeOut(1).animate({bottom:'-50%'}, 1);
				$('.s2').find('.number').fadeOut(1000);
				$('.s2').find('h1').fadeOut(1000);
				$('.s2').find('p').animate({left:'-120%'}, 1000);
			}
			else if(index == 3){
				$('.s3').find('.down').animate({bottom:'0'}, 300).fadeOut(1).animate({bottom:'-50%'}, 1);
				$('.s3').find('.number').fadeOut(1000);
				$('.s3').find('h1').fadeOut(1000);
				$('.s3').find('.progress').fadeOut(1000);
				
				if(window.screen.width > 780 || window.screen.width == 780){
					$('.s3').find('p').fadeOut(1000);
				}else{
					$('.s3').find('p').animate({bottom:'-20%'}, 800);
				}
			}
			else if(index == 4){
				$('.s4').find('.down').animate({bottom:'0'}, 300).fadeOut(1).animate({bottom:'-50%'}, 1);
				$('.s4').find('.number').fadeOut(1000);
				$('.s4').find('p').animate({bottom:'-100%'}, 2500);
				$('.s4').find('.title').fadeOut(1000);
				$('.s4 .coder').find('i').fadeOut(1000);
			}
			else if(index == 5){
				$('.s5').find('.down').animate({bottom:'0'}, 300).fadeOut(1).animate({bottom:'-50%'}, 1);
				$('.s5').find('.number').fadeOut(1000);
				$('.s5').find('h1').fadeOut(1000);	
				$('.s5').find('p').animate({left:'-50%'}, 1000);
				$('.s5').find('.lable').fadeOut(1000);
			}
			else if(index ==6){
				$('.s6').find('.down').animate({bottom:'0'}, 300).fadeOut(1).animate({bottom:'-50%'}, 1);
				$('.s6').find('.number').fadeOut(1000);
				$('.s6').find('h1').fadeOut(1000);
				$('.s6').find('p').animate({right:'-50%'}, 1000);
				$('.s6').find('.lable').fadeOut(1000);
			}
			else if(index ==7){
				$('.s7').find('.down').animate({bottom:'0'}, 300).fadeOut(1).animate({bottom:'-50%'}, 1);
				$('.s7').find('p').fadeOut(1000);
			}
			else if(index == 8){
				$('.s8').find('form').fadeOut(1000);
			}
		}

	});
	


});

function textdown(e) {
    textevent = e;
    if (textevent.keyCode == 8) {
        return;
    }
    if (document.getElementById('say').value.length >= 255) {
        alert("大俠，手下留情，此處限字300")
        if (!document.all) {
            textevent.preventDefault();
        } else {
            textevent.returnValue = false;
        }
    }
}
function textup() {
    var s = document.getElementById('say').value;
    //判斷ID为text的文本區域字數是否超過100個 
    if (s.length > 255) {
        document.getElementById('say').value = s.substring(0, 255);
    }
}

(function(a) {

a.fn.typewriter = function(speed) {

this.each(function() {

var d = a(this),

c = d.html(),

b = 0;

d.html("");

var e = setInterval(function() {

var f = c.substr(b, 1);

if (f == "<") {

b = c.indexOf(">", b) + 1

} else {

b++

}

d.html(c.substring(0, b) + (b & 1 ? "_": ""));

if (b >= c.length) {

clearInterval(e)

}

},

speed)

});

return this;

}

})(jQuery);
