/**
 * Created by Administrator on 2016/8/30.
 */
var json={
    navNode:$(".nav"),
    aboutMain:$(".aboutMain"),
    partner:$(".partner"),
    top:$(".Totop"),
    slideTop:$(".slideContact i"),
    proNav:$(".pro_nav"),
    aboutAnodes:$(".aboutUs_nav a"),
    isotopeNode:$(".pro_animate ul"),
    navFun:function(){//导航动作
        var navLiNodes=this.navNode.children(".hasNav");//nav下的带下拉菜单的li
        navLiNodes.mouseenter( function(){//移入
            var littleNavDiv=$(this).children(".little_nav_div");//找到小菜单节点
            var littleNav=$(littleNavDiv).children(".little_nav");//找到小菜单节点
            var littleNavHeight=littleNav.outerHeight();//得到小菜单的高度
            littleNavDiv.stop().animate({height:littleNavHeight+"px"},500,function(){
            });
        }).mouseleave(function(){
            var littleNavDiv=$(this).children(".little_nav_div");//找到小菜单节点
            var littleNav=$(littleNavDiv).children(".little_nav");//找到小菜单节点
            var littleNavHeight=littleNav.outerHeight();//得到小菜单的高度
            littleNavDiv.stop().animate({height:0+"px"},500,function(){
            });
        })
    },
    flashFun:function(){
        var flash;
        var flashBox=$(".flash");
        var flashLeft=$(".flash_left");
        var flashRight=$(".flash_right");
        var liNodes=$(".flash li");
        var spanNodes=$(".flash_footer span");
        spanNodes.mouseenter(function(){
            if($(this).is(".current")){
                return false;
            }
            var oldPos=$(".current").index();
            $(this).addClass("current").siblings(".current").removeClass("current");
            liNodes.eq(oldPos).stop(false,true).fadeOut();
            liNodes.eq($(this).index()).stop(false,true).fadeIn();
        });
        flashLeft.click(function(){
            var oldPos=$(".current").index();
            var newPos=oldPos==0?liNodes.length-1:oldPos-1;
            liNodes.eq(oldPos).stop(false,true).fadeOut();
            liNodes.eq(newPos).stop(false,true).fadeIn();
            spanNodes.eq(newPos).addClass("current").siblings(".current").removeClass("current");
        });
        flashRight.click(function(){
            var oldPos=$(".current").index();
            var newPos=oldPos==liNodes.length-1?0:oldPos+1;
            liNodes.eq(oldPos).stop(false,true).fadeOut();
            liNodes.eq(newPos).stop(false,true).fadeIn();
            spanNodes.eq(newPos).addClass("current").siblings(".current").removeClass("current");
        });
        flash=setInterval(function(){
            flashRight.click();
        },2000);
        flashBox.hover(function(){//移入
            flashLeft.show();
            flashRight.show();
            clearInterval(flash);
        },function(){//移出
            flashLeft.hide();
            flashRight.hide();
            flash=setInterval(function(){
                flashRight.click();
            },2000);
        })
    },
    animateFun:function(){
        var dlNodes=$(".animationMain dl");//dl
        var dtNodes=$(".animationMain dt");//dt
        var ddNodes=$(".animationMain dd");//dd
        var ddWidth=ddNodes.width();
        dtNodes.mouseenter(function(){
            var curPos=$(this).parent().index();//找到当前dl的位置
            $(this).children().addClass("animate_"+curPos).removeClass("animate-"+curPos);//将当前a标签样式改变
            for(var i=0;i<dlNodes.length;i++){
                $(this).parent().siblings().find(".animate_"+i).removeClass("animate_"+i).addClass("animate-"+i);
            }
            $(this).siblings().stop().animate({width:ddWidth+"px"},400,"linear");//将dd展开
            $(this).parent().siblings().children("dd").stop().animate({"width":0,"overflow":"hidden"},400,"linear");
        })
    },
    AboutUsFun:function(){
        var ddNode=$(this.aboutMain).children("dd").first();
        var imgNode=$(ddNode).find("img");
        var emNode=$(ddNode).children("em");
        ddNode.mouseenter(function(){
            imgNode.stop().animate({"width":"638px","height":"378px","margin-left":"-73.5px","margin-top":"-43.5px"},500)
            emNode.stop().animate({"top":"0"},500)
        }).mouseleave(function(){
            imgNode.stop().animate({"width":"491px","height":"291px","margin-left":"0","margin-top":"0"},500)
            emNode.stop().animate({"top":"291px"},500)
        })
    },
    AboutUsTxtFun:function(){
        var ulNode=$(this.aboutMain).children(".about_txt").children("ul");
        var liNodes=$(ulNode).children();
        var liWidth=liNodes.outerWidth();
        var AboutBtn_left=$(this.aboutMain).children(".AboutBtn").children().first();
        var AboutBtn_right=$(this.aboutMain).children(".AboutBtn").children().last();
        AboutBtn_left.click(function(){
            var marginLeft=parseFloat(ulNode.css("margin-left"));//得到当前ul外边距
            marginLeft=marginLeft<=-liWidth*(liNodes.length-1)?0:marginLeft-liWidth;
            ulNode.css("margin-left",marginLeft+"px");
        });
        AboutBtn_right.click(function(){
            var marginLeft=parseFloat(ulNode.css("margin-left"));//得到当前ul外边距
            marginLeft=marginLeft>=0?-liWidth*(liNodes.length-1):marginLeft+liWidth;
            ulNode.css("margin-left",marginLeft+"px");
        })
    },
    PartnerFun:function(){
        var ulNode=$(this.partner).find("ul");//找到ul
        var leftBtn=$(this.partner).find(".Btn_left");
        var rightBtn=$(this.partner).find(".Btn_right");
        leftBtn.click(function(){
            var liNodes=$(ulNode).children();//找到li
            var liWidth=$(liNodes).outerWidth();//一个li的宽度，包括边框
            $(liNodes).first().stop(false,true).animate({"margin-left":-liWidth+"px"},300,function(){
                $(ulNode).append($(this).css("margin-left","0"));
            })
        });
        rightBtn.click(function(){
            var liWidth= $(ulNode).children().outerWidth();//一个li的宽度，包括边框
            $(ulNode).children().last().css("margin-left",-liWidth+"px");
            $(ulNode).prepend($(ulNode).children().last());
            $(ulNode).children().first().animate({"margin-left":"0px"},300)
        })


    },
    displayFun:function(){
        var top=this.top;
        window.onscroll=function(){
            var scrollTop=document.documentElement.scrollTop+document.body.scrollTop;
            if(scrollTop<1025){
                top.css("display","none");
            }else{
                top.css("display","block");
            }

        }
    },
    toTopFun:function(){
        $(document.body).animate({"scrollTop":0},500);
        $(document.documentElement.scrollTop).animate({"scrollTop":0},500);
    },
    clickToTop:function(){
        var bottomTOP=this.top;
        var slideTOP=this.slideTop;
        var fun=this.toTopFun;
        bottomTOP.click(function(){
            fun();
        });
        slideTOP.click(function(){
            fun();
        })
    },
    clickAboutAnodes:function(){
        this.aboutAnodes.click(function(){
            $(this).addClass("cur_a").siblings(".cur_a").removeClass("cur_a");
        })
    },
    isotope:function(){
        var mainNode=this.isotopeNode;
        $(mainNode).isotope({
            itemSelector: '.pro_animate li'
        });
        $('.pro_nav li').click(function(){
            $(this).addClass('pro_current').siblings('li').removeClass('pro_current');
            var dataValue=$(this).attr('data');
            mainNode.isotope({
                itemSelector: '.pro_animate li',
                filter:dataValue
            });
        });
    },
    init:function(){
        this.navFun();
        this.flashFun();
        this.animateFun();
        this.AboutUsFun();
        this.AboutUsTxtFun();
        this.PartnerFun();
        this.displayFun();
        this.clickToTop();
        this.clickAboutAnodes();
        this.isotope();
    }
}
json.init();
