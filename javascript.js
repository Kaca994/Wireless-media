var $search = $('#searchPic');
var $line = $('#line');
var $inputPlace = $(".inputPlace");

$search.click(function(){
   
    var html = '';
    if($(this).attr('src') === 'img/searchSmall.png'){
        $(this).attr('src', 'img/searchSmallGreen.png');
        html = "<input type='text' class='inputStyle'>";
        $("div.inputPlace").html(html);
        $("div.inputPlace").css('display','none').delay(200).fadeIn(600);           
    }
    
    else {
       fadeOutSearch();
    }
    
});

function fadeOutSearch(){ 
            $search.attr('src', 'img/searchSmall.png');
            $("div.inputPlace").delay(100).fadeOut(500);
}

//$search.click(function () {
//
//    var searchBar = ' ';
//    if ( $(this).attr('src') === 'img/searchSmall.png')
//        {
//            fadeOutSearch();
//        }
//    
//      else {
//            
//            $(this).attr('src','img/searchSmallGreen.png');
//            $hamburger.attr('src','img/small/hamburgerSmall.png');
//            searchBar +="<input type='text'>";
//            $menuAndSearch.html(searchBar);
//            $menuAndSearch.css('display','none').delay(200).fadeIn(600);
//            $line.fadeIn(500);
//        }
//     
//});
//
//
//$hamburger.click( function(){
//    
//    var hamburgerList = ' ';
//    if( $(this).attr('src') === 'img/small/hamburgerSmallGreen.png')
//        {
//            $(this).attr('src','img/small/hamburgerSmall.png');
//            $menuAndSearch.delay(100).fadeOut(400);
//            $line.fadeIn(500);
//        }
//    
//    else{
//        $(this).attr('src','img/small/hamburgerSmallGreen.png');
//        fadeOutSearch();
//        
//            hamburgerList += " <ul class='menuUl'>";
//            hamburgerList +="<li class='lightGreen'>HOME</li>";
//            hamburgerList +="<li class='Green'>ABOUT US</li>";
//            hamburgerList +="<li class='lightBlue'>OUR WORK</li>";
//            hamburgerList +="<li class='Blue'>CONTACT</li>";
//            hamburgerList +="</ul>";
//         
//            $line.fadeOut();
//        
//         $menuAndSearch.html(hamburgerList);
//        
//         $menuAndSearch.css('display','none').fadeIn(600);
//        
//    }
//     
//});
//
//
//
