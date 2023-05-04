<?php

//header_v4.php
ini_set("display_errors",0);
header("X-UA-Compatible: IE=Edge");
$atf_origin = isset($_SERVER['HTTP_ORIGIN'])? $_SERVER['HTTP_ORIGIN'] : '';  
  
$atf_allow_origin = array(  
   'http://www.arttoframe.com',  
    'https://www.arttoframe.com' ,  
    'http://cdn.arttoframe.com' ,  
    'https://cdn.arttoframe.com',  
    'http://cdn1.arttoframe.com' ,  
    'https://cdn1.arttoframe.com',  
    'http://cdn2.arttoframe.com' ,  
    'https://cdn2.arttoframe.com',  
    'http://cdn3.arttoframe.com' ,  
    'https://cdn3.arttoframe.com',  
    'http://cdn4.arttoframe.com' ,  
    'https://cdn4.arttoframe.com',  
    'http://cdn5.arttoframe.com' ,  
    'https://cdn5.arttoframe.com',  
    'https://www.adoramapix.com',
    'http://www.adoramapix.com'
);  
  
if(in_array($atf_origin, $atf_allow_origin)){  
   header('Access-Control-Allow-Origin:'.$atf_origin);  
   header('Access-Control-Allow-Methods:OPTIONS, GET, POST');  
   header('Access-Control-Allow-Headers:x-requested-with,content-type');  
}    

require_once('lib/global.php');
include_once("lib/dataset.php");
include_once("lib/modules.search_test.php");
include_once("lib/modules.cart.php");
include_once("lib/modules.nav.php");
include_once("lib/modules.tools.php");
include_once("lib/modules.menus.php");
include_once("mobile_detect.php");
$noti_id=$_REQUEST['id'];
if($_SESSION['loggedin']!=1){
include("onetap/one_tap_sign.php");
}
//echo $_SERVER['SCRIPT_NAME'];
	include_once('common_canonicals.php');
/*}else{
	function generateCanonicals(){
		
		$serverScriptName = $_SERVER['SCRIPT_NAME'];
		$return = '';
		global $notification_page;
		if($serverScriptName=='/canvas_wraps/mobile_index.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/canvas_wraps/';
			$notification_page = 'canvas';
		}elseif($serverScriptName=='/acrylic_prints/mobile_index.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/acrylic_prints/';
			$notification_page = 'acrylic';
		}
		####################################################
		
		elseif($serverScriptName=='/canvas_landing_mobile.php' || $serverScriptName=='/canvas_landing.php' || $serverScriptName=='/canvas_landing_mobile_sa_30102017.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/canvas_wraps/';
			$notification_page = 'canvas';
		}
		elseif($serverScriptName=='/acrylic_landing_mobile.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/acrylic_prints/';
			$notification_page = 'acrylic';
		}
		
		
		####################################################
		elseif($serverScriptName=='/canvas_acrylic/landing.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/canvas_wraps/';
			if($_GET["type"] == 'acrylic')
			{			
				$notification_page = 'acrylic';
			}else
			{			
				$notification_page = 'canvas';
			}
		}elseif($serverScriptName=='/canvas_acrylic/canvas_wraps_v4.php'){
			$return .= 'http://'.$_SERVER['HTTP_HOST'].'/canvas_wraps/';
			if($_GET["app"] == 'acrylic')
			{			
				$notification_page = 'acrylic';
			}else
			{			
				$notification_page = 'canvas';
			}
		}elseif($serverScriptName=='/canvas_acrylic/index.php'){
			$return .= 'http://'.$_SERVER['HTTP_HOST'].'/canvas_wraps/';
			if($_GET["type"] == 'acrylic')
			{			
				$notification_page = 'acrylic';
			}else
			{			
				$notification_page = 'canvas';
			}
		}elseif($serverScriptName=='/canvas_wraps/index.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/canvas_wraps/';		
			$notification_page = 'canvas';
		}elseif($serverScriptName=='/acrylic_prints/index.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/acrylic_prints/';
			$notification_page = 'acrylic';
		}elseif($serverScriptName=='/contact_us.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/contact_us';
			$notification_page = 'contact_us';
		}elseif($serverScriptName=='/about_us.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/about_us';
			$notification_page = 'about_us';
		}elseif($serverScriptName=='/terms_of_use.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/terms_of_use';
			$notification_page = 'terms_of_use';
		}elseif($serverScriptName=='/privacy_policy.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/privacy_policy';
			$notification_page = 'privacy_policy';
		}elseif($serverScriptName=='/sitemap.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/sitemap';
			$notification_page = 'sitemap';
		}elseif($serverScriptName=='/sitemap_sku_items.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].$serverScriptName;
			$notification_page = 'sitemap_sku_items';
		}elseif($serverScriptName=='/pictureframe.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].$serverScriptName;
			$notification_page = 'pictureframe';
		}elseif($serverScriptName=='/faq.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].$serverScriptName;
			$notification_page = 'faq';
		}elseif($serverScriptName=='/copyright_notice.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/copyright_notice';
			$notification_page = 'copyright_notice';
		}elseif($serverScriptName=='/account.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].$serverScriptName;
			$notification_page = 'account';
		}elseif($serverScriptName=='/my_orders.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/my_orders';
			$notification_page = 'my_orders';
		}elseif($serverScriptName=='/my_images.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/my_images';
			$notification_page = 'my_images';
		}elseif($serverScriptName=='/login_mobile.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/login';		
			$notification_page = 'login';	
		}elseif($serverScriptName=='/cart.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/cart';
			$notification_page = 'cart';
		}elseif($serverScriptName=='/coupon_view.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].$serverScriptName;
			$notification_page = 'coupon_view';
		}elseif($serverScriptName=='/support.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/support';
			$notification_page = 'support';
		}elseif($serverScriptName=='/business.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/business';
			$notification_page = 'business';
		}elseif($serverScriptName=='/feedback.php'){
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/feedback';
			$notification_page = 'feedback';
		}elseif($serverScriptName=='/custom_framing.php'){
			$notification_page = 'custom_framing';
			if(isset($_GET['pinpix']) && $_GET['pinpix']==1){
				$return .= 'https://'.$_SERVER['HTTP_HOST'].$serverScriptName.'?pinpix=1';
			}else{
				$return .= 'https://'.$_SERVER['HTTP_HOST'].'/custom_framing/';
			}
		}elseif($serverScriptName=='/pictureframe_item.php'){
			$notification_page = 'product';
			if($_GET['diploma']== 1){
						$return .= "https://".$_SERVER[HTTP_HOST]."/diploma-frame";
			}else if($_GET['type'] == 'collage_dm'){
				$return .= "https://".$_SERVER[HTTP_HOST]."/product/collage/".$_GET['mat_id'];
			}
		}elseif($serverScriptName=='/pictureframe_search.php'){
			    $notification_page = 'search';
			if($_GET['pf'] == 'collage_dm' || $_GET['pf'] == 'collage_sm'){
				if(isset($_GET['mat_opening'] ) && $_GET['mat_opening']  != '' ){
					$return .= "https://".$_SERVER[HTTP_HOST]."/".$_GET['mat_opening'] ."-Openings-Collage-Picture-Frame";
				}else{
					$return .= "https://".$_SERVER[HTTP_HOST]."/search/collage-double-mat";
				}
			}elseif($_GET['pf'] == 'single_dm' || $_GET['pf'] == 'single_sm'){
				$return .= "https://".$_SERVER[HTTP_HOST]."/search/single-photo-double-mat";
			}elseif($_GET['pf'] == 'no_mat'){
				//print_r($_GET['fsize']);
				
				$return .= "https://".$_SERVER[HTTP_HOST]."/".$_GET['fsize']."_picture_frames";
			}elseif($_GET['pf'] == 'diploma'){
				$return .= "https://".$_SERVER[HTTP_HOST]."/search/diploma";
			}elseif($_GET['pf'] == 'oval'){
				$return .= "https://".$_SERVER[HTTP_HOST]."/search/oval";
			}elseif($_GET['pf'] == 'ornate'){
				$return .= "https://".$_SERVER[HTTP_HOST]."/search/ornate";
			}else{
				
				$return .= "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"   ;
			}
		}elseif($serverScriptName=='/custom_framing/landing_cf.php'){
	
			$notification_page = 'custom_framing';
				$return .= 'https://'.$_SERVER['HTTP_HOST'].'/custom_framing/';
		
		}	elseif($serverScriptName == '/diploma_landing_mobile.php' || $serverScriptName == '/diploma_landing.php' ){
		//echo $serverScriptName; exit;
			$return .= 'https://'.$_SERVER['HTTP_HOST'].'/diploma-frame';
			$notification_page = 'diploma landing';
		
		}else{
			if($serverScriptName=='/index.php') {
				$notification_page = 'home';
			}
			$return = 'https://www.arttoframe.com/';
		}
		return $return;
	}
}*/
$serverScriptName = $_SERVER['SCRIPT_NAME'];
//echo $serverScriptName;
//exit;
if($serverScriptName == '/acrylic_floater_product.php')
{
		$template_page_title = "Acrylic Floating Frame | Frameless frame";
		$template_page_meta_description = "Floating Picture Frames in multiple sizes";
		$template_page_meta_keyword = "Acrylic Floating Frames";	
}
if($serverScriptName == '/shadow_box_landing.php')
{
		$template_page_title = "Custom Made Shadow Box Frames | Baby Memory Boxes | Keepsake Box";
		$template_page_meta_description = "Custom Made Shadow Boxes, made with deep frames and a choice of over 40 different background colors. Create yours now at ArtToFrames.com";
		$template_page_meta_keyword = "Shadowboxes, Shadowbox, shadow box, Keepsake Box, Baby Memory Box";	
}
if($serverScriptName == '/pinpix_landing_mobile.php')
{
		$template_page_title = "Custom Bulletin Boards | Decorative Memo Boards | Pin boards for all occasions - ArtToFrame";
		$template_page_meta_description = "Custom Made Bulletin Boards made to order. These decorative Pin Boards can be used with our designs or upload your own for a truly custom Memo board to cherish from ArtToFrames.com";
		$template_page_meta_keyword = "Decorative Bulletin Boards, Pin Boards, Memo Boards, PinPIx, Bulletin Boards";	
}

if($serverScriptName == '/canvas_wraps/mobile_index.php')
{
	  $template_page_title = "Canvas Wraps | Canvas Prints | Canvas Gallery Wraps - ArtToFrame";
		$template_page_meta_description = "Canvas Prints and Canvas Gallery Wraps show your product in a Professional Modern Look. Buy now Your Canvas Wrap Prints and be amazed at ArtToFrame.com Quality Prints";
		$template_page_meta_keyword = "canvas photo prints, alphabet stencils, custom frames online, picture frame collage, personalized frames, collage picture frames, frame sizes, picture frame, white picture frames, poster frames";	
}
 if($serverScriptName == '/custom_framing/landing_letterart.php'){
	
			$template_page_title = "Letter Art and Alphabet Photography Picture Frames | ArtToFrames";
			$template_page_meta_description = "Preserve all your life's important moments with custom frames online with Art To Frame's great collection of online frames. Call us today at 718-788-6200.";
			$template_page_meta_keyword = "Picture frames, Custom Picture Frames, Shadow box Frames, Home Decor";	
 }
if($serverScriptName == '/canvas_landing_mobile.php' || $serverScriptName == '/canvas_landing_mobile_sa_30102017.php' || $serverScriptName == '/canvas_landing.php')
{
			//$template_page_title = "Canvas Wraps | Canvas Prints | Canvas Gallery Wraps";
			//$template_page_meta_description = "Canvas Prints and Canvas Gallery Wraps show your product in a Professional Modern Look. Buy now Your Canvas Wrap Prints and be amazed at ArtToFrame.com Quality Prints";
			//$template_page_meta_keyword = "canvas photo prints, alphabet stencils, custom frames online, picture frame collage, personalized frames, collage picture frames, frame sizes, picture frame, white picture frames, poster frames";	
			
			$template_page_title = "Canvas Wraps | Canvas Prints | Photos to Canvas";
			$template_page_meta_description = "Canvas Prints and Canvas Wraps, starting at $18.00";
			$template_page_meta_keyword = "Canvas Prints, Prints On Canvas";	
}
if($serverScriptName == '/acrylic_landing_mobile.php' || $serverScriptName == '/acrylic-landing.php')
{
			$template_page_title = "Acrylic Prints | Prints On Acrylic";
			$template_page_meta_description = "Acrylic Prints and Prints on Acrylic show your product with a Modern Look and feel. Buy now Custom Acrylic Prints and be amazed at ArtToFrame.com Quality Prints";
			$template_page_meta_keyword = "Acrylic Prints, Prints On Acrylic";	
}

if($serverScriptName=='/pictureframe_item.php'){
	if($_GET['diploma']==1)
	{
			  $template_page_title = "Diploma Frames, Award Frames - ArtToFrames.com";
				$template_page_meta_description = "Diploma Frames, Award Frames made in Brooklyn.NY, Every Size available - ArtToFrames.com";
				$template_page_meta_keyword = "Diploma Frames, Award Frames";
	}
}
if($serverScriptName == '/glass_only.php')
{
	  $template_page_title = "Glass for Picture Frames - Acrylic - Tru-Vue - Museum";
		$template_page_meta_description = "Custom Cut Framers Quality Glass, Plexi Glass and Acrylic for all your picture frame needs. Call us today at 718-788-6200.";
		$template_page_meta_keyword = "Glass, Acrylic, Plexiglass, Plexi, Tru-Vue, Museum Glass";	
}
//if($serverScriptName == '/mat_only.php')
if($serverScriptName == '/custom_framing.php')
{
	if(isset($_GET['mat_only']) && $_GET['mat_only'] == 1)
	{
		$template_page_title = "8x10 Mat Only";
		$template_page_meta_description = "8x10 Mat Only";
		$template_page_meta_keyword = "8x10 Mat Only";	
	}
}


//if $detectMobile true then mobile else others
 
$detectMobile = detectdeviceAction('mobile'); //function of file mobile_detect.php it reurns true if mobile
?>
 <?php 
if($return_test_user == true) {   
	} else { ?>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
<?php } ?>
<?php
function hexatorgb($hex, $isString='') {
   $hex = str_replace("#", "", $hex);

   if(strlen($hex) == 3) {
      $r = hexdec(substr($hex,0,1).substr($hex,0,1));
      $g = hexdec(substr($hex,1,1).substr($hex,1,1));
      $b = hexdec(substr($hex,2,1).substr($hex,2,1));
   } else {
      $r = hexdec(substr($hex,0,2));
      $g = hexdec(substr($hex,2,2));
      $b = hexdec(substr($hex,4,2));
   }
   if($isString!=''){
   	$rgb = $r.', '.$g.', '.$b;
   }else{
	$rgb = array($r, $g, $b);
   }
   //return implode(",", $rgb); // returns the rgb values separated by commas
   return $rgb; // returns an array with the rgb values
}
$objmenu = new menus;

//$version = '1.3.5';

$s = new search_test;
$nav = new nav;
$tools = new tools;

$data1 = new dataset;
$data1->db_connect();
$cart = new cart();

$base_url = ($_SERVER["HTTPS"] ? "https://": "http://"	).$_SERVER['SERVER_NAME']."/";

  //Store offer coupon data in session.
  if(isset($_REQUEST['offer_coupon']) && !empty($_REQUEST['offer_coupon'])){ 
    $offer_coupon_URL = (isset($_REQUEST['offer_coupon']) && !empty($_REQUEST['offer_coupon']) ? $_REQUEST['offer_coupon'] : false);
    $_SESSION['atf_offer_coupon']['offer_coupon'] = $offer_coupon_URL;
    
    if(isset($_SESSION['atf_offer_coupon']['offer_coupon']) && !empty($_SESSION['atf_offer_coupon']['offer_coupon'])) {
      $_SESSION['atf_offer_coupon']['data'] = getOfferCouponData($offer_coupon_URL);     
    }
  }
  
  function getOfferCouponData($offer_coupon_url)
  {
		global $pdo_db1;
    $sql = "SELECT * FROM tbl_offer_coupon WHERE URL LIKE '%".$offer_coupon_url."%' LIMIT 1";
    $rsult = $pdo_db1->query($sql);
    $data = '';
    if($pdo_db1->pdo_num_rows($rsult))
    {
    $data = $rsult;		  			
	 	//Fetch Personalized Framing Offer.
	 	$personalizeResult =$pdo_db1->query("SELECT url FROM canvas_app_offer WHERE in_use = 1 AND id = ".$data['offer_personalized_id']);
	 	if($pdo_db1->pdo_num_rows($personalizeResult)){ $data['offer_personalized']  = $personalizeResult;	 }
	 		
	 	//Fetch Custom Framing Offer.
	 	$customResult =$pdo_db1->query("SELECT url FROM canvas_app_offer WHERE in_use = 1 AND id = ".$data['offer_custom_id']);
	 	if($pdo_db1->pdo_num_rows($customResult)){ $data['offer_custom']  = $customResult; }		
	 		
	 	//Fetch Canvas Wraps Offer.
	 	$canvasResult =$pdo_db1->query("SELECT url FROM canvas_app_offer WHERE in_use = 1 AND id = ".$data['offer_canvas_id']);
	 	if($pdo_db1->pdo_num_rows($canvasResult)){ $data['offer_canvas']  = $canvasResult; }
	 
	 	//Fetch Acrylic Prints Offer.
	 	$acrylicResult =$pdo_db1->query("SELECT url FROM canvas_app_offer WHERE in_use = 1 AND id = ".$data['offer_acrylic_id']);
	 	if($pdo_db1->pdo_num_rows($acrylicResult)){ $data['offer_acrylic']  = $acrylicResult; }	
	 	
	 	//Fetch Window Cling Offer.
	 	$clingResult =$pdo_db1->query("SELECT url FROM canvas_app_offer WHERE id = ".$data['offer_cling_id']);
	 	if($pdo_db1->pdo_num_rows($clingResult)){ $data['offer_cling']  = $clingResult; }	
	 	
	 	//Fetch coupon code.
	 	$couponResult =$pdo_db1->query("SELECT * FROM tb_coupon WHERE status = 1 AND id_coupon = ".$data['coupon_id']);
	 	if($pdo_db1->pdo_num_rows($couponResult)){ $data['coupon']  = $couponResult; }
	 	
  	}else{
  		$data = false;
  	}
  	return $data;
  }
?>
<!DOCTYPE html>
<html lang="en">
<head> 
<!-- <meta name="HandheldFriendly" content="True" />
<meta name="MobileOptimized" content="330" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="cleartype" content="on" />
<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> -->
<!--meta http-equiv="Expires" content="30" /-->



<!-- Global site tag (gtag.js) - Google Analytics -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script type="text/javascript" src="https://www.arttoframe.com/inc/TimeCircles.js"></script>
           <link rel="stylesheet" href="https://www.arttoframe.com/inc/TimeCircles.css" />
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-41611333-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-41611333-1', { 'optimize_id': 'GTM-NLMPMGC'});
</script>


<?php echo @$webmaster_meta; ?>
<?php 
	// add SEO Bing Webmaster coder meta msvalidate.0
	// - ArtToFrame
	//canvas photo prints, alphabet stencils, custom frames online, picture frame collage, personalized frames, collage picture frames, frame sizes, picture frame, white picture frames, poster frames
?>
<!-- <meta name="msvalidate.01" content="310CB61B844ACA4E2F24CBE82992A3C8" /> -->
<link href="<?php echo generateCanonicals();?>" rel="canonical" />
<title><?php echo ($template_page_title!="" ? $template_page_title: "Online Custom Frames | Collage Picture Frames | Picture Frames"); ?> </title>
<?php /*
<meta name="description" content="<?php echo ($template_page_meta_description !="" ? $template_page_meta_description: "Preserve all your life's important moments with custom frames online with Art To Frame's great collection of online frames. Call us today at 718-788-6200."); ?>"  />
<meta name="keywords" content="<?php echo ($template_page_meta_keyword!="" ? $template_page_meta_keyword: "Picture frames, Custom Picture Frames, Shadow box Frames, Home Decor"); ?>"  />
 */ ?>

<link rel="shortcut icon" type="image/x-icon" href="https://cdn1.arttoframe.com/favicon.ico">
<style>
	#wo_online_arrow ,#wo_online{
		display:none !important;
	}
	#pallet-menu-parent{
		display:none;
		}
	.shop-now-notification {
    background: #ffc600;
    color: #024a94;
    font-size: 11px;
    padding: 3px 14px;
    border-radius: 3px;
    margin-left: 10px;
    display: block;
    width: 30%;
    margin: 0 auto;
    margin-top: 10px;
}
	.applied_couponcode{
		font-family: 'Product Sans',sans-serif !important;
	}
	.applied_coupon{
		font-family: 'Product Sans',sans-serif !important;
	}
	div#newOfferPopup_display .close {
    color: #fff !important;
    font-size: 31px;
    font-weight: normal;
    opacity: 1;
    font-family: 'product sans' !important;
    margin-top: -10px;
    background: none !important;
    position: relative;
    box-shadow: none !important;
    right: 0;
    top: 0;
}
.new-notification-text span {
    color: #ffcc00;
    font-family: 'Product Sans',Arial,sans!important;
    font-size: 12px;
}
.new-notification-text b{
	color:#FFF;
	font-weight:bold;
	}

</style>

<?php /*
<!-- Add additional services that you want to use -->
<script src="https://www.gstatic.com/firebasejs/3.5.3/firebase-app.js"></script>
<script src='https://www.gstatic.com/firebasejs/3.5.3/firebase-messaging.js'></script>			
<!-- <script src="https://www.arttoframe.com/custom_framing/firebase-app.js"></script>
<script src="https://www.arttoframe.com/custom_framing/firebase-messaging.js"></script> -->
<script src="https://www.arttoframe.com/custom_framing/firebase.js"></script>
<script type="text/javascript" src="https://www.arttoframe.com/custom_framing/app.js?version=123"></script>
*/
?>
<!-- <script  type="text/javascript">

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://www.arttoframe.com/service-worker.js')
    .then(function() {
          console.log('Service Worker Registered');
    });
}
</script>	 -->


<?php

if(isset($_app_js) && $_app_js){}else{ 
	$strFileName = basename($_SERVER['PHP_SELF']);
	?>
	
	<!-- <script type="text/javascript" src="<?php echo getCDNurl(6); ?>/jquery/jquery.1.7.1.min.js"></script>
	<script type="text/javascript" src="<?php echo getCDNurl(6); ?>/jquery/jquery-migrate-1.4.1.min.js"></script> -->
<?php } ?>
<?php 
if($return_test_user == true) {   
	} else { 
	/*include_once('header_gtm.php');*/
} ?>
<script type="text/javascript" async src="https://www.arttoframe.com/validate_login.js"></script>
<script type="text/javascript">
  $(function(){ 
  	$(".custom-gifts-redirect").click(function(){ window.location = '/gifts'; }); 
  	$(".letter-art-redirect").click(function(){ window.location = '/alphabetphoto.php?name=family&submit=submit'; }); 
  	$(".windowpix-redirect").click(function(){ window.location = '/window_cling/landing.php'; }); 
  	$(".pinpix-redirect").click(function(){ window.location = '/pinpix'; }); 
  	$(".custom-framing-redirect").click(function(){ window.location = '/custom_framing.php'; }); 
  	$(".notify_popup").click(function(){ 
			showNotificationPopup(); 
  	});
  });
  function showNotificationPopup()
  {
	  $('#responseMsg').hide(); 
		$('#email-notification-form-info').find("input[type=text],input[type=email],input[type=checkbox]").val("");

		$('#news').attr('checked', true);
		$('#coupons').attr('checked', true);
		$('.offer_popup_img').attr('src',$('.offer_img').attr('src'));
		$('#image_id').val($('#offer_id').val());
		$('.offer_popup_link').attr('href',$('#offer_url').val());

		$('#formBlock').show();
		$('.modal-footer').show();
		$.post("/header_notification_count.php?id="+$(this).attr("id") ,function(response){});
		//$('#myModalSignupSharesw').modal('show');
  }
  function email_notification_form()
	{ 
		if($('#google_link').val()=='' && $('#facebook_link').val()=='' && $('#twitter_link').val()=='' && $('#instagram_link').val()==''  ){
			alert('Please provide at least one social link so we can follow you...');
			return false;
		}
		//console.log($("#email-notification-form-info").serialize());
		var url_string = "email_note=email_note&"+$("#email-notification-form-info").serialize();
		$.post('/email_notification.php', url_string ,function(response){
			var response = $.parseJSON(response);
			if(response.status=='success')
			{		
			 $(".modal-footer").hide();
			 $("#formBlock").hide();
			 $("#responseMsg").html('Please check your email.<br/>Thank You....');
			 $("#responseMsg").show();
			}else {
				alert(response.message);
			}
		});
		return false;
	}
  
</script>


<?php /* <link href="<?php echo getCDNurl(5); ?>/css/search.css" rel="stylesheet" type="text/css" />*/ ?>

<link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
<!--link href='<?php echo getCDNurl(5); ?>/ext_css/font_google.css' rel='stylesheet' type='text/css'-->
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo getCDNurl(5); ?>/css_2014/menu-main.css?version=5.6" />
<link rel="stylesheet" href="<?php echo getCDNurl(5); ?>/css_2014/style.min.css?version=4.16" type="text/css" />
<link rel="stylesheet" href="<?php echo getCDNurl(5); ?>/css_2014/responsive.min.css?version=4.14" type="text/css" />
<link rel="stylesheet" type="text/css" href="<?php echo getCDNurl(5); ?>/css_2014/style_mobileview.css?version=4.219" />

<!--my.js code-->
<script type='text/javascript'>
	
	
		$(window).scroll(function(){
		 
		      scroll = $(window).scrollTop();
		
		  if (scroll >= 100) 
		  {
		  $('.navbar').addClass('fixed_header');
		   $('#notification-data').hide();
		  
		  	}
		  else 
		  	{
		  		$('.navbar').removeClass('fixed_header');
		  		$('#notification-data').show();
		  	}
		});
   	
	$(document).ready(function(){	
		$('.banner-header, .bullet-patent').css('opacity','1');
	$('.back-to-main-view').click(function(){
		console.log('in back-to-main-view');
		$('.main-panel-links, .aj_R-columnHeader').show();
		$('.more-sub-panel').hide();
		$('.hover-effect').removeClass('hover-effect');
	});
	$('.main-item').hover(function(){
		$('.main-top-active').removeClass('main-top-active');
		$('a',this).addClass('main-top-active');
		var id = $(this).attr('id');
		$('.sub-item').hide();
		$('#'+id+'-pallet').show();
		$('.active-main-menu').removeClass('active-main-menu');
		$(this).addClass('active-main-menu');
		$('.main-panel-links, .aj_R-columnHeader').show();
		$('.more-sub-panel').hide();
		$('.hover-effect').removeClass('hover-effect');
	});
	$('.sub-item').mouseleave(function(){ 
		$('.main-top-active').removeClass('main-top-active');
		var id = $(this).attr('id');
		$('.sub-item').hide();
		$('.active-main-menu').removeClass('active-main-menu');
	});
	$('.nav-parent-header').mouseleave(function(){ 
		$('.main-top-active').removeClass('main-top-active');
		$('.sub-item').hide();
		$('.active-main-menu').removeClass('active-main-menu');
	});
	
	$('#page_zazzleHeader_offCanvasLeftButton, #small-menu-overlay').click(function(){
		$('#page_zazzleHeader-offCanvasLeftContent, #small-menu-overlay').toggle();
		/* Style for Right side Menu */
	$('.collapse.navbar-collapse.navbar-ex1-collapse.secondary-nav-wrap').toggle();
	$('.cls-tooltip-container').attr('id', 'cls-tooltip-container');	
	});
	$('#page_zazzleHeader').width($('#top_sec').width());
	$('.site-nav-li a').click(function(){
		$(this).parent().children('ul').toggle(500);
	});
	menuResizer();
	$('.sub-menu-image').on('load',function(){
		menuResizer();
	});
	
	$('.more-link').click(function(){
		var this1 = $(this);
		setTimeout(function(){
			$('.main-panel-links, .aj_R-columnHeader').hide();
			var parent_id = $(this1).attr('data-parent-id');
			$('.class-'+parent_id).show();
			$('.more-sub-panel').show();
			$(this1).parent().prev().addClass('hover-effect');
			$('.more-sub-panel').html('<ul>'+$('.more-link-ul', this1).html()+'</ul>');
			
		}, 500);
	});
	resizeHeaderTri();
});
$(window).on('resize',function(){
	menuResizer();
	setTimeout(function(){
		resizeHeaderTri();
	},5);
}); 
$(document).on('load',function(){
		resizeHeaderTri();
});
function menuResizer(){
	var max_height = 0;
	$('.sub-item').height('');
	$('.sub-item').each(function(){
		if( $(this).outerHeight() > max_height ){
			var height1 = parseInt($(this).outerHeight());
			var paddingBottom = $(this).css('padding-bottom').split('px');
			height1 = height1 + (parseInt(paddingBottom));
			//var top1 = $(this).css('top').split('px');
			//height1 = height1 - (parseInt(top1));
			if( max_height < height1 ){
				max_height = height1;
			}
		}
	});
	$('.sub-item, .more-sub-panel').height(max_height);
}
function resizeHeaderTri(){
	$('.header-tri').css({
		'border-left' : $('.banner-header').outerHeight()+'px solid transparent',
    		'border-top' : $('.banner-header').outerHeight()+'px solid '+$('.header-tri').css('border-top-color')
	});
	$( ".root-header-tri" ).each(function( index ) {
		$(this).css({
			'border-right' : $(this).prev('h1').outerHeight()+'px solid transparent',
	    		'border-top' : $(this).prev('h1').outerHeight()+'px solid '+$(this).prev('h1').css('background-color')
		});
	});
	
}
function show_prev_view(){
	$('.main-panel-links, .aj_R-columnHeader').show();
	$('.more-sub-panel').hide();
	$('.hover-effect').removeClass('hover-effect');
}
</script>
<?php 
$serverScriptName = $_SERVER['SCRIPT_NAME'];
if($serverScriptName == '/pictureframe_search.php'){
?>
<style>
#notification-data{
		display:none !important;
}
</style>
<?php }	?>
<!— Track a specific Crazy Egg snapshot by name —>
<script type="text/javascript">
		<?php 
			$serverScriptName = $_SERVER['SCRIPT_NAME'];

			$CE_SNAPSHOT_NAME = "Header and drop down menu";
			if($serverScriptName == "/custom_framing.php") //Custom Framing
			{
				if($detectMobile)
				{
					if(isset($_GET['letterart']))
					{
						$CE_SNAPSHOT_NAME = "Custom Framing Letter Art Mobile App 2015";
					}else
					{
						$CE_SNAPSHOT_NAME = "Custom Framing Mobile App 2015";
					}
				}else
				{
					if(isset($_GET['letterart']))
					{
						$CE_SNAPSHOT_NAME = "Custom Framing Letter Art Main App 2015";
					}else
					{
						$CE_SNAPSHOT_NAME = "Custom Framing Main App 2015";
					}		
				}
			}
			
			if($serverScriptName == "/pictureframe_item.php") //Product page
			{
				$ceStrParam = "";
				if(isset($_GET["type"]) && $_GET["type"] == "no_mat"){
					$ceStrParam = '';
				}
				else if(strstr($_GET["mat_id"], '-', true) == 'custom')
				{
					//echo 'here'; exit;
					$ceStrParam = 'Custom ';
				}
				else{
					$ceStrParam = 'Collage ';
				}
				if($detectMobile)
				{
					$CE_SNAPSHOT_NAME = $ceStrParam."Product Page Mobile 2015";
				}else
				{
					$CE_SNAPSHOT_NAME = $ceStrParam."Product Page 2015".$paramProdPgCrazyEgg;					
				}
			}
			
			if($serverScriptName == "/pictureframe_search.php") //Search page
			{
				if(isset($_GET["pf"]) && $_GET["pf"] == "no_mat")
				{
					$CE_SNAPSHOT_NAME = "Search Page 2015";
				}else
				{
					$CE_SNAPSHOT_NAME = "Search Page with Mats 2015";					
				}
			}
			
			if($serverScriptName == "/index.php") //Home page
			{
				$CE_SNAPSHOT_NAME = "Home Page v2015";					
			}
			
			if($serverScriptName == "/frame_landing.php" || $serverScriptName == "/frame_landing_dev2.php") //Frame Landing
			{
				$CE_SNAPSHOT_NAME = "Landing Page";
				
				if(strlen(trim($display_tag_name)) > 0)
				{
					$CE_SNAPSHOT_NAME .= ' - ' . $display_tag_name;
				}
			}
		?>
		
    var CE_SNAPSHOT_NAME = "<?php echo $CE_SNAPSHOT_NAME; ?>";
</script>
<!— End of Crazy Egg snapshot by name —>
		<?php 
			$serverScriptName = $_SERVER['SCRIPT_NAME'];
	 ?>

</head>

<body id="index" class="home">
<?php include_once("footer_gtm.php");?>
	
<!-- Embedded WhosOn: Insert the script below at the point on your page where you want the Click To Chat link to appear -->

<!-- End of embedded WhosOn -->
<?php if(isset($MasterTmsUdo) && !empty($MasterTmsUdo)){ ?>
<script>
	var MasterTmsUdo = <?php echo json_encode($MasterTmsUdo); ?>;
</script>
<?php }  ?>
<?php 
if($return_test_user == true) {    
	}else { ?>
<script>/*DO NOT ALTER *** New Site*/(function(e){var t="1750",n=document,r,i,s={http:"http://cdn.mplxtms.com/s/MasterTMS.min.js",https:"https://secure-cdn.mplxtms.com/s/MasterTMS.min.js"},o=s[/\w+/.exec(window.location.protocol)[0]];i=n.createElement("script"),i.type="text/javascript",i.async=!0,i.src=o+"#"+t,r=n.getElementsByTagName("script")[0],r.parentNode.insertBefore(i,r),i.readyState?i.onreadystatechange=function(){if(i.readyState==="loaded"||i.readyState==="complete")i.onreadystatechange=null}:i.onload=function(){try{e()}catch(t){}}})(function(){});</script>
<?php }  //end if if($return_test_user == true) 
 
 
 if(!isset($_SESSION['hideNotification']))
	{
			include_once("lib/notification.php");
		  $notification = new Notification();
		   $notificationData = $notification->get_notifications(FALSE, 2);
		  if($notificationData)
		  {
		   	$collapseOpen = true; 
		   if($notification->get_notifications(TRUE, 2)) $collapseOpen = false;
?>  
		    <?php foreach($notificationData as $notification):
		    				$textColor ='';
		    				$style ='';
		    				$style=$notification['background_color'];
		            if($notification['is_multiline'] =='1')
		            {
		            	//$style="#F4F4F6 !important";
		            	$textColor = "text_class";
		            	$notification['is_multiline'] = 1;
		            }else
		            {
		            	//$style="#FE0041 !important";
		            	//$textColor = "color:#F2A7B2 !important";
		            	$textColor = "text_class";
		            	$notification['is_multiline'] = 0;
		            } 
		            /* if(isset($_GET['mutitype']) && $_GET['mutitype']=='1')
		            {
		            	//$style="#F4F4F6 !important";
		            	$notification['is_multiline'] = $_GET['mutitype'];
		            }else
		            {
		            	//$style="#FE0041 !important";
		            	$textColor = "text_class";
		            	$notification['is_multiline'] = 0;
		            }       
		              */ 
		                ?>
		      <?php if($notification['text_size'] !='' ){?>
           <style>
           	.notification-item{ padding:0;}
			.notification-item.notification-message p{text-shadow:none !important; line-height:1.1; padding:5px; padding-top:7px; margin-top:2px;text-align:center;font-weight:100 !important; font-family: <?php echo $notification['text_font_family'].' ';?>!important;  font-size:12px !important;color:<?php echo ' '.$notification['text_color'].' ';?>!important; }
           	
		 	.text_class {color:<?php echo ' '.$notification['text_color'].' '; ?> !important; font-size: <?php echo ' '.$notification['text_size'].'px '; ?> !important; font-family: ProductSans Regular;text-align: center ! important;  font-weight: bold; padding: 1px 45px 1px 1px;}
          	.text_class h1{color:<?php echo ' '.$notification['text_color'].' '; ?> !important; font-size: 16px;font-family: ProductSans Regular;text-align: center ! important; font-weight: bold;}  
          	.text_class h2{<?php echo $notification['top_heading'];?>}
			.text_class h2{background-color:<?php echo ' '.$notification['top_heading_bg_color'].' ';?>!important;color:<?php echo ' '.$notification['top_heading_text_color'].' ';?>!important; } 	
	         .text_class p{color:<?php echo ' '.$notification['text_color'].' '; ?> !important; font-size: <?php echo ' '.$notification['text_size'].'px '; ?> !important; text-align: center ! important;font-weight: bold;}
	          
	         .text_class span{color:<?php echo ' '.$notification['text_color'].' '; ?> !important; font-size: <?php echo ' '.$notification['text_size'].'px '; ?> !important; font-family: ProductSans Regular;text-align: center ! important;  font-weight: bold;}
          </style>
          <?php }  
          
          if( $notification_page == 'product' || $notification_page == 'canvas' ||  $notification_page == 'acrylic'){
          	  $mtop = '';
          } elseif($serverScriptName == '/pinpix_product.php' || $serverScriptName == '/custom_framing/landing_cf.php' ||$serverScriptName == '/custom_framing.php' ||  $serverScriptName == '/pictureframe_search.php' || $serverScriptName == '/mat_only.php' || $serverScriptName == '/acrylic-landing.php'  || $serverScriptName == '/glass_only.php' || $serverScriptName == '/acrylic_floater_landing.php' || $serverScriptName == '/canvas_wraps/mobile_index.php'  || $serverScriptName == '/mats_sample.php' || $serverScriptName == '/index_mobile.php' ){
		      	  $mtop = 'margin-top:-3px !important;';
		      }else{
		     		  $mtop = 'margin-top:38px !important;';
		    	}
		    	
		      
          $note_pages_array = explode(",",$notification['show_on_page']);
    
          if(!in_array('all', $note_pages_array) && in_array($notification_page, $note_pages_array)):
          ?>

  <div id="notification-data" style="width:100%; cursor: pointer; <?php echo ' '.$mtop.' '; ?>  margin-bottom:-38px; background:#F4F4F6">
				<div id="notification-list" style="display:block; border:none !important;width:100%; min-height: 36px; background:<?php echo $style;?>" title="Click to expand/collapse">
				  
		           <input type="hidden" id="is_multiline" name="is_multiline" value="<?php echo $notification['is_multiline'];?>" />
		              
  
		         <div class="notification-item <?php if($notification['type'] == 'message') echo 'notification-message';?> <?php echo ($collapseOpen ? 'collapseOpen':'') ?>">
		                    <?php if($notification['type'] == 'banner'):?>
		                            <div>
		                                <?php if(!empty($notification['url'])):?>
		                                    <a href="<?php echo $notification['url'];?>">
		                                        <img src="<?php echo '/images/banners/'.$notification['data'];?>"/>
		                                    </a>
		                                <?php else:?>
		                                    <img src="<?php echo '/images/banners/'.$notification['data'];?>"/>
		                                <?php endif;?>
		                            </div>
		                    <?php else:?>
		                    
		                    <div style="padding:0px;color:<?php echo ' '.$notification['text_color'].' '; ?>;"  class="notification_hh col-xs-12">
		                       
		                          <div class="notification_hh col-xs-12" style="padding:0px;background-color:<?php echo $notification['top_heading_bg_color'] ?>">
        									     <div class="paragraphclass">
		                                		<h2><img src="<?php echo $notification['image_upload'] ?>"  style="left:3px; position: absolute;top:8px;"/></h2>
		                                	
		                                		<h2 class="new-notification-text" style="font-size:12px;font-family:<?php echo $notification['top_heading_text_fontfamily']; ?> !important;text-align:center !important;padding:7px;padding-right:5px !important;color:<?php echo $notification['top_heading_text_color']  ?>"><img src="https://www.arttoframe.com/images/stars-left.png"><?php echo ' '.$notification['top_heading'].' '; ?>
		                                		<img src="https://www.arttoframe.com/images/stars-right.png">
		                                		</h2>
		                                		<h2><?php $notification['top_heading_text_fontfamily']?></h2>
		                                	</div>
		                                	<?php if($notification['data'] != ''){ ?>
		                                	<div style="background-color:<?php echo $notification['background_color'] ?>">
			                                <p style="    padding-bottom: 14px;    color: rgb(255, 204, 0) !important;font-family:<?php echo $notification['text_font_family'].' ';?>!important;">
			                                	<?php
						                  				      $enc	= str_replace("\r\n","<br />",$notification['data']);
								                        	echo nl2br($enc);
								            					//  	echo $notification['text_font_family'];
						                           ?>
						                   <!----   .notification-item.notification-message p{font-family: <?php echo $notification['text_font_family'].' ';?>!important ; ----->
					                		  		<a href="https://www.arttoframe.com/sl/july4sale2019" class="shop-now-notification">Shop Now</a>
					                		  		</p>
					                		  	</div>
		                              	<?php }else{ } ?>
		                                </div>
		                                
		                              <div >  
		                                <!--<input type="button" class="closeNotification" style="cursor:pointer;position:absolute;right:2px;z-index:999;font-size:12px;padding:2px;top:4px;color:#202020;" value="Close">		 -->
		                              </div>              
		                            </div>		
		                    <?php 
		                  endif; ?>
		                        </div>   
		            <?php elseif(in_array('all', $note_pages_array)):
		            
		            ?>
		          
		         
		         
		         
		            
		        <div id="notification-data" style="width:100%; cursor: pointer; <?php echo ' '.$mtop.' '; ?>  margin-bottom:-38px; background:#F4F4F6">
				<div id="notification-list" style="display:block; border:none !important;width:100%; <!--box-shadow: 0 2px 5px 3px #aeaeb0; --> min-height: 36px; background:<?php echo $style;?>" title="Click to expand/collapse">
				  
		           <input type="hidden" id="is_multiline" name="is_multiline" value="<?php echo $notification['is_multiline'];?>" />
										
							 	
		      <div class="notification-item <?php if($notification['type'] == 'message') echo 'notification-message';?> <?php echo ($collapseOpen ? 'collapseOpen':'') ?>">
		                    <?php if($notification['type'] == 'banner'):?>
		                            <div>
		                                <?php if(!empty($notification['url'])):?>
		                                    <a href="<?php echo $notification['url'];?>">
		                                        <img src="<?php echo '/images/banners/'.$notification['data'];?>"/>
		                                    </a>
		                                <?php else:?>
		                                    <img src="<?php echo '/images/banners/'.$notification['data'];?>"/>
		                                <?php endif;?>
		                            </div>
		                    <?php else:?>
		                    
		                    <div style="padding:0px;color:<?php echo ' '.$notification['text_color'].' '; ?>;"  class="notification_hh col-xs-12">
		                       		      <?php    /* 
		                                			$topheading = $notification['top_heading'];
		                                			$arrays = preg_split('/(<img[^>]+\>)/i', $topheading, -1, PREG_SPLIT_DELIM_CAPTURE);
																					$arraysstr = $arrays[0]."<br>&nbsp&nbsp".$arrays[1];*/
		                                	?>
		                          <div class="notification_hh col-xs-12" style="padding:0px;background-color:<?php echo $notification['top_heading_bg_color'] ?>">
        									     <div class="paragraphclass">
		                                		<h2><img src="<?php echo $notification['image_upload'] ?>"  style="left:3px; position: absolute;top:10px;"/></h2>
		                                		<h2 class="new-notification-text" style="font-size:12px;font-family:<?php echo $notification['top_heading_text_fontfamily']; ?> !important;text-align:center !important;font-size: 12px;padding:7px 0px;color:<?php echo $notification['top_heading_text_color']  ?>"><img src="https://www.arttoframe.com/images/stars-left.png"><?php echo $notification['top_heading']; ?>
		                                		<img src="https://www.arttoframe.com/images/stars-right.png">
		                                		</h2>
		                                		<h2><?php $notification['top_heading_text_fontfamily']?></h2>
		                                	</div>
		                               <?php if($notification['data'] != ''){ 	?>
		                               <div style="background-color:<?php echo $notification['background_color'] ?>">
			                                <p style="    padding-bottom: 14px;    color: rgb(255, 204, 0) !important;font-family:<?php echo $notification['text_font_family'].' ';?>!important;">
			                         			<?php
						                  				 //echo $notification['top_heading_text_fontfamily'];
							                              $enc	= str_replace("\r\n","<br />",$notification['data']);
								                        	echo nl2br($enc);
								            //            	echo $notification['text_font_family'];
						                           ?>
						                   <!----   .notification-item.notification-message p{font-family: <?php echo $notification['text_font_family'].' ';?>!important ; ----->
					                		  	<a href="https://www.arttoframe.com/sl/july4sale2019" class="shop-now-notification">Shop Now</a>
					                		  	</p>
					                		  	</div>
					                		  	<?php }else{ }?>
					                		  	
					                		  	
					                		  	
					                		  	
					                		  	
		                           </div>
		                                
		                              <div>  
		                              <!--<input type="button" class="closeNotification" style="cursor:pointer;position:absolute;right:2px;z-index:999;font-size:12px;padding:2px;top:4px;color:#202020;" value="Close">-->
		                              </div>              
		                            </div>			
		                    
		               <!----     
		                            <div class="<?php echo $textColor;?>">
		                                <?php 		                                
			                                $enc	= str_replace("\r\n","<br />",$notification['data']);
			                                echo nl2br($enc);		                                
		                                ?>
		                            </div>
				           ---->
		                    <?php endif;?>
		             </div>   
		            <?php endif;?>
		           <?php endforeach;?>
		            <!-- <a class="okBtn" href="javascript:void(0);" style="display:<?php echo ($collapseOpen ? 'none':'block'); ?>;">Ok</a> -->
		     </div>
		</div>

   <script type="text/javascript"> 
   	var mutilineText = '<?php ?>';

   $(".notification-message p").slideToggle(100); 
   $(".notification-message p").css("display","none");
   
   	$('.expendBtn').removeClass("colapse").css("display", "block"); 
   	
   	$(function(){ 
   	 $("#notification-list, .okBtn").click(function(){ 
   		if($(".notification-message p").css("display")=="none"){
   			console.log($("#is_multiline").val()+"=====");
   			if($("#is_multiline").val()=='1')
   			{ 
   				$(".notification-message p").slideToggle(100);  $('.expendBtn').addClass("colapse").css("display", "none"); 
   				//$(".okBtn").css('display', 'block');
   			}
   		}else{ 
   			$(".notification-message p").slideToggle(100); $('.expendBtn').removeClass("colapse").css("display", "block"); 
   			//$(".okBtn").css('display', 'none');
   		}
   		/*document.cookie = "atf_notification_<?php echo $notificationData[0]['id']?>=<?php echo $notificationData[0][id]?>; <?php echo $notificationData[0]['end_date']?>; path=/";*/
   	}); 
   	$(".closeNotification").click(function()
   	{
   				$("#notification-data").hide();
   				$.post("/hideNotification.php",function(response)
   				{
   					$("#notification-data").hide();
   				});
   	});
   });
   </script>
<?php 
	}
}
 
 ?>
 

<!--header--> 
<?php 
require_once('cache.config.php');
include('template_menu_version4_ng.php');
//include("cache/cache.storage/files/main_menu_cache_mobile.html");

include('template_search_popup.php');
$serverScriptName = $_SERVER['SCRIPT_NAME'];
?>

<?php 
/*
	######################
	START SALES BANNER SECTION FOR MOBILE SEARCH PAGE ONLY
	######################
*/ 



if($_SERVER['SCRIPT_NAME'] == '/pictureframe_search.php'){	
	include('mobile_show_banner.php');
?>

<?php /*
<div class="col-xs-12" style="padding:0px 0px;">
	<a href="https://cdn.arttoframe.com/custom_framing">
	<!---<img src="https://cdn.arttoframe.com/images/mobile_search_christmas.jpg" style="width:100%">-->
</div>*/?>
 
<?php }

/*
######################
END SALES BANNER SECTION FOR MOBILE SEARCH PAGE ONLY
######################
*/
?>	

<?php if($serverScriptName == '/pictureframe_item.php'){ ?>
<style>
	#notification-data{
		display:none;
		}
</style>	
<style>
	.applied_couponcode{
		font-family: 'Product Sans',sans-serif !important;
	}
	.applied_coupon{
		font-family: 'Product Sans',sans-serif !important;
	}
	.login-account-txt{
		color: rgb(33, 155, 201);
	    font-family: "montserrat light" !important;
	    font-size: 18px;
	    margin-top: 10px;
	    margin-bottom: 10px;
	    font-weight: 500;
	    line-height: 1.1;
	}
</style>	
<?php 
}
	

//Notification popup (check if not app pages)

 




if(!$detectMobile)
{
		?>
<!-- Header_image pop up starts here -->
<div class="modal fade" id="myModalSignupShare" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="panel-heading offerPopupHeader">
        		<h2 class="whtColor"><span>Sign up & Save</span></h2>
        		<h6 class="modal-title whtColor" id="myModalLabel"><span>Connect with us on Social Media and get 10% off your next order.</span></h6>
        	</div>
      </div>
      <div class="modal-body offerPopup">      	
      	<!-- Shipping Info-->
      	<div class="panel panel-default offerPopupContent" style="margin-bottom:0">
      			<div class="panel-body offerPopupMainContent">
              <form role="form" class="form-horizontal" data-toggle="validator" onsubmit="javascript:return email_notification_form();" id="email-notification-form-info" >
      			<div class="" style="margin-right:0px !important; display:none">
					<div class="notification_image" style="margin:0px;width:80%">
							<a  id="<?php echo $header_row['id']; ?>"  href="<?php echo $header_row["url"] ?>" class="offer_popup_link"><img class="offer_popup_img" style="display:none"></a>
							<input type="hidden" name="image_id" id="image_id" value="" />  
					</div>
      			</div> 
                  <div class="" id="formBlock" style="margin-right:0px !important;">
					<div id="popup_success_message" style="display:none; margin-left: auto; margin-right: auto; width: 400px;">
							<img style="width:30px;  float: left" src="<?php echo getCDNurl(4); ?>/images/success.jpg">
							<h2 align="center" style="color: #009c1f;">Thank You !!!</h2>
					</div>		      			  	
					<div style="clear:both;"></div>
		      		<div style="display: none;">
		      			<div class="checkbox" style="display: none;">
							<label><input type="checkbox" name="news" id="news" value="1"> Newsletter</label>
						</div> 
						<div class="checkbox" style="display: none;">
							<label><input type="checkbox" name="coupons" id="coupons" value="1"> Coupons & sales</label>
						</div>
					</div>
       			    <div class="one_half clsPad">		
						<div class="form-group" style="display:none">
	      			  		<a id="google_btn" class="google-button" href="javascript:void(0)">Sign in with Google</a>
						</div>   
	      			  	<div class="form-group clsPad" >
				      		<a class="twitter-hashtag-button" id="twitterSignIn" href="javascript:void(0)">Sign in with Twitter</a>
						</div>     
					</div>
					<div class="one_half last clsPad">
						<div class="form-group">
			      			<a id="facebook" class="facebook" href="javascript:void(0)">Sign in with Facebook</a>
						</div>  
		      			
		      			 		
		      			 			<!--  Facebook Integration START -->
									  	 		     
						      		<!--  Facebook Integration START --> 			  
		      			 <div class="form-group clsPad" >
		      			 	<a class="button-blue" id="instagram" href="javascript:void(0)"><span>&nbsp;</span>Sign in with Instagram</a>
		      			 </div>     
					</div>
				</div>  
      			<div class="one_half last" id="responseMsg" style="display:none;margin-right:0px !important;">  
      				<div style="height:60px;">Thank You...</div>  
      		</div>  			  	
      	</div> 	
      </div>
    </div>   
      	  <div style="clear:both;"></div>
 <!--     <div class="modal-footer" style="margin-bottom: 10px;">
      	 <div class="" style="margin-top: 0px;">
        	<div style="display: block; color: #40675A; text-align: left; font-size: 12px; font-weight:bold">
        			By clicking Submit, you agree to receive coupons and special promotions from ArtToFrames.com
        	</div>
          <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
-->
      <div style="clear:both;"></div>
       </form>
    </div>
  </div>
</div>
<!-- Header_image pop up ends here -->

<!-- Google url pop up starts here -->

<div class="modal fade" id="myModalGoogleURLSignupShare" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="">
      <div class="modal-header" style="padding:0; border:none;">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <p id="message" align="center"></p>
      <div class="modal-body offerPopup">      	
      		<div class="panel-content">
      					<div class="leftContent">
      							<p class="paragraph1"> Sign up & Save</p>
      							<p class="paragraph2">Save 10%</p>
      							<p class="paragraph3">on your first order</p>
      							<br/>
      		<!--	<p class="paragraph4"><img src="<?php echo getCDNurl(); ?>/images/google-popup-image.png" width="270px" height="155px"></img></p>-->
      						
      				 <p style="color:#A7A5A6;margin-left:35px;font-size:18px;margin-top:20px;font-family: "Open Sans",sans-serif"><a href="javascript:void(0);" id="close" style="cursor:pointer">no, thanks.</a></p>
      					</div>
      					<div class="rightContent">
      						<form id="formGoogleUrl">
      							<p style="margin-top:15px;"><label for="firstName"> First Name</label><br/>
      							<input type="text" class="intext" name="firstName" id="firstName" required></p>
      							<p><label for="lastName"> Last Name</label><br/>
      							<input type="text" class="intext" name="lastName" id="lastName" required></p>
      							<p><label for="emailId"> Email Address</label><br/>
      							<input type="text" class="intext" name="userName" id="userName" required></p>
      							<p style="color:#2173AD;font-size:14px;line-height:1.2;">Yes, sign me up for coupons, special offers, and product information.</p>
      							<p style="text-align:center">
      							<input type="button" id="btnSubmit" value=" Submit " onClick="addUserGoogleUrl()"></p>
      						</form>
      					</div>
      		</div> 
      		<div class="panel-content2">
      				<div class="row1">
      						<p class="paragraph1">Thanks!</p>
      						<p class="paragraph2">for signing up</p>
      				</div>
      				<div class="row2">
      						<p>WE'LL SEND A CONFORMATION EMAIL<br/>IN ABOUT 15 MINUTES</P>
      				</div>
      				<div class="row3">
      						<p>Confirm your email to collect your 10% OFF coupon. <a href="/">SHOP</a></p>
      				</div>
      		</div>
  		</div>
		</div>
	</div>
</div>
<!-- Google url pop up ends here -->
<?php
	}
	?>
<!--wrapper-->


<?php
		//print_r($_SESSION);
		if(isset($_SESSION['popup_window']) && $_SESSION['popup_window']==1 && isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == 1)
		{
			$_SESSION['popup_window']=0;
			unset($_SESSION['popup_window']);
		?>
		
		<script type="text/javascript">		
		
			showLoginLoad();
			function showLoginLoad(){
				$('#myModalSignupShare').css('display','block');
				$('#myModalSignupShare').attr('aria-hidden', 'false');
				$('#myModalSignupShare').attr("class","modal fade in");
				$('#popup_success_message').css('display','block');	
				$('#google_btn').hide();
				$('#twitterSignIn').hide();
				$('#facebook').hide();
				$('#instagram').hide();
				setTimeout(function() {	
					
					 $('#myModalSignupShare').css('display','none');	
					 $('#popup_success_message').css('display','none');	
					 $('#google_btn').show();
					$('#twitterSignIn').show();
					$('#facebook').show();
					$('#instagram').show();
					 }, 5000);
			}
		</script>
	<?php
			$_SESSION['popup_window']=0;
		}		
		?>




<a style="display:none;" class="openNewOfferPopup">open</a>
<div id="newOfferPopup"  class="modal in" role="dialog" aria-labelledby="newOfferPopup" aria-hidden="false" style="display:none; z-index:2147483647;">
	  <div class="modal-dialog" style="max-width:970px; width:97%; margin:0 auto; top:8%; border-radius:0px; clear:both;">
			<div class="modal-content"  style="max-width:970px; width:97%; height:auto; background:#0063a7; border-radius:0px; padding:8px; clear:both;" >
	      <div class="modal-header" style="border-bottom:none; text-align:center; padding:0px;">
	      	 <button type="button" class="close" data-dismiss="modal">&times;</button>
	      	 <img src="<?php echo getCDNurl(); ?>/images/discount_head.png" />
	      </div>
	      <div class="modal-body" style="clear:both; padding:14px 14px 12px; text-align:center;">
		      <div class="col-xs-12" style="clear:both; padding: 13px 4px; background:#fff;">	
		     
		     <h2 class="modal-title-discount">
		     	 <img class="show_mark" src="<?php echo getCDNurl(); ?>/images/rmark.png" /><!-- Your <a class="promo_pr_link">  <span class="promo_pr_name">Canvas</span> </a>&nbsp;promo code  <span class="coupon_code">FALL 20</span>-->
		     	 <span class="applied_text"></span></h2>
		     	 	
	        <h6 class="modal-sub-title-discount2">You have a different promo code?</h6>
	        <div class="col-xs-12" style="clear:both; padding:5px 20px; text-align:center;">
	         <input type="text" class="discount_code" name="discount_code" id="discount_code" placeholder="CODE" >
	         <button class="btn btn-primary apply_btn_disc" id="apply_new_coupon"> Apply</button>
	          <p class="invalid_coupon"> Invalid coupon code</p>
	          <p class="applied_coupon_succes">Coupon code has been applied successfully </p>
	        </div>
	        <p class="modal-sub-title-discount2" style="clear:both;">Only one code can be used per order. </p>
		    </div>
		    <p class="modal-sub-title-discount2" style="clear:both;"></p>
	    </div>
		</div>
	</div>
</div>

<div id="newOfferPopup_display"  class="modal in" role="dialog" aria-labelledby="newOfferPopup" aria-hidden="false" style="display:none; z-index:2147483647;">
	  <div class="modal-dialog" style="max-width:970px; width:100%; margin:0 auto; top:8%; border-radius:0px; clear:both;">
			<div class="modal-content"  style="max-width:970px; width:97%; height:auto; background:#0063a7; border-radius:0px; padding:8px; clear:both;" >
	      <div class="modal-header" style="border-bottom:none; text-align:center; padding:0px;">
	      	 <button type="button" class="close" data-dismiss="modal">&times;</button>
	      	 <img src="<?php echo getCDNurl(); ?>/images/discount_head.png" />
	      </div>
	      <div class="modal-body" style="clear:both; padding:14px 14px 12px; text-align:center;">
		      <div class="col-xs-12" style="clear:both; padding: 13px 4px; background:#fff;">	
		     
		     <h2 class="modal-title-discount">
		     	<!-- Your <a class="promo_pr_link">  <span class="promo_pr_name">Canvas</span> </a>&nbsp;promo code  <span class="coupon_code">FALL 20</span>-->
		     	 <span class="applied_text"></span></h2>
		     	 <?php  
             global $pdo_db1;
             $coupon = $_GET['coupon'];
		         $query1 ="select * from `tb_coupon` where no_code  = '$coupon' OR no_coupon = '$coupon' order by id_coupon DESC";  		           
		         $result2 = $pdo_db1->pquery($query1);
		 	       $row_new = $result2[0];
		 	       $de_amount = $row_new['de_amount'];
		 	       $timeSecond = $row_new['va_date']. " 23:59:59";
		 	       $timeFirst  = date('Y-m-d H:i:s');
		 	       $differenceInSeconds = strtotime($timeSecond) - strtotime($timeFirst);
		 	       $curdate= strtotime($timeFirst);
			       $mydate=  strtotime($timeSecond);
                	
            if($curdate > $mydate)
		        {
		        ?>
		      	 <script type="text/javascript">
		      	  var myTimer = setInterval(myClock, 1000);
		          function myClock()
		           {
		             document.getElementById("CountDownTimer").innerHTML = '';
		           }
		      	</script>
		     
		      	<?php  $differenceInSeconds = '0'; 
		      	}  ?>
	 			<p class="modal-sub-title-discount2 applied_coupon" style="font-size: 20px; color:green;"> Use promo code "<?php echo $coupon;   ?>"  for <?php echo round($de_amount); ?>% off </p>
	        <p class="modal-sub-title-discount2 applied_coupon">This coupon code can be used for  <b>"Custom Framing" </b>Only<span class="applied_couponcode"></span></p>
	        <p style="clear:both; text-align:center;">Promo codes cannot be stacked and does not apply to oversized orders</p>
	        	 
             
	        	<div class="container1">
           		<center> <div id="CountDownTimer" data-timer="<?php echo $differenceInSeconds;?>" style="width: 300px; height: 125px; padding: 0px; box-sizing: border-box;"></div> </center>
		       </div>
		           <script>
		            $("#DateCountdown").TimeCircles();
		            $("#CountDownTimer").TimeCircles({ time: { Days: { show: true }, Hours: { show: true } }});
		            $("#PageOpenTimer").TimeCircles();
		            
		            var updateTime = function(){
		                var date = $("#date").val();
		                var time = $("#time").val();
		                var datetime = date + ' ' + time + ':00';
		                $("#DateCountdown").data('date', datetime).TimeCircles().start();
		            }
		            $("#date").change(updateTime).keyup(updateTime);
		            $("#time").change(updateTime).keyup(updateTime);
		            
		            // Start and stop are methods applied on the public TimeCircles instance
		            $(".startTimer").click(function() {
		                $("#CountDownTimer").TimeCircles().start();
		            });
		            $(".stopTimer").click(function() {
		                $("#CountDownTimer").TimeCircles().stop();
		            });
		
		            // Fade in and fade out are examples of how chaining can be done with TimeCircles
		            $(".fadeIn").click(function() {
		                $("#PageOpenTimer").fadeIn();
		            });
		            $(".fadeOut").click(function() {
		                $("#PageOpenTimer").fadeOut();
		            });
		
		        </script>
		    </div>
		    <p class="modal-sub-title-discount2" style="clear:both;"></p>
	    </div>
		</div>
	</div>
</div>

<?php
if(isset($_GET['display']) && $_GET['display']=='1' ){	
	
		$no_coupon='';
	
	
	$coupon ='';
	if(isset($_GET['coupon'])){
		$coupon = $_GET['coupon'];
		}
		
	if(isset($_GET['coupon']))
		{
			// LOWER(COL_NAME) LIKE LOWER('%PriceOrder%')
			//ATFBNR-53937
			//SELECT no_coupon  FROM  `tb_coupon` WHERE LOWER(no_code) = LOWER('ATFBNR-53937') limit 1
			 $coupon_sql = $pdo_db1->query("SELECT no_coupon  FROM  `tb_coupon` WHERE LOWER(no_code) = LOWER('".$coupon."') limit 1");
			 if($pdo_db1->pdo_num_rows($coupon_sql )){
				  $coupon_res_info = $coupon_sql;
				  $no_coupon = $coupon_res_info['no_coupon'];
				
			}
		}
?>
<script type="text/javascript">
	//window.onload = function (){


</script>
<?php }?>


<?php
if(isset($_GET['popup']) && $_GET['popup']=='1' ){
	
	$no_coupon='';
	
	
	$coupon ='';
	if(isset($_GET['coupon'])){
		$coupon = $_GET['coupon'];
		}
		
	if(isset($_GET['coupon']))
		{
			// LOWER(COL_NAME) LIKE LOWER('%PriceOrder%')
			//ATFBNR-53937
			//SELECT no_coupon  FROM  `tb_coupon` WHERE LOWER(no_code) = LOWER('ATFBNR-53937') limit 1
			 $coupon_sql = $pdo_db1->query("SELECT no_coupon  FROM  `tb_coupon` WHERE LOWER(no_code) = LOWER('".$coupon."') limit 1");
			 if($pdo_db1->pdo_num_rows($coupon_sql )){
				  $coupon_res_info = $coupon_sql;
				  $no_coupon = $coupon_res_info['no_coupon'];
				
			}
		}
	
?>
<script>
	window.onload = function () {
		 var apptype= "<?php echo $no_coupon; ?>";
		 var coupon= "<?php echo $coupon; ?>";
     //$('.promo_pr_name').html(apptype);
     $('.coupon_code').html(coupon);
		 $('#newOfferPopup').modal('show');
	} 
	

</script>
<?php		
}
?>
<script>
	
var setModalTexMain_search = "Minimum size limit";
var setModalTex1_search = "Please enter a  minimum size of 3&#8243; x 3&#8243;";
var setModalTex2_search = "and maximum finish size of 36&#8243; x 56&#8243;";	

  $(window).on('load',function(){
  
  var co = '<?php echo $_GET["coupon"];  ?>';

 	if(co !== null && co !== '')
 	{
 		$('#newOfferPopup_display').modal('show');
 	}else{
 		$('#newOfferPopup_display').modal('hide');
 	}
    });

</script>			   
<?php include('feedback_popup.php')?>