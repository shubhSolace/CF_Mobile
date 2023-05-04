/*
ProductCode
Standard Frames = 38
Custom Frame = 57
Frames with Mat = 79
Collage Frames = 78
Diploma= 82
Wordcutout = 57
Pinpix = 61
Letterart = 48

*/

import {EventEmitter, Injectable, Output} from '@angular/core';
import {ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {GetDataService} from '../services/index';
import {Subject} from 'rxjs';

declare var $: any;

declare var _ltk:any;
declare var _ltk_util:any;
declare var e:any;

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  @Output() event_callback: EventEmitter<any> = new EventEmitter();

  private eventCallback = new Subject<any>(); // Source
  eventCallback$ = this.eventCallback.asObservable(); // Stream

  currentPrice: any;
  priceTempArr: any;

  ctxTempCanvas: CanvasRenderingContext2D;
  @ViewChild("tempCanvas") tempCanvas;
  maxFrameSize: string;
  optionctr: number;

  constructor(private http: HttpClient, private getDataService: GetDataService) {}

  getDefaultGlassID(glassArr, matWidth, matHeight, selectedGlassVal, changeGlassManually) {
    var tempSelectedGlassArray = [];
    var tempglassArray = glassArr

    tempglassArray.sort((a, b) => {
      return a[ 'code' ] - b[ 'code' ]
    })

    for (let item of tempglassArray) {

      var glassMaxSize1 = item.max_size1;
      var glassMaxSize2 = item.max_size2;

      if ((matWidth < glassMaxSize1 && matHeight < glassMaxSize2) || (matWidth < glassMaxSize2 && matHeight < glassMaxSize1)) {
        tempSelectedGlassArray.push(item);
      }
    }
    console.log("this.tempSelectedGlassArray===")
    console.log(selectedGlassVal)

    for (let item of tempSelectedGlassArray) {
      if (item.code == selectedGlassVal && changeGlassManually == 1) {
        console.log("Trueeeeeeeeeeeeeee")
        return item.code;
      } else if ((item.default_glass == 1 || item.default_cheap_plexi == 1) && changeGlassManually == 0) {
        console.log("Falseeeeeeeeeeeee")
        return item.code;
      }
    }
    if (tempSelectedGlassArray[ 0 ] == undefined) {
      return selectedGlassVal;
    } else {
      return tempSelectedGlassArray[ 0 ].code;
    }
  }

  defalt_hardware_id(hardwareData, glassMaxWidth, glassMaxHeight, hardwareID, changeHardwareManually, productCode) {
    const formData = new FormData();
    formData.append('product_type', productCode);
    formData.append('inside_width', glassMaxWidth);
    formData.append('inside_height', glassMaxHeight);
    formData.append('website_id', '');
    formData.append('product_sub_id', '');
    formData.append('action', 'getDefaultHardwareId');

    return this.http.post('https://www.arttoframe.com/ng/assets/api/v2/index.php', formData)
    // var defalt_id = "3";//saw tooth hanger
    // if (productCode == 57 || productCode == 82) defalt_id = "52"; // Easy to hange

    // if (productCode == 79 || productCode == 38 || productCode == 78) defalt_id = "3";

    // var tempHardwareArray = [];
    // var big_size, small_size
    // if(glassMaxWidth > glassMaxHeight){
    //   big_size = glassMaxWidth
    //   small_size = glassMaxHeight;
    // }
    // else{
    //   big_size = glassMaxHeight
    //   small_size = glassMaxWidth;
    // }

    // for (let item of hardwareData) {

    //   var glassMaxSize1 = parseFloat(item.max_size1);
    //   var glassMaxSize2 = parseFloat(item.max_size2);

    //   var glassMinSize1 = parseFloat(item.min_size1);
    //   var glassMinSize2 = parseFloat(item.min_size2);

    //   if ((glassMinSize1 < small_size || glassMinSize2 < big_size) && (glassMaxSize1 >= small_size && glassMaxSize2 >= big_size)) {
    //     defalt_id = "106"
    //     // if ((glassMaxWidth < harwareMaxSize1 && glassMaxHeight < harwareMaxSize2) || (glassMaxWidth > harwareMaxSize1 && glassMaxHeight < harwareMaxSize1 && glassMaxWidth < harwareMaxSize2)) {
    //     tempHardwareArray.push(item);
    //   }
    // }
    
    // for (let item of tempHardwareArray) {
    //   if (item.id == hardwareID && changeHardwareManually == 1) {
    //     return hardwareID;
    //   } else if (changeHardwareManually == 0) {
    //     if (productCode == 57 || productCode == 78 || productCode == 82 || productCode == 79 || productCode == 38) {
    //       if (item.id == defalt_id) {
    //         return defalt_id;
    //       }
    //     } else {
    //       return "1"; // Wire, nails and hooks 
    //     }
    //   }
    // }
    // // if(defalt_id === "106"){
    // //   return defalt_id
    // // }
    // // else{
    // //   return "1"
    // // }
    // defalt_id = productCode == 57 || productCode == 82 ? '52' : "3";
    // return defalt_id;

    // // if (tempHardwareArray[ 0 ] == undefined) {
    // //   return hardwareID;
    // // } else {
    // //   if (productCode == 57 || productCode == 78 || productCode == 82 || productCode == 79 || productCode == 38) {
    // //     return defalt_id; // Easy to hange
    // //   } else {
    // //     return "1"; // Wire, nails and hooks 
    // //   }
    // // }
  }

  defaulthardwareid(hardwareData, glassMaxWidth, glassMaxHeight, hardwareID, changeHardwareManually, productCode) {
    var defalt_id = "3";//saw tooth hanger
    if (productCode == 57 || productCode == 82) defalt_id = "52"; // Easy to hange

    if (productCode == 79 || productCode == 38 || productCode == 78) defalt_id = "3";

    var tempHardwareArray = [];
    var big_size, small_size
    if(glassMaxWidth > glassMaxHeight){
      big_size = glassMaxWidth
      small_size = glassMaxHeight;
    }
    else{
      big_size = glassMaxHeight
      small_size = glassMaxWidth;
    }

    for (let item of hardwareData) {

      var glassMaxSize1 = parseFloat(item.max_size1);
      var glassMaxSize2 = parseFloat(item.max_size2);

      var glassMinSize1 = parseFloat(item.min_size1);
      var glassMinSize2 = parseFloat(item.min_size2);

      if ((glassMinSize1 < small_size || glassMinSize2 < big_size) && (glassMaxSize1 >= small_size && glassMaxSize2 >= big_size)) {
        defalt_id = "106"
        // if ((glassMaxWidth < harwareMaxSize1 && glassMaxHeight < harwareMaxSize2) || (glassMaxWidth > harwareMaxSize1 && glassMaxHeight < harwareMaxSize1 && glassMaxWidth < harwareMaxSize2)) {
        tempHardwareArray.push(item);
      }
    }
    
    for (let item of tempHardwareArray) {
      if (item.id == hardwareID && changeHardwareManually == 1) {
        return hardwareID;
      } else if (changeHardwareManually == 0) {
        if (productCode == 57 || productCode == 78 || productCode == 82 || productCode == 79 || productCode == 38) {
          if (item.id == defalt_id) {
            return defalt_id;
          }
        } else {
          return "1"; // Wire, nails and hooks 
        }
      }
    }
    // if(defalt_id === "106"){
    //   return defalt_id
    // }
    // else{
    //   return "1"
    // }
    defalt_id = productCode == 57 || productCode == 82 ? '52' : "3";
    return defalt_id;

    // if (tempHardwareArray[ 0 ] == undefined) {
    //   return hardwareID;
    // } else {
    //   if (productCode == 57 || productCode == 78 || productCode == 82 || productCode == 79 || productCode == 38) {
    //     return defalt_id; // Easy to hange
    //   } else {
    //     return "1"; // Wire, nails and hooks 
    //   }
    // }
  }

  getProductDetails(priceParam){
    var self = this;
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return self.http.get("https://www.arttoframe.com/ajax_product_page_images.php?product_type=" + priceParam.product_type + "&size=" + priceParam.size + "&frame_code=" + priceParam.frame_code + "&ppi=" + priceParam.ppi + "&mat1=" + priceParam.mat1 + "&mat2=" + priceParam.mat2 + "&hardware=" + priceParam.hardware + "&multimat_id=" + priceParam.multimat_id + "&product_sub_type=" + priceParam.product_sub_type, {
          headers: myheader
        })
  }

  getprice(priceParam, change_item = "Default Configuration", parameters, onloadGlassArray = [], productCode) {
    var self = this;
    const formData = new FormData;
    formData.append('url', priceParam.url);
    formData.append('app_name', priceParam.app_name);
    formData.append('inside_width', priceParam.inside_width);
    formData.append('inside_height', priceParam.inside_height);
    formData.append('matcode', '');
    formData.append('topmat_width', priceParam.topmat_width);
    formData.append('bottommat_width', priceParam.bottommat_width);
    formData.append('change_item', 'color2');
    formData.append('mat1_id', priceParam.mat1_id);
    formData.append('mat2_id', priceParam.mat2_id);
    formData.append('mat3_id', priceParam.mat3_id);
    formData.append('printing', priceParam.printing);
    formData.append('glass_type', '');
    formData.append('backing_type', '1');
    formData.append('cut_val', priceParam.cut_val);
    formData.append('color_filter', priceParam.color_filter);
    formData.append('vgroov', priceParam.vgroov);
    formData.append('cuts_width', priceParam.cuts_width);
    formData.append('cuts_height', priceParam.cuts_height);
    formData.append('BoundWidth', priceParam.BoundWidth);
    formData.append('BoundHeight', priceParam.BoundHeight);
    formData.append('popupMat', '1');
    formData.append('appliedMat', priceParam.appliedMat);
    formData.append('designerMatId', priceParam.designerMatId);
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    if (productCode == 61 || productCode == 69) {
      this.http.post("https://www.arttoframe.com/custom_framing/preview/actions/getPrice.php", formData, {
        // headers: myheader
      }).subscribe((priceResult: any) => {
        var result = priceResult;
        var temp = result.total;
        temp = temp.toFixed(2);
        $("#paylater_message_price").attr("data-pp-amount", temp);
        // $('.price-txt').html('$' + temp);
        this.eventCallback.next(result);
        // $('#shippingDays').html(result.shipping_time);
        self.currentPrice = parseFloat(temp);
        self.priceTempArr = result;
        return self.priceTempArr;
        if (change_item == "hardware") {
          this.http.get<any>("https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getHardwarePriceNg&frame_code=" + priceParam.frame_code + "&mat_id=" + priceParam.mat_id + "&singal_mat=no&item_type=" + priceParam.item_type + "&selected_frame_size=" + priceParam.selected_frame_size + "&mat_color1=" + priceParam.mat_color1 + "&mat_color2=" + priceParam.mat_color2 + "&current_size=" + priceParam.current_size + "&glass=yes&glass_type=" + priceParam.glass_type + "&hardware_id=" + priceParam.hardware_id + "&hardware_type=" + priceParam.hardware_id + "&backing_type=" + priceParam.backing_type + "&diploma_tussel_flag=" + priceParam.diploma_tussel_flag + "&app_name=" + priceParam.app_name + "&dimension=" + priceParam.dimension + "&paper_backing=9&website=2&inside_width=" + parameters.inside_width + "&inside_height=" + parameters.inside_height + "&ng=1").subscribe(res => {
              //   return response
              // });
              // this.getDataService.getHardwarePrice(parameters).subscribe(
              // res => {
              var hardwareDataPrice = JSON.parse(res.data);
              for (var key in hardwareDataPrice) {
                var hardwarePriceDiff = (hardwareDataPrice[ key ] - this.currentPrice).toFixed(2);
                if (parseFloat(hardwarePriceDiff) == 0.00) {
                  hardwarePriceDiff = "$ 0";
                }
                if (parseFloat(hardwarePriceDiff) < 0) {
                  hardwarePriceDiff = hardwarePriceDiff.replace("-", "- $ ");
                } else if (parseFloat(hardwarePriceDiff) > 0) {
                  hardwarePriceDiff = hardwarePriceDiff.replace("", "+ $ ");
                }
                $('.hardwarePrice_' + key).html(hardwarePriceDiff);
                $('#confirmhardware').html("CONFIRM");
                $('#confirmhardware').css('background', '#4DC329');
                $('#confirmhardware').removeClass('disabled');
              }
            });
            change_item = "Default Configuration";
        }
      },
        error => {
        });
    }
    
    else if (productCode == 82 || productCode == 38 || productCode == 79 || productCode == 78 || productCode == 57 || productCode == 80 || productCode == 92) {
      if (priceParam.imgUpload == 0 && (productCode != 57)) {
        // 'frame_code=FRBW26079&mat_id=&singal_mat=no&item_type=no_mat&selected_frame_size=8x10&mat_color1=0&mat_color2=0&current_size=8x10&glass=yes&glass_type=14&hardware_id=3&hardware_type=3&backing_type=1&diploma_tussel_flag=&app_name=frame&dimension=T%3A0.00%2CB%3A0.00%2CL%3A0.00%2CR%3A0.00&paper_backing=9&website=2'
        // variable field added as per logic to get the price for diploma & standard frames if diploma then get_ng_price needed or if SF then show_cost
        let endPoint = ''
        if(priceParam.app_name === 'shadowbox'){
          endPoint = '/frames_floating_shadowbox.php'
        }
        else{
          endPoint = '/get_item_price.php'
        }
        let tassel_backing_type
        tassel_backing_type = priceParam.tassel_backing_type ? "&tassel_backing_type=" + priceParam.tassel_backing_type : ''
        self.http.get("https://www.arttoframe.com" + endPoint + "?frame_code=" + priceParam.frame_code + "&mat_id=" + priceParam.mat_id + "&singal_mat=" + priceParam.singal_mat + "&item_type=" + priceParam.item_type + "&selected_frame_size=" + priceParam.selected_frame_size + "&mat_color1=" + priceParam.mat_color1 + "&mat_color2=" + priceParam.mat_color2 + "&mat_color3=" + priceParam.mat_color3 + "&current_size=" + priceParam.current_size + "&glass=yes&glass_type=" + priceParam.glass_type + "&hardware_id=" + priceParam.hardware_id + "&hardware_type=" + priceParam.hardware_id + "&hardware_two_id=" + priceParam.hardware_two_id + "&backing_type=" + priceParam.backing_type + "&diploma_tussel_flag=" + priceParam.diploma_tussel_flag + "&app_name=" + priceParam.app_name + "&dimension=" + priceParam.dimension + "&paper_backing=9&website=2&ship_product_id=" + priceParam.ship_product_id + tassel_backing_type + "&get_ng_price=1", {
          headers: myheader
        }).subscribe((res: any) => {
          
          var result = res;
          // $('#shippingDays').html(result.shipping_time);
          this.eventCallback.next(result);
          self.priceTempArr = result;
          var temp = result.price;
          temp = parseFloat(temp).toFixed(2);
          $("#paylater_message_price").attr("data-pp-amount", temp);
          // $('.price-txt').html('$' + temp);
          self.currentPrice = temp;
          self.priceTempArr = result;
          // change_item = "hardware";
          if (change_item == "hardware") {

            // this.http.get<any>("https://www.arttoframe.com/custom_framing/preview/actions/gethardwarepriceSB.php?frame_code=" + priceParam.frame_code + "&mat_id=" + priceParam.mat_id + "&singal_mat=no&item_type=" + priceParam.item_type + "&selected_frame_size=" + priceParam.selected_frame_size + "&mat_color1=" + priceParam.mat_color1 + "&mat_color2=" + priceParam.mat_color2 + "&current_size=" + priceParam.current_size + "&glass=yes&glass_type=" + priceParam.glass_type + "&hardware_id=" + priceParam.hardware_id + "&hardware_type=" + priceParam.hardware_id + "&backing_type=" + priceParam.backing_type + "&diploma_tussel_flag=" + priceParam.diploma_tussel_flag + "&app_name=" + priceParam.app_name + "&dimension=" + priceParam.dimension + "&paper_backing=9&website=2&inside_width=" + parameters.inside_width + "&inside_height=" + parameters.inside_height + "&ng=1").subscribe(res => {
            this.http.get<any>("https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getHardwarePriceNg&frame_code=" + priceParam.frame_code + "&mat_id=" + priceParam.mat_id + "&singal_mat=no&item_type=" + priceParam.item_type + "&selected_frame_size=" + priceParam.selected_frame_size + "&mat_color1=" + priceParam.mat_color1 + "&mat_color2=" + priceParam.mat_color2 + "&current_size=" + priceParam.current_size + "&glass=yes&glass_type=" + priceParam.glass_type + "&hardware_id=" + priceParam.hardware_id + "&hardware_type=" + priceParam.hardware_id + "&backing_type=" + priceParam.backing_type + "&diploma_tussel_flag=" + priceParam.diploma_tussel_flag + "&app_name=" + priceParam.app_name + "&dimension=" + priceParam.dimension + "&paper_backing=9&website=2&inside_width=" + parameters.inside_width + "&inside_height=" + parameters.inside_height + "&ng=1").subscribe(res => {
              //   return response
              // });
              // this.getDataService.getHardwarePrice(parameters).subscribe(
              // res => {
              var hardwareDataPrice = JSON.parse(res.data);
              for (var key in hardwareDataPrice) {
                var hardwarePriceDiff = (hardwareDataPrice[ key ] - this.currentPrice).toFixed(2);
                if (parseFloat(hardwarePriceDiff) == 0.00) {
                  hardwarePriceDiff = "$ 0";
                }
                if (parseFloat(hardwarePriceDiff) < 0) {
                  hardwarePriceDiff = hardwarePriceDiff.replace("-", "- $ ");
                } else if (parseFloat(hardwarePriceDiff) > 0) {
                  hardwarePriceDiff = hardwarePriceDiff.replace("", "+ $ ");
                }
                console.log(hardwarePriceDiff)
                $('.hardwarePrice_' + key).html(hardwarePriceDiff);
                $('#confirmhardware').html("CONFIRM");
                $('#confirmhardware').css('background', '#4DC329');
                $('#confirmhardware').removeClass('disabled');
              }
            });
            change_item = "Default Configuration";
          }
        },
          error => {
            // this.WriteToFile(priceParam);
            // var reload = confirm("Please check your internet connection...");
            // if (reload == true || reload == false) {
            //   location.reload(true);
            // }
          });
      }
      else {
        this.http.post("https://www.arttoframe.com/custom_framing/preview/actions/getPrice.php", priceParam, {
          headers: myheader
        }).subscribe((priceResult: any) => {
          var result = priceResult;
          var temp = result.total;
          // $('#shippingDays').html(result.ships_in_days);
          this.eventCallback.next(result);
          temp = temp.toFixed(2);
          $("#paylater_message_price").attr("data-pp-amount", temp);
          // $('.price-txt').html('$' + temp);
          self.currentPrice = parseFloat(temp);
          self.priceTempArr = result;
          if (change_item == "hardware") {
            console.log(parameters)
            if(parameters['wordcutout'] || parameters['letterart']){

            }
            else{
              parameters['printing_type'] = '21';
            }
            
            // delete parameters['wordcutout'];
            // delete parameters['letterart'];
            self.getDataService.getHardwarePrice(parameters).subscribe(
              res => {
                var hardwareDataPrice = JSON.parse(res.data);
                for (var key in hardwareDataPrice) {
                  if(parameters['letterart']){
                    var hardwarePriceDiff = (hardwareDataPrice[ key ] - self.currentPrice - 2.60).toFixed(2);
                  }
                  else{
                    var hardwarePriceDiff = (hardwareDataPrice[ key ] - self.currentPrice).toFixed(2);
                  }
                  
                  if (parseFloat(hardwarePriceDiff) == 0.00) {
                    hardwarePriceDiff = "$ 0";
                  }
                  if (parseFloat(hardwarePriceDiff) < 0) {
                    hardwarePriceDiff = hardwarePriceDiff.replace("-", "- $ ");
                  } else if (parseFloat(hardwarePriceDiff) > 0) {
                    hardwarePriceDiff = hardwarePriceDiff.replace("", "+ $ ");
                  }
                  console.log(hardwarePriceDiff)
                  $('.hardwarePrice_' + key).html(hardwarePriceDiff);
                  $('#confirmhardware').html("CONFIRM");
                  $('#confirmhardware').css('background', '#4DC329');
                  $('#confirmhardware').removeClass('disabled');
                }
              });
            change_item = "Default Configuration";
          }
        },
          error => {
          });
      }


    }
    else if (change_item == "glass") {
      if (productCode == 38 || productCode == 79) {
        self.http.get("https://www.arttoframe.com/getglassitempriceSB.php?frame_code=" + priceParam.frame_code + "&mat_id=" + priceParam.mat_id + "&singal_mat=" + priceParam.singal_mat + "&item_type=" + priceParam.item_type + "&selected_frame_size=" + priceParam.selected_frame_size + "&mat_color1=" + priceParam.mat_color1 + "&mat_color2=" + priceParam.mat_color2 + "&current_size=" + priceParam.current_size + "&glass=yes&glass_type=" + priceParam.glass_type + "&hardware_id=" + priceParam.hardware_id + "&hardware_type=" + priceParam.hardware_id + "&backing_type=" + priceParam.backing_type + "&diploma_tussel_flag=" + priceParam.diploma_tussel_flag + "&app_name=" + priceParam.app_name + "&dimension=" + priceParam.dimension + "&paper_backing=9&website=2&get_ng_price=1", {
          headers: myheader
        }).subscribe((res: any) => {
          onloadGlassArray = res;
          // console.table(this.onloadGlassArray)
          var glassDataPrice = onloadGlassArray;
          for (var key in glassDataPrice) {
            var glassPriceDiff = (glassDataPrice[ key ] - self.currentPrice).toFixed(2);
            if ((parseFloat(glassPriceDiff) == 0)) {
              glassPriceDiff = "$ 0";
            } else {
              glassPriceDiff = glassPriceDiff.replace("-", "- $");
            }
            if ((parseFloat(glassPriceDiff)) > 0) {
              $('.glassPriceDifference_' + key).html("+ $" + glassPriceDiff);
            } else {
              $('.glassPriceDifference_' + key).html("" + glassPriceDiff);
            }
          }
        })
      } else {
        self.getDataService.getGlassPrice(parameters).subscribe(
          res => {
            onloadGlassArray = JSON.parse(res.data);
            // console.table(this.onloadGlassArray)
            var glassDataPrice = onloadGlassArray;
            for (var key in glassDataPrice) {
              var glassPriceDiff = (glassDataPrice[ key ] - self.currentPrice).toFixed(2);
              if ((parseFloat(glassPriceDiff) == 0)) {
                glassPriceDiff = "$ 0";
              } else {
                glassPriceDiff = glassPriceDiff.replace("-", "- $");
              }
              if ((parseFloat(glassPriceDiff)) > 0) {
                $('.glassPriceDifference_' + key).html("+ $" + glassPriceDiff);
              } else {
                $('.glassPriceDifference_' + key).html("" + glassPriceDiff);
              }
            }
          });
      }


      change_item = "Default Configuration";
    }

    if(productCode != 69){
      return self.priceTempArr;
    } 
    
  }

  addtocart(param, svgCanvas, product) {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    var self = this;
    // if (product == "57" || product == 82 || product == "48" || product == "79" || product == 78) {
    if (Number(product) == 57 || Number(product) == 82 || Number(product) == 48 || Number(product) == 79 || Number(product) == 80) {
      let CartUrl = 'https://www.arttoframe.com/custom_framing/preview/actions/addToCart_CF.php';

      if (Number(product) == 80) CartUrl = 'https://www.arttoframe.com/addToCart_insta.php';

      self.http.post(CartUrl, param, {
        headers: myheader
      }).subscribe(response => {
        if (response) {
          self.getSVGToPNG(response, svgCanvas);
          setTimeout(() => {
            $('#AddingToCart_modal').modal('hide');
            $('#AddingToCart_success').modal('show'); 
            // $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[ 1 ])) + 1).toString()))
            $('#cartCntMobile').html((parseFloat($('#cartCntMobile').html()) + 1).toString())
          }, 100);

          var listrack_response = [];
              this.http.get("https://www.arttoframe.com/listrak_cart_abandonment_data_get.php?listrakCartData=1").subscribe((res:any)=>{
                let arrayofkey:any = Object.keys(res); 
                for(let i=0; i<= arrayofkey.length; i++){
                  if(!isNaN(arrayofkey[i])){
                    listrack_response.push(res[i]);
                  }
                }
                var length = listrack_response.length;
                var product_name = "Custom Framing";
      
                (function(d){
                  if(typeof _ltk=="undefined"){
                    if(document.addEventListener)document.addEventListener("ltkAsyncListener",function(){
                      _ltk_util.ready(d)
                    });
                    else{
                      e=document.documentElement;
                      e.ltkAsyncProperty=0;
                      e.attachEvent("onpropertychange",function(e){
                        if(e.propertyName=="ltkAsyncProperty"){
                          _ltk_util.ready(d)
                        }
                      })
                    }
                  }else{
                    _ltk_util.ready(d)
                  }
                })(function(){
                  for(let i = 0; i < length; i++){              
                    _ltk.SCA.AddItemWithLinks(
                      listrack_response[i]['atf_adv_product_sku'],
                      listrack_response[i]['atf_adv_product_qty'],
                      listrack_response[i]['atf_adv_product_price'],
                      product_name,
                      listrack_response[i]['atf_adv_product_image'],
                      window.location.href,
                    );
                  }
                  _ltk.SCA.Total = res['total']['listrak_cart_total']; 
                  _ltk.Activity.AddProductBrowse(res['atf_adv_product_sku']['atf_adv_product_sku']);
                  _ltk.SCA.Submit();
                });
                _ltk.Activity.AddProductAddedToCart(res['atf_adv_product_sku']['atf_adv_product_sku']);
              });

        } else {
          console.log('Something went wrong...');
        }
      },
        error => {
          console.log("POST addToCart error", error);
        });

    }
    else if (product == 61 || product == 5) {
      self.http.post("https://www.arttoframe.com/custom_framing/preview/actions/addToCart_CF.php", param, {
        headers: myheader
      }).subscribe(response => {
        if (response) {
          self.getSVGToPNG(response, svgCanvas);
          // self.WriteToFile("addToCart Request is successful");
          setTimeout(() => {
            $('#AddingToCart_modal').modal('hide');
            $('#AddingToCart_success').modal('show');
            // $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[ 1 ])) + 1).toString()))
            $('#cartCntMobile').html((parseFloat($('#cartCntMobile').html()) + 1).toString());
          }, 100);

          var listrack_response = [];
              this.http.get("https://www.arttoframe.com/listrak_cart_abandonment_data_get.php?listrakCartData=1").subscribe((res:any)=>{
                let arrayofkey:any = Object.keys(res); 
                for(let i=0; i<= arrayofkey.length; i++){
                  if(!isNaN(arrayofkey[i])){
                    listrack_response.push(res[i]);
                  }
                }
                var length = listrack_response.length;
                var product_name = "Custom Framing";
      
                (function(d){
                  if(typeof _ltk=="undefined"){
                    if(document.addEventListener)document.addEventListener("ltkAsyncListener",function(){
                      _ltk_util.ready(d)
                    });
                    else{
                      e=document.documentElement;
                      e.ltkAsyncProperty=0;
                      e.attachEvent("onpropertychange",function(e){
                        if(e.propertyName=="ltkAsyncProperty"){
                          _ltk_util.ready(d)
                        }
                      })
                    }
                  }else{
                    _ltk_util.ready(d)
                  }
                })(function(){
                  for(let i = 0; i < length; i++){              
                    _ltk.SCA.AddItemWithLinks(
                      listrack_response[i]['atf_adv_product_sku'],
                      listrack_response[i]['atf_adv_product_qty'],
                      listrack_response[i]['atf_adv_product_price'],
                      product_name,
                      listrack_response[i]['atf_adv_product_image'],
                      window.location.href,
                    );
                  }
                  _ltk.SCA.Total = res['total']['listrak_cart_total']; 
                  _ltk.Activity.AddProductBrowse(res['atf_adv_product_sku']['atf_adv_product_sku']);
                  _ltk.SCA.Submit();
                });
                _ltk.Activity.AddProductAddedToCart(res['atf_adv_product_sku']['atf_adv_product_sku']);
              });
          // document.location.href = "https://www.arttoframe.com/cart";
        } else {
        }
      },
        error => {
        });
    }
    // else if(product == 38){

    //   this.http.get("https://www.arttoframe.com/cartmanager_search_productpage.php?is_https_site=1&zaius_sku_new=WOM-FRBW26079-8x10&type=wom&singal_mat=no&frame_code="+param.frame_code+"&size="+param.size+"&mat_color_code="+param.mat_color_code+"&mat2_color_code="+param.mat2_color_code+"&mat_cut_id="+param.mat_cut_id+"&glass_type="+param.glass_type+"&hardware_type="+param.hardware_type+"&dimension="+param.dimension+"&backing_type="+param.backing_type+"&orderquantity="+param.orderquantity+"&page_type="+param.page_type+"&diploma_tussel_flag="+param.diploma_tussel_flag+"&frame_type="+param.frame_type, {
    //     headers: myheader
    //   }).subscribe(response => {
    //     this.http.get("https://www.arttoframe.com/custom_framing/preview/actions/getCartId.php?is_https_site=1").subscribe(res => {
    //       })
    //     if (response) {

    //       self.getSVGToPNG(response, svgCanvas);
    //       // self.WriteToFile("addToCart Request is successful");
    //       setTimeout(() => {
    //         $('#AddingToCart_modal').modal('hide');
    //         $('#AddingToCart_success').modal('show');
    //         $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[1])) + 1).toString()))
    //       }, 100);
    //       // document.location.href = "https://www.arttoframe.com/cart";
    //     } else {
    //     }
    //   },
    //     error => {
    //     });
    // }
  }

  public getSVGToPNG(response, svgCanvas) {

    var self = this;
    $(".cartImage, .cartImg2").attr('src', 'https://www.arttoframe.com/custom_framing/order/' + response.orderId + '/preview2.jpg?v=' + new Date().getTime());

    if ($("#fancyCheckbox").parent().find('input:checkbox').is(':checked') == true || $("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {

      // self.getcartCount(response.orderId);
      var resOrderId = response.orderId;
      var SVGEncoded = $("#svgimg").attr('src');
      var svgData = SVGEncoded;

      // let canvas = this.tempCanvas.nativeElement;
      let canvas = svgCanvas;
      let context = canvas.getContext("2d");
      canvas.width = parseFloat($("#svgwd").val());
      canvas.height = parseFloat($("#svght").val());
      context.clearRect(0, 0, canvas.width, canvas.height);
      var image = new Image();
      image.src = svgData;
      image.onload = function () {

        context.drawImage(image, 0, 0);
        var pngData = canvas.toDataURL('image/png');

        const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        let body = new HttpParams();

        body = body.set('orderId[success]', response[ 'success' ]);
        body = body.set('orderId[url]', response[ 'url' ]);
        body = body.set('orderId[condition]', response[ 'condition' ]);
        body = body.set('orderId[userseesionid]', response[ 'userseesionid' ]);
        body = body.set('orderId[xml]', response[ 'xml' ]);
        body = body.set('orderId[orderId]', response[ 'orderId' ]);
        body = body.set('orderId[id]', response[ 'id' ]);
        body = body.set('pngData', pngData);

        self.http.post("https://www.arttoframe.com/custom_framing/preview/actions/getPngfromSvg_demo.php", body, {
          headers: myheader
        }).subscribe((res: any) => {
          if (res.success) {
            $('#AddingToCart_modal').modal('hide');
            $('#AddingToCart_success').modal('show');
            // $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[ 1 ])) + 1).toString()))
            $('#cartCntMobile').html((parseFloat($('#cartCntMobile').html()) + 1).toString());
          } else {
            alert('Something went wrong...');
          }
          $(".cartImage, .cartImg2").attr('src', 'https://www.arttoframe.com/custom_framing/order/' + resOrderId + '/preview2.jpg?' + new Date().getTime());
          // document.location.href = "https://www.arttoframe.com/cart";
        });
      }

    } else {

      $(".cartImage, .cartImg2").attr('src', 'https://www.arttoframe.com/custom_framing/order/' + response.orderId + '/preview2.jpg?' + new Date().getTime());
      // document.location.href = "https://www.arttoframe.com/cart";
      $('#AddingToCart_modal').modal('hide');
      $('#AddingToCart_success').modal('show');
      // $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[ 1 ])) + 1).toString()))
      // $('#cartCntMobile').html((parseFloat($('#cartCntMobile').html()) + 1).toString());
    }
  }

  aspectRatioSizeCalcultionW(opWt, opHt, customWidth, customHeight) {
    var width_to_height_ratio = customWidth / customHeight;

    if (customWidth > customHeight) {
      opHt = opWt / width_to_height_ratio;
      opWt = opHt * width_to_height_ratio;
      if (opWt > opHt) {
        $("#customHeight").val(this.addZeroes(opHt));
      } else {
        $("#customHeight").val(this.addZeroes(opWt));
      }
    }

    if (customWidth < customHeight) {
      opHt = opWt / width_to_height_ratio;

      if (opHt > opWt) {
        $("#customHeight").val(this.addZeroes(opHt));
      } else {
        $("#customHeight").val(this.addZeroes(opWt));
      }

    }
    if (customWidth == customHeight) {
      // opWt = opHt;
      $("#customWidth,#customHeight").val(this.addZeroes(opWt));
      // $("").val(this.addZeroes(opHt));
    }
  }

  aspectRatioSizeCalcultionH(opWt, opHt, customWidth, customHeight) {
    var width_to_height_ratio = customWidth / customHeight;

    if (customWidth > customHeight) {
      opWt = opHt * width_to_height_ratio;
      $("#customWidth").val(this.addZeroes(opWt));
    }

    if (customWidth < customHeight) {
      opWt = opHt * width_to_height_ratio;
      $("#customWidth").val(this.addZeroes(opWt));
    }
    if (customWidth == customHeight) {
      $("#customWidth,#customHeight").val(this.addZeroes(opHt));
    }
  }

  addZeroes(num) {
    var num1 = Number(num);
    if (String(num1).split(".").length < 2 || String(num1).split(".")[ 1 ].length == undefined || String(num1).split(".")[ 1 ].length == null) {
      var num1_str = num1 + "";
      return num1_str;
    } else
      if (String(num1).split(".").length < 2 || String(num1).split(".")[ 1 ].length > 2) {
        var num1_str = String((num1).toFixed(2));
        if (String(num1_str).split(".")[ 1 ] == "00") {
          num1_str = String(num1_str).split(".")[ 0 ];
        }
        return num1_str;
      }
    // Return the number
    return num1;
  }

  getDefaultSwatchImg() {
    var swatchImgPath = "https://cdn.arttoframe.com/products/frames/SwatchSmall/FRBW26074/300.jpg?is_https_site=1";
    return swatchImgPath;
  }

  getFrameSortData(frameSortID, OnloadFrames) {
    if (frameSortID == "ASC") {
      OnloadFrames.sort((a, b) => {
        return parseFloat(a[ 'price_class' ]) - parseFloat(b[ 'price_class' ])
      })
      //  this.showFrames('frames')
      //  $(".bxsliderCF").scrollLeft(0);
      return OnloadFrames;
    }

    if (frameSortID == "DESC") {

      OnloadFrames.sort(function (a, b) {
        return parseFloat(b[ 'price_class' ]) - parseFloat(a[ 'price_class' ])
      });
      //  this.showFrames('frames')
      //  $(".bxsliderCF").scrollLeft(0);
      return OnloadFrames;
    }
  }

  getOpeningSize(e, product) {
    var opening = [];
    e = e.replaceAll(" ", "")
    var arr1 = e.split(';');
    $.each(arr1, function (index, item) {
      var arr2 = item.split(':');
      var arr3 = arr2[ 2 ].split('x');

      var flag = false;
      if (opening.length) {
        $.each(opening, function (index1, item1) {

          if (opening[ index1 ][ 1 ][ 0 ] == arr3[ 0 ] && opening[ index1 ][ 1 ][ 1 ] == arr3[ 1 ]) {
            opening[ index1 ][ 0 ]++;
            flag = true;
            return;
          }

        });
      }
      if (!flag) opening.push([ 1, arr3 ]);

    })

    $.each(opening, function (index, txt) {

      opening[ index ] = "(" + txt[ 0 ] + ") " + txt[ 1 ][ 0 ] + "x" + txt[ 1 ][ 1 ];

    });

    var TempOpening = opening.join(", ");
    var TempOpening2 = TempOpening
    if (TempOpening.length > 10) {
      TempOpening2 = TempOpening.substring(0, 10) + '...';
    }
    var prodNameSize = product + " " + TempOpening2;
    // $('.product-name').html(prodNameSize);
    return TempOpening;
  }

  populate(selector, selected_val, width_to_height_ratio, product) {
    var str = '';
    var myselect = '';
    var minWidthStart = (selector == '#finished_size_recommend' ? 11 : 8);
    if (product = 61) {
      var minWidthStart = (selector == '#finished_size_recommend' ? 11 : 24);
    }
    // var width_to_height_ratio = this.width_to_height_ratio; //1.3049645390070923;// 8/10;
    this.optionctr = 0;
    if (this.optionctr == 0) {
      for (var i = minWidthStart; i <= 40; i++) {
        var w = i;
        var h = w / width_to_height_ratio;
        h = Math.round(h * 1000) / 1000;
        var close_value = Math.round(h);
        var mySize = w + 'x' + close_value;
        var selectedval = selected_val;
        if (selectedval == mySize) {
          myselect = 'selected="selected"';
        } else {
          myselect = '';
        }
        if (close_value >= 8 && selector != '#finished_size_recommend') {
          str += '<option value="' + w + 'x' + close_value + '" ' + myselect + '>' + w + 'x' + close_value + '</option>';
        }

        if (close_value >= 15 && selector == '#finished_size_recommend') {
          str += '<option value="' + w + 'x' + close_value + '" ' + myselect + '>' + w + 'x' + close_value + '</option>';
        }
      } // for

      $(selector).append(str);
      this.optionctr++;
    }
  }

  validateMats(top_mat, mat_width, mat_height, isCollageApplied, isMatOnlyProduct) {
    var self = this;
    var big_mat = 0;
    var medium_mat = 0;
    var small_mat = 0;
    // var mat_width = 0;
    // var mat_height = 0;
    var mat_counter = 0;
    var mat_code;
    var tempMatArray = [];
    var path;
    var isSelectedMatAvailable = 0;
    console.log(top_mat, mat_width, mat_height, isCollageApplied)
    if (top_mat == 61) {
      isSelectedMatAvailable = 1;
      $(".matAvailable").val(1);
    }

    if ($("#nomats").parent().find('input:checkbox').is(':checked') == false && !isCollageApplied) {
      mat_width = mat_width + 4;
      mat_height = mat_height + 4;
    }

    if ((mat_width <= 32 && mat_height <= 40) || (mat_width <= 40 && mat_height <= 32)) {
      small_mat = 1;
    } else if ((mat_width <= 40 && mat_height <= 60) || (mat_width <= 60 && mat_height <= 40)) {
      medium_mat = 1;
    } else if ((mat_width <= 48 && mat_height <= 96) || (mat_width <= 96 && mat_height <= 48)) {
      big_mat = 1;
    }

    // if(isMatOnlyProduct){
    //   $("#isMatOnlyCart").removeClass("disabledContainer");
    // }
    
    setTimeout(() => {
      $("#matfilter li").each(function () {
        if (small_mat == 1) {
          if ($(this).attr('data-size32x40') == '1') {
            mat_code = $(this).attr('data-matCode')
            this.style.display = "";
            tempMatArray.push(mat_code);
            mat_counter++;
            if ($(this).attr('data-matCode') == top_mat) {
              isSelectedMatAvailable = 1;
            }
          } else {
            this.style.display = "none"
          }
        } else if (medium_mat == 1) {
          if ($(this).attr('data-size40x60') == '1') {
            mat_code = $(this).attr('data-matCode')
            this.style.display = "";
            tempMatArray.push(mat_code);
            mat_counter++;
            if ($(this).attr('data-matCode') == top_mat) {
              isSelectedMatAvailable = 1;
            }
          } else {
            this.style.display = "none"
          }
        } else if (big_mat == 1) {
          if ($(this).attr('data-size48x96') == '1') {
            this.style.display = "";
            tempMatArray.push(mat_code);

            mat_counter++;
            if ($(this).attr('data-matCode') == top_mat) {
              isSelectedMatAvailable = 1;
            }
          } else {
            this.style.display = "none"
          }
        }
      });

      if (mat_counter == 0) {
        $('.alert-mat-text').show();
        $('#matfilter,#matButton').hide();
        $(".matAvailable").val(0);
        // if(isMatOnlyProduct){
        //   $("#myModal_maxsize_Mat h4").html(
        //     "Please enter a maximum size of 40 x 60"
        //   );
        //   $("#myModal_maxsize_Mat").modal("toggle");
        //   $("#isMatOnlyCart").addClass("disabledContainer");
        // }
      } else {
        $('.alert-mat-text').hide();
        $('#matfilter,#matButton').show();
        if (isSelectedMatAvailable == 0) {
          $(".matAvailable").val(0);
        } else {
          $(".matAvailable").val(1);
          return true;
        }
        
      }
    }, 10);

    setTimeout(() => {
      var slider_width = $('.bxsliderCFMat').width();
      var start_with = 0;
      var end_with = Math.ceil(parseInt(slider_width) / 75);

      for (var i = start_with; i < end_with; i++) {

        path = $(".bxsliderCFMat #childeMat_33 div #mymat_" + tempMatArray[ i ]).attr('data-src');

        $(".bxsliderCFMat #childeMat_33 div #mymat_" + tempMatArray[ i ]).attr('src', path)
      }

      start_with = end_with;
      $(".bxsliderCFMat").scroll(function () {
        var scroll1 = $(".bxsliderCFMat").scrollLeft()
        end_with = Math.ceil(parseInt(scroll1) / 75) + 5;
        for (var i = start_with; i < end_with; i++) {
          if (!$(".bxsliderCFMat #childeMat_33 div #mymat_" + tempMatArray[ i ]).attr('src')) {
            path = $(".bxsliderCFMat #childeMat_33 div #mymat_" + tempMatArray[ i ]).attr('data-src');

            $(".bxsliderCFMat #childeMat_33 div #mymat_" + tempMatArray[ i ]).attr('src', path)
          }
        }
        start_with = end_with;
      });
    }, 200);
  }

  // validateFrames(matWidth = 2, matHeight = 2, isCollageApplied) {

  //   var current_mat_width = 0;
  //   var current_mat_height = 0;
  //   var counter = 0;
  //   var finishWidth: string | number;
  //   var finishHeigth: string | number;
  //   var frame_code: any;
  //   var frameMaxSize: number[];
  //   var framewidth: any;
  //   var FramelipWidth: any;
  //   var path: any;
  //   var tempFrameArry = [];

  //   if ($("#nomats").parent().find('input:checkbox').is(':checked') == true) {
  //     current_mat_width = parseFloat($("#customWidth").val());
  //     current_mat_height = parseFloat($("#customHeight").val());

  //   } else {
  //     current_mat_width = parseFloat($("#customWidth").val()) + matWidth;
  //     current_mat_height = parseFloat($("#customHeight").val()) + matHeight;

  //   }


  //   $("#frameSlider li").each(function () {
  //     frameMaxSize = $(this).attr('data-maxSize').split("x");
  //     framewidth = parseFloat($(this).attr('data-width'));
  //     FramelipWidth = parseFloat($(this).attr('lip_width'));
  //     if(isCollageApplied){
  //       finishWidth = ((parseInt(framewidth) - parseInt(FramelipWidth)) * 2);
  //       finishHeigth = ((parseInt(framewidth) - parseInt(FramelipWidth)) * 2);
  //     }
  //     else{
  //       finishWidth = current_mat_width + ((parseInt(framewidth) - parseInt(FramelipWidth)) * 2);
  //       finishHeigth = current_mat_height + ((parseInt(framewidth) - parseInt(FramelipWidth)) * 2);
  //     }

  //     if ((finishWidth <= frameMaxSize[ 0 ] && finishHeigth <= frameMaxSize[ 1 ]) || (finishHeigth <= frameMaxSize[ 0 ] && finishWidth <= frameMaxSize[ 1 ])) {
  //       frame_code = $(this).attr('data-FCode')
  //       this.style.display = ""
  //       tempFrameArry.push(frame_code);
  //       counter++;
  //     }
  //     else {
  //       this.style.display = "none"
  //     }
  //   });

  //   setTimeout(() => {
  //     if (counter == 0) {
  //       $('.alert-frame-text').show();
  //       $('#frameSlider').hide();
  //       return false;
  //     } else {
  //       $('.alert-frame-text').hide();
  //       $('#frameSlider').show();
  //     }
  //     $(".bxsliderCF").scrollLeft(0);
  //   }, 100);

  //   setTimeout(() => {
  //     var slider_width = $('.bxsliderCF').width();
  //     var start_with = 0;
  //     var end_with = Math.ceil(parseInt(slider_width) / 127);
  //     for (var i = start_with; i < end_with; i++) {

  //       path = $(".bxsliderCF #childeMat_33 div #myFrame_" + tempFrameArry[ i ]).attr('data-src');

  //       $(".bxsliderCF #childeMat_33 div #myFrame_" + tempFrameArry[ i ]).attr('src', path)

  //     }
  //     start_with = end_with;
  //     $(".bxsliderCF").scroll(function () {
  //       var scroll1 = $(".bxsliderCF").scrollLeft()
  //       end_with = Math.ceil(parseInt(scroll1) / 127) + 3;
  //       for (var i = start_with; i < end_with; i++) {

  //         if (!$(".bxsliderCF #childeMat_33 div #myFrame_" + tempFrameArry[ i ]).attr('src')) {
  //           path = $(".bxsliderCF #childeMat_33 div #myFrame_" + tempFrameArry[ i ]).attr('data-src');

  //           $(".bxsliderCF #childeMat_33 div #myFrame_" + tempFrameArry[ i ]).attr('src', path)
  //         }
  //       }
  //       start_with = end_with;
  //     });
  //   }, 300);
  // }

  public getFrameDataFromDB(code) {
    var baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getFrameDataFromDB&code=" + code;
    return this.http.get(baseUrl)
  }

  public getMatDataFromDB(code) {
    var baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getMatDetailsFromDB&mat_id=" + code;
    return this.http.get(baseUrl)
  }

  trackUploadedImage(Dirr, file_path, isCollage) {
    const formData = new FormData;
    formData.append('directory_id', Dirr);
    formData.append('name_of_place', 'Custom Framing mobile upload image');
    formData.append('file_path', file_path);
    formData.append('setting[isCollageApplied]', isCollage);

    return this.http.post<any>('https://www.arttoframe.com/track_image_upload.php', formData).map(response => {
      return response;
    });
  }

  public getUserReview(data) {
    // var baseUrl = "https://www.arttoframe.com/ng/api/index.php?action=getUserReviews&frame_code=" + data.frameCode + "&type=" + data.item_type;
    // return this.http.post<any>(baseUrl, baseUrl).map(response => {
    //   return response;
    // });

    let baseUrl = "https://www.arttoframe.com/ng/api/index.php";
    const formData = new FormData;
    formData.append('action', 'getUserReviews');
    formData.append('frame_code', data.frameCode);
    formData.append('item_type', data.item_type);
    return this.http.post<any>(baseUrl, formData).map(response => {
      return response;
    });
  }

  public getUserReviewsWithPaging(data: any) {
    // var baseUrl = "https://www.arttoframe.com/ng/api/index.php?action=getUserReviewsWithPaging&frame_code=" + data.frameCode + "&item_type=" + data.item_type + "&page_no=" + data.page_no;
    // return this.http.post<any>(baseUrl, baseUrl).map(response => {
    //   return response;
    // });


    let baseUrl = "https://www.arttoframe.com/ng/api/index.php";
    const formData = new FormData;
    formData.append('action', 'getUserReviewsWithPaging');
    formData.append('frame_code', data.frameCode);
    formData.append('item_type', data.item_type);
    formData.append('page_no', data.page_no);
    return this.http.post<any>(baseUrl, formData).map(response => {
      return response;
    });
  }

  cdn: any = "https://www.arttoframe.com";
  cdn1: any = "https://www.arttoframe.com";
  cdn2: any = "https://www.arttoframe.com";
  cdn3: any = "https://www.arttoframe.com";
  cdn4: any = "https://www.arttoframe.com";
  cdn5: any = "https://www.arttoframe.com";
  cdn6: any = "https://www.arttoframe.com";
  getCdn(){
    this.http.get("https://www.arttoframe.com/global_site_settings_js_ng.php?return_type=json_array").subscribe(res=>{
      this.cdn = 'https://' + res['global_js_CDNurl'];
      this.cdn1 = 'https://' + res['global_js_getCDNurl1'];
      this.cdn2 = 'https://' + res['global_js_getCDNurl2'];
      this.cdn3 = 'https://' + res['global_js_getCDNurl3'];
      this.cdn4 = 'https://' + res['global_js_getCDNurl4'];
      this.cdn5 = 'https://' + res['global_js_getCDNurl5'];
      this.cdn6 = 'https://' + res['global_js_getCDNurl6'];
    })
  }

  testWebP(src) {
    return new Promise(res => {
        const webP = new Image();
        webP.src = src;
        webP.onload = webP.onerror = () => {
            res(webP.height === 2);
        };        
    })
  };

  getWebpImagesAngular(image_url) {
    let url = image_url.replace("https://www.arttoframe.com", "/data/vhosts/arttoframe.com");
    return this.http.get("https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getWebpImagesAngular&image_url="+url).map(response => {
      return response;
    });
  }

  getVgrooveCalculations(vgrooveId,thickVal,imageWidth,imageHeight,matX,matY,matOneId,MatTwoId,MatThreeId) {
    return this.http.get("https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getVgrooveCalculations&vgrooveId="+vgrooveId+"&thickVal="+thickVal+"&imageWidth="+imageWidth+"&imageHeight="+imageHeight+"&matX="+matX+"&matY="+matY+"&matOneId="+matOneId+"&matTwoId="+MatTwoId+"&MatThreeId="+MatThreeId).map(response => {
      return response;
    });
  }

  getCollageOpeningSize(matId) {
    return this.http.get("https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getCollageOpeningSize&matId="+matId).map(response => {
      return response;
    });
  }

  getOvalShape(color1_id,color2_id,dHeight,dWidth,opW,opH,mat) {
    return this.http.get("https://www.arttoframe.com/ng/assets/api/v2/index_demo_20230412.php?action=getOvalShape&color1_id="+color1_id+"&color2_id="+color2_id+"&dHeight="+dHeight+"&dWidth="+dWidth+"&opW="+opW+"&opH="+opH+"&mat="+mat).map(response => {
      return response;
    });
  }

  getMinMaxSizes(prodCode) {
    return this.http.get("https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getMinMaxSizes&prodCode="+prodCode).map(response => {
      return response;
    });
  }
}

