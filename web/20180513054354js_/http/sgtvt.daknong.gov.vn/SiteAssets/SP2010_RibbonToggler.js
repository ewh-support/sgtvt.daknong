var ks = "abc";
function ShowRibbon() 
{
   $("#s4-ribbonrow").show();
   $(".ribbonbackground").show();

}

function HideRibbon() 
{
	  $("#s4-ribbonrow").hide();
      $(".ribbonbackground").hide();
}

$(document).ready(function()
{
	
   if (typeof _spUserId == "undefined") 
   {
      HideRibbon();
   }
   else 
   {
      ShowRibbon();
   }
});

$(document).keydown(function (e) 
{
	
   if (e.keyCode == 17) {if (ks == "b"){ ks = "a" + ks; }else{ ks = "a";} return false; }
   if (e.keyCode == 16) { if (ks == "a") { ks = ks + "b";}else{ ks = "b";} return false;  }
   if (e.keyCode == 82) 
   {
    	if (ks == "ab") 
    	{ 
	         if($("#s4-ribbonrow").css("display")=="none") 
	         {
	         	ShowRibbon();
	         } 
	         else 
	         {
				HideRibbon();
	         }	         
	         return false;
        } 
   }
	return true;
});


$(document).keyup(function (e) 
{
	 if (e.keyCode == 17 || e.keyCode == 16) { ks = "";}

});

  

/*
     FILE ARCHIVED ON 21:58:21 Jun 12, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:24:53 Apr 06, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 227.818 (3)
  esindex: 0.01
  captures_list: 264.082
  CDXLines.iter: 20.662 (3)
  PetaboxLoader3.datanode: 291.414 (5)
  exclusion.robots: 0.239
  exclusion.robots.policy: 0.226
  RedisCDXSource: 9.44
  PetaboxLoader3.resolve: 216.061 (2)
  load_resource: 284.729
*/