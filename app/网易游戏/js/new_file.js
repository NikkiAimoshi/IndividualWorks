(function () {
	var topNavigationLI = document.getElementsByClassName('banaLandLeftUL')[0].children;
	var g = document.getElementsByClassName('banaLeftLine');
	var banaLandLeftSJX = document.getElementsByClassName('banaLandLeftSJX');
	var banaLandLeftPE = document.getElementsByClassName('banaLandLeftPE');
	
	var timer = null;
	 var a = {
		 $:function(ele){
			return document.querySelectorAll(ele); 
		 },
		 banaLeftTouch:function(){
			 var banaLandMiddlePE = this.$('.banaLandModdle img');
			for(var i=0;i<topNavigationLI.length;i++){
				topNavigationLI[i].index = i;
				topNavigationLI[i].onmouseover=function(){     			 //鼠标划入
					for(var i=0;i<topNavigationLI.length;i++){ 			 //清除active
						topNavigationLI[i].classList.remove('active')
					};
					this.classList.add('active')               			 //加上active
					clearTimeout(timer);
					this.style.transition='0.5s'		//背景颜色延时
					g[this.index].style.transition='1s' //红线延时
					timer = setTimeout(function(){		//无用定时器
						this.style.background='#080909'
						g[this.index].style.opacity='1'
					}.bind(this),1)
					banaLandLeftSJX[this.index].style.display='block';
				};
				topNavigationLI[i].onmouseleave=function(){    			 //鼠标离开
					this.classList.remove('active')
					g[this.index].style.opacity='0';
					if(this.className.indexOf('onclick')==-1){
						banaLandLeftSJX[this.index].style.display='none';
						this.style.background='#282b2d'
					}
					
				}
				
				topNavigationLI[i].onclick=function(){         			 //鼠标点击
					for(var i=0;i<topNavigationLI.length;i++){ 			 //清除onclick
						topNavigationLI[i].classList.remove('onclick')
						topNavigationLI[i].style.background='#282b2d'
						banaLandLeftSJX[i].style.display='none';
						banaLandMiddlePE[i].classList.remove('active');
						
						
					};
					this.classList.add('onclick');             			  //加上onclick
					this.style.background='#080909';
					banaLandLeftSJX[this.index].style.display='block';
					banaLandMiddlePE[this.index].classList.add('active');
					/*setTimeout(function(){
						for(var i=0;i<topNavigationLI.length;i++){
							if (banaLandMiddlePE[i].className.indexOf('active')==-1){banaLandMiddlePE[i].style.display='none';}
						}
					},500)*/
				};
			}
		 },
		 
		 banachange:function(){
			 var banaChance = this.$('.topNavigationMenu')[0];
			 var banaChancePE = this.$('.topNavigationMenuPE')[0];
			 var banaChanceText = this.$('span')[0];
			 var banatopMenuShow = this.$('.topMenuShow')[0];
			 var Click = this.$('.topMenuShowBottom div img')[0];
			 var Click1 = this.$('.topNavigationMenuClick')[0];
			Click1.onclick=function(){
				 banaChance.classList.toggle('active');
				 banaChancePE.classList.toggle('active');
				 banaChanceText.classList.toggle('active');
				 banatopMenuShow.classList.toggle('active');
			 };
			 Click.onclick=function(){
			 	 banaChance.classList.toggle('active');
			 	 banaChancePE.classList.toggle('active');
			 	 banaChanceText.classList.toggle('active');
			 	 banatopMenuShow.classList.toggle('active');
			  };
		 },
		 banaBodyPEChange:function(){
			var allPE =  this.$('.lili');
			var allSpot = this.$('.banaBodyPE ol li');
			var LeftTeach = this.$('.baneJTLeft')[0];
			var RightTeach = this.$('.baneJTRight')[0];
			var nowNum = 0;
			var timer = null;
			var bannerArr=[
				{
					"bg":"img/b44514e7-2e31-4567-8e75-2b9ea9583e4e.jpeg",
					"name":"《零号人物》",
					"text":"2V4手游对抗抢险"
				},
				{
					"bg":"img/bb351359-e561-4e5b-9041-96f42a6fb75d.jpeg",
					"name":"漫威超级英雄",
					"text":"灭霸卷土重来"
				},
				{
					"bg":"img/bca3d7d2-79f8-4ba1-b624-740f15d55718.jpeg",
					"name":"2022校园招聘",
					"text":"校招全球进行中"
				},
				{
					"bg":"img/fb2c2ca9-1c42-46a5-a3a0-538d2058a387.jpeg",
					"name":"2022校园招聘",
					"text":"校招全球进行中"
				},
				{
					"bg":"img/b44514e7-2e31-4567-8e75-2b9ea9583e4e.jpeg",
					"name":"2022校园招聘",
					"text":"校招全球进行中"
				},
			];
			var bannerLeftShowDiv = this.$('.bannerLeftShowDiv')[0];
			var bannerLeftShowSP = this.$('.bannerLeftShowSP')[0];
			var bannerLeftShowSP1 = this.$('.bannerLeftShowSP1')[0];
			var bannerRightShowDiv = this.$('.bannerRightShowDiv')[0];
			var bannerRightShowSP = this.$('.bannerRightShowSP')[0];
			var bannerRightShowSP1 = this.$('.bannerRightShowSP1')[0];
			for(var i=0;i<allPE.length;i++){
				allPE[i].index = i;
			};
			
			for(var i=0;i<allSpot.length;i++){				//Spot 点击
				allSpot[i].index = i;
				allSpot[i].onclick=function(){
					clearInterval(timer);
					nowNum=this.index;
					zdon();
					opChange();
					changeAddPE(this.index);
					changeAddSpot(this.index);
					opChangeBack(this.index);
				};
			};
			LeftTeach.onclick=function(){                  //banaPE左点击
				clearInterval(timer);
				zdon();
				opChange();
				nowNum--;
				if(nowNum<0)nowNum=4;
				changeAddPE(nowNum);
				changeAddSpot(nowNum);
				opChangeBack(nowNum);
				bannerShow(nowNum);
			};
			RightTeach.onclick=function(){                  //banaPE右点击
				clearInterval(timer);
				zdon();
				opChange();
				nowNum++;
				if(nowNum>4)nowNum=0;
				changeAddPE(nowNum);
				changeAddSpot(nowNum);
				opChangeBack(nowNum);
				bannerShow(nowNum);
			};
			LeftTeach.onmouseover=function(){
				bannerShow(nowNum);
			};
			RightTeach.onmouseover=function(){
				bannerShow(nowNum);
			};
			function zdon(){
				timer = setInterval(function(){	
					opChange();
					nowNum++;
					if(nowNum>4)nowNum=0;
					changeAddPE(nowNum);
					changeAddSpot(nowNum);
					opChangeBack(nowNum);
					bannerShow(nowNum);
				},3000)
			
			};
			function opChangeBack(ele){                           //透明度变回
				setTimeout(function() {
					allPE[ele].style.opacity='1';
					}, 0);
			};
			function opChange(){
				for(var i=0;i<allPE.length;i++){
					allPE[i].style.opacity='0';
					allPE[i].classList.remove('active');
					allSpot[i].classList.remove('change');
				};
			};
			function changeAddPE(asd){
				allPE[asd].classList.add('active');
			};
			function changeAddSpot(asd){
				allSpot[asd].classList.add('change');
			};
			function bannerShow(num){
				var i=0,j=0;
				i=num-1;
				j=num+1;
				if(num==0)i=4;
				if(num==4)j=0;
				bannerLeftShowDiv.style.backgroundImage='url('+bannerArr[i].bg+')';
				bannerLeftShowSP.innerHTML=bannerArr[i].name;
				bannerLeftShowSP1.innerHTML=bannerArr[i].text;
				bannerRightShowDiv.style.backgroundImage='url('+bannerArr[j].bg+')';
				bannerRightShowSP.innerHTML=bannerArr[j].name;
				bannerRightShowSP1.innerHTML=bannerArr[j].text;
			};
			zdon();
			bannerShow(nowNum);
		 },
	 };
	 a.banaLeftTouch();
	 a.banachange();
	 a.banaBodyPEChange();
	 var b={
		 $:function(ele){
		 			return document.querySelectorAll(ele); 
		 },
		 guanfansequn:function(){
			 var Theul = this.$('.middle ul')[0];
			 Theul.innerHTML+=Theul.innerHTML;
			 var allGFli = this.$('.middle ul li ol li');
			 allGFli[15].style.marginLeft='0px';
			 var left = this.$('.JTLeft')[0];
			 var right = this.$('.JTRight')[0];
			 var num=0;
			 var boolen =true;
			 Theul.style.width=810*Theul.children.length+25+'px';
			 Theul.onmouseenter=function(){clearInterval(timer)};
			 Theul.onmouseleave=function(){ZD()};
			 function removeA(){for(var i=0;i<allGFli.length;i++){
						 allGFli[i].classList.remove('active')
					 };};
			 for(var i=0;i<allGFli.length;i++){
				 allGFli[i].onmouseenter=function(){
					 removeA();
					this.classList.add('active')
				 };
			 };
			 left.onclick=function(){
				 if(!boolen)return;
				 boolen=false;
				num++;
				if(num>Theul.children.length/2){
					Theul.style.left=num*-810+'px';
					setTimeout(function(){
						Theul.style.transition='0s';
						setTimeout(function(){
							Theul.style.left='0px';
							num=0;
							setTimeout(function(){
								Theul.style.transition='1s';
							},80)
						},10)
					},1010)
				}
				else Theul.style.left=num*-810+'px';
				setTimeout(function(){boolen=true},1100);
				removeA();
				clearInterval(timer);
				ZD();
			 };
			 right.onclick=function(){
				 
				 if(!boolen)return;
				 boolen=false;
			 	num--;
			 	if(num<0){
						Theul.style.transition='0s';
							num=3;
							Theul.style.left='-2430px';
							setTimeout(function(){
								Theul.style.transition='1s';
							},10);
							setTimeout(function(){
								Theul.style.left=num*-810+'px';
							},11);
				}
			 	else Theul.style.left=num*-810+'px';
				setTimeout(function(){boolen=true},1100);
				removeA();
				clearInterval(timer);
				ZD();
			 };
			 function ZD(){timer = setInterval(left.onclick,4000);};
			 ZD();
		 },
	 };
	 b.guanfansequn();
	 var c={							//热门游戏
		 $:function(ele){
		 			return document.querySelectorAll(ele); 
		 },
		 changePE:function(){          //热门游戏  换一批
			 var button = this.$('.LMYXTitle span')[0];
			 var allLi = this.$('.LMYXTitleUL li');
			 var index = 0;
			 var bl = false;
			 var changeArr = [
				 {
					"soliderewm":"img/games_ewn.png",
					"solidertext":"游戏类型：童话MMO手游",
					"img":"img/14556651-311f-4e04-891c-b88dcc840798.jpeg",
					"tittle":"Hello Kity",
					"text":"KITY   KITY"
				 },
				 {
				 	"solider-ewm":"img/games_ewn.png",
				 	"solider-text":"游戏类型：童话MMO手游",
				 	"img":"img/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg",
				 	"tittle":"漫威超级战争",
				 	"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
					"solider-ewm":"img/games_ewn.png",
					"solider-text":"游戏类型：童话MMO手游",
					"img":"img/yx1.png",
					"tittle":"漫威超级战争",
					"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
				 	"solider-ewm":"img/games_ewn.png",
				 	"solider-text":"游戏类型：童话MMO手游",
				 	"img":"img/yx1.png",
				 	"tittle":"漫威超级战争",
				 	"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
					"solider-ewm":"img/games_ewn.png",
					"solider-text":"游戏类型：童话MMO手游",
					"img":"img/yx1.png",
					"tittle":"漫威超级战争",
					"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
				 	"solider-ewm":"img/games_ewn.png",
				 	"solider-text":"游戏类型：童话MMO手游",
				 	"img":"img/yx1.png",
				 	"tittle":"漫威超级战争",
				 	"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {																						//第2组
					"solider-ewm":"img/games_ewn.png",
					"solider-text":"游戏类型：童话MMO手游",
					"img":"img/yx1.png",
				 					"tittle":"漫威超级战争",
					"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
				 	"solider-ewm":"img/games_ewn.png",
				 	"solider-text":"游戏类型：童话MMO手游",
				 	"img":"img/yx1.png",
				 	"tittle":"Hello Kity",
				 	"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
				 	"solider-ewm":"img/games_ewn.png",
				 	"solider-text":"游戏类型：童话MMO手游",
				 	"img":"img/yx1.png",
				 	"tittle":"漫威超级战争",
				 	"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
				 	"solider-ewm":"img/games_ewn.png",
				 	"solider-text":"游戏类型：童话MMO手游",
				 	"img":"img/yx1.png",
				 	"tittle":"漫威超级战争",
				 	"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
				 	"solider-ewm":"img/games_ewn.png",
				 	"solider-text":"游戏类型：童话MMO手游",
				 	"img":"img/yx1.png",
				 	"tittle":"漫威超级战争",
				 	"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 },
				 {
				 	"solider-ewm":"img/games_ewn.png",
				 	"solider-text":"游戏类型：童话MMO手游",
				 	"img":"img/67ecf0ee-2ab0-433b-9eb8-ae1f826e8a59.jpeg",
				 	"tittle":"漫威超级战争",
				 	"text":"超能反派[灭霸]将于9月2日维护后获得全新能力：在对局中集齐无限宝石后，可"
				 }
			 ];
			button.onclick=function(){
				if(bl)return;
				bl=true;
				setTimeout(function(){bl=false;},1050)
				for(var i=0;i<allLi.length;i++){
					(function(i){
						setTimeout(function(){
							allLi[i].classList.add('scale')
							setTimeout(function(){
								if(index==changeArr.length)index=0;
								allLi[i].children[1].src=changeArr[index].img;
								allLi[i].children[2].innerHTML=changeArr[index].tittle;
								allLi[i].children[3].innerHTML=changeArr[index].text;
								index++;
								allLi[i].classList.remove('scale');
							},500)
						},i*50)
					})(i)
				};
			};
		 },
	 };
	 c.changePE();
	 var d ={
		 $:function(ele){
		 			return document.querySelectorAll(ele); 
		 },
		 getLong:function(){
			 var button = this.$('.treeGameBottom .box .div1')[0];
			 var gameTree = this.$('.treeGame')[0];
			 button.onmousedown=function(){return false};
			 button.onclick=function(){
				if(this.innerHTML=='查看更多'){
					this.innerHTML='收起';
					gameTree.classList.add('active');
				}
				else {
					this.innerHTML='查看更多';
					gameTree.classList.remove('active');
				};
			 };
		 },
	 };
	 d.getLong();
}())