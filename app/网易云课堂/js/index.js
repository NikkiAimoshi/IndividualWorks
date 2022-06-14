
(function(){
	var lbt = document.getElementsByClassName('pe-text')[0];
	var alltext = lbt.children;
	var timer = null;
	var timer2 = null;
	var lftpe = document.getElementsByClassName('pe')[0];
	var lftdpe = document.getElementsByClassName('luenfantupe')[0].children;
	var colors = ['#f15c5a','#f7ac37','#f64b3a','#2b409b','#f9a916','#292f40','#0096ee']
	var num = 0;
	var teacherlft = document.getElementsByClassName('teacherlft')[0];
	var a={
		//选项卡
		Choose:function(){
			var close = document.getElementsByClassName('xxk-xx')[0];
			var outplease = document.getElementsByClassName('xingQu-out')[0];
			var xxkbody = document.getElementsByClassName('xingQuXuanXianKa')[0];
			var open = document.getElementsByClassName('xingqua')[0];
			var menu = document.getElementsByClassName('menu-ul')[0].children;
			var choose = document.getElementsByClassName('menuContent-list');
			var chooseWord = choose[0].children;
			var num = 0;
			var chooseBottom = document.getElementsByClassName('choose')[0];
			var conture = document.getElementsByClassName('conture')[0];
			conture.onclick =close.onclick=function(){
				outplease.style.transition='0.5s';
				xxkbody.style.transition='0.5s';
				setTimeout(function(){
					xxkbody.style.opacity='0';
					outplease.style.opacity='0';
				} ,0)
				setTimeout(function(){
					outplease.style.display='none';
					xxkbody.style.display='none';
				} ,500)
			};
			open.onclick=function(){
					xxkbody.style.opacity='1';
					outplease.style.opacity='0.5';
					outplease.style.display='block';
					xxkbody.style.display='block';
			}
			for(var i=0; i<menu.length;i++){
				menu[i].index=i;
				menu[i].onmouseover=function(){
					for(var i=0; i<menu.length;i++){
						menu[i].classList.remove('active')
						choose[i].classList.remove('show')
					}
					this.classList.add('active')
					choose[this.index].classList.add('show')
					var chooseWord = choose[this.index].children;
					chooseA(chooseWord);
				}
				
			}
			chooseA(chooseWord);
			function chooseA(chooseWord){
				var chooseBottom = document.getElementsByClassName('choose')[0];
				for(var i=0;i<chooseWord.length;i++){
					chooseWord[i].onclick=function(){
						if(this.className!='click'){
							num+=1;
							this.classList.add('click')
							var div = document.createElement('div')
							var span = document.createElement('span')
							var img = document.createElement('img')
							img.src='img/choose-xx.png';
							img.className='chooseNode'
							span.innerHTML= this.innerHTML;
							chooseBottom.appendChild(div);
							chooseBottom.children[num].appendChild(span);
							chooseBottom.children[num].appendChild(img);
							chooseBottom.children[0].innerHTML='以选'+num+'个:'
							xxkbody.style.marginTop=-xxkbody.offsetHeight/2+'px'
							
						}
						else{
							this.classList.remove('click')
							
							for(var j=1;j<=num;j++){
								if(chooseBottom.children[j].children[0].innerHTML==this.innerHTML){
									chooseBottom.children[j].remove();
									num=num-1;
									chooseBottom.children[0].innerHTML='以选'+num+'个:'
									xxkbody.style.marginTop=-xxkbody.offsetHeight/2+'px'
								}
							}
							
						}
						
					}
				}
			chooseBottom.onclick=function(){
				if(event.target.nodeName=='IMG'){
					chooseBottom.removeChild(event.target.parentNode)
					for(var i=0;i<9;i++){
						for(var j=0;j<choose[i].children.length;j++){
							if(choose[i].children[j].innerHTML==event.target.parentNode.children[0].innerHTML){
								choose[i].children[j].classList.remove('click')
							}
						}
					}
					num-=1;
					chooseBottom.children[0].innerHTML='以选'+num+'个:'
					xxkbody.style.marginTop=-xxkbody.offsetHeight/2+'px'
				}
			}
			
				
			}
			
			
		},
		
		//下拉
		Scroll:function(){
			var topCopy =document.getElementsByClassName('topCopy');
			var topNode =document.getElementsByClassName('topNode');
			var xuanfu = document.getElementsByClassName('xuanfu');
			var xuanfuShow = document.getElementsByClassName('xuanfu-show3');
			var timer = null;
			onscroll=function(){
				if(document.documentElement.scrollTop==0){
					xuanfu[0].style.display='none'
				}
				else{xuanfu[0].style.display='block'}
				if(document.documentElement.scrollTop>415){
					topCopy[0].style.display='block';
					topNode[0].style.position='fixed';
				}
				else{
					topCopy[0].style.display='none';
					topNode[0].style.position='relative';
				}
			}
			xuanfuShow[0].onclick=function(){
				timer = setInterval(function(){
					if(document.documentElement.scrollTop==0){
					clearInterval(timer);
					return;
					}
					document.documentElement.scrollTop-=150;	
				},0)
			}
		},
		
		//触摸guanzhu显示
		guanzhu:function(){
			var searchGuanzhu =  document.getElementsByClassName('search-guanzhu');
			var GuanZhu = document.getElementsByClassName('guanZhu');
			var timer = null;
		searchGuanzhu[0].onmouseover=function(){
			clearTimeout(timer);
			GuanZhu[0].style.display='block'
			GuanZhu[0].style.transform= 'scale(0.9)'
			GuanZhu[0].style.transition='0.1s'
			setTimeout(function(){
				GuanZhu[0].style.transform= 'scale(1)'
			},0)
			}
		searchGuanzhu[0].onmouseleave=function(){
			clearTimeout(timer);
			timer =setTimeout(function(){
				GuanZhu[0].style.display='none'
			},200)}
		},
		//触摸download显示
		download:function(){
			var searchDownload =  document.getElementsByClassName('search-download');
			var searchDownloadShow = document.getElementsByClassName('search-download-show');
			var timer = null;
			searchDownload[0].onmouseover=function(){
				clearTimeout(timer);
				searchDownloadShow[0].style.display='block'
				searchDownloadShow[0].style.transform= 'scale(0.9)'
				searchDownloadShow[0].style.transition='0.1s'
				setTimeout(function(){
					searchDownloadShow[0].style.transform= 'scale(1)'
				},0)
				}
			searchDownload[0].onmouseleave=function(){
				clearTimeout(timer);
				timer =setTimeout(function(){
					searchDownloadShow[0].style.display='none'
				},200)}
		},
		//触摸我的学习显示
		ShowMyStudy:function(){
			var MyStudy = document.getElementsByClassName('MyStudy');
			var SearchMyStudy = document.getElementsByClassName('SearchMyStudy');
			var searchUserMenu = document.getElementsByClassName('usermenu');
			var timer = null;
			SearchMyStudy[0].onmouseover=function(){
				clearTimeout(timer);
				searchUserMenu[0].style.display='none'
				MyStudy[0].style.display='block'
				MyStudy[0].style.transform= 'scale(0.9)'
				MyStudy[0].style.transition='0.1s'
				setTimeout(function(){
					MyStudy[0].style.transform= 'scale(1)'
				},0)
				}
			SearchMyStudy[0].onmouseleave=function(){
				clearTimeout(timer);
				timer =setTimeout(function(){
					MyStudy[0].style.display='none'
				},300)}
			MyStudy[0].onmouseover=function(){
				clearTimeout(timer);
				MyStudy[0].style.display='block'
				}
			MyStudy[0].onmouseleave=function(){
				clearTimeout(timer);
				timer =setTimeout(function(){
					MyStudy[0].style.display='none'
				},100)}
				
		},
		//触摸图片显示
		userTauch:function(){
		var searchUserPe = document.getElementsByClassName('search-userpe');
		var searchUserMenu = document.getElementsByClassName('usermenu');
		var MyStudy = document.getElementsByClassName('MyStudy');
		var timer = null;
		searchUserPe[0].onmouseover=function(){
			clearTimeout(timer);
			searchUserMenu[0].style.display='block'
			searchUserMenu[0].style.transform= 'scale(0.9)'
			searchUserMenu[0].style.transition='0.1s'
			MyStudy[0].style.display='none'
			setTimeout(function(){
				searchUserMenu[0].style.transform= 'scale(1)'
			},0)
			}
		searchUserPe[0].onmouseleave=function(){
			clearTimeout(timer);
			timer =setTimeout(function(){
				searchUserMenu[0].style.display='none'
			},300)}
		searchUserMenu[0].onmouseover=function(){
			clearTimeout(timer);
			searchUserMenu[0].style.display='block'
			}
		searchUserMenu[0].onmouseleave=function(){
			clearTimeout(timer);
			timer =setTimeout(function(){
				searchUserMenu[0].style.display='none'
			},100)}
			
		},
		
		zhibo:function(){
			
			 teacherleftjt.onclick = function(){
				 teacherleftjt.style.display='none';
				 teacherrightjt.style.display='block';
				 teacherlft.style.marginLeft='0px';
			 }
			 teacherrightjt.onclick = function(){
			 	teacherleftjt.style.display='block';
			 	 teacherrightjt.style.display='none';
				 teacherlft.style.marginLeft='-378px';
			 }
			
		},
		
		
		
		s: function(){
			for(var i=0;i<7;i++){
				alltext[i].index = i;
				alltext[i].onmouseover=function(){
				clearTimeout(timer);
				clearInterval(timer2);
				timer = setTimeout(function() {
					eturn(this);
					zdon();	
					}.bind(this), 100);
				}
				};
			zdon();	
		},
	//抢购选项卡
	xuanxiangka:function(){
		var qianGo = document.getElementsByClassName('qiango')[0].children;
		var qiangoPeOut =document.getElementsByClassName('qiangope-out');
		for(var i=0;i<qianGo.length;i++){
			qianGo[i].index=i;
			qianGo[i].onmouseover=function(){
				for(var i=0;i<qianGo.length;i++){
					qiangoPeOut[0].children[i].classList.remove('show');
					qianGo[i].classList.remove('active');
				}
				console.log(this.index)
				qiangoPeOut[0].children[this.index].classList.add('show');
				this.classList.add('active');
			}
		}
	}
		
		
	};
	
	function eturn(athis){
		num=athis.index;
		for(i=0;i<7;i++){
		lftdpe[i].style.opacity='0';
		lftdpe[i].style.display='none';	 
		if(alltext[i].className.indexOf('fastmenu')!=-1){
			alltext[i].className='fastmenu';
		}
		else alltext[i].className='';
		}
		lftdpe[athis.index].style.display='block';
		setTimeout(function() {
			lftdpe[athis.index].style.opacity='1'
			}.bind(this), 0);
		lftpe.style.background=colors[athis.index];
		athis.className+=' back';
	};
	
	function zdon(){
		timer2 = setInterval(function(){
			num++;
			if(num==7){num=0;}
			for(i=0;i<7;i++){
			lftdpe[i].style.opacity='0';
			lftdpe[i].style.display='none';	 
			if(alltext[i].className.indexOf('fastmenu')!=-1){
				alltext[i].className='fastmenu';
			}
			else alltext[i].className='';
			}
			lftdpe[num].style.display='block';
			setTimeout(function() {
				lftdpe[num].style.opacity='1'
				}, 0);
			lftpe.style.background=colors[num];
			alltext[num].className+=' back';
		} ,2000)
	};
//控制menu的下拉menu的长宽
	var menu1 = document.getElementsByClassName('xiailamenu1');
	for(var menudi=0;menudi<menu1.length;menudi++){
	var menu1d = menu1[menudi].children;
	var menu1dlength = menu1d[0].children;
	menu1[menudi].style.height=menu1dlength.length*45+"px"
	var max=[];
	max[menudi]=0;
	for(var q=0;q<menu1dlength.length;q++){
	var mune1dtext = menu1dlength[q].children;
	if(max[menudi]<mune1dtext[0].text.length){
		max[menudi]=mune1dtext[0].text.length;}
		}
	if(max[menudi]==0){
		menu1[menudi].style.width=0;
	}
	else menu1[menudi].style.width=max[menudi]*14+20+"px"
	
	}
//控制menu的display
	var menuda = document.getElementsByClassName('menuda');
	for(var menudq=0;menudq<menuda.length;menudq++){
	menuda[menudq].onmouseover=function(){
		for(var menudq=0;menudq<8;menudq++){
			menu1[menudq].style.display='none'
		}
		this.parentNode.children[2].style.display='block'
		}
	 }
	menu.onmouseleave=function(){
		for(var menudq=0;menudq<8;menudq++){
			menu1[menudq].style.display='none'
		}
	};
//search menu
	var searchmenu = document.getElementsByClassName('searchmenu');
	var searchleftxiailaul = document.getElementById('searchleftxiailaul');
	var searchxiaomenu = searchleftxiailaul.children;
	var searchleft = document.getElementsByClassName('searchleft');
	var searchflag = 0;
	var searchleftxiailaula = document.getElementsByClassName('searchleftxiailaula')
	var searchinput = document.getElementsByClassName('searchinputz');
	var searchmenuul = document.getElementsByClassName('searchmenuul');
	
	for(var i=0;i<searchxiaomenu.length;i++){
		searchxiaomenu[i].index=i;
		searchxiaomenu[i].onclick=function(){
			event.cancelBubble=true;
			for(var a=0;a<2;a++)
			{
				searchmenu[a].style.display='none'
			}
			searchflag = this.index;
			searchmenushow();
			searchleft[0].children[0].innerHTML=searchleftxiailaul.children[searchflag].innerHTML;
			searchleftxiailaul.parentNode.style.display='none';
			if(searchflag==0){
				searchinput[0].placeholder='零基础学Javescript';
			}
			else {searchinput[0].placeholder='搜索网校';}
		}
	}
//searchmenushow的显示函数
	function searchmenushow(){
		searchmenu[searchflag].style.transition='0.5s';
		searchmenu[searchflag].style.display='block';
		searchmenu[searchflag].style.opacity='0';
		setTimeout(function(){searchmenu[searchflag].style.opacity='1';},0)
	}
//searchmenushow的消失
	window.onclick=function(){
		searchmenu[searchflag].style.display='none';
	}
	for(var i=0;i<searchmenuul[searchflag].children.length;i++){
		for(var j=0;j<2;j++){
			searchmenuul[j].children[i].index=i;
			searchmenuul[j].children[i].onclick=function(){
			if(this.index==0){event.cancelBubble=true;}
			}
		}
	}
	
//对search下拉的控制
	searchinput[0].onclick =function(){
		event.cancelBubble=true;
		searchmenushow();
	}  
	searchleft[0].children[0].onmouseenter=function(){
		searchleft[0].children[0].classList.add('active');
		searchleftxiailaul.parentNode.style.display='block';
		searchmenu[searchflag].style.display='none';
		for(var i=0;i<2;i++){
			searchleftxiailaula[i].children[0].classList.remove('active1');
		};
			searchleftxiailaula[searchflag].children[0].classList.add('active1');
		
		};
	searchleft[0].children[0].onmouseleave=function(){
		searchleft[0].children[0].classList.remove('active');
		
		};
	searchleft[0].onmouseleave=function(){
		searchleftxiailaul.parentNode.style.display='none';
	};

	
	
	a.s();
	a.zhibo();
	a.userTauch();
	a.ShowMyStudy();
	a.download();
	a.guanzhu();
	a.xuanxiangka();
	a.Scroll();
	a.Choose();
}())
