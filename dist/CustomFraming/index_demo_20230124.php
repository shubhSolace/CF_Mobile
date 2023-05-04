

<?php

if (isset($_REQUEST['show_load_timestamp'])&& $_REQUEST['show_load_timestamp'] == 1) {
  //  include_once('custom_framing_ng/index_demo_timestamp.php');
    //exit();
}
if ($show_load_timestamp) {
	displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~On Page Start");
}
    ini_set('display_errors',1);
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/global.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.cart.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/manage_cart.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/get_last_directory_id.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/productpage_functions.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.cart.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.frame.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.hardware.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.glaze.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.mat.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/price_calc_func.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.export.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.products.php');
    $util      = new utils;
    $cart_obj = new cart;
    $cart = $cart_obj->get_cart();
    $cartId = $cart['cart_id'];
    $user_sid = $_SESSION['hashed_sid'];
    $f         = new frames;
    $h         = new hardware;
    $g         = $glaze = new glaze;
    $m         = $m_m = new mat;
    $export    = new export;
    $p         = new products;
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~after modules files");
    }
    if(isset($_GET['mat_id']) && is_numeric($_GET['mat_id'])){
        $sql_diploma = "SELECT diploma_frames FROM multi_mat WHERE id='".$_GET["mat_id"]."'";
        $diploma_flag= $pdo_db1->pquery($sql_diploma);
        $diploma_flag=$diploma_flag[0];
        if($diploma_flag['diploma_frames']==1){
            $isDiplomaProductMobileVersion = true;
            $_GET['diploma'] = 1;
            $_REQUEST['diploma'] = 1;
        }
    }
    if(isset($_SESSION['cf-directory']) && $_SESSION['cf-directory'] !='' && is_int($_SESSION['cf-directory']) && $_SESSION['cf-directory'] > 0){
       // Directory Allready Assigned.
    } else {
      $_SESSION['cf-directory']=get_last_directory_id();
    }    
    ini_set('display_errors',0);
	date_default_timezone_set('Asia/Calcutta');
     $mat_id = $_REQUEST['mat_id']; 
    if(isset($mat_id) && is_numeric($mat_id))
    {   
    $query_get_meta_seo_data = "SELECT id,name from multi_mat where in_stock = 1 and id = '".$mat_id."'";  
    $result_get_meta_seo_data = $pdo_db1->pquery($query_get_meta_seo_data);
    $row_get_meta_seo_data = $result_get_meta_seo_data[0]; 
    $name_meta_seo = $row_get_meta_seo_data['name'];
    $name_meta_id = $row_get_meta_seo_data['id']; 
    if ($name_meta_id) {
    }else{
        echo 'redirected...';exit;
    }
    if($_REQUEST['demo_12'] == 1)
    {
        echo $name_meta_seo; exit;
    }
    }
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~ before default hardware frame code ");
    }					
		//get default oversize frame code
    $defaultOversizeFrameArray=array('action'=>'oversizeframe');
    $defaultOversizeFrame=$f->get_new_frames_query($defaultOversizeFrameArray);
    $pos_top   = isset($_GET['pos_top']) ? $_GET['pos_top'] : '2.00';
    $pos_right = isset($_GET['pos_right']) ? $_GET['pos_right'] : '2.00';
    $pos_bottom= isset($_GET['pos_bottom']) ? $_GET['pos_bottom'] : '2.00';
    $pos_left  = isset($_GET['pos_left']) ? $_GET['pos_left'] : '2.00';
    $_GET['frame_size'] = ($_GET['frame_size'] == '') ? '8x10' : $_GET['frame_size'];
    $_REQUEST['frame_size'] = ($_REQUEST['frame_size'] == '') ? '8x10' : $_REQUEST['frame_size'];
    if ($_REQUEST['item_type'] == 'no_mat') {
        $_GET['image_size'] = ($_GET['image_size'] == '') ? '8x10' : $_GET['image_size'];
        $_REQUEST['image_size'] = ($_REQUEST['image_size'] == '') ? '8x10' : $_REQUEST['image_size'];
    }
    $line_item_id       = '';
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~after default hardware frame code");
    }
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~before get cart call");
    }
    if (isset($_GET['line_item']) && $_GET['line_item'] != '') {
        $line_item_id = $_GET['line_item'];
        $cart_obj     = new cart;
        $cart         = $cart_obj->get_cart();
        if (isset($_SESSION) && !empty($_SESSION)) {
            $cart_id = $_SESSION['cart']['cart_id'];
        } else if (is_array($cart) && !empty($cart)) {
            $cart_id = $cart['cart_id'];
        } else {
            $cart_id = '';
        }
        if ($cart_id) {
            $cart_array  = $cart_obj->get_cart($cart_id);
            $order_items = $cart_array['order_items'];
            foreach ($order_items as $key => $value) {
                if ($key == $line_item_id) {
                    $mat_border_array = $value['order_item_details'][0]['fld11'];
                    $mat_borders      = explode(',', $mat_border_array);
                    $pos_top          = filter_var($mat_borders[0], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                    $pos_bottom       = filter_var($mat_borders[1], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                    $pos_left         = filter_var($mat_borders[2], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                    $pos_right        = filter_var($mat_borders[3], FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                    if ($pos_top == '')
                        $pos_top = 2;
                    if ($pos_bottom == '')
                        $pos_bottom = 2;
                    if ($pos_left == '')
                        $pos_left = 2;
                    if ($pos_right == '')
                        $pos_right = 2;
                }
            }
        }
    }
    $selected_mat_id   = $_GET['mat_id'];
    $diploma_flag      = '';		
    $my_mat_size       = $_GET['frame_size'];
    $type              = $_GET['type'];
    $backing_type      = 1;
    $app_name          = 'frame';//by default
    $item_type         = $_REQUEST['item_type'];		
    $type              = $type=='' ? $item_type : $type;
    $matid_Custom      = 'No';
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~after get cart call");
    }
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~before query and function calls");
    }

    if ((isset($_REQUEST['frameCode']) && $_REQUEST['frameCode'] != '') && !isset($_REQUEST['frame_code'])) {
        $_GET['frame_code'] = $_REQUEST['frame_code'] = $_REQUEST['frameCode'];
    }
	$isDiploma = 0;
    if(isset($_GET['mat_id']))
    {
        $SQL_ChkDiploma = $pdo_db1->pquery("SELECT diploma_frames , id FROM `multi_mat` WHERE `id` = '".$pdo_db1->pdo_real_escape_string($_GET["mat_id"])."'");
        $isDiploma = $SQL_ChkDiploma[0]['diploma_frames'];
    }
    if(isset($_REQUEST['diploma']) && $_REQUEST['diploma'] == 1)
    {
        $isDiploma = 1;
    }
    if ($_REQUEST['frame_code'] != '') {
        $defaultFrameArray=array('action'=>'get_code_only', 'code'=>$_REQUEST['frame_code'], 'in_stock'=>[0,1,2,3]);
        $requested_frame_query = $f->get_new_frames_query($defaultFrameArray);

        $defalt_frame_info = $pdo_db1->pquery($requested_frame_query);
        $defalt_frame_info = $defalt_frame_info[0];
        if (isset($defalt_frame_info['code']) && $defalt_frame_info['code'] != '') {
            $defalt_frame_info = $f->frame_info_by_code($defalt_frame_info['code']);
            $_REQUEST['frame_code']=$defalt_frame_info['code'];
        } else {
            $defalt_frame_info = $f->frame_info_by_code($defaultOversizeFrame['code']);
            $_REQUEST['frame_code']=$defaultOversizeFrame['code'];
        }
        $search_labels = $defalt_frame_info['search_labels'];
        if (isset($_REQUEST['print_query_date'])) {
            echo '<pre>';print_r($defalt_frame_info);echo '</pre>';exit;
        }
        $frame_code        = $defalt_frame_code = $_REQUEST['frame_code'];
    } elseif ($_GET['id'] != '') {
        $defalt_frame_info = $f->frame_info($_GET['id']);
        $defalt_frame_code = $defalt_frame_info['code'];
    } else {
        $defalt_frame_info = $f->frame_info('3926');
        $defalt_frame_code = $defalt_frame_info['code'];
    }
    if ((isset($_GET['print_query']) && $_GET['print_query'] == '1') && $_SESSION['permissions']>1) {
        echo '<pre>';
        print_r($_REQUEST);
        echo '</pre>';exit();
    }
	if($type  != 'no_mat'){
	    $defalt_mat_color       = '61';
	    $defalt_mat_color_name  = 'Super White';    
	    $defalt_mat2_color      = '89';
	    $defalt_mat2_color_name = 'Black';
	    if (isset($_GET['mat_color1']) && $_GET['mat_color1'] != '') {
	        $mat_color1      = str_replace('-', ' ', $_GET['mat_color1']);      
	        $qry="SELECT id, code, name, color, core_color FROM mats WHERE description =  '" . $pdo_db1->pdo_real_escape_string($mat_color1) . "' AND in_stock in ('1','2') ORDER BY `color_order_list` LIMIT 1";
	        $selected_mat_color=$pdo_db1->query($qry);
	        $selected_mat_color= $selected_mat_color[0];
	        $page_load_topmat_color = $selected_mat_color['color'];
	            if ($selected_mat_color) {
	            $mat1_info             = $selected_mat_color;
	            $defalt_mat_color      = $mat1_info['code'];
	            $defalt_mat_color_name = $mat1_info['name'];
	        }
	    }
	    $page_load_bottommat_color='#000000';
	    if (isset($_GET['mat_color2']) && $_GET['mat_color2'] != '') {
	        $mat_color2      = str_replace('-', ' ', $_GET['mat_color2']);      
	        $qry="SELECT id, code, name, color, core_color FROM mats WHERE description =  '" . $pdo_db1->pdo_real_escape_string($mat_color2) . "' AND in_stock in ('1','2') ORDER BY `color_order_list` LIMIT 1";
	        $selected_mat_color=$pdo_db1->query($qry);
	        $selected_mat_color= $selected_mat_color[0];
	        if ($selected_mat_color) {
	            $mat2_info              = $selected_mat_color;
	            $defalt_mat2_color      = $mat2_info['code'];
	            $defalt_mat2_color_name = $mat2_info['name'];
	            $page_load_bottommat_color = $selected_mat_color['color'];
	        }
	    }
	}
    if (isset($_REQUEST['print_selected_frame_size']) && $_REQUEST['print_selected_frame_size'] == '1') {
        echo '<br>no_mat==>selected_frame_size:'.$type;   
    }
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~ after query and function call");
    }
	if (isset($type)) {
	    switch ($type) {
	        case 'no_mat':
              $selected_frame_size    = $my_mat_size = $_GET['frame_size'];
                /*if (isset($_REQUEST['paperId']) && $_REQUEST['paperId'] != '') {
                    $product_sku = "custom_WOM".$defalt_frame_info["code"]."-".$selected_frame_size;   
                    $product_type_id = 57;                
                    $singal_mat             = 'no';           
                    $prod_types             = "customframe";
                    $product_title          = "Custom Framing";  
                    $picture                = $global_cdn_url_2."/products/image-corner-wom-tight/framed-art/wom/" . $defalt_frame_code . "/500/corner-image.jpg";
                } else*/ {
                    $product_sku ='WOM-'.$defalt_frame_info['code'].'-'.$selected_frame_size;   
                    $product_type_id = 38;                
                    $singal_mat             = 'no';           
                    $prod_types             = 'frames';
                    $product_title          = 'Picture Frames';  
                    $picture                = $global_cdn_url_2.'/products/image-corner-wom-tight/framed-art/wom/' . $defalt_frame_code . '/500/corner-image.jpg';              
                }                     
	            break;	
	        case 'single_sm':
	            $singal_mat             = 'yes';
	            $defalt_mat2_color      = $defalt_mat_color;
	            $defalt_mat2_color_name = $defalt_mat_color_name;
	            $prod_types             = 'frames_mat';
	            $product_title          = 'Custom Frame';
	            $prod_types             = 'frames_mat';
	            $product_title          = 'Custom Frame';
	            $_GET['smOrdm']         = 'Single';
	            if ($_GET['frame_code'] == 'no_frame')
	                $defalt_glass_type = '29';
	            break;	
	        case 'single_dm':
	            $singal_mat     = 'no';
	            $prod_types     = 'frames_mat';
	            $product_title  = 'Custom Frame';
	            $_GET['smOrdm'] = 'Double';
	            if ($_GET['frame_code'] == 'no_frame')
	                $defalt_glass_type = '29';
	            break;	
	        case 'collage_sm':            
	            $singal_mat             = 'yes';
	            $defalt_mat2_color      = $defalt_mat_color;
	            $defalt_mat2_color_name = $defalt_mat_color_name;
	            $prod_types             = 'collage';
	            $app_name                               = 'collage';
	            $product_title          = 'Custome Frame';
	            break;	
	        case 'collage_dm':
	            $singal_mat    = 'no';
	            if($isDiploma == 1)
	            {
	                $prod_types    = 'diploma';
	                $app_name       = 'diploma';
	            }
	            else
	            {
	                $prod_types    = 'collage';
	                $app_name       = 'collage';
	            }
	            $product_title = 'Custome Frame';
	            if ($_GET['frame_code'] == 'no_frame')
	                $defalt_glass_type = '29';
	            break;       
	        default:      
	    }
	}
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~ before variable initialization");
    }	
    $frame_version  = $defalt_frame_info['version'];
    $frames_plus_mat = 'false';
    if(isset($_GET['mat_id']) && !empty($_GET['mat_id'])){
	    $ka_getMatidrelatedInfo_param_ary['pos_top']           = $pos_top;
	    $ka_getMatidrelatedInfo_param_ary['pos_bottom']        = $pos_bottom;
	    $ka_getMatidrelatedInfo_param_ary['pos_left']          = $pos_left;
	    $ka_getMatidrelatedInfo_param_ary['pos_right']         = $pos_right;
	    $ka_getMatidrelatedInfo_param_ary['image_link']        = $image_link;
	    $ka_getMatidrelatedInfo_param_ary['defalt_mat_color']  = $defalt_mat_color;
	    $ka_getMatidrelatedInfo_param_ary['defalt_mat2_color'] = $defalt_mat2_color;
	    $ka_getMatidrelatedInfo_param_ary['defalt_frame_code'] = $defalt_frame_code;
	    $ka_getMatidrelatedInfo_param_ary['frame_version']     = $frame_version;    
	    $ka_getMatidrelatedInfo_ary                            = ka_getMatidrelatedInfo($ka_getMatidrelatedInfo_param_ary); 
	    if (isset($ka_getMatidrelatedInfo_ary) && is_array($ka_getMatidrelatedInfo_ary)) {
	        $selected_frame_size                    = $ka_getMatidrelatedInfo_ary['selected_frame_size'];
	        $selected_mat_id                        = $ka_getMatidrelatedInfo_ary['selected_mat_id'];	        	        	       
	        $ka_multi_mat_array                     = $ka_getMatidrelatedInfo_ary['multi_mat_array'];
	        $diploma_flag                           = $ka_multi_mat_array['diploma_frames'];	 
	        $picture                                = $ka_getMatidrelatedInfo_ary['picture'];      	        	            
	    }
	}
    if($diploma_flag !=0 || $_GET['diploma']==1) {
        $defalt_hardware_type           = 52;
        $backing_type                   = 2;
        $diploma_flag = 1;
    } else {
        $h_a = explode('x', $selected_frame_size);
        $defalt_hardware_type           = $h->return_defalt_hardware_id($h_a[0], $h_a[1]);
    }
    if (isset($_REQUEST['print_selected_frame_size']) && $_REQUEST['print_selected_frame_size'] == '1') {
        echo '<br>==>selected_frame_size:'.$selected_frame_size;   
    }
    $framesize = explode('x',$selected_frame_size);
    $product_type_newac  ='';
    if($diploma_flag == 1) {
        $product_type_newac = 82;
    }
  	$rowShowGlassSelected['id'] = $glaze->return_defalt_glass_id($framesize[0],$framesize[1],'',$product_type_newac);
    $ka_param['defalt_mat2_color']=$defalt_mat2_color;
    $ka_param['defalt_mat_color']=$defalt_mat_color;
    $ka_param['defalt_frame_code']=$defalt_frame_code;
    $ka_param['singal_mat']=$singal_mat;
    $ka_param['rowShowGlassSelected']=$rowShowGlassSelected['id'];
    $ka_param['defalt_hardware_type']=$defalt_hardware_type;
    $ka_param['selected_frame_size']=$selected_frame_size;
    $ka_param['prod_types']=$prod_types;
    if(isset($_GET["mat_id"]))
    {
        $ka_param['mat_id']=$_GET["mat_id"];
    }
    $ka_price_calclulations = array();  
    $ka_price_calclulations = ka_price_calclulations($ka_param);
    $frameWidthOptions = array();   
    $_REQUEST['glass_type'] = $rowShowGlassSelected['id']; 
    if($diploma_flag == 1) {
        $ka_price_calclulations['arrOrder']['backing_type'] = 2;
        $ka_price_calclulations['arrOrder']['mat_backing'] = 12;
        if(substr($mat_id,0,6) != 'custom'){
            $ka_price_calclulations['arrOrder']['multi_mat_id'] = $selected_mat_id;
            $ka_price_calclulations['arrOrder']['tassel_backing_type'] = 2;     
        }
        $ka_price_calclulations['arrOrder']['product_type'] = 82;
        $ka_price_calclulations['arrOrder']['app_name'] = 'diploma';
        $ka_price_calclulations['arrOrder']['glass_type'] = $rowShowGlassSelected['id'];
        $temp_mat_var = $ka_price_calclulations['arrOrder']['mat1_id'];
        $ka_price_calclulations['arrOrder']['mat1_id'] = $ka_price_calclulations['arrOrder']['mat2_id'];
        $ka_price_calclulations['arrOrder']['mat2_id'] = $temp_mat_var;
  	}
      if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~ after variable initialization");
    }
    /*================== END: Code added for matching page load price meta tag with price visible =======================*/
    if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~ befoer code block 1");
    }
    if (isset($_GET['mat_only']) && $_GET['mat_only'] == '1') {
        include_once($_SERVER['DOCUMENT_ROOT'].'/lib/modules.mat_only.php');
        $obj_mat_only = new mat_only;
        $mat_borders = '?pos_top='.$pos_top.'&pos_bottom='.$pos_bottom.'&pos_left='.$pos_left.'&pos_right='.$pos_right.'';
        $mat_size_schema =  explode('x', $_GET['image_size']);
        $mat_size_schema = ($mat_size_schema[0]+($pos_left+$pos_right)).'x'.($mat_size_schema[1]+($pos_top+$pos_bottom));
        if($_GET['mat_color1']!=''){
            $picture = getCDNurl(3).'/images/collage/'.$_GET['mat_id'].'/'.$_GET['mat_color1'].'/10.png'.$mat_borders;
            $gtin14 = 'MAT-CODES-'.$_GET['mat_color1'];
            $matsku = 'MAT-'.$_GET['mat_color1'].'-'.$mat_size_schema;
        }

        if($_GET['mat_color1']!='' && $_GET['mat_color2']!=''){
            $picture = getCDNurl(3).'/images/collage/'.$_GET['mat_id'].'/'.$_GET['mat_color1'].'/'.$_GET['mat_color2'].'/10.png'.$mat_borders;

            $gtin14 = 'MAT-CODES-'.$_GET['mat_color1'].'/'.$_GET['mat_color2'];
            $matsku = 'MAT-'.$_GET['mat_color1'].'-'.$_GET['mat_color2'].'-'.$mat_size_schema;
        }

        if($_GET['mat_color1']!='' && $_GET['mat_color2']!=''  && $_GET['mat_color3']!=''){
            $picture = getCDNurl(3).'/images/collage/'.$_GET['mat_id'].'/'.$_GET['mat_color1'].'/'.$_GET['mat_color2'].'/'.$_GET['mat_color3'].'/10.png'.$mat_borders;

            $gtin14 = 'MAT-CODES-'.$_GET['mat_color1'].'/'.$_GET['mat_color2'].'/'.$_GET['mat_color3'];

            $matsku = 'MAT-'.$_GET['mat_color1'].'-'.$_GET['mat_color2'].'-'.$_GET['mat_color3'].'-'.$mat_size_schema;
        }
        $myimage_size       = $_REQUEST['image_size'];
        $myarr              = explode('x', $myimage_size);
        $wt                 = round($myarr[0]);
        $ht                 = round($myarr[1]);
        $mymatcode1         = $obj_mat_only->color_code_from_name($_REQUEST['mat_color1'], $_REQUEST['mat_code1']);
        $mymatcode2         = $obj_mat_only->color_code_from_name($_REQUEST['mat_color2'], $_REQUEST['mat_code2']);
        $mymatcode3         = $obj_mat_only->color_code_from_name($_REQUEST['mat_color3'], $_REQUEST['mat_code2']);
        $instockdataquery   =  "SELECT mat_width, mat_height,id, in_stock FROM mats WHERE  code='".$mymatcode1."'  ORDER BY `color_order_list` ";
        if ((isset($_GET['print_query']) && $_GET['print_query'] == '1') && $_SESSION['permissions']>1) {
            echo '<pre>'.__LINE__."#=>".$instockdataquery."</pre>";
        }
        $instockData        = $pdo_db1->pquery($instockdataquery);
        $mat1_id            = $instockData[0]['id'];
        $instock_val = $instockData[0]['in_stock'];
          if($instock_val == 0)
          {
              $availability_content = 'Discontinued';
          }
          elseif($instock_val == 1)
          {
              $availability_content = 'InStock';
          }
          else
          {
              $availability_content = 'OutOfStock';
          }
        $matwidth           = $pos_right;
        $matheight          = $pos_top;
        if($matheight == '')
        {
            $matheight = 2;
        }
        if($matwidth == '')
        {
            $matwidth = 2;
        }
        $final_height       = floatval($myarr[1]) + floatval((2 * $matheight));
        $final_width        = floatval($myarr[0]) + floatval((2 * $matwidth));
        $instockdataquery1  =  "SELECT id FROM mats WHERE  code='".$mymatcode2."'  ORDER BY `color_order_list` ";
        if ((isset($_GET['print_query']) && $_GET['print_query'] == '1') && $_SESSION['permissions']>1) {
            echo "<pre>".__LINE__."#=>".$instockdataquery1."</pre>";
        }
        $instockData1       = $pdo_db1->pquery($instockdataquery1);
        $mat2_id            = $instockData1[0]['id'];
        $instockdataquery2  =  "SELECT id FROM mats WHERE  code='".$mymatcode3."'  ORDER BY `color_order_list` ";
        if ((isset($_GET['print_query']) && $_GET['print_query'] == '1') && $_SESSION['permissions']>1) {
            echo "<pre>".__LINE__."#=>".$instockdataquery2."</pre>";
        }
        $instockData2       = $pdo_db1->pquery($instockdataquery2);
        $mat3_id            = $instockData2[0]['id'];

        if(isset($_REQUEST['vgroovid'])){
            $vgroovid = 1;
            $vgroov_query       = "SELECT vGrooveCode FROM vgroove WHERE vGrooveId = '".$_REQUEST['vgroovid']."'";
            $vgroovdata         = $pdo_db1->pquery($vgroov_query);
            $vgroov_code        = $vgroovdata[0]['vGrooveCode']; 
        }else{
            $vgroovid           = 0;
            $vgroov_code        = ''; 
        }
        $designmatid = (!isset($_REQUEST['designmatid'])) ? 3 : $_REQUEST['designmatid'];
        $ka_price_calclulations                                 = array();
        $ka_price_calclulations['arrOrder']['app_name']         = 'matonlyproduct';
        $ka_price_calclulations['arrOrder']['inside_width']     = $final_width;
        $ka_price_calclulations['arrOrder']['inside_height']    = $final_height;
        $ka_price_calclulations['arrOrder']['opening_size']     = $_REQUEST['image_size'];
        $ka_price_calclulations['arrOrder']['matcode']          = 0;
        $ka_price_calclulations['arrOrder']['topmat_width']     = $pos_top;
        $ka_price_calclulations['arrOrder']['bottommat_width']  = 0.25;
        $ka_price_calclulations['arrOrder']['change_item']      = 'Tripple mat option Selected';
        $ka_price_calclulations['arrOrder']['browserInfo']      = '';
        $ka_price_calclulations['arrOrder']['OSInfo']           = 'Windows';
        $ka_price_calclulations['arrOrder']['thirdparty']       = 0;
        $ka_price_calclulations['arrOrder']['mat1_id']          = $mat1_id;
        $ka_price_calclulations['arrOrder']['mat2_id']          = $mat2_id;
        $ka_price_calclulations['arrOrder']['mat3_id']          = $mat3_id;
        $ka_price_calclulations['arrOrder']['printing']         = 'no';
        $ka_price_calclulations['arrOrder']['glass_type']       = '';
        $ka_price_calclulations['arrOrder']['backing_type']     = 1;
        $ka_price_calclulations['arrOrder']['debug']            = 'debug';
        $ka_price_calclulations['arrOrder']['cut_val']          = 0;
        $ka_price_calclulations['arrOrder']['color_filter']     = 0;
        $ka_price_calclulations['arrOrder']['vgroov']           = $vgroovid;
        $ka_price_calclulations['arrOrder']['vgroovshapecodes'] = $vgroov_code;
        $ka_price_calclulations['arrOrder']['cuts_width']       = $wt;
        $ka_price_calclulations['arrOrder']['cuts_height']      = $ht;
        $ka_price_calclulations['arrOrder']['BoundWidth']       = 'NaN';
        $ka_price_calclulations['arrOrder']['BoundHeight']      = 'NaN';
        $ka_price_calclulations['arrOrder']['popupMat']         = 1;
        $ka_price_calclulations['arrOrder']['appliedMat']       = 2;
        $ka_price_calclulations['arrOrder']['designerMatId']    = $designmatid;
        $ka_price_calclulations['arrOrder']['show']             = 1;
        $ka_price_calclulations['arrOrder']['HTTP_USER_AGENT']  = $_REQUEST['HTTP_USER_AGENT'];
        $ka_price_calclulations['arrOrder']['product_type']     = 69;
        $arrPriceDetails = price_calc_by_cost($ka_price_calclulations['arrOrder']);
        if ((isset($_REQUEST['print_schema_price']) && $_REQUEST['print_schema_price'] == '1') && $_SESSION['permissions']>1) {
            echo "<pre>";
            echo $instockdataquery;
            print_r($_REQUEST);
            print_r($ka_price_calclulations['arrOrder']);
            print_r($arrPriceDetails);
            echo "<pre>";
        }
    } else {
        $arrPriceDetails = price_calc($ka_price_calclulations['arrOrder']); 
        if(isset($_GET['chk'])== 1){    
          echo $prod_types;
          echo"<pre>";
          print_r($_REQUEST);
          print_r($ka_param);
          print_r($ka_price_calclulations);
          print_r($arrPriceDetails);
          exit;
        }
    }
    if (isset($_REQUEST['paperId']) && $_REQUEST['paperId'] == '21') {
        $ka_price_calclulations['arrOrder']['printing_type'] = $_REQUEST['paperId'];
        include_once('../lib/modules.sku_functions.php');
        $custom_sku = 'custom_WOM'.$defalt_frame_code.'-'.$selected_frame_size;
        $google_trust_product_id = $custom_sku;
        $cost_array = vendor_cost_by_sku_new($custom_sku, 0, "array", "price",'2'); 
        $arrPriceDetails = $cost_array;
        if (isset($_REQUEST['chk_custom']) && $_REQUEST['chk_custom']=='1') {
            echo "<pre>Input SKU.:".$custom_sku."</pre>";
            echo "<pre>";print_r($cost_array);echo "</pre>";exit;
        }
    }
    $priceCurrency = 'USD'; 
    $total_val = isset($arrPriceDetails['price']) && !empty($arrPriceDetails['price']) ? $arrPriceDetails['price'] : 0;
    $myTotalPrice = $total_val;
    $rate_valprice = 0;
    $currency_name = '';        
    include_once('../lib/modules.search_test.php');
    $s         = new search_test;
    if ($google_trust_product_id == '') {
        $google_trust_product_id                               = $s->create_link_for_product($type, $selected_frame_size, $defalt_frame_code, $selected_mat_id, $defalt_mat_color, $defalt_mat2_color, "google_trust_product_id"); //'CDM-2313-586/89-FRBW26039' ;
    }
    $review_userName = ($review_userName=='') ? 'John' : $review_userName;
    if (isset($_REQUEST['wordcutout'])) { 
        $openings = strlen(trim($_REQUEST['wordcutout']));
        $char_width = $char_height = 3;
        $space_count = 0;
        if ($openings > 1 ) {
            $space_count = $openings - 1;
        }
        $rowShowGlassSelected['id'] = $openings < 5 ? 14 : 114;
        $inside_w = ($openings * $char_width) + $space_count + 4;
        $inside_h = $char_width + 4;
        $printing_type = $_REQUEST['paperId'] ? $_REQUEST['paperId'] : '24';
        $image_string = '';
        $defaultFrameArray=array('action'=>'get_code_only', 'id'=>$_REQUEST['frameId'], 'in_stock'=>[0,1,2,3]);
        $requested_frame_query = $f->get_new_frames_query($defaultFrameArray);
        $defalt_frame_info = $pdo_db1->pquery($requested_frame_query);
        $defalt_frame_info = $defalt_frame_info[0];
        $defalt_frame_info = "SELECT name,id, in_stock FROM frames WHERE id='".$_REQUEST['frameId']."'";
        $instockdataquery   =  "SELECT mat_width, mat_height,id, in_stock FROM mats WHERE  code='".$_REQUEST['mat_color']."'  ORDER BY `color_order_list` ";
        $instockData        = $pdo_db1->pquery($instockdataquery);
        $mat1_id            = $instockData[0]['id'];
        $default_frame_code = $p->specific_select("new_frames","id",$_REQUEST['frameId'],'code');
        $price_call = file_get_contents(GLOBAL_LOCALHOST.'custom_framing/preview/actions/getPrice.php?app_name=customframe&inside_width='.$inside_w.'&inside_height='.$inside_h.'&matcode=custom&frame_id='.intval($_GET['frameId']).'&current_frame_code='.$default_frame_code.'&current_liner_frame_code=&glass=yes&fitting=yes&thirdparty=0&mat1_id='.$mat1_id.'&mat2_id='.$mat2_id.'&mat3_id='.$mat3_id.'&printing=yes&glass_type='.$rowShowGlassSelected['id'].'&backing_type=2&debug=debug&cut_val=0&printing_type='.$printing_type.'&hardware_id=52&hardware_type=52&appliedMat=&designerMatId=&paper_backing=9&website=2&show_cost=1'.$image_string);
        $price_call_obj = json_decode($price_call);
	    $myTotalPrice = $price_call_obj->total;
    }
    if (isset($_REQUEST['letterart'])) { 
        $openings = strlen(trim($_REQUEST['letterart']));
        $char_width = $char_height = 3;
        $space_count = 0;
        if ($openings > 1 ) {
            $space_count = $openings - 1;
        }
        $rowShowGlassSelected['id'] = $openings < 4 ? 14 : 114;
        $inside_w = ($openings * $char_width) + $space_count + 4;
        $inside_h = $char_width + 4;
        $printing_type = $_REQUEST['paperId'] ? $_REQUEST['paperId'] : '24';
        $image_string = '';
        $defaultFrameArray=array('action'=>'get_code_only', 'id'=>$_REQUEST['frameId'], 'in_stock'=>[0,1,2,3]);
        $requested_frame_query = $f->get_new_frames_query($defaultFrameArray);
        $defalt_frame_info = $pdo_db1->pquery($requested_frame_query);
        $defalt_frame_info = $defalt_frame_info[0];
        $defalt_frame_info = "SELECT name,id, in_stock FROM frames WHERE id='".$_REQUEST['frameId']."'";
        $instockdataquery   =  "SELECT mat_width, mat_height,id, in_stock FROM mats WHERE  code='".$_REQUEST['mat_color']."'  ORDER BY `color_order_list` ";
        $instockData        = $pdo_db1->pquery($instockdataquery);
        $mat1_id            = $instockData[0]['id'];
        $mat1_id            = 20;
        $mat2_id            = 21;
        $mat3_id            = 0;
        $_GET['frameId']    = "3926";
        $default_frame_code = "FRBW26079";
        if($openings == 1){
            $_REQUEST['cut_id'] = 632;
        }
        if($openings == 2){
            $_REQUEST['cut_id'] = 530;
        }
        if($openings == 3){
            $_REQUEST['cut_id'] = 23;
        }
        if($openings == 4){
            $_REQUEST['cut_id'] = 14;
        }
        if($openings == 5){
            $_REQUEST['cut_id'] = 153;
        }
        if($openings == 6){
            $_REQUEST['cut_id'] = 713;
            $_GET['frameId']    = "4023";
            $default_frame_code = "FRBW74074";
        }
        if($openings == 7){
            $_REQUEST['cut_id'] = 375;
            $_GET['frameId']    = "4023";
            $default_frame_code = "FRBW74074";
        }
        if($openings == 8){
            $_REQUEST['cut_id'] = 590;
            $_GET['frameId']    = "4023";
            $default_frame_code = "FRBW74074";
        }
        if($openings == 9){
            $_REQUEST['cut_id'] = 684;
            $_GET['frameId']    = "4660";
            $default_frame_code = "RFB-250-NAT";
        }
        if($openings == 10){
            $_REQUEST['cut_id'] = 685;
            $_GET['frameId']    = "4660";
            $default_frame_code = "RFB-250-NAT";
        }
        $res4 = atfsql_query("SELECT * FROM multi_mat WHERE id= '".$_REQUEST['cut_id']."'");
		$row4 = atfsql_fetch_array($res4);
		$inside_w = $row4['outsidewidth'];
		$inside_h = $row4['outsideheight'];
        $price_call = file_get_contents(GLOBAL_LOCALHOST.'custom_framing/preview/actions/getPrice.php?app_name=customframe&inside_width='.$inside_w.'&inside_height='.$inside_h.'&matcode='.$_REQUEST['cut_id'].'&frame_id='.intval($_GET['frameId']).'&current_frame_code='.$default_frame_code.'&glass=yes&fitting=yes&thirdparty=0&mat1_id='.$mat1_id.'&mat2_id='.$mat2_id.'&mat3_id='.$mat3_id.'&printing=yes&glass_type='.$rowShowGlassSelected['id'].'&backing_type=2&debug=debug&cut_val=0&hardware_id=52&hardware_type=52&paper_backing=9&website=2&show_cost=1&cuts_width=4&cuts_height=6'.$image_string);
        $price_call_obj = json_decode($price_call);
	    $myTotalPrice = $price_call_obj->total;
    }
if ($type=='no_mat') {
                $fbPixelProduct_sku ='WOM-'.$defalt_frame_info["code"].'-'.$selected_frame_size; 
                    $fbPixelProduct_type_id = 38;                          
                    $fbPixelproduct_title   = "Picture Frames";  
          }elseif ($type=='collage_sm') {          
                    $fbPixelProduct_sku ="Collage-".$_GET["mat_id"];   
                    $fbPixelProduct_type_id = 78;                          
                    $fbPixelproduct_title   = "Collage Frame"; 
          } elseif ($type=='collage_dm') {
        $mat_id = $_REQUEST['mat_id']; 
    if(isset($mat_id) && is_numeric($mat_id))
         {
                $fbPixelProduct_sku ="Collage-".$_GET["mat_id"];   
                    $fbPixelProduct_type_id = 78;                          
                    $fbPixelproduct_title   = "Collage Frame";
        }else{       
                    $fbPixelProduct_sku ="FramesWithMat-".$_GET["frame_code"];   
                    $fbPixelProduct_type_id = 79;                          
                    $fbPixelproduct_title   = "Frames With Mat";               
          }
      }
      if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~after code block 1");
    }

    if(isset($_REQUEST['frameId'])){
        $_REQUEST['frameId'] = $p->specific_select("new_frames","id",$_REQUEST['frameId'],'code');
    }
?>
<script async type="text/javascript">
window.dataLayer = window.dataLayer || [];
var fbPixelProduct_id = "<?php echo $fbPixelProduct_sku;?>";
var fbPixelProduct_category = "<?php echo $fbPixelProduct_type_id ;?>";
var fbPixelProduct_price = "<?php echo $myTotalPrice;?>";
var fbPixelProduct_name ="<?php echo $fbPixelproduct_title ;?>";
dataLayer.push({'Product_id':fbPixelProduct_id});
dataLayer.push({'GAds-ProductNo':fbPixelProduct_id});
dataLayer.push({'Product_category':fbPixelProduct_category});
dataLayer.push({'Product_price':fbPixelProduct_price});
dataLayer.push({'Product_name':fbPixelProduct_name});
</script>
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset='utf-8'>
     <title>Custom Framing</title>
     <base href='/'>
     <meta name='viewport' content='width=device-width, initial-scale=1'>
     <link rel='icon' type='image/x-icon' href='favicon.ico'>
     <input type='hidden'  id='meta_seo_title_new' value='<?php  echo $name_meta_seo;  ?>' /> 
     <div itemscope='' itemtype='https://schema.org/Product' id='showoncanid_1' class='col-md-6 col-sm-6' style='padding:0px;'>
     <?php
          if (isset($_REQUEST['wordcutout']) || isset($_REQUEST['letterart'])) { 
            $name = "Custom Framing";
            $google_trust_product_id = "customframe-".$default_frame_code;
            $picture = getCDNurl(3)."/products/image-corner-wom-tight/framed-art/wom".$default_frame_code."/45/corner-image.jpg?v=101";
            $defalt_frame_info['name'] = "Satin Black";
          } else {
            $name = $ka_price_calclulations['ecomm_category'];
          }
          ?>
          <meta itemprop='name' content='<?php echo $name; ?>'/>
          <meta itemprop='image' content='<?php echo $picture ?>' />
          <meta itemprop='gtin14' content='<?php echo $defalt_frame_code.'-'.$ka_price_calclulations['defalt_ecomm_frame_id']; ?>' />
          <meta itemprop='sku' content='<?php echo $google_trust_product_id; ?>' />
          <meta itemprop='description' content='<?php echo $defalt_frame_info['name'];?>' />
            <div itemprop='brand' itemtype='https://schema.org/Brand' itemscope>
                <meta itemprop='name' content='Arttoframes' />
            </div> 
          <div itemtype='https://schema.org/Review' itemscope='' itemprop='review'>
             <div itemtype='https://schema.org/Person' itemscope='' itemprop='author'>
                 <meta itemprop='name' content='<?php echo $review_userName; ?>' />
             </div>          
          </div>
          <div itemtype='https://schema.org/AggregateRating' itemscope='' itemprop='aggregateRating' />
               <?php 
               if($ka_price_calclulations['list_count'] > 0)
               {
                  $revCnt = $ka_price_calclulations['list_count'];
               }
               else
               {
                  $revCnt = 1;
               }
               ?>
               <meta itemprop='reviewCount' content='<?php echo $revCnt; ?>'>
               <meta itemprop='ratingValue' content='4'>           
          </div>
          <?php
          if (isset($_GET['mat_only']) && $_GET['mat_only'] == '1') { 
          } else {
                $instock_data_query =  "SELECT in_stock FROM new_frames  WHERE  code='".$pdo_db1->pdo_real_escape_string($_GET['frame_code'])."'";
              $instock_data = $pdo_db1->pquery($instock_data_query);
              $instock_val = $instock_data[0]['in_stock'];
              if($instock_val == 0)
              {
                  $availability_content = 'Discontinued';
              }
              elseif($instock_val == 1)
              {
                  $availability_content = 'InStock';
              }
              else
              {
                  $availability_content = 'OutOfStock';
              }
          }
          ?>
          <div itemprop='offers' itemscope itemtype='https://schema.org/Offer' class='metinstock' style='padding:0;margin-top:0;text-align:left'>
              <link itemprop='url' content='https://www.arttoframe.com/<?php echo $_SERVER['request_uri']?>' />
              <meta itemprop='availability' content='http://schema.org/<?php echo $availability_content;?>'/>
              <meta itemprop='priceCurrency' content='<?php echo $priceCurrency;?>' />
              <meta itemprop='price' content='<?php echo $myTotalPrice;?>' />
              <meta itemprop='priceValidUntil' content='<?php echo date('Y-m-d');?>' />
      		</div>         
    </div>
     <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
     <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
     <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
     <script async src='https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js'></script>
     <link href='https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css' rel='stylesheet' />
     <script async src='https://www.arttoframe.com/js/fiber/fiber.min.js'></script>
     <link href='<?php echo getCDNurl(1); ?>/css/jquery.selectareas.css?v=3.1' media='screen' rel='stylesheet' type='text/css' />
     <script async src='https://www.arttoframe.com/js/jquery.selectareas.js?v=1.9' type='text/javascript'></script>
     <script async src='https://www.arttoframe.com/custom_framing/preview/js/fastclick.js'></script>
     <script async type='text/javascript'>
         $(document).ready(function(){
             $.ajax({
                 url : 'https://www.arttoframe.com/custom_framing_ng/assets/page_visit_count.php',
                 type : 'POST',
                 data : {
                     'id' : 4
                 },
                 dataType:'json',
                 success : function(data) {              
                     console.log('count added')
                 },
                 error : function(request,error)
                 {
                     console.log('Request failed');
                 }
             });
         });
         if (typeof window.performance != 'undefined' && window.performance.navigation.type === 2) {
         location.reload();
         }
         <?php
         if (isset($_REQUEST['item_type']) && $_REQUEST['item_type'] != '') {
             $_REQUEST['type'] = $_REQUEST['item_type'];
         }
         $micro_date = microtime();
         $date_array = explode(" ",$micro_date);
         $date = date("Y-m-d H:i:s",$date_array[1]);
        ?>
         localStorage.setItem('defaultParam',JSON.stringify(<?php echo json_encode($_REQUEST) ?>));     
         window.dataLayer = window.dataLayer || [];
         function gtag() {
             dataLayer.push(arguments);
         }
         gtag('js', new Date());
         window.history.pushState("", "", (window.location.href).replace(/\(|\)/g, ''));
     </script>
 <link rel='stylesheet' href='/custom_framing_ng/styles.a56e3040ecf577868765.css'></head>
 <body>
     <?php
         include($_SERVER['DOCUMENT_ROOT'].'/header.php'); // added common header file header_ng.php 2023-01-24
         echo '<input type="hidden" id="atfsid" value= "'.$user_sid.'">';
         echo '<input type="hidden" id="dir_id" value= "'.$_SESSION['cf-directory'].'">';
     ?>
     <div class='container-fluid nopadding'>
         <app-root></app-root>
     </div>
     <script type='text/javascript' src='<?php echo getCDNurl(1); ?>/custom_framing_ng/demo_files/runtime.4cd17dad50b0f888773e.js'></script>
    <script type='text/javascript' src='<?php echo getCDNurl(1); ?>/custom_framing_ng/demo_files/es2015-polyfills.1905b039bfbf91927171.js' nomodule></script>
    <script type='text/javascript' src='<?php echo getCDNurl(1); ?>/custom_framing_ng/demo_files/polyfills.b7c5b10606aa202be8fb.js'></script>
    <script type='text/javascript' src='<?php echo getCDNurl(1); ?>/custom_framing_ng/demo_files/main.d6457195837225e0ac28.js'></script>
     <?php
     include_once ($_SERVER['DOCUMENT_ROOT'].'/footer.php');
     if ($show_load_timestamp) {
        displayTimestamp("index_demo_20230124~~<".__LINE__.">"."~~page end");
    }
     ?>
    </body>
 </html>