import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  dataService = [];
  baseUrl: string = "";
  myheader: HttpHeaders;

  constructor(private http: HttpClient) { 

    this.myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  }

  // getFramesData() {
  //   this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getFrameDataAngular";
  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }
  // getFrameDataAngularLimit() {
  //   this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getFrameDataAngularLimit";
  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }
  // getMatsData() {
  //   this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getMatDetailsAngular";
  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }

  // getMatDetailsAngularLimit() {
  //   this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getMatDetailsAngularLimit";
  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }

  // getDecorativeMatsData() {
  //   this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getFancyshapeDetailsAngular";
  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }

  // getVgooveDetailsAngular() {
  //   this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getVgooveDetailsAngular";
  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }

  // getCollageDataAngular() {

  //   this.baseUrl = "https://www.arttoframe.com/custom_framing/preview/actions/getMatsNewUI_NG.php?action=openingchoices&openings=2&framecode=FRBW26079&topMat=863&bottomMat=836&matCategory=mats";


  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }
  // getCollageOpeningData(openings) {
  //   if (openings == "") {
  //     openings = 2;
  //   }
  //   this.baseUrl = "https://www.arttoframe.com/custom_framing/preview/actions/getMatsNewUI_NG.php?action=openingchoices&openings=" + openings + "&framecode=FRBW26079&topMat=863&bottomMat=836&matCategory=mats";


  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }
  // getCollageOpeningChildMats(collageData) {

  //   this.baseUrl = "https://www.arttoframe.com/custom_framing/preview/actions/getMatsNewUI_NG.php?action=childmats&openings=" + collageData.openings + "&selectedmatid=" + collageData.id + "&matnum=" + collageData.mat_number + "&matId=" + collageData.id + "&framecode=FRBW26079&topMat=863&bottomMat=836&matCategory=mats";


  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }

  // getGlassDataAngular() {
  //   this.baseUrl = "https://www.arttoframe.com/cfqaapi/v4/index.php?action=getGlassDataAngular";
  //   return this.http.get(this.baseUrl).map(response => {
  //     return response;
  //   });
  // }
  getInfoAngular() {
    this.baseUrl = "https://www.arttoframe.com/cfqaapi/v4/index.php?action=getInfoAngular";
    return this.http.get(this.baseUrl).map(response => {
      return response;
    });
  }
  // getPriceAngular(data) {
  //   this.baseUrl = "https://www.arttoframe.com/cfqaapi/v4/index.php?action=getPrice&url=https%3A%2F%2Fwww.arttoframe.com%2Fprice_calc.php&app_name=customframe&inside_width=" + data.inside_width + "&inside_height=" + data.inside_height + "&opening_size=" + data.opening_size + "&matcode=" + data.matcode + "&topmat_width=" + data.topmat_width + "&bottommat_width=" + data.bottommat_width + "&frame_id=" + data.frame_id + "&current_frame_code=" + data.current_frame_code + "&current_liner_frame_code=&glass=yes&fitting=yes&change_item=" + data.change_item + "&browserInfo=Netscape+-version%3D5&OSInfo=MacOS&thirdparty=0&mat1_id=" + data.mat1_id + "&mat2_id=" + data.mat2_id + "&mat3_id=&printing=yes&glass_type=" + data.glass_type + "&backing_type=2&debug=debug&cut_val=0&color_filter=&printing_type=" + data.printing_type + "&hardware_id=" + data.hardware_id + "&hardware_type=" + data.hardware_id + "&vgroovshapeId=" + data.vgroovshapeId + "&cuts_width=" + data.cuts_width + "&cuts_height=" + data.cuts_height + "&BoundWidth=&BoundHeight=&popupMat=" + data.popupMat + "&appliedMat=&designerMatId=" + data.designerMatId + "&paper_backing=9&website=2&show_cost=1";

  //   return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
  //     return response;
  //   });
  // }

  getLetterArtImages(data, letterArt) {
    this.baseUrl = "https://www.arttoframe.com/custom_framing/preview/actions/getLetterArtImages.php?is_https_site=1&letter_art=" + letterArt + "&letter_art_random=" + data.letter_art_random + "&letter_art_selectedletters=" + data.letter_art_selectedletters + "&matcode=" + data.matcode;

    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }
  getRandomImages(data, letterArt) {

    this.baseUrl = "https://www.arttoframe.com/custom_framing/preview/actions/letterart_characters_ng_demo.php?letter=" + letterArt + "&cut=" + data;
    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }

  getOriginalImg(cut, name_to_use, width, height, matcode) {

    this.baseUrl = "https://www.arttoframe.com/custom_framing/preview/actions/letterart_character_apply_demo.php?cut=" + cut + "&name_to_use=" + name_to_use + "&width=" + width + "&height=" + height + "&matcode=" + matcode;
    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });

  }

  getGlassPrice(data) {
    this.baseUrl = "https://www.arttoframe.com/cfqaapi/v4/index.php?action=getGlassPrice&url=https%3A%2F%2Fwww.arttoframe.com%2Fprice_calc.php&app_name=customframe&inside_width=" + data.inside_width + "&inside_height=" + data.inside_height + "&opening_size=" + data.opening_size + "&matcode=" + data.matcode + "&topmat_width=2.00&bottommat_width=2.00&frame_id=" + data.frame_id + "&current_frame_code=" + data.current_frame_code + "&current_liner_frame_code=&glass=yes&fitting=yes&change_item=" + data.change_item + "&browserInfo=Netscape+-version%3D5&OSInfo=MacOS&thirdparty=0&mat1_id=" + data.mat1_id + "&mat2_id=" + data.mat2_id + "&mat3_id=&printing=yes&glass_type=" + data.glass_type + "&backing_type=2&debug=debug&cut_val=0&color_filter=&printing_type=" + data.printing_type + "&hardware_id=" + data.hardware_id + "&hardware_type=" + data.hardware_id + "&vgroovshapeId=" + data.vgroovshapeId + "&cuts_width=" + data.cuts_width + "&cuts_height=" + data.cuts_height + "&BoundWidth=NaN&BoundHeight=NaN&popupMat=" + data.popupMat + "&appliedMat=&designerMatId=" + data.designerMatId + "&paper_backing=9&website=2&show_cost=1";

    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }

  getHardwarePrice(data) {
    // console.log(data)
    if (data.app_name == "pinpix") {

      this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getHardwarePrice&url=https%3A%2F%2Fwww.arttoframe.com%2Fprice_calc.php&app_name=" + data.app_name + "&inside_width=" + data.inside_width + "&inside_height=" + data.inside_height + "&opening_size=" + data.opening_size + "&frame_id=" + data.frame_id + "&current_frame_code=" + data.current_frame_code + "&current_liner_frame_code=" + data.current_liner_frame_code + "&fitting=" + data.fitting + "&change_item=" + data.change_item + "&browserInfo=Netscape+-version%3D5&OSInfo=Linux&thirdparty=" + data.thirdparty + "&mat3_id=" + data.mat3_id + "&backing_type=" + data.backing_type + "&debug=" + data.debug + "&color_filter=&hardware_id=" + data.hardware_id + "&hardware_type=" + data.hardware_id + "&vgroovshapeId=" + data.vgroovshapeId + "&BoundWidth=" + data.BoundWidth + "&BoundHeight=" + data.BoundHeight + "&popupMat=" + data.popupMat + "&appliedMat=&designerMatId=&paper_backing=" + data.paper_backing + "&pinpix_type=" + data.pinpix_type + "&glass_type=&show_cost=1";
      return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
        return response;
      });
    }
    else {
      this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getHardwarePriceNg&url=https%3A%2F%2Fwww.arttoframe.com%2Fprice_calc.php&app_name=customframe&inside_width=" + data.inside_width + "&inside_height=" + data.inside_height + "&opening_size=" + data.opening_size + "&matcode=" + data.matcode + "&topmat_width=2.00&bottommat_width=2.00&frame_id=" + data.frame_id + "&current_frame_code=" + data.current_frame_code + "&current_liner_frame_code=&glass=yes&fitting=yes&change_item=" + data.change_item + "&browserInfo=Netscape+-version%3D5&OSInfo=MacOS&thirdparty=0&mat1_id=" + data.mat1_id + "&mat2_id=" + data.mat2_id + "&mat3_id=&printing=yes&glass_type=" + data.glass_type + "&backing_type=2&debug=debug&cut_val=0&color_filter=&printing_type=" + data.printing_type + "&hardware_id=" + data.hardware_id + "&hardware_type=" + data.hardware_id + "&vgroovshapeId=" + data.vgroov + "&cuts_width=" + data.cuts_width + "&cuts_height=" + data.cuts_height + "&BoundWidth=10.175&BoundHeight=12.175&popupMat=" + data.popupMat + "&appliedMat=&designerMatId=" + data.designerMatId + "&paper_backing=9&website=2&show_cost=1&pod=" + data.podData;
      return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
        return response;
      });
    }
  }


  getHardware() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getHardwarePrice";
    return this.http.get(this.baseUrl).map(response => {
      return response;
    });
  }

  // addLog(log, userId) {
    // this.baseUrl = "https://www.arttoframe.com/demo_custom_framing_ng/Angular_userLog.php?log=" + log + "&userId=" + userId;
    // return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
    //   return response;
    // });
  // }

  /* getDiscountImage() {
    this.baseUrl = "https://www.arttoframe.com/cfqaapi/v4/index.php?action=getDiscountImage";
    return this.http.get(this.baseUrl).map(response => {
      return response;
    });
  } */
  getLetterartImageData(imagePath, width, height, filterData) {
    this.baseUrl = "https://www.arttoframe.com/custom_framing/preview/actions/getImageData.php?url=" + imagePath + "&rotate=&filter=" + filterData + "&width=" + width + "&height=" + height + "&isResize=true&isLetterArt=true&is_atf_cf=1";
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }
  addimgLog(cut, img) {
    // this.baseUrl = "https://www.arttoframe.com/demo_custom_framing_ng/assets/Image_path.php?cfcut_" + cut + "=" + cut + "&imgePath=" + img;
    this.baseUrl = "https://www.arttoframe.com/custom_framing_ng/assets/Image_path.php?cfcut_" + cut + "=" + cut + "&imgePath=" + img;
    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }
  getWordcoutShape(parameters, letter) {
    this.baseUrl = "https://www.arttoframe.com/custom_framing/preview/actions/getInfoV1_mobile_dev_demo.php?is_https_site=1&reset_zoom=0&isFromProdPage=false&pinpix_height=undefined&popup_top_width=2.00&popup_bottom_width=2.00&popup_left_width=2.00&popup_right_width=2.00&wordcutout=" + letter + "&orderId=&product_type=57&app=custom_framing&current_width=8&current_height=10&debugV4=0&productConfig=&matcode=custom&myrotate=0&image_type=&pat_img_id=&textmattext-handler=&tmpfcode=3926&framecode=FRBW26079&time=1575977099059&empty=1&minimizeframe=1&ppi=72&set_top_mat=1&set_bottom_mat=1&set_third_mat=1&third_mat_status=1&mat-width=2.00&color1id=61&color2id=89&color2id=89";
    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }
  getWordcoutCuts(letter) {
    this.baseUrl = "https://www.arttoframe.com/cfqaapi/v4/index.php?action=getWordCutsData&wordCut=" + letter;
    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }
  getInstaShape(){
    this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getInstagramShapes";
    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }
  getMatDetailsFromDB(mat_id){
    this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getMatDetailsFromDB&mat_id=" + mat_id;
    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }

  getDiplomaSizesFromDB(mat_id, type){
    this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getDiplomaSizesFromDB&mat_id=" + mat_id + type;
    return this.http.post<any>(this.baseUrl, this.baseUrl).map(response => {
      return response;
    });
  }
  getCartBtnStatus() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php";
    const formData = new FormData;
    formData.append('action', 'getCartBtnStatus');
    return this.http.post<any>(this.baseUrl, formData).map(response => {
      return response;
    });
  }


  public getImageSizesForLetterart(opening) {
    this.baseUrl = "https://www.arttoframe.com/cfqaapi/v4/index.php";
    const formData = new FormData;
    formData.append('action', 'getSizesforLetterArt');
    formData.append('opening', opening);
    return this.http.post<any>(this.baseUrl, formData).map(response => {
      return response;
    });
  }

  getFilterFrameData(frameColor, width, height, currentFrameId) {
    this.baseUrl = "https://www.arttoframe.com/pictureframe_item_frame_thumbs_new.php?action=filter_frames&page_no=1&searchText=&color=" + frameColor + "&material=&price=&width=&mobileVersion=2&size1=" + width + "&size2=" + height + "&diploma=&current_frame_id=" + currentFrameId;
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }

  getFilterMatData(topmatid, width, height, bottommatid, matColor) {
    this.baseUrl = "https://www.arttoframe.com/product_mat_filter_optimized.php";
    const formData = new FormData;
    formData.append('mat_color', matColor);
    formData.append('mat_type', "no_mat_type");
    formData.append('mat_height', height);
    formData.append('top', topmatid);
    formData.append('bottom_bottomCode', bottommatid);
    formData.append('mat_width', width);
    formData.append('out_of_stock', "in_stock");
    formData.append('matPos', "topbottom");
    return this.http.post<any>(this.baseUrl, formData).map((response) => {
      return response;
    });
  }

  getFilterMatDataJSON() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/Json/getMatDetailsAngular.json";
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }

  getFilterGlassDataJSON() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/Json/getGlassData.json";
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }

  getSearchLabel(frameCode) {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getSearchLabels&frame_code=" + frameCode;
    return this.http.get(this.baseUrl).map(response => {
      return response;
    });
  }

  getPaperTypes() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getPrintingPaper";
    return this.http.get(this.baseUrl).map(response => {
      return response;
    });
  }

  getFilterMatColorsJSON() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/Json/getMatFilterColors.json";
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }

  getCollageOpeningJSON() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/Json/collage_opening.json";
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }

  getFancyShapeJSON() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/Json/getDecorativeMatDetailsAngular.json";
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }

  getVgrooveJSON() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/Json/getVgooveDetailsAngular.json";
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }

  getHardwareJSON() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/Json/getHardware.json";
    return this.http.get(this.baseUrl).map((response) => {
      return response;
    });
  }

  getParentIdFromHardware() {
    this.baseUrl = "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getParentIdFromHardware";
    return this.http.get(this.baseUrl).map(response => {
      return response;
    });
  }
}



