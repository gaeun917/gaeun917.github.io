var transparentDemo = true;
var fixedTop = false;

// 0. preload
$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
});

//1. blur
$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
});
//2. tooltip
$('[data-toggle="tooltip"]').tooltip();

// 3. confetti
// function okpt(t){"debug"!=window.location.href.split("/")[4]&&"fullembedgrid"!=window.location.href.split("/")[4]&&"fullcpgrid"!=window.location.href.split("/")[4]&&($("body").append('<link rel="stylesheet" href="https://i.koya.io/pentitle.css" /><div id="external"> <div class="title"> <div class="pentitle">'+t+'</div><div class="info"> <div class="penstats"><i class="fa fa-eye" aria-hidden="true"></i><span class="views">-</span></div><div class="penstats"><i class="fa fa-heart" aria-hidden="true"></i><span class="hearts">-</span></div><div class="penstats"><i class="fa fa-comment" aria-hidden="true"></i><span class="comments">-</span></div></div></div><brkr></brkr> <a class="button" href="http://codepen.io/OfficialAntarctica" target="_blank"><img class="face" src="https://i.koya.io/koya.svg" alt="" style="height:40px;"/></a></div>'),getPenInfo(t,"OfficialAntarctica"),setInterval(function(){getPenInfo(t,"OfficialAntarctica")},2500))}function getPenInfo(t,s){$.getJSON("http://cpv2api.com/search/pens?q="+t+"&limit="+s,function(s){s.success&&$.each(s.data,function(e,a){a.title==t&&(kpt_views_=s.data[0].views.split("").reverse().join("").match(/.{1,3}/g).join("'").split("").reverse().join(""),kpt_views!=kpt_views_&&($(".penstats .views").text(kpt_views_),""!=kpt_views&&$(".penstats .views").addClass("new"),kpt_views=kpt_views_),kpt_hearts_=s.data[0].loves.split("").reverse().join("").match(/.{1,3}/g).join("'").split("").reverse().join(""),kpt_hearts!=kpt_hearts_&&($(".penstats .hearts").text(kpt_hearts_),""!=kpt_hearts&&$(".penstats .hearts").addClass("new"),kpt_hearts=kpt_hearts_),kpt_comments_=s.data[0].comments.split("").reverse().join("").match(/.{1,3}/g).join("'").split("").reverse().join(""),kpt_comments!=kpt_comments_&&($(".penstats .comments").text(kpt_comments_),""!=kpt_comments&&$(".penstats .comments").addClass("new"),kpt_comments=kpt_comments_),setTimeout(function(){$(".penstats .views, .penstats .hearts, .penstats .comments").removeClass("new")},1500))})})}var kpt_views="",kpt_views_="",kpt_hearts="",kpt_hearts_="",kpt_comments="",kpt_comments_="";
// function initparticles() {
//     $.each($(".particletext.confetti"), function(){
//         var confetticount = ($(this).width()/50)*10;
//         for(var i = 0; i <= confetticount; i++) {
//             $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
//         }
//     });
// }
//
// jQuery.rnd = function(m,n) {
//     m = parseInt(m);
//     n = parseInt(n);
//     return Math.floor( Math.random() * (n - m + 1) ) + m;
// };
// initparticles();

//reveal
window.sr = ScrollReveal();

if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
        $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }
    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 1000
    });

} else {
    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 1000
    });
    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 1000
    });
}
sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 1000
});
sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 1000
});
