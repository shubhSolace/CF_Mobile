import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {GetDataService} from "../services/index";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "angularfire2/storage";
import {Observable} from "rxjs/Observable";
import {finalize} from "rxjs/operators";
import {HelperService} from "../services/helper.service";
import {DomSanitizer, Title} from "@angular/platform-browser";
import {NgxCarousel} from "ngx-carousel";
import "rxjs/add/operator/map";
import { literalMap } from "@angular/compiler/src/output/output_ast";

declare var _ltk:any;
declare var _ltk_util:any;
declare var e:any;

// import Frame from "../../assets/Frame.json";
// import MatDetails from "../../assets/MatDetails.json";

declare var gtag, $, paypal: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ],
  providers: [ GetDataService ],
})
export class HomeComponent implements OnInit {
  disabledAddToCart : boolean;
  uploadState: Observable<string>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  rectW: number = 400;
  rectH: number = 400;
  rectColor: string = "#FF00F0";
  ctx: CanvasRenderingContext2D;
  @ViewChild("framecanvas") framecanvas;
  @ViewChild("framecanvas1") framecanvas1;
  ctxSwatch: CanvasRenderingContext2D;
  @ViewChild("swatchCanvas") swatchCanvas;
  @ViewChild("swatchCanvas1") swatchCanvas1;
  ctxTempCanvas: CanvasRenderingContext2D;
  @ViewChild("tempCanvas") tempCanvas;
  @ViewChild("tempCanvas1") tempCanvas1;
  innerLayerCtx: CanvasRenderingContext2D;
  @ViewChild("innerlayerCanvas") innerlayerCanvas;
  @ViewChild("innerlayerCanvas1") innerlayerCanvas1;
  imageLayerCtx: CanvasRenderingContext2D;
  @ViewChild("imagelayercanvas") imagelayercanvas;
  @ViewChild("imagelayercanvas1") imagelayercanvas1;
  popupMatCtx: CanvasRenderingContext2D;
  @ViewChild("popupmatcanvas") popupmatcanvas;
  @ViewChild("popupmatcanvas1") popupmatcanvas1;
  vGrooveCtx: CanvasRenderingContext2D;
  @ViewChild("groovecanvas") groovecanvas;
  @ViewChild("groovecanvas1") groovecanvas1;
  public carouselBannerItems: Array<any>;
  public carouselBanner: NgxCarousel;
  selectedOpening : any = "2";
  instaFrame: boolean = false;
  curruntSize: string = '8x10';
  matWidth: any;
  selectOpening: any;
  gInfoArr: any;
  rotationVal: any;
  rotateFlag: any;
  width_to_height_ratio: any;
  cropped_width: any;
  cropped_height: any;
  cropped_x: any;
  cropped_y: any;
  matFilter: any = '';
  hardwareID: any;
  frameFilter: any = [];
  frameFilterID: any = '';
  frameSortID: any = '';
  matFilterID: any = '';
  customWidth: any;
  customHeight: any;
  activeTab: any = '';
  image = this.Helper.cdn6 + "/products/frames/SwatchSmall/RFB-150-TOB/100.jpg";
  res: any;
  dataConfifArray: any;
  frameCanvas: any = '';
  frameURL: any;
  matURL: any;
  desktopVersion: any = '';
  settingData: any;
  linethick: any;
  imgNaturalWidth: any;
  imgNaturalHeight: any;
  swatchImgPath: any;
  EXIF: any = '';
  defaultParamObj: any = '';
  isCustomFraming: any = '';
  isMobile: any;
  top_mat: any = 61;
  selected_mat: any;
  height1: any;
  width1: any;
  isRequestGetInfo: any;
  frameLoadCount: any;
  previewWidth: any;
  configuration: any;
  editPopupChangedWidth: any = '';
  editPopupChangedHeight: any = '';
  priceParameters: any = '';
  customFramingPricePara: any = '';
  scale: any;
  frameOverScale: any;
  popupScale: any;
  selectedCut: any;
  selectedCutDetails;
  selectedCutShape;
  preview_max_height: any = '';
  lib: any;
  cutImageUploaded: any;
  hasCustomShape: any;
  baseUrl: any = '';
  hostname: any = '';
  thumb_path: any = '';
  mydrop: any;
  max_size: any;
  bottom_mat: any = '';
  third_mat: any;
  setBottomMat: any;
  loadCounter: any;
  optionctr: any;
  mega_pixel: any;
  noMat: any = '';
  collage_dm: any;
  isUploadFromPopup: any;
  url_width_height: any;
  uploaded_image_width: any = '';
  uploaded_image_height: any = '';
  imageUploadTool: any = '';
  textmat: any;
  intOffset: any;
  tempFrames: any = '';
  frameSeeMore: any;
  lastViewedProducts: any;
  configurationUrl: any = '';
  curr_mat1_id: any = '';
  prev_mat1_id: any = '';
  change_item: any;
  customsize_with_validation: any;
  customsize_height_validation: any;
  isSafari: any;
  windowHeight: any;
  windowWidth: any;
  firstPageLoad: any;
  currentCut: any;
  define_width: any = '';
  define_height: any = '';
  current_img_width: any;
  current_img_height: any;
  containerWidthV2: any;
  containerHeightV2: any;
  cntLoadMultilpeImg: any;
  is_standard_size: any = '';
  toolPanelPopup: any = '';
  singlePopupMatImg: any = '';
  selectedVgroove: any = '';
  singleDesignMap: any = '';
  multipleDesignMap: any = '';
  prevMatCode: any;
  showRecordsV4: any;
  objTmpFrame: any = '';
  variant_width: any;
  variant_height: any;
  mouseOverFrameCode: any = '';
  mouseOverLinerFrameCode: any = '';
  third_mat_click_count: any;
  botttom_mat_click_count: any;
  lowMatWidth: any;
  priceUpdate: any;
  ptype: any;
  browserName: any = '';
  fullVersion: any = '';
  browserInfo: any = '';
  timer: any;
  isIntervalSet: any;
  isSelectedCut: any;
  isOpeningChange: any;
  cartRedirectUrl: any = '';
  imgWidth: any;
  imgHeight: any;
  newWidth: any;
  newHeight: any;
  newX: any;
  newY: any;
  croppedImageScale: any;
  cropX: any = '';
  cropY: any = '';
  cropWt: any = '';
  cropHt: any = '';
  cropSelection: any;
  isCropped: any;
  newScale: any;
  previewHeight: any = '';
  changedMatCode: any = '';
  previousGlassSizes: any;
  cartImgArr: any;
  previewImgArr: any;
  currentFrameSize: any;
  newFrameSize: any;
  frameSizeDifference: any;
  newLinerFrameSize: any;
  currentLinerFrameSize: any;
  vgrooveClickActive: any;
  vGrooveCnt: any;
  isColorFilterApplied: any;
  activeFrameName: any = '';
  currentPrice: any = '';
  priceTempArr: any;
  OSInfo: any;
  isCheckMatBySize: any;
  isAlreadyRequested: any;
  isPageLoadFromLanding: any;
  isPageLoad: any;
  configImageDataUrl: any;
  editPopupImageDataUrl: any;
  collageOpenings: any;
  imageArr: any;
  currentFilterImg: any = '';
  bottomPersonalizeCanvasWidth: any = '';
  topPersonalizeCanvasWidth: any = '';
  previousChildMat: any = '';
  previousOpening: any = '';
  isImageOnLoad: any;
  isCutImageSelected: any;
  isMainCanvasChange: any;
  isInnerLayerChange: any;
  isImageLayerChange: any;
  bar: any;
  personalize: any;
  cutMetrics: any = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  };
  matWidthArr: any = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0,
  };
  getInfo_dev_file_name: any;
  canvasWidth: any = '';
  canvasHeight: any = '';
  frameWidth: any = '';
  linerFrameWidth: any = '';
  getImage_file_name: any = '';
  close_value: any = '';
  isPageLoadFrames: any;
  swatchResizedImg: any;
  linerSwatchResizedImg: any = '';
  swatchLinerImg: any = '';
  frameLinerResults: any;
  isCallLinerFrameV4: any;
  innerLayerCanvas: any;
  imageLayerCanvas: any = '';
  grooveCanvas: any = '';
  grooveCtx: any = '';
  frameResults: any;
  isCallFrameV4: any;
  color_dropdown: any = '';
  selectedMat: any;
  canvasMatScale: any;
  canvasSecondMatScale: any;
  imgPosition: any;
  popupMatArr: any;
  vgroovConfigArr: any;
  popupMatStringTopCodeArraytmp: any;
  popupMatStringBottomCodeArraytmp: any;
  vgroovShapeCodesArray: any;
  popupMatStringCode: any = '';
  popupMatStringTopCode: any = '';
  popupMatStringBottomCode: any = '';
  mainImageUrl: any = '';
  cutSize: any;
  canvasThirdMatScale: any;
  canvasImageScales: any;
  cuts: any;
  canvasSecondMatScaleCollage: any;
  matcode: any;
  openingsizes: any;
  matCategory: any;
  clickedMatCategory: any;
  lastMatSelection: any;
  openingCuts: any;
  clearSliderInterval: any = '';
  isFrameFilter4: any;
  useCacheImg: any;
  cacheImages: any;
  cacheShapeImages: any;
  bottomPersonalizeTxtScale: any;
  topPersonalizeTxtScale: any;
  isEditLinkClick: any;
  isBottomPersonalizationSet: any;
  isTopPersonalizationSet: any;
  isHoverTopMat: any;
  hoverTopMatColor: any = '';
  isHoverBottomMat: any;
  isHoverThirdMat: any;
  isCollageApplied: any;
  isMatChange: any;
  previewUrl: any = '';
  isUndoChanges: any;
  submittedFileToUpload: any;
  completedUploadedFile: any;
  multipleUploadedImagesArr: any;
  editPopupConfigurationArr: any;
  editPopupConfiguration: any;
  undoChangesStack: any;
  selectedColor2: any = '';
  selectedColor3: any = '';
  bottomPersonalizeCanvas: any;
  bottomPersonalizeCanvasCtx: any;
  topPersonalizeCanvas: any;
  topPersonalizeCanvasCtx: any;
  activeFrameLipWidth: any = '';
  activeFrameId: any;
  activeFramePrice: any = '';
  activeFrameTimeFactor: any = '';
  activeFrameWidth: any;
  activeFrameWidth1: any;
  defaultImages: any = '';
  selectedGlassVal: any;
  onLoadGlassFlag: any;
  cropFlagOpening: any;
  frameLoadFlag: any;
  patternLoadsData: any;
  previewWidthMax: any;
  frameCode: any;
  preview: any;
  framewidth: any = '';
  frameheight: any = '';
  framewidth1: any = '';
  frameheight1: any = '';
  isUploadInProgress: any = 0;
  public frameModal: boolean = false;
  datarr: any;
  dataMatsArray : any = [];
  decorativeMats : any = [];
  vgrooveArr : any = [];
  collageArr: any;
  collageChlidMatArr: any;
  getInfoArr: any;
  glassArr: any;
  custom_Framing: any;
  hardwareData: any;
  ppi: any;
  imageUploadStatus: any;
  imgResponseData: any = '';
  clickedCutId: any;
  productPageRoute: {productName: string};
  bottomMatId: any;
  bottomMatCode:any;
  thirdMatId: any;
  thirdMatCode:any;
  topMatId: any;
  topMatCode:any;
  onPageload: any;
  productCode: any;
  isMatTopSelected: any;
  isMatBottomSelected: any;
  randomUserId: any;
  frameMaxWidth: any = 32;
  frameMaxHeight: any = 42;
  frameMaxSizeStyle: any;
  offerImgData: any;
  offerImagePath: any = '';
  bestSellerDiv: any;
  maxFrameSize: any = '';
  tempSelectedGlassArray: any;
  changeGlassManually: any;
  LodedFrames: any;
  isLodedMats: any;
  framesData: any = [];
  OnloadFrames: any;
  isFrameMatChanged: any;
  DataUrl: any;
  ImgOriantation: any = '';
  frameNote: any = '';
  onloadGlassArray: any;
  frameMaterial: any;
  displayAfterUpload: any;
  collage_finish_size: any;
  collage_mat_number: any;
  collageOpeningsInfo: any = '';
  CollageOpeningJson: any;
  DecorativeMatsData: any;
  VgooveDetails: any;
  MatDetails: any;
  collageChlidMatArrTemp: any;
  cropflagOnrotation: any;
  srcOrientation: any;
  collageImageArray: any;
  collageCropPositionArray: any;
  collageimageImageSizes: any;
  collageOriginalSizeArray: any;
  pixelPerinch: any;
  boundWidth: any;
  boundHeight: any;
  pod_image_id: any;
  podFlag: any;
  collage_Opening_Image_Array: any;
  onimageload: any;
  keepRatio: any;
  isSwap: any;
  tempHardwareArray: any;
  changeHardwareManually: any;
  artistName: any = '';
  imgUpload: any;
  TopMatTitle: string;
  BottomMatTitle: string = '';
  framesImageArry: any;
  oldTopmat: any;
  oldBottommat: any;
  pos_bottom: any;
  pos_right: any;
  pos_left: any;
  pos_top: any;
  totalMatHeight: number;
  totalMatWidth: number;
  totalMatHeight1: number;
  totalMatWidth1: number;
  discontinuedFrame: boolean = true;
  showReview: boolean = false;
  totalReviews: any = null;
  reviewList: any[];
  basedOnTotalReviews: any = null;
  reviewPage: number = 1;
  shippingDays: any;
  reviewLoadButton: number = 1;
  totalPrice: any;
  endOfReviews: any = false;
  loader: boolean = false;
  fromRounting: boolean = false;
  mat_orders_id: any;
  corner_angle_img: any;
  corner_img: any;
  corner_profile_img: any;
  lifestyle_head_on_img: any;
  lifestyle_inside_corner_img: any;
  lifestyle_lifestyle_original_img: any;
  lifestyle_outside_corner_img: any;
  lifestyle_square_img: any;
  lifestyle_with_hand_img: any;
  main_image_img: any;
  HardwareImg: string = this.Helper.cdn1 + "/products/hardware/wire_small.jpg";
  glazeSliderImage: string = this.Helper.cdn2 + "/products/glaze/new/small/14.png?v=23";
  instaShapeData: any;
  instActiveShape: number;
  paperId: number = null;
  smallSize: any;
  mediumSize: any;
  largeSize: any;
  extraLargeSize: any;
  wordShapeCollage: boolean = false;
  backing_type: number = null;
  discontinuedBtn: boolean = false;
  outOfStockBtn: boolean = false;
  printImage: boolean = false;
  photoPrintCheck: boolean = true;
  fromCartImgConfirmation: boolean = false;
  oversizedItem: boolean = false;
  productDescription: string;
  frameName: any;
  finishedSize: any;
  topMat: string;
  bottomMat: string;
  glassName: string;
  openingSize: any;
  productName: any;
  range: any = document.getElementsByClassName("range");
  thumb: any = document.getElementsByClassName("thumb");
  track: any = document.getElementsByClassName("track-inner");
  thumbLeft: any;
  selectedMatWidth: any = 2;
  advanceModeMatWidthValue: string = '10';
  urlGlassType: any;
  isFloating: boolean = false;
  selectedMatType: any = '';
  notSelectedFrame = [];
  isFrameSelected: boolean = true;
  productSubType: any;
  product_bullet_points: any = [];
  glassBullet: any;
  hardwareBullet: any;
  speciesBullet: any;
  framewidthBullet: any;
  isProductDesc: boolean;
  frameColor: any;
  frameRabbit: any;
  frameLipWidth: any;
  frameidBullet: any;
  framecolorBullet: any;
  framenameBullet: any;
  finishBullet: any;
  openingBullet: any;
  frameSpecies: any;
  isMatOnlyProduct: boolean;
  isSingleMat: boolean;
  isMatTrippleSelected: any;
  tripple_mat: any = '';
  TrippleMatTitle: any = '';
  isAdvancedMode: boolean;
  ismatpopup: boolean;
  isVgrooveId: any;
  isDeploma: boolean;
  isPhotoOpening: boolean;
  isTusselOpening: boolean;
  diplomaSizes: any = [];
  imageSizes: any = [];
  openingSizesForTitle: any;
  priceCallReduceAtInit: number = 0;
  priceCallReduceForCollageAtInit: number = 0;
  isManageNoMat: number;
  isWordCutOut: boolean = false;
  isLetterArt: boolean = false;
  @ViewChild("swatchResizedImg") swatchResized;
  base64Image: any;
  change_item_for_hardware: boolean = false;
  maxFinishedSize: any;
  @ViewChild("frameWithNoPrintCanvas") frameWithNoPrintCanvas;
  @ViewChild("printImgFrameCanvas") printImgFrameCanvas;
  @ViewChild("printImgBottomCanvas") printImgBottomCanvas;
  @ViewChild("printImgImageCanvas") printImgImageCanvas;
  @ViewChild("printpopupmatCanvas") printpopupmatCanvas;
  @ViewChild("printGrooveCanvas") printGrooveCanvas;
  paperTypes: any = [];
  isHardwarePrice: boolean;
  idHardwareChanged: boolean;
  isMatTabs: boolean;
  selectedHardwareId: any;
  parentHardwareData: any;
  parentHardwareId: any;
  collageOpeningsArray: string[];
  changeGlass: boolean;
  isFrameChanged: boolean;
  isFrameChanged1: boolean;
  isFloatingFrame: boolean;
  cx: any;
  cy: any;
  rx: any;
  ry: any;
  isTopMatColorApplicable: boolean;
  isBottomMatColorApplicable: boolean;
  isThirdMatColorApplicable: boolean;
  sizeText: any;
  constructor(
    private afStorage: AngularFireStorage,
    private route: ActivatedRoute,
    private router: Router,
    private getDataService: GetDataService,
    private http: HttpClient,
    public Helper: HelperService,
    private title: Title,
    private sanitizer:DomSanitizer,
    private cdref: ChangeDetectorRef,
    private el:ElementRef
  ) {
    this.priceCallReduceAtInit = 1
    this.priceCallReduceForCollageAtInit = 1
  }

  matRange(event){
    this.updateSlider(event.target.value)
  }

  cancleMatWidth(){
    this.isAdvancedMode = false;
    this.showMats("mats");
  }

  matRangeBlur(event){
    console.log(event.target.value);
    this.getMatPositions();  
  }

  updateSlider(value){
    this.advanceModeMatWidthValue = value;
    this.thumbLeft = value + '%'
    let matWidth;
    if(value === '0'){
      matWidth = 1;
    }
    else if(value === '10'){
      matWidth = 2;
    }
    else if(value === '20'){
      matWidth = 3;
    }
    else if(value === '30'){
      matWidth = 4;
    }
    else if(value === '40'){
      matWidth = 5;
    }
    else if(value === '50'){
      matWidth = 6;
    }
    else if(value === '60'){
      matWidth = 7;
    }
    else if(value === '70'){
      matWidth = 8;
    }
    else if(value === '80'){
      matWidth = 9;
    }
    else if(value === '100'){
      matWidth = 10;
    }
    if(value === '5'){
      matWidth = 1.5;
    }
    else if(value === '15'){
      matWidth = 2.5;
    }
    else if(value === '25'){
      matWidth = 3.5;
    }
    else if(value === '35'){
      matWidth = 4.5;
    }
    else if(value === '45'){
      matWidth = 5.5;
    }
    else if(value === '55'){
      matWidth = 6.5;
    }
    else if(value === '65'){
      matWidth = 7.5;
    }
    else if(value === '75'){
      matWidth = 8.5;
    }
    else if(value === '85'){
      matWidth = 9.5;
    }
    else if(value === '95'){
      matWidth = 9.5;
    }
    this.selectedMatWidth = matWidth;  
  }

  changeTopMatWidth(){
    this.advanceModeMatWidthValue = '';
    this.validateMatPositionsTop();
    this.getMatPositions(); 
  }

  validateMatPositionsTop() {
    if((this.pos_top < 1 || this.pos_top > 10) && this.pos_top != null){
      alert('Please enter value greater or equal to 1 and less than 10');
      this.pos_top = 2;
    }
  }

  changeBottomMatWidth(){
    this.advanceModeMatWidthValue = '';
    this.validateMatPositionsBottom();
    this.getMatPositions(); 
  }

  validateMatPositionsBottom() {
    if((this.pos_bottom < 1 || this.pos_bottom > 10) && this.pos_bottom != null){
      alert('Please enter value greater or equal to 1 and less than 10');
      this.pos_bottom = 2;
    }
  }

  changeLeftMatWidth(){
    this.advanceModeMatWidthValue = '';
    this.validateMatPositionsLeft();
    this.getMatPositions(); 
  }

  validateMatPositionsLeft() {
    if((this.pos_left < 1 || this.pos_left > 10) && this.pos_left != null){
      alert('Please enter value greater or equal to 1 and less than 10');
      this.pos_left = 2;
    }
  }

  changeRightMatWidth(){
    this.advanceModeMatWidthValue = '';
    this.validateMatPositionsRight();
    this.getMatPositions(); 
  }

  validateMatPositionsRight() {
    if((this.pos_right < 1 || this.pos_right > 10) && this.pos_right != null){
      alert('Please enter value greater or equal to 1 and less than 10');
      this.pos_right = 2;
    }
  }

  ngAfterViewInit() {
    if(!this.isWordCutOut && !this.isLetterArt){
      $("#customWidth").val(parseFloat(this.customWidth));
    $("#customHeight").val(parseFloat(this.customHeight));
    this.isManageNoMat = 0
    console.log("Arrange 1")
    if (!this.wordShapeCollage) this.arrange();
    this.cdref.detectChanges();
    }
  }

  ngOnInit() {
    localStorage.setItem('previousUrl', document.referrer);
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 4px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            left: 0;
            box-sizing: border-box;
            z-index: 21;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            border: 0.5px solid #808284;
            padding: 3px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: #808284;
              border: 0.5px solid #808284;              
          }
        `,
      },
      interval: 4000,
      load: 1,
      loop: false,
      custom: "banner",
      touch: true,
    };
    if (window.location.origin == "http://localhost:4200") {
      this.defaultParamObj = this.route.queryParams.subscribe(
        (params: Params) => {
          localStorage.setItem("defaultParam", JSON.stringify(params));
        }
      );
    }
    // var tempGlassData = JSON.parse(localStorage.getItem("glass"));
    // this.glassArr = tempGlassData;
    this.productPageRoute = {
      productName: this.route.snapshot.params[ "productName" ],
    };
    this.ppi = 72;
    this.matWidth = 2;
    this.totalMatWidth = 2;
    this.totalMatHeight = 2;
    this.selectOpening = 0;
    this.frameCanvas = $("#framecanvas");
    this.frameCode = "FRBW26079";
    this.width_to_height_ratio = 0;
    this.cropped_width = 100;
    this.cropped_height = 150;
    this.cropped_x = 0;
    this.cropped_y = 0;
    this.frameURL = this.Helper.cdn1 + "/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg"; // '/assets/cherry.jpg'; //"https://www.arttoframe.com/products/frames/SwatchSmall/"+this.frameCode+"/72.jpg?is_https_site=1";
    this.matURL = 61;
    this.hardwareID = 3;
    this.frameFilter = [];
    this.preview = $("#preview");
    this.linethick = 0.25;
    this.imgNaturalWidth = 0;
    this.imgNaturalHeight = 0;
    this.settingData = 57; //options.settingData;
    this.isMobile = false;
    this.top_mat = '61';
    this.selected_mat = 61;
    $(".ngxcarousel").css("width", $(window).width());
    this.height1 = $(window).height();
    this.width1 = $(window).width();
    this.isRequestGetInfo = false;
    this.frameLoadCount = 0;
    this.previewWidth = 0;
    this.configuration = {};
    this.scale = 1;
    this.frameOverScale = 1;
    this.popupScale = 1;
    this.selectedCut = -1;
    this.selectedCutDetails;
    this.selectedCutShape;
    this.previewWidthMax = 950;
    this.lib = "/product_images/lib/";
    this.cutImageUploaded = false;
    this.hasCustomShape = false;
    this.mydrop = 1;
    this.max_size = 40;
    this.setBottomMat = 1;
    this.loadCounter = 0;
    this.optionctr = 0;
    this.mega_pixel = 0;
    this.collage_dm = 0;
    this.isUploadFromPopup = 0;
    this.url_width_height = 0;
    this.textmat = 0;
    this.intOffset = 0;
    this.frameSeeMore = false;
    this.lastViewedProducts = {};
    this.change_item = "Default Configuration";
    this.customsize_with_validation = 800;
    this.customsize_height_validation = 1000;
    this.isSafari = false; //$.browser.safari;
    this.windowHeight = $(window).height();
    this.windowWidth = $(window).width();
    this.firstPageLoad = 1;
    this.currentCut = 0;
    this.current_img_width = 0;
    this.current_img_height = 0;
    this.containerWidthV2 = 0;
    this.containerHeightV2 = 0;
    this.cntLoadMultilpeImg = 1;
    this.prevMatCode = 0;
    this.showRecordsV4 = 10;
    this.variant_width = 0;
    this.variant_height = 0;
    this.third_mat_click_count = 0;
    this.botttom_mat_click_count = 0;
    this.lowMatWidth = 0;
    this.priceUpdate = false;
    this.ptype = "no";
    this.timer = null;
    this.isIntervalSet = false;
    this.isSelectedCut = true;
    this.isOpeningChange = false;
    this.imgWidth = 0;
    this.imgHeight = 0;
    this.newWidth = 0;
    this.newHeight = 0;
    this.newX = 0;
    this.newY = 0;
    this.croppedImageScale = {};
    this.cropSelection = [];
    this.isCropped = false;
    this.newScale = 1;
    this.previousGlassSizes = [];
    this.gInfoArr = [];
    this.rotationVal = 0;
    this.rotateFlag = 0;
    this.cartImgArr = {};
    this.previewImgArr = {};
    this.currentFrameSize = 0;
    this.newFrameSize = 0;
    this.frameSizeDifference = 0;
    this.newLinerFrameSize = 0;
    this.currentLinerFrameSize = 0;
    this.vgrooveClickActive = 0;
    this.vGrooveCnt = 0;
    this.isColorFilterApplied = false;
    this.priceTempArr = [];
    this.OSInfo = "Unknown OS";
    this.isCheckMatBySize = false;
    this.isAlreadyRequested = false;
    this.isPageLoadFromLanding = true;
    this.isPageLoad = 1;
    this.configImageDataUrl = [];
    this.editPopupImageDataUrl = {};
    this.collageOpenings = {
      cutCode: 0,
      outsidewidth: 0,
      outsideheight: 0,
      allow_personalization: 0,
    };
    this.imageArr = [];
    this.isImageOnLoad = true;
    this.isCutImageSelected = false;
    this.isMainCanvasChange = true;
    this.isInnerLayerChange = true;
    this.isImageLayerChange = true;
    this.bar = {};
    this.personalize = {};
    this.cutMetrics = {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    };
    this.matWidthArr = {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
    };
    this.getInfo_dev_file_name = "getInfoV1_mobile_dev.php";
    this.isPageLoadFrames = true;
    this.swatchResizedImg = $("#swatchResizedImg");
    this.frameLinerResults = false;
    this.isCallLinerFrameV4 = false;
    this.frameResults = false;
    this.isCallFrameV4 = false;
    this.selectedMat = "topMat";
    this.canvasMatScale = {};
    this.canvasSecondMatScale = {};
    this.canvasThirdMatScale = {}
    this.imgPosition = [];
    this.popupMatArr = [];
    this.vgroovConfigArr = [];
    this.popupMatStringTopCodeArraytmp = [];
    this.popupMatStringBottomCodeArraytmp = [];
    this.vgroovShapeCodesArray = [];
    this.cutSize = [];
    this.canvasThirdMatScale = {};
    this.canvasImageScales = [];
    this.cuts = [];
    this.canvasSecondMatScaleCollage = [];
    this.matcode = "custom";
    this.openingsizes = 1;
    this.matCategory = "mats";
    this.clickedMatCategory = "words";
    this.lastMatSelection = {};
    this.openingCuts = [];
    this.isFrameFilter4 = false;
    this.useCacheImg = false;
    this.cacheImages = {};
    this.cacheShapeImages = {};
    this.cacheShapeImages[ 0 ] = {
      useCacheImg: false,
      src: '',
    };
    this.bottomPersonalizeTxtScale = {};
    this.topPersonalizeTxtScale = {};
    this.isEditLinkClick = false;
    this.isBottomPersonalizationSet = false;
    this.isTopPersonalizationSet = false;
    this.isHoverTopMat = false;
    this.isHoverBottomMat = false;
    this.isHoverThirdMat = false;
    this.isMatChange = false;
    this.isUndoChanges = false;
    this.submittedFileToUpload = 0;
    this.completedUploadedFile = 0;
    this.multipleUploadedImagesArr = {};
    this.editPopupConfigurationArr = {};
    this.editPopupConfiguration = {};
    this.undoChangesStack = [];
    this.bottomPersonalizeCanvas = document.createElement("canvas");
    this.bottomPersonalizeCanvasCtx = this.bottomPersonalizeCanvas.getContext("2d");
    this.topPersonalizeCanvas = document.createElement("canvas");
    this.topPersonalizeCanvasCtx = this.topPersonalizeCanvas.getContext("2d");
    this.activeFrameId = 3926;
    this.activeFrameWidth = 1.25;
    this.activeFrameWidth1 = 1.25;
    this.selectedGlassVal = 14;
    this.onLoadGlassFlag = 1;
    this.cropFlagOpening = 1;
    this.frameLoadFlag = 0;
    this.patternLoadsData = 0;
    this.isCollageApplied = false;
    this.imageUploadStatus = false;
    this.clickedCutId = 0;
    this.bottomMatId = 0;
    this.thirdMatId = 0;
    this.bottomMatCode = 89;
    this.thirdMatCode = 0;
    this.topMatCode = 61;
    this.topMatId = 0;
    this.onPageload = 0;
    this.productCode = 79;
    this.isMatTopSelected = 1;
    this.isMatBottomSelected = 1;
    this.isMatTrippleSelected = 0;
    this.frameMaxWidth = 32;
    this.frameMaxHeight = 42;
    this.bestSellerDiv = [];
    this.tempSelectedGlassArray = [];
    this.changeGlassManually = 0;
    this.LodedFrames = 3;
    this.isLodedMats = 0;
    this.isFrameMatChanged = 0;
    this.frameMaterial = "MDF";
    this.displayAfterUpload = 0;
    this.collage_finish_size = "10x8";
    this.collage_mat_number = 37;
    this.cropflagOnrotation = 0;
    this.collageImageArray = [];
    this.collageCropPositionArray = [];
    this.collageimageImageSizes = [];
    this.collageOriginalSizeArray = [];
    this.boundWidth = NaN;
    this.boundHeight = NaN;
    this.pod_image_id = 0;
    this.podFlag = 0;
    this.pod_image_id = 0;
    this.pixelPerinch = 0;
    this.onimageload = 0;
    this.keepRatio = 0;
    this.isSwap = 0;
    this.tempHardwareArray = [];
    this.changeHardwareManually = 0;
    this.imgUpload = 0;
    this.TopMatTitle = "Super White";
    this.oldTopmat = 61;
    this.oldBottommat = 89;
    this.collage_Opening_Image_Array = [];
    this.framesImageArry = [];
    this.bestSellerDiv['display'] = 'none';
    this.pos_top = this.pos_bottom = this.pos_left = this.pos_right = 2;
    this.OnloadFrames = [];
    // if (window.location.origin == "http://localhost:4200") {
    //   this.framesData = {Frame};
    //   localStorage.setItem("frames", JSON.stringify(this.framesData[ "Frame" ]));
    //   this.OnloadFrames = this.framesData = this.framesData[ "Frame" ];
    //   this.MatDetails = {MatDetails};
    //   localStorage.setItem(
    //     "mats",
    //     JSON.stringify(this.MatDetails[ "MatDetails" ])
    //   );
    // }
    $(".container-fluid").css("padding", "unset");
    this.customWidth = 8; //default width
    this.customHeight = 10; //default Height
    // Regular frames
    // let obj = {"type":"no_mat","frame_code":"FRBW26079","frame_size":"8x10","HTTP_USER_AGENT":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1","page_type":"M","glass_type":"14","product_type":38}
    // Diploma
    // let obj = {"type":"collage_dm","mat_id":"custom-dm-8x10","frame_code":"0066-83120-YGRY","frame_size":"8x10","mat_color1":"Black","mat_color2":"El-Dorado","mat_code1":"89","mat_code2":"596","diploma":"1","tag":"8x10","HTTP_USER_AGENT":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1","page_type":"M","glass_type":"14","product_type":82}
    // Frames with mat
    // let obj = {"type":"collage_dm","mat_id":"custom-dm-8x10","frame_code":"FRBW26079","frame_size":"8x10","mat_color1":"Super-White","mat_color2":"Black","mat_code1":"61","mat_code2":"89","HTTP_USER_AGENT":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1","page_type":"M","glass_type":"14","product_type":"79"}
    // Floating
    // let obj = {"type":"collage_sm","mat_id":"custom-sm-8x10","frame_code":"FRBW74074","frame_size":"8x10","mat_color1":"Super-White","mat_code1":"61","floating":"1","page_type":"M","slideImage":"1","HTTP_USER_AGENT":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1","glass_type":"14","product_type":"79"}
    // Letterart
    // let obj = {"intro":"false","wordcutout":"hello","HTTP_USER_AGENT":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1","frame_size":"8x10","glass_type":0};
    // Collage
    // let obj = {"type":"collage_dm","mat_id":"95","frame_code":"FRBW26079","frame_size":"20x8","mat_color1":"Super-White","mat_color2":"Black","mat_code1":"61","mat_code2":"89","HTTP_USER_AGENT":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1","page_type":"M","glass_type":"14","product_type":78}
    // Mat only
    // let obj = {"mat_only":"1","image_size":"8x10","mat_color1":"Super White","mat_color2":"Black","mat_color3":"","mats":"double","mat_id":"custom-dm-8x10","HTTP_USER_AGENT":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1","frame_size":"8x10","glass_type":"14","product_type":69}
    // localStorage.setItem("defaultParam", JSON.stringify(obj))
    this.defaultParamObj = JSON.parse(localStorage.getItem("defaultParam"));
    if (this.defaultParamObj != null || this.defaultParamObj != undefined) {
      var self = this;
      if (this.defaultParamObj.floating === "1") {
        this.isFloating = true;
        this.isFloatingFrame = true;
        this.productCode = 92;
        // this.selectMats('floatingframe', true)
      }
      if (this.defaultParamObj.letterart != undefined) {
        this.isLetterArt = true;
        if (this.defaultParamObj.letterart == '') {
          this.router.navigateByUrl("letterart?letterart=HOME");
        } else {
          this.router.navigateByUrl(
            "letterart?letterart=" + this.defaultParamObj.letterart
          );
        }
        return;
      } else if (this.defaultParamObj.wordcutout != undefined) {
        this.isWordCutOut = true;
        if (this.defaultParamObj.wordcutout == '') {
          this.router.navigateByUrl("wordcutout?wordcutout=HOME");
        } else {
          this.router.navigateByUrl(
            "wordcutout?wordcutout=" + this.defaultParamObj.wordcutout
          );
        }
        return;
      } else if (
        this.defaultParamObj.diploma != undefined &&
        this.defaultParamObj.diploma == "1"
      ) {
        this.isDeploma = true;
        $(".fancySection, #fancy-shape").removeClass("active in");
        $(".vgrooveSection, #engraving").addClass("active in");
        $(".vgrooveSection").css("width", "100%");
        $(".fancySection,#popupmatcanvas").hide();
      } else if (
        this.defaultParamObj.pinpix != undefined &&
        this.defaultParamObj.pinpix == 1
      ) {
        this.router.navigateByUrl("pinpix");
      }
      if (this.defaultParamObj.cutId != null) {
        this.defaultParamObj.mat_id = this.defaultParamObj.cutId;
        this.defaultParamObj.type = "collage_dm";
        this.defaultParamObj.product_type = 78;
        this.defaultParamObj.frame_code = this.defaultParamObj.frameId;
        this.defaultParamObj.frameId = null;
        // this.defaultParamObj.mat_code1 = "61";
        // this.defaultParamObj.mat_code2 = "89";
      }
      if (this.defaultParamObj.pos_bottom != null) {
        this.pos_bottom = this.defaultParamObj.pos_bottom;
        this.advanceModeMatWidthValue = ''
      }
      
      if (this.defaultParamObj.type == "no_mat") {
          $("#nomats").prop("checked", true);
          $("#topmats").prop("checked", false);

          $(".new-cf-tabs li").css("width", '25%')  
      }
      if (this.defaultParamObj.isTussel === "1") {
        this.isTusselOpening = true;
      }
      if (this.defaultParamObj.isPhoto === "1") {
        this.isPhotoOpening = true;
      }
      this.isMatOnlyProduct = false;
      if (this.defaultParamObj.mat_only === "1") {
        this.isMatOnlyProduct = true;

        $("#framesoption").css("display", 'none')
        $(".decor-section").css("display", 'block')

        $("#mat_none_option").css("display", 'none')
        $("#mat_float_option").css("display", 'none')
        $(".matDetails .mattabClass").css("width", '30%')
        $(".matDetails .mattabClass").css("margin-left", '11px')
        

        $("#glassoption").css("display", 'none')
        $(".new-cf-tabs li").css("width", '33%')   
        $(".UploadPhotoNew").css("display", 'none')
        $("#isMatOnlyCart").addClass("col-xs-12");
        this.isSingleMat = false;

        if(this.defaultParamObj.mats === "triple"){
          this.productSwitch(69);          
          setTimeout(() => {
              this.showMats('matss')
              this.selectMats("tripplemats", true);
          }, 50);
        }
        else if(this.defaultParamObj.mat_code2 === '' || this.defaultParamObj.mat_color2 === ''){
          this.isSingleMat = true
          this.productSwitch(69);          
          setTimeout(() => {
              this.selectMats("topmats", true);
          }, 50);
        }
        else{
          this.productSwitch(69);          
          setTimeout(() => {
              this.selectMats("bottommats", true);
          }, 50);
        }

        this.getMinMaxSizes(69);
      }
      else{
        $("#isMatOnlyCart").addClass("col-xs-6");
      }
      if(this.defaultParamObj.mat_code1 != ''){
        this.topMatId = this.defaultParamObj.mat_code1

        if (this.defaultParamObj.mat_only != "1") {
          $(".new-cf-tabs li").css("width", '25%');
        }
      }
      if(this.defaultParamObj.mat_code2 != ''){
        this.bottomMatId = this.defaultParamObj.mat_code2
      } 
    if (this.defaultParamObj.topMatId != null) {
      this.top_mat = this.defaultParamObj.topMatId
    }
    if (this.defaultParamObj.bottomMatId != null) {
      this.bottom_mat = this.defaultParamObj.bottomMatId
    }
      if (this.defaultParamObj.decorativemat != null) {
        this.singlePopupMatImg = this.instActiveShape = this.defaultParamObj.decorativemat;
      }
      if (this.defaultParamObj.vgroove != null) {
        this.selectedVgroove = this.defaultParamObj.vgroove;
      }
      if (this.defaultParamObj.pos_left != null) {
        this.pos_left = this.defaultParamObj.pos_left;
        this.advanceModeMatWidthValue = ''
      }
      if (this.defaultParamObj.pos_right != null) {
        this.pos_right = this.defaultParamObj.pos_right;
        this.advanceModeMatWidthValue = ''
      }
      if (this.defaultParamObj.pos_top != null) {
        this.pos_top = this.defaultParamObj.pos_top;
        this.advanceModeMatWidthValue = ''
      }
      this.totalMatWidth = Number(this.pos_left) + Number(this.pos_right);
      this.totalMatHeight = Number(this.pos_bottom) + Number(this.pos_top);
      if (this.defaultParamObj.pid != null) {
        this.productSwitch(57, 1);
        this.isUploadInProgress = 1;
        this.getPOD(this.defaultParamObj.pid);
      }
      /*  */
      if (this.defaultParamObj.pid) {
          this.productSwitch(57);          
        setTimeout(() => {
            this.selectMats("bottommats", true);
        }, 50);
      }
      if (this.defaultParamObj.type != null) {
        if (this.defaultParamObj.type == "no_mat") {
          this.productSwitch(38);
          setTimeout(() => {
              $("#nomats").prop("checked", true);
              $("#topmats").prop("checked", false);
              this.selectMats("nomats", true);
          }, 50);
        }
        if (this.defaultParamObj.type == "collage_sm") {
          if(this.isFloating){
            this.productSwitch(92);
            // this.selectMats("floatingframe", true);
            setTimeout(() => {
              $("#bottommats").prop("checked", false);
              this.selectMats("floatingframe", true);
            }, 50);
          }
          else{
            setTimeout(() => {
              $("#bottommats").prop("checked", false);
              if (this.defaultParamObj.mat_only != "1") {
                this.selectMats("topmats", true);
              }
              
              if(!this.isFloating){
                this.productSwitch(79);
                $(".MatColorNameChange").html(
                  "TOP MAT COLOR"
                );
              }
            }, 50);
          }
          
        }
        if (this.defaultParamObj.type == "collage_dm") {
            this.productSwitch(79);          
          setTimeout(() => {
              this.selectMats("bottommats", true);
          }, 1000);
        }
        if (this.defaultParamObj.type == "single_dm") {
            this.productSwitch(79);          
          setTimeout(() => {
              this.selectMats("bottommats", true);
          }, 50);
        }
      }
      else{
        this.productSwitch(79);          
          setTimeout(() => {
            if (this.defaultParamObj.mat_only != "1") {
              $("#bottommats").prop("checked", false);
              this.selectMats("topmats", true);
            }
          }, 1000);
      }
      if (
        this.defaultParamObj.frameId != null ||
        this.defaultParamObj.frame_code != null ||
        this.defaultParamObj.frameCode != null
      ) {
        if (this.defaultParamObj.frameId != null) {
          self.frameCode = this.defaultParamObj.frameId;
          this.Helper.getFrameDataFromDB(this.defaultParamObj.frameId).subscribe((data: any) => {
              self.activeFrameWidth = data[ "framewidth" ];
              self.activeFrameName = data[ "name" ];
              self.activeFrameId = data[ "frame_id" ];
              self.frameCode = this.defaultParamObj.frameId;
              self.frameColor = data[ "color_class" ];
              self.frameRabbit = data[ "rabbit" ];
              self.frameLipWidth = data[ "lip_width" ];
              self.frameSpecies = data[ "species" ];
              self.frameURL =
              self.Helper.cdn1 + "/products/frames/SwatchSmall/" +
                self.frameCode +
                "/100.jpg";
              self.framesImageArry = data[ "images" ];

              self.getUserReview()
              return false;
          });
        }
        if (
          this.defaultParamObj.frame_code != null ||
          this.defaultParamObj.frameCode != null
        ) {
          let code;
          if (this.defaultParamObj.frame_code != null) {
            code = this.defaultParamObj.frame_code;
          } else {
            code = this.defaultParamObj.frameCode;
          }
          this.frameCode = code;
          self.getUserReview()
          this.frameURL = this.Helper.cdn1 + "/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg";
          // this.getSearchLabels();
          this.Helper.getFrameDataFromDB(code).subscribe((data: any) => {

            if(data.search_label){
              this.bestSellerDiv['display'] = 'block';
              this.offerImagePath = data.search_label;
            }
            else{
              this.bestSellerDiv['display'] = 'none';
            }
              self.maxFinishedSize = data['max_finished_size'];
              self.activeFrameWidth = data[ "width" ];
              this.applyChanges();
              self.activeFrameName = data[ "name" ];
              self.activeFrameId = data[ "id" ];
              self.frameCode = code;
              self.frameColor = data[ "color_class" ];
              self.frameRabbit = data[ "rabbit" ];
              self.frameLipWidth = data[ "lip_width" ];
              self.frameSpecies = data[ "species" ];
              self.frameURL =
              self.Helper.cdn1 + "/products/frames/SwatchSmall/" +
                self.frameCode +
                "/100.jpg";
              self.framesImageArry = data[ "images" ];
              if (data.product_page_note != '') {
                $("#info_log").css("display", "block");
                this.frameNote = data.product_page_note;
              } else {
                $("#info_log").css("display", "none");
                this.frameNote = '';
              }
              return false;
          });
        }
      } else {
        self.activeFrameWidth = "1.25";
        self.maxFinishedSize = "32x42";
        self.activeFrameId = "3926";
        self.frameCode = "FRBW26079";
        self.activeFrameName = "Satin Black";
        self.frameColor = "Black";
        self.frameRabbit = "004375";
        self.frameLipWidth = ".25";
        self.frameSpecies = "MDF";
        self.frameURL =  self.Helper.cdn1 + "/products/frames/SwatchSmall/FRBW26079/100.jpg";
        self.getUserReview()
        // this.getSearchLabels();
      }
      if (this.defaultParamObj.current_width != null) {
        this.customWidth = this.defaultParamObj.current_width;
        this.curruntSize = this.customWidth + 'x' + this.customHeight;
      }
      if (this.defaultParamObj.current_height != null) {
        this.customHeight = this.defaultParamObj.current_height;
        this.curruntSize = this.customWidth + 'x' + this.customHeight;
      }
      if (this.defaultParamObj.frame_size != null) {
        this.customWidth = this.defaultParamObj.frame_size.split("x")[ 0 ];
        this.customHeight = this.defaultParamObj.frame_size.split("x")[ 1 ];
        this.curruntSize = this.defaultParamObj.frame_size;
      }
      if (this.defaultParamObj.image_size != null) {
        this.customWidth = this.defaultParamObj.image_size.split("x")[ 0 ];
        this.customHeight = this.defaultParamObj.image_size.split("x")[ 1 ];
        this.curruntSize = this.defaultParamObj.image_size;
      }
      if (this.defaultParamObj.hardwareId != null) {
        this.hardwareID = this.defaultParamObj.hardwareId;
        this.changeHardwareManually = 1;
      }
      this.getDataService.getFilterMatDataJSON().subscribe((data)=>{
       this.dataMatsArray = data;
       console.log(this.dataMatsArray)
        if (this.defaultParamObj.mat_code2 != null) {
          $.each(data, function (index) {
            if (
              data[ index ].code ==
              self.defaultParamObj.mat_code2.replace("-", " ")
            ) {
              self.BottomMatTitle = data[ index ].name;
              self.bottom_mat = data[ index ].code;
            }
          });
        }
        else if (this.defaultParamObj.mat_color2 != null) {
          $.each(data, function (index) {
            if (
              data[ index ].name ==
              self.defaultParamObj.mat_color2.replace("-", " ")
            ) {
              self.BottomMatTitle = data[ index ].name;
              self.bottom_mat = data[ index ].code;
            }
          });
        }
        if (this.defaultParamObj.mat_code3 != null) {
          $.each(data, function (index) {
            if (
              data[ index ].code ==
              self.defaultParamObj.mat_code3.replace("-", " ")
            ) {
              self.TrippleMatTitle = data[ index ].name;
              self.tripple_mat = data[ index ].code;
            }
          });
        }
        else if (this.defaultParamObj.mat_color3 != null) {
          $.each(data, function (index) {
            if (
              data[ index ].name ==
              self.defaultParamObj.mat_color3.replace("-", " ")
            ) {
              self.TrippleMatTitle = data[ index ].name;
              self.tripple_mat = data[ index ].code;
            }
          });
        }
        if (this.defaultParamObj.mat_code1 != null) {
          $.each(data, function (index) {
            if (
              data[ index ].code ==
              self.defaultParamObj.mat_code1.replace("-", " ")
            ) {
              self.TopMatTitle = data[ index ].name;
              self.top_mat = data[ index ].code;
            }
          });
        }
        else if (this.defaultParamObj.mat_color1 != null) {
          $.each(data, function (index) {
            if (
              data[ index ].name ==
              self.defaultParamObj.mat_color1.replace("-", " ")
            ) {
              self.TopMatTitle = data[ index ].name;
              self.top_mat = data[ index ].code;
            }
          });
        }
        $.each(data, function (index) {
          if (data[ index ].code == self.top_mat) {
            self.topMatId = data[ index ].id;
            self.topMatCode = data[ index ].code;
          }
        });
        $.each(data, function (index) {
          if (data[ index ].code == self.bottom_mat) {
            self.bottomMatId = data[ index ].id;
            self.bottomMatCode = data[ index ].code;
          }
        });
        $.each(data, function (index) {
          if (data[ index ].code == self.tripple_mat) {
            self.thirdMatId = data[ index ].id;
            self.thirdMatCode = data[ index ].code;
          }
        });
      })
      if (this.defaultParamObj.glassId != null) {
        this.selectedGlassVal = this.defaultParamObj.glassId;
        console.log("Selected glass 1 => ", this.selectedGlassVal)
        this.changeGlassManually = 1;
        let glassName = this.glassArr.filter((data)=> data.glass_id === this.selectedGlassVal)
        this.urlGlassType = glassName[0].glass_type;
        console.log("this.urlGlassType 1 => ", this.urlGlassType)
        if(this.urlGlassType === '1'){
          $("#glass_only_name").text(glassName[0].name);
        }
        else{
          $("#glass_plexi_name").text(glassName[0].name);
        }
      }
      if(this.defaultParamObj.glass_type === 0){
        this.defaultParamObj.glass_type = null;
      }
      if (this.defaultParamObj.mat_id != null) {
        if (this.defaultParamObj.mat_id.indexOf("custom") == -1) {
          this.isCollageApplied = true
          this.getDataService.getCollageOpeningJSON().subscribe((responce)=>{
            console.log(responce);
            this.collageChlidMatArrTemp = responce;
            this.collageChlidMatArrTemp = this.collageChlidMatArrTemp.mat_groups;
            this.CollageOpeningJson = responce;
            this.CollageOpeningJson = this.CollageOpeningJson.openings;
            this.collageOpeningsArray = Object.keys(this.CollageOpeningJson);
          this.matcode = this.defaultParamObj.mat_id;
          var tempOpeningData = [];
          var tempOpeningData2 = [];
          var collageDataToLoad = 0;
          $.each(self.CollageOpeningJson, function (index, txt) {
            tempOpeningData = self.CollageOpeningJson[ index ];
            $.each(tempOpeningData, function (index2, txt2) {
              if (tempOpeningData[ index2 ][ "id" ] == self.matcode) {
                collageDataToLoad = tempOpeningData[ index2 ];
                return false;
              }
            });
          });
          if (collageDataToLoad == 0) {
            $.each(self.collageChlidMatArrTemp, function (index, txt) {
              tempOpeningData2 = self.collageChlidMatArrTemp[ index ];
              $.each(tempOpeningData2, function (index2, txt2) {
                if (tempOpeningData2[ index2 ][ "id" ] == self.matcode) {
                  collageDataToLoad = tempOpeningData2[ index2 ];
                  return false;
                }
              });
            });
          }
          console.log(collageDataToLoad)
          if (collageDataToLoad != 0 && !this.isDeploma) {
            this.isCollageApplied = true;
            this.productSwitch(78);
            setTimeout(() => {
              self.selectChildCollageOpening(collageDataToLoad);
              // $("#showsizepopu").click();
              $("#sizemodal li:nth-child(1)").removeClass("active");
              $("#sizemodal li:nth-child(2) a").trigger("click");
              console.log(this.CollageOpeningJson)
              console.log("line 1444")
              self.getCollageDataAngular("default");
            }, 100);
          } else {
            if ($('#meta_seo_title_new').val() != undefined || $('#meta_seo_title_new').val() != '') {
              if(!this.isDeploma){
                self.wordShapeCollage = true;
              }
            }
            self.getDataService.getMatDetailsFromDB(this.defaultParamObj.mat_id).subscribe((res) => {
              if (res != null) {
                if(res.openings === "2"){
                  if(res.diploma_opening_info.tassel){
                    this.isTusselOpening = true
                    $(".mainConatiner").css("margin-top", "-70px");
                    this.getDataService.getDiplomaSizesFromDB(this.matcode, "&tassel=1&image=0").subscribe((res) => {
                      if (res.diploma_sizes) {
                        const arr = this.getUniqueListBy(res.diploma_sizes, 'value')
                        this.diplomaSizes = arr;
                      }
                      if(res.image_sizes){
                        const arr = this.getUniqueListBy(res.image_sizes, 'value')
                        this.imageSizes = arr;
                      }
                    });
                  }
                  else{
                    this.isPhotoOpening = true
                    $(".mainConatiner").css("margin-top", "-70px");
                    this.getDataService.getDiplomaSizesFromDB(this.matcode, "&image=1&tassel=0").subscribe((res) => {
                      if (res.diploma_sizes) {
                        const arr = this.getUniqueListBy(res.diploma_sizes, 'value')
                        this.diplomaSizes = arr;
                      }
                      if(res.image_sizes){
                        const arr = this.getUniqueListBy(res.image_sizes, 'value')
                        this.imageSizes = arr;
                      }
                    });
                  }
                }
                if(res.openings === "3"){
                  this.isTusselOpening = true
                  this.isPhotoOpening = true
                  $(".mainConatiner").css("margin-top", "-70px");
                  this.getDataService.getDiplomaSizesFromDB(this.matcode, "&image=1&tassel=1").subscribe((res) => {
                    if (res.diploma_sizes) {
                      const arr = this.getUniqueListBy(res.diploma_sizes, 'value')
                      this.diplomaSizes = arr;
                    }
                    if(res.image_sizes){
                      const arr = this.getUniqueListBy(res.image_sizes, 'value')
                      this.imageSizes = arr;
                    }
                  });
                }
                this.isCollageApplied = true;
                this.productSwitch(78);
                self.selectChildCollageOpening(res);
                $("#sizemodal li:nth-child(1)").removeClass("active");
                $("#sizemodal li:nth-child(2) a").trigger("click");
                console.log(this.CollageOpeningJson)
                console.log("line 1506")
                self.getCollageDataAngular("default");
              } else {
                document.location.href = 'https://www.arttoframe.com/collage-frames';
              }
            });
          }
        })
        }
      }
      if (this.defaultParamObj.instaFrame != null) {
        this.instaFrame = true;
        this.customWidth = 8;
        this.customHeight = 8;
        this.curruntSize = '8x8';
        this.productSwitch(80);
        var self = this;
        self.instaShapeData = [];
        self.getDataService.getInstaShape().subscribe((res) => {
          self.instaShapeData = res.data
          $.each(self.instaShapeData, function (index, data) {
            if (data.default_shape_for_instagram_framing == '1') {
              self.instActiveShape = data.designerId;
              return false;
            }
          });
        });
      }
      if (this.defaultParamObj.image_url != null) {
        this.mat_orders_id = this.defaultParamObj.mat_orders_id != null ? this.defaultParamObj.mat_orders_id : null;
        this.isUploadInProgress = 1;
        this.ImageinUrl(this.defaultParamObj.image_url);
      }
      if (this.defaultParamObj.opening_width != null) {
        this.customWidth = this.defaultParamObj.opening_width;
        this.customHeight = this.defaultParamObj.opening_width;
        this.curruntSize = this.customWidth + 'x' + this.customHeight;
      }
      if (this.defaultParamObj.opening_height != null) {
        this.customHeight = this.defaultParamObj.opening_height;
        this.customWidth = this.defaultParamObj.opening_height;
        this.curruntSize = this.customWidth + 'x' + this.customHeight;
      }
      if (this.defaultParamObj.paperId != null) {
        this.paperId = this.defaultParamObj.paperId;
        this.productSwitch(57, 2);
      }
      if (this.defaultParamObj.backing_type != null) {
        this.backing_type = this.defaultParamObj.backing_type;
      }
      if (this.defaultParamObj.backing_type != null) {
        this.backing_type = this.defaultParamObj.backing_type;
      }
    }
    if (this.onPageload == 0) {
      this.onPageloadGlassId();
    }
    $(document).ready(function (e) {
      $("body").css("background", "#EAE6E4");
      $(".review_scroll").height($(window).height() - 80);
      $("#openingSelectorContainer").delegate(
        ".openingSelector",
        "click",
        function (event) {
          $(".openingSelector").removeClass("active");
          $("#" + $(this).attr("id")).addClass("active");
          this.clickedCutId = $(this).attr("id");
        }
      );
      setTimeout(() => {
        $(
          ".main-product-preview,.mainConatiner,#previewSlider,.main-prevewcls"
        ).css("height", $(window).height() - 300);
        $("#preview_container").css("height", $(window).height() - 300);
        $(".equal-heights").css("height", $(window).height() - 300);
        $(".ngxcarouselPoint").css("top", $(window).height() - 300);
        if($(window).height() < 635){
          $(
            ".main-product-preview,.mainConatiner,#previewSlider,.main-prevewcls"
          ).css("height", $(window).height() - 250);
          $(".ngxcarouselPoint").css("top", $(window).height() - 250);
        }
        $(".main-prevewcls").css("max-width", $(window).width());
      }, 50);
      $(".bx-wrapper").css("margin-bottom", "0px");
      $(".bx-pager").css("bottom", "0px");
      $("#matoption").click(function () {
        $("#matoption  img").attr("src", self.Helper.cdn1 + "/images/mat_active_sep.svg?v=7");
        $("#framesoption img").attr("src", self.Helper.cdn1 + "/images/frame_sep.svg");
        $("#showsizepopu img").attr("src", self.Helper.cdn1 + "/images/size_sep.svg");
        if (self.instaFrame) {
          $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/instaFrame/insta_shape_inactive.svg?v=4");
        } else {
          $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/decor_sep.svg?v=5");
        }
        $("#glassoption img").attr("src", self.Helper.cdn1 + "/images/glass_sep.svg");
      });
      $("#framesoption").click(function () {
        $("#frameModal").modal("show");
        $("#frameModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 10 + "px");
        $(".modal-backdrop.in").css("display", "none");
        $(".frame-hide-btn").css("display", "block");
        $("#sizemodal").modal("hide");
        $("#matModal").modal("hide");
        $("#decorModal").modal("hide");
        $("#glassModal").modal("hide");
        $("#framesoption img").attr("src", self.Helper.cdn1 + "/images/frame_active_sep.svg");
        $("#showsizepopu img").attr("src", self.Helper.cdn1 + "/images/size_sep.svg");
        $("#matoption  img").attr("src", self.Helper.cdn1 + "/images/mat_sep.svg");
        if (self.instaFrame) {
          $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/instaFrame/insta_shape_inactive.svg?v=4");
        } else {
          $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/decor_sep.svg?v=5");
        }
        $("#glassoption img").attr("src", self.Helper.cdn1 + "/images/glass_sep.svg");
      });
      $(".addtocart-tag a").click(function () {
        $("#framesoption img").attr("src", self.Helper.cdn1 + "/images/frame_sep.svg");
        $("#showsizepopu img").attr("src", self.Helper.cdn1 + "/images/size_sep.svg");
        $("#matoption  img").attr("src", self.Helper.cdn1 + "/images/mat_sep.svg");
        if (self.instaFrame) {
          $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/instaFrame/insta_shape_inactive.svg?v=4");
        } else {
          $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/decor_sep.svg?v=5");
        }
        $("#glassoption img").attr("src", self.Helper.cdn1 + "/images/glass_sep.svg");
      });
      $(".back-btn-colorfilter").click(function () {
        $("#colorfilter").modal("hide");
      });
      $("#matfilter-confirm").click(function () {
        $("#colorfilter").modal("hide");
      });
      $(".fancy-shape-tab").click(function () {
        $(".fancy-shape-tab img").attr(
          "src",
          self.Helper.cdn1 + "/images/info_outline_white.png"
        );
        $(".engraving-tab img").attr(
          "src",
          self.Helper.cdn1 + "/images/info_outline_black.png"
        );
      });
      $(".engraving-tab").click(function () {
        $(".engraving-tab img").attr("src", self.Helper.cdn1 + "/images/info_outline_white.png");
        $(".fancy-shape-tab img").attr("src", self.Helper.cdn1 + "/images/info_outline_black.png");
      });
      $("#showsizepopu").click(function (event) {
        $("#sizemodal").modal("show");
        $("#sizemodal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 10 + "px");
        $(".frame-hide-btn").css("display", "block");
        $(".modal-backdrop").css("z-index", "20");
        $("#frameModal").modal("hide");
        $("#matModal").modal("hide");
        $("#decorModal").modal("hide");
        $("#glassModal").modal("hide");
        $("#showsizepopu img").attr("src", self.Helper.cdn1 + "/images/size_active_sep.svg");
        $("#framesoption img").attr("src", self.Helper.cdn1 + "/images/frame_sep.svg");
        $("#matoption  img").attr("src", self.Helper.cdn1 + "/images/mat_sep.svg");
        if (self.instaFrame) {
          $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/instaFrame/insta_shape_inactive.svg?v=4");
        } else {
          $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/decor_sep.svg?v=5");
        }
        $("#glassoption img").attr("src", self.Helper.cdn1 + "/images/glass_sep.svg");
        if (navigator.platform == "iOS") {
          setTimeout(() => {
            var target = $("#showsizepopu");
            if (target.length) {
              event.preventDefault();
              $("html, body").stop().animate(
                { scrollTop: target.offset().top, },
                1000
              );
            }
            $("#customWidth").setSelectionRange(0, 9999);
          }, 200);
        } else {
          $("#customWidth").focus();
          setTimeout(() => {
            var target = $("#showsizepopu");
            if (target.length) {
              event.preventDefault();
              $("html, body").stop().animate(
                {
                  scrollTop: target.offset().top,
                },
                1000
              );
            }
            $("#customWidth").select();
          }, 100);
        }
      });
      $(".color-filterbtn").click(function () {
        $("#colorfilter").modal("show");
      });
      // $("#imagesizePopupCF").click(function () {
      //   $("#show-img-sizepopupCF").modal("show");
      //   var selectedOpening = $(".openingActive").html();
      //   self.collageArr = self.CollageOpeningJson[ selectedOpening ];
      //   self.collageArr.forEach((data)=>{
      //     if(data.id === self.matcode){
      //       self.selectCollageOpening(data)
      //     }
      //   })
      // });
      $(".hdwTitleCF").click(function () {
        $("#show-img-sizepopupCF").modal("hide");
      });
      $(".bx-page").css("bottom", "40px");
      $(".modal-backdrop.in").css("display", "none");
      $(".traversing").hide();
      $( ".detailPopupClose, #confirmGlass,.confrim-btn, .confirm-Opening-popup, #confirmhardware, .glassdetailpopup"
      ).click(function (e) {
        $( "#fancy_shape_popup, #mat_engraving_popup, #glassPopup, #hardwarepopup, #sizepopup" ).modal("hide");
      });
      $("#fancy_shape_info").click(function (e) {
        $("#fancy_shape_popup").modal("show");
        $(".modal-backdrop").css("z-index", "9999");
      });
      $("#vgroove_info").click(function (e) {
        $("#mat_engraving_popup").modal("show");
        $(".modal-backdrop").css("z-index", "9999");
      });
      $("#openingPopupCF").click(function () {
        $("#showopningpopupCF").modal("show");
      });
      $(".hdwTitleCF").click(function () {
        $("#showopningpopupCF").modal("hide");
      });
      // $(".openingCF-options li").click(function () {
      //   $(".openingCF-options li").removeClass("openingActive");
      //   console.log($(this))
      //   $(this).addClass("openingActive");
      // });
    });
      if(this.singlePopupMatImg != ''){
        this.clickDefualtActionDecor()
      }
      if(this.selectedVgroove != ''){
        this.clickDefualtActionGroove()
      }
      if(!this.isLetterArt){
        const modal = document.querySelector('#infomodal')
          document.addEventListener('click', (e: any) => {
            let clickInside = modal.contains(e.target)
            if (clickInside) {
              $(".modal-backdrop.in").hide();
            }
          })
      }
      // var endTime = Date.now();
      // console.log(2487 + " ngOnInit function end time ", endTime);
      // var differenceInMiliseconds = endTime - startTime;
      // console.log("%c after ngOnInit function difference (In miliseconds)  "+ differenceInMiliseconds, 'background: #222; color: #bada55');
  }

  getMinMaxSizes(prodCode) {
    this.Helper.getMinMaxSizes(prodCode).subscribe((responce : any)=>{
      console.log(responce);
      // responce.min_width = 3;
      // responce.min_height = 3;

      console.log(responce.min_width, this.customWidth)
      if(responce.min_width > this.customWidth || responce.min_width > this.customHeight){
        this.sizeText = "Minimum";
        $("#myModal_maxsize_Mat h4").html(
          "Please enter a minimum size of " + responce.min_width + "x" + responce.min_height
        );
        $("#myModal_maxsize_Mat").modal("show");
        $("#isMatOnlyCart").addClass("disabledContainer");

        return false
      }
      else if(responce.min_height > this.customWidth || responce.min_height > this.customHeight){
        this.sizeText = "Minimum";
        $("#myModal_maxsize_Mat h4").html(
          "Please enter a minimum size of " + responce.min_width + "x" + responce.min_height
        );
        $("#myModal_maxsize_Mat").modal("show");
        $("#isMatOnlyCart").addClass("disabledContainer");

        return false
      }
      else{
        $("#isMatOnlyCart").removeClass("disabledContainer");
      }
      if(this.customWidth > JSON.parse(responce.max_width) || this.customHeight > JSON.parse(responce.max_width)){
        if(this.customWidth > JSON.parse(responce.max_height) || this.customHeight > JSON.parse(responce.max_height)){
          this.sizeText = "Maximum";
          $("#myModal_maxsize_Mat h4").html(
            "Please enter a maximum size of " + responce.max_width + "x" + responce.max_height
          );
          $("#myModal_maxsize_Mat").modal("show");
          $("#isMatOnlyCart").addClass("disabledContainer");
          return false;
        }else{
          $("#isMatOnlyCart").removeClass("disabledContainer");
        }
      }

      let self = this;

      self.isTopMatColorApplicable = true;
      self.isBottomMatColorApplicable = true;
      self.isThirdMatColorApplicable = true;

      var big_mat = 0;
      var medium_mat = 0;
      var small_mat = 0;
      var mat_counter = 0;
      var mat_code;
      var tempMatArray = [];

      if ((this.customWidth <= 32 && this.customHeight <= 40) || (this.customWidth <= 40 && this.customHeight <= 32)) {
        small_mat = 1;
      } else if ((this.customWidth <= 40 && this.customHeight <= 60) || (this.customWidth <= 60 && this.customHeight <= 40)) {
        medium_mat = 1;
      } else if ((this.customWidth <= 48 && this.customHeight <= 96) || (this.customWidth <= 96 && this.customHeight <= 48)) {
        big_mat = 1;
      }
      
      console.log(this.dataMatsArray);
      console.log($("#matfilter li").length)

      setTimeout(() => {
        console.log(this.dataMatsArray);
        console.log($("#matfilter li").length)

        $("#matfilter li").each(function () {
          console.log($(this).attr('data-matCode'));
          if (small_mat == 1) {
            if ($(this).attr('data-size32x40') == '1') {
              mat_code = $(this).attr('data-matCode')
              this.style.display = "";
              tempMatArray.push(mat_code);
              mat_counter++;
            } else {
              this.style.display = "none"
            }
          } else if (medium_mat == 1) {
            if ($(this).attr('data-size40x60') == '1') {
              mat_code = $(this).attr('data-matCode')
              this.style.display = "";
              tempMatArray.push(mat_code);
              mat_counter++;
            } else {
              this.style.display = "none"
            }
          } else if (big_mat == 1) {
            if ($(this).attr('data-size48x96') == '1') {
              this.style.display = "";
              tempMatArray.push(mat_code);
              mat_counter++;
            } else {
              this.style.display = "none"
            }
          }
        })
        console.log(tempMatArray);
        if ($("#topmats").parent().find("input:checkbox").is(":checked") == true){
          self.isTopMatColorApplicable = tempMatArray.includes(this.top_mat);
        }
        if ($("#bottommats").parent().find("input:checkbox").is(":checked") == true){
          self.isBottomMatColorApplicable = tempMatArray.includes(this.bottom_mat);
        }
        if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true){
          self.isThirdMatColorApplicable = tempMatArray.includes(this.tripple_mat);
        }

        console.log(self.isTopMatColorApplicable, self.isBottomMatColorApplicable, self.isThirdMatColorApplicable)
      
        if(!self.isTopMatColorApplicable || !self.isBottomMatColorApplicable || !self.isThirdMatColorApplicable){
          $("#matValidation").css("display", "block");
          $("#isMatOnlyCart").addClass("disabledContainer");
          var urlpart = window.location.pathname.replace('\/', '');
          var urldata = urlpart.split('/')[0];
          const arr = [self.isTopMatColorApplicable, self.isBottomMatColorApplicable, self.isThirdMatColorApplicable];
          const count = arr.filter(Boolean).length;
          if(count > 1){
              var String = "Mat color ";
              var Sub_String = "Please choose different mat colors";
          }else{
              var String = "Mat colors ";
              var Sub_String = "Please choose a different mat color";
          }
          console.log(count);
          if(!self.isTopMatColorApplicable){
              String += self.TopMatTitle;
          }
          if(!self.isBottomMatColorApplicable){
              if(!self.isTopMatColorApplicable){
                  String += ",";
              }else{

              }
              String += " "+ self.BottomMatTitle ;
          }
          if(!self.isThirdMatColorApplicable){
              if(!self.isTopMatColorApplicable || !self.isBottomMatColorApplicable){
                  String += ",";
              }else{

              }
              String += " "+ self.TrippleMatTitle;
          }
          String += " is not available in the size selected.";
          // $('.available-sizes-title').html(String);
          // $('.available-sizes-subtitle').html(Sub_String);
          $("#myModal_maxsize_Mat_size h3").html(
            Sub_String
          );
          $("#myModal_maxsize_Mat_size h4").html(
            String
          );
          $("#myModal_maxsize_Mat_size").modal("show");
          console.log(String)
          console.log(Sub_String)
        }else{
          $("#myModal_maxsize_Mat_size").modal("hide");
            $("#isMatOnlyCart").removeClass("disabledContainer");
        }

        self.disabledAddToCart = true;
      }, 500);
    })

      
  }

  showImageSize(){
      $("#show-img-sizepopupCF").modal("show");
      var selectedOpening = $(".openingActive").html();
      let collageArr = this.CollageOpeningJson[ selectedOpening ];
      collageArr.forEach((data)=>{
        if(data.id === this.matcode){
          this.selectCollageOpening(data)
        }
      })
  }

  getMatColorFilter(){
    this.getDataService.getFilterMatColorsJSON().subscribe((data)=>{
      console.log(data)
      if(!this.matFilter){
        this.matFilter = data;
      }
    })
  }

  // getSearchLabels() {
  //   this.getDataService.getSearchLabel(this.frameCode).subscribe((res)=>{
  //     if(res){
  //       this.bestSellerDiv['display'] = 'block';
  //       this.offerImagePath = res;
  //     }
  //     else{
  //       this.bestSellerDiv['display'] = 'none';
  //     }
  //   })
  // }
  
  clickDefualtActionDecor() {
      $('#fancyCheckbox').click()
      $('#designerMatId_' + this.singlePopupMatImg).click()
      this.printImage = true;
  }

  clickDefualtActionGroove() {
      $('#vgrooveCheckbox').click()
      $('#vgroov__' + this.selectedVgroove).click()
      this.printImage = true;
  }

  getMatPositions() {
    if(this.advanceModeMatWidthValue != ''){
      this.pos_bottom = this.selectedMatWidth;
    this.pos_left = this.selectedMatWidth;
    this.pos_right = this.selectedMatWidth;
    this.pos_top = this.selectedMatWidth;
    }
    this.totalMatWidth = Number(this.pos_left) + Number(this.pos_right)
    this.totalMatHeight = Number(this.pos_bottom) + Number(this.pos_top)
    console.log("Arrange 2")
    this.arrange()
    this.setSecondMat()
    this.setCanvasSingleOpenings()
  }

  public inputValidationMat() {
  //  this.Helper.validateMats(
  //   this.top_mat,
  //   parseFloat($("#customWidth").val()),
  //   parseFloat($("#customHeight").val()),
  //   this.isCollageApplied,
  //   this.isMatOnlyProduct
  //   )

    this.getMinMaxSizes(69);
    // var customWidth = $("#customWidth").val();
    // var customHeight = $("#customHeight").val();

    // console.log(customWidth, customHeight)
    // if (customHeight < 3 || customWidth < 3) {
    //   $("#myModal_maxsize_Mat h4").html(
    //     "Please enter a minimum size of 3″ x 3″"
    //   );
    //   $("#myModal_maxsize_Mat").modal("toggle");
    //   $("#isMatOnlyCart").addClass("disabledContainer");
    //   return false;
    // }  
  }

  public inputValidation() {
    console.log("Shubh")
    if($("#frame_" + this.frameCode).attr("data-maxSize")){
      var maxFrameSizeData = $("#frame_" + this.frameCode).attr("data-maxSize");
    }
    else{
      var maxFrameSizeData = this.maxFinishedSize;
    }
    console.log("maxFrameSizeData before => ", maxFrameSizeData)
    if (maxFrameSizeData == '' || maxFrameSizeData == undefined) {
      maxFrameSizeData = "32x42";
    }
    console.log("maxFrameSizeData => ", maxFrameSizeData)
    this.frameMaxWidth = maxFrameSizeData.split("x")[ 0 ];
    this.frameMaxHeight = maxFrameSizeData.split("x")[ 1 ];
    var tmpFrameMaxWidth;
    var tmpFrameMaxHeight;
    let frameWidth;
    if($("#frame_" + this.frameCode).attr("data-width")){
      frameWidth = parseInt($("#frame_" + this.frameCode).attr("data-width"));
    }
    else{
      frameWidth = this.activeFrameWidth;
    }
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) {
      tmpFrameMaxWidth =
        parseInt(this.frameMaxWidth) -
        frameWidth * 2 -
        this.totalMatWidth;
      tmpFrameMaxHeight =
        parseInt(this.frameMaxHeight) -
        frameWidth * 2 -
        this.totalMatHeight;
    } else {
      tmpFrameMaxWidth =
        parseInt(this.frameMaxWidth) -
        frameWidth * 2;
      tmpFrameMaxHeight =
        parseInt(this.frameMaxHeight) -
        frameWidth * 2;
    }
    var customWidth = $("#customWidth").val();
    var customHeight = $("#customHeight").val();
    this.maxFrameSize =
      "Max image size to " + tmpFrameMaxWidth + "″x" + tmpFrameMaxHeight + "″";
    if (this.isCollageApplied == true) {
      tmpFrameMaxWidth =
        parseInt(this.collage_finish_size.split("x")[ 0 ]);
      tmpFrameMaxHeight =
        parseInt(this.collage_finish_size.split("x")[ 1 ]);

      //   tmpFrameMaxWidth =
      //   parseInt(this.collage_finish_size.split("x")[ 0 ]) +
      //   frameWidth * 2;
      // tmpFrameMaxHeight =
      //   parseInt(this.collage_finish_size.split("x")[ 1 ]) +
      //   frameWidth * 2;
        // if(( tmpFrameMaxWidth <= this.frameMaxWidth || tmpFrameMaxWidth <= this.frameMaxHeight) &&
        // (tmpFrameMaxHeight <= this.frameMaxHeight || tmpFrameMaxHeight <= this.frameMaxWidth)){

        // }

      if (
        (tmpFrameMaxWidth <= this.frameMaxWidth && tmpFrameMaxHeight <= this.frameMaxHeight) ||
         (tmpFrameMaxWidth <= this.frameMaxHeight && tmpFrameMaxHeight <= this.frameMaxWidth)
      ) {
        return true;
      } else {
        console.log("abcd 1")
        $("#myModal_maxsize h4").html(
          " Please switch to another frame from bellow frame tab."
        );
        $("#myModal_maxsize").modal("toggle");
        return false;
      }
    } else {
      
      if (
        (customHeight > tmpFrameMaxHeight || customWidth > tmpFrameMaxWidth) &&
        (customWidth > tmpFrameMaxHeight || customHeight > tmpFrameMaxWidth)
      ) {
        if (this.cropFlagOpening == 2 && this.isFrameMatChanged == 0) {
          $(".size-alert").show();
          setTimeout(() => {
            $(".size-alert").hide();
          }, 2000);
          return false;
        } else {
          console.log("abcd 2")
          // Commented because of 27x35 size due to this condition below url redirects to 8x10
          // https://www.arttoframe .com/27x35-Classic-Gold-picture-frame/0066-76808-YGLD?page_type=E
          $("#myModal_maxsize h4").html(
            " Please choose a new frame from Frame tab bellow."
          );
          $("#myModal_maxsize").modal("toggle");
          return false;
        }
        // }
      }
      if (customWidth == '' || customWidth < 3) {
        this.maxFrameSize = "Please enter a minimum size of 3″ x 3″";
        if (this.cropFlagOpening == 2 && this.isFrameMatChanged == 0) {
          $(".size-alert").show();
          setTimeout(() => {
            $(".size-alert").hide();
          }, 2000);
          return false;
        } else {
          console.log("abcd 3")
          $("#myModal_maxsize h4").html(
            " Please enter a minimum size of 3x3"
          );
          $("#myModal_maxsize").modal("show");
        }
        return false;
      } else if (customHeight == '' || customHeight < 3) {
        this.maxFrameSize = "Please enter a minimum size of 3″ x 3″";
        if (this.cropFlagOpening == 2) {
          $(".size-alert").show();
          setTimeout(() => {
            $(".size-alert").hide();
          }, 2000);
          return false;
        } else {
          console.log("abcd 41")
          $("#myModal_maxsize h4").html(
            " Please enter a minimum size of 3x3."
          );
          $("#myModal_maxsize").modal("show");
          return false;
        }
      }
      else{
        $("#myModal_maxsize").modal("hide");
        // return true;
      }
      console.log(this.isFrameChanged)
      // if(!this.isFrameChanged){
        this.getFilterGlassData();
      // }
      this.isFrameChanged = false;
      return true;
    }
  }

  public showSizeSection() {
    $("#size").addClass("show");
    $(".frame-hide-btn").css("display", "block");
    $(".modal").modal("hide");
  }

  ShowFloatingFrames(){
    $("#framesoption").trigger("click");
  }

  public showFrames(param) {
    if(!this.isFloating){
      this.getFilterFramesData();
    }
    return;
  }

  getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
  }

  public showMats(param) {
    if (($("#fancyCheckbox").parent().find("input:checkbox").is(":checked") == true || this.isCollageApplied == true) && !this.instaFrame) {
      $("#bottomMatLi,#topMatLi").css("width", "33%");
      $("#topMatLi").addClass("active");
      $("#bottomMatLi").removeClass("active");
      if ($("#topMatLi").parent().find("input:checkbox").is(":checked") == false) {
        $("#topMatLi").trigger("click");
      }
      if (!this.instaFrame) $("#topmats").attr("disabled", "true");
    } else {
      if (Number(this.instActiveShape) == 4) {
        $("#bottommats").prop("checked", false).removeAttr("checked");
        this.isMatBottomSelected = 0;
      }
      $("#noMatLi").css("display", "block");
      if (this.instaFrame && this.instActiveShape != 3) {
        $("#topmats,#bottommats").attr("disabled", "true");
      }
    }
    if (param == "filter" && this.matFilterID != 0) {
      this.getMatColorFilterData();
    } else {
      var self = this;
      if (this.isLodedMats == 1) {
      } else {
        this.isLodedMats = 1;
      }
    }
    if(!this.matFilterID || this.matFilterID === "0"){
      this.getFilterMatsData();
    }
    else{
      this.getMatColorFilterData();
    }
    if(param != 'matss'){
      $("#matModal").modal("show");
      $("#matModal").css(
        "bottom",
        $(".new-cf-tabs").height() +
        $(".BottomAddtocartHolder").height() + 10 + "px"
      );
    }    
  }
  public showDecorativeMats() {
    this.getDataService.getFancyShapeJSON().subscribe((responce)=>{
      this.decorativeMats = responce;
    })
    this.getDataService.getVgrooveJSON().subscribe((responce)=>{
      this.vgrooveArr = responce;
    })
    let self = this;
    $("#decorModal").modal("show");
    $("#decorModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 10 + "px");
    $(".modal-backdrop.in").css("display", "none");
    $(".frame-hide-btn").css("display", "block");
    $("#frameModal").modal("hide");
    $("#matModal").modal("hide");
    $("#sizemodal").modal("hide");
    $("#glassModal").modal("hide");
    $("#matoption  img").attr("src", self.Helper.cdn1 + "/images/mat_sep.svg");
    $("#framesoption img").attr("src", self.Helper.cdn1 + "/images/frame_sep.svg");
    $("#showsizepopu img").attr("src", self.Helper.cdn1 + "/images/size_sep.svg");
    if (this.instaFrame) {
      $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/instaFrame/insta_shape_active.svg?v=1");
    } else {
      $("#decoroption img").attr("src", self.Helper.cdn1 + "/images/decor_active_sep.svg?v=4");
    }
    $("#glassoption img").attr("src", self.Helper.cdn1 + "/images/glass_sep.svg");
    if ($("#nomats").parent().find("input:checkbox").is(":checked") == true) {
      $("#FancyShapeSlider,#vGrooveSlider").css("display", "none");
      $(".SF-alert-vgroove, .SF-alert-fshape").css("display", "block");
    } else if (
      $("#topmats").parent().find("input:checkbox").is(":checked") == true &&
      $("#bottommats").parent().find("input:checkbox").is(":checked") == false
    ) {
      $("#FancyShapeSlider,.SF-alert-vgroove").css("display", "none");
      $("#vGrooveSlider,.SF-alert-fshape").css("display", "block");
    } else {
      $("#FancyShapeSlider,#vGrooveSlider").css("display", "block");
      $(".SF-alert-vgroove, .SF-alert-fshape").css("display", "none");
    }
    setTimeout(() => {
      if (
        $("#fancyCheckbox").parent().find("input:checkbox").is(":checked") ==
        false
      ) {
        $(".mat-checkbox-green").removeClass("fancy_active");
      }
      if (
        $("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") ==
        false
      ) {
        $(".mat-checkbox-green").removeClass("vgroove_active");
      }
      else{
        console.log(this.selectedVgroove)
        $(".mat-checkbox-green").removeClass("vgroove_active");
        $(".vgrooveSelect_" + this.selectedVgroove).addClass("vgroove_active");
      }
    }, 300);
  }

  public btnHide() {
    $(
      "#sizemodal,#frameModal, #matModal, #decorModal, #glassModal,#AddingToCart_success,#cart_popup"
    ).modal("hide");
    $("#size").removeClass("in active");
    $(".frame-hide-btn").css("display", "none");
  }

  onChangeOpening(event){
    console.log(event)
    this.selectedOpening = event;
    // $(".openingCF-options li").removeClass("openingActive");
    // $("#opening_" + event).addClass("openingActive");
  }

  clickSizeTab(){
    this.getDataService.getCollageOpeningJSON().subscribe((responce)=>{
      console.log(responce);
      this.collageChlidMatArrTemp = responce;
      this.collageChlidMatArrTemp = this.collageChlidMatArrTemp.mat_groups;
      this.CollageOpeningJson = responce;
      this.CollageOpeningJson = this.CollageOpeningJson.openings;
      this.collageOpeningsArray = Object.keys(this.CollageOpeningJson);
      console.log(this.collageOpeningsArray)
    })
  }

  public getCollageDataAngular(data) {
    var self = this;
    console.log("line 2104")
    console.log(data)
    console.log(this.CollageOpeningJson)
    console.log("line 2106")
    if (data == "default") {
      var selectedOpening = this.selectedOpening;
      console.log("selectedOpening  =>  ", selectedOpening);
      this.collageArr = this.CollageOpeningJson[ selectedOpening ];
      console.log("selectedOpening 23 =>  ", selectedOpening);
      $(".layoutTitle").html(this.collageArr[ 0 ].layout + " Layouts");
      $("#imagesizePopupCF").hide();
      $("#showopningpopupCF").modal("hide");
      $("#openingPopupCF").html("OPENING:" + selectedOpening);
      setTimeout(() => {
        $(".bxsliderCollage").scrollLeft(0);
        console.log($(".bxsliderCollage").width())
        if($(".bxsliderCollage").width() === 0){
          $(".bxsliderCollage").css('width', 390)
        }
        var slider_width = $(".bxsliderCollage").width();
        var start_with = 0;
        var end_with = Math.ceil(parseInt(slider_width) / 104);
        console.log(start_with, end_with)
        for (var i = start_with; i < end_with; i++) {
          var path = $(
            ".bxsliderCollage #childeMat_" +
            self.collageArr[ i ][ "id" ] +
            " #mat_" +
            self.collageArr[ i ][ "id" ] +
            "_" +
            self.collageArr[ i ][ "mat_number" ] +
            " img"
          ).attr("data-src");
          $(
            ".bxsliderCollage #childeMat_" +
            self.collageArr[ i ][ "id" ] +
            " #mat_" +
            self.collageArr[ i ][ "id" ] +
            "_" +
            self.collageArr[ i ][ "mat_number" ] +
            " img"
          ).attr("src", path);
          var imagePath =
          self.Helper.cdn1 + "/images/collage/" +
            self.collageArr[ i ][ "id" ] +
            "/" +
            self.top_mat +
            "/" +
            self.bottom_mat +
            "/13.png";
          $(
            ".selectOpening #mat_" +
            self.collageArr[ i ][ "id" ] +
            "_" +
            self.collageArr[ i ][ "mat_number" ] +
            " img"
          ).css("background", "url(" + imagePath + ")center center no-repeat");
          $(
            ".selectOpening #mat_" +
            self.collageArr[ i ][ "id" ] +
            "_" +
            self.collageArr[ i ][ "mat_number" ] +
            " img"
          ).css(
            {"background-size": "90% 90%"},
            {"background-position": "center"}
          );
        }
        start_with = end_with;
        $(".bxsliderCollage").scroll(function () {
          var scroll1 = $(".bxsliderCollage").scrollLeft();
          end_with = Math.ceil(parseInt(scroll1) / 104) + 3;
          for (var i = start_with; i < end_with; i++) {
            if (
              !$(
                ".bxsliderCollage #childeMat_" +
                self.collageArr[ i ][ "id" ] +
                " #mat_" +
                self.collageArr[ i ][ "id" ] +
                "_" +
                self.collageArr[ i ][ "mat_number" ] +
                " img"
              ).attr("src")
            ) {
              var path = $(
                ".bxsliderCollage #childeMat_" +
                self.collageArr[ i ][ "id" ] +
                " #mat_" +
                self.collageArr[ i ][ "id" ] +
                "_" +
                self.collageArr[ i ][ "mat_number" ] +
                " img"
              ).attr("data-src");

              $(
                ".bxsliderCollage #childeMat_" +
                self.collageArr[ i ][ "id" ] +
                " #mat_" +
                self.collageArr[ i ][ "id" ] +
                "_" +
                self.collageArr[ i ][ "mat_number" ] +
                " img"
              ).attr("src", path);

              var imagePath =
              self.Helper.cdn1 + "/images/collage/" +
                self.collageArr[ i ][ "id" ] +
                "/" +
                self.top_mat +
                "/" +
                self.bottom_mat +
                "/13.png";

              $(
                ".selectOpening #mat_" +
                self.collageArr[ i ][ "id" ] +
                "_" +
                self.collageArr[ i ][ "mat_number" ] +
                " img"
              ).css(
                "background",
                "url(" + imagePath + ")center center no-repeat"
              );

              $(
                ".selectOpening #mat_" +
                self.collageArr[ i ][ "id" ] +
                "_" +
                self.collageArr[ i ][ "mat_number" ] +
                " img"
              ).css(
                {"background-size": "90% 90%"},
                {"background-position": "center"}
              );
            }
          }
          start_with = end_with;
        });
      }, 300);
    }
  }

  public getCollageOpeningData() {
    var selectedOpening = this.selectedOpening;
    $("#showopningpopupCF").modal("hide");
    $("#openingPopupCF").html("OPENING:" + selectedOpening);
    this.collageArr = this.CollageOpeningJson[ selectedOpening ];
    $(".layoutTitle").html(this.collageArr[ 0 ].layout + " Layouts");
    $("#imagesizePopupCF").hide();
    console.log(this.CollageOpeningJson)
    console.log("line 2256")
    this.getCollageDataAngular("default");
  }

  public getSingleOpening() {
    this.wordShapeCollage = false;
    $("#mat_" + this.matcode + "_" + this.collage_mat_number).removeClass(
      "active"
    );
    this.openingsizes = 1;
    this.isCollageApplied = false;
    if (this.instaFrame) {
      $("#customWidth").val(this.customWidth);
      $("#customHeight").val(this.customHeight);
      this.productSwitch(80);
    } else {
      $("#customWidth").val(8.0);
      $("#customHeight").val(10.0);
      this.productSwitch(79);
    }
    if(this.isFloating || this.isMatOnlyProduct){
      $("#imagelayer-canvas").css("background", "white");
    }
    else{
      $("#imagelayer-canvas").css("background", "#4a4a4a");
    }
    $("#groovecanvas,#innerlayer-canvas").css("display", "block");
    $(".vgrooveSection, #engraving").removeClass("active in");
    $(".fancySection, #fancy-shape").addClass("active in");
    $(".vgrooveSection").css("width", "50%");
    $(".fancySection").show();
    this.isSwap = 1;
    this.confirmSizeE('true');
  }

  public selectAdvanceOption(range){
    if(range === "range"){
      $("#range-slider").css("display", "block");
      $("#border-size").css("display", "none");
    }
    else{
      $("#range-slider").css("display", "none");
      $("#border-size").css("display", "block");
    }
  }

  // =======preview function===========

  public changeFrame(e) {
    this.isFloatingFrame = false;
    var self = this;
    this.change_item = "Default Configuration";
    this.change_item_for_hardware = false;
    this.reviewPage = this.reviewLoadButton = 1;
    this.frameColor = e.color_class;
    this.frameRabbit = e.rabbit;
    this.frameLipWidth = e.lip_width;
    this.frameSpecies =  e.species;
    if (this.isCollageApplied == false) {
      this.isFrameMatChanged = 1;
    } else {
      this.isFrameMatChanged = 0;
    }
    var old_frameMaxWidth = this.frameMaxWidth;
    var old_frameMaxHeight = this.frameMaxHeight;
    var old_frameCode = this.frameCode;
    if(e.finished_size){
      this.frameMaxHeight = e.finished_size.split("x")[ 1 ];
      this.frameMaxWidth = e.finished_size.split("x")[ 0 ];
    }
    else{
      this.frameMaxHeight = e.max_finished_size.split("x")[ 1 ];
      this.frameMaxWidth = e.max_finished_size.split("x")[ 0 ];
    }
    this.frameCode = e.code;
    this.isFrameSelected = true;
    console.log(e)
    // this.getSearchLabels();
    this.isFrameChanged = true;
    this.isFrameChanged1 = true;
    if(!this.isMatOnlyProduct){
      var returnVal = this.inputValidation();
    }
    else{
      var returnVal = true;
    }
    
    if (returnVal != true) {
      this.frameMaxHeight = old_frameMaxWidth;
      this.frameMaxWidth = old_frameMaxHeight;
      this.frameCode = old_frameCode;
      this.isFrameMatChanged = 0;
      return false;
    }
    this.activeFrameName = e.name;
    this.frameURL = '';
    if (e.frame_id) {
      this.activeFrameId = e.frame_id;
    } else {
      this.activeFrameId = e.id;
    }
    this.frameMaterial = e.material_class;
    if (e.product_page_note != '') {
      $("#info_log").css("display", "block");
      this.frameNote = e.product_page_note;
    } else {
      $("#info_log").css("display", "none");
      this.frameNote = '';
    }
    if (e.framewidth) {
      this.activeFrameWidth = e.framewidth;
      this.activeFrameWidth1 = e.framewidth;
      this.frameWidth = e.framewidth;
    } else {
      this.activeFrameWidth = e.width;
      this.activeFrameWidth1 = e.width;
      this.frameWidth = e.width;
    }
    this.frameURL =
    self.Helper.cdn1 + "/products/frames/SwatchSmall/" +
      this.frameCode +
      "/100.jpg";
      console.log(this.frameURL);
    this.Helper.testWebP(this.frameURL).then(hasWebP =>{
      console.log(hasWebP);
      if(!hasWebP){
        // this.Helper.getWebpImagesAngular(this.frameURL).subscribe((responce:any)=>{
        //   console.log(responce)
        // })
      }
    });

    this.Helper.getFrameDataFromDB(this.frameCode).subscribe((data: any) => {
      self.framesImageArry = data.images;
      if(data.search_label){
        this.bestSellerDiv['display'] = 'block';
        this.offerImagePath = data.search_label;
      }
      else{
        this.bestSellerDiv['display'] = 'none';
      }
      $(".sliderImage").css("width", this.canvasWidth);
      $(".sliderImage").css("height", this.canvasHeight);
    });
    $(".myFrame").removeClass("frame_active");
    $("#myFrame_" + this.frameCode).addClass("frame_active");
    $(".ngxcarouselPoint li").removeClass("active");
    $(".ngxcarouselPoint li:first-child").addClass("active").click();
    this.cropFlagOpening = 2;
    if (this.noMat == 1) {
      this.confirmSizeE('true');
    } else {
      console.log("Arrange 3 ")
      this.arrange();
    }
    this.getUserReview()
    // this.getPrice();
  }

  public arrange() {
    $(
      ".main-product-preview,.mainConatiner,#previewSlider,.main-prevewcls"
    ).css("height", $(window).height() - 300);
    $("#preview_container").css("height", $(window).height() - 300);
    $(".equal-heights").css("height", $(window).height() - 300);
    $(".equal-heights").css("width", $("#preview_container").width());
    $(".ngxcarouselPoint").css("top", $(window).height() - 300);
      this.preview_max_height = $("#preview_container").height() - 30;
      this.previewWidthMax = $("#preview_container").width() - 30;
    if (this.preview_max_height <= 50) {
      this.preview_max_height = this.previewWidthMax;
      $("#preview_container").height(this.previewWidthMax + 25);
    }
    if (this.isFrameMatChanged == 0) {
      this.customWidth = parseFloat($("#customWidth").val());
      this.customHeight = parseFloat($("#customHeight").val());
    }
    if (this.isCollageApplied == false) {
      // console.log("inputValidation 2")
      // var returnVal = this.inputValidation();
      // if (returnVal == false) {
      //   this.customWidth = 8;
      //   this.customHeight = 10;
      //   // console.log("size 5  ", this.customWidth + "x" + this.customHeight)
      //   $("#customWidth").val(8);
      //   $("#customHeight").val(10);
      //   this.totalMatWidth = 4;
      //   this.totalMatHeight = 4;
        
      //   this.getMatPositions();
      // }
    }
    // this.selectedGlassVal = this.getDefaultGlassID();
    this.isFrameMatChanged = 0;
    var scale1 = 1;
    var scale2 = 1;
    if (this.isCollageApplied == true) {
      this.framewidth1 =
        (this.customWidth + 2 * this.activeFrameWidth) * this.ppi;
      this.frameheight =
        (this.customHeight + 2 * this.activeFrameWidth) * this.ppi;
    } else {
      if (this.selected_mat == '') {
        this.framewidth1 =
          (this.customWidth + this.matWidth + 2 * this.activeFrameWidth) *
          this.ppi;
        this.frameheight =
          (this.customHeight + this.matWidth + 2 * this.activeFrameWidth) *
          this.ppi;
      } else {
        this.framewidth1 =
          (this.customWidth + this.totalMatWidth + 2 * this.activeFrameWidth) *
          this.ppi;
        this.frameheight =
          (this.customHeight +
            this.totalMatHeight +
            2 * this.activeFrameWidth) *
          this.ppi;
      }
    }
    if (this.frameheight > this.preview_max_height) {
      scale2 = this.preview_max_height / this.frameheight;
      this.frameheight = this.preview_max_height;
      this.framewidth1 = this.framewidth1 * scale2;
    }
    if (this.framewidth1 > this.previewWidthMax) {
      scale1 = this.previewWidthMax / this.framewidth1;
      this.framewidth1 = this.previewWidthMax;
      this.frameheight = this.frameheight * scale1;
    }
    this.scale = scale1 * scale2;
    if (this.frameheight <= 0 || this.preview_max_height <= 0) {
      this.frameheight = 440; //295//;
      this.framewidth = 380; //260;
      this.scale = 0.43;
    }
    if (this.isCollageApplied == true) {
      this.framewidth =
        (this.customWidth + 2 * this.activeFrameWidth) * this.ppi * this.scale;
      this.frameheight =
        (this.customHeight + 2 * this.activeFrameWidth) * this.ppi * this.scale;
    } else {
      if (this.selected_mat == '') {
        this.framewidth =
          (this.customWidth + this.matWidth + 2 * this.activeFrameWidth) *
          this.ppi *
          this.scale;
        this.frameheight =
          (this.customHeight + this.matWidth + 2 * this.activeFrameWidth) *
          this.ppi *
          this.scale;
      } else {
        this.framewidth =
          (this.customWidth + this.totalMatWidth + 2 * this.activeFrameWidth) *
          this.ppi *
          this.scale;
        this.frameheight =
          (this.customHeight +
            this.totalMatHeight +
            2 * this.activeFrameWidth) *
          this.ppi *
          this.scale;
      }
    }
    this.loadCanvasFrame();
    this.setTopMat();
    this.fancyShapeValidation();
    setTimeout(() => {
      if(this.isManageNoMat === 0){
        console.log("Price 1")
        this.getPrice();
      }
      this.isManageNoMat = 0
    }, 50);
    // Commented below function because url bouncing
    // this.UpdateUrl();
  }

  getProductDetails() {
    this.isProductDesc = false;
    $("#on_click__desc_show").html('');
    if (this.isCollageApplied == true) {
    var matcode = '' + this.matcode + '';
  } else {
    var matcode = "custom";
    if (this.productCode == 38) {
      matcode = '';
    }
  }
  if (this.productCode == 79) {
    matcode = "custom-dm-" + this.customWidth + "x" + this.customHeight;
  }
  var topmat = 0;
  var bottommat = 0;
  var topMatVal = this.top_mat;
  var bottomMatVal = this.bottom_mat;
  var selected_frame_size = this.customWidth + "x" + this.customHeight;
  if (this.productCode == 79 || this.productCode == 78) {
    selected_frame_size = this.customWidth + this.totalMatWidth + "x" + (this.customHeight + this.totalMatHeight);
    topmat = topMatVal;
    bottommat = bottomMatVal;
  } else if (this.productCode == 38) {
    topmat = 0;
    bottommat = 0;
  } else if (this.productCode == 92){
    selected_frame_size = this.customWidth + this.totalMatWidth + "x" + (this.customHeight + this.totalMatHeight);
    topmat = topMatVal;
    bottommat = bottomMatVal;
  }
  let params = {
    product_type: this.productCode,
    size: selected_frame_size,
    frame_code: this.frameCode,
    ppi: this.ppi, 
    mat1: topmat,
    mat2: bottommat,
    hardware: this.hardwareID,
    multimat_id: matcode,
    product_sub_type : this.productSubType
  }
  this.Helper.getProductDetails(params).subscribe((res: any) => {
    this.product_bullet_points = [];
    $("#displayNonee").css('display', 'none')
    this.glassBullet = ''
    this.hardwareBullet = ''
    this.speciesBullet = ''
    this.framewidthBullet = ''
    this.frameidBullet = ''
    this.framecolorBullet = ''
    this.framenameBullet = ''
    this.finishBullet = ''
    this.openingBullet = ''
    if(res.product_bullet_points){
      $("#displayNonee").css('display', 'block')
      this.product_bullet_points = res.product_bullet_points.split('|*|')
      this.product_bullet_points.forEach((data)=>{
        if(data.split(" ").pop() === '#GLASS#'){
          let glass = data.substring(0, data.lastIndexOf(" "));
          const words = glass.split(' ')
          var glass_name = $(".applicableGlass_" + this.selectedGlassVal)
          .find(".glass-name")
          .text();
          words.splice(words.length, 0, glass_name)
          this.glassBullet = words.join(' ')
        }
        if(data.split(" ").pop() === '#HARDWARE#'){
          // let hardware = data.substring(0, data.lastIndexOf(" "));
          // const words = hardware.split(' ')
          // if(this.productCode != 38){
          //   var hardware_name = $("#hardware_" + this.hardwareID)
          // .html()
          // .split("<")[ 0 ]
          // words.splice(words.length, 0, hardware_name)
          // }
          
          // this.hardwareBullet = words.join(' ')
        }
        if(data.split(" ").pop() === '#SPECIES#'){
          let glass = data.substring(0, data.lastIndexOf(" "));
          const words = glass.split(' ')
          words.splice(words.length, 0, this.frameSpecies)
          this.speciesBullet = words.join(' ')
        }
        if(data.split(" ").pop() === '#FRAME_WIDTH#'){
          let frameWidth = data.substring(0, data.lastIndexOf(" "));
          const words = frameWidth.split(' ')
          words.splice(words.length, 0, parseFloat(this.activeFrameWidth).toFixed(2))
          this.framewidthBullet = words.join(' ')
        }
        if(data.split(" ").pop() === '#FRAME_ID#'){
          let frameWidth = data.substring(0, data.lastIndexOf(" "));
          const words = frameWidth.split(' ')
          words.splice(words.length, 0, this.frameCode)
          this.frameidBullet = words.join(' ')
        }
        if(data.split(" ").pop() === '#FRAME_COLOUR#'){
          let frameColor = data.substring(0, data.lastIndexOf(" "));
          const words = frameColor.split(' ')
          words.splice(words.length, 0, this.frameColor)
          this.framecolorBullet = words.join(' ')
        }
        if(data.split(" ").pop() === '#FRAME_NAME#'){
          let frameName = data.substring(0, data.lastIndexOf(" "));
          const words = frameName.split(' ')
          words.splice(words.length, 0, this.activeFrameName)
          this.framenameBullet = words.join(' ')
        }
        // if(data.split(" ").pop() === '#TOP_MAT_COLOR#'){
        //   let frameName = data.substring(0, data.lastIndexOf(" "));
        //   const words = frameName.split(' ')
        //   words.splice(words.length, 0, this.activeFrameName)
        //   this.framenameBullet = words.join(' ')
        // }
        if(data.split(" ").pop() === '#FINISHED_SIZE#'){
          let finishedSize = data.substring(0, data.lastIndexOf(" "));
          const words = finishedSize.split(' ')
          words.splice(words.length, 0, this.finishedSize)
          this.finishBullet = words.join(' ')
        }
        if(data.split(" ").pop() === '#OPENING_SIZE#'){
          let openingSize = data.substring(0, data.lastIndexOf(" "));
          const words = openingSize.split(' ')
          words.splice(words.length, 0, this.openingSize)
          this.openingBullet = words.join(' ')
        }
      })
    }
    else{
      // $("#displayNoneeee").css('display', 'block')
    }

    let proDesc = res['product_discription'];
    
      if (proDesc) {
        this.isProductDesc = true;
        proDesc = proDesc.replace('#FRAME_COLOUR#','<span class="frame_clr">'+this.frameColor+'</span>');
        
        proDesc = proDesc.replace('#FRAME_NAME#','<span class="frame_clr">'+this.activeFrameName+'</span>');

        proDesc = proDesc.replace('#FRAME_MATERIAL#','<span class="frame_mtr">'+this.frameMaterial+'</span>');

        // proDesc = proDesc.replace('#TOP_MAT_COLOR#','<span class="top_mat_clr">'+topMatClr+'</span>');

        proDesc = proDesc.replace('#FRAME_ID#','<span class="frame_id">'+this.frameCode+'</span>');
        
        proDesc = proDesc.replace('#FINISHED_SIZE#','<span class="finish_size">'+this.finishedSize+'</span>');

        proDesc = proDesc.replace('#OPENING_SIZE#','<span class="opening_Size">'+this.openingSize+'</span>');

        var glass_name = $(".applicableGlass_" + this.selectedGlassVal)
          .find(".glass-name")
          .text();
        proDesc = proDesc.replace('#GLASS#','<span class="glass">'+glass_name+'</span>');
        // if(this.productCode != 38){
        //   var hardware_name = $("#hardware_" + this.hardwareID)
        //   .html()
        //   .split("<")[ 0 ]
        // }
        
        // proDesc = proDesc.replace('#HARDWARE#','<span class="hardware_sel">'+hardware_name+'</span>');

        proDesc = proDesc.replace('#SPECIES#','<span class="species_id">'+this.frameSpecies+'</span>');
        
        proDesc = proDesc.replace('#FRAME_WIDTH#','<span class="frame_widths">'+parseFloat(this.activeFrameWidth).toFixed(2)+'</span>');

        proDesc = proDesc.replace('#FRAME_HEIGHT#','<span class="frame_heights">'+this.frameheight.toFixed(2)+'</span>');

        proDesc = proDesc.replace('#FRAME_RABBIT#','<span class="frame_rabbit">'+this.frameRabbit+'</span>');

        proDesc = proDesc.replace('#FRAME_LIP#','<span class="frame_lip">'+this.frameLipWidth+'</span>');

        proDesc = proDesc.replace('#PRODUCT_WEIGHT#','<span class="frame_weight">'+this.activeFrameWidth+'</span>');

        proDesc = proDesc.replace('#POSTIONTOP#','<span class="position_top">'+this.pos_top+'</span>');

        proDesc = proDesc.replace('#POSTIONBOTTOM#','<span class="position_bottom">'+this.pos_bottom+'</span>');

        proDesc = proDesc.replace('#POSTIONLEFT#','<span class="position_left">'+this.pos_left+'</span>');

        proDesc = proDesc.replace('#POSTIONRIGHT#','<span class="position_right">'+this.pos_right+'</span>');
       
        $("#on_click__desc_show").html(proDesc);
      }
    
  })
}

  public fancyShapeValidation() {
    if (this.isCollageApplied == true) {
      $(".fancySection, #fancy-shape").removeClass("active in");
      $(".vgrooveSection, #engraving").addClass("active in");
      $(".vgrooveSection").css("width", "100%");
      $(".fancySection,#popupmatcanvas").hide();
      this.setSecondMatCollage();
      this.setCanvasOpenings();
    } else {
      $("#openingSelectorContainer").show();
      this.setSecondMat();
      if (this.isMatTrippleSelected === 1) {
        this.setThirdMat();
      }
      this.setCanvasSingleOpenings();
      if ($("#fancyCheckbox").parent().find("input:checkbox").is(":checked") == true) {
        if(this.ismatpopup === false){
          this.PopupMat(this.singlePopupMatImg);
        }
      }
    }
    if ($("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") == true) {
      $("#groovecanvas").show();
      this.setVgroove();
    } else {
      $("#groovecanvas").hide();
    }
  }

  public loadCanvasFrame() {
    if (this.noMat == 1) {
      this.isInnerLayerChange = true;
      this.isImageLayerChange = true;
    }
    this.activeFrameLipWidth = 0.25; //$("#frame_"+this.frameCode.val()).attr('data-lip_width');
    this.activeFramePrice = 0.213; //parseFloat($("#frame_"+this.frameCode.val()).attr('data-price'));
    this.activeFrameTimeFactor = 3.5; //parseFloat($(".mainframeCotainter .frame.active").attr('data-time_factor'));
    var sliderHeight = parseInt($(".mainConatiner").height()) - 70;
    $(".bx-wrapper img").css("max-height", sliderHeight + "px");
    this.frameWidth = this.activeFrameWidth * this.ppi * this.scale;
    if(this.isMatOnlyProduct){
      this.frameWidth = 1;
    }
    this.swatchImgPath = this.Helper.getDefaultSwatchImg();
    this.image = "/assets/test.jpeg";
    let framecanvas = this.framecanvas.nativeElement;
    this.ctx = framecanvas.getContext("2d");
    this.canvasWidth = this.framewidth; //this.frameCanvas.width;
    this.canvasHeight = this.frameheight; //this.frameCanvas.height;
    $(".sliderImage").css("width", this.canvasWidth);
    $(".sliderImage").css("height", this.canvasHeight);
    if (this.isMainCanvasChange || this.isImageOnLoad) {
      var stroke = 5; //(parseFloat(this.linethick.val()) *72) * this.scale;
      if (this.noMat == 1) {
        this.matWidth = 0;
        stroke = 0;
      }
      let swatchCanvas = this.swatchCanvas.nativeElement;
      let ctxSwatch = swatchCanvas.getContext("2d");
      var imgD = new Image();
      imgD.crossOrigin = "anonymous";
      imgD.src = this.frameURL; //'/assets/cherry.jpg';
      imgD.onload = () => {
        var swatchScale = this.frameWidth / imgD.naturalHeight;
        swatchCanvas.height = this.frameWidth;
        swatchCanvas.width = imgD.naturalWidth * swatchScale;
        ctxSwatch.drawImage(
          imgD,
          0,
          0,
          imgD.naturalWidth,
          imgD.naturalHeight,
          0,
          0,
          imgD.naturalWidth * swatchScale,
          this.frameWidth
        );
        $("#swatchResizedImg").attr("src", '');
      this.base64Image = this.sanitizer.bypassSecurityTrustResourceUrl(swatchCanvas.toDataURL());    
        $("#swatchResizedImg").attr("src", this.base64Image.changingThisBreaksApplicationSecurity);
      };
      this.isMainCanvasChange = false;
      var self = this;
      document.getElementById("swatchResizedImg").onload = () => {
        self.swatchResizedImageLoad();
      };
    }
  }
  public swatchResizedImageLoad() {
    $("#swatchResizedImgMobile").css({
      "display": "none"
    })
    var toRadians = 0.017453292519943295; //Math.PI/180;
    let c2 = this.tempCanvas.nativeElement;
    let ctx2 = c2.getContext("2d");
    c2.width = this.framewidth; //$(".main-product-preview").width()-100;//400
    c2.height = this.frameheight; //$(".mainConatiner").height()-100;//400;
    this.canvasWidth = this.framewidth; //$(".main-product-preview").width()-100;
    this.canvasHeight = this.frameheight; //$(".main-product-preview").width()-100;
    let framecanvas = this.framecanvas.nativeElement;
    let ctx = framecanvas.getContext("2d");
    framecanvas.width = this.canvasWidth; //$(".main-product-preview").width();
    framecanvas.height = this.canvasHeight; //$(".mainConatiner").height();//400;
    var pat = ctx.createPattern(
      document.getElementById("swatchResizedImg"),
      "repeat"
    );
    ctx.clearRect(0, 0, framecanvas.width, framecanvas.height);
    ctx2.clearRect(0, 0, this.frameWidth, this.frameWidth);
    ctx.fillStyle = pat;
    ctx.beginPath();
    ctx2.moveTo(0, 0);
    ctx2.lineTo(this.canvasWidth, 0);
    ctx2.lineTo(this.canvasWidth - this.frameWidth, this.frameWidth);
    ctx2.lineTo(this.frameWidth, this.frameWidth);
    ctx2.closePath();
    ctx2.rotate(0 * toRadians);
    var pat2 = ctx2.createPattern(
      document.getElementById("swatchResizedImg"),
      "repeat"
    );
    ctx2.fillStyle = pat2;
    ctx2.fill();
    ctx2.save();
    ctx.drawImage(c2, 0, 0);
    c2.width = this.canvasWidth;
    c2.height = this.frameWidth;
    ctx2.clearRect(0, 0, this.canvasWidth, this.frameWidth);
    ctx2.beginPath();
    ctx2.moveTo(this.frameWidth, 0);
    ctx2.lineTo(this.canvasWidth - this.frameWidth, 0);
    ctx2.lineTo(this.canvasWidth, this.frameWidth);
    ctx2.lineTo(0, this.frameWidth);
    ctx2.closePath();
    ctx2.rotate(180 * toRadians);
    var pat2 = ctx2.createPattern(
      document.getElementById("swatchResizedImg"),
      "repeat"
    );
    ctx2.fillStyle = pat2;
    ctx2.fill();
    ctx2.save();
    ctx.drawImage(c2, 0, this.canvasHeight - this.frameWidth);
    c2.width = this.frameWidth;
    c2.height = this.canvasHeight;
    ctx2.clearRect(0, 0, this.frameWidth, this.canvasHeight);
    ctx2.beginPath();
    ctx2.moveTo(0, 0);
    ctx2.lineTo(this.frameWidth, this.frameWidth);
    ctx2.lineTo(this.frameWidth, this.canvasHeight - this.frameWidth);
    ctx2.lineTo(0, this.canvasHeight);
    ctx2.closePath();
    ctx2.rotate(-90 * toRadians);
    var pat2 = ctx2.createPattern(
      document.getElementById("swatchResizedImg"),
      "repeat"
    );
    ctx2.fillStyle = pat2;
    ctx2.fill();
    ctx2.save();
    ctx.drawImage(c2, 0, 0);
    c2.width = this.frameWidth;
    c2.height = this.canvasHeight;
    ctx2.clearRect(0, 0, this.frameWidth, this.canvasHeight);
    ctx2.beginPath();
    ctx2.moveTo(this.frameWidth, 0);
    ctx2.lineTo(this.frameWidth, this.canvasHeight);
    ctx2.lineTo(0, this.canvasHeight - this.frameWidth);
    ctx2.lineTo(0, this.frameWidth);
    ctx2.closePath();
    ctx2.rotate(90 * toRadians);
    var pat2 = ctx2.createPattern(
      document.getElementById("swatchResizedImg"),
      "repeat"
    );
    ctx2.fillStyle = pat2;
    ctx2.fill();
    ctx2.save();
    ctx.drawImage(c2, this.canvasWidth - this.frameWidth, 0);
    this.setTopMat();
  }
 
  public setTopMat() {
    this.canvasMatScale = {
      top: parseFloat(this.frameWidth) - 1,
      left: parseFloat(this.frameWidth),
      width: this.framewidth - parseFloat(this.frameWidth) * 2,
      height: this.frameheight - parseFloat(this.frameWidth) * 2,
    };
    this.ctx.beginPath();
    var topMatImg = new Image();
    topMatImg.crossOrigin = "anonymous";
    if (
      $("#nomats").parent().find("input:checkbox").is(":checked") == false
    ) {
      topMatImg.src = this.Helper.cdn1 + "/products/mats/images/200/" + this.top_mat + ".jpg"; //"/assets/mat.jpg";
      // this.Helper.getWebpImagesAngular(topMatImg.src).subscribe((responce:any)=>{
      //   console.log(responce)
      // })
    }
    topMatImg.onload = () => {
      this.ctx.fillStyle = this.ctx.createPattern(topMatImg, "repeat"); //"#FF0000"
      this.ctx.fillRect(this.canvasMatScale.left, this.canvasMatScale.top, this.canvasMatScale.width, this.canvasMatScale.height);
    };
  }

  public setSecondMat() {
    let innerlayerCanvas = this.innerlayerCanvas.nativeElement;
    let innerLayerCtx = innerlayerCanvas.getContext("2d");
    var stroke = 0.25 * this.ppi * this.scale; //(parseFloat(this.$linethick.val()) * this.configuration.ppi) * this.scale;
    var width = this.customWidth * this.ppi * this.scale;
    var height = this.customHeight * this.ppi * this.scale;
    var left = (2 * this.ppi + this.activeFrameWidth * this.ppi) * this.scale -
      1.85 * stroke;
    var top = (2 * this.ppi + this.activeFrameWidth * this.ppi) * this.scale -
      1.9 * stroke;
    $("#innerlayer-canvas").css("top", top + 5);
    $("#innerlayer-canvas").css("left", 0);
    innerlayerCanvas.width = width + 8;
    innerlayerCanvas.height = height + 8;
    this.canvasSecondMatScale = {
      height: height,
      left: left,
      top: top,
      width: width,
    };
    if(this.isFloating || this.isMatOnlyProduct){
      var html = '<a href="javascript:void(0);" class="settings-upload"><img src="https://www.arttoframe.com/info_back_image_vertical_new.png"  width="' + this.canvasSecondMatScale.width + '" height="' + this.canvasSecondMatScale.height + '" style="display:none"></a>';
    }
    var html = '<a href="javascript:void(0);" class="settings-upload"><img src="https://cdn1.arttoframe.com/images/upload-with-text_05.svg"  width="' + this.canvasSecondMatScale.width + '" height="' + this.canvasSecondMatScale.height + '" style="display:none"></a>';
    $(".openingImg").append(html);
    innerLayerCtx.beginPath();
    if (
      $("#nomats").parent().find("input:checkbox").is(":checked") == false
    ) {
      var color =
      "https://www.arttoframe.com/products/mats/images/200/" +
      this.bottom_mat +
      ".jpg";
    }
    var bottomColorImg = new Image();
    bottomColorImg.src = color;
    bottomColorImg.onload = () => {
      innerLayerCtx.fill();
    innerLayerCtx.lineWidth = stroke + 4;
    setTimeout(() => {
      innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(
        bottomColorImg,
        "repeat"
      );
      if (
        $("#nomats").parent().find("input:checkbox").is(":checked") == false
      ) {
        innerLayerCtx.strokeRect(
          3,
          3,
          this.canvasSecondMatScale.width,
          this.canvasSecondMatScale.height
        );
        innerLayerCtx.strokeStyle = "rgb(241, 241, 241)";
        innerLayerCtx.lineWidth = 2;
        innerLayerCtx.strokeRect(
          0,
          0,
          this.canvasSecondMatScale.width + 7,
          this.canvasSecondMatScale.height + 7
        );
      }
    }, 100);
    }
  }

  public setThirdMat(){
    let innerlayerCanvas = this.innerlayerCanvas.nativeElement;
    let innerLayerCtx = innerlayerCanvas.getContext("2d");
    var stroke = 0.25 * this.ppi * this.scale; //(parseFloat(this.$linethick.val()) * this.configuration.ppi) * this.scale;
    var width = this.customWidth * this.ppi * this.scale;
    var height = this.customHeight * this.ppi * this.scale;
    var left =
      ((2 * this.ppi + this.activeFrameWidth * this.ppi) * this.scale -
      1.85 * stroke);
    var top =
      ((2 * this.ppi + this.activeFrameWidth * this.ppi) * this.scale -
      1.9 * stroke);
    $("#innerlayer-canvas").css("top", top + 5);
    $("#innerlayer-canvas").css("left", 0);
    innerlayerCanvas.width = width + 8;
    innerlayerCanvas.height = height + 8;
    this.canvasThirdMatScale = {
      height: height,
      left: left,
      top: top,
      width: width,
    };
    if(this.isFloating || this.isMatOnlyProduct){
      var html = '<a href="javascript:void(0);" class="settings-upload"><img src="https://www.arttoframe.com/info_back_image_vertical_new.png"  width="' + this.canvasThirdMatScale.width + '" height="' + this.canvasThirdMatScale.height + '" style="display:none"></a>';
    }
    var html = '<a href="javascript:void(0);" class="settings-upload"><img src="https://cdn1.arttoframe.com/images/upload-with-text_05.svg"  width="' + this.canvasThirdMatScale.width + '" height="' + this.canvasThirdMatScale.height + '" style="display:none"></a>';
    $(".openingImg").append(html);
    innerLayerCtx.beginPath();
    var color =
      "https://cdn1.arttoframe.com/products/mats/images/200/" +
      this.tripple_mat +
      ".jpg";
    var trippleColorImg = new Image();
    trippleColorImg.src = color;
    trippleColorImg.onload = () => {
      innerLayerCtx.fill();
    innerLayerCtx.lineWidth = stroke + 4;
    setTimeout(() => {
      innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(
        trippleColorImg,
        "repeat"
      );
      if (
        $("#nomats").parent().find("input:checkbox").is(":checked") == false
      ) {
        innerLayerCtx.strokeRect(
          3 + 5,
          3 + 5,
          this.canvasThirdMatScale.width - (5 * 2),
          this.canvasThirdMatScale.height - (5 * 2),
        );
        innerLayerCtx.strokeStyle = "rgb(241, 241, 241)";
        innerLayerCtx.lineWidth = 2;
        innerLayerCtx.strokeRect(
          0,
          0,
          this.canvasThirdMatScale.width + 7,
          this.canvasThirdMatScale.height + 7
        );
      }
    }, 100);
    } 
  }

  public setCanvasSingleOpenings() {
    var self = this;
    let imagelayerCanvas = this.imagelayercanvas.nativeElement;
    this.imageLayerCtx = imagelayerCanvas.getContext("2d");
    var stroke = 1 * this.ppi * this.scale;
    var width = 1;
    var height = 2;
    var left = 3;
    var top = 4;
    var bottom = 2;
    var right = 2;
    if (this.selected_mat == '' && this.productCode == 38) {
      console.log("Mat only not =>>>>>>>>>>>>>>>")
      width = this.canvasMatScale.width;
      height = this.canvasMatScale.height;
      left = this.canvasMatScale.left;
      top = this.canvasMatScale.top;
    } else {
      console.log("Mat only =>>>>>>>>>>>>>>>")
      width = this.customWidth * this.ppi * this.scale;
      height = this.customHeight * this.ppi * this.scale;
      left =
        (this.pos_left * this.ppi + this.activeFrameWidth * this.ppi) *
        this.scale -
        1.85 * stroke;
      top =
        (this.pos_top * this.ppi + this.activeFrameWidth * this.ppi) *
        this.scale -
        1.9 * stroke;
    }
    imagelayerCanvas.width = width;
    imagelayerCanvas.height = height;
    if(this.isMatTrippleSelected === 1){
      imagelayerCanvas.width = imagelayerCanvas.width - 13;
      imagelayerCanvas.height = imagelayerCanvas.height -12;
    }
    var newWidth = 0;
    var newHeight = 0;
    var ptageScale = 2.8; //0.35;//0.50;  // 15%
    var orgImgWidth = 250;
    var orImgHeight = 320;
    if (parseInt(this.customWidth) > parseInt(this.customHeight)) {
      newHeight = 2 * 72 * ptageScale * this.scale;
      newWidth = (orgImgWidth * newHeight) / orImgHeight;
      if (this.selected_mat == '' && this.productCode == 38) {
        $("#imagelayer-canvas").css({top: 0, bottom: 0, left: 0, right: 0});
      } else {
        $("#imagelayer-canvas").css("top", top + 24 + "!important");
        $("#imagelayer-canvas").css("left", 0 + "!important");
      }
    } else {
      newWidth = 2 * 72 * ptageScale * this.scale;
      newHeight = (orImgHeight * newWidth) / orgImgWidth;
      if (this.selected_mat == '' && this.productCode == 38) {
        $("#imagelayer-canvas").css({top: 0, bottom: 0, left: 0, right: 0});
      }
    }
    if (this.selected_mat != '' && this.productCode != 38) {
      if (self.pos_bottom != 2) {
        top =
          ((self.pos_bottom * this.ppi + this.activeFrameWidth * this.ppi) *
            this.scale -
            1.5 * stroke) /
          2;
        $(
          "#imagelayer-canvas, #innerlayer-canvas, #main_imagelayer_canvas, #main_innerlayer_canvas"
        ).css("bottom", top);
      } else {
        $(
          "#imagelayer-canvas, #innerlayer-canvas, #main_imagelayer_canvas, #main_innerlayer_canvas"
        ).css("bottom", 0);
      }
      if (self.pos_left != 2) {
        bottom =
          ((self.pos_left * this.ppi + this.activeFrameWidth * this.ppi) *
            this.scale -
            1.5 * stroke) /
          2;
        $(
          "#imagelayer-canvas, #innerlayer-canvas, #main_imagelayer_canvas, #main_innerlayer_canvas"
        ).css("left", bottom);
      } else {
        $(
          "#imagelayer-canvas, #innerlayer-canvas, #main_imagelayer_canvas, #main_innerlayer_canvas"
        ).css("left", 0);
      }
      if (self.pos_right != 2) {
        left =
          ((self.pos_right * this.ppi + this.activeFrameWidth * this.ppi) *
            this.scale -
            1.5 * stroke) /
          2;
        $(
          "#imagelayer-canvas, #innerlayer-canvas, #main_imagelayer_canvas, #main_innerlayer_canvas"
        ).css("right", left);
      } else {
        $(
          "#imagelayer-canvas, #innerlayer-canvas, #main_imagelayer_canvas, #main_innerlayer_canvas"
        ).css("right", 0);
      }
      if (self.pos_top != 2) {
        right =
          ((self.pos_top * this.ppi + this.activeFrameWidth * this.ppi) *
            this.scale -
            1.5 * stroke) /
          2;
        $(
          "#imagelayer-canvas, #innerlayer-canvas, #main_imagelayer_canvas, #main_innerlayer_canvas"
        ).css("top", right);
      } else {
        $(
          "#imagelayer-canvas, #innerlayer-canvas, #main_imagelayer_canvas, #main_innerlayer_canvas"
        ).css("top", 0);
      }
    }
    this.imageLayerCtx.beginPath();
    var uploadedImg = $("#positionPreview").attr("src");
    var image = new Image();
    if (uploadedImg != '') {
      image.src = uploadedImg;
      image.onload = () => {
        if (this.keepRatio == 0 || this.isSwap == 1) {
          var psizes = {
            w: image.width,
            h: image.height,
          };
          var shapeSizes = {
            w: this.ppi * this.customWidth,
            h: this.ppi * this.customHeight,
          };
          var ratio = psizes[ "w" ] / shapeSizes[ "w" ];
          if (self.rotationVal == 90 || self.rotationVal == 270) {
            psizes[ "w" ] = image.height;
            psizes[ "h" ] = image.width;
            ratio = psizes[ "w" ] / shapeSizes[ "h" ];
            self.rotateFlag = 0;
          }
          var tpWt = psizes[ "w" ] * ratio;
          var tpHt = psizes[ "h" ] * ratio;
          if (tpHt < shapeSizes[ "h" ]) {
            ratio = shapeSizes[ "h" ] / tpHt;
            tpWt *= ratio;
            tpHt *= ratio;
          }
          var tpX = (tpWt - shapeSizes[ "w" ]) / 2;
          var tpY = (tpHt - shapeSizes[ "h" ]) / 2;
        }
        var imgWidth = 0;
        var imgHeight = 0;
        var imgTop = 0;
        var imgLeft = 0;
        if (
          (this.cropFlagOpening == 1 && this.keepRatio == 0) ||
          (this.cropFlagOpening == 1 && this.isSwap == 1)
        ) {
          this.cropFlagOpening = 0;
          if (psizes[ "w" ] > shapeSizes[ "w" ]) {
            if (psizes[ "h" ] > shapeSizes[ "h" ]) {
              imgWidth = psizes[ "w" ];
              imgHeight = psizes[ "h" ];
              imgLeft = (psizes[ "w" ] - shapeSizes[ "w" ]) / 2;
              imgTop = (psizes[ "h" ] - shapeSizes[ "h" ]) / 2;
            } else {
              imgHeight = shapeSizes[ "h" ];
              imgWidth = (shapeSizes[ "h" ] * psizes[ "w" ]) / psizes[ "h" ];
              imgLeft = (imgWidth - shapeSizes[ "w" ]) / 2;
              imgTop = (imgHeight - shapeSizes[ "h" ]) / 2;
            }
          } else {
            imgWidth = shapeSizes[ "w" ];
            imgHeight = (shapeSizes[ "w" ] * psizes[ "h" ]) / psizes[ "w" ];
            imgLeft = (imgWidth - shapeSizes[ "w" ]) / 2;
            imgTop = (imgHeight - shapeSizes[ "h" ]) / 2;
            var lastResiedHeight = imgHeight;
            if (imgHeight < shapeSizes[ "h" ]) {
              imgHeight = shapeSizes[ "h" ];
              imgWidth = (imgHeight * imgWidth) / lastResiedHeight;
              imgLeft = (imgWidth - shapeSizes[ "w" ]) / 2;
              imgTop = (imgHeight - shapeSizes[ "h" ]) / 2;
            }
          }
        }
        if (this.keepRatio == 0 || this.isSwap == 1) {
          var Tcanvas = document.createElement("canvas");
          var Tctx = Tcanvas.getContext("2d");
          Tcanvas.width = imgWidth;
          Tcanvas.height = imgHeight;
          Tctx.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            imgWidth,
            imgHeight
          );
          $("#tempSRC").attr("src", Tcanvas.toDataURL());
          var scaleUpImg = new Image();
          scaleUpImg.crossOrigin = "anonymous";
          scaleUpImg.src = Tcanvas.toDataURL();
          scaleUpImg.onload = () => {
            this.cropped_x = (imgLeft * image.width) / imgWidth;
            this.cropped_y = (imgTop * image.height) / imgHeight;
            this.cropped_width = (image.width * shapeSizes[ "w" ]) / imgWidth;
            this.cropped_height = (image.height * shapeSizes[ "h" ]) / imgHeight;
            this.imageLayerCtx.drawImage(
              scaleUpImg,
              imgLeft,
              imgTop,
              shapeSizes[ "w" ],
              shapeSizes[ "h" ],
              0,
              0,
              imagelayerCanvas.width,
              imagelayerCanvas.height
            );
            if (
              $("#nomats").parent().find("input:checkbox").is(":checked") ==
              false
            ) {
              this.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)";
              this.imageLayerCtx.lineWidth = 2;
              this.imageLayerCtx.strokeRect(
                0,
                0,
                imagelayerCanvas.width,
                imagelayerCanvas.height
              );
            }
            if (this.fromRounting) {
              self.lockAspectRatio();
              this.loader = this.fromRounting = false;
            }
          };
        }
        if (
          (this.cropFlagOpening == 2 || this.keepRatio == 1) &&
          this.isSwap == 0
        ) {
          if (this.activeTab == "nomats") {
            imgWidth = this.cropped_width;
            imgHeight = this.cropped_height;
            height = this.canvasMatScale.height;
            width = this.canvasMatScale.width;
            imgLeft = this.cropped_x;
            imgTop = this.cropped_y;
          } else {
            imgWidth = this.cropped_width;
            imgHeight = this.cropped_height;
            width = this.customWidth * this.ppi * this.scale;
            height = this.customHeight * this.ppi * this.scale;
            imgLeft = this.cropped_x;
            imgTop = this.cropped_y;
          }
          this.cropFlagOpening = 0;
          this.imageLayerCtx.drawImage(
            image,
            imgLeft,
            imgTop,
            imgWidth,
            imgHeight,
            0,
            0,
            width,
            height
          );
          if (
            $("#nomats").parent().find("input:checkbox").is(":checked") == false
          ) {
            this.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)";
            this.imageLayerCtx.lineWidth = 2;
            this.imageLayerCtx.strokeRect(
              0,
              0,
              imagelayerCanvas.width,
              imagelayerCanvas.height
            );
          }
        }
        this.isSwap = 0;
      };
    } else {
      this.cropFlagOpening = 0;
      if(this.isFloating || this.isMatOnlyProduct){
        if (window.location.origin == "http://localhost:4200"){
          image.src = "../../assets/baby_image_new.jpg";
        }
        else{
          image.src = "https://www.arttoframe.com/custom_framing_ng/demo_files/assets/baby_image_new.jpg"
        }
      }
      else{
        image.src = "https://cdn1.arttoframe.com/images/upload-with-text_05.svg";
      }
      if(this.isDeploma){
        image.src = "https://www.arttoframe.com/products/diploma/cert.jpg";
      }
      if (this.customWidth < 7 || this.customHeight < 7) {
        newWidth = newWidth - (newWidth / 100) * 45;
        newHeight = newHeight - (newHeight / 100) * 45;
      }
      image.onload = () => {
        if (uploadedImg == '') {
          setTimeout(() => {
            if(this.isFloating){
              this.imageLayerCtx.fillStyle = "white";
              $("#imagelayer-canvas").css('box-shadow', 'rgb(158 158 158) 3px 3px 5px 0px')
            }
            else{
              this.imageLayerCtx.fillStyle = "#4a4a4a";
              $("#imagelayer-canvas").css('box-shadow', '')
            }
            this.imageLayerCtx.fillRect(0, 0, width, height); 
            if(this.isFloating || this.isMatOnlyProduct || this.isDeploma){
              this.imageLayerCtx.drawImage(
                image,
                0,
                0,
                image.width,
                image.height,
                (width - width) / 2,
                (height - height) / 2,
                width,
                height
              );
            }
            else{
              this.imageLayerCtx.drawImage(
                image,
                0,
                0,
                image.width,
                image.height,
                (width - newWidth) / 2,
                (height - newHeight) / 2,
                newWidth,
                newHeight
              );
            } 
            if (
              $("#nomats").parent().find("input:checkbox").is(":checked") ==
              false
            ) {
              if(!this.isFloating || !this.isMatOnlyProduct){
                this.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)";
                this.imageLayerCtx.lineWidth = 2;
                  this.imageLayerCtx.strokeRect(
                    0,
                    0,
                    imagelayerCanvas.width,
                    imagelayerCanvas.height
                  );
              }
            }
          }, 100);
        }
      };
    }
    if(this.isMatOnlyProduct){
      this.productCode = 69
    }
    if(this.isDeploma){
      this.productCode = 82
    }
    if(this.productCode == 82){
      var prodNameSize =
        "Diploma Frame " + this.customWidth + "x" + this.customHeight;
    }
    else if (this.productCode == 38) {
      var prodNameSize =
        "Standard Frame " + this.customWidth + "x" + this.customHeight;
    } else if (this.productCode == 79 && !this.isMatOnlyProduct) {
      prodNameSize =
        "Frame with Mat " + this.customWidth + "x" + this.customHeight;
    } else if (this.productCode == 57) {
      prodNameSize =
        "Custom Frame " + this.customWidth + "x" + this.customHeight;
    } else if (this.productCode == 80) {
      prodNameSize =
        "Instagram Frames " + this.customWidth + "x" + this.customHeight;
    } else if(this.isMatOnlyProduct){
      "Mat Only " + this.customWidth + "x" + this.customHeight;
    }
    $(".product-name").html(prodNameSize);
  }

  public deleteImage() {
    var self = this;
    $(".loaderImg").hide();
    self.isUploadInProgress = this.imgUpload = 0;
    this.photoPrintCheck = true;
    $("img#positionPreview").selectAreas("destroy");
    $("#positionPreview").attr("src", '');
    $(".new-cf-tabs li").css("width", '25%');
    $(".decor-section").css("display", 'none')
    if (this.isCollageApplied == true) {
      this.productSwitch(78);
      self.configImageDataUrl[ self.selectOpening ] = undefined;
      self.collageImageArray[ self.selectOpening ] = undefined;
      self.setCanvasOpenings();
    } else {
      if (self.instaFrame) {
        this.productSwitch(80);
      } {
        this.productSwitch(79);
      }
      this.keepRatio = 0;
      self.getSingleOpening();
    }
    this.mainImageUrl = '';
    this.rotationVal = 0;
    this.rotateFlag = 0;
    this.pod_image_id = 0;
    this.podFlag = 0;
    $("#aspectRatio img").attr(
      "src",
      "https://cdn1.arttoframe.com/images/aspectR_active_ng.png"
    );
    $("#imageCropModal").modal("hide");
    self.imageDataForLog(0);
  }

  public getPrice() {
    $("#confirmhardware").html("Calculating...");
    $("#confirmhardware").css("background", "#5c5c5c");
    $("#confirmhardware").addClass("disabled");
    var self = this;
    var designerMatId = '';
    var popupMat = '';
    var uploaded = $("#positionPreview").attr("src");
    var printing_type = 24;
    if (uploaded != '' && this.productCode == 57) {
      printing_type = 21;
    }
    if (self.paperId != null) {
      printing_type = self.paperId;
    }
    var glassMaxWidth = this.customWidth;
    var glassMaxHeight = this.customHeight;
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true && !this.isCollageApplied) {
      glassMaxWidth = this.customWidth + this.totalMatWidth;
      glassMaxHeight = this.customHeight + this.totalMatHeight;
    }
    if (this.isCollageApplied == true) {
      glassMaxWidth = this.collage_finish_size.split("x")[ 0 ];
      glassMaxHeight = this.collage_finish_size.split("x")[ 1 ];
    }
    if(!this.isFrameChanged1){
    this.Helper.defalt_hardware_id(this.hardwareData, glassMaxWidth, glassMaxHeight, self.hardwareID, self.changeHardwareManually, this.productCode).subscribe((responce)=>{
      if(responce && !this.idHardwareChanged){
        self.hardwareID = responce;
      }
      // this.change_item = "hardware";
      // this.change_item_for_hardware = true;
    this.HardwareImg = Number(self.hardwareID) == 1 ? self.Helper.cdn1 + "/products/hardware/wire_small.jpg" // if
      : Number(self.hardwareID) == 3 ? self.Helper.cdn2 + "/products/hardware/sawtooth_small.jpg" // else if
        : Number(self.hardwareID) == 4 ? self.Helper.cdn3 + "/products/easel_back.jpg" // else if
          : Number(self.hardwareID) == 52 ? self.Helper.cdn3 + "/products/easy-to-hang-large.jpg" // else if
            : null; // else

            this.getPriceCode()
    
  })
}
else{
  this.getPriceCode()
}
this.isFrameChanged1 = false;
    this.change_item = "Default Configuration";
  }


  getPriceCode(){
    $("#confirmhardware").html("Calculating...");
    $("#confirmhardware").css("background", "#5c5c5c");
    $("#confirmhardware").addClass("disabled");
    var self = this;
    var designerMatId = '';
    var popupMat = '';
    var uploaded = $("#positionPreview").attr("src");
    var printing_type = 24;
    if (uploaded != '' && this.productCode == 57) {
      printing_type = 21;
    }
    if (self.paperId != null) {
      printing_type = self.paperId;
    }
    var glassMaxWidth = this.customWidth;
    var glassMaxHeight = this.customHeight;
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true && !this.isCollageApplied) {
      glassMaxWidth = this.customWidth + this.totalMatWidth;
      glassMaxHeight = this.customHeight + this.totalMatHeight;
    }
    if (this.isCollageApplied == true) {
      glassMaxWidth = this.collage_finish_size.split("x")[ 0 ];
      glassMaxHeight = this.collage_finish_size.split("x")[ 1 ];
    }

    var topMatVal = this.top_mat;
    var bottomMatVal = this.bottom_mat;
    var thirdMatVal = this.tripple_mat

    if(this.dataMatsArray){
      $.each(self.dataMatsArray, function (index) {
        if (self.dataMatsArray[ index ].code == topMatVal) {
          self.topMatId = self.dataMatsArray[ index ].id;
          self.topMatCode = self.dataMatsArray[ index ].code;
        }
        if (self.dataMatsArray[ index ].code == bottomMatVal) {
          self.bottomMatId = self.dataMatsArray[ index ].id;
          self.bottomMatCode = self.dataMatsArray[ index ].code;
        }
        if (self.dataMatsArray[ index ].code == thirdMatVal) {
          self.thirdMatId = self.dataMatsArray[ index ].id;
          self.thirdMatCode = self.dataMatsArray[ index ].code;
        }
      });
    }

    var vgroov = '';
    var vgroovshapeId = '';
    if (
      $("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") ==
      true
    ) {
      vgroov = "1";
      vgroovshapeId = $("#vgroov_" + this.selectedVgroove)
        .attr("vgroovCode")
        .split(";")[ 0 ];
    }
    if (this.isCollageApplied == true) {
      var matcode = '' + this.matcode + '';
      var inside_width = this.customWidth;
      var inside_height = this.customHeight;
      var change_item = "matcode";
      if (this.productCode == 38) {
        if (this.isUploadInProgress == 1) {
          change_item = "zoom";
        } else {
          change_item = "collage";
        }
      }
      designerMatId = '';
      popupMat = '';
    } else {
      var matcode = "custom";
      if(typeof this.totalMatWidth === "string"){
        var inside_width = this.customWidth + parseInt(this.totalMatWidth);
      }
      else{
        var inside_width = this.customWidth + this.totalMatWidth;
      }
      if(typeof this.totalMatHeight === "string"){
        var inside_height = this.customHeight + parseInt(this.totalMatHeight);
      }
      else{
        var inside_height = this.customHeight + this.totalMatHeight;
      }
      var change_item = "size";
      if (this.productCode == 38) {
        change_item = "frame";
        matcode = '';
      }
    }
    if(this.change_item_for_hardware){
      change_item = "hardware";
    }
    if (this.productCode == 79 || (this.isDeploma && this.isCollageApplied != true)) {
      matcode = "custom-dm-" + this.customWidth + "x" + this.customHeight;
    }
    if (
      $("#bottommats").parent().find("input:checkbox").is(":checked") == false
    ) {
      bottomMatVal = '';
      self.bottomMatId = '';
      self.bottomMatCode = '';
    }
    if (
      this.isMatTrippleSelected == 0
    ) {
      thirdMatVal = '';
      self.thirdMatId = '';
      self.thirdMatCode = '';
    }
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == false) {
      topMatVal = '';
      self.topMatId = '';
      self.topMatCode = '';
      inside_width = this.customWidth;
      inside_height = this.customHeight;
    }
    if (
      $("#fancyCheckbox").parent().find("input:checkbox").is(":checked") == true
    ) {
      designerMatId = this.singlePopupMatImg;
      popupMat = "1";
    }
    const myheader = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    let priceParam = new HttpParams();
    var prodNameSize = "(1) " + this.customWidth + "x" + this.customHeight;
    priceParam = priceParam.append(
      "url",
      "https://www.arttoframe.com/price_calc.php"
    );
    priceParam = priceParam.append("app_name", "customframe");
    priceParam = priceParam.append("inside_width", inside_width);
    priceParam = priceParam.append("inside_height", inside_height);
    priceParam = priceParam.append("opening_size", prodNameSize);
    priceParam = priceParam.append("matcode", matcode);
    priceParam = priceParam.append("topmat_width", this.selectedMatWidth);
    priceParam = priceParam.append("bottommat_width", "0.25");
    priceParam = priceParam.append("frame_id", this.activeFrameId);
    priceParam = priceParam.append("current_frame_code", this.frameCode);
    priceParam = priceParam.append("glass", "yes");
    priceParam = priceParam.append("fitting", "yes");
    priceParam = priceParam.append("change_item", change_item);
    priceParam = priceParam.append("browserInfo", "Netscape -version=5");
    priceParam = priceParam.append("OSInfo", "windows");
    priceParam = priceParam.append("thirdparty", "0");
    priceParam = priceParam.append("mat1_id", self.topMatId);
    priceParam = priceParam.append("mat1_code", self.topMatCode);
    priceParam = priceParam.append("mat2_id", self.bottomMatId);
    priceParam = priceParam.append("mat2_code", self.bottomMatCode);
    priceParam = priceParam.append('mat3_id', self.thirdMatId);
    priceParam = priceParam.append("mat3_code", self.thirdMatCode);
    priceParam = priceParam.append("printing", "yes");
    priceParam = priceParam.append("glass_type", self.selectedGlassVal);
    if (this.productCode == 38) {
      priceParam = priceParam.append("backing_type", "1");
    } else {
      priceParam = priceParam.append("backing_type", "2");
    }
    if (self.backing_type != null) priceParam = priceParam.append("backing_type", String(self.backing_type));
    priceParam = priceParam.append("debug", "debug");
    priceParam = priceParam.append("cut_val", "0");
    var printing_type_param = "24";
    var printing = "no";
    if (uploaded != '') {
      printing_type_param = "21";
      printing = "yes";
    }
    if (self.paperId != null) {
      printing_type_param = String(self.paperId);
    }
    priceParam = priceParam.append("printing_type", printing_type_param);
    priceParam = priceParam.append("hardware_id", this.hardwareID);
    priceParam = priceParam.append("hardware_type", this.hardwareID);
    priceParam = priceParam.append("hardware_two_id", this.parentHardwareId);
    priceParam = priceParam.append("vgroovshapeId", vgroovshapeId);
    priceParam = priceParam.append("cuts_width", this.customWidth);
    priceParam = priceParam.append("cuts_height", this.customHeight);
    priceParam = priceParam.append("popupMat", popupMat);
    priceParam = priceParam.append("designerMatId", designerMatId);
    priceParam = priceParam.append("paper_backing", "9");
    priceParam = priceParam.append("website", "2");
    priceParam = priceParam.append("show_cost", "1");
    priceParam = priceParam.append("ship_product_id", this.productCode);
    if (self.pod_image_id != 0) {
      priceParam = priceParam.append("image_id", self.pod_image_id);
    }
    if (uploaded != '' && this.productCode != 57) {
      if (this.isCollageApplied == true) {
        $.each(self.collageImageArray, function (index, txt) {
          priceParam = priceParam.append(
            "cfcut_" + index + "[0]",
            btoa(self.collageImageArray[ index ])
          );
        });
      } else {
        priceParam = priceParam.append("cut_val", "0");
        priceParam = priceParam.append("cfcut_", "0");
        priceParam = priceParam.append("cfcut_0[0]", btoa(self.mainImageUrl));
      }
    } else {
      priceParam = priceParam.append("cut_val", "0");
    }
    var parameters = {
      url: "https://www.arttoframe.com/price_calc.php",
      app_name: "customframe",
      inside_width: inside_width,
      inside_height: inside_height,
      opening_size: prodNameSize,
      matcode: matcode,
      topmat_width: this.selectedMatWidth,
      bottommat_width: 0.025,
      frame_id: this.activeFrameId,
      current_frame_code: this.frameCode,
      current_liner_frame_code: '',
      glass: "yes",
      fitting: "yes",
      change_item: change_item,
      browserInfo: "Netscape -version=5",
      OSInfo: "windows",
      thirdparty: 0,
      mat1_id: self.topMatId,
      mat1_code: self.topMatCode,
      mat2_id: self.bottomMatId,
      mat2_code:self.bottomMatCode,
      mat3_id: self.bottomMatId ? self.bottomMatId : '',
      mat3_code: self.thirdMatCode ? self.thirdMatCode : '',
      printing: printing,
      glass_type: self.selectedGlassVal,
      backing_type: self.backing_type != null ? self.backing_type : 2,
      debug: "debug",
      cut_val: 0,
      color_filter: '',
      printing_type: printing_type,
      hardware_id: this.hardwareID,
      hardware_type: this.hardwareID,
      hardware_two_id: this.parentHardwareId,
      vgroov: vgroovshapeId,
      // vgroovshapecodes: vgroovshapecodes,
      cuts_width: this.customWidth,
      cuts_height: this.customHeight,
      BoundWidth: "NaN",
      BoundHeight: "NaN",
      popupMat: popupMat,
      appliedMat: '',
      designerMatId: designerMatId,
      paper_backing: 9,
      website: 2,
      show_cost: 1,
      podData: this.pod_image_id,
    };
    if(this.isDeploma){
      this.productCode = 82
    }
    if (this.productCode == 38 || this.productCode == 79 || this.productCode == 78 || this.productCode == 92 || this.productCode == 69 || this.productCode == 82) {
      var size =
        this.customWidth +
        this.totalMatWidth +
        "x" +
        (this.customHeight + this.totalMatHeight);
      if (this.isCollageApplied == true) {
        size =
          this.collageOpenings.outsidewidth +
          "x" +
          this.collageOpenings.outsideheight;
      }
      var item_type;
      var single_mat = "no";
      var appname;
      var topmat = 0;
      var bottommat = 0;
      var selected_frame_size = parseFloat(this.customWidth) + "x" + parseFloat(this.customHeight);
      var dimension = "T%3A0.00%2CB%3A0.00%2CL%3A0.00%2CR%3A0.00";
      if(this.isDeploma){
        this.productCode = 82
      }
      if (this.productCode == 79 || this.productCode == 78) {
        selected_frame_size = parseFloat(this.customWidth) + this.totalMatWidth + "x" + (parseFloat(this.customHeight) + this.totalMatHeight);
        dimension = "T:" + this.pos_top + ",B:" + this.pos_bottom + ",L:" + this.pos_left + ",R:" + this.pos_right;
        topmat = topMatVal;
        bottommat = bottomMatVal;
        appname = "collage";
        if (this.isUploadInProgress == 1) {
          appname = "customframe";
        }
        if (this.isMatBottomSelected == 0 || this.isMatTopSelected == 0) {
          item_type = "collage_sm";
          single_mat = "yes";
        } else {
          item_type = "collage_dm";
          single_mat = "no";
        }
      } else if (this.productCode == 38) {
        item_type = "no_mat";
        topmat = 0;
        bottommat = 0;
        appname = "frame";
      } else if (this.productCode == 92){
        selected_frame_size = parseFloat(this.customWidth) + this.totalMatWidth + "x" + (parseFloat(this.customHeight) + this.totalMatHeight);
        dimension = '';
        item_type = "collage_sm";
        topmat = topMatVal;
        bottommat = bottomMatVal;
        appname = "shadowbox";
        if (this.isUploadInProgress == 1) {
          appname = "customframe";
        }
        if (this.isMatBottomSelected == 0 || this.isMatTopSelected == 0) {
          item_type = "collage_sm";
          single_mat = "yes";
        } else {
          item_type = "collage_dm";
          single_mat = "no";
        }
      } else if(this.productCode == 82){
        selected_frame_size = (parseFloat(this.customWidth) + this.totalMatWidth) + "x" + (parseFloat(this.customHeight) + this.totalMatHeight);
        appname = "diploma"
        dimension = "T:" + this.pos_top + ",B:" + this.pos_bottom + ",L:" + this.pos_left + ",R:" + this.pos_right;
        topmat = topMatVal;
        bottommat = bottomMatVal;
        if (this.isUploadInProgress == 1) {
          appname = "customframe";
        }
        if (this.isMatBottomSelected == 0 || this.isMatTopSelected == 0) {
          item_type = "collage_sm";
          single_mat = "yes";
        } else {
          item_type = "collage_dm";
          single_mat = "no";
        }
        this.backing_type = 2
      }
      var priceParam_arr = {
        frame_code: this.frameCode,
        mat_id: matcode,
        singal_mat: single_mat,
        item_type: item_type,
        selected_frame_size: selected_frame_size,
        mat_color1: topmat,
        mat_color2: bottommat,
        mat_color3: thirdMatVal,
        current_size: this.customWidth + "x" + this.customHeight,
        glass: "yes",
        glass_type: this.selectedGlassVal,
        hardware_id: this.hardwareID,
        hardware_type: this.hardwareID,
        hardware_two_id: this.parentHardwareId,
        backing_type: this.backing_type != null ? this.backing_type : 1,
        paper_backing: "9",
        ship_product_id: this.productCode,
        app_name: appname,
        dimension: dimension,
        diploma_tussel_flag: this.isDeploma ? "1" : '',
        show_cost: "1",
        imgUpload: this.printImage ? this.imgUpload : 0,
        vgroovshapeId: vgroovshapeId,
        designerMatId: designerMatId
      };
      if(this.isTusselOpening){
        priceParam_arr['tassel_backing_type'] = 2
      }
      if(this.isMatOnlyProduct){
        this.productCode = 69
        var parametersMatOnly : any = {
          url: "https://www.arttoframe.com/price_calc.php",
          app_name: "matonlyproduct",
          inside_width: inside_width,
          inside_height: inside_height,
          matcode: '0',
          topmat_width: this.selectedMatWidth,
          bottommat_width: 0.25,
          change_item: change_item,
          mat1_id: self.topMatId,
          mat2_id: self.bottomMatId,
          mat3_id: self.thirdMatId,
          printing: printing,
          glass_type: self.selectedGlassVal,
          backing_type: self.backing_type != null ? self.backing_type : 2,
          cut_val: 0,
          color_filter: 0,
          vgroov: vgroovshapeId,
          cuts_width: this.customWidth,
          cuts_height: this.customHeight,
          BoundWidth: "NaN",
          BoundHeight: "NaN",
          popupMat: popupMat,
          appliedMat: 2,
          designerMatId: designerMatId,
        };
      }
      if(self.isMatOnlyProduct){
        self.priceTempArr = this.Helper.getprice(parametersMatOnly, this.change_item, parametersMatOnly, this.onloadGlassArray, 69);
        if(!self.priceTempArr){
          change_item = 'color2';
          if(this.change_item_for_hardware){
            change_item = 'hardware';
          }
          const formData = new FormData;
          formData.append('url', parametersMatOnly.url);
          formData.append('app_name', parametersMatOnly.app_name);
          formData.append('inside_width', parametersMatOnly.inside_width);
          formData.append('inside_height', parametersMatOnly.inside_height);
          formData.append('matcode', '0');
          formData.append('topmat_width', parametersMatOnly.topmat_width);
          formData.append('bottommat_width', parametersMatOnly.bottommat_width);
          formData.append('change_item', change_item);
          formData.append('mat1_id', parametersMatOnly.mat1_id);
          formData.append('mat2_id', parametersMatOnly.mat2_id);
          formData.append('mat3_id', parametersMatOnly.mat3_id);
          formData.append('printing', parametersMatOnly.printing);
          formData.append('glass_type', '');
          formData.append('backing_type', '1');
          formData.append('cut_val', parametersMatOnly.cut_val);
          formData.append('color_filter', parametersMatOnly.color_filter);
          formData.append('vgroov', parametersMatOnly.vgroov);
          formData.append('cuts_width', parametersMatOnly.cuts_width);
          formData.append('cuts_height', parametersMatOnly.cuts_height);
          formData.append('BoundWidth', parametersMatOnly.BoundWidth);
          formData.append('BoundHeight', parametersMatOnly.BoundHeight);
          formData.append('popupMat', '1');
          formData.append('appliedMat', parametersMatOnly.appliedMat);
          formData.append('designerMatId', parametersMatOnly.designerMatId);
          this.http.post("https://www.arttoframe.com/custom_framing/preview/actions/getPrice.php", formData, {
            // headers: myheader
          }).subscribe((priceResult: any) => {
            self.totalPrice = priceResult.price
            self.priceTempArr = priceResult;
          })
        }
      }
      if(this.change_item_for_hardware){
        this.change_item = "hardware";
      }
      if ((this.imgUpload == 0 || !this.printImage) && !this.isMatOnlyProduct) {
        self.priceTempArr = this.Helper.getprice(priceParam_arr, this.change_item, parameters, this.onloadGlassArray, this.productCode);
      } else if(!this.isMatOnlyProduct){
        this.priceTempArr = this.Helper.getprice(priceParam, this.change_item, parameters, this.onloadGlassArray, this.productCode);
      }
    } else {
      console.log(priceParam)
      self.priceTempArr = this.Helper.getprice(priceParam, this.change_item, parameters, this.onloadGlassArray, this.productCode);
      if (self.instaFrame) {
        priceParam = priceParam.append("showForFrameSize", 'true');
        self.http.post("https://www.arttoframe.com/custom_framing/preview/actions/getPrice_ng.php", priceParam, {
          headers: myheader
        }).subscribe((priceResult: any) => {
          $.each(priceResult, function (index, data) {
            self.smallSize = data.Size == '5x5' ? data.Price : self.smallSize;
            self.mediumSize = data.Size == '8x8' ? data.Price : self.mediumSize;
            self.largeSize = data.Size == '12x12' ? data.Price : self.largeSize;
            self.extraLargeSize = data.Size == '20x20' ? data.Price : self.extraLargeSize;
          });
        })
      }
    }
    // if(!this.isHardwarePrice){
    //   this.getUserReview()
    // }
    this.isHardwarePrice = false;
    if(this.productCode != 92){
    this.Helper.eventCallback$.subscribe((data) => {
      if (this.productCode == 57 || this.productCode == 80) {
        this.shippingDays = data.ships_in_days;
        this.totalPrice = Number(data.total);
      } else {
        this.shippingDays = data.shipping_time;
        this.totalPrice = Number(data.price);
      }
      this.oversizedItem = (String(data.shipping_template)).toLowerCase() == 'oversized_items' || data.shipping_template == null ? true : false;
      this.UpdateUrl();
      $("#paylater_message_price").attr("data-pp-amount", this.totalPrice);
      paypal
        .Messages({
          amount: this.totalPrice,
          placement: "product",
          style: {
            layout: "text",
            logo: {
              type: "inline",
            },
          },
          onRender: () => {
            // such as send a "render event" to your own analytics platform.
          },
          onClick: () => {
            // such as send a "click event" to your own analytics platform.
          },
          onApply: () => {
            // such as send an "apply event" to your own analytics platform.
          },
        })
        .render("#paylater_message_price_home");
        if(self.shippingDays){
          if (self.shippingDays.indexOf("Out of Stock") > 0) {
            self.discontinuedFrame = self.outOfStockBtn
          } else if (self.shippingDays.indexOf("discontinued") > 0) {
            self.discontinuedFrame = self.discontinuedBtn
          } else {
            self.discontinuedFrame = true;
          }
        }
      
    });
  }
  else{
    this.Helper.eventCallback$.subscribe((data) => {
      if(data.price){
        this.totalPrice = Number(data.price);
        this.UpdateUrl();
      } 
    })
  }
  }

  public onPageloadGlassId() {
    this.onPageload = 1;
  }

  public uploadImage() {
    if (this.wordShapeCollage) {
      document.location.href = window.location.href + '&cf_php=1';
      return false;
    }
    
    var condtion = $("#positionPreview").attr("src") != '';
    var AS_RATIO_PER_SIZE = 0;
    if (this.isCollageApplied == true) {
      AS_RATIO_PER_SIZE =
        this.cuts[ this.selectOpening ][ "w" ] / this.cuts[ this.selectOpening ][ "w" ];
      condtion = this.configImageDataUrl[ this.selectOpening ] != undefined;
    }
    if (this.instaFrame || !this.printImage) {
      AS_RATIO_PER_SIZE = this.customWidth / this.customHeight;
    }
    if (condtion) {
      var self = this;
      if (this.isCollageApplied == true) {
        self.loadPreview();
      } else {
        setTimeout(function () {
          $("img#positionPreview").selectAreas("destroy");
          $("img#positionPreview").selectAreas({
            allowSelect: false,
            handles: true,
            allowResize: true,
            aspectRatio: AS_RATIO_PER_SIZE,
            allowMove: true,
            maxAreas: 1,
            areas: [
              {
                x: self.cropped_x,
                y: self.cropped_y,
                width: self.cropped_width,
                height: self.cropped_height,
              },
            ],
          });
        }, 200);
      }
      $(".frame-hide-btn").click();
      if ($("#positionPreview").attr("src") != '') {
        this.showEditImagePopup();
      } else {
        if (this.isUploadInProgress == 0) {
          $("#qqfile2").val('');
          $("#qqfile2").trigger("click");
        } else {
          $("#progressModal").show();
          setTimeout(() => {
            $("#progressModal").hide();
          }, 1000);
        }
      }
      return;
    } else {
      if (this.isUploadInProgress == 0) {
        $("#qqfile2").val('');
        $("#qqfile2").trigger("click");
      } else {
        $("#progressModal").show();
        setTimeout(() => {
          $("#progressModal").hide();
        }, 1000);
      }
    }
  }

  public uploadImageCF() {
    var self = this;
    let imagelayerCanvas = this.imagelayercanvas.nativeElement;
    var width = 0;
    var height = 0;
    var cutW = 0;
    var cutH = 0;
    
    if (self.isCollageApplied == true) {
      cutW = self.cuts[ self.selectOpening ][ "w" ];
      cutH = self.cuts[ self.selectOpening ][ "h" ];
      width = cutW * this.ppi * this.scale;
      height = cutH * this.ppi * this.scale;
    } else {
      cutW = this.customWidth;
      cutH = this.customHeight;
      width = this.customWidth * this.ppi * this.scale;
      height = this.customHeight * this.ppi * this.scale;
    }
    imagelayerCanvas.width = width;
    imagelayerCanvas.height = height;
  }

  public drawImageTempScalePreviewSRC(ImgSrc) {
    var self = this;
    self.displayAfterUpload = 1;
    let imagelayerCanvas = this.imagelayercanvas.nativeElement;
    let dataImage = imagelayerCanvas.getContext("2d");
    var width = this.customWidth * this.ppi * this.scale;
    var height = this.customHeight * this.ppi * this.scale;
    imagelayerCanvas.width = width;
    imagelayerCanvas.height = height;
    var img = new Image();
    img.src = ImgSrc as string;
    img.onload = () => {
      self.imgNaturalWidth = img.width;
      self.imgNaturalHeight = img.height;
      if (img.width > img.height) {
        self.ImgOriantation = "horizontal";
      } else if (img.width < img.height) {
        self.ImgOriantation = "vertical";
      } else {
        self.ImgOriantation = "squre";
      }
      self.cutSize = [ img.width, img.height ];
      self.width_to_height_ratio = img.width / img.height;
      if (self.isCollageApplied == false) {
        var option_select = $.trim($("#recomended_frames").val());
        $("#recomended_frames option").remove();
        self.optionctr = 0;
        self.Helper.populate(
          "#recomended_frames",
          option_select,
          this.width_to_height_ratio,
          57
        );
        $("#finished_size_recommend option").remove();
        self.optionctr = 0;
        self.Helper.populate(
          "#finished_size_recommend",
          $("#finished_size_recommend").val(),
          this.width_to_height_ratio,
          57
        );
        var tempWidth = $("#recomended_frames :selected").text().split("x")[ 0 ];
        var tempWHeight = $("#recomended_frames :selected")
          .text()
          .split("x")[ 1 ];
        $("#customWidth").val(self.addZeroes(tempWidth));
        $("#customHeight").val(self.addZeroes(tempWHeight));
      }
      var thumbSize = 350;
      var scale = 0;
      if (img.width > thumbSize) {
        scale = thumbSize / img.width;
        img.width *= scale;
        img.height *= scale;
      }
      if (img.height > thumbSize) {
        scale = thumbSize / img.height;
        img.width *= scale;
        img.height *= scale;
      }
      if (self.isCollageApplied == true) {
        self.collageOriginalSizeArray[ self.selectOpening ] = [
          self.imgNaturalWidth,
          self.imgNaturalHeight,
        ];
        self.collageimageImageSizes[ self.selectOpening ] = [
          img.width,
          img.height,
        ];
        self.cuts[ self.selectOpening ][ "size" ] = [ img.width, img.height ];
        var width = self.cuts[ self.selectOpening ][ "w" ] * self.ppi * self.scale;
        var height = self.cuts[ self.selectOpening ][ "h" ] * self.ppi * self.scale;
      } else {
        var width = self.customWidth * self.ppi * self.scale;
        var height = self.customHeight * self.ppi * self.scale;
      }
      imagelayerCanvas.width = width;
      imagelayerCanvas.height = height;
      var Tcanvas = document.createElement("canvas");
      var Tctx = Tcanvas.getContext("2d");
      Tctx.clearRect(0, 0, Tcanvas.width, Tcanvas.height);
      Tcanvas.width = img.width;
      Tcanvas.height = img.height;
      Tctx.drawImage(img, 0, 0, img.width, img.height);
      var scaleImgUp = Tcanvas.toDataURL();
      $("#positionPreview").attr("src", '');
      $("#positionPreview").attr("src", scaleImgUp);
      if (!this.fromRounting && this.printImage) {
        self.lockAspectRatio();
      }
      self.isSwap = 0;
      var Timg = new Image();
      Timg.src = scaleImgUp as string;
      Timg.onload = () => {
        if (self.isCollageApplied == true) {
          self.cuts[ self.selectOpening ][ "size" ] = [ Timg.width, Timg.height ];
          self.configImageDataUrl[ self.selectOpening ] = scaleImgUp;
          self.setCanvasOpenings();
        } else {
          if (img.width > img.height) {
            self.cropped_width = Timg.width - 90;
            self.cropped_height = Timg.height - 45;
            self.cropped_x = 20;
            self.cropped_y = 0;
          } else {
            self.cropped_width = Timg.width;
            self.cropped_height = Timg.height;
            self.cropped_x = 0;
            self.cropped_y = 0;
          }
          dataImage.drawImage(
            Timg,
            0,
            0,
            Timg.width,
            Timg.height,
            0,
            0,
            width,
            height
          );
          if ($("#positionPreview").attr("src") != '') {
            self.cropOnclick();
            if (!this.fromRounting) {
              self.showEditImagePopup();
            }
          }
        }
      };
    };
  }

  public rotateImg() {
    $("#myrotate").val(1);
    this.rotateFlag = 1;
    this.rotationVal = this.rotationVal + 90;
    if (this.rotationVal > 360) {
      this.rotationVal = 90;
    } else if (this.rotationVal < 0) {
      this.rotationVal = 270;
    }
    $("#myrotate").val(this.rotationVal);
    setTimeout(() => {
      this.drawRotated();
    }, 200);
  }

  public drawRotated() {
    this.cropflagOnrotation = 1;
    var self = this;
    let imageCanvas = this.imagelayercanvas.nativeElement;
    var width = this.customWidth * this.ppi * this.scale;
    var height = this.customHeight * this.ppi * this.scale;
    imageCanvas.width = width;
    imageCanvas.height = height;
    let canvas = this.tempCanvas.nativeElement;
    let context = canvas.getContext("2d");
    var toRadians = 0.017453292519943295; //Math.PI/180;
    var degree = 90;
    var rotatedImgSrc = $("#positionPreview").attr("src");
    var rotateimg = new Image();
    rotateimg.src = rotatedImgSrc;
    rotateimg.onload = function () {
      if (degree == 180 || degree == 360) {
        canvas.width = rotateimg.width;
        canvas.height = rotateimg.height;
        context.translate(rotateimg.width, rotateimg.height);
        context.rotate(degree * toRadians);
        context.drawImage(rotateimg, 0, 0, canvas.width, canvas.height);
      } else if (degree == 90 || degree == 270) {
        canvas.width = rotateimg.height;
        canvas.height = rotateimg.width;
        if (degree == 270) {
          context.rotate(-90 * toRadians);
          context.translate(-canvas.height, 0);
        } else {
          context.rotate(degree * toRadians);
          context.translate(0, -canvas.width);
        }
        context.drawImage(rotateimg, 0, 0, rotateimg.width, rotateimg.height);
      }
      $(".frame-hide-btn").click();
      $("#positionPreview").attr("src", '');
      $("#positionPreview").attr("src", canvas.toDataURL());
      if (self.isCollageApplied == true) {
        self.configImageDataUrl[ self.selectOpening ] = canvas.toDataURL();
        self.cuts[ self.selectOpening ][ "rotate" ] = self.rotationVal;
        self.loadPreview();
      }
      if (self.isCollageApplied == false) {
        setTimeout(function () {
          if (degree == 90 || degree == 270) {
            self.cropped_width = rotateimg.height;
            self.cropped_height = rotateimg.width;
            self.cropped_x = 0;
            self.cropped_y = 0;
          } else {
            self.cropped_width = rotateimg.width;
            self.cropped_height = rotateimg.height;
            self.cropped_x = 0;
            self.cropped_y = 0;
          }
          $("img#positionPreview").selectAreas("destroy");
          $("img#positionPreview").selectAreas({
            allowSelect: false,
            handles: true,
            allowResize: true,
            allowMove: true,
            maxAreas: 1,
            areas: [
              {
                x: self.cropped_x,
                y: self.cropped_y,
                width: self.cropped_width,
                height: self.cropped_height,
              },
            ],
          });
        }, 50);
        self.showEditImagePopup();
      }
    };
  }

  public uploadImageFromEditPopup() {
    var self = this;
    this.pod_image_id = this.keepRatio = 0;
    if (this.isUploadInProgress == 0) {
      $("#qqfile2").val('');
      $("#qqfile2").trigger("click");
      setTimeout(function () {
        self.uploadImageCF();
      }, 100);
    } else {
      $("#progressModal").show();
      setTimeout(() => {
        $("#progressModal").hide();
      }, 1000);
    }
  }

  public applyChanges() {
    var self = this;
    
    var selectedArea = $("img#positionPreview").selectAreas("areas");
    this.updateZoomValue();
    console.log(selectedArea.length)
    if (selectedArea.length != 0) {
      $(".new-cf-tabs li").css("width", '20%');
      if (this.isFrameMatChanged == 0) {
        // $(".new-cf-tabs li").css("width", '20%');
        var old_cropped_height = this.cropped_height;
        var old_cropped_width = this.cropped_width;
        this.cropped_height = selectedArea[ 0 ].height;
        this.cropped_width = selectedArea[ 0 ].width;
        this.cropped_x = selectedArea[ 0 ].x;
        this.cropped_y = selectedArea[ 0 ].y;
      }
      if (this.isCollageApplied == true) {
        if (
          typeof self.cuts[ self.selectOpening ][ "cropSelection" ] == "undefined"
        ) {
          self.cuts[ self.selectOpening ][ "cropSelection" ] = {};
        }
        self.collageImagePosForATC(self.selectOpening, selectedArea);

        self.cuts[ self.selectOpening ][ "cropSelection" ] = {
          x: selectedArea[ 0 ].x / self.newScale,
          y: selectedArea[ 0 ].y / self.newScale,
          w: selectedArea[ 0 ].width / self.newScale,
          h: selectedArea[ 0 ].height / self.newScale,
        };
      }
    }
    if (this.isCollageApplied == false) {
      var newW = this.cropped_width / self.pixelPerinch;
      var newH = this.cropped_height / self.pixelPerinch;
      if ((newW == Infinity || newW == 0 || newH == Infinity || newH == 0) && this.isFrameMatChanged == 0) {
        $(".size-alert").show();
        setTimeout(() => {
          $(".size-alert").hide();
        }, 2000);
        this.cropped_height = old_cropped_height;
        this.cropped_width = old_cropped_width;
        return false;
      } else if (
        newW != Infinity &&
        newH != Infinity &&
        this.isFrameMatChanged == 0
      ) {
        self.cropFlagOpening = 2;
        if (self.instaFrame || !self.printImage) {
          $("#customWidth").val(self.customWidth);
          $("#customHeight").val(self.customHeight);
        } else {
          $("#customWidth").val(parseFloat(newW.toFixed()));
          $("#customHeight").val(parseFloat(newH.toFixed()));
        }
      }
      var oldWidth = self.customWidth;
      var oldHeight = self.customHeight;
      if (self.isFrameMatChanged == 0 && !self.instaFrame && self.printImage) {
        self.customWidth = parseFloat($("#customWidth").val());
        self.customHeight = parseFloat($("#customHeight").val());
        if (self.onimageload != 1) {
          if (self.customWidth < self.customHeight) {
            if (oldWidth < oldHeight) {
              $("#customWidth").val(oldWidth);
              self.aspectRatioSizeCalcultionW();
            } else {
              $("#customWidth").val(oldHeight);
              self.aspectRatioSizeCalcultionW();
            }
          } else {
            if (oldWidth < oldHeight) {
              $("#customHeight").val(oldWidth);
              self.aspectRatioSizeCalcultionH();
            } else {
              $("#customHeight").val(oldHeight);
              self.aspectRatioSizeCalcultionH();
            }
          }
        } else {
          console.log("In else condition ,", $("#customWidth").val() + 'x' + $("#customHeight").val())
          if ($("#customWidth").val() < $("#customHeight").val() || $("#customWidth").val() < 8) {
            $("#customWidth").val(8);
            self.aspectRatioSizeCalcultionW();
          } else
            if ($("#customHeight").val() < $("#customWidth").val() || $("#customHeight").val() < 8) {
              $("#customHeight").val(8);
              self.aspectRatioSizeCalcultionH();
            }
        }
      }
      self.onimageload = 0;
    }

    console.log("inputValidation 3")
    if(!this.isMatOnlyProduct){
      var returnVal = this.inputValidation();
    }
    else{
      var returnVal = true;
    }
    if (returnVal == true) {
      self.customWidth = parseFloat($("#customWidth").val());
      self.customHeight = parseFloat($("#customHeight").val());
      $("#imageCropModal").modal("hide");
      if(this.isMatOnlyProduct){
        this.productCode = 69
      }
      if(this.isDeploma){
        this.productCode = 82
      }
      if(this.productCode == 82){
        var prodNameSize =
          "Diploma Frame " + this.customWidth + "x" + this.customHeight;
      }
      else if (this.productCode == 38) {
        var prodNameSize =
          "Standard Frame " + this.customWidth + "x" + this.customHeight;
      } else if (this.productCode == 79 && !this.isMatOnlyProduct) {
        prodNameSize =
          "Frame with Mat " + this.customWidth + "x" + this.customHeight;
      } else if (this.productCode == 79 && !this.isMatOnlyProduct) {
        var prodNameSize =
          "Custom Frame " + this.customWidth + "x" + this.customHeight;
      } else if (this.productCode == 80) {
        var prodNameSize =
          "Instagram Frames " + this.customWidth + "x" + this.customHeight;
      } else if (this.productCode == 92) {
        var prodNameSize =
          "Floating Frames " + this.customWidth + "x" + this.customHeight;
      } else if(this.isMatOnlyProduct){
        "Mat Only " + this.customWidth + "x" + this.customHeight;
      }
      console.log(prodNameSize, "prodNameSize 2")
      $(".product-name").html(prodNameSize);
      $("#sizepopup").modal("hide");
      this.isManageNoMat = 0
      if(this.priceCallReduceAtInit === 1){
        this.isManageNoMat = 1
        console.log("Arrange 4 ")
        if(!this.isCollageApplied){
          this.arrange();
        }
      }
      else{
        console.log("Arrange 5 ")
        this.isManageNoMat = 0
        this.arrange();
      }
      this.priceCallReduceAtInit = 0
    } else {
      this.cropped_height = old_cropped_height;
      this.cropped_width = old_cropped_width;
    }
  }
  
  public getHardwareData() {
    this.getDataService.getHardwareJSON().subscribe((responce:any)=>{
      this.hardwareData = responce;
      setTimeout(function () {
        self.setHarwareHTML();
        $(".removeHardware").removeClass("hardwareCFOptionactive");
        $(".removeHardware").addClass("hardwareCFOption");
        
        $("#hardware_" + self.hardwareID).removeClass("hardwareCFOption");
        $("#hardware_" + self.hardwareID).addClass("hardwareCFOptionactive");
      }, 50);
    })
    this.getDataService.getParentIdFromHardware().subscribe((responce:any)=>{
      console.log(responce)
      this.parentHardwareData = responce;
      console.log(this.hardwareData)
      this.hardwareData.forEach((hard)=>{
        responce.forEach(element => {
          if(hard.id === element.parent_id){
            hard['install'] = true;
          }
        });
      })
      console.log(this.hardwareData)
    })
    if(this.isMatOnlyProduct){
      this.confirmImagePopup(true)
      return
    }
    var self = this;
    this.isHardwarePrice = true
    $("#hardwarepopup").modal("show");
    this.tempHardwareArray = [];
    var glassMaxWidth = this.customWidth;
    var glassMaxHeight = this.customHeight;
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true && !this.isCollageApplied) {
      glassMaxWidth = this.customWidth + this.totalMatWidth;
      glassMaxHeight = this.customHeight + this.totalMatHeight;
    }
    if (this.isCollageApplied == true) {
      glassMaxWidth = this.collage_finish_size.split("x")[ 0 ];
      glassMaxHeight = this.collage_finish_size.split("x")[ 1 ];
    }
    if(!this.idHardwareChanged){
      this.Helper.defalt_hardware_id(this.hardwareData, glassMaxWidth, glassMaxHeight, self.hardwareID, self.changeHardwareManually, this.productCode).subscribe((responce)=>{
        if(responce){
          self.hardwareID = responce;
        }
      setTimeout(function () {
        self.setHarwareHTML();
        $(".removeHardware").removeClass("hardwareCFOptionactive");
        $(".removeHardware").addClass("hardwareCFOption");
        
        $("#hardware_" + self.hardwareID).removeClass("hardwareCFOption");
        $("#hardware_" + self.hardwareID).addClass("hardwareCFOptionactive");
      }, 50);
      this.change_item = "hardware";
      this.change_item_for_hardware = true;
    })
  }
  console.log("Price 2")
    this.getPrice();
  }

  selectInstall(id, event){
    console.log(event.target.value)
    if (event.target.value === "1"){
      $(".check2").prop("checked", false);
    } 
    else{
      $(".check").prop("checked", false);
    }
    if(event.target.checked){
      this.selectedHardwareId = id;
      let selectedHardware = this.hardwareData.filter((data)=>data.id === id);
      this.parentHardwareData.forEach((hard)=>{
        if(selectedHardware[0]['id'] === hard.parent_id){
          if(hard.install_orientation === event.target.value){
            console.log(hard);
            this.parentHardwareId = hard['id'];
          }
        }
      })
    }
    else{
      this.selectedHardwareId = '';
      this.parentHardwareId = '';
    }
  }

  public selectHardware(id, flag) {
    if(flag === true){
      this.parentHardwareId = '';
    }
    this.selectedHardwareId = '';
    this.changeHardwareManually = 1;
    this.idHardwareChanged = true;
    $(".hdwtitleOptions span").html("Calculating...");
    this.hardwareID = id;
    $(".removeHardware").removeClass("hardwareCFOptionactive");
    $(".removeHardware").addClass("hardwareCFOption");
    $("#hardware_" + this.hardwareID).removeClass("hardwareCFOption");
    $("#hardware_" + this.hardwareID).addClass("hardwareCFOptionactive");
    this.change_item = "hardware";
    console.log("Price 3")
    this.getPrice();
  }

  public addToCart() {
    console.log(document.location.href)
    localStorage.removeItem('reloadUrl')
    let reloadUrl = document.location.href;
    localStorage.setItem("reloadUrl", reloadUrl)
    if(!this.isMatOnlyProduct){
      var returnVal = this.inputValidation();
      if (!returnVal) {
        $("#sizemodal").modal("show");
        $(".modal-backdrop").css("display", "none");
        return false;
      }
    }
    
    if (this.mainImageUrl == '' && this.isUploadInProgress == 1) {
      alert("Hold on, Image uploading is in progress...");
    } else {
      var self = this;
      $(".frame-hide-btn").click();
      $("#AddingToCart_modal").modal("show");
      if (this.isCollageApplied == false) {
        this.updateZoomValue();
      }
      if (this.productCode != 38) {
        if (
          $("#bottommats").parent().find("input:checkbox").is(":checked") ==
          true &&
          this.bottom_mat == ''
        ) {
          this.bottom_mat = 89;
        }
        if (
          $("#topmats").parent().find("input:checkbox").is(":checked") ==
          true &&
          this.top_mat == ''
        ) {
          this.top_mat = 61;
        }
      }
      var topMatVal = this.top_mat;
      var bottomMatVal = this.bottom_mat;
      var thirdMatVal = this.tripple_mat;
      if (
        $("#bottommats").parent().find("input:checkbox").is(":checked") == false
      ) {
        bottomMatVal = '';
        this.bottom_mat = ''
        console.log(this.bottom_mat)
      }
      if (
        this.isMatTrippleSelected == 0
      ) {
        thirdMatVal = '';
        this.tripple_mat = '';
      }
      if (
        $("#topmats").parent().find("input:checkbox").is(":checked") == false
      ) {
        topMatVal = '';
        this.top_mat = ''
      }
      var sid = $("#atfsid").val();
      var directory = $("#dir_id").val();
      var prodNameSize = "(1) " + self.customWidth + "x" + self.customHeight;
      var designerMatId = '';
      var popupMat = '';
      var popupMatID = '';
      var popupMatStringCode = '';
      var popupMatStringBottomCode = '';
      var popupMatStringTopCode = '';
      var popupMatStringTopCodeOld = '';
      var popupMatStringCodeOld = '';
      var popupMatStringBottomCodeOld = '';
      var vgroovshapecodes = '';
      var vgroov = '';
      var vgroovBW = '';
      var vgroovBH = '';
      var vgroovDT = '';
      var rotate = $("#myrotate").val();
      if (
        $("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") ==
        true
      ) {
        vgroov = "1";
        vgroovshapecodes = $("#vgroov_" + this.selectedVgroove).attr("vgroovCode");
        if (this.isCollageApplied == true) {
          vgroovBW = String(this.customWidth - 2);
          vgroovBH = String(this.customHeight - 2);
        } else {
          vgroovBW = this.customWidth + 2.5;
          vgroovBH = this.customHeight + 2.5;
        }
        vgroovDT = "1";
      }
      if (
        $("#fancyCheckbox").parent().find("input:checkbox").is(":checked") ==
        true
      ) {
        designerMatId = this.singlePopupMatImg;
        popupMatID = this.singlePopupMatImg;
        popupMat = "1";
        popupMatStringCode = this.popupMatStringCode;
        popupMatStringBottomCode = this.popupMatStringBottomCode;
        popupMatStringTopCode = this.popupMatStringTopCode;
        popupMatStringTopCodeOld = this.popupMatStringTopCode;
        popupMatStringCodeOld = this.popupMatStringCode;
        popupMatStringBottomCodeOld = this.popupMatStringBottomCode;
      }
      const myheader = new HttpHeaders().set(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
      let body = new HttpParams();
      if (this.isCollageApplied == true) {
        var tempArr = self.cuts;
        tempArr.forEach(function (item, index) {
          body = body.append(
            "cuts[" + index + "][shape]",
            self.cuts[ index ][ "shape" ]
          );
          body = body.append("cuts[" + index + "][x]", self.cuts[ index ][ "x" ]);
          body = body.append("cuts[" + index + "][y]", self.cuts[ index ][ "y" ]);
          body = body.append("cuts[" + index + "][w]", self.cuts[ index ][ "w" ]);
          body = body.append("cuts[" + index + "][h]", self.cuts[ index ][ "h" ]);
          body = body.append("cuts[" + index + "][filter]", '');
          body = body.append(
            "cuts[" + index + "][rotate]",
            self.cuts[ index ][ "rotate" ]
          );
          body = body.append("cuts[" + index + "][zoom]", "1");
          if (
            self.cuts[ index ][ "image" ] != undefined ||
            self.cuts[ index ][ "image" ] != ''
          ) {
            body = body.append(
              "cuts[" + index + "][image]",
              self.cuts[ index ][ "image" ]
            );
          } else {
            body = body.append("cuts[" + index + "][image]", '');
          }

          body = body.append(
            "cuts[" + index + "][bottomMatBordercut]",
            "#FEFEFA"
          );
          body = body.append("cuts[" + index + "][topMatBordercut]", "#FEFEFA");

          var imgCropTop = 0;
          var imgCropLeft = 0;
          var imgCropWidth = 0;
          var imgCropHeight = 0;
          var ppiRatio = 0;
          if (
            self.cuts[ index ][ "position" ] != 0 &&
            self.cuts[ index ][ "cropSelection" ] == 0 &&
            self.cuts[ index ][ "image" ] != ''
          ) {
            if (self.collageCropPositionArray != null) {
              ppiRatio =
                self.collageCropPositionArray[ index ][ "w" ] /
                self.cuts[ index ][ "w" ];

              imgCropTop = self.collageCropPositionArray[ index ][ "y" ] / ppiRatio;
              imgCropLeft =
                self.collageCropPositionArray[ index ][ "x" ] / ppiRatio;

              imgCropWidth = self.cuts[ index ][ "size" ][ 0 ] / ppiRatio;
              imgCropHeight = self.cuts[ index ][ "size" ][ 1 ] / ppiRatio;
              body = body.append(
                "cuts[" + index + "][position][0]",
                String(imgCropWidth)
              );
              body = body.append(
                "cuts[" + index + "][position][1]",
                String(imgCropHeight)
              );
              body = body.append(
                "cuts[" + index + "][position][2]",
                String("-" + imgCropLeft)
              );
              body = body.append(
                "cuts[" + index + "][position][3]",
                String("-" + imgCropTop)
              );
            } else {
              body = body.append(
                "cuts[" + index + "][position][0]",
                self.cuts[ index ][ "position" ][ 0 ]
              );
              body = body.append(
                "cuts[" + index + "][position][1]",
                self.cuts[ index ][ "position" ][ 1 ]
              );
              body = body.append(
                "cuts[" + index + "][position][2]",
                self.cuts[ index ][ "position" ][ 2 ]
              );
              body = body.append(
                "cuts[" + index + "][position][3]",
                self.cuts[ index ][ "position" ][ 3 ]
              );
            }
            body = body.append(
              "cuts[" + index + "][size][0]",
              self.collageOriginalSizeArray[ index ][ 0 ]
            );
            body = body.append(
              "cuts[" + index + "][size][1]",
              self.collageOriginalSizeArray[ index ][ 1 ]
            );
          }

          if (
            self.cuts[ index ][ "cropSelection" ] != 0 &&
            self.cuts[ index ][ "image" ] != ''
          ) {
            body = body.append(
              "cuts[" + index + "][position][0]",
              String(self.collageCropPositionArray[ index ].w)
            );
            body = body.append(
              "cuts[" + index + "][position][1]",
              String(self.collageCropPositionArray[ index ].h)
            );
            body = body.append(
              "cuts[" + index + "][position][2]",
              String("-" + self.collageCropPositionArray[ index ].y)
            );
            body = body.append(
              "cuts[" + index + "][position][3]",
              String("-" + self.collageCropPositionArray[ index ].x)
            );

            body = body.append(
              "cuts[" + index + "][size][0]",
              self.collageOriginalSizeArray[ index ][ 0 ]
            );
            body = body.append(
              "cuts[" + index + "][size][1]",
              self.collageOriginalSizeArray[ index ][ 1 ]
            );
          }
        });
        body = body.set("matcode", this.matcode);
        body = body.set("openingsizes", prodNameSize);
        body = body.set("lastViewedProductConfig[0][matcode]", this.matcode);
        body = body.set("framePriceData[change_item]", "matcode");
        body = body.set("glass[0]", "13.5");
        body = body.set("glass[1]", "15.5");
        body = body.set(
          "glass[outsidewidth]",
          this.customWidth + 2
        );
        body = body.set(
          "glass[outsideheight]",
          this.customHeight + 2
        );
        body = body.set(
          "glass[insidewidth]",
          this.customWidth
        );
        body = body.set(
          "glass[insideheight]",
          this.customHeight
        );
        body = body.set(
          "glass[finishedwidth]",
          this.customWidth + 2
        );
        body = body.set(
          "glass[finishedheight]",
          this.customHeight + 2
        );
        body = body.set(
          "glass[finalizedwidth]",
          this.customWidth + 2.5
        );
        body = body.set(
          "glass[finalizedheight]",
          this.customHeight + 2.5
        );
      } else {
        body = body.set("cuts[0][position][0]", this.imgPosition[ 0 ]);
        body = body.set("cuts[0][position][1]", this.imgPosition[ 1 ]);
        body = body.set("cuts[0][position][2]", this.imgPosition[ 2 ]);
        body = body.set("cuts[0][position][3]", this.imgPosition[ 3 ]);
        body = body.set("cuts[0][zoom]", "1");
        body = body.set("cuts[0][size][0]", this.imgPosition[ 5 ]);
        body = body.set("cuts[0][size][1]", this.imgPosition[ 6 ]);
        body = body.set("cuts[0][size][mime]", "image/jpeg");
        body = body.set("cuts[0][shape] ", "1");
        if(this.activeTab === "nomats"){
          body = body.set("cuts[0][y]", "0");
          body = body.set("cuts[0][x]", "0");
        }
        else{
          body = body.set("cuts[0][y]", this.selectedMatWidth);
          body = body.set("cuts[0][x]", this.selectedMatWidth);
        }
        body = body.set("cuts[0][w]", this.customWidth);
        body = body.set("cuts[0][h]", this.customHeight);
        body = body.set("cuts[0][filter]", '');
        body = body.set("cuts[0][rotate]", rotate);
        body = body.set("cuts[0][image]", this.mainImageUrl);
        body = body.set("cuts[0][bottomMatBordercut]", "#FEFEFA");
        body = body.set("cuts[0][topMatBordercut]", "#Array");
        body = body.set("cuts[0][thirdMatBordercut]", "#FEFEFA");
        body = body.set("matcode", "custom");
        body = body.set("openingsizes", prodNameSize);
        body = body.set("lastViewedProductConfig[0][matcode]", "3");
        body = body.set(
          "framePriceData[change_item]",
          "Single mat option Selected"
        );
        if(this.activeTab === "nomats"){
          body = body.set("glass[0]", this.customWidth);
          body = body.set("glass[1]", this.customHeight);
          body = body.set(
            "glass[outsidewidth]",
            this.customWidth + 2
          );
          body = body.set(
            "glass[outsideheight]",
            this.customHeight + 2
          );
          body = body.set(
            "glass[insidewidth]",
            this.customWidth
          );
          body = body.set(
            "glass[insideheight]",
            this.customHeight
          );
          body = body.set(
            "glass[finishedwidth]",
            this.customWidth + 2
          );
          body = body.set(
            "glass[finishedheight]",
            this.customHeight + 2
          );
          body = body.set(
            "glass[finalizedwidth]",
            this.customWidth + 2.5
          );
          body = body.set(
            "glass[finalizedheight]",
            this.customHeight + 2.5
          );
        }
        else{
          body = body.set("glass[0]", this.customWidth + this.totalMatWidth);
          body = body.set("glass[1]", this.customHeight + this.totalMatHeight);

          body = body.set(
            "glass[outsidewidth]",
            this.customWidth + this.totalMatWidth + 2
          );
          body = body.set(
            "glass[outsideheight]",
            this.customHeight + this.totalMatHeight + 2
          );
          body = body.set(
            "glass[insidewidth]",
            this.customWidth + this.totalMatWidth
          );
          body = body.set(
            "glass[insideheight]",
            this.customHeight + this.totalMatHeight
          );
          body = body.set(
            "glass[finishedwidth]",
            this.customWidth + this.totalMatWidth + 2
          );
          body = body.set(
            "glass[finishedheight]",
            this.customHeight + this.totalMatHeight + 2
          );
          body = body.set(
            "glass[finalizedwidth]",
            this.customWidth + this.totalMatWidth + 2.5
          );
          body = body.set(
            "glass[finalizedheight]",
            this.customHeight + this.totalMatHeight + 2.5
          );
        }
        body = body.set("glass[frameWidth]", "1.25");
      }
      body = body.set("isWordCutOutFrame", "false");
      body = body.set("isMultipleOpenings", "false");
      body = body.set("cutOutWord", '');
      body = body.set("ppi", this.ppi);
      body = body.set("swatch", "90");
      body = body.set("lipwidth", "18");
      body = body.set("directory", directory);
      body = body.set("allow_customtext", "1");
      body = body.set("imagescale", "1");
      body = body.set("mat_width", this.selectedMatWidth);
      body = body.set("linethick", "0.25");
      body = body.set(
        "lastViewedProductConfig[0][current_width]",
        this.customWidth
      );
      body = body.set(
        "lastViewedProductConfig[0][current_height]",
        this.customHeight
      );
      body = body.set("lastViewedProductConfig[0][framecode]", this.frameCode);
      body = body.set("lastViewedProductConfig[0][color1id]", topMatVal ? topMatVal : '0');
      body = body.set("lastViewedProductConfig[0][color2id]", bottomMatVal ? bottomMatVal : '0');
      body = body.set("lastViewedProductConfig[0][color3id]", thirdMatVal ? thirdMatVal : '0');
      body = body.set("lastViewedProductConfig[0][set_top_mat]", "1");
      body = body.set("lastViewedProductConfig[0][set_bottom_mat]", "1");
      body = body.set("lastViewedProductConfig[0][loaded]", "true");
      body = body.set("lastViewedProductConfigId", "false");
      body = body.set("version", "90");
      body = body.set("myrotate", "0");
      body = body.set("current_height", this.customHeight);
      if(this.isCollageApplied){
        body = body.set("collageOpening[outsidewidth]", this.customWidth);
        body = body.set("collageOpening[outsideheight]", this.customHeight);
      }
      else{
        body = body.set("collageOpening[outsidewidth]", '');
        body = body.set("collageOpening[outsideheight]", '');
      }
      body = body.set("vgroov", vgroov);
      body = body.set("vgroovshapecodes", vgroovshapecodes);
      body = body.set("vgroovshapecodesold", vgroovshapecodes);
      body = body.set("vgroov_BoundWidth", this.boundWidth);
      body = body.set("vgroov_BoundHeight", this.boundHeight);
      body = body.set("matDist", "0.25");
      body = body.set("vgroov_DT", "0.5");
      body = body.set("vgrooveDT", vgroovDT);
      if(this.activeTab === "nomats"){
        body = body.set("vgroovset", "0");
      }
      else{
        body = body.set("vgroovset", "1");
      }
      body = body.set("mouseOverLinerFrameCode", '');
      body = body.set("linerframeset", "0");
      body = body.set("linerFrameWidth", '');
      body = body.set("linerFrameLipWidth", '');
      body = body.set("designerMatId", designerMatId);
      body = body.set("popupMatID", popupMatID);
      body = body.set("appliedMat", '');
      if(this.activeTab === "nomats"){
        body = body.set("popupMat", '');
        body = body.set("popupMat_appliedMat", '');
      }
      else{
        body = body.set("popupMat", "1");
        body = body.set("popupMat_appliedMat", "2");
      }
      if(!this.isMatOnlyProduct){
      body = body.set("popupMatStringBottomCode", popupMatStringBottomCode);
      body = body.set("popupMatStringTopCode", popupMatStringTopCode);
      body = body.set("linerFrameID", '');
      body = body.set("popupmatbottomlinethick", "0.25");
      body = body.set("popupmattopmatwidth", "2.00");
      body = body.set("designer_mat", "0");
      body = body.set("popupMatFlag", "0");
      body = body.set("popupMatStringTopCodeOld", popupMatStringTopCodeOld);
      body = body.set("popupMatStringCodeOld", popupMatStringCodeOld);
      body = body.set("popupMatStringCode", popupMatStringCode);
      body = body.set(
        "popupMatStringBottomCodeOld",
        popupMatStringBottomCodeOld
      );
      body = body.set("popupMat_openingWidth", this.customWidth);
      body = body.set("popupMat_openingHeight", this.customHeight);
      body = body.set(
        "framePriceData[url]",
        "https://www.arttoframe.com/price_calc.php"
      );
      body = body.set("framePriceData[app_name]", "customframe");
      body = body.set(
        "framePriceData[inside_width]",
        this.priceTempArr[ "inside_width" ]
      );
      body = body.set(
        "framePriceData[inside_height]",
        this.priceTempArr[ "inside_height" ]
      );
      body = body.set("framePriceData[opening_size]", prodNameSize);
      body = body.set("framePriceData[matcode]", "custom");
      body = body.set("framePriceData[topmat_width]", this.selectedMatWidth);
      body = body.set("framePriceData[bottommat_width]", "0.25");
      body = body.set("framePriceData[frame_id]", this.activeFrameId);
      body = body.set("framePriceData[current_frame_code]", this.frameCode);
      body = body.set("framePriceData[current_liner_frame_code]", '');
      body = body.set("framePriceData[glass]", "yes");
      body = body.set("framePriceData[fitting]", "yes");
      body = body.set("framePriceData[browserInfo]", "Netscape -version=5");
      body = body.set("framePriceData[OSInfo]", "MacOS");
      body = body.set("framePriceData[thirdparty]", "0");
      body = body.set("framePriceData[mat1_id]", "20");
      body = body.set("framePriceData[mat2_id]", '');
      body = body.set("framePriceData[mat2_code]", '');
      body = body.set("framePriceData[mat3_id]", '');
      body = body.set("framePriceData[printing]", "yes");
      body = body.set("framePriceData[glass_type]", this.selectedGlassVal);
      body = body.set("framePriceData[backing_type]", this.backing_type != null ? String(this.backing_type) : '2');
      body = body.set("framePriceData[debug]", "debug");
      body = body.set("framePriceData[cut_val]", "0");
      body = body.set("framePriceData[color_filter]", '');
      var uploaded = $("#positionPreview").attr("src");
      if (uploaded != '') {
        self.imageDataForLog(1);
        body = body.set("framePriceData[printing_type]", "21");
      } else {
        self.imageDataForLog(0);
        body = body.set("framePriceData[printing_type]", "24");
      }
      if (self.paperId != null) {
        body = body.set("framePriceData[printing_type]", String(self.paperId));
      }
      body = body.set("framePriceData[hardware_id]", this.hardwareID);
      body = body.set("framePriceData[hardware_type]", this.hardwareID);
      body = body.set("framePriceData[vgroov]", vgroov);
      body = body.set("framePriceData[vgroovshapecodes]", vgroovshapecodes);
      body = body.set("framePriceData[cuts_width]", this.customWidth);
      body = body.set("framePriceData[cuts_height]", this.customHeight);
      body = body.set("framePriceData[BoundWidth]", this.boundWidth);
      body = body.set("framePriceData[BoundHeight]", this.boundHeight);
      body = body.set("framePriceData[popupMat]", "1");
      body = body.set("framePriceData[appliedMat]", '');
      body = body.set("framePriceData[designerMatId]", popupMatID);
      body = body.set("framePriceData[paper_backing]", "9");
      body = body.set("framePriceData[website]", "2");
      body = body.set("framePriceData[show_cost]", "1");

      body = body.set(
        "price[numShippingDay]",
        this.priceTempArr[ "numShippingDay" ]
      );
      body = body.set("price[total]", this.priceTempArr.price);
      body = body.set("price[price]", this.priceTempArr.price);
      body = body.set("price[cost]", this.priceTempArr[ "box_weight" ]);
      body = body.set("price[additionalPriceInDollar]", '');
      body = body.set(
        "price[ships_in_days]",
        this.priceTempArr[ "ships_in_days" ]
      );
      body = body.set("price[frame]", this.priceTempArr[ "frame" ]);
      body = body.set("price[glass]", this.priceTempArr[ "glass" ]);
      body = body.set("price[glassPriceV2]", this.priceTempArr[ "glassPriceV2" ]);
      body = body.set(
        "price[topMatPriceV2]",
        this.priceTempArr[ "topMatPriceV2" ]
      );
      body = body.set("price[paper]", this.priceTempArr[ "paper" ]);
      body = body.set("price[base_price]", this.priceTempArr[ "base_price" ]);
      body = body.set(
        "price[pricecalc_discount]",
        this.priceTempArr[ "pricecalc_discount" ]
      );
      body = body.set(
        "price[discounted_price]",
        this.priceTempArr[ "discounted_price" ]
      );
      body = body.set("price[vgroovPrice]", this.priceTempArr[ "vgroovPrice" ]);
      body = body.set(
        "price[designerMatPrice]",
        this.priceTempArr[ "designerMatPrice" ]
      );
      body = body.set("price[framePriceV2]", this.priceTempArr[ "framePriceV2" ]);
      body = body.set("price[paperPriceV2]", this.priceTempArr[ "paperPriceV2" ]);
      body = body.set(
        "price[is_standard_size]",
        this.priceTempArr[ "is_standard_size" ]
      );
      body = body.set(
        "price[frame_cost_price]",
        this.priceTempArr[ "frame_cost_price" ]
      );
      body = body.set(
        "price[frame_cost_only]",
        this.priceTempArr[ "frame_cost_only" ]
      );
      body = body.set(
        "price[glass_curve_price]",
        this.priceTempArr[ "glass_curve_price" ]
      );
      if(this.productCode != 92){
        body = body.set(
          "price[time_factor][times_factor]",
          this.priceTempArr.time_factor[ "times_factor" ]
        );
      }
      
      body = body.set(
        "price[product_time_factor]",
        this.priceTempArr[ "product_time_factor" ]
      );
      body = body.set(
        "price[cost_base_price]",
        this.priceTempArr[ "cost_base_price" ]
      );
      body = body.set(
        "price[glass_cost_price]",
        this.priceTempArr[ "glass_cost_price" ]
      );
      body = body.set(
        "price[fitting_cost_price]",
        this.priceTempArr[ "fitting_cost_price" ]
      );
      body = body.set(
        "price[mat1_cost_price]",
        this.priceTempArr[ "mat1_cost_price" ]
      );
      body = body.set(
        "price[mat1_time_factor]",
        this.priceTempArr[ "mat1_time_factor" ]
      );
      body = body.set(
        "price[mat_material_cost1]",
        this.priceTempArr[ "mat_material_cost1" ]
      );
      body = body.set(
        "price[backing_time_factor]",
        this.priceTempArr[ "backing_time_factor" ]
      );
      body = body.set(
        "price[backing_material_cost]",
        this.priceTempArr[ "backing_material_cost" ]
      );
      body = body.set(
        "price[printing_cost_price]",
        this.priceTempArr[ "printing_cost_price" ]
      );
      body = body.set(
        "price[hardware_cost_price]",
        this.priceTempArr[ "hardware_cost_price" ]
      );
      body = body.set(
        "price[personalized_cost_glass]",
        this.priceTempArr[ "personalized_cost_glass" ]
      );
      body = body.set(
        "price[paper_backing_cost_price]",
        this.priceTempArr[ "paper_backing_cost_price" ]
      );
      body = body.set(
        "price[backing_cost_price]",
        this.priceTempArr[ "backing_cost_price" ]
      );
      body = body.set("price[design_charge]", '');
      body = body.set("price[inside_width]", this.priceTempArr[ "inside_width" ]);
      body = body.set(
        "price[inside_height]",
        this.priceTempArr[ "inside_height" ]
      );
      body = body.set(
        "price[outside_width]",
        this.priceTempArr[ "outside_width" ]
      );
      body = body.set(
        "price[outside_height]",
        this.priceTempArr[ "outside_height" ]
      );
      body = body.set("price[box_price]", this.priceTempArr[ "box_price" ]);
      body = body.set("price[box_name]", this.priceTempArr[ "box_name" ]);
      body = body.set("price[box_width]", this.priceTempArr[ "box_width" ]);
      body = body.set("price[box_length]", this.priceTempArr[ "box_length" ]);
      body = body.set("price[box_height]", this.priceTempArr[ "box_height" ]);
      body = body.set("price[box_number]", this.priceTempArr[ "box_number" ]);
      body = body.set("price[pallet_qty]", this.priceTempArr[ "pallet_qty" ]);
      body = body.set("price[box_weight]", this.priceTempArr[ "box_weight" ]);
      body = body.set(
        "price[actual_item_weight]",
        this.priceTempArr[ "product_weight" ]
      );
      body = body.set("price[product_weight]", this.priceTempArr[ "box_weight" ]);
      body = body.set(
        "price[production_cost]",
        this.priceTempArr[ "production_cost" ]
      );
      body = body.set(
        "price[frame_time_factor]",
        this.priceTempArr[ "frame_time_factor" ]
      );
      body = body.set("price[amazon_shipping_cost]", "0");
      body = body.set(
        "price[mat_base_price2]",
        this.priceTempArr[ "mat_base_price2" ]
      );
      body = body.set(
        "price[mat_base_price1]",
        this.priceTempArr[ "mat_base_price1" ]
      );
      body = body.set(
        "price[mat_base_price3]",
        this.priceTempArr[ "mat_base_price3" ]
      );
      body = body.set("price[times_cost]", this.priceTempArr[ "times_cost" ]);
      body = body.set(
        "price[additional_cost_price]",
        this.priceTempArr[ "additional_cost_price" ]
      );
      body = body.set(
        "price[additional_cost_by_dollor_or_per]",
        this.priceTempArr[ "additional_cost_by_dollor_or_per" ]
      );
      body = body.set(
        "price[pricebeforepartner]",
        this.priceTempArr[ "pricebeforepartner" ]
      );
      body = body.set("price[price_canada]", this.priceTempArr[ "price_canada" ]);
      body = body.set("price[keywords]", "contemporary style, smooth finish");
      }
      body = body.set("AccountName", "ArtToFrames - CF Angular");
      body = body.set("user_sid", sid);
      body = body.set("mat_id", "custom");
      body = body.set("frame_code", this.frameCode);
      body = body.set("color1_id", topMatVal ? topMatVal : '0');
      body = body.set("color2_id", bottomMatVal ? bottomMatVal : '0');
      if(thirdMatVal){
        body = body.set("color2_id", thirdMatVal ? thirdMatVal : '0');
        body = body.set("color3_id", bottomMatVal);
      }
      body = body.set("border", "0.25");
      if (uploaded != '') {
        body = body.set("paper_id", "21");
      } else {
        body = body.set("paper_id", "24");
      }
      if (self.paperId != null) {
        body = body.set("paper_id", String(self.paperId));
      }
      body = body.set("backing_id", "2");
      body = body.set("glass_id", this.selectedGlassVal);

      body = body.set("hardware_id", this.hardwareID);
      body = body.set("hardware_two_id", this.parentHardwareId ? this.parentHardwareId : '');
      //body = body.set('rotate', '0');
      body = body.set("current_width", this.customWidth);
      if(this.activeTab === "nomats"){
        body = body.set("cutImageUploaded", "true");
      }
      else{
        body = body.set("cutImageUploaded", "true");
      }
      body = body.set("free_shipping", "0");
      body = body.set("offer_id", "0");
      body = body.set("image_type", '');
      body = body.set("pattern_id", '');
      body = body.set("top_width", String(this.pos_top));
      body = body.set("bottom_width", String(this.pos_bottom));
      body = body.set("left_width", String(this.pos_left));
      body = body.set("right_width", String(this.pos_right));
      body = body.set("desktopVersion", "6");
      body = body.set("isLetterArt", '');
      // body = body.set("color3_id", "0");
      body = body.set("wordcutout", "false");
      body = body.set("cutoutword", '');
      body = body.set("diplomaFrame", "0");
      body = body.set("page_type", "M");

      body = body.set(
        "dimension",
        "T:" +
        self.pos_top +
        ",B:" +
        self.pos_bottom +
        ",L:" +
        self.pos_left +
        ",R:" +
        self.pos_right
      );

      if(this.activeTab === "nomats"){
        body = body.set("mat_orders_id", 'Null');
      }
      else{
        if (self.mat_orders_id != null) {
          body = body.set("mat_orders_id", String(self.mat_orders_id));
        }
      }
      
      var orderquantity = 1;
      if (
        $(".QuantityInputBx").val() != null ||
        $(".QuantityInputBx").val() != '' ||
        $(".QuantityInputBx").val() != "0"
      ) {
        orderquantity = $(".QuantityInputBx").val();
      }
      body = body.set("quantity", String(orderquantity));
      if (self.pod_image_id != 0) {
        body = body.set("pod_image_id", self.pod_image_id);
      }

      if (self.productCode == 78) {
        var single_mat;
        if (this.isMatBottomSelected == 0 || this.isMatTopSelected == 0) {
          single_mat = "yes";
        } else {
          single_mat = "no";
        }
      }

      setTimeout(function () {
        // if(self.isCollageApplied == false){
        if(self.pod_image_id){
          self.productCode = 57
        }
        if(self.isMatOnlyProduct){
          let bodyMatOnly = new HttpParams();
          bodyMatOnly = bodyMatOnly.set("cuts[0][shape] ", "1");
        if(this.activeTab === "nomats"){
          bodyMatOnly = bodyMatOnly.set("cuts[0][y]", "0");
          bodyMatOnly = bodyMatOnly.set("cuts[0][x]", "0");
        }
        else{
          bodyMatOnly = bodyMatOnly.set("cuts[0][y]", this.selectedMatWidth);
          bodyMatOnly = bodyMatOnly.set("cuts[0][x]", this.selectedMatWidth);
        }
        
        bodyMatOnly = bodyMatOnly.set("cuts[0][w]", self.customWidth);
        bodyMatOnly = bodyMatOnly.set("cuts[0][h]", self.customHeight);
        bodyMatOnly = bodyMatOnly.set("cuts[0][filter]", '');
        bodyMatOnly = bodyMatOnly.set("cuts[0][rotate]", rotate);
        bodyMatOnly = bodyMatOnly.set("cuts[0][zoom]", "1");
        bodyMatOnly = bodyMatOnly.set("cuts[0][bottomMatBordercut]", "#FFFFFF");
        bodyMatOnly = bodyMatOnly.set("cuts[0][topMatBordercut]", "#FFFFFF");
        bodyMatOnly = bodyMatOnly.set("cuts[0][thirdMatBordercut]", "#FFFFFF");
        bodyMatOnly = bodyMatOnly.set("cuts[0][size]", "false");
        bodyMatOnly = bodyMatOnly.set("isWordCutOutFrame", "false");
        bodyMatOnly = bodyMatOnly.set("isMultipleOpenings", "false");
        bodyMatOnly = bodyMatOnly.set("cutOutWord", '');
        bodyMatOnly = bodyMatOnly.set("ppi", self.ppi);
        bodyMatOnly = bodyMatOnly.set("swatch", "90");
        bodyMatOnly = bodyMatOnly.set("lipwidth", "18");
        bodyMatOnly = bodyMatOnly.set("glass[0]", "13.5");
        bodyMatOnly = bodyMatOnly.set("glass[1]", "15.5");
        
        bodyMatOnly = bodyMatOnly.set("glass[0]", self.customWidth + self.totalMatWidth + 1.5);
        bodyMatOnly = bodyMatOnly.set("glass[1]", self.customHeight + self.totalMatHeight + 1.5);

        bodyMatOnly = bodyMatOnly.set(
            "glass[outsidewidth]",
            self.customWidth + self.totalMatWidth
          );
          bodyMatOnly = bodyMatOnly.set(
            "glass[outsideheight]",
            self.customHeight + self.totalMatHeight
          );
          bodyMatOnly = bodyMatOnly.set(
            "glass[insidewidth]",
            self.customWidth + self.totalMatWidth
          );
          bodyMatOnly = bodyMatOnly.set(
            "glass[insideheight]",
            self.customHeight + self.totalMatHeight
          );
          bodyMatOnly = bodyMatOnly.set(
            "glass[finishedwidth]",
            self.customWidth + self.totalMatWidth + 2
          );
          bodyMatOnly = bodyMatOnly.set(
            "glass[finishedheight]",
            self.customHeight + self.totalMatHeight + 2
          );
          bodyMatOnly = bodyMatOnly.set(
            "glass[finalizedwidth]",
            self.customWidth + self.totalMatWidth + 2.5
          );
          bodyMatOnly = bodyMatOnly.set(
            "glass[finalizedheight]",
            self.customHeight + self.totalMatHeight + 2.5
          );
          bodyMatOnly = bodyMatOnly.set("glass[frameWidth]", "1.25");
          bodyMatOnly = bodyMatOnly.set("directory", directory);
          bodyMatOnly = bodyMatOnly.set("allow_customtext", "1");
          bodyMatOnly = bodyMatOnly.set("imagescale", "1");
          bodyMatOnly = bodyMatOnly.set("mat_width", self.selectedMatWidth);
          bodyMatOnly = bodyMatOnly.set("linethick", "0.25");
          bodyMatOnly = bodyMatOnly.set("matcode", '');
          bodyMatOnly = bodyMatOnly.set("openingsizes", prodNameSize);
          bodyMatOnly = bodyMatOnly.set("personalization", "1");
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][matcode]", '');
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][current_width]", self.customWidth);
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][current_height]", self.customHeight);
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][framecode]", self.frameCode);
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][color1id]", topMatVal ? topMatVal : '0');
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][color2id]", bottomMatVal ? bottomMatVal : '0');
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][color3id]", thirdMatVal ? thirdMatVal : '0');
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][set_top_mat]", "1");
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][set_bottom_mat]", "1");
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfig[0][loaded]", "true");
          bodyMatOnly = bodyMatOnly.set("lastViewedProductConfigId", "false");
          if(designerMatId){
            bodyMatOnly = bodyMatOnly.set("version", "101");
          }
          else{
            bodyMatOnly = bodyMatOnly.set("version", "90");
          }
          bodyMatOnly = bodyMatOnly.set("myrotate", "0");
          bodyMatOnly = bodyMatOnly.set("current_height", self.customHeight);
          bodyMatOnly = bodyMatOnly.set("collageOpening[outsidewidth]", '');
          bodyMatOnly = bodyMatOnly.set("collageOpening[outsideheight]", '');
          bodyMatOnly = bodyMatOnly.set("vgroov", vgroov ? vgroov : '0');
          bodyMatOnly = bodyMatOnly.set("vgroovshapecodes", vgroovshapecodes);
          bodyMatOnly = bodyMatOnly.set("vgroovshapecodesold", vgroovshapecodes);
          bodyMatOnly = bodyMatOnly.set("mouseOverLinerFrameCode", '');
          bodyMatOnly = bodyMatOnly.set("linerframeset", "0");
          bodyMatOnly = bodyMatOnly.set("linerFrameWidth", '');
          bodyMatOnly = bodyMatOnly.set("linerFrameLipWidth", '');

          bodyMatOnly = bodyMatOnly.set("designerMatId", designerMatId);
          // bodyMatOnly = bodyMatOnly.set("popupMatID", popupMatID);
        
          bodyMatOnly = bodyMatOnly.set("appliedMat", '');

            bodyMatOnly = bodyMatOnly.set("popupMat", "1");
            bodyMatOnly = bodyMatOnly.set("popupMat_appliedMat", "2");
          bodyMatOnly = bodyMatOnly.set("popupMatStringBottomCode", popupMatStringBottomCode);
          bodyMatOnly = bodyMatOnly.set("popupMatStringTopCode", popupMatStringTopCode);
        let finishW = self.customWidth + self.totalMatWidth
        let finishH = self.customHeight + self.totalMatWidth
        bodyMatOnly = bodyMatOnly.set(
          "matOnlyCutCode",
          self.pos_top + "x" + self.pos_bottom + "x" + self.pos_left + "x" + self.pos_right +
          ":" + self.customWidth + "x" + self.customHeight + ":" + finishW + "x" + finishH
        );
        let self_top = self.pos_top
        let self_left = self.pos_left
        let self_right = self.pos_right
        let self_bottom = self.pos_bottom
        bodyMatOnly = bodyMatOnly.set("AccountName", "ArtToFrames - Mat Only");
        bodyMatOnly = bodyMatOnly.set("color2Id", bottomMatVal ? bottomMatVal : '0');
        bodyMatOnly = bodyMatOnly.set("color3Id", thirdMatVal ? thirdMatVal : '0');
        bodyMatOnly = bodyMatOnly.set("color1Id", topMatVal ? topMatVal : '0');
        bodyMatOnly = bodyMatOnly.set("frame_code", '');
        bodyMatOnly = bodyMatOnly.set("matLeft", self_left);
        bodyMatOnly = bodyMatOnly.set("matRight", self_right);
        bodyMatOnly = bodyMatOnly.set("matTop", self_top);
        bodyMatOnly = bodyMatOnly.set("matBottom", self_bottom);
        bodyMatOnly = bodyMatOnly.set("matopeningWidth", self.customWidth);
        bodyMatOnly = bodyMatOnly.set("matopeningHeight", self.customHeight);
        bodyMatOnly = bodyMatOnly.set("vgroov_BoundWidth", self.boundWidth);
        bodyMatOnly = bodyMatOnly.set("vgroov_BoundHeight", self.boundHeight);
        bodyMatOnly = bodyMatOnly.set("popupmatbottomlinethick", "0.25");
        bodyMatOnly = bodyMatOnly.set("popupmattopmatwidth", "2.00");
        bodyMatOnly = bodyMatOnly.set("popupMat_bottomColorColor2idTxt", "true");
        bodyMatOnly = bodyMatOnly.set("popupMat_bottomColorColor1idTxt", "true");
        bodyMatOnly = bodyMatOnly.set("popupMat_trippleColor3idTxt", "false");
        bodyMatOnly = bodyMatOnly.set("popupMat_vgroove", "1");
        bodyMatOnly = bodyMatOnly.set("popupMat_openingWidth", self.customWidth);
        bodyMatOnly = bodyMatOnly.set("popupMat_openingHeight", self.customHeight);
        bodyMatOnly = bodyMatOnly.set("popupMat_personalization", "1");
        bodyMatOnly = bodyMatOnly.set("popupMatStringCodeOld", popupMatStringCodeOld);
        bodyMatOnly = bodyMatOnly.set("popupMatStringCode", popupMatStringCode);
        bodyMatOnly = bodyMatOnly.set("popupMatID", popupMatID);
        bodyMatOnly = bodyMatOnly.set("popupMatStringTopCodeOld", popupMatStringTopCodeOld);
        bodyMatOnly = bodyMatOnly.set(
          "popupMatStringBottomCodeOld",
          popupMatStringBottomCodeOld
        );
        bodyMatOnly = bodyMatOnly.set("decoVgroove", "1");
        bodyMatOnly = bodyMatOnly.set(
          "price[numShippingDay]",
          self.priceTempArr[ "numShippingDay" ] ? self.priceTempArr[ "numShippingDay" ] : "Ships in 3 working days"
        );
        bodyMatOnly = bodyMatOnly.set("price[total]", self.totalPrice);
        bodyMatOnly = bodyMatOnly.set("price[price]", self.totalPrice);
        bodyMatOnly = bodyMatOnly.set("price[item_weight]", '');
        bodyMatOnly = bodyMatOnly.set("price[cost]", self.priceTempArr[ "cost" ]);
        bodyMatOnly = bodyMatOnly.set("price[free_shipping_cost]", self.priceTempArr[ "free_shipping_cost" ]);
        bodyMatOnly = bodyMatOnly.set("price[additionalPriceInDollar]", '');
        bodyMatOnly = bodyMatOnly.set(
          "price[ships_in_days]",
          self.priceTempArr[ "ships_in_days" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[topMatPriceV2]",
          self.priceTempArr[ "topMatPriceV2" ]
        );
        bodyMatOnly = bodyMatOnly.set("price[base_price]", self.priceTempArr[ "base_price" ]);
        bodyMatOnly = bodyMatOnly.set(
          "price[pricecalc_discount]",
          self.priceTempArr[ "pricecalc_discount" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[discounted_price]",
          self.priceTempArr[ "discounted_price" ]
        );
        bodyMatOnly = bodyMatOnly.set("price[vgroovPrice]", self.priceTempArr[ "vgroovPrice" ]);
        bodyMatOnly = bodyMatOnly.set(
          "price[designerMatPrice]",
          self.priceTempArr[ "designerMatPrice" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[is_standard_size]",
          self.priceTempArr[ "is_standard_size" ]
        );
        if(self.productCode != 92){
          bodyMatOnly = bodyMatOnly.set(
            "price[time_factor][times_factor]",
            self.priceTempArr.time_factor[ "times_factor" ]
          );
        }
        
        bodyMatOnly = bodyMatOnly.set(
          "price[product_time_factor]",
          self.priceTempArr[ "product_time_factor" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[cost_base_price]",
          self.priceTempArr[ "cost_base_price" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[mat1_cost_price]",
          self.priceTempArr[ "mat1_cost_price" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[backing_cost_price]",
          self.priceTempArr[ "backing_cost_price" ]
        );
        bodyMatOnly = bodyMatOnly.set("price[inside_width]", self.priceTempArr[ "inside_width" ]);
        bodyMatOnly = bodyMatOnly.set(
          "price[inside_height]",
          self.priceTempArr[ "inside_height" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[outside_width]",
          self.priceTempArr[ "outside_width" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[outside_height]",
          self.priceTempArr[ "outside_height" ]
        );
        bodyMatOnly = bodyMatOnly.set("price[shipping_template]", "Default Amazon Template");
        bodyMatOnly = bodyMatOnly.set("price[box_query]", "SELECT * FROM shipping_box_choices WHERE ( (" + self.priceTempArr[ "outside_width" ] + " <= max_width AND  " + self.priceTempArr[ "outside_height" ] + " <= max_height) OR ("+ self.priceTempArr[ "outside_width" ] + "<= max_height AND " + self.priceTempArr[ "outside_height" ] +" <= max_width))  AND product_type_allowed LIKE '%69%' ORDER BY sort LIMIT 1");
        bodyMatOnly = bodyMatOnly.set("price[box_price]", self.priceTempArr[ "box_price" ]);
        bodyMatOnly = bodyMatOnly.set("price[box_name]", self.priceTempArr[ "box_name" ]);
        bodyMatOnly = bodyMatOnly.set("price[box_width]", self.priceTempArr[ "box_width" ]);
        bodyMatOnly = bodyMatOnly.set("price[box_length]", self.priceTempArr[ "box_length" ]);
        bodyMatOnly = bodyMatOnly.set("price[box_height]", self.priceTempArr[ "box_height" ]);
        bodyMatOnly = bodyMatOnly.set("price[box_number]", self.priceTempArr[ "box_number" ]);
        bodyMatOnly = bodyMatOnly.set("price[pallet_qty]", self.priceTempArr[ "pallet_qty" ]);
        bodyMatOnly = bodyMatOnly.set("price[amazon_shipping_template]", "Default Amazon Template");
        bodyMatOnly = bodyMatOnly.set("price[box_weight]", self.priceTempArr[ "box_weight" ]);
        bodyMatOnly = bodyMatOnly.set("price[product_weight]", self.priceTempArr[ "box_weight" ]);
        bodyMatOnly = bodyMatOnly.set(
          "price[production_cost]",
          self.priceTempArr[ "production_cost" ]
        );
        if(self.activeTab === "bottommats" || self.selectedMatType === "bottommats"){
          bodyMatOnly = bodyMatOnly.set(
            "price[mat_base_price2]",
            self.priceTempArr[ "mat_base_price2" ]
          );
        }
        else{
          bodyMatOnly = bodyMatOnly.set(
            "price[mat_base_price2]",
            "0"
          );
        }
        
        bodyMatOnly = bodyMatOnly.set(
          "price[mat_base_price1]",
          self.priceTempArr[ "mat_base_price1" ]
        );
        bodyMatOnly = bodyMatOnly.set(
          "price[mat_base_price3]",
          self.priceTempArr[ "mat_base_price3" ]
        );
        bodyMatOnly = bodyMatOnly.set("price[times_cost]", self.priceTempArr[ "times_cost" ]);
        bodyMatOnly = bodyMatOnly.set("price[discount]", self.priceTempArr[ "discount" ]);
        bodyMatOnly = bodyMatOnly.set("price[atf_cost]", self.priceTempArr[ "atf_cost" ]);
        bodyMatOnly = bodyMatOnly.set("price[calculated_times_cost]", self.priceTempArr[ "calculated_times_cost" ]);
        bodyMatOnly = bodyMatOnly.set("price[3P_time_cost]", self.priceTempArr[ "3P_time_cost" ]);
        bodyMatOnly = bodyMatOnly.set("price[ad_margin_limit]", self.priceTempArr[ "ad_margin_limit" ]);
        bodyMatOnly = bodyMatOnly.set("price[shipping_time]", self.priceTempArr[ "shipping_time" ]);
        
        bodyMatOnly = bodyMatOnly.set(
          "price[pricebeforepartner]",
          self.priceTempArr[ "pricebeforepartner" ]
        );
        bodyMatOnly = bodyMatOnly.set("price[price_canada]", self.priceTempArr[ "price_canada" ]);
        bodyMatOnly = bodyMatOnly.set("price[keywords]", "contemporary style, smooth finish");

        bodyMatOnly = bodyMatOnly.set("vgroovmouseover", "0");
        bodyMatOnly = bodyMatOnly.set("matDist", "0.5");
        bodyMatOnly = bodyMatOnly.set("vgroov_DT", "0.5");
        bodyMatOnly = bodyMatOnly.set("vgrooveDT", vgroovDT);
        bodyMatOnly = bodyMatOnly.set("vgroovStartY", "50.04504545454545");
        bodyMatOnly = bodyMatOnly.set("vgroovStartX", "50.04504545454545");
        bodyMatOnly = bodyMatOnly.set("vgroovset", "1");
        bodyMatOnly = bodyMatOnly.set("user_sid", sid);
        bodyMatOnly = bodyMatOnly.set("mat_id", '');
        bodyMatOnly = bodyMatOnly.set("color1_id", topMatVal ? topMatVal : '0');
        bodyMatOnly = bodyMatOnly.set("color2_id", bottomMatVal ? bottomMatVal : '0');
        bodyMatOnly = bodyMatOnly.set("color3_id", thirdMatVal ? thirdMatVal : '0');
        bodyMatOnly = bodyMatOnly.set("border", "0.25");
        bodyMatOnly = bodyMatOnly.set("paper_id", "0");
        bodyMatOnly = bodyMatOnly.set("backing_id", "0");
        bodyMatOnly = bodyMatOnly.set("glass_id", self.selectedGlassVal);
        bodyMatOnly = bodyMatOnly.set("hardware_id", self.hardwareID);
        bodyMatOnly = bodyMatOnly.set("rotate", "0");
        bodyMatOnly = bodyMatOnly.set("free_shipping", "0");
        bodyMatOnly = bodyMatOnly.set("offer_id", "0");
        bodyMatOnly = bodyMatOnly.set("image_type", '');
        bodyMatOnly = bodyMatOnly.set("pattern_id", '');
        bodyMatOnly = bodyMatOnly.set("current_width", self.customWidth);
        bodyMatOnly = bodyMatOnly.set("cutImageUploaded", 'false');
        bodyMatOnly = bodyMatOnly.set("top_width", self.pos_top);
        bodyMatOnly = bodyMatOnly.set("bottom_width", self.pos_bottom);
        bodyMatOnly = bodyMatOnly.set("left_width", self.pos_left);
        bodyMatOnly = bodyMatOnly.set("right_width", self.pos_right);
        bodyMatOnly = bodyMatOnly.set("diplomaFrame", "0");

          self.http
            .post(
              "https://www.arttoframe.com/custom_framing/preview/actions/add_cart_mat_only.php",
              bodyMatOnly,
              {
                headers: myheader,
              }
            )
            .subscribe(
              
              (response : any) => {
                if(response.success){
                  setTimeout(() => {
                    $("#AddingToCart_modal").modal("hide");
                    $("#AddingToCart_success").modal("show");
                    // $("#cartCntMobile").html(
                    //   " " +
                    //   (
                    //     parseFloat($("#cartCntMobile").html().split(" ")[ 1 ]) + 1
                    //   ).toString()
                    // );
                    self.addListtrack();
                    $('#cartCntMobile').html((parseFloat($('#cartCntMobile').html()) + 1).toString());
                  }, 100);


                  let bodyMatOnly1 = new HttpParams();
                  let w = self.customWidth + self.totalMatWidth
                  let h = self.customHeight + self.totalMatHeight
                  bodyMatOnly1 = bodyMatOnly1.set("zaius_sku", "MAT-" + self.topMatId + "-" + self.customWidth + "x" + self.customHeight + "-" + self.TopMatTitle);
                  bodyMatOnly1 = bodyMatOnly1.set("type", "mat_only");
                  bodyMatOnly1 = bodyMatOnly1.set("size", w + "x" + h);
                  bodyMatOnly1 = bodyMatOnly1.set("mat_color_code", self.top_mat);
                  if(self.isMatBottomSelected === 1){
                    bodyMatOnly1 = bodyMatOnly1.set("mat2_color_code", self.bottom_mat);
                  }
                  else{
                    bodyMatOnly1 = bodyMatOnly1.set("mat2_color_code", "0");
                  }
                  if(self.isMatTrippleSelected === 1){
                    bodyMatOnly1 = bodyMatOnly1.set("mat3_color_code", self.tripple_mat);
                  }
                  else{
                    bodyMatOnly1 = bodyMatOnly1.set("mat3_color_code", "0");
                  }
                  
                  bodyMatOnly1 = bodyMatOnly1.set("bottom_mat_width", "0.25");
                  bodyMatOnly1 = bodyMatOnly1.set("middle_mat_width", "0.25");
                  bodyMatOnly1 = bodyMatOnly1.set("mat_cut_id", "custom-dm-" +
                  $("#customWidth").val() +
                  "x" +
                  $("#customHeight").val());
                  bodyMatOnly1 = bodyMatOnly1.set("backing_type", self.backing_type != null ? String(self.backing_type) : '1');
                  // bodyMatOnly1 = bodyMatOnly1.set("orderquantity", "1");
                  let orderquantity = 1;
                  if (
                    $(".QuantityInputBx").val() != null ||
                    $(".QuantityInputBx").val() != '' ||
                    $(".QuantityInputBx").val() != "0"
                  ) {
                    orderquantity = $(".QuantityInputBx").val();
                  }
                  bodyMatOnly1 = bodyMatOnly1.set("orderquantity", orderquantity.toString());
                  bodyMatOnly1 = bodyMatOnly1.set("dimension", 
                  "T:" +
                  self.pos_top +
                  ",B:" +
                  self.pos_bottom +
                  ",L:" +
                  self.pos_left +
                  ",R:" +
                  self.pos_right
                  );
                  bodyMatOnly1 = bodyMatOnly1.set("page_type", "M");
                  bodyMatOnly1 = bodyMatOnly1.set("mat_orders_id", response.id);
                  bodyMatOnly1 = bodyMatOnly1.set("app_name", "matonlyproduct");
                  bodyMatOnly1 = bodyMatOnly1.set("inside_width", finishW);
                  bodyMatOnly1 = bodyMatOnly1.set("inside_height", finishH);
                  bodyMatOnly1 = bodyMatOnly1.set("opening_size", prodNameSize);
                  bodyMatOnly1 = bodyMatOnly1.set("topmat_width", self.selectedMatWidth);
                  bodyMatOnly1 = bodyMatOnly1.set("bottommat_width", "2.00");
                  bodyMatOnly1 = bodyMatOnly1.set("change_item", "color32.00");
                  bodyMatOnly1 = bodyMatOnly1.set("thirdparty", "0");
                  bodyMatOnly1 = bodyMatOnly1.set("mat1_id", self.top_mat);
                 
                  if(self.isMatBottomSelected === 1 || self.selectedMatType === "bottommats"){
                    bodyMatOnly1 = bodyMatOnly1.set("mat2_id", self.bottom_mat);
                  }
                  else{
                    bodyMatOnly1 = bodyMatOnly1.set("mat2_id", "null");
                  }

                  if(self.isMatTrippleSelected === 1 || self.selectedMatType === "tripplemats"){
                    bodyMatOnly1 = bodyMatOnly1.set("mat3_id", self.tripple_mat);
                  }
                  else{
                    bodyMatOnly1 = bodyMatOnly1.set("mat3_id", "null");
                  }
                  
                  bodyMatOnly1 = bodyMatOnly1.set('printing', "no");
                  bodyMatOnly1 = bodyMatOnly1.set('debug', "debug");
                  bodyMatOnly1 = bodyMatOnly1.set('cut_val', "0");
                  bodyMatOnly1 = bodyMatOnly1.set("vgroov", vgroov);
                  bodyMatOnly1 = bodyMatOnly1.set("vgroovshapecodes", vgroovshapecodes);
                  bodyMatOnly1 = bodyMatOnly1.set("cuts_width", self.customWidth);
                  bodyMatOnly1 = bodyMatOnly1.set("cuts_height", self.customHeight);
                  bodyMatOnly1 = bodyMatOnly1.set("BoundWidth", self.boundWidth);
                  bodyMatOnly1 = bodyMatOnly1.set("BoundHeight", self.boundHeight);
                  bodyMatOnly1 = bodyMatOnly1.set("appliedMat", "2");
                  bodyMatOnly1 = bodyMatOnly1.set("popupMat", "1");
                  bodyMatOnly1 = bodyMatOnly1.set("designerMatId", designerMatId);

                  bodyMatOnly1 = bodyMatOnly1.set("show_cost", "1");
                  bodyMatOnly1 = bodyMatOnly1.set("show", "1");
                  bodyMatOnly1 = bodyMatOnly1.set("product_type", "69");
                  bodyMatOnly1 = bodyMatOnly1.set("item_weight", "undefined");
                  bodyMatOnly1 = bodyMatOnly1.set("matcode", "custom");
                      self.http
                      .post(
                        "https://www.arttoframe.com/cartmanager_search1.php",
                        bodyMatOnly1,
                        {
                          headers: myheader,
                        }
                      )
                      .subscribe(
                        (response : any) => {
                        },
                        (error) => {
                        }
                      );
                }
              },
              (error) => {
              }
            );
        }
        if(self.isDeploma){
          self.productCode = 82
        }
       if (self.productCode == 38 || self.productCode == 79 || self.productCode == 78 || self.productCode == 92 || self.productCode == 82) {
          var single_mat;
          if (self.isMatBottomSelected == 0 || self.isMatTopSelected == 0) {
            single_mat = "yes";
          } else {
            single_mat = "no";
          }

          let bodySF = new HttpParams();
          if(self.isMatOnlyProduct){
            bodySF = bodySF.set("action", "add");
            bodySF = bodySF.set("is_ajax", "1");
            bodySF = bodySF.set("product_type", "69");
            bodySF = bodySF.set("quantity", "1");
            bodySF = bodySF.set(
              "dimension",
              "T:" +
              self.pos_top +
              ",B:" +
              self.pos_bottom +
              ",L:" +
              self.pos_left +
              ",R:" +
              self.pos_right
            );
            bodySF = bodySF.set("page_type", "M");
            bodySF = bodySF.set("backing_type", self.backing_type != null ? String(self.backing_type) : '1');
            bodySF = bodySF.set("opening_size", $("#customWidth").val() + "x" + $("#customHeight").val());
          }
          else{
            bodySF = bodySF.set("is_https_site", "1");
            if (self.productCode == 38) {
              bodySF = bodySF.set("type", "wom");
              bodySF = bodySF.set("singal_mat", "no");
              // bodySF = bodySF.set('dimension', "T:0.00,B:0.00,L:0.00,R:0.00");
              // bodySF = bodySF.set('mat_cut_id', $("#customWidth").val() + "x" + $("#customHeight").val());
              bodySF = bodySF.set(
                "size",
                $("#customWidth").val() + "x" + $("#customHeight").val()
              );
            } else {
              // console.log(self.productCode)
              if ((self.productCode == 78 || self.isCollageApplied == true) || (self.isDeploma && self.isCollageApplied == true)) {
                bodySF = bodySF.set("mat_cut_id", self.matcode);
                bodySF = bodySF.set("size", self.collage_finish_size);
              } else {
                bodySF = bodySF.set(
                  "mat_cut_id",
                  "custom-dm-" +
                  $("#customWidth").val() +
                  "x" +
                  $("#customHeight").val()
                );
                bodySF = bodySF.set(
                  "size",
                  Number(self.customWidth) +
                  Number(self.totalMatWidth) +
                  "x" +
                  (Number(self.customHeight) + Number(self.totalMatHeight))
                );
              }
              bodySF = bodySF.set(
                "dimension",
                "T:" +
                self.pos_top +
                ",B:" +
                self.pos_bottom +
                ",L:" +
                self.pos_left +
                ",R:" +
                self.pos_right
              );
              bodySF = bodySF.set("singal_mat", single_mat);
              bodySF = bodySF.set("type", "multimat_t");
              bodySF = bodySF.set("mat_color_code", self.top_mat);
              console.log(self.tripple_mat)
              let middle, bottom;

              if(self.tripple_mat){
                bottom = self.tripple_mat;
                middle = self.bottom_mat;
              }
              else{
                bottom = self.bottom_mat;
              }

              bodySF = bodySF.set("mat2_color_code", bottom);
              if(self.isMatTrippleSelected === 1){
                bodySF = bodySF.set("mat3_color_code", middle);
              }
              else{
                bodySF = bodySF.set("mat3_color_code", '');
              }
            }
            bodySF = bodySF.set("frame_code", self.frameCode);
            bodySF = bodySF.set("glass_type", self.selectedGlassVal);
            bodySF = bodySF.set("hardware_type", self.hardwareID);
            bodySF = bodySF.set("hardware_two_id", self.parentHardwareId ? self.parentHardwareId : '');
            bodySF = bodySF.set("backing_type", self.backing_type != null ? String(self.backing_type) : '1');
            var orderquantity = 1;
            if (
              $(".QuantityInputBx").val() != null ||
              $(".QuantityInputBx").val() != '' ||
              $(".QuantityInputBx").val() != "0"
            ) {
              orderquantity = $(".QuantityInputBx").val();
            }
            bodySF = bodySF.set("orderquantity", orderquantity.toString());
            bodySF = bodySF.set("page_type", "M");
            bodySF = bodySF.set("diploma_tussel_flag", self.isDeploma ? "1" : '');
            bodySF = bodySF.set("frame_type", self.isDeploma ? "diploma" : "frames");
            bodySF = bodySF.set("tassel_backing_type", self.isDeploma && self.isTusselOpening ? "2" : '');
            if(self.isDeploma && vgroov){
              bodySF = bodySF.set("vgroov", vgroov);
            bodySF = bodySF.set("vgroovshapecodes", vgroovshapecodes);
            bodySF = bodySF.set("vgroovshapecodesold", vgroovshapecodes);
            bodySF = bodySF.set("vgroov_BoundWidth", self.boundWidth);
            bodySF = bodySF.set("vgroov_BoundHeight", self.boundHeight);
            }
            let totalPrice : any = self.totalPrice;
            if(self.isFloating){
              bodySF = bodySF.set("acrylic_option", "yes");
              bodySF = bodySF.set("shadowbox_price", totalPrice);
            }
            else{
              bodySF = bodySF.set("acrylic_option", "no");
            }
                  
          }

          //var isExicute = false;
          self.http
            .post(
              "https://www.arttoframe.com/cartmanager_search_productpage.php",
              bodySF,
              {
                headers: myheader,
              }
            )
            .subscribe(
              (response) => {
              },
              (error) => {
              }
            );

          setTimeout(function () {
            self.http
              .get(
                "https://www.arttoframe.com/custom_framing/preview/actions/getCartId.php?is_https_site=1",
                {
                  headers: myheader,
                }
              )
              .subscribe((response) => {
                self.addListtrack();
                // document.location.href = "https://www.arttoframe.com/cart.php?cart=" + response;
                setTimeout(() => {
                  $("#AddingToCart_modal").modal("hide");
                  $("#AddingToCart_success").modal("show");
                  // $("#cartCntMobile").html(
                  //   " " +
                  //   (
                  //     parseFloat($("#cartCntMobile").html().split(" ")[ 1 ]) + 1
                  //   ).toString()
                  // );
                  $('#cartCntMobile').html((parseFloat($('#cartCntMobile').html()) + 1).toString());
                }, 100);
              });
          }, 500);
        }
        // }
        else {
          self.Helper.addtocart(body, self.tempCanvas.nativeElement, self.productCode);
          this.setTimeout(() => {
            self.addListtrack();
          }, 1000);
          
        }
      }, 100);
    }
  }

  addListtrack(){
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
  }

  public confirmSizeE(param) {
    this.idHardwareChanged = false;
    $(".ngxcarouselPoint li").removeClass("active");
    $(".ngxcarouselPoint li:first-child").addClass("active").click();
    this.onLoadGlassFlag = 1;
    this.cropFlagOpening = 1;
    var oldW = this.customWidth;
    var oldH = this.customHeight;
    this.customWidth = parseFloat($("#customWidth").val()) ;
    this.customHeight = parseFloat($("#customHeight").val());
    if (this.isCollageApplied == true) {
      $("#customWidth").val(this.customWidth);
      $("#customHeight").val(this.customHeight);
    }
    // if(this.customWidth === 2 || this.customWidth === 1){
    //   return false;
    // }
    // if(this.customHeight === 2 || this.customHeight === 1){
    //   return false;
    // }
    // this.getFilterGlassData();
    $(".new-cf-tabs").show();
    if (this.isCollageApplied == false) {
      
      var returnVal;
      if(!this.isMatOnlyProduct){
        returnVal = this.inputValidation();
      }
      else{
        returnVal = this.inputValidationMat();
        // returnVal = true;
      }
      console.log("inputValidation 5")
      console.log(returnVal)
      if (returnVal == true) {
        if(param === 'true'){
          this.btnHide();
        }
        if(this.isMatOnlyProduct){
          this.productCode = 69
        }
        if(this.isDeploma){
          this.productCode = 82
        }
        if(this.productCode == 82){
          var prodNameSize =
            "Diploma Frame " + this.customWidth + "x" + this.customHeight;
        }
        else if(this.productCode != 69){
          var prodNameSize =
          "Standard Frame " + this.customWidth + "x" + this.customHeight;
        }
        else if (this.productCode == 79 && !this.isMatOnlyProduct) {
          prodNameSize =
            "Frame with Mat " + this.customWidth + "x" + this.customHeight;
        } else if (this.productCode == 57 || this.productCode == 78) {
          prodNameSize =
            "Custom Frame " + this.customWidth + "x" + this.customHeight;
        } else if (this.productCode == 80) {
          var prodNameSize =
            "Instagram Frames " + this.customWidth + "x" + this.customHeight;
        } else if(this.isMatOnlyProduct){
          var prodNameSize =
          "Mat Only " + this.customWidth + "x" + this.customHeight;
        }
        console.log(prodNameSize, "prodNameSize 3")
        $(".product-name").html(prodNameSize);
        console.log("Arrange 6")
        this.arrange();
      } else {
        this.customWidth = oldW;
        this.customHeight = oldH;
      }
    } else {
      console.log("Arrange 6 ")
      if(this.isPageLoad != 1){
        this.arrange();
      }  
      this.isPageLoad = 0;
    }
  }

  public changeMat(e) {
    console.log(this.activeTab)
    console.log(e)
    if(this.activeTab === "tripplemats"){
      this.activeTab = "tripple"
    }
    this.oldTopmat = this.top_mat;
    this.oldBottommat = this.bottom_mat;
    if (this.isCollageApplied == false) {
      this.isFrameMatChanged = 1;
    } else {
      this.isFrameMatChanged = 0;
    }
    $(".ngxcarouselPoint li").removeClass("active");
    $(".ngxcarouselPoint li:first-child").addClass("active").click();

    this.activeTab = $(".disabled_tab.active").attr("data-tab");
    if (this.activeTab == "nomats") {
      if ($("#nomats").parent().find("input:checkbox").is(":checked") == true) {
        this.matWidth = 0;
        $("#innerlayer-canvas").css("display", "none");
      }
    }
    if (this.activeTab == "top") {
      if (
        $("#topmats").parent().find("input:checkbox").is(":checked") == true
      ) {
        this.matWidth = 2;
        this.top_mat = e.code;
        this.TopMatTitle = e.name;
      } else {
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#topmats").prop("checked", true);
        $("#noMatLi").removeClass("active");
        this.isMatTopSelected = 1;
        this.matWidth = 2;
        this.activeTab = "topmats";
        this.top_mat = e.code;
        this.TopMatTitle = e.name;
        this.productSwitch(79);
      }
    }
    if (this.activeTab == "bottom") {
      if (
        $("#bottommats").parent().find("input:checkbox").is(":checked") == true
      ) {
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.bottom_mat = e.code;
        this.BottomMatTitle = e.name;
      } else {
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#topmats,#bottommats").prop("checked", true);
        $("#noMatLi").removeClass("active");
        $("#innerlayer-canvas").css("display", "block");
        this.isMatTopSelected = this.isMatBottomSelected = 1;
        this.isMatTrippleSelected = 0;
        this.matWidth = 2;
        this.activeTab = "bottom";
        this.bottom_mat = e.code;
        this.BottomMatTitle = e.name;
        this.productSwitch(79);
      }
    }

    if (this.activeTab == "tripple") {
      if (
        $("#tripplemats").parent().find("input:checkbox").is(":checked") == true
      ) {
        console.log("If")
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.tripple_mat = e.code;
        this.TrippleMatTitle = e.name;
      } else {
        console.log("Else")
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#topmats,#bottommats, #tripplemats").prop("checked", true);
        $("#noMatLi").removeClass("active");
        $("#innerlayer-canvas").css("display", "block");
        this.isMatTopSelected = this.isMatBottomSelected = 1;
        this.isMatTrippleSelected = 1;
        this.matWidth = 2;
        this.activeTab = "tripple";
        this.tripple_mat = e.code;
        this.TrippleMatTitle = e.name;
        this.productSwitch(79);
      }
    }

    this.inputValidationMat();
    this.selected_mat = e.code;
    this.cropFlagOpening = 2;
    this.isFrameChanged1 = true;
    if (this.activeTab == "nomats") {
      this.confirmSizeE('true');
    } else {
      console.log("Arrange 8")
      this.arrange();
    }
    if (this.isCollageApplied == true) {
      this.setSecondMatCollage();
    }
  }

  selectMatsss(mat){
    $("#noMatLi").removeClass("active");
  }

  selectMatss(mat){
    console.log("Active mat  ", mat)
    if(mat === "nomats"){
      $(".noMatLi").addClass("active");
      $(".topMatLi").removeClass("active");
      $(".bottomMatLi").removeClass("active");
      $(".trippleMatLi").removeClass("active");
    }
    if(mat === "topmats"){
      $(".noMatLi").removeClass("active");
      $(".topMatLi").addClass("active");
      $(".bottomMatLi").removeClass("active");
      $(".trippleMatLi").removeClass("active");
    }
    if(mat === "bottommats"){
      $(".noMatLi").removeClass("active");
      $(".topMatLi").removeClass("active");
      $(".bottomMatLi").addClass("active");
      $(".trippleMatLi").removeClass("active");
    }
    if(mat === "tripplemats"){
      $(".noMatLi").removeClass("active");
      $(".topMatLi").removeClass("active");
      $(".bottomMatLi").removeClass("active");
      $(".trippleMatLi").addClass("active");
    }
  }

  public selectMats(mat, flag) {
    console.log("Selected Matss ", mat, flag)
    // this.isFrameChanged1 = true;
    this.isFrameChanged = true;
    this.isMatTabs = false;
    if(flag){
      if(mat != "nomats"){
        setTimeout(() => {
          this.Helper.validateMats(
            this.top_mat,
            parseFloat($("#customWidth").val()),
            parseFloat($("#customHeight").val()),
            this.isCollageApplied,
            this.isMatOnlyProduct
          );
        }, 50);
      }
      
      this.selectedMatType = mat
      if (mat == "nomats" && flag === true) {
        this.productSwitch(38);
        this.BottomMatTitle = "";
        // this.TopMatTitle = "";
        this.isFloating = false;
        this.isMatTrippleSelected = 0;
        $("#nomats").prop("checked", true);
        $("#topmats").prop("checked", false);
        $("#bottommats").prop("checked", false);
        $("#tripplemats").prop("checked", false);
        $("#bottommats").attr("disabled", "true");
        $("#bottomMatLi").removeClass("active");
        $("#topmats").attr("disabled", "true");
        $("#topMatLi").removeClass("active");
        $(".topMatHide").css("display", "none");
        $(".bottomMatHide").css("display", "none");
        $(".trippleMatHide").css("display", "none");
        $("#dropdownWidth").css("width", "105px");
        $("#noMatLi").css("width", "33%");
        this.isFrameSelected = true;
        this.productSubType = 9;
        this.isMatTabs = true;
        $(".noMatLi").css("width", "100%");
        $(".noMatLi").addClass("active");
        $(".topMatLi").removeClass("active");
        $(".bottomMatLi").removeClass("active");
        $(".trippleMatLi").removeClass("active");

      }
      if (mat == "topmats" && flag === true) {
        this.BottomMatTitle = "";
        this.isFloating = false;
        this.isMatTrippleSelected = 0;
        $("#topMatLi").addClass("active");
        
        $("#nomats").prop("checked", false);
        $("#topmats").prop("checked", true);
        $("#bottommats").prop("checked", false);
        $("#tripplemats").prop("checked", false);
        $("#bottommats").attr("disabled", "true");
        $("#bottomMatLi").removeClass("active");
        $("#tripplemats").attr("disabled", "true");
        $("#trippleMatLi").removeClass("active");
        $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
        $(".topMatHide").css("display", "block");
        $(".bottomMatHide").css("display", "none");
        $(".trippleMatHide").css("display", "none");
        $("#topMatLi").css("width", "66%");
        $("#noMatLi").css("width", "33%");
        $("#dropdownWidth").css("width", "105px");
        $(".MatColorNameChange").html(
          "TOP MAT COLOR"
        );

        if (
          $("#vgrooveCheckbox")
            .parent()
            .find("input:checkbox")
            .is(":checked") == true
        ) {
          $("#vgrooveCheckbox").trigger("click");
        }
        this.isFrameSelected = true;
        this.productSubType = 17;
        $(".topMatLi").css("width", "100%");
        $("#lbl1Mat").html(
          "SINGLE"
        );
        $(".noMatLi").removeClass("active");
        $(".topMatLi").addClass("active");
        $(".bottomMatLi").removeClass("active");
        $(".trippleMatLi").removeClass("active");
      }
      if (mat == "bottommats" && flag === true) {
        this.isFloating = false;
        this.isMatTrippleSelected = 0;
        if(!this.bottom_mat){
          this.bottom_mat = 89;
        }
        $("#nomats").prop("checked", false);
        $("#topmats").prop("checked", true);
        $("#bottommats").prop("checked", true);
        $("#tripplemats").prop("checked", false);
        $("#bottommats").removeAttr("disabled");
        $("#topMatLi").addClass("active");
        $("#dropdownWidth").css("width", "105px");
        $(".topMatHide").css("display", "block");
        $(".bottomMatHide").css("display", "block");
        $(".trippleMatHide").css("display", "none");
        $("#noMatLi").css("width", "33%");
        $("#topMatLi").css("width", "33%");
        $("#bottomMatLi").css("width", "33%");
        $(".MatColorNameChange").html(
          "TOP MAT COLOR"
        );
        this.isFrameSelected = true;
        this.productSubType = 80;
        $("#lbl1Mat").html(
          "TOP"
        );
        $("#lblSecondMat").html(
          "BOTTOM"
        );
        $(".topMatLi").css("width", "50%");
        $(".bottomMatLi").css("width", "50%");
        $(".noMatLi").removeClass("active");
        $(".topMatLi").removeClass("active");
        $(".bottomMatLi").addClass("active");
        $(".trippleMatLi").removeClass("active");
      }

      if (mat == "tripplemats" && flag === true) {
        this.isFloating = false;
        this.isMatTrippleSelected = 1;
        $("#nomats").prop("checked", false);
        $("#topmats").prop("checked", true);
        $("#bottommats").prop("checked", true);
        $("#bottommats").removeAttr("disabled");
        $("#tripplemats").prop("checked", true);
        $("#tripplemats").removeAttr("disabled");
        $("#dropdownWidth").css("width", "88px");
        $("#topMatLi").removeClass("active");
      $("#bottomMatLi").removeClass("active");
      $("#trippleMatLi").addClass("active"); 
        $(".topMatHide").css("display", "block");
        $(".bottomMatHide").css("display", "block");
        $(".trippleMatHide").css("display", "block");
        $("#noMatLi").css("width", "28%");
        $("#topMatLi").css("width", "24%");
        $("#bottomMatLi").css("width", "24%");
        $("#trippleMatLi").css("width", "24%");
        $(".MatColorNameChange").html(
          "TOP MAT"
        );
        $(".bottomMatColorNameChange").html(
          "BOTTOM MAT"
        );
        this.isFrameSelected = true;
        this.productSubType = 80;
        this.dataMatsArray.filter((data) => data.code === ''+ this.tripple_mat).map((res)=>{
          this.TrippleMatTitle = res.name;
        })

        $("#lbl1Mat").html(
          "TOP"
        );
        $("#lblSecondMat").html(
          "MIDDLE"
        );
        $(".topMatLi").css("width", "33%");
        $(".bottomMatLi").css("width", "33%");
        $(".trippleMatLi").css("width", "33%");

        $(".noMatLi").removeClass("active");
        $(".topMatLi").removeClass("active");
        $(".bottomMatLi").removeClass("active");
        $(".trippleMatLi").addClass("active");
      }
      
    }
    if (mat == "bottommats" && flag === false) {
      $("#topMatLi").removeClass("active");
      $("#bottomMatLi").addClass("active");
      $("#trippleMatLi").removeClass("active");

      if(this.selectedMatType === 'bottommats'){
        $("#bottommats").removeAttr("disabled");
        $("#bottomMatLi").addClass("active");
        $("#topMatLi").removeClass("active");
        $("#trippleMatLi").removeClass("active");
      }
      
    }

    if (mat == "bottommats" && flag === 'falsee') {
      this.selectedMatType = 'topmats'
      $("#topmats").prop("checked", true);
      $("#bottommats").prop("checked", false);
      $("#topMatLi").addClass("active");
      $("#bottommats").attr("disabled", "true");
      $(".topMatHide").css("display", "block");
        $(".bottomMatHide").css("display", "none");
        $("#topMatLi").css("width", "66%");
        $(".MatColorNameChange").html(
          "TOP MAT COLOR"
        );
      
    }

    if (mat == "tripplemats" && flag === false) {
      $("#topMatLi").removeClass("active");
      $("#bottomMatLi").removeClass("active");
      $("#trippleMatLi").addClass("active");
      if(this.selectedMatType === 'tripplemats'){
        $("#bottommats").removeAttr("disabled");
        $("#bottomMatLi").removeClass("active");
        $("#tripplemats").removeAttr("disabled");
        $("#trippleMatLi").addClass("active");
        $("#topMatLi").removeClass("active");
      }
    }

    if (mat == "topmats" && flag === false) {
      if(this.selectedMatType != 'nomats'){
        $("#topmats").prop("checked", true);
        $("#nomats").prop("checked", false);
      }
        $("#topMatLi").addClass("active");
        $("#bottomMatLi").removeClass("active");
        $("#trippleMatLi").removeClass("active");      
    }

    
    if (this.isCollageApplied == false) {
      this.isFrameMatChanged = 1;
    } else {
      this.isFrameMatChanged = 0;
    } // //console.log(mat)
    if (mat == "floatingframe") {
      // $("#frameModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 20 + "px");
      // $("#matModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 20 + "px");
      // $("#glassModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 20 + "px");
      // $("#decorModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 20 + "px");
      // $("#sizeModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 20 + "px");

      this.isFloating = true;
      this.productCode = 92;
      $("#nomats").prop("checked", false);
      $("#topmats").prop("checked", true);
      $("#bottommats").prop("checked", false);
      $("#bottommats").attr("disabled", true);
      $("#bottomMatLi").removeClass("active");
      $("#topMatLi").addClass("active");
      $(".topMatHide").css("display", "block");
      $(".bottomMatHide").css("display", "none");
      $("#topMatLi").css("width", "66%");
      $(".MatColorNameChange").html(
        "FLOATING MAT BACKGROUND COLOR"
      );

      $("#lbl1Mat").html(
        "FLOAT MOUNT"
      );

      $(".topMatLi").css("width", "100%");

      $(".noMatLi").removeClass("active");
      $(".topMatLi").addClass("active");
      $(".bottomMatLi").removeClass("active");
      $(".trippleMatLi").removeClass("active");
      this.productSubType = 122;
      this.getDataService.getFilterFrameData(this.frameFilterID, this.customWidth, this.customHeight, this.activeFrameId).subscribe((res : any) => {
        let OnloadFrames = res.data;
        this.OnloadFrames = OnloadFrames.filter((data)=> + data.rabbit >= 7500)
        let colors = [];
        this.OnloadFrames.forEach((dat)=>{
          this.frameFilter.filter((filterr)=> filterr.id === dat.color_id).map((filterData)=>{
            colors.push(filterData)
          }) 
        })
        this.framesData['length'] = 314;
        if (
          this.defaultParamObj.frame_code != null
        ) {
        }
        const arr1 = this.getUniqueListBy(colors, 'id')
        this.frameFilter = arr1;
        this.notSelectedFrame = this.OnloadFrames.filter((data) => this.frameCode === data.code)
        console.log(this.notSelectedFrame)
        if(this.notSelectedFrame.length === 0){
          this.isFrameSelected = false;
          $("#myModal_float h4").html(
              "Please choose a new frame."
            );
          $("#myModal_float").modal("toggle");
        }
        else{
          this.isFloatingFrame = false;
        }
      });
    }

    if (mat == "nomats") {
      if ($("#nomats").parent().find("input:checkbox").is(":checked") == true) {
        $("#more_info_note,.color-filterbtn").hide();
        if (this.productCode == 79) {
          this.productSwitch(38);
          $("#nomats").prop("checked", true);
        } else if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.instaFrame) this.productSwitch(80);
          else if (this.printImage) this.productSwitch(57, 3);
          else this.productSwitch(38);
        }
        this.isMatTopSelected = 0;
        this.isMatBottomSelected = 0;
        
        $("#topmats, #bottommats").prop("checked", false).removeAttr("checked");
        $("#nomats").prop("checked", true);
        this.matWidth = 0;
        this.activeTab = "nomats";
        this.selected_mat = '';
        $("#innerlayer-canvas").css("display", "none");
        if ($("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") == true) {
          $("#vgrooveCheckbox").trigger("click");
        }
        setTimeout(() => {
          $("#noMatLi").removeClass("active");
          $("#bottomMatLi").removeClass("active");
        }, 200);
      } else {
        $("#more_info_note,.color-filterbtn").show();

        if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.instaFrame) this.productSwitch(80);
          else if (this.printImage) this.productSwitch(57, 4);
          else this.productSwitch(79);
        } else if (this.isCollageApplied == true) {
          this.productSwitch(78);
        } else {
          this.productSwitch(79);
        }
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#topmats").prop("checked", true);
        $("#noMatLi").removeClass("active");
        this.isMatTopSelected = 1;
        this.matWidth = 2;
        this.activeTab = "topmats";
        this.selected_mat = this.top_mat;
        setTimeout(() => {
          $("#topMatLi").trigger("click");
        }, 200);
      }
    }
    if (mat == "topmats") {
      if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) {
        console.log(mat)
        $("#more_info_note,.color-filterbtn").show();
        if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.instaFrame) this.productSwitch(80);
          else if (this.printImage) this.productSwitch(57, 5);
          else this.productSwitch(79);
        } else if (this.isCollageApplied == true) {
          this.productSwitch(78);
        } else {
          this.productSwitch(79);
        }
        this.isMatTopSelected = 1;
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#topmats").prop("checked", true);
        this.matWidth = 2;
        this.activeTab = "topmats";
        
        this.selected_mat = this.top_mat;
        
      } else {
        $("#more_info_note,.color-filterbtn").hide();
        this.isMatTopSelected = 0;
        this.selected_mat = '';
        if (this.productCode == 79) {
          this.productSwitch(38);
          $("#nomats").prop("checked", true);
        } else if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.printImage) this.productSwitch(57, 6);
          else this.productSwitch(38);
        }

        $("#topmats").prop("checked", false).removeAttr("checked");
        if (
          $("#bottommats").parent().find("input:checkbox").is(":checked") ==
          true
        ) {
          $("#bottommats").prop("checked", false).removeAttr("checked");
          $("#fancyCheckbox").prop("checked", false).removeAttr("checked");
          $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
          this.isMatBottomSelected = 0;
        }
        $("#nomats").prop("checked", true);
        this.activeTab = "nomats";
        this.matWidth = 0;
        this.selected_mat = '';
      }
    }
    
    if (mat == "bottommats") {
      if ($("#bottommats").parent().find("input:checkbox").is(":checked") == true) {
        $("#more_info_note,.color-filterbtn").show();
        if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.instaFrame) this.productSwitch(80);
          else if (this.printImage) this.productSwitch(57, 7);
          else this.productSwitch(79);
        } else if (this.isCollageApplied == true) {
          this.productSwitch(78);
        } else {
          this.productSwitch(79);
        }
        if(!this.bottom_mat){
          this.bottom_mat = '89';
        }
        if(!this.BottomMatTitle){
          this.BottomMatTitle = "Black";
        }
        this.isMatBottomSelected = 1;
        this.isMatTopSelected = 1;
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#bottommats,#topmats").prop("checked", true);
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.activeTab = "bottommats";
        this.selected_mat = this.bottom_mat;
        if (this.isCollageApplied == false) {
          this.fancysShapeSwitch();
        }
      } else {
        if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.instaFrame) this.productSwitch(80);
          else if (this.printImage) this.productSwitch(57, 8);
          else if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) this.productSwitch(79);
          else this.productSwitch(38);
        } else if (this.isCollageApplied == true) {
          this.productSwitch(78);
        } else {
          if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) this.productSwitch(79);
          else this.productSwitch(38);
        }
        $("#bottommats").prop("checked", false).removeAttr("checked");
        this.isMatBottomSelected = 0;
        // this.isMatTrippleSelected = 0;
        $("#fancyCheckbox").prop("checked", false).removeAttr("checked");
        $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
        setTimeout(() => {
          
        }, 200);
      }
    }

    if (mat == "tripplemats") {
      if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true) {
        $("#more_info_note,.color-filterbtn").show();
        if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.instaFrame) this.productSwitch(80);
          else if (this.printImage) this.productSwitch(57, 7);
          else this.productSwitch(79);
        } else if (this.isCollageApplied == true) {
          this.productSwitch(78);
        } else {
          this.productSwitch(79);
        }

        this.isMatBottomSelected = 1;
        this.isMatTopSelected = 1;
        this.isMatTrippleSelected = 1;
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#bottommats, #topmats, #tripplemats").prop("checked", true);
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.activeTab = "tripplemats";
        if(!this.bottom_mat){
          this.bottom_mat = '89';
        }
        if(!this.BottomMatTitle){
          this.BottomMatTitle = "Black";
        }
        if(!this.tripple_mat){
          this.tripple_mat = '61';
        }
        if(!this.TrippleMatTitle){
          this.TrippleMatTitle = "Super White";
        }
        this.selected_mat = this.tripple_mat;
        this.matWidth = 2;
        if (this.isCollageApplied == false) {
          this.fancysShapeSwitch();
        }
      } else {
        if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.instaFrame) this.productSwitch(80);
          else if (this.printImage) this.productSwitch(57, 8);
          else if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) this.productSwitch(79);
          else this.productSwitch(38);
        } else if (this.isCollageApplied == true) {
          this.productSwitch(78);
        } else {
          if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) this.productSwitch(79);
          else this.productSwitch(38);
        }
        $("#fancyCheckbox").prop("checked", false).removeAttr("checked");
        $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
        setTimeout(() => {
          
        }, 200);
      }
    }


    if (mat == "floatingframe") {
        this.isFloating = true;
        this.productCode = 92;
          this.productSwitch(92);
          $("#more_info_note,.color-filterbtn").show();
        if (this.imgUpload == 1 && this.isCollageApplied == false) {
          if (this.instaFrame) this.productSwitch(80);
          else if (this.printImage) this.productSwitch(57, 5);
        }
        this.isMatTopSelected = 1;
        this.isMatBottomSelected = 0;
        this.isMatTrippleSelected = 0;
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#topmats").prop("checked", true);
        $("#bottommats").prop("checked", false).removeAttr("checked");
        $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
        this.matWidth = 2;
        this.activeTab = "topmats";
        this.selected_mat = this.top_mat;
        
        if (
          $("#vgrooveCheckbox")
            .parent()
            .find("input:checkbox")
            .is(":checked") == true
        ) {
          $("#vgrooveCheckbox").trigger("click");
        }
    
  }
  // if(this.isPageLoad == 0){
    this.applyChanges();
  // }
  // this.isPageLoad = 0
    this.getProductDetails();
  }

  // public getframeFilterColorsList() {
  //   // //console.log(this.frameFilter);
  //   // $("#selFrameColor").val(this.frameFilterID)
  //   // setTimeout(() => {
  //   //Using the value
  //   // //console.log(this.frameFilterID)
  //   // }, 200);
  // }
  public getFrameFilterColorsName() {
    var self = this;
    this.frameFilterID = $("#selFrameColor :selected").val();
    this.showFrames("frame");
    // console.log(this.frameFilterID)
    // if (this.frameFilterID == 0) {
    //   if(this.isFloating){
    //     this.datarr = localStorage.getItem("frames");
    //     let onloadFrames = JSON.parse(this.datarr);
    //     // console.log(onloadFrames)
    //     if(onloadFrames){
    //       // this.OnloadFrames = this.framesData = onloadFrames.filter((data)=> + data.rabbit >= 7500)
    //       // console.log(this.OnloadFrames)
    //     }  
    //   }
    //   else{
    //     this.datarr = localStorage.getItem("frames");
    //     // this.OnloadFrames = JSON.parse(this.datarr);
    //   }
    //   this.showFrames("frames");
    //   $(".bxsliderCF").scrollLeft(0);
    //   this.frameModal = true;
    //   return;
    // }

    // var col1arr = [];
    // var col2arr = [];
    // var col3arr = [];
    // var col4arr = [];
    // var mainFilterArrray = [];
    // // //console.log(self.OnloadFrames);
    // // self.datarr = localStorage.getItem('frames');
    // // self.OnloadFrames = JSON.parse(self.datarr);
    // for (let index = 0; index < self.OnloadFrames.length; index++) {
    //   var color1 = self.OnloadFrames[ index ].color1;
    //   var color2 = self.OnloadFrames[ index ].color2;
    //   var color3 = self.OnloadFrames[ index ].color3;
    //   // //console.log(color1 + "===" + color2 + "===" + color3 + "===" + self.OnloadFrames[index].name);
    //   // //console.log("------------------------------------");

    //   if (color1 == self.frameFilterID && color2 == 0 && color3 == 0) {
    //     col1arr.push(self.OnloadFrames[ index ]);
    //     // //console.log("if1");
    //   } else if (color1 == self.frameFilterID && color2 != 0 && color3 == 0) {
    //     col2arr.push(self.OnloadFrames[ index ]);
    //     // //console.log("if2");
    //   } else if (color1 != 0 && color2 == self.frameFilterID && color3 == 0) {
    //     col3arr.push(self.OnloadFrames[ index ]);
    //     // //console.log("if3");
    //   } else if (color1 != 0 && color2 != 0 && color3 == self.frameFilterID) {
    //     col4arr.push(self.OnloadFrames[ index ]);
    //     // //console.log("if3");
    //   }
    // }
    // console.log(this.OnloadFrames)
    // setTimeout(() => {
    //   col3arr = col3arr.concat(col4arr);
    //   col2arr = col2arr.concat(col3arr);
    //   col1arr = col1arr.concat(col2arr);
    //   mainFilterArrray.push(col1arr);
    //   // //console.log(col1arr.length);
    //   // console.log(mainFilterArrray);

    //   if (col1arr.length == 0) {
    //     // console.log('col1arr')
    //     if(this.isFloating){
    //       let onloadFrames = JSON.parse(localStorage.getItem("frames"));
    //       if(onloadFrames){
    //         // self.OnloadFrames = onloadFrames.filter((data)=> + data.rabbit >= 7500)
    //       }  
    //     }
    //     else{
    //       // self.OnloadFrames = JSON.parse(localStorage.getItem("frames"));
    //     }
    //     this.getFrameFilterColorsName();
    //     $("#myframe_sortby").val('');
    //   }
      
    //   if (this.frameFilterID != 0) {
    //     // this.OnloadFrames = mainFilterArrray[ 0 ];
    //     // console.log("selectFrameFilter Request is successful,");
    //   } else {
    //     if(this.isFloating){
    //       this.datarr = localStorage.getItem("frames");
    //       let onloadFrames = JSON.parse(this.datarr);
    //       // console.log(onloadFrames)
    //       if(onloadFrames){
    //         // this.OnloadFrames = this.framesData = onloadFrames.filter((data)=> + data.rabbit >= 7500)
    //         // console.log(this.OnloadFrames)
    //       }  
    //     }
    //     else{
    //       this.datarr = localStorage.getItem("frames");
    //       // this.OnloadFrames = JSON.parse(this.datarr);
    //     }
    //     // //console.log($(".bxsliderCF").scrollLeft())
    //   }
    //   this.frameModal = true;
    //   this.showFrames("frame");
    //   $(".myFrame").removeClass("frame_active");
    //   $("#myFrame_" + this.frameCode).addClass("frame_active");
    //   $(".bxsliderCF").scrollLeft(0);
    //   $('select[id="selFrameColor"] option').removeAttr("selected");
    //   $('select[id="selFrameColor"]')
    //     .find("option[value=" + this.frameFilterID + "]")
    //     .attr("selected", true);
    // }, 20);
  }
  public getMatColorFilterData() {
    const myheader = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    let body = new HttpParams();
    body = body.set("mat_color", this.matFilterID);
    this.http
      .post<any>(
        "https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getMatFilterDataByColors",
        body,
        {
          headers: myheader,
        }
      )
      .subscribe(
        (res) => {
          if (res) {
            this.dataMatsArray = [];
            this.dataMatsArray = res.data;
            $(".bxsliderCFMat").scrollLeft(0);
            this.Helper.validateMats(
              this.top_mat,
              parseFloat($("#customWidth").val()),
              parseFloat($("#customHeight").val()),
              this.isCollageApplied,
              this.isMatOnlyProduct
            );

            $(".modal-backdrop.in").css("display", "none");
            $(".frame-hide-btn").css("display", "block");
            // $("#frameModal").modal("hide");
            // $("#sizemodal").modal("hide");
            // $("#decorModal").modal("hide");
            // $("#glassModal").modal("hide");
          } else {
            //console.log("getMatColorFilterData something went wrong...");
          }
        },
        (error) => {
          //console.log("getMatColorFilterData error");
        }
      );
  }

  public selectMatFilter(id) {
    var param = "filter";
    this.matFilterID = id;
    $(".matFilterCls").removeClass("matfilter-name-active");
    $(".matFilterCls").removeClass("matfilter-name");
    $(".matFilterCls").addClass("matfilter-name");
    $("#matColor_" + id).removeClass("matfilter-name");
    $("#matColor_" + id).addClass("matfilter-name-active");

    // this.datarr = localStorage.getItem("mats");

    if (param == "filter" && this.matFilterID != 0) {
      this.getMatColorFilterData();
    } else {
      // this.dataMatsArray = JSON.parse(this.datarr);
      // this.Helper.validateMats(
      //   this.top_mat,
      //   parseFloat($("#customWidth").val()),
      //   parseFloat($("#customHeight").val()),
      //   this.isCollageApplied
      // );
      this.getFilterMatsData()
    }
    $("#colorfilter").modal("hide");
    $("#matModal").modal("show");
    $(".modal-backdrop.in").css("display", "none");
    $(".frame-hide-btn").css("display", "block");
    $("#frameModal").modal("hide");
    $("#sizemodal").modal("hide");
    $("#decorModal").modal("hide");
    $("#glassModal").modal("hide");
  }

  public getFrameSortData() {
    //console.log("isFilterDataSortFlag==" + isFilterDataSortFlag)
    // if (isFilterDataSortFlag != 0) { return; }

    this.frameSortID = $("#myframe_sortby :selected").val();
    // console.log("frameSortID==", this.frameSortID)

    if (this.frameSortID == '') {
      this.datarr = localStorage.getItem("frames");
      // this.OnloadFrames = JSON.parse(this.datarr);
      this.frameModal = true;
      // $("#selFrameColor").val(0);
      this.getFrameFilterColorsName();
      // this.showFrames('frames');
      $(".bxsliderCF").scrollLeft(0);
      // //console.log("default frames");
      return;
    }
    this.OnloadFrames = this.Helper.getFrameSortData(
      this.frameSortID,
      this.OnloadFrames
    );
    // console.log(this.OnloadFrames)
    // this.showFrames("frames");
    $(".bxsliderCF").scrollLeft(0);
    
    return;
  }

  //Glass functionality
  public glassPopupToggle(e) {
    $(".glassShowHide ,.confirmGlass").css("display", "none");
    $(".traversing_" + e).toggle();
    $(".traverse_" + e)
      .find(".read-details")
      .toggle();
    $(".traversing_" + e).removeClass("traverse_" + e);
    $(".traverse_" + e)
      .find(".confrim-btn")
      .toggle();
    $(".traverse_" + e)
      .find(".see-more-btn")
      .toggle();

    if ($(".traversing_" + e).css("display") == "block") {
      $(".confirmGlass").text("CONFIRM");
      $(".selectedGlass_" + this.selectedGlassVal).text("SELECTED");
      $(".seeMoreBtn_" + this.selectedGlassVal).hide();
      $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
      $(".seeMoreBtn_" + this.selectedGlassVal)
        .parent()
        .css("text-align", "left");

      if ($(".seeMoreBtn_" + e).css("display") == "none") {
        $(".traversing_" + e).css("display", "block");
      } else {
        $(".confirmGlass").css("display", "none");
        $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
        $(".seeMoreBtn_" + this.selectedGlassVal)
          .parent()
          .css("text-align", "left");
        $(".traversing_" + e).css("display", "none");
        $(".traverse_" + e)
          .find(".glyphicon-star")
          .css("color", "#E8AC07");
      }
    } else {
      $(".traverse_" + e)
        .find(".glyphicon-star")
        .css("color", "#E8AC07");
    }

    if ($(".traversing_" + e).css("display") == "none") {
      $(".confirmGlass").text("CONFIRM");
      $(".selectedGlass_" + this.selectedGlassVal).text("SELECTED");
      $(".seeMoreBtn_" + this.selectedGlassVal).hide();
      $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
      $(".seeMoreBtn_" + this.selectedGlassVal)
        .parent()
        .css("text-align", "left");
      $(".traverse_" + e)
        .find(".glyphicon-star")
        .css("color", "#E8AC07");
    }
  }

  public glassPopupConfirmBtn(code) {
    // this.WriteToFile("changed glass : " + code);
    // //console.log(code)
    this.changeGlassManually = 1;
    this.changeGlass = true;
    this.isFrameChanged1 = true;
    $(".confirmGlass").text("CONFIRM");
    $(".applicableGlass_" + this.selectedGlassVal)
      .find(".main-area-glass")
      .removeClass("glass-activecls");
    this.selectedGlassVal = code;
    console.log("Selected glass 2 => ", this.selectedGlassVal)
    $(".selectedGlass_" + this.selectedGlassVal).text("SELECTED");
    $(".seeMoreBtn_" + this.selectedGlassVal).hide();
    $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
    var glass_name = $(".applicableGlass_" + this.selectedGlassVal)
      .find(".glass-name")
      .text();
    $("#glass_only_name").text(glass_name);
    $("#glass_plexi_name").text(glass_name);
    $(".glassdetail span").text(glass_name);
    $("#glassPopup").modal("hide");
    if (Number(this.selectedGlassVal) == 114) {
      this.glazeSliderImage =
      this.Helper.cdn3 + "/products/glaze/new/Plexi-Regular.png";
    } else {
      this.glazeSliderImage =
      this.Helper.cdn3 + "/products/glaze/new/small/" +
        this.selectedGlassVal +
        ".png";
    }
    // $("#glazeSliderImage").attr("src", "https://cdn2.arttoframe.com/products/glaze/new/small/" + this.selectedGlassVal + ".png?v=23")
    this.change_item = "glass";
    // console.log("Get Price ==> 4")
    console.log("Price 4")
    this.getPrice();
  }

  public showGlass() {
    $("#glassModal").modal("show");
    // $("#glassModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + 30 + "px");
    $("#glassModal").css("bottom", $(".new-cf-tabs").height() + $(".BottomAddtocartHolder").height() + "px");
    $(".modal-backdrop.in").css("display", "none");
    $(".frame-hide-btn").css("display", "block");
    $("#frameModal").modal("hide");
    $("#matModal").modal("hide");
    $("#decorModal").modal("hide");
    $("#sizemodal").modal("hide");
    $(".glassSuboptions li").css("border-top", "0px");
    $("#matoption  img").attr("src", this.Helper.cdn1 + "/images/mat_sep.svg?v=1");
    $("#framesoption img").attr("src", this.Helper.cdn1 + "/images/frame_sep.svg");
    $("#showsizepopu img").attr("src", this.Helper.cdn1 + "/images/size_sep.svg");
    if (this.instaFrame) {
      $("#decoroption img").attr("src", this.Helper.cdn1 + "/images/instaFrame/insta_shape_inactive.svg?v=4");
    } else {
      $("#decoroption img").attr("src", this.Helper.cdn1 + "/images/decor_sep.svg?v=5");
    }
    $("#glassoption img").attr("src", this.Helper.cdn1 + "/images/glass_active_sep.svg");
    this.getFilterGlassData()
    // this.datarr = localStorage.getItem("glass");
    // this.glassArr = JSON.parse(this.datarr);

    var glassMaxWidth = this.customWidth; //this.configuration.glass['insidewidth'];
    var glassMaxHeight = this.customHeight; //this.configuration.glass['insideheight'];
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) {
      glassMaxWidth = this.customWidth + this.totalMatWidth;
      glassMaxHeight = this.customHeight + this.totalMatHeight;
    }
    if (this.isCollageApplied == true) {
      glassMaxWidth = this.collage_finish_size.split("x")[ 0 ];
      glassMaxHeight = this.collage_finish_size.split("x")[ 1 ];
    }

    if (
      (glassMaxWidth >= 16.1 || glassMaxHeight >= 20.1) &&
      (glassMaxWidth >= 20.1 || glassMaxHeight >= 16.1)
    ) {
      $(".glass_only").css("display", "none");
      $(".glass_only").removeClass("active");
      $(".glass_plexi").addClass("active");
      $(".glass_plexi").css("width", "100%");
      $(".plexiTab_newUI").addClass("plexiRad");
      this.getFilterGlassData();
      // this.selectedGlassVal = this.getDefaultGlassID();
      // console.log(this.selectedGlassVal)
      var glass_name = $(".applicableGlass_" + this.selectedGlassVal)
        .find(".glass-name")
        .text();
      $("#glass_only_name, #glass_plexi_name").text(glass_name);

      if (glass_name == '') {
        $("#glass_only_name, #glass_plexi_name").text("Regular Plexi Glass");
      } else {
        $("#glass_only_name, #glass_plexi_name").text(glass_name);
      }
      console.log(glass_name)
      $(".glassdetail span").text(glass_name);
    } else {
      if(this.urlGlassType === '2'){
        $(".glass_only").removeClass("active");
        $(".glass_plexi").addClass("active");

        console.log("getDefaultGlassID 2")
        this.getFilterGlassData();
        // this.selectedGlassVal = this.getDefaultGlassID();
      // console.log(this.selectedGlassVal)
      var glass_name = $(".applicableGlass_" + this.selectedGlassVal)
        .find(".glass-name")
        .text();
      $("#glass_plexi_name").text(glass_name);
      console.log("this.urlGlassType 2 => ", glass_name)
      if (glass_name == '') {
        $("#glass_only_name, #glass_plexi_name").text("Regular Plexi Glass");
      } else {
        $("#glass_only_name, #glass_plexi_name").text(glass_name);
      }

      $(".glassdetail span").text(glass_name);
      }
      else{
        $(".glass_only").css("display", "block");
      $(".glass_plexi").removeClass("active");
      $(".glass_only").addClass("active");
      $(".glass_plexi").css("width", "50%");
      $(".plexiTab_newUI").removeClass("plexiRad");

      console.log("getDefaultGlassID 3")
      // this.selectedGlassVal = this.getDefaultGlassID();
      this.getFilterGlassData();
      // console.log(this.selectedGlassVal)

      var glass_name = $(".applicableGlass_" + this.selectedGlassVal)
        .find(".glass-name")
        .text();
      $(".glassdetail span").text(glass_name);
      }
      
    }
  }

  public getDefaultGlassID() {
    var self = this;
    console.log("Shubham")
    var matWidth = this.customWidth;
    var matHeight = this.customHeight;
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) {
      matWidth = this.customWidth + this.totalMatWidth;
      matHeight = this.customHeight + this.totalMatHeight;
    }
    if (this.isCollageApplied == true) {
      matWidth = this.collage_finish_size.split("x")[ 0 ];
      matHeight = this.collage_finish_size.split("x")[ 1 ];
    }
    console.log(matWidth, matHeight)
    
    if ((matWidth < 16.01 && matHeight < 20.01) || (matWidth < 20.01 && matHeight < 16.01)) {
      self.selectedGlassVal = "14";
    }
    else{
      self.selectedGlassVal = "114";
    }
    self.disabledAddToCart = true;
    console.log("Selected glass 3 => ", this.selectedGlassVal)
    return this.Helper.getDefaultGlassID(this.glassArr, matWidth, matHeight, self.selectedGlassVal, self.changeGlassManually);
  }

  public showGlassPoup() {
    if (this.onLoadGlassFlag == 1) {
      this.onLoadGlassFlag = 0;
      // this.selectedGlassVal = this.getDefaultGlassID();
      // Commented below function due to all glassed fetched
      // this.getFilterGlassData();
      $(".confirmGlass").text("CONFIRM");
      $(".selectedGlass_" + this.selectedGlassVal).text("Selected");
      $(".seeMoreBtn_" + this.selectedGlassVal).hide();
    }
    var glass_name = $(".applicableGlass_" + this.selectedGlassVal)
      .find(".glass-name")
      .text();
    $("#glass_plexi_name").text(glass_name);
    if ($(".glass_only").hasClass("active")) {
      $(".glassType_1").css("display", "block");
      $(".glassType_2").css("display", "none");
      $("#glsPopupTitle").html("Choose Your Glass");
    }
    if ($(".glass_plexi").hasClass("active")) {
      $(".glassType_2").css("display", "block");
      $(".glassType_1").css("display", "none");
      $("#glsPopupTitle").html("Choose Your Plexi Glass");
    }
    this.setGlassHTML();
    $(".confirmGlass").css("display", "none");
    $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
    $(".selectedGlass_" + this.selectedGlassVal).text("SELECTED");
    $(".seeMoreBtn_" + this.selectedGlassVal).hide();
    $(".see-more-btn").parent().css("text-align", "right");
    $(".seeMoreBtn_" + this.selectedGlassVal)
      .parent()
      .css("text-align", "left");

    $(".applicableGlass_" + this.selectedGlassVal)
      .find(".main-area-glass")
      .addClass("glass-activecls");
    $(".traversing_" + this.selectedGlassVal).css("display", "none");
    $(".select-btn").show();
    $(".seeMoreBtn_" + this.selectedGlassVal).hide();

    this.change_item = "glass";
    // console.log("Get Price ==> 5")
    console.log("Price 5")
    this.getPrice();
    // this.arrange();
  }

  public setGlassHTML() {
    var glassMaxWidth = this.customWidth; //this.configuration.glass['insidewidth'];
    var glassMaxHeight = this.customHeight; //this.configuration.glass['insideheight'];
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) {
      glassMaxWidth = this.customWidth + this.totalMatWidth;
      glassMaxHeight = this.customHeight + this.totalMatHeight;
    }
    if (this.isCollageApplied == true) {
      glassMaxWidth = this.collage_finish_size.split("x")[ 0 ];
      glassMaxHeight = this.collage_finish_size.split("x")[ 1 ];
    }

    var glassOnlyActive = $(".glass_only").hasClass("active");

    this.glassArr.sort((a, b) => {
      return b[ "rating" ] - a[ "rating" ];
    });
    console.log(this.glassArr)
    for (let item of this.glassArr) {
      var glassMaxSize1 = parseFloat(item.max_size1);
      var glassMaxSize2 = parseFloat(item.max_size2);
      if (
        ((glassMaxWidth < glassMaxSize1 && glassMaxHeight < glassMaxSize2) ||
          (glassMaxWidth > glassMaxSize1 &&
            glassMaxHeight < glassMaxSize1 &&
            glassMaxWidth < glassMaxSize2)) &&
        $(".applicableGlass_" + item.code).css("display") == "block"
      ) {
        $(".applicableGlass_" + item.code).css("display", "block");
      } else {
        $(".applicableGlass_" + item.code).css("display", "none");
      }
    }

    $("#glassPopup").modal("show");
  }

  public setHarwareHTML() {

    var glassMaxWidth = this.customWidth; //this.configuration.glass['insidewidth'];
    var glassMaxHeight = this.customHeight; //this.configuration.glass['insideheight'];
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true && !this.isCollageApplied) {

      glassMaxWidth = this.customWidth + this.totalMatWidth;
      glassMaxHeight = this.customHeight + this.totalMatHeight;

    }
    var big_size, small_size
    if(glassMaxWidth > glassMaxHeight){
      big_size = glassMaxWidth
      small_size = glassMaxHeight;
    }
    else{
      big_size = glassMaxHeight
      small_size = glassMaxWidth;
    }
    for (let item of this.hardwareData) {
      var glassMaxSize1 = parseFloat(item.max_size1);
      var glassMaxSize2 = parseFloat(item.max_size2);

      var glassMinSize1 = parseFloat(item.min_size1);
      var glassMinSize2 = parseFloat(item.min_size2);

      if ((glassMinSize1 < small_size || glassMinSize2 < big_size) && (glassMaxSize1 >= small_size && glassMaxSize2 >= big_size)) {
        
        // if ((glassMaxWidth < glassMaxSize1 && glassMaxHeight < glassMaxSize2) || (glassMaxWidth > glassMaxSize1 && glassMaxHeight < glassMaxSize1 && glassMaxWidth < glassMaxSize2)) {
        $(".hardwareId_" + item.id).css("display", "block");
        
      } else {
        $(".hardwareId_" + item.id).css("display", "none");
      }

      // if ((glassMaxWidth < glassMaxSize1 && glassMaxHeight < glassMaxSize2) || (glassMaxWidth < glassMaxSize2 && glassMaxHeight < glassMaxSize1)) {

      //   // if ((glassMaxWidth < glassMaxSize1 && glassMaxHeight < glassMaxSize2) || (glassMaxWidth > glassMaxSize1 && glassMaxHeight < glassMaxSize1 && glassMaxWidth < glassMaxSize2)) {
      //   $(".hardwareId_" + item.id).css("display", "block");
      // } else {
      //   $(".hardwareId_" + item.id).css("display", "none");
      // }
    }
  }

  public defalt_hardware_id() {
    // var startTime = Date.now();
    // console.log("Before defalt_hardware_id function call , ", startTime)
    var self = this;
    var glassMaxWidth = this.customWidth;
    var glassMaxHeight = this.customHeight;
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true && !this.isCollageApplied) {
      glassMaxWidth = this.customWidth + this.totalMatWidth;
      glassMaxHeight = this.customHeight + this.totalMatHeight;
    }
    if (this.isCollageApplied == true) {
      glassMaxWidth = this.collage_finish_size.split("x")[ 0 ];
      glassMaxHeight = this.collage_finish_size.split("x")[ 1 ];
    }
    // console.log(glassMaxWidth, glassMaxHeight)
    
    this.Helper.defalt_hardware_id(this.hardwareData, glassMaxWidth, glassMaxHeight, self.hardwareID, self.changeHardwareManually, this.productCode).subscribe((responce)=>{
      // console.log(responce)
      // var endTime = Date.now();
      // console.log("After defalt_hardware_id function call , ", endTime)
      // var differenceInMiliseconds = endTime - startTime;
      // console.log("%c defalt_hardware_id function call difference (In miliseconds)  "+ differenceInMiliseconds, 'background: #222; color: #bada55');
      if(responce){
        return responce;
      }
    })
  }

  public updateZoomValue() {
    var self = this;
    var areas = $("img#positionPreview").selectAreas("areas");
    var cropped_width = self.cropped_width / self.scale;
    var cropped_height = self.cropped_height / self.scale;
    var cropped_x = self.cropped_x / self.scale;
    var cropped_y = self.cropped_y / self.scale;
    var ImgMaxSize = 1000;
    var scaleDownRatio = 1;
    var img_tmp_height = 0;
    var img_tmp_width = 0;
    var openingWidth = 0;
    var openingHeight = 0;
    var cropZoom = 0;
    var imgCropTop = 0;
    var imgCropLeft = 0;
    var imgCropWidth = 0;
    var imgCropHeight = 0;
    var oMW = 0;
    var oMH = 0;

    var image = new Image();
    image.src = $("#positionPreview").attr("src");
    img_tmp_height = self.cutSize[ 1 ];
    img_tmp_width = self.cutSize[ 0 ];
    openingWidth = this.customWidth; //$(".editPopupCustomWidth").val();//OPENING_WIDTH_IMG;
    openingHeight = this.customHeight; //$(".editPopupCustomHeight").val();//OPENING_HEIGHT_IMG;
    cropZoom = 1;
    // console.log(self.cropped_height, self.cropped_width)
    // console.log(self.cropped_y, self.cropped_x)
    imgCropTop = (openingHeight / self.cropped_height) * self.cropped_y;
    imgCropLeft = (openingWidth / self.cropped_width) * self.cropped_x;
    imgCropWidth = (openingWidth / self.cropped_width) * image.width;
    imgCropHeight = (openingHeight / self.cropped_height) * image.height;

    self.cutSize = [ image.width, image.height ];

    oMW = self.cutSize[ 0 ];
    oMH = self.cutSize[ 1 ];

    self.imgPosition = [
      imgCropWidth,
      imgCropHeight,
      imgCropLeft,
      imgCropTop,
      1,
      oMW,
      oMH,
    ];

    // self.imgPosition = [
    //   imgCropWidth,
    //   imgCropHeight,
    //   "-" + imgCropLeft,
    //   "-" + imgCropTop,
    //   1,
    //   oMW,
    //   oMH,
    // ];

    // self.imgPosition = [
    //   imgCropWidth,
    //   imgCropHeight,
    //   imgCropLeft,
    //   imgCropTop,
    //   1,
    //   oMW,
    //   oMH,
    // ];
  }

  getSwapPreview() {
    var tempW = this.addZeroes($("#customWidth").val());
    var tempH = this.addZeroes($("#customHeight").val());
    $("#customHeight").val(tempW);
    $("#customWidth").val(tempH);
    if (
      $("#customWidth").val() != this.customWidth &&
      $("#customHeight").val() != this.customHeight
    ) {
      this.isSwap = 1;
    } else {
      this.isSwap = 0;
    }
    // this.inputValidation();
    // this.confirmSizeE();
  }

  public getOrientation(file, callback) {
    var reader = new FileReader();
    var BlobData = this.dataURItoBlob(file);

    reader.onload = function (e) {
      //var view = new DataView(e.target.result);
      var arrayBuffer = reader.result as ArrayBuffer;
      // var  tt =reader.result;
      var view = new DataView(arrayBuffer);

      if (view.getUint16(0, false) != 0xffd8) {
        return callback(-2);
      }
      var length = view.byteLength,
        offset = 2;
      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) return callback(-1);
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xffe1) {
          if (view.getUint32((offset += 2), false) != 0x45786966) {
            return callback(-1);
          }

          var little = view.getUint16((offset += 6), false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;
          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) == 0x0112) {
              return callback(view.getUint16(offset + i * 12 + 8, little));
            }
          }
        } else if ((marker & 0xff00) != 0xff00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(BlobData);
  }

  public dataURItoBlob(dataURI) {
    if (typeof dataURI !== "string") {
      throw new Error("Invalid argument: dataURI must be a string");
    }
    dataURI = dataURI.split(",");
    var type = dataURI[ 0 ].split(":")[ 1 ].split(";")[ 0 ],
      byteString = atob(dataURI[ 1 ]),
      byteStringLength = byteString.length,
      arrayBuffer = new ArrayBuffer(byteStringLength),
      intArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteStringLength; i++) {
      intArray[ i ] = byteString.charCodeAt(i);
    }
    return new Blob([ intArray ], {
      type: type,
    });
  }

  public showInfoPopup() {
    // this.btnHide()
    
    $("#infomodal").show();
    $(".modal-backdrop").css("z-index", "9999");
    $(".modal-backdrop").css("display", "block");
    $("#infomodal").modal({
      keyboard: false,
    });

    $(".framecodedetail span").text(this.frameCode);
    $(".framematerialdetail span").text(this.frameMaterial);
    $(".framenamedetail span").text($(".fname_" + this.frameCode).html());
    $(".openingsizedetail span").text(
      this.customWidth + "x" + this.customHeight
    );
    if (this.isCollageApplied == true) {
      $(".openingsizedetail span").text(this.collageOpeningsInfo);
    }

    var finishedwidth = 14;
    var finishedHeight = 16;
    let frameWidth;
    if($("#frame_" + this.frameCode).attr("data-width")){
      frameWidth = parseInt($("#frame_" + this.frameCode).attr("data-width"));
    }
    else{
      frameWidth = this.activeFrameWidth;
    }
    console.log("this.collage_finish_size 1 ", this.collage_finish_size)
    if ($("#nomats").parent().find("input:checkbox").is(":checked") == true) {
      finishedwidth =
        parseFloat(this.customWidth) +
        parseFloat(frameWidth) * 2;
      finishedHeight =
      parseFloat(this.customHeight) +
      parseFloat(frameWidth) * 2;
        // console.log(finishedwidth + "x" + finishedHeight)
      $(".finishedsizedetail span").text(finishedwidth + "x" + finishedHeight);
    } else {
      if(this.isMatOnlyProduct){
        finishedwidth = parseFloat(
          this.customWidth + this.totalMatWidth
        );
        finishedHeight = parseFloat(
          this.customHeight + this.totalMatHeight
        );
      }
      else if(this.isDeploma){
        finishedwidth = parseFloat(
          this.customWidth +
          frameWidth * 2 +
          this.totalMatWidth
        ) - 0.5;
        finishedHeight = parseFloat(
          this.customHeight +
          frameWidth * 2 +
          this.totalMatHeight
        ) - 0.5;
      }
      else{
        if(this.isCollageApplied){
          // finishedwidth = parseFloat(
          //   this.customWidth +
          //   frameWidth * 2
          // ) - 0.5;
          // finishedHeight = parseFloat(
          //   this.customHeight +
          //   frameWidth * 2
          // ) - 0.5;
          console.log("this.collage_finish_size 2 ", this.collage_finish_size)
          let splittedSize = this.collage_finish_size.split('x');
          finishedwidth = splittedSize[0];
          finishedHeight = splittedSize[1];
        }
        else{
          finishedwidth = parseFloat(
            this.customWidth +
            frameWidth * 2 +
            this.totalMatWidth
          );
          finishedHeight = parseFloat(
            this.customHeight +
            frameWidth * 2 +
            this.totalMatHeight
          );
        }
        
      }
      console.log(finishedwidth + "x" + finishedHeight, "Finished size aa")
      console.log($("#frame_" + this.frameCode).attr("data-width"))
      if ($("#frame_" + this.frameCode).attr("data-width") == undefined) {
        // $(".finishedsizedetail span").text("14x16");
        $(".finishedsizedetail span").text(
          finishedwidth + "x" + finishedHeight
        );
      } else {
        $(".finishedsizedetail span").text(
          finishedwidth + "x" + finishedHeight
        );
      }
      // this.selectedGlassVal = this.getDefaultGlassID();
      this.getFilterGlassData();
      var glass_name = $(".applicableGlass_" + this.selectedGlassVal)
        .find(".glass-name")
        .text();
      if (glass_name == '') {
        glass_name = "Regular Glass";
      }
      $(".glassdetail span").text(glass_name);
      // //console.log(glass_name)
    }
    if ($("#nomats").parent().find("input:checkbox").is(":checked") == false) {
      $(".topmatcolordetail span").text($(".matName_" + this.top_mat).html());
      $(".bottommatcolordetail span").text(
        $(".matName_" + this.bottom_mat).html()
      );
      $(".tripplematcolordetail span").text(
        $(".matName_" + this.tripple_mat).html()
      );
    } else {
      $(".topmatcolordetail span,.bottommatcolordetail span").text("No mat");
    }

    if (
      $("#bottommats").parent().find("input:checkbox").is(":checked") == false
    ) {
      $(".bottommatcolordetail span").text("No mat");
    }

    $("#popupPrice").html($(".price-txt").html());
    var glassMaxWidth = this.customWidth;
    var glassMaxHeight = this.customHeight;
    if ($("#topmats").parent().find("input:checkbox").is(":checked") == true && !this.isCollageApplied) {
      glassMaxWidth = this.customWidth + this.totalMatWidth;
      glassMaxHeight = this.customHeight + this.totalMatHeight;
    }
    if (this.isCollageApplied == true) {
      glassMaxWidth = this.collage_finish_size.split("x")[ 0 ];
      glassMaxHeight = this.collage_finish_size.split("x")[ 1 ];
    }
    this.Helper.defalt_hardware_id(this.hardwareData, glassMaxWidth, glassMaxHeight, this.hardwareID, this.changeHardwareManually, this.productCode).subscribe((responce)=>{
      if(responce){
        this.hardwareID = responce;
      }
    
    // this.hardwareID = this.defalt_hardware_id();
    // console.log("Hardware 3 =>>  " + this.hardwareID)
    // console.log(this.hardwareID);
    if ($("#hardware_" + this.hardwareID).html() != undefined) {
      $(".hardwaredetail span").text(
        $("#hardware_" + this.hardwareID)
          .html()
          .split("<")[ 0 ]
      );
    }
    if (this.podFlag == 1) {
      $(".podArtist").show();
    } else {
      $(".podArtist").hide();
    }
    // console.log($('#meta_seo_title_new').html())
    this.productName = $('#meta_seo_title_new').val();
      this.frameName = $(".framenamedetail span").html();
      this.finishedSize = $(".finishedsizedetail span").html();
      this.topMat = $(".topmatcolordetail span").html();
      this.bottomMat = $(".bottommatcolordetail span").html();
      this.glassName = $(".glassdetail span").html();
      this.openingSize = $(".openingsizedetail span").html();

    })
      // console.log(this.bottomMat)
      // this.productDescription = 'Family Collage Frame with ' + this.openingSize + ' openings ' + this.frameName  + ' collage picture frame ( ' + this.finishedSize + ' Finished Size ) - Top Mat ' + this.topMat + ' and Bottom Mat ' + this.bottomMat + ' with ' + this.glassName;
  }

  //Popup mat(fancy shape)

  fancysShapeSwitch() {
    if (
      $("#fancyCheckbox").parent().find("input:checkbox").is(":checked") == true
    ) {
      // console.log(this.productCode)
      if (this.instaFrame) this.productSwitch(80);
      else if (this.printImage) this.productSwitch(57, 9);
      else this.productSwitch(79);
      $("#popupmatcanvas").css("display", "block");
      $("#popupmatcanvas").css("z-index", "21");
      $("#innerlayer-canvas").css("display", "none");
      this.setPopupMat(this.singlePopupMatImg);
      //$("#fancyCheckbox").prop('checked', true);
      this.cropFlagOpening = 2;
    } else {
      if (this.imgUpload == 1 && this.isCollageApplied == false) {
        // console.log(this.productCode)
        if (this.instaFrame) this.productSwitch(80);
        else if (this.printImage) this.productSwitch(57, 10);
        else this.productSwitch(79);
      } else if (this.isCollageApplied == true) {
        this.productSwitch(78);
      } else {
        // console.log(this.productCode)
        // console.log('check 5')
        this.productSwitch(79);
      }
      $(".mat-checkbox-green").removeClass("fancy_active");
      $("#popupmatcanvas").css("display", "none");
      $("#innerlayer-canvas").css("display", "block");
      this.singlePopupMatImg = '';
      if(this.isMatTrippleSelected === 1){
        $(".trippleMatHide").css("display", "block");
      }
    }
    if(this.priceCallReduceAtInit === 0){
      console.log("Arrangee ===>  9 ")
      this.arrange();
    }
    // this.priceCallReduceAtInit = 0
    $(".new-cf-tabs").show();
  }

  public PopupMat(id) {
    this.singlePopupMatImg = this.instActiveShape = id;
    this.isFrameChanged1 = true;
    $("#fancyCheckbox").prop("checked", true);
    if ($("#fancyCheckbox").parent().find("input:checkbox").is(":checked") == true && this.isCollageApplied == false) {
      if (this.instaFrame && Number(this.instActiveShape) != 3 && Number(this.instActiveShape) != 4 && ($("#nomats").parent().find("input:checkbox").is(":checked") == true || $("#bottommats").parent().find("input:checkbox").is(":checked") == false)) {
        $("#topmats,#bottommats").prop("checked", true);
        this.selectMats("bottommats", true);
      }
      // $("#topmats,#bottommats").prop("checked", true);
        // this.selectMats("bottommats", true);
      $(".trippleMatHide").css("display", "none");
      $("#popupmatcanvas").css("display", "block");
      $("#innerlayer-canvas").css("display", "none");
      $(".mat-checkbox-green").removeClass("fancy_active");
      $(".fancySelect_" + id).addClass("fancy_active");
      this.selectedMatType = 'bottommats'
      this.ismatpopup = false
      if(this.isMatTrippleSelected === 1){
        this.ismatpopup = true
        this.isMatTrippleSelected = 0;
        this.fancyShapeValidation()
      }
      
      //$("#fancyCheckbox").prop('checked', true);
      this.setPopupMat(id);
    } else {
      
      $(".mat-checkbox-green").removeClass("fancy_active");
      console.log("Arrangee ===>  10 ")
      this.arrange();
      $("#popupmatcanvas").css("display", "none");
      $("#innerlayer-canvas").css("display", "block");
      
    }
    // //console.log(this.cuts)
  }

  public setPopupMat(id) {
    // console.log(id)
    if (!this.instaFrame) {
      if (this.printImage) this.productSwitch(57, 11);
      else this.productSwitch(79);
    }
    // this.WriteToFile("select fancy shape : " + id);
    var self = this;
    var popupFlag = 0;
    if (
      $("#nomats").parent().find("input:checkbox").is(":checked") == false
    ) {
      $("#imgSampleBottom").attr(
        "src",
        self.Helper.cdn1 + "/products/mats/images/200/" +
        self.bottom_mat +
        ".jpg"
      );
      $("#imgSample").attr(
        "src",
        self.Helper.cdn1 + "/products/mats/images/200/" +
        self.top_mat +
        ".jpg"
      );
    }
    
      
    $(".ngxcarouselPoint li").removeClass("active");
    $(".ngxcarouselPoint li:first-child").addClass("active").click();
    /* self.configuration.popupMat_vgroove = $("#designerMatId"+self.configuration.popupMatID).attr("data-vgroove");
     self.configuration.popupMat_personalization = $("#designerMatId"+self.configuration.popupMatID).attr("data-personalization");*/
      
    $("#patternImageBottom").attr(
      "xlink:href",
      $("#imgMat_" + self.bottom_mat).attr("data-src")
    );
    $("#patternImage").attr(
      "xlink:href",
      $("#imgMat_" + self.top_mat).attr("data-src")
    );

    // var popupMatArr = self.getPopUpMatDesign(self.configuration.popupMatStringCode,self.configuration.popupMatStringTopCode,self.configuration.popupMatStringBottomCode, self.hoverBottomMatColor, self.hoverTopMatColor, self.configuration.popupMat_appliedMat, parseFloat(self.configuration.cuts[$("#removeimg").attr("data-val")].w), parseFloat(self.configuration.cuts[$("#removeimg").attr("data-val")].h));
    // console.log('selected decor ' + id)
    self.popupMatStringCode = $("#designerMatId_" + id).attr("designCode");
    self.popupMatStringBottomCode = $("#designerMatId_" + id).attr(
      "data-value-double-bottom"
    );
    self.popupMatStringTopCode = $("#designerMatId_" + id).attr(
      "data-value-double-top"
    );
    console.log('1 ' + self.popupMatStringCode)
    console.log('2 ' + self.popupMatStringBottomCode)
    console.log('3 ' + self.popupMatStringTopCode)
    console.log(this.singlePopupMatImg);
    
    // if(this.singlePopupMatImg != '6'){
      self.popupMatArr = self.getPopUpMatDesign(
        self.popupMatStringCode,
        self.popupMatStringTopCode,
        self.popupMatStringBottomCode,
        self.top_mat,
        self.bottom_mat,
        '',
        self.customWidth,
        self.customHeight
      );

      this.getFancyShapePreviewDesign(self.popupMatArr.svg)
    // }
    // else{
    //   self.Helper.getOvalShape(self.top_mat,self.bottom_mat,self.customHeight,self.customWidth,self.customWidth,self.customHeight,'bottom').subscribe((data : any)=>{
    //     console.log(data);

    //     self.popupMatArr = self.getPopUpMatDesign(
    //       self.popupMatStringCode,
    //       self.popupMatStringTopCode,
    //       self.popupMatStringBottomCode,
    //       self.top_mat,
    //       self.bottom_mat,
    //       '',
    //       self.customWidth,
    //       self.customHeight
    //     );

    //     this.cx = ((data.opW + 4) * this.ppi) / 2;
    //     this.cy = ((data.opH + 4) * this.ppi) / 2;
    //     this.rx = ((data.opW) * this.ppi) / 2;
    //     this.ry = ((data.opH) * this.ppi) / 2;

    //     // $("#svgForOval").css("display", 'block');

    //     console.log(self.ppi);
    //     var WD =  ((data.opW + 4) * self.ppi);
    //     var HT =  ((data.opH + 4) * self.ppi);

    //     $("#svgForOval").attr("width", WD);
    //     $("#svgForOval").attr("height", HT);

    //     $("#svgForOvalX").attr("cx", this.cx);
    //     $("#svgForOvalX").attr("cy", this.cy);
    //     $("#svgForOvalX").attr("rx", this.rx);
    //     $("#svgForOvalX").attr("ry", this.ry);

    //     // $("#svgForOval").css("fill", "url(#imgpattern)");

    //     // $("#svgForOval").attr("d", svg);
    //     // $("#svgpathBottom").attr("d", svgBottom);
    //     // $("#svgpathBorder").attr("d", svg);
    //     // $("#svgpathBottomBorder").attr("d", svgBottom);
    //     $("#svgId").attr("width", WD);
    //     $("#svgId").attr("height", HT);
    //     $("#svgForOval").css("fill", "url(#imgpattern)");

    //     var svgImageData = document.querySelector("#svgForOval");
    //     var svgData = new XMLSerializer().serializeToString(svgImageData);
    //     var svgURL =
    //       "data:image/svg+xml; charset=utf8, " + encodeURIComponent(svgData);
    //     $("#svgimg").attr("src", svgURL);

    //     this.getFancyShapePreviewDesign(svgURL)
    //   })
    // }
    
    
  }
  getFancyShapePreviewDesign(svgURL) {
        let self = this;
    
        let popupmatCanvas = self.popupmatcanvas.nativeElement;
        let popupMatCtx = popupmatCanvas.getContext("2d");

        console.log(self.popupMatArr)
        popupmatCanvas.width = self.popupMatArr.WD * self.scale; //self.canvasThirdMatScale.width;
        popupmatCanvas.height = self.popupMatArr.HT * self.scale; // self.canvasThirdMatScale.height;

        var popupimg = new Image();
        popupimg.src = svgURL;
        popupimg.onload = function () {
          $("#svgwd").val(self.popupMatArr.WD);
          $("#svght").val(self.popupMatArr.HT);
          popupMatCtx.clearRect(0, 0, self.popupMatArr.WD, self.popupMatArr.HT);
          popupMatCtx.drawImage(
            popupimg,
            0,
            0,
            self.popupMatArr.WD,
            self.popupMatArr.HT,
            0,
            0,
            self.popupMatArr.WD * self.scale,
            self.popupMatArr.HT * self.scale
          );
        };
        $("#popupmat-canvas").css("display", "block");
        // console.log("Get Price ==> 6")
        console.log("Price 6")
        self.getPrice();
  }

  public getPopUpMatDesign(
    popupMatStringCode,
    popupMatStringTopCode,
    popupMatStringBottomCode,
    bottomMatColor,
    topMatColor,
    appliedMat,
    openingWidth,
    openingHeight
  ) {
    this.matWidthArr = {
      // minX: 1.875,
      minX: this.selectedMatWidth,
      minY: 2,
      maxX: openingWidth + 0.125,
      maxY: openingHeight + 0.125,
    };
    console.log(this.matWidthArr)
    var self = this;
    appliedMat = 2;
    //   if(appliedMat == 2 && popupMatStringBottomCode && popupMatStringTopCode){
    
    var popupMatStringTopCodeArray = popupMatStringTopCode.split(";");
    var popupMatStringBottomCodeArray = popupMatStringBottomCode.split(";");
    // console.log(popupMatStringTopCodeArray)
    // console.log(popupMatStringBottomCodeArray)
    if (openingWidth >= openingHeight) {
      var dist = openingHeight / 7;
    } else {
      var dist = openingWidth / 7;
    }
    var BM = parseFloat(self.linethick) * self.ppi;
    var ST = self.matWidthArr.minX * self.ppi;
    ST = ST + self.scale * 20; //white space removed

    var DT = dist * self.ppi;

    // Commented below two lines because for odd mat sizes preview breaks
    // var WD = (openingWidth + self.matWidthArr.minX * 2) * self.ppi;
    // var HT = (openingHeight + self.matWidthArr.minX * 2) * self.ppi;

    var WD = (openingWidth + self.pos_left + self.pos_right) * self.ppi;
    var HT = (openingHeight + self.pos_top + self.pos_bottom) * self.ppi;

    var svg = '';
    var xpoly, ypoly;
    self.popupMatStringTopCodeArraytmp =
      popupMatStringTopCodeArray[ 4 ].split(" ");
    var tempSTop = 0;
    console.log(self.popupMatStringTopCodeArraytmp)
    for (let i = 0; i <= self.popupMatStringTopCodeArraytmp.length - 1; i++) {
      if (self.popupMatStringTopCodeArraytmp[ i ].indexOf(",") != -1) {
        xpoly = eval(self.popupMatStringTopCodeArraytmp[ i ].split(",")[ 0 ]);
        ypoly = eval(self.popupMatStringTopCodeArraytmp[ i ].split(",")[ 1 ]);
        // console.log(xpoly, ypoly)
        xpoly = xpoly.toFixed(2);
        ypoly = ypoly.toFixed(2);
        if (tempSTop != 1) {
          svg += " " + xpoly + "," + ypoly + " ";
          tempSTop = 1;
        } else {
          svg += xpoly + "," + ypoly + " ";
        }
      } else {
        if (
          self.popupMatStringTopCodeArraytmp[ i ] != "~" &&
          self.popupMatStringTopCodeArraytmp[ i ] != "|"
        ) {
          svg += self.popupMatStringTopCodeArraytmp[ i ];
          tempSTop = 0;
        }
      }
    }

    var svgBottom = '';

    self.popupMatStringBottomCodeArraytmp =
      popupMatStringBottomCodeArray[ 4 ].split(" ");
    var tempSBottom = 0;
    for (
      let i = 0;
      i <= self.popupMatStringBottomCodeArraytmp.length - 1;
      i++
    ) {
      if (self.popupMatStringBottomCodeArraytmp[ i ].indexOf(",") != -1) {
        xpoly = eval(self.popupMatStringBottomCodeArraytmp[ i ].split(",")[ 0 ]);
        ypoly = eval(self.popupMatStringBottomCodeArraytmp[ i ].split(",")[ 1 ]);
        xpoly = xpoly.toFixed(2);
        ypoly = ypoly.toFixed(2);
        if (tempSBottom != 1) {
          svgBottom += " " + xpoly + "," + ypoly + " ";
          tempSBottom = 1;
        } else {
          svgBottom += xpoly + "," + ypoly + " ";
        }
      } else {
        if (
          self.popupMatStringBottomCodeArraytmp[ i ] != "~" &&
          self.popupMatStringBottomCodeArraytmp[ i ] != "|"
        ) {
          svgBottom += self.popupMatStringBottomCodeArraytmp[ i ];
          tempSBottom = 0;
        }
      }
    }
    // svgBottom = "M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
    
    console.log(svg);
    console.log(svgBottom);
    
    $("#svgpath").attr("d", svg);
    $("#svgpathBottom").attr("d", svgBottom);
    $("#svgpathBorder").attr("d", svg);
    $("#svgpathBottomBorder").attr("d", svgBottom);
    $("#svgId").attr("width", WD);
    $("#svgId").attr("height", HT);
    $("#svgpath").css("fill", "url(#imgpattern)");
    var svgImageData = document.querySelector("#svgId");
    var img = document.querySelector("#svgimg");
    var svgData = new XMLSerializer().serializeToString(svgImageData);
    var svgURL =
      "data:image/svg+xml; charset=utf8, " + encodeURIComponent(svgData);
    $("#svgimg").attr("src", svgURL);
    // //console.log("svgURL"+svgURL)
    return {
      svg: svgURL,
      WD: WD,
      HT: HT,
    };
    //}
  }

  public vgrooveSwitch() {
    if (
      $("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") ==
      true
    ) {
      this.applyVGroove(this.selectedVgroove);
      if (this.printImage) this.productSwitch(57, 12);
      else this.productSwitch(79);
    } else {
      if (this.imgUpload == 1 && this.isCollageApplied == false) {
        if (this.printImage) this.productSwitch(57, 13);
        else this.productSwitch(79);
      } else if (this.isCollageApplied == true) {
        this.productSwitch(78);
      } else {
        // console.log('check 6')
        this.productSwitch(79);
      }
      $(".mat-checkbox-green").removeClass("vgroove_active");
      $("#groovecanvas").hide();
      this.isVgrooveId = ''
      // console.log("Get Price ==> 7")
      console.log("Price 7")
      this.getPrice();
    }
    // this.arrange();
    // $(".new-cf-tabs").show();
  }

  public applyVGroove(id) {
    // this.WriteToFile("select vgroove shape : " + id);

    // if (this.printImage) this.productSwitch(57, 14);
    // else this.productSwitch(79);

    $("#vgrooveCheckbox").prop("checked", true);
    if (
      $("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") ==
      true
    ) {
      this.selectedVgroove = '';
      this.selectedVgroove = id;
      this.isVgrooveId = id;
      this.isFrameChanged1 = true;
      $(".mat-checkbox-green").removeClass("vgroove_active");
      $(".vgrooveSelect_" + id).addClass("vgroove_active");
      $("#groovecanvas").show();
      this.setVgroove();

      /*if (this.isUploadInProgress == 1 && this.isCollageApplied == false) {
         this.cropFlagOpening = 2;
       }  */
      // setTimeout(() => {
      //   this.arrange();
      //   // this.getPrice();
      // }, 100);
    } else {
      $("#groovecanvas").hide();
    }
    // //console.log(this.cuts)
  }

  public setVgroove() {
    var self = this;
    var stroke = parseFloat(self.linethick) + 1;
    var matWidth = self.matWidth;
    var matDist = 0;
    /* if($('.mat_none_option').find('img').hasClass('active')) {
       matWidth = 0;
       stroke = 0;
     }
   */
    // if (self.isCollageApplied == false) {
      matDist = 0.05;
      if (
        $("#topmats").parent().find("input:checkbox").is(":checked") == true
      ) {
        matDist = 0.125;
      }
      if (
        $("#bottommats").parent().find("input:checkbox").is(":checked") == true
      ) {
        matDist = 0.25;
      }
    // }
    var vgroovshapecodes = $("#vgroov_" + self.selectedVgroove).attr(
      "vgroovCode"
    );
    console.log(vgroovshapecodes)
    var clDist = vgroovshapecodes.split(';')[3];
    var matVDist = this.selectedMatWidth;
    console.log(this.customWidth, matVDist, matDist, clDist)
    // this.boundWidth = parseFloat(this.customWidth) + (matVDist / 2) + matDist + (clDist * 2) + 1.2;
		// this.boundHeight = parseFloat(this.customHeight) + (matVDist / 2) + matDist + (clDist * 2) + 1.2;

    if(this.isCollageApplied){
      this.cutMetrics = {
        minX: 1.875,
        minY: 2,
        maxX: (this.customWidth - 2) + 0.125,
        maxY: (this.customHeight - 2) + 0.125,
      };

      if (parseFloat(this.cutMetrics.minX) >= parseFloat(this.cutMetrics.minY)) {
        matVDist = parseFloat(self.cutMetrics.minY) / 2;
      } else {
        matVDist = parseFloat(self.cutMetrics.minX) / 2;
      }
      if (typeof (matVDist) == 'undefined') {
        matVDist = 1;
      }
   
      this.Helper.getCollageOpeningSize(this.matcode).subscribe((data : any)=>{
        console.log(data);
        let imagewidth = data.right - data.left;
        let imageheight = data.bottom - data.top;
        let matX = data.left;
        let matY = data.top;

          this.Helper.getVgrooveCalculations(this.selectedVgroove, matDist, imagewidth, imageheight,
            matX,matY,this.top_mat, this.bottom_mat, this.tripple_mat).subscribe((responce : any)=>{
          console.log(responce)
          this.boundWidth = responce.bound0;
          this.boundHeight = responce.bound1;

          this.VgrooveDesign(vgroovshapecodes, matDist);
        })
      })
      // this.boundWidth = (parseFloat(self.cutMetrics.maxX) - parseFloat(self.cutMetrics.minX)) + (matVDist / 2) + matDist + (clDist * 2) + 1.2;
			// this.boundHeight = (parseFloat(self.cutMetrics.maxY) - parseFloat(self.cutMetrics.minY)) + (matVDist / 2) + matDist + (clDist * 2) + 1.2;
    }
    else
    {
        this.Helper.getVgrooveCalculations(this.selectedVgroove, matDist, parseFloat(this.customWidth), parseFloat(this.customHeight),
      matVDist,matVDist,this.top_mat, this.bottom_mat, this.tripple_mat).subscribe((responce : any)=>{
        console.log(responce)
        this.boundWidth = responce.bound0;
        this.boundHeight = responce.bound1;

        this.VgrooveDesign(vgroovshapecodes, matDist);
      })
    }
  }

  VgrooveDesign(vgroovshapecodes, matDist) {
    var self = this;
    console.log("this.boundWidth, this.boundHeight")
        console.log(this.boundWidth, this.boundHeight)
        self.vgroovConfigArr = self.getVgroovDesign(
          vgroovshapecodes,
          parseFloat(self.customWidth) + matDist,
          parseFloat(self.customHeight) + matDist
        );

        var data = encodeURIComponent(self.vgroovConfigArr.svg);

        var img = new Image();
        img.src = "data:image/svg+xml;utf8," + data;

        var cutWidthX = 2;
        var cutWidthY = 2;

        var frameWidth =
          parseFloat(this.frameWidth) /
          parseFloat(self.ppi) /
          parseFloat(self.scale);

        var vgroovStartX =
          (frameWidth +
            cutWidthX -
            self.vgroovConfigArr.dt / parseFloat(self.ppi) -
            matDist / 2) *
          parseFloat(self.ppi) *
          self.scale;
        var vgroovStartY =
          (frameWidth +
            cutWidthY -
            self.vgroovConfigArr.dt / parseFloat(self.ppi) -
            matDist / 2) *
          parseFloat(self.ppi) *
          self.scale;

        self.vgroovConfigArr.bw += 4;
        self.vgroovConfigArr.bh += 4;

        let grooveCanvas = self.groovecanvas.nativeElement;
        let grooveCtx = grooveCanvas.getContext("2d");

        /* grooveCanvas.width = self.vgroovConfigArr.WD * self.scale;
        grooveCanvas.height = self.vgroovConfigArr.HT * self.scale;*/
        var adjustemntFactor = 0;
        if (self.isCollageApplied == true) {
          adjustemntFactor = 45;
        }

        img.onload = function () {
          grooveCtx.clearRect(
            0,
            0,
            self.vgroovConfigArr.bw * self.scale,
            self.vgroovConfigArr.bh * self.scale
          );
          grooveCanvas.width =
            self.vgroovConfigArr.bw * self.scale - adjustemntFactor;
          grooveCanvas.height =
            self.vgroovConfigArr.bh * self.scale - adjustemntFactor;
          grooveCtx.drawImage(
            img,
            0,
            0,
            img.naturalWidth,
            img.naturalHeight,
            0,
            0,
            self.vgroovConfigArr.bw * self.scale - adjustemntFactor,
            self.vgroovConfigArr.bh * self.scale - adjustemntFactor
          );
        };
        // console.log("Get Price ==> 8")
        console.log("Price 8")
        this.getPrice();
  }

  public getVgroovDesign(vgrooveCode, openingWidth, openingHeight) {
    var self = this;
    let matVDist : any = 2;

    let matDist = this.selectedMatWidth;

    self.vgroovShapeCodesArray = vgrooveCode.split(';');
    console.log(self.vgroovShapeCodesArray)
			// self.configuration.vgroov_DT = parseFloat(matVDist / 4);
			var DT = (matDist / 4) * self.ppi;
      console.log(parseFloat(self.vgroovShapeCodesArray[ 1 ]))

      // var BW : any = (openingWidth + parseFloat(self.vgroovShapeCodesArray[ 1 ]) * matDist) * self.ppi;
      var BW : any = self.boundWidth * self.ppi;

      if (self.isCollageApplied == true) {
        var BW : any = (openingWidth + 0.5 * matDist) * self.ppi;
      }

      // var BH : any = (openingHeight + parseFloat(self.vgroovShapeCodesArray[ 1 ]) * matDist) * self.ppi;
      var BH : any = self.boundHeight * self.ppi;

      if (self.isCollageApplied == true) {
        BH = (openingHeight + 0.5 * matDist) * self.ppi;
      }
			// var BW : any = (openingWidth) * self.ppi;
			// var BH : any = (openingHeight) * self.ppi;
			var CL = parseFloat(self.vgroovShapeCodesArray[3]) * self.ppi;

			var svg = '<svg id="vgroovFrame" xmlns="http://www.w3.org/2000/svg" width="' + eval(BW + 4) + '" height="' + eval(BH + 4) + '">';

      let svgShadow, svgShadowUp;
			let svgMain = svgShadow = svgShadowUp = '';
			for (var i = 5; i <= self.vgroovShapeCodesArray.length - 1; i++) {
				svgMain += eval(self.vgroovShapeCodesArray[i].split('x')[0]) + "," + eval(self.vgroovShapeCodesArray[i].split('x')[1]) + " ";

				var a = eval(self.vgroovShapeCodesArray[i].split('x')[0]) + 1;
				var b = eval(self.vgroovShapeCodesArray[i].split('x')[1]) + 1;
				svgShadow += a + "," + b + " ";

				var c = eval(self.vgroovShapeCodesArray[i].split('x')[0]) - 0.5;
				var d = eval(self.vgroovShapeCodesArray[i].split('x')[1]) - 0.5;
				svgShadowUp += c + "," + d + " ";
			}

      var matCoreColor = "0xFEFEFA"; // $("#color1_"+this.$color1id.val()).attr("data-value")
      matCoreColor = matCoreColor.replace("0x", "#");

			// var matCoreColor = $("#color1_" + this.$color1id.val()).attr("data-value")
			// matCoreColor = matCoreColor.replace("0x", "#");

			svg += '<polyline points="' + svgShadowUp + '" style="fill:#00ffff00;stroke:#737373;stroke-width:1" />';
			svg += '<polyline points="' + svgShadow + '" style="fill:#00ffff00;stroke:#737373;stroke-width:1" />';
			svg += '<polyline id="topLeft" points="' + svgMain + '" style="fill:#00ffff00;stroke:' + matCoreColor + ';stroke-width:1.5" />';
			svg += '</svg>';
			console.log("svg, BW, BH, DT")
			console.log(svg, BW, BH, DT)
			return {
				"svg": svg,
				"bw": BW,
				"bh": BH,
				"dt": DT,
			};



    // self.vgroovShapeCodesArray = vgrooveCode.split(";");

    // var vgroov_DT = parseFloat(self.vgroovShapeCodesArray[ 1 ]);
    // var DT = parseFloat(self.vgroovShapeCodesArray[ 1 ]) * self.ppi;

    // if (self.isCollageApplied == true) {
    //   DT = 0.5 * self.ppi;
    //   vgroov_DT = 0.5;
    // }

    // var BW =
    //   (openingWidth + parseFloat(self.vgroovShapeCodesArray[ 1 ]) * 2) * self.ppi;
    // var vgroov_BoundWidth =
    //   openingWidth +
    //   parseFloat(self.vgroovShapeCodesArray[ 1 ]) +
    //   parseFloat(self.vgroovShapeCodesArray[ 1 ]);

    // if (self.isCollageApplied == true) {
    //   var BW = (openingWidth + 0.5 * 2) * self.ppi;
    //   vgroov_BoundWidth = openingWidth + 0.5 * 2;
    // }

    // var BH =
    //   (openingHeight + parseFloat(self.vgroovShapeCodesArray[ 1 ]) * 2) *
    //   self.ppi;
    // var vgroov_BoundHeight =
    //   openingHeight +
    //   parseFloat(self.vgroovShapeCodesArray[ 1 ]) +
    //   parseFloat(self.vgroovShapeCodesArray[ 1 ]);

    // if (self.isCollageApplied == true) {
    //   BH = (openingHeight + 0.5 * 2) * self.ppi;
    //   vgroov_BoundHeight = openingHeight + 0.5 * 2;
    // }
    // var CL = parseFloat(self.vgroovShapeCodesArray[ 3 ]) * self.ppi;
    // /* BW = ( typeof(BW) == 'undefined')  ? 10 : BW ;
    //  BH = ( typeof(BH) == 'undefined') ?  10 : BH ;*/

    // var svg =
    //   '<svg id="vgroovFrame" xmlns="http://www.w3.org/2000/svg" width="' +
    //   (BW + 4) +
    //   '" height="' +
    //   (BH + 4) +
    //   '">';

    // var svgMain = '';
    // var svgShadow = '';
    // var svgShadowUp = '';

    // for (var i = 4; i <= self.vgroovShapeCodesArray.length - 1; i++) {
    //   svgMain +=
    //     eval(self.vgroovShapeCodesArray[ i ].split("x")[ 0 ]) +
    //     "," +
    //     eval(self.vgroovShapeCodesArray[ i ].split("x")[ 1 ]) +
    //     " ";

    //   var a = eval(self.vgroovShapeCodesArray[ i ].split("x")[ 0 ]) + 1;
    //   var b = eval(self.vgroovShapeCodesArray[ i ].split("x")[ 1 ]) + 1;

    //   svgShadow += a + "," + b + " ";

    //   var c = eval(self.vgroovShapeCodesArray[ i ].split("x")[ 0 ]) - 0.5;
    //   var d = eval(self.vgroovShapeCodesArray[ i ].split("x")[ 1 ]) - 0.5;

    //   svgShadowUp += c + "," + d + " ";
    // }

    // var matCoreColor = "0xFEFEFA"; // $("#color1_"+this.$color1id.val()).attr("data-value")
    // matCoreColor = matCoreColor.replace("0x", "#");

    // svg +=
    //   '<polyline points="' +
    //   svgShadowUp +
    //   '" style="fill:#00ffff00;stroke:#737373;stroke-width:1" />';
    // svg +=
    //   '<polyline points="' +
    //   svgShadow +
    //   '" style="fill:#00ffff00;stroke:#737373;stroke-width:1" />';
    // svg +=
    //   '<polyline id="topLeft" points="' +
    //   svgMain +
    //   '" style="fill:#00ffff00;stroke:' +
    //   matCoreColor +
    //   ';stroke-width:1.5" />';
    // svg += "</svg>";

    // console.log(svg, BW, BH, DT)
    // return {
    //   svg: svg,
    //   bw: BW,
    //   bh: BH,
    //   dt: DT,
    // };
  }
  //-----------------------------------------

  public selectCollageOpening(e: {
    mat_number: string;
    finish_size: string;
    id: string;
    openingsCutCode: any;
    openings_size: string;
  }) {

    // console.log(e)
    // this.WriteToFile("select collage");
    // console.log("change preview_______________", e.openings_size)
    // //console.log(e)
    var self = this;
    
    // if(this.defaultParamObj.type == "no_mat"){
    //   // this.isCollageApplied == true;
    //   this.productSwitch(57);
    // }
    // this.collageChlidMatArrTemp = { CollageOpeningJson }
    // this.collageChlidMatArrTemp = this.collageChlidMatArrTemp["CollageOpeningJson"]['mat_groups'];
    var selectedOpening = parseInt(this.selectedOpening);
    // console.log(this.collageChlidMatArrTemp[selectedOpening])
    // console.log(this.collageChlidMatArrTemp)
    var clildmat = [];
    $.each(self.collageChlidMatArrTemp[ selectedOpening ], function (index, txt) {
      if (
        self.collageChlidMatArrTemp[ selectedOpening ][ index ][ "mat_number" ] ==
        e.mat_number
      ) {
        clildmat.push(self.collageChlidMatArrTemp[ selectedOpening ][ index ]);
      }
    });

    // //console.log(clildmat);
    setTimeout(() => {
      this.collageChlidMatArr = clildmat;
      console.log("collageChlidMatArr  =>  ", this.collageChlidMatArr)
      

      setTimeout(() => {
        this.setCollageChildImages(this.collageChlidMatArr);
        var slider_height = $("#show-img-sizepopupCF").height();
        // //console.log(slider_height)
        var start_with = 0;
        var end_with = Math.ceil(parseInt(slider_height) / 50);

        // //console.log(end_with)

        for (var i = start_with; i < self.collageChlidMatArr.length; i++) {
          var path = $(
            ".img-sizeCF-options #childMatData_" +
            self.collageChlidMatArr[ i ].id +
            " img"
          ).attr("data-src");
          // console.log(path)
          $(
            ".img-sizeCF-options #childMatData_" +
            self.collageChlidMatArr[ i ].id +
            " img"
          ).attr("src", path);
        }
        start_with = end_with;
        $("#show-img-sizepopupCF").scroll(function () {
          var scroll1 = $("#show-img-sizepopupCF").scrollTop();
          end_with = Math.ceil(parseInt(scroll1) / 50) + 10;
          // //console.log(end_with)
          for (var i = start_with; i < end_with; i++) {
            // //console.log("start_with======" + start_with + " end_with======" + end_with + " scroll1======" + scroll1);

            if (
              !$(
                ".img-sizeCF-options #childMatData_" +
                self.collageChlidMatArr[ i ].id +
                " img"
              ).attr("src")
            ) {
              var path = $(
                ".img-sizeCF-options #childMatData_" +
                self.collageChlidMatArr[ i ].id +
                " img"
              ).attr("data-src");
              // //console.log(path)
              $(
                ".img-sizeCF-options #childMatData_" +
                self.collageChlidMatArr[ i ].id +
                " img"
              ).attr("src", path);
            }
          }
          start_with = end_with;
        });
      }, 500);
    }, 100);

    var showSize = '';
    // this.getDataService.getCollageOpeningChildMats(e).subscribe(
    //   res => {
    //     this.collageChlidMatArr = res;
    //     this.setCollageChildImages(this.collageChlidMatArr);
    //     // //console.log("res ViewChild mats data");
    //     // //console.log(this.collageChlidMatArr);
    //     //console.log("collageChlidMatArr");
    //     //console.log(this.collageChlidMatArr);
    //   });

    this.collage_finish_size = e.finish_size;
    this.canvasSecondMatScaleCollage = [];
    this.canvasImageScales = [];
    this.cuts = [];
    // $("#mat_" + this.matcode + "_" + this.collage_mat_number + " img").attr('src', 'https://cdn3.arttoframe.com/custom_framing/design/thumb/' + this.matcode + '.jpeg')
    $("#mat_" + this.matcode + "_" + this.collage_mat_number).removeClass(
      "active"
    );
    // $("#mat_" + this.matcode + "_" + this.collage_mat_number).css("border", "1px solid #ffffff");

    // //console.log("this.top_mat==" + this.top_mat)
    // //console.log("this.bottom_mat===" + this.bottom_mat)

    this.collage_mat_number = e.mat_number;
    this.matcode = e.id;
    this.isCollageApplied = true;

    this.collageOpenings = {
      cutCode: e.openingsCutCode,
      outsidewidth: e.finish_size.split("x")[ 0 ],
      outsideheight: e.finish_size.split("x")[ 1 ],
      allow_personalization: '',
    };

    $("#mat_" + e.id + "_" + e.mat_number).addClass("active");
    // $("#mat_" + e.id + "_" + e.mat_number).css("border","2px solid #0DA500");

    // $("#mat_" + e.id + "_" + e.mat_number + " img").attr('src', 'https://cdn3.arttoframe.com/custom_framing/design/green_thumb/' + e.id + '.jpeg?color=green')
    $("#customWidth").val(this.addZeroes(e.finish_size.split("x")[ 0 ]));
    $("#customHeight").val(this.addZeroes(e.finish_size.split("x")[ 1 ]));

    showSize = e.openings_size;
    self.openingSizesForTitle = e.openings_size
    if (showSize.length > 4) {
      showSize = showSize.substring(0, 4) + "...";
    }

    $("#imagesizePopupCF").html("IMAGE SIZE: " + showSize);
    $("#show-img-sizepopupCF").modal("show");

    // var returnVal = this.inputValidation();
    // if (returnVal == true) {
    //   var prodNameSize = 'Custom Frame ' + parseFloat($("#customWidth").val()) + "x" + parseFloat($("#customHeight").val());
    //   $('.product-name').html(prodNameSize);
    //   this.confirmSizeE();
    //   this.updateMainCanvasSizes();
    //   this.getPrice();
    // }
    $("#imagesizePopupCF").show();

    /*$(this).find('img').attr('src', "https://www.arttoframe.com/custom_framing/design/activemobilethumbNew/"+e.id+".jpeg?activeblue=blue");
    $('#imagelayer-canvas').css("background","none");*/
    // $('#imagelayer-canvas').css("background", "none");
  }

  public selectChildCollageOpening(e, ischange = false) {
    console.log(e)
    this.selectedOpening = e.openings;
    // $(".openingCF-options li").removeClass("openingActive");
    // $("#opening_" + e.openings).addClass("openingActive");
    $("#openingPopupCF").html("OPENING:" + e.openings);
    if (ischange) {

      $('#meta_seo_title_new').val('')
      this.wordShapeCollage = false;

    }
    this.isCollageApplied = true;
    this.openingsizes = e.openings;
    this.collage_finish_size = e.finish_size;
    // let splittedSize = this.collage_finish_size.split('x');
    // this.customWidth = splittedSize[0];
    // this.customHeight = splittedSize[1];

    if (this.productCode == 38) {
      // var prodNameSize = 'Standard Frame ' + this.customWidth+ "x" + this.customHeight;
      $("#nomats").prop("checked", false).removeAttr("checked");
      $("#topmats").prop("checked", true);
      this.top_mat = 61;
      // this.selectMats("topmats");
    }
    if (this.imgUpload == 0 && $("#positionPreview").attr("src") == '') {
      this.productSwitch(78);
    } else {
      if (this.printImage) this.productSwitch(57, 15);
      else this.productSwitch(79);
    } // console.log(this.productCode, "check product");
    setTimeout(() => {
      $("#imagesizePopupCF").show();
      $("#imagelayer-canvas").css("background", "none");
      var showSize = '';
      this.canvasSecondMatScaleCollage = [];
      this.canvasImageScales = [];
      this.cuts = [];
      this.matcode = e.id;
      // this.collage_finish_size = e.finish_size;
      this.collageOpenings = {
        cutCode: e.openingsCutCode,
        outsidewidth: e.finish_size.split("x")[ 0 ],
        outsideheight: e.finish_size.split("x")[ 1 ],
        allow_personalization: '',
      };
      $("#customWidth").val(this.addZeroes(e.finish_size.split("x")[ 0 ]));
      $("#customHeight").val(this.addZeroes(e.finish_size.split("x")[ 1 ]));
      // this.selectedGlassVal = this.getDefaultGlassID();
      this.getFilterGlassData();
      $(".selectChildMat").removeClass("active");
      $("#childMatData_" + this.matcode).addClass("active");
      showSize = e.openings_size;
      this.openingSizesForTitle = e.openings_size
      if (showSize.length > 5) {
        showSize = showSize.substring(0, 5) + "...";
      }
      // var returnVal = this.inputValidation();
      // if (returnVal == true) {
      var prodNameSize;
      if(this.isDeploma){
        this.productCode = 82
      }
      if(this.productCode == 82){
        prodNameSize =
          "Diploma Frame " + this.customWidth + "x" + this.customHeight;
      }
      else if(this.isMatOnlyProduct){
        prodNameSize = "Mat Only " + this.customWidth + "x" + this.customHeight;
      }
      else if (this.productCode == 79) {
        prodNameSize =
          "Frame with Mat " + this.customWidth + "x" + this.customHeight;
      } else {
        console.log(this.isCollageApplied)
        if(this.isCollageApplied){
          let splittedSize = this.collage_finish_size.split('x');
          this.customWidth = splittedSize[0];
          this.customHeight = splittedSize[1];
        }
        prodNameSize =
          "Custom Frame " + this.customWidth + "x" + this.customHeight;
      }
      // console.log(prodNameSize)
      console.log(prodNameSize, "prodNameSize 4")
      $(".product-name").html(prodNameSize);
      this.confirmSizeE('true');
      $("#imagesizePopupCF").html("IMAGE SIZE: " + showSize);
      this.updateMainCanvasSizes();
      // this.getPrice();
      this.getOpeningSize(e);

      $("#show-img-sizepopupCF").modal("hide");
    }, 50);
    // }
    //this.CollageChildsShape();
  }

  public updateMainCanvasSizes() {
    var cutId = $("#removeimg").attr("data-val");
    var self = this;

    // //console.log("---------------------in maicnavas---------------------------")
    // //console.log(self.collageOpenings)
    var arr1 = ((self.collageOpenings.cutCode).replaceAll(" ", '').replaceAll("\r", '')).split(";");
    // console.log(arr1)
    var opening = [];

    arr1.forEach(function (item, index) {
      // //console.log(self.collageImageArray)
      var arr2 = item.split(":");
      var arr3 = arr2[ 1 ].split("x");

      if (typeof self.cuts[ index ] == "undefined") self.cuts[ index ] = {};
      var imageSizes = 0;
      if (self.collageImageArray[ index ] != undefined) {
        imageSizes = self.collageimageImageSizes[ index ];
      }

      self.cuts[ index ][ "shape" ] = arr2[ 0 ];

      self.cuts[ index ][ "y" ] = arr3[ 0 ];
      self.cuts[ index ][ "x" ] = arr3[ 1 ];

      var arr4 = arr2[ 2 ].split("x");
      self.cuts[ index ][ "w" ] = arr4[ 0 ];
      self.cuts[ index ][ "h" ] = arr4[ 1 ];
      self.cuts[ index ][ "size" ] = imageSizes;
      self.cuts[ index ][ "position" ] = 0;
      self.cuts[ index ][ "original_position" ] = 0;
      self.cuts[ index ][ "cropSelection" ] = 0;
      self.cuts[ index ][ "image" ] = self.collageImageArray[ index ];
      self.cuts[ index ][ "rotate" ] = 0;
    });
    // //console.log("===>self.cuts seting updateMainCanvasSizes")
    // console.log(self.cuts)
    // $.each(opening, function (index, txt) {
    //   opening[index] = "(" + txt[0] + ") " + txt[1][0] + "x" + txt[1][1];
    // });
    if ($("#bottommats").parent().find("input:checkbox").is(":checked") == true && this.wordShapeCollage && !this.isDeploma) {
      $("#bottommats").prop("checked", false);
      this.bottom_mat = ''
      this.wordShapeCollage = true;
      $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
      // this.top_mat = 61;
      // this.selectMats("bottommats");
    }

    // self.openingsizes = opening.join(", ");
    // console.log("self.openingsizes", self.openingsizes)
    this.updateConfiguration();
  }

  public updateConfiguration() {
    for (var i in this.cuts) {
      var imgWidthNew = 0;
      var imgHeightNew = 0;
      var imgTopNew = 0;
      var imgLeftNew = 0;
      var stroke = 0;
      var overlap = 0;
      var swatch = this.activeFrameWidth * this.ppi;
      var top = 0;
      var left = 0;
      var width = 0;
      var height = 0;

      if (
        this.matWidthArr.minX > parseFloat(this.cuts[ i ][ "x" ]) ||
        this.matWidthArr.minX == 0
      ) {
        this.matWidthArr.minX = parseFloat(this.cuts[ i ][ "x" ]);
      }

      if (
        this.matWidthArr.minY > parseFloat(this.cuts[ i ][ "y" ]) ||
        this.matWidthArr.minY == 0
      ) {
        this.matWidthArr.minY = parseFloat(this.cuts[ i ][ "y" ]);
      }

      left = this.cuts[ i ][ "x" ] * this.ppi * this.scale; //- ((0.875 * this.ppi * this.scale) - ((parseFloat(this.linethick) * this.ppi) * this.scale) );
      top = this.cuts[ i ][ "y" ] * this.ppi * this.scale; //- ((1 * this.ppi * this.scale) - ((parseFloat(this.linethick) * this.ppi) * this.scale) );

      width = this.cuts[ i ][ "w" ] * this.ppi * this.scale;
      height = this.cuts[ i ][ "h" ] * this.ppi * this.scale;

      this.canvasSecondMatScaleCollage[ i ] = {
        top: top + 4,
        left: left + 4,
        width: width,
        height: height,
      };

      if (this.noMat == 1) {
        imgWidthNew = this.cuts[ i ][ "w" ] * this.ppi * this.scale;
        imgHeightNew = this.cuts[ i ][ "h" ] * this.ppi * this.scale;
      } else {
        imgWidthNew = this.cuts[ i ][ "w" ] * this.ppi * this.scale + (2 * stroke + overlap) * 2;
        imgHeightNew = this.cuts[ i ][ "h" ] * this.ppi * this.scale + (2 * stroke + overlap) * 2;

        if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
          imgWidthNew = this.cuts[ i ][ "w" ] * this.ppi * this.scale - overlap;
          imgHeightNew = this.cuts[ i ][ "h" ] * this.ppi * this.scale - overlap;
        } else {
          imgWidthNew = this.cuts[ i ][ "w" ] * this.ppi * this.scale - overlap;
          imgHeightNew = this.cuts[ i ][ "h" ] * this.ppi * this.scale - overlap;
        }
        var a = 2 * stroke + 1;
        imgTopNew = a;
        imgLeftNew = a + 2.5;
      }
      var cutWidth = this.cuts[ i ][ "w" ] * this.ppi;
      var cutHeight = this.cuts[ i ][ "h" ] * this.ppi;
      this.canvasImageScales[ i ] = {
        top: imgTopNew,
        left: imgLeftNew,
        width: imgWidthNew,
        height: imgHeightNew,
        //path: path
      };
    }
    this.setSecondMatCollage();
    this.setCanvasOpenings();
  }

  public setCanvasOpenings() {
    // //console.log("ckeck image setCanvasOpenings")
    var self = this;
    var stroke = parseFloat(self.linethick) * self.ppi * self.scale;
    var imageIndex = 0;
    var openingSelector = '';

    let imagelayerCanvas = self.imagelayercanvas.nativeElement;
    self.imageLayerCtx = imagelayerCanvas.getContext("2d");

    imagelayerCanvas.width =
      self.framewidth -
      (2 * self.activeFrameWidth + 0.875 * self.ppi * self.scale * 2);
    imagelayerCanvas.height =
      self.frameheight -
      (2 * self.activeFrameWidth + 1 * self.ppi * self.scale * 2);

    self.imageLayerCtx.beginPath();
    // console.log(self.configImageDataUrl);
    self.canvasImageScales.forEach(function (item, i) {
      if (self.configImageDataUrl[ i ] != undefined) {
        // //console.log(self.configImageDataUrl[i])
        $(".openingImg").find("img#opening_" + i).attr("src", self.configImageDataUrl[ i ]).attr("width", item.width).attr("height", item.height);
      } else {
        //$('.openingImg').find('img#opening_'+i).attr('src', "https://www.arttoframe.com/custom_framing/preview/images/upload1.svg?v=1").attr('width', item.width).attr('height', item.height);
        // if(this.isFloating){
        //   $(".openingImg").find("img#opening_" + i).attr("src", "https://www.arttoframe.com/info_back_image_vertical_new.png").attr("width", item.width).attr("height", item.height).attr("style", "display:none");
        // }
        // else{
          $(".openingImg").find("img#opening_" + i).attr("src", "https://cdn1.arttoframe.com/images/upload-with-text_05.svg").attr("width", item.width).attr("height", item.height).attr("style", "display:none");
        // }
        // console.log("##$#%%%^  ", self.canvasImageScales)
        // console.log("##$#%%%^####  ", self.isPhotoOpening, self.isTusselOpening)
        if(self.isDeploma){
          if(self.canvasImageScales.length != 3){
            // console.log("fsd3333")
            // if(i === 0 && !self.isPhotoOpening && !self.isTusselOpening){
            //   $(".openingImg").find("img#opening_" + i).attr("src", "https://www.arttoframe.com/products/diploma/cert.jpg").attr("width", item.width).attr("height", item.height).attr("style", "display:none");
            // }
            if(i === 0 && self.isPhotoOpening && !self.isTusselOpening){
              $(".openingImg").find("img#opening_" + i).attr("src", "https://www.arttoframe.com/products/diploma/face.jpg").attr("width", item.width).attr("height", item.height).attr("style", "display:none"); 
            }
            else if(i === 1 && self.isTusselOpening && !self.isPhotoOpening){
              $(".openingImg").find("img#opening_" + i).attr("src", "https://www.arttoframe.com/products/diploma/tassel.jpg").attr("width", item.width).attr("height", item.height).attr("style", "display:none");
            }
            else{
              $(".openingImg").find("img#opening_" + i).attr("src", "https://www.arttoframe.com/products/diploma/cert.jpg").attr("width", item.width).attr("height", item.height).attr("style", "display:none");
            }
          }
          else if(self.canvasImageScales.length === 3){
            if(i === 0){
              $(".openingImg").find("img#opening_" + i).attr("src", "https://www.arttoframe.com/products/diploma/face.jpg").attr("width", item.width).attr("height", item.height).attr("style", "display:none"); 
            }
            if(i === 1){
              $(".openingImg").find("img#opening_" + i).attr("src", "https://www.arttoframe.com/products/diploma/cert.jpg").attr("width", item.width).attr("height", item.height).attr("style", "display:none");
            }
            if(i === 2){
              $(".openingImg").find("img#opening_" + i).attr("src", "https://www.arttoframe.com/products/diploma/tassel.jpg").attr("width", item.width).attr("height", item.height).attr("style", "display:none");
            }
          }
          
        }
      }
      // //console.log(self.canvasSecondMatScaleCollage[i]['top']+"+++++++++++"+self.canvasSecondMatScaleCollage[i]['left']+"+++++++++++"+self.canvasSecondMatScaleCollage[i]['width'] +"+++++++++++" + self.canvasSecondMatScaleCollage[i]['height'])
      openingSelector += '<div class="openingSelector" id="openingSelector_' + i + '" style="top:' + self.canvasSecondMatScaleCollage[ i ][ "top" ] + "px;left:" + self.canvasSecondMatScaleCollage[ i ][ "left" ] + "px;width:" + self.canvasSecondMatScaleCollage[ i ][ "width" ] + "px;height:" + self.canvasSecondMatScaleCollage[ i ][ "height" ] + 'px; background:transparent; position:absolute;"></div>';
      // console.log("Image size ===>>> ", imagelayerCanvas.width, imagelayerCanvas.height)

      $("#openingSelectorContainer").width(imagelayerCanvas.width).height(imagelayerCanvas.height).html(openingSelector);
      
      var imageResizeData = new Image();
      imageResizeData.src = $(".openingImg").find("img#opening_" + i).attr("src");
      // console.log(imageResizeData)
      imageResizeData.onload = function () {
        var imgLeft = item.left;
        var imgTop = item.top;
        var ptageScale = 0.5; //0.35;//0.50;  // 15%
        var orgImgWidth = 165;
        var orImgHeight = 185;
        var newHeight = 0;
        var newWidth = 0;
        var width = self.canvasSecondMatScaleCollage[ i ][ "width" ];
        var height = self.canvasSecondMatScaleCollage[ i ][ "height" ];
        var stroke = 5;
        var imgWidth = 0;
        var imgHeight = 0;
        
        // console.log('self.configImageDataUrl',self.configImageDataUrl[i], self.matcode)
        if (self.configImageDataUrl[ i ] != undefined) {
          self.loadPreview();

          if (self.cuts[ i ][ "position" ] == 0) {
            self.getAspectRatioSizePosition(
              imageResizeData.width,
              imageResizeData.height,
              self.cuts[ i ][ "w" ],
              self.cuts[ i ][ "h" ],
              i
            );

            setTimeout(function () {
              // self.loadPreview();
              // //console.log("===================500")
              // self.showEditImagePopup();
              imgWidth = self.newWidth;
              imgHeight = self.newHeight;
              imgLeft = self.newX;
              imgTop = self.newY;
              if (self.newWidth > imageResizeData.width) {
                imgWidth = self.newWidth = imageResizeData.width;
              }
              if (self.newHeight > imageResizeData.height) {
                imgHeight = self.newHeight = imageResizeData.height;
              }
              // //console.log("updated crop sizes")
              self.collageCropPositionArray[ i ] = {
                x: imgLeft,
                y: imgTop,
                w: imgWidth,
                h: imgHeight,
              };
              // //console.log(self.canvasSecondMatScaleCollage)

              // //console.log("for image draw with aspectRatio");
              //console.log(imgLeft+"====>>>>>"+imgTop+"====>>>>>"+imgWidth+"====>>>>>"+imgHeight)
              //  //console.log(self.canvasSecondMatScaleCollage[i]['width']+"<<<<<>>>>>"+ self.canvasSecondMatScaleCollage[i]['height'])
              // self.drawEllipse(innerLayerCtx, item.left, item.top, item.width, item.height);
              // if(self.cuts[i]["shape"] == 1){
              self.imageLayerCtx.drawImage(
                imageResizeData,
                imgLeft,
                imgTop,
                imgWidth,
                imgHeight,
                self.canvasSecondMatScaleCollage[ i ][ "left" ],
                self.canvasSecondMatScaleCollage[ i ][ "top" ],
                self.canvasSecondMatScaleCollage[ i ][ "width" ],
                self.canvasSecondMatScaleCollage[ i ][ "height" ]
              );
              // }else
              if (self.cuts[ i ][ "shape" ] == 2) {
                self.drawEllipse(
                  self.imageLayerCtx,
                  self.canvasSecondMatScaleCollage[ i ][ "left" ],
                  self.canvasSecondMatScaleCollage[ i ][ "top" ],
                  self.canvasSecondMatScaleCollage[ i ][ "width" ],
                  self.canvasSecondMatScaleCollage[ i ][ "height" ]
                );
              }
              // else{
              //   self.drawWordOnCanvas(imageResizeData, i, self.canvasSecondMatScaleCollage[i]["left"], self.canvasSecondMatScaleCollage[i]["top"], self.canvasSecondMatScaleCollage[i]["width"], self.canvasSecondMatScaleCollage[i]["height"]);
              // }
              return;
            }, 500);
            //self.imageLayerCtx.drawImage(imageResizeData, 0, 0, imageResizeData.width, imageResizeData.height, self.canvasSecondMatScaleCollage[i]['left'] , self.canvasSecondMatScaleCollage[i]['top'] , self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height'] );
          }

          if (i == self.selectOpening) {
            // self.loadPreview();

            // //console.log("===================0")
            imgWidth = self.cropped_width;
            imgHeight = self.cropped_height;
            imgLeft = self.cropped_x;
            imgTop = self.cropped_y;
            // //console.log("==> image for crop collage")
            // if(self.cuts[i]["shape"] == 2){
            self.imageLayerCtx.drawImage(
              imageResizeData,
              imgLeft,
              imgTop,
              imgWidth,
              imgHeight,
              self.canvasSecondMatScaleCollage[ i ][ "left" ],
              self.canvasSecondMatScaleCollage[ i ][ "top" ],
              self.canvasSecondMatScaleCollage[ i ][ "width" ],
              self.canvasSecondMatScaleCollage[ i ][ "height" ]
            );

            self.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)";
            self.imageLayerCtx.lineWidth = 1;
            self.imageLayerCtx.strokeRect(
              self.canvasSecondMatScaleCollage[ i ][ "left" ],
              self.canvasSecondMatScaleCollage[ i ][ "top" ],
              self.canvasSecondMatScaleCollage[ i ][ "width" ],
              self.canvasSecondMatScaleCollage[ i ][ "height" ]
            );
            // }else
            if (self.cuts[ i ][ "shape" ] == 2) {
              self.drawEllipse(
                self.imageLayerCtx,
                self.canvasSecondMatScaleCollage[ i ][ "left" ],
                self.canvasSecondMatScaleCollage[ i ][ "top" ],
                self.canvasSecondMatScaleCollage[ i ][ "width" ],
                self.canvasSecondMatScaleCollage[ i ][ "height" ]
              );
            }
            // else{
            // self.drawWordOnCanvas(imageResizeData, i, self.canvasSecondMatScaleCollage[i]["left"], self.canvasSecondMatScaleCollage[i]["top"], self.canvasSecondMatScaleCollage[i]["width"], self.canvasSecondMatScaleCollage[i]["height"]);
            // }
          } else {
            self.collagePreview(i);
          }
        } else {
          // console.log("-----------Default image draw")
          if (parseInt(self.cuts[ i ][ "w" ]) > parseInt(self.cuts[ i ][ "h" ])) {
            newHeight = self.cuts[ i ][ "h" ] * self.ppi * ptageScale * self.scale;
            newWidth = (orgImgWidth * newHeight) / orImgHeight;
          } else {
            newWidth = self.cuts[ i ][ "w" ] * self.ppi * ptageScale * self.scale;
            newHeight = (orImgHeight * newWidth) / orgImgWidth;
          }

          if (self.cuts[ i ][ "shape" ] == 1) {

            if(self.isFloating){
              self.imageLayerCtx.fillStyle = "white";
            }
            else{
              self.imageLayerCtx.fillStyle = "#4a4a4a";
            }
            
            if(self.matcode === '2364'){
              self.imageLayerCtx.fillRect(
                self.canvasSecondMatScaleCollage[ i ][ "left" ] - 3,
                self.canvasSecondMatScaleCollage[ i ][ "top" ] - 3,
                self.canvasSecondMatScaleCollage[ i ][ "width" ],
                self.canvasSecondMatScaleCollage[ i ][ "height" ]
              );
            }
            else{
              self.imageLayerCtx.fillRect(
              self.canvasSecondMatScaleCollage[ i ][ "left" ],
              self.canvasSecondMatScaleCollage[ i ][ "top" ],
              self.canvasSecondMatScaleCollage[ i ][ "width" ],
              self.canvasSecondMatScaleCollage[ i ][ "height" ]
              );
            }
            
            let leftPos, topPos
            if(self.matcode === '2364'){
              leftPos = self.canvasSecondMatScaleCollage[ i ][ "left" ] +
              (self.canvasSecondMatScaleCollage[ i ][ "width" ] / 2 - newWidth / 2) - 2
              topPos = self.canvasSecondMatScaleCollage[ i ][ "top" ] +
              (self.canvasSecondMatScaleCollage[ i ][ "height" ] / 2 -
                newHeight / 2) - 2
            }
            else{
              leftPos = self.canvasSecondMatScaleCollage[ i ][ "left" ] +
              (self.canvasSecondMatScaleCollage[ i ][ "width" ] / 2 - newWidth / 2)
              topPos = self.canvasSecondMatScaleCollage[ i ][ "top" ] +
              (self.canvasSecondMatScaleCollage[ i ][ "height" ] / 2 -
                newHeight / 2)
            }

            self.imageLayerCtx.drawImage(
              imageResizeData,
              0,
              0,
              imageResizeData.width,
              imageResizeData.height,
              leftPos,
              topPos,
              newWidth,
              newHeight
            );

            if(self.isDeploma){
              self.imageLayerCtx.drawImage(
                imageResizeData,
                0,
                0,
                imageResizeData.width,
                imageResizeData.height,
                self.canvasSecondMatScaleCollage[ i ][ "left" ],
                self.canvasSecondMatScaleCollage[ i ][ "top" ],
                width,
                height
              );
            }

            self.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)";
            self.imageLayerCtx.lineWidth = 1;
            if(self.matcode === '2364'){
                self.imageLayerCtx.strokeRect(
                self.canvasSecondMatScaleCollage[ i ][ "left" ] - 3,
                self.canvasSecondMatScaleCollage[ i ][ "top" ] - 3,
                self.canvasSecondMatScaleCollage[ i ][ "width" ],
                self.canvasSecondMatScaleCollage[ i ][ "height" ]
              );
            }
            else{
              self.imageLayerCtx.strokeRect(
                self.canvasSecondMatScaleCollage[ i ][ "left" ],
                self.canvasSecondMatScaleCollage[ i ][ "top" ],
                self.canvasSecondMatScaleCollage[ i ][ "width" ],
                self.canvasSecondMatScaleCollage[ i ][ "height" ]
              );
            }
            

          } else
            if (self.cuts[ i ][ "shape" ] == 2) {
              self.drawEllipse(
                self.imageLayerCtx,
                self.canvasSecondMatScaleCollage[ i ][ "left" ],
                self.canvasSecondMatScaleCollage[ i ][ "top" ],
                self.canvasSecondMatScaleCollage[ i ][ "width" ],
                self.canvasSecondMatScaleCollage[ i ][ "height" ]
              );
            } else {
              // console.log('shape id',self.cuts[i]["shape"])
              self.drawWordOnCanvas(imageResizeData, i, 0, 0, item.width, item.height);
            }

          //self.imageLayerCtx.drawImage(imageResizeData, 0 , 0, imageResizeData.width, imageResizeData.height, self.canvasSecondMatScaleCollage[i]['left'] , self.canvasSecondMatScaleCollage[i]['top'] , self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height'] );
        }
      };
    });

    $("#groovecanvas").css("display", "none");
  }

  public collagePreview(i) {
    // //console.log("collagePreview")
    var self = this;
    var imgData = new Image();
    imgData.src = self.configImageDataUrl[ i ];

    imgData.onload = function () {
      var framewidthcollage = imgData.width; //self.imgWidth;
      var frameheightcollage = imgData.height; //self.imgHeight;
      var TpreviewHeightMax = $("#preview_container").height() - 50;
      var TpreviewWidthMax = $("#preview_container").width() - 50;
      var scale1 = 1;
      var scale2 = 1;
      var scale3 = 1;
      var scale4 = 1;
      var newW = 0;
      var newH = 0;
      var newX = 0;
      var newY = 0;
      var scaleN = 0;

      if (framewidthcollage > TpreviewWidthMax) {
        scale1 = TpreviewWidthMax / framewidthcollage;
        framewidthcollage = TpreviewWidthMax;
        frameheightcollage = frameheightcollage * scale1;
      }

      if (frameheightcollage > TpreviewHeightMax) {
        scale2 = TpreviewHeightMax / frameheightcollage;
        frameheightcollage = TpreviewHeightMax;
        framewidthcollage = framewidthcollage * scale2;
      }
      scaleN = scale1 * scale2 * scale3 * scale4;

      if (self.cuts[ i ][ "cropSelection" ]) {
        newW = self.cuts[ i ][ "cropSelection" ].w * scaleN;
        newH = self.cuts[ i ][ "cropSelection" ].h * scaleN;
        newX = self.cuts[ i ][ "cropSelection" ].x * scaleN;
        newY = self.cuts[ i ][ "cropSelection" ].y * scaleN;
      } else {
        newW = ((self.cuts[ i ][ "w" ] * imgData.width) / self.cuts[ i ][ "position" ][ 0 ]) * scaleN;
        newH = ((self.cuts[ i ][ "h" ] * imgData.height) / self.cuts[ i ][ "position" ][ 1 ]) * scaleN;
        newX = ((Math.abs(self.cuts[ i ][ "position" ][ 2 ]) * (newW / scaleN)) / self.cuts[ i ][ "w" ]) * scaleN;
        newY = ((Math.abs(self.cuts[ i ][ "position" ][ 3 ]) * (newH / scaleN)) / self.cuts[ i ][ "h" ]) * self.newScale;
      }

      // if (self.cuts[i]["shape"] == 1) {

      self.imageLayerCtx.drawImage(
        imgData,
        newX,
        newY,
        newW,
        newH,
        self.canvasSecondMatScaleCollage[ i ][ "left" ],
        self.canvasSecondMatScaleCollage[ i ][ "top" ],
        self.canvasSecondMatScaleCollage[ i ][ "width" ],
        self.canvasSecondMatScaleCollage[ i ][ "height" ]
      );

      self.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)";
      self.imageLayerCtx.lineWidth = 1;
      self.imageLayerCtx.strokeRect(
        self.canvasSecondMatScaleCollage[ i ][ "left" ],
        self.canvasSecondMatScaleCollage[ i ][ "top" ],
        self.canvasSecondMatScaleCollage[ i ][ "width" ],
        self.canvasSecondMatScaleCollage[ i ][ "height" ]
      );

      // }else 
      if (self.cuts[ i ][ "shape" ] == 2) {

        self.drawEllipse(
          self.imageLayerCtx,
          self.canvasSecondMatScaleCollage[ i ][ "left" ],
          self.canvasSecondMatScaleCollage[ i ][ "top" ],
          self.canvasSecondMatScaleCollage[ i ][ "width" ],
          self.canvasSecondMatScaleCollage[ i ][ "height" ]
        );

      }
      // else{

      // self.drawWordOnCanvas(imgData, i, 0, 0, item.width, item.height);

      // }

    };
  }

  public setSecondMatCollage() {
    // //console.log("setSecondMatCollage===>" + this.bottom_mat);
    //$('#groovecanvas').css('display', 'none');
    var self = this;
    var stroke = parseFloat(self.linethick) * self.ppi * self.scale;
    var hoverColor = hoverColor || false;

    let innerlayerCanvas = self.innerlayerCanvas.nativeElement;
    let innerLayerCtx = innerlayerCanvas.getContext("2d");

    innerlayerCanvas.width =
      self.framewidth -
      (2 * self.activeFrameWidth + 0.875 * self.ppi * self.scale * 2);
    innerlayerCanvas.height =
      self.frameheight -
      (2 * self.activeFrameWidth + 1 * self.ppi * self.scale * 2);

    self.canvasSecondMatScaleCollage.forEach(function (item, i) {
      //var html = '<a href="javascript:void(0);" class="settings-upload" id="settings-upload_'+i+'" ><img src="https://www.arttoframe.com/custom_framing/preview/images/upload1.svg?v=1" id="opening_'+i+'" width="'+item.width+'" height="'+item.height+'"></a>';
      
      var html = '<a href="javascript:void(0);" class="settings-upload" id="settings-upload_' + i + '" ><img src="https://cdn1.arttoframe.com/images/upload-with-text_05.svg" id="opening_' + i + '" width="' + item.width + '" height="' + item.height + '"></a>';
      

      $(".openingImg").append(html);

      innerLayerCtx.beginPath();
      if (
        $("#nomats").parent().find("input:checkbox").is(":checked") == false
      ){
        var strokeColor = "https://cdn1.arttoframe.com/products/mats/images/200/" + self.bottom_mat + ".jpg";
      }
      
      var strokeColorImg = new Image();
      strokeColorImg.src = strokeColor;
      /* if(self.configuration['isWordCutOutFrame'] == false && self.settingData['isLetterArt'] == 0) {
         
         if($('#single_mat_option').hasClass('active') && self.canvasImageScales[i]['path']) {           
         } else {*/

      // //console.log("drawInnerPattern 00")
      strokeColorImg.onload = () =>{
        if(self.matcode === '2364'){
          innerLayerCtx.rect(item.left - 3, item.top - 3, item.width, item.height);
        }
        else{
          innerLayerCtx.rect(item.left, item.top, item.width, item.height);
        }
        
        innerLayerCtx.fillStyle = innerLayerCtx.createPattern(
          strokeColorImg,
          "repeat"
        );
        innerLayerCtx.fill();
      /*$('#popupmat-canvas').css('display', 'none');
      if(self.configuration.popupMat == 1 &&  self.configuration.cuts.length  == 1  && !$('.mat_none_option').find('img').hasClass('active')){ 
        self.setPopupMat();
        $('#popupmat-canvas').css('display', 'block');
      }
    }         
    }*/
      // //console.log(self.cuts[i])
      //if (self.noMat != 1) {
      // if(!$('#single_mat_option').hasClass('active')) {
        innerLayerCtx.lineWidth = (stroke + 2) * self.scale;
        innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(
          strokeColorImg,
          "repeat"
        );
        if (self.cuts[ i ][ "shape" ] == 2) {
          // self.drawEllipse(innerLayerCtx, item.left, item.top, item.width, item.height);
          self.drawEllipse(
            innerLayerCtx,
            item.left,
            item.top,
            item.width,
            item.height
          );
        } else {
          // innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);
          if(self.matcode === '2364'){
            innerLayerCtx.strokeRect(item.left - 3, item.top - 3, item.width, item.height);
          }
          else{
            innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);
          }
          
        }

        innerLayerCtx.beginPath();
        innerLayerCtx.lineWidth = stroke;

        color = $("#color2_" + self.selectedColor2).attr("data-src");
        var color =
          "https://cdn1.arttoframe.com/products/mats/images/200/" +
          self.bottom_mat +
          ".jpg"; //
        var bottomColorImg = new Image();
        bottomColorImg.src = color;

        if (self.cuts[ i ][ "shape" ] == 2) {
          self.drawEllipse(
            innerLayerCtx,
            item.left,
            item.top,
            item.width,
            item.height
          );
        } else {
          innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(
            bottomColorImg,
            "repeat"
          );
          if(self.matcode === '2364'){
            innerLayerCtx.strokeRect(item.left - 3, item.top - 3, item.width, item.height);
          }
          else{
            innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);
          }
          
        }
      }
    });
  }

  drawEllipse(innerLayerCtx, x, y, w, h) {
    var kappa = 0.5522848;
    var ox = (w / 2) * kappa; // control point offset horizontal
    var oy = (h / 2) * kappa; // control point offset vertical
    var xe = x + w; // x-end
    var ye = y + h; // y-end
    var xm = x + w / 2; // x-middle
    var ym = y + h / 2; // y-middle

    innerLayerCtx.beginPath();
    innerLayerCtx.moveTo(x, ym);
    innerLayerCtx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    innerLayerCtx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    innerLayerCtx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    innerLayerCtx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    innerLayerCtx.stroke();
  }

  public selectedOpeningCollage() {
    var self = this;
    setTimeout(function () {
      if (self.isCollageApplied == true) {
        // console.log(self.isCollageApplied);
      // console.log($('.openingSelector.active').attr('id'))
        self.selectOpening = $(".openingSelector.active")
          .attr("id")
          .split("_")[ 1 ];
        //console.log("+++++++++++++++" + self.selectOpening);
      }
      if (self.wordShapeCollage) {
        document.location.href = window.location.href + '&cf_php=1'
      } else {
        // self.uploadImage();
        self.confirmImagePopup()
      }
    }, 200);
  }
  public CollageChildsShape() {
    $("#show-img-sizepopupCF").modal("hide");
  }
  public loadPreview() {
    var self = this;
    $("#positionPreview").attr("src", '');
    $("#positionPreview").attr(
      "src",
      self.configImageDataUrl[ self.selectOpening ]
    );
    var imgData = new Image();
    imgData.src = self.configImageDataUrl[ self.selectOpening ];

    imgData.onload = function () {
      var framewidthcollage = imgData.width; //self.imgWidth;
      var frameheightcollage = imgData.height; //self.imgHeight;
      var TpreviewHeightMax = $("#preview_container").height() - 50;
      var TpreviewWidthMax = $("#preview_container").width() - 50;
      var scale1 = 1;
      var scale2 = 1;
      var scale3 = 1;
      var scale4 = 1;
      if (framewidthcollage > TpreviewWidthMax) {
        scale1 = TpreviewWidthMax / framewidthcollage;
        framewidthcollage = TpreviewWidthMax;
        frameheightcollage = frameheightcollage * scale1;
      }

      if (frameheightcollage > TpreviewHeightMax) {
        scale2 = TpreviewHeightMax / frameheightcollage;
        frameheightcollage = TpreviewHeightMax;
        framewidthcollage = framewidthcollage * scale2;
      }
      self.newScale = scale1 * scale2 * scale3 * scale4;

      // //console.log(framewidthcollage+"===>"+frameheightcollage+"==="+self.newScale)
      //self.setSelectionOnPreview(framewidthcollage,framewidthcollage,imgData.width,imgData.height);
      self.newWidth = self.newHeight = self.newX = self.newY = 0;
      self.setSelectionOnPreview(imgData.width, imgData.height);
    };
  }
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  public setSelectionOnPreview(imgWT, imgHT) {
    // //console.log("self.configImageDataUrl")
    var self = this;
    // //console.log(self.configImageDataUrl)
    if (self.configImageDataUrl[ self.selectOpening ]) {
      if (self.cuts[ self.selectOpening ][ "cropSelection" ]) {
        // //console.log("cropSelection>> 1 ")
        self.newWidth =
          self.cuts[ self.selectOpening ][ "cropSelection" ].w * self.newScale;
        self.newHeight =
          self.cuts[ self.selectOpening ][ "cropSelection" ].h * self.newScale;
        self.newX =
          self.cuts[ self.selectOpening ][ "cropSelection" ].x * self.newScale;
        self.newY =
          self.cuts[ self.selectOpening ][ "cropSelection" ].y * self.newScale;
        //self.cuts[self.selectOpening]['cropSelection'] = {};
      } else {
        // //console.log("cropSelection>> 2 ")
        //  //console.log("++++setSelectionOnPreview self.cuts[i]['position']");
        // //console.log(self.cuts[self.selectOpening]);
        // //console.log(imgWT + " x " + imgHT);
        // //console.log(self.newScale);

        self.newWidth =
          (self.cuts[ self.selectOpening ][ "w" ] * imgWT) /
          self.cuts[ self.selectOpening ][ "position" ][ 0 ];

        self.newHeight =
          (self.cuts[ self.selectOpening ][ "h" ] * imgHT) /
          self.cuts[ self.selectOpening ][ "position" ][ 1 ];

        self.newX =
          (Math.abs(self.cuts[ self.selectOpening ][ "position" ][ 2 ]) *
            self.newWidth) /
          self.cuts[ self.selectOpening ][ "w" ];

        self.newY =
          (Math.abs(self.cuts[ self.selectOpening ][ "position" ][ 3 ]) *
            self.newHeight) /
          self.cuts[ self.selectOpening ][ "h" ];

        if (self.newWidth + self.newX > imgWT) {
          self.newWidth = imgWT;
          self.newX = 0;
        }
        if (self.newHeight + self.newY > imgHT) {
          self.newHeight = imgHT;
          self.newY = 0;
        }
      }

      var AS_RATIO_PER_SIZE = self.newWidth / self.newHeight;

      $("img#positionPreview").selectAreas("destroy");
      setTimeout(function () {
        // self.imageMinCrop = (self.cropped_width / self.customWidth) * 3;

        $("img#positionPreview").selectAreas({
          // minSize: [self.imageMinCrop, self.imageMinCrop],
          // maxSize: [self.newWidth, self.newHeight],
          allowSelect: false,
          handles: true,
          allowResize: true,
          aspectRatio: AS_RATIO_PER_SIZE,
          allowMove: true,
          maxAreas: 1,
          //onChanged : self.updateZoomValue(),
          //onChanging : this.checkSelectionChange,
          areas: [
            {
              x: self.newX,
              y: self.newY,
              width: self.newWidth,
              height: self.newHeight,
            },
          ],
        });
        // $('img#positionPreview').selectAreas('add', areaOptions);
      }, 1);
      if (self.displayAfterUpload == 1) {
        self.showEditImagePopup();
        self.displayAfterUpload = 0;
      }
    }
  }

  public getAspectRatioSizePosition(wt, ht, ow, oh, i) {
    var self = this;
    var tempPPI = wt / ow;
    var psizes = {
      w: wt,
      h: ht,
    };

    var shapeSizes = {
      w: tempPPI * ow,
      h: tempPPI * oh,
    };

    var ratio = psizes[ "w" ] / shapeSizes[ "w" ];
    var tpWt = psizes[ "w" ] * ratio;
    var tpHt = psizes[ "h" ] * ratio;

    if (tpHt < shapeSizes[ "h" ]) {
      ratio = shapeSizes[ "h" ] / tpHt;
      tpWt *= ratio;
      tpHt *= ratio;
    }
    var tpX = (tpWt - shapeSizes[ "w" ]) / 2;
    var tpY = (tpHt - shapeSizes[ "h" ]) / 2;

    self.cuts[ i ][ "position" ] = [
      tpWt / tempPPI,
      tpHt / tempPPI,
      tpX / tempPPI,
      tpY / tempPPI,
    ];
  }

  public WriteToFile(log) {
    // var self = this;
    // //console.log(this.randomUserId)
    // self.getDataService.addLog(log, self.randomUserId)
    //   .subscribe(
    //     res => {
    //       //console.log(res);
    //     }
    //   );
  }

  public carouselBannerLoad(evt: any) {
    let self = this;
    this.carouselBannerItems = [
      self.Helper.cdn1 + "/images/upload_20.png",
      self.Helper.cdn1 + "/images/upload_20.png",
      self.Helper.cdn1 + "/images/upload_20.png",
      self.Helper.cdn1 + "/images/upload_20.png",
      ,
      self.Helper.cdn1 + "/images/upload_20.png",
      self.Helper.cdn1 + "/images/upload_20.png",
    ];

    const len = this.carouselBannerItems.length;
    if (len <= 3) {
      for (let i = len; i < len + 4; i++) {
        this.carouselBannerItems.push(i);
      }
    }
  }

  /**
   * showEditImagePopup
   */
  public showEditImagePopup() {
    if ($("#positionPreview").attr("src") != '') {
      $("#imageCropModal").modal("show");
      $(".modal-backdrop.in").css("display", "none");
      setTimeout(() => {
        $(".select-areas-resize-handler").show();
        $(".select-areas-resize-handler").css("opacity", "1");
        $(".select-areas-resize-handler").css("border-radius", "10px");
        $(".select-areas-resize-handler").css("z-index", "120");
        $(".select-areas-resize-handler").css("background-color", "white");
        $(".select-areas-resize-handler").css("border", "4px #DCDCDC solid");
      }, 200);
    }
  }

  public cropOnclick() {
    var self = this;
    $("img#positionPreview").selectAreas("destroy");
    var img = new Image();
    img.src = $("#positionPreview").attr("src");

    img.onload = function () {
      var width_image = img.width;
      var height_image = img.height;
      var AS_RATIO_PER_SIZE = 0;
      var x_image = 0;
      var y_image = 0;
      if (self.instaFrame || !self.printImage) {

        AS_RATIO_PER_SIZE = self.customWidth / self.customHeight;

        var tempPPI = width_image / self.customWidth;
        var psizes = {
          w: width_image,
          h: height_image,
        };

        var shapeSizes = {
          w: tempPPI * self.customWidth,
          h: tempPPI * self.customHeight,
        };

        var ratio = psizes[ "w" ] / shapeSizes[ "w" ];
        width_image = psizes[ "w" ] * ratio;
        height_image = psizes[ "h" ] * ratio;

        if (height_image < shapeSizes[ "h" ]) {
          ratio = shapeSizes[ "h" ] / height_image;
          width_image *= ratio;
          height_image *= ratio;
        }

        width_image = (self.customWidth * img.width) / (width_image / tempPPI)
        height_image = (self.customHeight * img.height) / (height_image / tempPPI)

        // x_image = (Math.abs((width_image - shapeSizes["w"]) / 2) / tempPPI) * width_image / self.customWidth;
        // y_image = (Math.abs((height_image - shapeSizes["h"]) / 2) / tempPPI) * height_image / self.customWidth;
        x_image = (img.width - width_image) / 2
        y_image = (img.height - height_image) / 2

        if ((width_image + x_image) > img.width) {
          width_image = img.width;
          x_image = 0;
        }
        if ((height_image + y_image) > img.height) {
          height_image = img.height;
          y_image = 0;
        }
        // console.log('self.instaFrame', width_image, height_image, x_image, y_image)

      }

      if (self.isCollageApplied == true) {
        AS_RATIO_PER_SIZE = self.newWidth / self.newHeight;

        $("img#positionPreview").selectAreas({
          maxSize: [ width_image, height_image ],
          allowSelect: false,
          handles: true,
          allowResize: true,
          aspectRatio: AS_RATIO_PER_SIZE,
          allowMove: true,
          maxAreas: 1,
          areas: [
            {
              x: self.newX,
              y: self.newY,
              width: self.newWidth,
              height: self.newHeight,
            },
          ],
        });
      } else {
        self.pixelPerinch = width_image / self.customWidth;
        if (!self.fromRounting) {
          self.showEditImagePopup();
        } else {
          self.cropped_width = width_image;
          self.cropped_height = height_image;
          self.confirmData();
        }
        $("img#positionPreview").selectAreas({
          maxSize: [ width_image, height_image ],
          aspectRatio: AS_RATIO_PER_SIZE,
          allowSelect: false,
          handles: true,
          allowResize: true,
          allowMove: true,
          maxAreas: 1,
          areas: [
            {
              x: x_image,
              y: y_image,
              width: width_image,
              height: height_image,
            },
          ],
        });
      }
    };
    setTimeout(() => {
      $(".select-areas-resize-handler").show();
      $(".select-areas-resize-handler").css("opacity", "1");
      $(".select-areas-resize-handler").css("border-radius", "10px");
      $(".select-areas-resize-handler").css("z-index", "120");
      $(".select-areas-resize-handler").css("background-color", "white");
      $(".select-areas-resize-handler").css("border", "4px #DCDCDC solid");
    }, 300);
  }

  public upload(event) {
    var self = this;
    var file = event.target.files[ 0 ];

    if (file.type.indexOf("image") == -1) {
      this.cropOnclick();
      return false;
    } else {
      this.imgUpload = 1;
      this.loader = true;
      this.onimageload = this.isUploadInProgress = 1;
      $(".Btm_ATC_btn_progress").show();

      if (this.instaFrame) {
        this.productSwitch(80);
      } else {
        if (this.printImage) this.productSwitch(57, 16);
        else if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) this.productSwitch(79);
        else if (this.isCollageApplied) this.productSwitch(78);
        else this.productSwitch(38);
      }

      var reader = new FileReader();
      $(".loaderImg").show();
      reader.onload = function (e) {
        // $('.Btm_ATC_btn,.discontinuedFrame_class').hide()
        // $('.Btm_ATC_btn_progress').show()
        self.DataUrl = reader.result; //DATAURL HERE
        self.drawImageTempScalePreviewSRC(self.DataUrl);
        self.loader = false;
      };
      reader.readAsDataURL(file);

      const randomId = Math.random().toString(36).substring(2) + ".jpg";
      const dirr = $("#dir_id").val();

      if (self.isCollageApplied == true) {
        // //console.log(randomId)
        self.collage_Opening_Image_Array[ self.selectOpening ] = randomId;
      }
      // //console.log(self.collage_Opening_Image_Array)
      //this.ref = this.afStorage.ref('/userUploads/'+randomId);
      this.ref = this.afStorage.ref("/useruploads/" + dirr + "/" + randomId);
      // this.ref = this.afStorage.ref('/useruploads/3339924/' + randomId)
      this.task = this.ref.put(event.target.files[ 0 ]);
      this.uploadProgress = this.task.percentageChanges();
      this.task.snapshotChanges().subscribe(s => {console.log('==>',s.state)});
      // console.log(this.uploadState)
      this.task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.mainImageUrl = '';
            // let tempMainImageUrl = this.ref.getDownloadURL();
            this.ref.getDownloadURL().subscribe((url) => {
              this.Helper.trackUploadedImage(
                dirr,
                window.location.href,
                self.isCollageApplied
              ).subscribe((res) => {
                // console.log("trackUploadedImage==>", res);
                this.mat_orders_id = res;
              });
              this.mainImageUrl = url;
              setTimeout(() => {
                this.isUploadInProgress = 0;
              }, 500);
              // $('.Btm_ATC_btn_progress').hide()
              // if (self.discontinuedFrame) {
              //   $('.discontinuedFrame_class').show()
              // } else {
              //   $('.Btm_ATC_btn').show()
              // }
              // //console.log("this.downloadURL=====================")
              // //console.log(self.mainImageUrl)
              if (self.isCollageApplied == true) {
                // //console.log(self.selectOpening)

                setTimeout(() => {
                  var temp_imgId = url.split("%2F")[ 2 ].split("?")[ 0 ];
                  $.each(
                    self.collage_Opening_Image_Array,
                    function (index, txt) {
                      if (
                        self.collage_Opening_Image_Array[ index ] == temp_imgId
                      ) {
                        self.cuts[ index ][ "image" ] = url;
                        self.collageImageArray[ index ] = url;
                        self.imageDataForLog(1);
                        self.getDataService.addimgLog(index, btoa(url)).subscribe((res) => {
                          //console.log(res);
                        });
                      }
                    }
                  );
                  // self.cuts[self.selectOpening]['image'] = url;
                  // //console.log("self.cuts")
                  // //console.log(self.cuts)
                  // //console.log("collage_Opening_Image_Array")
                  // //console.log(self.collage_Opening_Image_Array)
                }, 300);
              } else {
                // //console.log("==================")
                self.getDataService.addimgLog(0, btoa(url)).subscribe((res) => {
                  //console.log(res);
                });
              }

              $(".loaderImg").hide();
            });
            this.task.snapshotChanges().subscribe(s => {console.log('==>',s.state)});

          })
        )
        .subscribe();
    }
  }

  public closePopup() {
    $("#infomodal").hide();
    $("#progressModal").hide();
    $(".modal-backdrop").css("display", "none");
  }

  public showFrameInfo() {
    console.log(this.frameNote)
    $("#infoPopup").modal("toggle");
    setTimeout(() => {
      $("#infoPopup").modal("hide");
    }, 5000);
  }

  public addZeroes(num) {
    var num1 = Number(num);
    // //console.log(num)
    if (
      String(num1).split(".").length < 2 ||
      String(num1).split(".")[ 1 ].length == undefined ||
      String(num1).split(".")[ 1 ].length == null
    ) {
      var num1_str = num1 + '';
      return num1_str;
    } else if (
      String(num1).split(".").length < 2 ||
      String(num1).split(".")[ 1 ].length > 2
    ) {
      var num1_str = String(num1.toFixed(2));
      if (String(num1_str).split(".")[ 1 ] == "00") {
        num1_str = String(num1_str).split(".")[ 0 ];
      }
      return num1_str;
    }
    // Return the number
    return num1;
  }

  public aspectRatioSizeCalcultionW() {
    // console.log("++++++++++++++++++++++++++++++++++++++  aspectRatioSizeCalcultionW",this.keepRatio)

    var uploadedImg = $("#positionPreview").attr("src");
    if (
      (uploadedImg != '' && this.keepRatio == 1) ||
      this.cropFlagOpening == 2 ||
      this.onimageload == 1
    ) {
      // //console.log("++++++++++++++++++++++++++++++++++++++  aspectRatioSizeCalcultionW")

      var opWt = $("#customWidth").val();
      var opHt = $("#customHeight").val();

      this.Helper.aspectRatioSizeCalcultionW(
        opWt,
        opHt,
        this.customWidth,
        this.customHeight
      );
    }
  }

  public aspectRatioSizeCalcultionH() {
    // console.log("++++++++++++++++++++++++++++++++++++++  aspectRatioSizeCalcultionH", this.keepRatio)
    var uploadedImg = $("#positionPreview").attr("src");
    if (
      (uploadedImg != '' && this.keepRatio == 1) ||
      this.cropFlagOpening == 2 ||
      this.onimageload == 1
    ) {
      var opWt = $("#customWidth").val();
      var opHt = $("#customHeight").val();

      this.Helper.aspectRatioSizeCalcultionH(
        opWt,
        opHt,
        this.customWidth,
        this.customHeight
      );
    }
  }

  // For select input text on focus
  public customFocus(focus) {
    if (focus == "h") {
      setTimeout(() => {
        if (navigator.platform == "iOS") {
          $("#customHeight").setSelectionRange(0, 9999);
        } else {
          $("#customHeight").select();
        }
      }, 100);
    } else if (focus == "w") {
      setTimeout(() => {
        if (navigator.platform == "iOS") {
          $("#customWidth").setSelectionRange(0, 9999);
        } else {
          $("#customWidth").select();
        }
      }, 100);
    }
  }

  // For block after 6 digit in input box
  public limitToDecimal(e) {
    var num = ('' + e.target.value).length;
    if (num >= 6) {
      // //console.log("restrict num=="+num)
      return false;
    }
  }

  //  For page Reload
  public reload() {
    let reload_url : any = 'https://www.arttoframe.com/custom_framing.php?intro=false';

    if(this.isDeploma){
    reload_url = 'https://www.arttoframe.com';
    var currentColor: any = '';
    var currentColor2: any = '';
    var currentColor3: any = '';
    var currentMatId = '';
    var currentFrameId = this.frameCode;
    var bottomMatColor: any = '';
    var trippleMatColor: any = '';

    var openingSize = this.customWidth + "x" + this.customHeight; // size
    var frameName: any = "-" + this.activeFrameName.replace(/ /g, "-"); // frame name

    var productTitle = "-picture-frame/";
    var noOfOpenings = this.openingsizes + "-opening-";
    // if (self.productCode != 38) {
    if ($("#nomats").parent().find("input:checkbox").is(":checked") == false) {
      if(this.isMatOnlyProduct){
        currentMatId = "custom-dm-" + openingSize;
      }
      else{
        currentMatId = "custom-dm-" + openingSize + "/";
      }
      

      if (
        $("#topmats").parent().find("input:checkbox").is(":checked") == true
      ) {
        currentColor = this.TopMatTitle;
      }
      if (
        $("#bottommats").parent().find("input:checkbox").is(":checked") == true
      ) {
        currentColor2 = this.BottomMatTitle;
      } else {
        if(this.isMatOnlyProduct){
          
          currentMatId = "custom-sm-" + openingSize;
        }
        else{
          currentMatId = "custom-sm-" + openingSize + "/";
        } 
      }

      if (
        $("#tripplemats").parent().find("input:checkbox").is(":checked") == true
      ) {
        currentColor3 = this.TrippleMatTitle;
        if(this.isMatOnlyProduct){
          
          currentMatId = "custom-tm-" + openingSize;
        }
        else{
          currentMatId = "custom-tm-" + openingSize + "/";
        } 
      }


      if(this.isMatTrippleSelected === 1){
        bottomMatColor = currentColor2
        ? "-and-" + currentColor2.replace(" ", "-") : "-mat/";
      }
      else{
        bottomMatColor = currentColor2
        ? "-and-" + currentColor2.replace(" ", "-") + "-mat/"
        : "-mat/";
      }
      
        trippleMatColor = currentColor3
        ? "-and-" + currentColor3.replace(" ", "-") + "-mat/"
        : '';
      productTitle = "-collage-picture-frame-" + noOfOpenings;
    }
    if (this.isCollageApplied == true) {
      currentColor = this.TopMatTitle;
      noOfOpenings = this.openingsizes + "-opening-";
      currentMatId = this.matcode + "/";
    }
    var UpdatedRoute;

      // var paperId = this.paperId != null ? '&paperId=' + this.paperId : '';
      var instaFrame = this.instaFrame ? '&instaFrame=1' : '';
      var backing_type = this.backing_type != null ? '&backing_type=' + this.backing_type : '';
      var oversizedItem = this.oversizedItem ? '&oversize=1' : '';
      var slideImage : any = this.defaultParamObj.slideImage != undefined || this.defaultParamObj.slideImage != null ? '&slideImage=' + this.defaultParamObj.slideImage : 1;

      if (this.defaultParamObj.slideImage != null || this.defaultParamObj.slideImage != undefined) {
        
        if (this.defaultParamObj.slideImage == '' || Number(this.defaultParamObj.slideImage) == 1 || Number(this.defaultParamObj.slideImage) > 12) {
          $(".ngxcarouselPoint li").removeClass("active");
          $(".ngxcarouselPoint li:first-child").addClass("active").click();
        } else {
          $(".ngxcarouselPoint li").removeClass("active");
          $(".ngxcarouselPoint li:nth-child(" + this.defaultParamObj.slideImage + ")").addClass("active").click();
        }

      }
      
     
      UpdatedRoute = openingSize + frameName + productTitle + currentColor.replace(" ", "-") + bottomMatColor + trippleMatColor + currentMatId + currentFrameId;

      let designerMat, vgroove
      if(this.singlePopupMatImg){
        designerMat = "&decorativemat=" + this.singlePopupMatImg
      }
      else{
        designerMat = '';
      }
      if(this.selectedVgroove){
        vgroove = "&vgroove="+ this.selectedVgroove
      }
      else{
        vgroove = '';
      }
      reload_url += "/" + UpdatedRoute + "?page_type=M" + slideImage + instaFrame + backing_type + "&diploma=1" + oversizedItem;
    }
    else if(this.isMatOnlyProduct){
    reload_url = 'https://www.arttoframe.com';
    var currentColor: any = '';
    var currentColor2: any = '';
    var currentColor3: any = '';
    var currentMatId = '';
    var bottomMatColor: any = '';
    var trippleMatColor: any = '';

    // console.log(this.customWidth + "x" + this.customHeight)
    var openingSize = this.customWidth + "x" + this.customHeight; // size

    var productTitle = "-picture-frame/";
    var noOfOpenings = this.openingsizes + "-opening-";
    // console.log('UpdateUrlll')
    // if (self.productCode != 38) {
    if ($("#nomats").parent().find("input:checkbox").is(":checked") == false) {
      if(this.isMatOnlyProduct){
        currentMatId = "custom-dm-" + openingSize;
      }
      else{
        currentMatId = "custom-dm-" + openingSize + "/";
      }
      

      if (
        $("#topmats").parent().find("input:checkbox").is(":checked") == true
      ) {
        
        currentColor = this.TopMatTitle;
      }
      if (
        $("#bottommats").parent().find("input:checkbox").is(":checked") == true
      ) {
        currentColor2 = this.BottomMatTitle;
      } else {
        if(this.isMatOnlyProduct){
          currentMatId = "custom-sm-" + openingSize;
        }
        else{
          currentMatId = "custom-sm-" + openingSize + "/";
        }
        
      }

      if (
        $("#tripplemats").parent().find("input:checkbox").is(":checked") == true
      ) {
        currentColor3 = this.TrippleMatTitle;
        if(this.isMatOnlyProduct){
          
          currentMatId = "custom-tm-" + openingSize;
        }
        else{
          currentMatId = "custom-tm-" + openingSize + "/";
        } 
      }

      if(this.isMatTrippleSelected === 1){
        bottomMatColor = currentColor2
        ? "-and-" + currentColor2.replace(" ", "-") : "-mat/";
      }
      else{
        bottomMatColor = currentColor2
        ? "-and-" + currentColor2.replace(" ", "-") + "-mat/"
        : "-mat/";
      }
      
        trippleMatColor = currentColor3
        ? "-and-" + currentColor3.replace(" ", "-") + "-mat/"
        : '';
      productTitle = "-collage-picture-frame-" + noOfOpenings;
    }
    var UpdatedRoute;
    // var paperId = this.paperId != null ? '&paperId=' + this.paperId : '';
      var instaFrame = this.instaFrame ? '&instaFrame=1' : '';
      var backing_type = this.backing_type != null ? '&backing_type=' + this.backing_type : '';
      var oversizedItem = this.oversizedItem ? '&oversize=1' : '';
      var slideImage : any = this.defaultParamObj.slideImage != undefined || this.defaultParamObj.slideImage != null ? '&slideImage=' + this.defaultParamObj.slideImage : 1;

      let designerMat, vgroove
      if(this.singlePopupMatImg){
        designerMat = "&decorativemat=" + this.singlePopupMatImg
      }
      else{
        designerMat = '';
      }
      if(this.selectedVgroove){
        vgroove = "&vgroove="+ this.selectedVgroove
      }
      else{
        vgroove = '';
      }
      let topmatcode, bottomatcode, tripplematcode
     // topmatcode = this.topMatId;
      topmatcode = this.topMatCode
      /*
      bottomatcode = currentColor2
      ? "/" + this.bottomMatId + "/"
      : "/";
*/
      bottomatcode = currentColor2
      ? "/" + this.bottomMatCode + "/"
      : "/";
      tripplematcode = this.isMatTrippleSelected === 1 ? this.tripple_mat + "/" : '';
      UpdatedRoute = openingSize + "-" + currentColor.replace(" ", "-") + bottomMatColor + trippleMatColor + topmatcode + bottomatcode + tripplematcode + currentMatId + "?pos_top=" + this.pos_top + "&pos_bottom=" + this.pos_bottom + "&pos_left="+ this.pos_left + "&pos_right=" + this.pos_right + designerMat + vgroove;
			reload_url += "/" + UpdatedRoute + slideImage + instaFrame + backing_type + oversizedItem + "&page_type=M&diploma=1";
    }
    else{
      let mat_options = '';
				let frame_options = '&frameCode='+this.frameCode;
				let vgrove_available = this.selectedVgroove;
				if (typeof (this.matcode) !== 'undefined' && (this.matcode != '' && this.matcode != 'custom')) {
					frame_options += '&cutId='+this.matcode;
				} else {
					frame_options += '&cutId=custom-dm-'+this.customWidth+'x'+this.customHeight+'&current_width='+this.customWidth+'&current_height='+this.customHeight;
				}
        if (
          $("#bottommats").parent().find("input:checkbox").is(":checked") == false
        ) {
          this.bottom_mat = ''
        }
        if (
          this.isMatTrippleSelected == 0
        ) {
          this.tripple_mat = '';
        }
        if (
          $("#topmats").parent().find("input:checkbox").is(":checked") == false
        ) {
          this.top_mat = ''
        }
        console.log(this.bottom_mat)
				let mat_one_code = this.top_mat;
				let mat_two_code = this.bottom_mat;
        // let mat_three_code = this.bottom_mat;
				// let mat_three_code = $(".trippleMatContainer").find('#color3').find(".topMatV4").find(".clsMatActive").attr('id');
				
        if ($("#nomats").parent().find("input:checkbox").is(":checked") == true) {
					mat_options = '&'
				} else if ($("#topmats").parent().find("input:checkbox").is(":checked") == true) {
					mat_options = '&item_type=single_sm';
					if (typeof (mat_one_code) !== "undefined") {
						mat_options += '&topMatId='+mat_one_code.replace("color1_", '');
						// mat_options += '&bottomMatId='+mat_one_code.replace("color1_", '');
            if (mat_two_code) {
              mat_options += '&bottomMatId='+mat_two_code;
            }
					}
				} else if ($("#bottommats").parent().find("input:checkbox").is(":checked") == true) {
					mat_options = '&item_type=collage_sm';
					if (typeof (mat_one_code) !== "undefined") {
						mat_options += '&topMatId='+mat_one_code.replace("color1_", '');
					}
					if (typeof (mat_two_code) !== "undefined") {
						mat_options += '&bottomMatId='+mat_two_code.replace("color2_", '');
					}
				// } else if ($(".mat_triple_popup").find('.label_radio_bg').hasClass('active') !== false) {
				// 	if (typeof (mat_one_code) !== "undefined") {
				// 		mat_options += '&topMatId='+mat_one_code.replace("color1_", '');
				// 	}
				// 	if (typeof (mat_two_code) !== "undefined") {
				// 		mat_options += '&bottomMatId='+mat_two_code.replace("color2_", '');
				// 	}
				// 	if (typeof (mat_three_code) !== "undefined") {
				// 		mat_options += '&thirdMatId='+mat_three_code.replace("color3_", '');
				// 	}
				} else {
					mat_options = '&';
				}
				if (mat_options != '&') {
					if (vgrove_available) {
						let selectedVgrove = this.selectedVgroove;
						mat_options += '&vgroove='+selectedVgrove;
					}
					if (this.singlePopupMatImg) {
						mat_options += '&decorativemat='+this.singlePopupMatImg;
					}
				}
				reload_url += frame_options+mat_options+'&hardwareId='+this.hardwareID+'&glassId='+this.selectedGlassVal;
    }
		console.log(reload_url)
    reload_url = localStorage.getItem('reloadUrl')
    window.location = reload_url;
				//location.reload();
    // location.reload();
    this.btnHide();
  }
  //  For get opening sizes from cutcode of collage
  public getOpeningSize(e) {
    if (this.imgUpload == 0 && $("#positionPreview").attr("src") == '') {
      this.collageOpeningsInfo = this.Helper.getOpeningSize(
        e.openingsCutCode,
        "Frame with Mat"
      );
    } else {
      this.collageOpeningsInfo = this.Helper.getOpeningSize(
        e.openingsCutCode,
        "Custom Frame"
      );
    }
  }

  public setCollageImages(array) {
    var self = this;
    console.log("arrat  =<  ", array)
    setTimeout(() => {
      var slider_width = $(".bxsliderCollage").width();
      var start_with = 0;
      var end_with = Math.ceil(parseInt(slider_width) / 104);
      $(".bxsliderCollage").scrollLeft(0);

      for (var i = start_with; i < end_with; i++) {
        var imagePath =
        self.Helper.cdn1 + "/images/collage/" +
          array[ i ].id +
          "/" +
          self.top_mat +
          "/" +
          self.bottom_mat +
          "/13.png";

        $(
          ".selectOpening #mat_" +
          array[ i ].id +
          "_" +
          array[ i ].mat_number +
          " img"
        ).css("background", "url(" + imagePath + ")center center no-repeat");

        $(
          ".selectOpening #mat_" +
          array[ i ].id +
          "_" +
          array[ i ].mat_number +
          " img"
        ).css(
          {"background-size": "90% 90%"},
          {"background-position": "center"}
        );
      }
      start_with = end_with;
      $(".bxsliderCollage").scroll(function () {
        var scroll1 = $(".bxsliderCollage").scrollLeft();
        end_with = Math.ceil(parseInt(scroll1) / 104) + 3;

        for (var i = start_with; i < end_with; i++) {
          // var check = ($(".selectOpening #mat_" + array[i].id + "_" + array[i].mat_number + " img").css("background")).indexOf("url")

          // if (check <= 0) {

          var imagePath =
          self.Helper.cdn1 + "/images/collage/" +
            array[ i ].id +
            "/" +
            self.top_mat +
            "/" +
            self.bottom_mat +
            "/13.png";

          $(
            ".selectOpening #mat_" +
            array[ i ].id +
            "_" +
            array[ i ].mat_number +
            " img"
          ).css("background", "url(" + imagePath + ")center center no-repeat");

          $(
            ".selectOpening #mat_" +
            array[ i ].id +
            "_" +
            array[ i ].mat_number +
            " img"
          ).css(
            {"background-size": "90% 90%"},
            {"background-position": "center"}
          );

          // }
        }
        start_with = end_with;
      });
    }, 300);
  }

  public setCollageChildImages(array) {
    var self = this;
    console.log(array)
    setTimeout(() => {
      $.each(array, function (index, data) {
        var imagePath =
        self.Helper.cdn1 + "/images/collage/" +
          array[ index ].id +
          "/" +
          self.top_mat +
          "/" +
          self.bottom_mat +
          "/13.png";

        $(
          ".selectChildMat #mat_" +
          array[ index ].id +
          "_" +
          array[ index ].mat_number +
          " img"
        ).css("background", "url(" + imagePath + ")center center no-repeat");

        $(
          ".selectChildMat #mat_" +
          array[ index ].id +
          "_" +
          array[ index ].mat_number +
          " img"
        ).css(
          {"background-size": "95% 90%"},
          {"background-position": "center"}
        );
      });
    }, 200);
  }

  public collageImagePosForATC(selectedCut, areas) {
    var self = this;
    var stroke = 0;

    if (areas.length > 0) {
      var areaWidth = areas[ 0 ].width + 2 * stroke;
      var areaHeight = areas[ 0 ].height + 2 * stroke;
      var areaX = areas[ 0 ].x - stroke;
      var areaY = areas[ 0 ].y - stroke;
      var cropped_width = areaWidth / this.newScale;
      var cropped_height = areaHeight / this.newScale;
      var cropped_x = areaX / this.newScale;
      var cropped_y = areaY / this.newScale;
      var img_tmp_height = $("#positionPreview").height();
      var img_tmp_width = $("#positionPreview").width();
      var ImgMaxSize = 1000;
      var scaleDownRatio = 1;
      var image = new Image();
      image.src = $("#positionPreview").attr("src");
      var openingWidth = self.cuts[ selectedCut ][ "w" ]; //OPENING_WIDTH_IMG;
      var openingHeight = self.cuts[ selectedCut ][ "h" ]; //OPENING_HEIGHT_IMG;
      if (image.naturalWidth >= image.naturalHeight) {
        scaleDownRatio = ImgMaxSize / image.naturalWidth;
      } else {
        scaleDownRatio = ImgMaxSize / image.naturalHeight;
      }
      var isFixedHeight = 0;
      img_tmp_height = img_tmp_height / this.newScale;
      img_tmp_width = img_tmp_width / this.newScale;
      var pixelPerInch = img_tmp_width / openingWidth;

      if (image.naturalHeight < image.naturalHeight * pixelPerInch) {
        pixelPerInch = img_tmp_height / openingHeight;
        isFixedHeight = 1;
      }
      var zoom = 1;
      if (isFixedHeight) {
        zoom = img_tmp_height / (cropped_height / scaleDownRatio);
      } else {
        zoom = img_tmp_width / (cropped_width / scaleDownRatio);
      }
      cropped_y = cropped_y;
      cropped_x = cropped_x;
      var imgCropTop = ((cropped_y / pixelPerInch) * zoom) / scaleDownRatio;
      var imgCropLeft = ((cropped_x / pixelPerInch) * zoom) / scaleDownRatio;
      var imgCropWidth =
        ((parseFloat(img_tmp_width) / pixelPerInch) * zoom) / scaleDownRatio;
      var imgCropHeight =
        ((parseFloat(img_tmp_height) / pixelPerInch) * zoom) / scaleDownRatio;
      self.collageCropPositionArray[ self.selectOpening ] = {
        x: imgCropTop,
        y: imgCropLeft,
        w: imgCropWidth,
        h: imgCropHeight,
      };

    }
  }

  public getPOD(pid) {
    $(".loaderImg").show();
    $(".loaderImg p").hide();
    var self = this;
    self.pod_image_id = pid;
    this.onimageload = 1;
    let formData = new FormData();
    formData.append("pid", '' + pid + '');
    formData.append("action", "get_pod_image");
    let mySecretUrl = "https://www.arttoframe.com/pod/api/v1/get_pod_image.php";
    this.http
      .post(mySecretUrl, formData, {observe: "response"})
      .subscribe((res) => {
        self.mainImageUrl = res.body[ 0 ].data.image_url;
        localStorage.setItem("ImageLocal", JSON.stringify(self.mainImageUrl));
        var podImg = new Image();
        podImg.crossOrigin = "Anonymous";
        self.artistName = res.body[ 0 ].data.artist;
        podImg.src = res.body[ 0 ].data.image_url as string;
        podImg.onload = () => {
          $(".loaderImg").hide();
          let tempPod = self.tempCanvas.nativeElement;
          let tempctx = tempPod.getContext("2d");

          tempPod.width = podImg.width;
          tempPod.height = podImg.height;
          tempctx.drawImage(podImg, 0, 0, podImg.width, podImg.height);
          self.DataUrl = tempPod.toDataURL();
          self.podFlag = 1;
          self.drawImageTempScalePreviewSRC(self.DataUrl);
          console.log("Arrangee ===>  11 ")
          self.arrange();
          self.isUploadInProgress = 0;
        };
      });
  }

  public tooltiptextMat() {
    $(".tooltiptextMat").show();
    setTimeout(() => {
      $(".tooltiptextMat").hide();
    }, 3000);
  }

  public lockAspectRatio() {
    var uploadedImg = $("#positionPreview").attr("src");
    if (uploadedImg != '') {
      if (this.keepRatio == 0) {
        this.keepRatio = 1;
        $("#aspectRatio img").attr(
          "src",
          "https://cdn1.arttoframe.com/images/aspectR_ng.png"
        );
      } else {
        this.keepRatio = 0;
        $("#aspectRatio img").attr(
          "src",
          "https://cdn1.arttoframe.com/images/aspectR_active_ng.png"
        );
      }
    }
  }
  public imageDataForLog(flag) {
    var self = this;
    const myheader = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    let imgData = new HttpParams();
    if (flag == 1) {
      if (this.isCollageApplied == true) {
        console.log(self.collageImageArray)
        console.log(self.collageCropPositionArray)
        $.each(self.collageImageArray, function (index, txt) {
          imgData = imgData.append(
            "cfcut_" + index + "[0]",
            btoa(self.collageImageArray[ index ])
          );
          if (self.collageCropPositionArray != null && self.collageCropPositionArray[ index ]) {
            var ppiRatio =
              self.collageCropPositionArray[ index ][ "w" ] / self.cuts[ index ][ "w" ];
            var imgCropTop =
              self.collageCropPositionArray[ index ][ "y" ] / ppiRatio;
            var imgCropLeft =
              self.collageCropPositionArray[ index ][ "x" ] / ppiRatio;
            var imgCropWidth = self.cuts[ index ][ "size" ][ 0 ] / ppiRatio;
            var imgCropHeight = self.cuts[ index ][ "size" ][ 1 ] / ppiRatio;

            imgData = imgData.append(
              "cfcut_" + index + "[position][0]",
              String(imgCropWidth)
            );
            imgData = imgData.append(
              "cfcut_" + index + "[position][1]",
              String(imgCropHeight)
            );
            imgData = imgData.append(
              "cfcut_" + index + "[position][2]",
              String("-" + imgCropLeft)
            );
            imgData = imgData.append(
              "cfcut_" + index + "[position][3]",
              String("-" + imgCropTop)
            );
          } else {
            imgData = imgData.append(
              "cfcut_" + index + "[position][0]",
              self.cuts[ index ][ "position" ][ 0 ]
            );
            imgData = imgData.append(
              "cfcut_" + index + "[position][1]",
              self.cuts[ index ][ "position" ][ 1 ]
            );
            imgData = imgData.append(
              "cfcut_" + index + "[position][2]",
              self.cuts[ index ][ "position" ][ 2 ]
            );
            imgData = imgData.append(
              "cfcut_" + index + "[position][3]",
              self.cuts[ index ][ "position" ][ 3 ]
            );
          }
          imgData = imgData.append("cfcut_filter_" + index, '');
          imgData = imgData.append(
            "cfcut_rotate_" + index,
            self.cuts[ index ][ "rotate" ]
          );
          imgData = imgData.append("cfcut_zoom_" + index, "1");
        });
      } else {
        imgData = imgData.append("cut_val", "0");
        imgData = imgData.append("cfcut_0[0]", btoa(self.mainImageUrl));
        imgData = imgData.append(
          "cfcut_0[position][0]",
          String(this.imgPosition[ 0 ])
        );
        imgData = imgData.append(
          "cfcut_0[position][1]",
          String(this.imgPosition[ 1 ])
        );
        imgData = imgData.append(
          "cfcut_0[position][2]",
          String(this.imgPosition[ 2 ])
        );
        imgData = imgData.append(
          "cfcut_0[position][3]",
          String(this.imgPosition[ 3 ])
        );
        imgData = imgData.append("cfcut_zoom_0", String(this.imgPosition[ 4 ]));
        imgData = imgData.append("cfcut_filter_0", '');
        imgData = imgData.append("cfcut_rotate_0", $("#myrotate").val());
      }
    } else {
      imgData = imgData.append("cfcut_0", '');
    }
    self.http
      .post(
        "https://www.arttoframe.com/custom_framing_ng/assets/Image_path.php",
        imgData,
        {
          headers: myheader,
        }
      )
      .subscribe((res: any) => {
      });
  }
  productSwitch(productCode, check = null) {
    this.productCode = productCode;
    console.log("this.productCode  =>  ", this.productCode)
    this.reviewPage = this.reviewLoadButton = 1;
    if(this.isMatOnlyProduct){
      this.productCode = 69
    }
    if(this.isDeploma){
      this.productCode = 82
    }
    if(this.productCode == 82){
      var prodNameSize =
        "Diploma Frame " + this.customWidth + "x" + this.customHeight;
        $(".product-name").html(prodNameSize);
    }
    else if (this.productCode == 38 && !this.isMatOnlyProduct) {
      var prodNameSize =
        "Standard Frame " + this.customWidth + "x" + this.customHeight;
      $(".product-name").html(prodNameSize);
    } else if ((this.productCode == 79 || this.productCode == 78) && !this.isMatOnlyProduct) {
      prodNameSize =
        "Frame with Mat " + this.customWidth + "x" + this.customHeight;
      $(".product-name").html(prodNameSize);
    } else if (this.productCode == 57) {
      $(".decor-section").css("display", 'block')
      prodNameSize =
        "Custom Frame " + this.customWidth + "x" + this.customHeight;
      $(".product-name").html(prodNameSize);
    } else if (this.productCode == 80) {
      prodNameSize =
        "Instagram Frames " + this.customWidth + "x" + this.customHeight;
      $(".product-name").html(prodNameSize);
    } else if (this.productCode == 92) {
      prodNameSize =
        "Floating Frames " + this.customWidth + "x" + this.customHeight;
      $(".product-name").html(prodNameSize);
    } else if(this.isMatOnlyProduct){
      prodNameSize = "Mat Only " + this.customWidth + "x" + this.customHeight;
      $(".product-name").html(prodNameSize);
    }
  }

  UpdateUrl() {
    var self = this;
    var currentColor: any = '';
    var currentColor2: any = '';
    var currentColor3: any = '';
    var currentMatId = '';
    var currentFrameId = self.frameCode;
    var bottomMatColor: any = '';
    var trippleMatColor: any = '';
    var openingSize = self.customWidth + "x" + self.customHeight; // size
    // console.log(self.activeFrameName)
    var frameName: any = "-" + self.activeFrameName.replace(/ /g, "-"); // frame name
    var productTitle = "-picture-frame/";
    var noOfOpenings = self.openingsizes + "-opening-";
    if (self.productCode != 38) {
      if(self.isMatOnlyProduct){
        currentMatId = "custom-dm-" + openingSize;
      }
      else{
        currentMatId = "custom-dm-" + openingSize + "/";
      }
      if (
        $("#topmats").parent().find("input:checkbox").is(":checked") == true
      ) {
        currentColor = self.TopMatTitle;
      }
      if (
        $("#bottommats").parent().find("input:checkbox").is(":checked") == true
      ) {
        currentColor2 = self.BottomMatTitle;
        console.log("self.BottomMatTitle => ", self.BottomMatTitle)
      } else {
        if(self.isMatOnlyProduct){
          currentMatId = "custom-sm-" + openingSize;
        }
        else{
          currentMatId = "custom-sm-" + openingSize + "/";
        } 
      }
      if (
        $("#tripplemats").parent().find("input:checkbox").is(":checked") == true
      ) {
        currentColor3 = self.TrippleMatTitle;
        if(self.isMatOnlyProduct){
          currentMatId = "custom-tm-" + openingSize;
        }
        else{
          currentMatId = "custom-tm-" + openingSize + "/";
        } 
      }
      if(self.isMatTrippleSelected === 1){
        bottomMatColor = currentColor2
        ? "-and-" + currentColor2.replace(" ", "-") : "-mat/";
      }
      else{
        bottomMatColor = currentColor2
        ? "-and-" + currentColor2.replace(" ", "-") + "-mat/"
        : "-mat/";
      }
        trippleMatColor = currentColor3
        ? "-and-" + currentColor3.replace(" ", "-") + "-mat/"
        : '';   
        productTitle = "-collage-picture-frame-" + noOfOpenings;
    }
    // console.log("-collage-picture-frame-5-opening-Super-White-and-Black-mat/61-89/563/0066-78238-YWHT?page_type=M&slideImage=1")
    // console.log("-picture-frame/Super-White61/563/0066-78238-YWHT?page_type=M&slideImage=1")
    // console.log(frameName)
    if (self.isCollageApplied == true) {
      currentColor = self.TopMatTitle;
      // Added below code because aaron facing redirect issue for collage
      if(self.isMatTrippleSelected === 1){
        bottomMatColor = self.BottomMatTitle
        ? "-and-" + self.BottomMatTitle.replace(" ", "-") : "-mat/";
      }
      else{
        bottomMatColor = self.BottomMatTitle
        ? "-and-" + self.BottomMatTitle.replace(" ", "-") + "-mat/"
        : "-mat/";
      }
      noOfOpenings = self.openingsizes + "-opening-";
      currentMatId = self.matcode + "/";
      productTitle = "-collage-picture-frame-" + noOfOpenings;
    }
    var UpdatedRoute;
    setTimeout(() => {
      var paperId = this.paperId != null ? '&paperId=' + this.paperId : '';
      var instaFrame = this.instaFrame ? '&instaFrame=1' : '';
      var backing_type = this.backing_type != null ? '&backing_type=' + this.backing_type : '';
      var oversizedItem = this.oversizedItem ? '&oversize=1' : '';
      var slideImage : any = this.defaultParamObj.slideImage != undefined || this.defaultParamObj.slideImage != null ? '&slideImage=' + this.defaultParamObj.slideImage : "1";
      if (this.defaultParamObj.slideImage != null || this.defaultParamObj.slideImage != undefined) {
        if (this.defaultParamObj.slideImage == '' || Number(this.defaultParamObj.slideImage) == 1 || Number(this.defaultParamObj.slideImage) > 12) {
          $(".ngxcarouselPoint li").removeClass("active");
          $(".ngxcarouselPoint li:first-child").addClass("active").click();
        } else {
          $(".ngxcarouselPoint li").removeClass("active");
          $(".ngxcarouselPoint li:nth-child(" + this.defaultParamObj.slideImage + ")").addClass("active").click();
        }
      }
      let topmatcode, bottomatcode, tripplematcode;
      topmatcode = this.top_mat;   
if(slideImage == 1){
  slideImage = "&slideImage=1";
}
if(this.productCode == "38"){
  topmatcode = '';
}
      if(topmatcode){
        bottomatcode = self.BottomMatTitle ? "-" + this.bottom_mat : "/";
      }
      else{
        bottomatcode = self.BottomMatTitle ? "-" + this.bottom_mat : '';
      }
      if(self.BottomMatTitle){
        tripplematcode = self.isMatTrippleSelected === 1 ? "-" + this.tripple_mat + "/" : "/";
      }
      else{
        tripplematcode = self.isMatTrippleSelected === 1 ? "-" + this.tripple_mat + "/" : '';
      }
      if(this.isFloating){
        topmatcode = topmatcode + "/";
        oversizedItem = "";
        UpdatedRoute = 'floating-'+ openingSize + frameName + productTitle + currentColor.replace(" ", "-") + bottomMatColor + topmatcode + currentMatId + currentFrameId;
        console.log(UpdatedRoute);
      }
      else if(this.isDeploma && !this.isPhotoOpening && !this.isTusselOpening){
        UpdatedRoute = 'diploma-frames-'+ openingSize + frameName + productTitle + currentColor.replace(" ", "-") + bottomMatColor + trippleMatColor + topmatcode + bottomatcode + tripplematcode + currentMatId + currentFrameId;
      }
      else{
        UpdatedRoute = openingSize + frameName + productTitle + currentColor.replace(" ", "-") + bottomMatColor + trippleMatColor + topmatcode + bottomatcode + tripplematcode + currentMatId + currentFrameId;
      }
      // console.log("UpdatedRoute line no 10605 => ", UpdatedRoute)
      let designerMat, vgroove
      if(this.singlePopupMatImg){
        designerMat = "&decorativemat=" + this.singlePopupMatImg
      }
      else{
        designerMat = '';
      }
      if(this.selectedVgroove){
        vgroove = "&vgroove="+ this.selectedVgroove
      }
      else{
        vgroove = '';
      }  
      
      // console.log("currentColor => ", currentColor)
      // console.log("bottomMatColor => ", bottomMatColor)
      // console.log("bottomMatColor => ", trippleMatColor)
    if(!this.isWordCutOut){
      if(this.isMatOnlyProduct){
        UpdatedRoute = openingSize + "-" + currentColor.replace(" ", "-") + bottomMatColor + trippleMatColor + topmatcode + bottomatcode + tripplematcode + currentMatId + "?pos_top=" + this.pos_top + "&pos_bottom=" + this.pos_bottom + "&pos_left="+ this.pos_left + "&pos_right=" + this.pos_right + designerMat + vgroove;
        history.pushState(null, null, "/" + UpdatedRoute + slideImage + paperId + instaFrame + backing_type + oversizedItem + "&page_type=M");
      }
      if (!this.isMatOnlyProduct) {
        
        history.pushState(null, null, "/" + UpdatedRoute + "?page_type=M" + slideImage + paperId + instaFrame + backing_type + oversizedItem);
      }
    }
      if(this.isMatOnlyProduct){
        this.title.setTitle(openingSize + " " + "Mat Only");
      }
      else if (this.productCode == 78) {
        var collageTitle
        if ($('#meta_seo_title_new').val() != undefined && $('#meta_seo_title_new').val() != '') {
          collageTitle = $('#meta_seo_title_new').val() + " Collage Frame with " + (this.collageOpeningsInfo).replaceAll('(', ' ').replaceAll(')', ' -') + " openings " + (frameName).replaceAll("-", " ") + " collage picture frame ( " + this.collage_finish_size + " Finished Size ) Top Mat " + currentColor.replaceAll("-", " ");
        } else {
          collageTitle = (this.collageOpeningsInfo).replaceAll('(', ' ').replaceAll(')', ' -') + " openings" + (frameName.replaceAll("-", " ")) + " collage picture frame ( " + this.collage_finish_size + " Finished Size ) Top Mat " + currentColor.replaceAll("-", " ");
        }
        $("meta[name='keywords']").attr('content', collageTitle + ", holes.Frame, Mat, and Glass options fully customizable, contemporary style, smooth finish");
        this.title.setTitle(collageTitle);
      } else {
        var finishedwidth = 14;
        var finishedHeight = 16;
        if ($("#nomats").parent().find("input:checkbox").is(":checked") == true) {
          finishedwidth =
            parseFloat(this.customWidth) +
            parseFloat($("#frame_" + this.frameCode).attr("data-width")) * 2;
          finishedHeight =
          parseFloat(this.customHeight) +
          parseFloat($("#frame_" + this.frameCode).attr("data-width")) * 2;
          $(".finishedsizedetail span").text(finishedwidth + "x" + finishedHeight);
        } else {
            finishedwidth = parseFloat(
              this.customWidth +
              $("#frame_" + this.frameCode).attr("data-width") * 2 +
              this.totalMatWidth
            ) - 0.5;
            finishedHeight = parseFloat(
              this.customHeight +
              $("#frame_" + this.frameCode).attr("data-width") * 2 +
              this.totalMatHeight
            ) - 0.5;
          
          if ($("#frame_" + this.frameCode).attr("data-width") == undefined) {
            $(".finishedsizedetail span").text("14x16");
          } else {
            $(".finishedsizedetail span").text(
              finishedwidth + "x" + finishedHeight
            );
          }
        }        
        if(this.isDeploma){
          let diplomatitle
          if(!this.isPhotoOpening && !this.isTusselOpening){
            diplomatitle = openingSize + ' Inch' + frameName.replace(/-/g, " ").split("/")[ 0 ];
          }
          if(this.isPhotoOpening || this.isTusselOpening){
            let splitSize = this.openingSizesForTitle.split(":")
            diplomatitle = '1 - ' + splitSize[0] + ', ' + splitSize[1] + ' openings ' + frameName.replace(/-/g, " ").split("/")[ 0 ];
          }
          if(this.isPhotoOpening && this.isTusselOpening){
            let splitSize = this.openingSizesForTitle.split(":")
            diplomatitle = '1 - ' + splitSize[0] + ', ' + splitSize[1] + ', ' + splitSize[2] + ' openings ' + frameName.replace(/-/g, " ").split("/")[ 0 ];
          }
          this.title.setTitle(diplomatitle + ' diploma frames - ( ' + $(".finishedsizedetail span").html() + ' Finished Size ) - Top Mat ' + currentColor.replace("-", " ") + ' and Bottom Mat ' + currentColor2.replace("-", " "));
        }
        else{
          this.title.setTitle(UpdatedRoute.replace(/-/g, " ").split("/")[ 0 ]);
        }
      }
      if(!this.isWordCutOut){
      gtag("config", "UA-41611333-1", {
        page_path: "/" + UpdatedRoute + "?page_type=M",
      });
    }
      this.defaultParamObj.slideImage = "1";
      this.UpdateCarouselImages2();
    }, 50);
  }

  UpdateCarouselImages2() {
    var self = this;
    var data = self.framesImageArry;
    $.each(data, function (index, value) {
      if (self.productCode != 38) {
        if (index == "corner_angle_image") {
          self.corner_angle_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.corner_angle_img = data[ index ];
          }
        } else if (index == "corner_image") {
          self.corner_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.corner_img = data[ index ];
          }
        } else if (index == "corner_profile_image") {
          self.corner_profile_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.corner_profile_img = data[ index ];
          }
        } else if (index == "lifestyle_head_on") {
          self.lifestyle_head_on_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_head_on_img =
            self.Helper.cdn2 + "/products/frame/lifestyle_head_on/" +
              self.frameCode +
              "/500/" +
              self.top_mat +
              ".jpg?v=91";
          }
        } else if (index == "lifestyle_inside_corner") {
          self.lifestyle_inside_corner_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_inside_corner_img =
            self.Helper.cdn2 + "/products/frame/lifestyle_inside_corner/" +
              self.frameCode +
              "/500/" +
              self.top_mat +
              ".jpg?v=91";
          }
        } else if (index == "lifestyle_lifestyle_original") {
          self.lifestyle_lifestyle_original_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_lifestyle_original_img =
            self.Helper.cdn2 + "/products/frame/lifestyle_lifestyle_original/" +
              self.frameCode +
              "/500/" +
              self.top_mat +
              ".jpg?v=91";
          }
        } else if (index == "lifestyle_outside_corner") {
          self.lifestyle_outside_corner_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_outside_corner_img =
            self.Helper.cdn2 + "/products/frame/lifestyle_outside_corner/" +
              self.frameCode +
              "/500/" +
              self.top_mat +
              ".jpg?v=91";
          }
        } else if (index == "lifestyle_square") {
          self.lifestyle_square_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_square_img = data[ index ];
          }
        } else if (index == "lifestyle_with_hand") {
          self.lifestyle_with_hand_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_with_hand_img =
            self.Helper.cdn2 + "/products/frame/lifestyle_with_hand/" +
              self.frameCode +
              "/500/" +
              self.top_mat +
              ".jpg?v=91";
          }
        } else if (index == "main_image") {
          self.main_image_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.main_image_img =
            self.Helper.cdn2 + "/products/collage/custom-dm-" +
              self.customWidth +
              "x" +
              self.customHeight +
              "/" +
              self.top_mat +
              "/" +
              self.bottom_mat +
              "/" +
              self.frameCode +
              "/20.jpg?v=91";
          }
        }
      } else {
        if (index == "corner_angle_image") {
          self.corner_angle_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.corner_angle_img = data[ index ];
          }
        } else if (index == "corner_image") {
          self.corner_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.corner_img = data[ index ];
          }
        } else if (index == "corner_profile_image") {
          self.corner_profile_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.corner_profile_img = data[ index ];
          }
        } else if (index == "lifestyle_head_on") {
          self.lifestyle_head_on_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_head_on_img = data[ index ];
          }
        } else if (index == "lifestyle_inside_corner") {
          self.lifestyle_inside_corner_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_inside_corner_img = data[ index ];
          }
        } else if (index == "lifestyle_lifestyle_original") {
          self.lifestyle_lifestyle_original_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_lifestyle_original_img = data[ index ];
          }
        } else if (index == "lifestyle_outside_corner") {
          self.lifestyle_outside_corner_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_outside_corner_img = data[ index ];
          }
        } else if (index == "lifestyle_square") {
          self.lifestyle_square_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_square_img = data[ index ];
          }
        } else if (index == "lifestyle_with_hand") {
          self.lifestyle_with_hand_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.lifestyle_with_hand_img = data[ index ];
          }
        } else if (index == "main_image") {
          self.main_image_img = null;
          if (data[ index ] != null || data[ index ] != '') {
            self.main_image_img =
            self.Helper.cdn2 + "/products/wom/" +
              self.frameCode +
              "/" +
              self.customWidth +
              "x" +
              self.customHeight +
              "/20.png?v=47?v=91";
          }
        }
      }
    });
  }

  public sizeCalculation(wt, ht, old_W, old_H) {
    var tempWT = wt;
    var tempHT = ht;
    var new_tempW = 0;
    var new_tempH = 0;
    old_W = parseFloat(old_W);
    old_H = parseFloat(old_H);
    var lock_old_tempW = wt;
    var lock_old_tempH = ht;
    var minSize = old_H < old_W ? old_H : old_W;
    if (old_W > old_H) {
      if (wt > ht) {
        ht = minSize;
        wt = (old_H * wt) / ht;
      } else {
        wt = minSize;
        ht = (old_H * ht) / lock_old_tempW;
      }
    } else {
      if (wt > ht) {
        ht = minSize;
        wt = (wt * old_W) / lock_old_tempH;
      } else {
        wt = minSize;
        ht = (minSize * ht) / lock_old_tempW;
      }
    }
    this.customWidth = wt = parseFloat(wt.toFixed(2));
    this.customHeight = ht = parseFloat(ht.toFixed(2));
    var mintmpFrameMaxWidth = 8;
    var mintmpFrameMaxHeight = 8;
    if (
      this.customWidth < mintmpFrameMaxWidth ||
      this.customHeight < mintmpFrameMaxHeight
    ) {
      if (
        this.customHeight < mintmpFrameMaxWidth ||
        this.customWidth < mintmpFrameMaxHeight
      ) {
        if (ht < 8) {
          ht = 8;
          wt = (tempWT * ht) / tempHT;
          if (wt < 8) {
            new_tempW = wt;
            wt = 8;
            ht = (wt * ht) / new_tempW;
          }
        }
        tempWT = wt;
        tempHT = ht;
        if (wt < 8) {
          wt = 8;
          ht = (wt * tempHT) / tempWT;
          if (ht < 8) {
            ht = 8;
            wt = (tempHT * wt) / ht;
          }
        }
        this.customWidth = wt = parseFloat(wt);
        this.customHeight = ht = parseFloat(ht);
      }
    }
  }

  ImageinUrl(img) {
    var self = this;
    if (self.instaFrame) {
      img = atob(img)
    }
    self.loader = true;
    self.isUploadInProgress = 1;
    var urlImg = new Image();
    urlImg.crossOrigin = "Anonymous";
    urlImg.src = img;
    urlImg.onload = () => {
      if (self.instaFrame) self.productSwitch(80);
      else self.productSwitch(57, 16);
      self.fromRounting = true;
      let tempPod = self.tempCanvas.nativeElement;
      let tempctx = tempPod.getContext("2d");
      tempPod.width = urlImg.width;
      tempPod.height = urlImg.height;
      tempctx.drawImage(urlImg, 0, 0, urlImg.width, urlImg.height);
      self.DataUrl = tempPod.toDataURL();
      self.drawImageTempScalePreviewSRC(self.DataUrl);
      self.mainImageUrl = img.replace("1000/", '');
      self.isUploadInProgress = 0;
      // self.arrange();
    };
  }
  //-----------------------------------------

  showReviewFun() {
    $("#RatingModal").modal("toggle");
  }

  navigateToSearchPage() {
    var back_url =
      "https://www.arttoframe.com/search/picture-frames-with-mats/" +
      this.customWidth +
      "x" +
      this.customHeight;

    if (this.productCode == 38) {
      back_url =
        "https://www.arttoframe.com/" +
        this.customWidth +
        "x" +
        this.customHeight +
        "_picture_frames";
    }
    if (this.isCollageApplied == true) {
      back_url = "https://www.arttoframe.com/collage-frames";
    }
    let prevUrl = localStorage.getItem('previousUrl')
    if(prevUrl){
      back_url = prevUrl;
    }
    localStorage.removeItem('previousUrl')
    window.location.href = back_url;
  }

  public getUserReview() {
    var self = this;
    var type = "collage_dm";
    if (this.productCode == 38) {
      type = "no_mat";
    } else {
      if (this.isMatBottomSelected == 0 || this.isMatTopSelected == 0) {
        type = "collage_sm";
      }
    }
    let data = {
      frameCode: this.frameCode,
      item_type: type,
    };
    this.Helper.getUserReview(data).subscribe((resReviews) => {
      this.endOfReviews = false;
      if (resReviews.data.reviews.response.reviews_list.length != 0) {
        this.totalReviews = resReviews.data.reviews.avgstarcount;
        this.reviewList = [];
        $.map(
          resReviews.data.reviews.response.reviews_list,
          function (data, i) {
            if (data.about_header != "None") {
              data.about_header = data[ "about_header" ]
                .replace(/&#39;/gi, "'")
                .replace(/â€™/gi, "'")
                .replace(/&#34;/gi, '"')
                .replace(/â€œ/gi, '"')
                .replace(/â€/gi, '"')
                .replaceAll("\\r", " ")
                .replaceAll("\\n", " ")
                .replaceAll("\\", " ");
              data.about_text = data[ "about_text" ]
                .replace(/&#39;/gi, "'")
                .replace(/â€™/gi, "'")
                .replace(/&#34;/gi, '"')
                .replace(/â€œ/gi, '"')
                .replace(/â€/gi, '"')
                .replaceAll("\\r", " ")
                .replaceAll("\\n", " ")
                .replaceAll("\\", " ");
              self.reviewList.push(data);
            }
          }
        );
        this.basedOnTotalReviews =
          resReviews.data.reviews.response.total_reviews;
      } else {
        this.totalReviews = null;
      }
    });
  }

  public getUserReviewsWithPaging() {
    var self = this;
    if (!this.endOfReviews) {
      this.reviewLoadButton = 2;
      self.reviewPage += 1;
      var type = "collage_dm";
      if (this.productCode == 38) {
        type = "no_mat";
      } else {
        if (this.isMatBottomSelected == 0 || this.isMatTopSelected == 0) {
          type = "collage_sm";
        }
      }
      let data = {
        frameCode: this.frameCode,
        item_type: type,
        page_no: self.reviewPage,
      };
      this.Helper.getUserReviewsWithPaging(data).subscribe((resReviewspage) => {
        if (resReviewspage.data != null) {
          if (self.reviewPage > 1) {
            $.map(resReviewspage.data, function (data, i) {
              data.about_header = data[ "about_header" ]
                .replace(/&#39;/gi, "'")
                .replace(/â€™/gi, "'")
                .replace(/&#34;/gi, '"')
                .replace(/â€œ/gi, '"')
                .replace(/â€/gi, '"')
                .replaceAll("\\r", " ")
                .replaceAll("\\n", " ")
                .replaceAll("\\", " ");
              data.about_text = data[ "about_text" ]
                .replace(/&#39;/gi, "'")
                .replace(/â€™/gi, "'")
                .replace(/&#34;/gi, '"')
                .replace(/â€œ/gi, '"')
                .replace(/â€/gi, '"')
                .replaceAll("\\r", " ")
                .replaceAll("\\n", " ")
                .replaceAll("\\", " ");
              self.reviewList.push(data);
            });
          } else {
            this.reviewList.push(resReviewspage.data);
          }
          this.reviewLoadButton = 1;
        } else {
          this.endOfReviews = true;
          this.reviewLoadButton = 3;
        }
      });
    }
  }

  public confirmData(size = null) {
    var self = this;
    if (size != null) {
      self.curruntSize = size;
      self.customWidth = size.split("x")[ 0 ];
      self.customHeight = size.split("x")[ 1 ];
    } else {
      if (this.instaFrame) {
        self.customWidth = self.customHeight = 5;
      } else {
        self.customWidth = self.defaultParamObj.frame_size.split("x")[ 0 ];
        self.customHeight = self.defaultParamObj.frame_size.split("x")[ 1 ];
      }
    }
    $("#customWidth").val(self.customWidth);
    $("#customHeight").val(self.customHeight);
    self.cropFlagOpening = self.imgUpload = 1;
    console.log("Arrangee ===>  13")
    self.arrange();
  }

  drawWordOnCanvas(imgR, i, imgLeft, imgTop, imgWidth, imgHeight) {
    var img = new Image;
    var self = this
    const rndInt = Math.floor(Math.random() * 500) + 1
    img.src = self.Helper.cdn4 + "/collage-opening-image/51/51/" + i + "/v-" + rndInt + ".jpg";
    img.crossOrigin = "*";
    img.onload = () => {
      var Tcanvas = document.createElement("canvas");
      var Tctx = Tcanvas.getContext("2d");
      Tcanvas.width = img.width;
      Tcanvas.height = img.height;
      var shapeImg = new Image();
      shapeImg.crossOrigin = "*";
      if (window.location.origin == "http://localhost:4200") {
        shapeImg.src = "http://localhost:4200/assets/16.png";
      } else {
        shapeImg.src = "https://www.arttoframe.com/product_images/lib/" + self.cuts[ i ][ 'shape' ] + ".png";
      }
      shapeImg.onload = function () {
        var Tcanvas2 = document.createElement("canvas");
        var Tctx2 = Tcanvas2.getContext("2d");
        Tcanvas2.width = img.width;
        Tcanvas2.height = img.height;
        Tctx2.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, Tcanvas2.height);
        Tctx2.globalCompositeOperation = "destination-out";
        Tctx2.drawImage(shapeImg, 0, 0, shapeImg.width, shapeImg.height, 0, 0, img.width, Tcanvas2.height);
        Tctx.globalCompositeOperation = "source-out";
        Tctx.drawImage(Tcanvas2, 0, 0, imgWidth, imgHeight);
        var finalImg = new Image();
        finalImg.crossOrigin = "*";
        finalImg.src = Tcanvas.toDataURL();
        finalImg.onload = function () {
          self.imageLayerCtx.drawImage(finalImg, imgLeft, imgTop, imgWidth, imgHeight, self.canvasSecondMatScaleCollage[ i ][ 'left' ], self.canvasSecondMatScaleCollage[ i ][ 'top' ], self.canvasSecondMatScaleCollage[ i ][ 'width' ], self.canvasSecondMatScaleCollage[ i ][ 'height' ])
        }
      }
    }
  }

  trackByFn(index:number){
    return (index);
  }

  confirmImagePopup(fromCart = false) {
    this.fromCartImgConfirmation = fromCart;
    console.log(fromCart)
    if (fromCart) {
      if (fromCart && this.imgUpload && !this.instaFrame && !this.isMatOnlyProduct) {
        $('#cart_popup').modal("show");
      } else {
        this.addToCart()
      }
        var tempframecanvas : any = document.getElementById("framecanvas");
				var frameWidth = tempframecanvas.width / 3;
				var frameHeight = tempframecanvas.height / 3;
				var previewWidth = 244;
				var previewHeight = 223;
				var scale1 = 1;
				var scale2 = 1;
				if (frameWidth > previewWidth) {
					scale1 = previewWidth / frameWidth;
					frameWidth = previewWidth;
					frameHeight = frameHeight * scale1;
				}
				if (frameHeight > previewHeight) {
					scale2 = previewHeight / frameHeight;
					frameHeight = previewHeight;
					frameWidth = frameWidth * scale2;
				}
				var scale : any = scale1 * scale2;
        var bottomLayerCanvas = this.innerlayerCanvas.nativeElement;
				var imageLayerCanvas = this.imagelayercanvas.nativeElement;
				var popupLayerCanvas = this.popupmatcanvas.nativeElement;
				var grooveLayerCanvas = this.groovecanvas.nativeElement;
        this.getDataService.getPaperTypes().subscribe((responce)=>{
          this.paperTypes = responce;
          setTimeout(() => {
            this.paperTypes.forEach((element, index) => {
              console.log(document.getElementById('#printImgFrameCanvas_' + index));
              if(element.id != "24"){
              var printImgFrameCanvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#printImgFrameCanvas_' + index);
              let printImgFrameCtx = printImgFrameCanvas.getContext("2d");
              printImgFrameCanvas.width = (tempframecanvas.width / 3) * scale;
              printImgFrameCanvas.height = (tempframecanvas.height / 3) * scale;
              printImgFrameCtx.drawImage(tempframecanvas, 0, 0, printImgFrameCanvas.width, printImgFrameCanvas.height);
              var printImgMatCanvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#printImgBottomCanvas_' + index);
              let printImgMatCtx = printImgMatCanvas.getContext("2d");
              printImgMatCanvas.width = (bottomLayerCanvas.width / 3) * scale;
              printImgMatCanvas.height = (bottomLayerCanvas.height / 3) * scale;
              printImgMatCtx.drawImage(bottomLayerCanvas, 0, 0, printImgMatCanvas.width, printImgMatCanvas.height);
              var stroke = 0.25 * this.ppi * this.scale;
              var left = (this.selectedMatWidth * this.ppi + this.activeFrameWidth * this.ppi) * this.scale -
                1.85 * stroke + 5;
              var top = (this.selectedMatWidth * this.ppi + this.activeFrameWidth * this.ppi) * this.scale -
                1.9 * stroke + 5;
              var bottomMatTopinner = (top / 3) * scale;
              var bottomMatLeftinner = (left / 3) * scale;
              if (this.isCollageApplied){
                var bottomMatTopinner = (top / 7);
                var bottomMatLeftinner = (left / 7);
              }
              printImgFrameCtx.drawImage(printImgMatCanvas, bottomMatTopinner, bottomMatLeftinner);
               
              var frameWithNoPrintImgCanvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#frameWithNoPrintImgCanvas');
              let imageLayerxyCtx = frameWithNoPrintImgCanvas.getContext("2d");
              frameWithNoPrintImgCanvas.width = (imageLayerCanvas.width / 3) * scale;
              frameWithNoPrintImgCanvas.height = (imageLayerCanvas.height / 3) * scale;
              var img : any = document.getElementById("whiteImage");
              imageLayerxyCtx.drawImage(img, 0, 0, frameWithNoPrintImgCanvas.width, frameWithNoPrintImgCanvas.height);

              var frameWithNoImg = <HTMLCanvasElement>this.el.nativeElement.querySelector('#frameWithNoPrintCanvas');
              let frameWithNoImgCtx = frameWithNoImg.getContext('2d');
              frameWithNoImg.width = printImgFrameCanvas.width;
              frameWithNoImg.height = printImgFrameCanvas.height;
              frameWithNoImgCtx.drawImage(printImgFrameCanvas, 0, 0, frameWithNoImg.width, frameWithNoImg.height);


              var printImgCanvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#printImgImageCanvas_' + index);
              let printImgCtx = printImgCanvas.getContext("2d");
              printImgCanvas.width = (imageLayerCanvas.width / 3) * scale;
              printImgCanvas.height = (imageLayerCanvas.height / 3) * scale;
              printImgCtx.drawImage(imageLayerCanvas, 0, 0, printImgCanvas.width, printImgCanvas.height);

              var bottomMatTop = (top / 3) * scale;
              var bottomMatLeft = (left / 3) * scale;
              frameWithNoImgCtx.drawImage(frameWithNoPrintImgCanvas, bottomMatTop + 1.2, bottomMatLeft + 1.2);
              var printpopUpCanvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#printpopupmatCanvas_' + index);
              let printpopUpCtx = printpopUpCanvas.getContext("2d");
              printpopUpCtx.clearRect(0, 0, printpopUpCanvas.width, printpopUpCanvas.height);
              printpopUpCanvas.width = (popupLayerCanvas.width / 3) * scale;
              printpopUpCanvas.height = (popupLayerCanvas.height / 3) * scale;
              printpopUpCtx.drawImage(popupLayerCanvas, 0, 0, printpopUpCanvas.width, printpopUpCanvas.height);
    
              var printGrooveCanvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#printGrooveCanvas_' + index);
              let printGrooveCtx = printGrooveCanvas.getContext("2d");
              printGrooveCtx.clearRect(0, 0, printGrooveCanvas.width, printGrooveCanvas.height);
              printGrooveCanvas.width = (grooveLayerCanvas.width / 3) * scale;
              printGrooveCanvas.height = (grooveLayerCanvas.height / 3) * scale;
              
              if (printGrooveCanvas.width > 0 && printGrooveCanvas.height > 0 ) {
                printGrooveCtx.drawImage(grooveLayerCanvas, 0, 0, printGrooveCanvas.width, printGrooveCanvas.height);
              }

              var bottomMatTop = (top / 3) * scale;
              var bottomMatLeft = (left / 3) * scale;
              if ($("#nomats").parent().find("input:checkbox").is(":checked") == true || this.isCollageApplied){
                var bottomMatTop = (top / 8);
                var bottomMatLeft = (left / 8);
              }
              printImgFrameCtx.drawImage(printImgCanvas, bottomMatTop + 1.2, bottomMatLeft + 1.2);

              var linerWidthPopup = 0;
              var popUpTop = ((this.frameWidth + linerWidthPopup) / 3) * scale;
              var popUpLeft = ((this.frameWidth + linerWidthPopup) / 3) * scale;
              printImgFrameCtx.drawImage(printpopUpCanvas, popUpTop, popUpLeft);
              frameWithNoImgCtx.drawImage(printpopUpCanvas, popUpTop, popUpLeft);

              let vgroovDT = '';
              if (
                $("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") ==
                true
              ) {
                vgroovDT = "1";
              }
              
              if (vgroovDT === '1') {
                var matDist = 0;
                matDist = 0.05;
                if (
                  $("#topmats").parent().find("input:checkbox").is(":checked") == true
                ) {
                  matDist = 0.125;
                }
                if (
                  $("#bottommats").parent().find("input:checkbox").is(":checked") == true
                ) {
                  matDist = 0.25;
                }
            // }
            var vgroovshapecodes = $("#vgroov_" + this.selectedVgroove).attr(
              "vgroovCode"
            );
            this.vgroovConfigArr = this.getVgroovDesign(
              vgroovshapecodes,
              parseFloat(this.customWidth) + matDist,
              parseFloat(this.customHeight) + matDist
            );

            var cutWidthX = this.selectedMatWidth;
            var cutWidthY = this.selectedMatWidth;

            var frameWidth =
              parseFloat(this.frameWidth) /
              parseFloat(this.ppi) /
              parseFloat(this.scale);

            var vgroovStartX =
              (frameWidth +
                cutWidthX -
                this.vgroovConfigArr.dt / parseFloat(this.ppi) -
                matDist / 2) *
              parseFloat(this.ppi) *
              this.scale - 13;
            var vgroovStartY =
              (frameWidth +
                cutWidthY -
                this.vgroovConfigArr.dt / parseFloat(this.ppi) -
                matDist / 2) *
              parseFloat(this.ppi) *
              this.scale - 13;
                printImgFrameCtx.drawImage(printGrooveCanvas, (((vgroovStartX) / 3) * scale), (((vgroovStartY) / 3) * scale));
                frameWithNoImgCtx.drawImage(printGrooveCanvas, (((vgroovStartX) / 3) * scale), (((vgroovStartY) / 3) * scale));
              }
              console.log("vgroovStartX  ", vgroovStartX, "  vgroovStartY", vgroovStartY)
            }
            });
          }, 200); 
        })
    } else {
      this.printImage = true;
      this.uploadImage()
    }
  }

  photoPrint(check: boolean, paperID) {
    this.photoPrintCheck = false;
    $('#cart_popup').modal("hide");
    this.printImage = check;
    this.paperId = paperID;
    var product: number;
    if (check && this.fromCartImgConfirmation){
      product = 57;
      this.isFloating = false;
    } 
    else if ($("#nomats").parent().find("input:checkbox").is(":checked") == true) product = 38;
    else if (this.isCollageApplied == true) product = 78;
    else product = 79;
    this.fromCartImgConfirmation ? (this.productSwitch(product), this.addToCart()) : this.uploadImage();
  }

  advanceMode(){
    this.isAdvancedMode = true;
    if(this.advanceModeMatWidthValue != ''){
      this.updateSlider(this.advanceModeMatWidthValue);
    }
  } 

  closeAdvanceMode(){
    this.isAdvancedMode = false;
    this.showMats('mat')
  }

  photoOpening(event){
    this.isPhotoOpening = event.target.checked; 
    this.priceCallReduceForCollageAtInit = 0
    if(this.isPhotoOpening && !this.isTusselOpening){
      if (this.defaultParamObj.mat_id.indexOf("custom") != -1){
        this.matcode = "4225"
      }
      this.getDataService.getDiplomaSizesFromDB(this.matcode, "&image=1&tassel=0").subscribe((res) => {
        if (res.diploma_sizes) {
          const arr = this.getUniqueListBy(res.diploma_sizes, 'value')
          this.diplomaSizes = arr;
        }
        if(res.image_sizes){
          const arr = this.getUniqueListBy(res.image_sizes, 'value')
          this.imageSizes = arr;
        }
      });
      this.getDataService.getMatDetailsFromDB(this.matcode).subscribe((res) => {
        if (res != null) {
          this.isCollageApplied = true;
          this.productSwitch(78);
          // setTimeout(() => {
          this.selectChildCollageOpening(res);
          // $("#showsizepopu").click();
          $("#sizemodal li:nth-child(1)").removeClass("active");
          $("#sizemodal li:nth-child(2) a").trigger("click");
          this.getCollageDataAngular("default");
          console.log("Price 9")
          this.getPrice()
          // }, 100);
        } else {
          // document.location.href = 'https://www.arttoframe.com/collage-frames';
        }
      });
    }
    else if(this.isTusselOpening && !this.isPhotoOpening){
      if (this.defaultParamObj.mat_id.indexOf("custom") != -1){
        this.matcode = "6083"
      }
      this.getDataService.getDiplomaSizesFromDB(this.matcode, "&tassel=1&image=0").subscribe((res) => {
        if (res.diploma_sizes) {
          const arr = this.getUniqueListBy(res.diploma_sizes, 'value')
          this.diplomaSizes = arr;
        }
        if(res.image_sizes){
          const arr = this.getUniqueListBy(res.image_sizes, 'value')
          this.imageSizes = arr;
        }
      });
      this.getDataService.getMatDetailsFromDB(this.matcode).subscribe((res) => {  
        if (res != null) {
          this.isCollageApplied = true;
          this.productSwitch(78);
          // setTimeout(() => {
          this.selectChildCollageOpening(res);
          // $("#showsizepopu").click();
          $("#sizemodal li:nth-child(1)").removeClass("active");
          $("#sizemodal li:nth-child(2) a").trigger("click");
          console.log(this.CollageOpeningJson)
          console.log("line 11435")
          this.getCollageDataAngular("default");
          // }, 100);
        } else {
          // document.location.href = 'https://www.arttoframe.com/collage-frames';
        }
      });
    }
    else if(!this.isPhotoOpening){
      this.isCollageApplied = false;
      console.log("Arrangee ===>  14")
      this.arrange();
    }
    else if(this.isTusselOpening && this.isPhotoOpening){
      this.commonDiplomaPreview()
    }
  }

  tasselOpening(event){
    this.isTusselOpening = event.target.checked; 
    this.priceCallReduceForCollageAtInit = 0
    if(this.isTusselOpening && !this.isPhotoOpening){
      if (this.defaultParamObj.mat_id.indexOf("custom") != -1){
        this.matcode = "6083"
      }
      this.getDataService.getDiplomaSizesFromDB(this.matcode, "&tassel=1&image=0").subscribe((res) => {
        if (res.diploma_sizes) {
          const arr = this.getUniqueListBy(res.diploma_sizes, 'value')
          this.diplomaSizes = arr;
        }
        if(res.image_sizes){
          const arr = this.getUniqueListBy(res.image_sizes, 'value')
          this.imageSizes = arr;
        }
      });
      this.getDataService.getMatDetailsFromDB(this.matcode).subscribe((res) => {
        if (res != null) {
          this.isCollageApplied = true;
          this.productSwitch(78);
          // setTimeout(() => {
          this.selectChildCollageOpening(res);
          // $("#showsizepopu").click();
          $("#sizemodal li:nth-child(1)").removeClass("active");
          $("#sizemodal li:nth-child(2) a").trigger("click");
          console.log(this.CollageOpeningJson)
          console.log("line 11480")
          this.getCollageDataAngular("default");
          // }, 100);
        } else {
        }
      });
    }
    else if(this.isPhotoOpening && !this.isTusselOpening){
      if (this.defaultParamObj.mat_id.indexOf("custom") != -1){
        this.matcode = "4225"
      }
      this.getDataService.getDiplomaSizesFromDB(this.matcode, "&image=1&tassel=0").subscribe((res) => {
        if (res.diploma_sizes) {
          const arr = this.getUniqueListBy(res.diploma_sizes, 'value')
          this.diplomaSizes = arr;
        }
        if(res.image_sizes){
          const arr = this.getUniqueListBy(res.image_sizes, 'value')
          this.imageSizes = arr;
        }
      });
      this.getDataService.getMatDetailsFromDB(this.matcode).subscribe((res) => {
        if (res != null) {
          this.isCollageApplied = true;
          this.productSwitch(78);
          // setTimeout(() => {
          this.selectChildCollageOpening(res);
          // $("#showsizepopu").click();
          $("#sizemodal li:nth-child(1)").removeClass("active");
          $("#sizemodal li:nth-child(2) a").trigger("click");
          console.log(this.CollageOpeningJson)
          console.log("line 11511")
          this.getCollageDataAngular("default");
          // }, 100);
        } else {
          // document.location.href = 'https://www.arttoframe.com/collage-frames';
        }
      });
    }
    else if(!this.isTusselOpening){
      this.isCollageApplied = false;
      console.log("Arrangee ===>  15")
      this.arrange();
    }
    else if(this.isTusselOpening && this.isPhotoOpening){
      this.commonDiplomaPreview()
    }
  }

  commonDiplomaPreview(){
    if (this.defaultParamObj.mat_id.indexOf("custom") != -1){
      this.matcode = "4212"
    }
    this.getDataService.getDiplomaSizesFromDB(this.matcode, "&image=1&tassel=1").subscribe((res) => {
      if (res.diploma_sizes) {
        const arr = this.getUniqueListBy(res.diploma_sizes, 'value')
        this.diplomaSizes = arr;
      }
      if(res.image_sizes){
        const arr = this.getUniqueListBy(res.image_sizes, 'value')
        this.imageSizes = arr;
      }
    });
    this.getDataService.getMatDetailsFromDB(this.matcode).subscribe((res) => {
      if (res != null) {
        this.isCollageApplied = true;
        this.productSwitch(78);
        // setTimeout(() => {
        this.selectChildCollageOpening(res);
        // $("#showsizepopu").click();
        $("#sizemodal li:nth-child(1)").removeClass("active");
        $("#sizemodal li:nth-child(2) a").trigger("click");
        this.getCollageDataAngular("default");
        // }, 100);
      } else {
        // document.location.href = 'https://www.arttoframe.com/collage-frames';
      }
    });
  }

  onSelectDiplomaSize(event){
    this.matcode = event.target.value;
    this.getDataService.getMatDetailsFromDB(this.matcode).subscribe((res) => {
      if (res != null) {
        this.isCollageApplied = true;
        this.productSwitch(78);
        this.selectChildCollageOpening(res);
        $("#sizemodal li:nth-child(1)").removeClass("active");
        $("#sizemodal li:nth-child(2) a").trigger("click");
        this.getCollageDataAngular("default");
      } else {
      }
    });
  }

  onSelectImageSize(event){
    this.matcode = event.target.value;
    this.getDataService.getMatDetailsFromDB(this.matcode).subscribe((res) => {
      if (res != null) {
        this.isCollageApplied = true;
        this.productSwitch(78);
        this.selectChildCollageOpening(res);
        $("#sizemodal li:nth-child(1)").removeClass("active");
        $("#sizemodal li:nth-child(2) a").trigger("click");
        console.log(this.CollageOpeningJson)
        console.log("line 11585")
        this.getCollageDataAngular("default");
      } else {
        // document.location.href = 'https://www.arttoframe.com/collage-frames';
      }
    });
  }

  getFilterFramesData(){
    let self = this;
    this.getDataService.getFilterFrameData(this.frameFilterID, this.customWidth, this.customHeight, this.activeFrameId).subscribe((res : any) => {
      self.OnloadFrames = res.data;
      self.frameFilter = res.frameColor;
      if(self.framesData.length < 2){
        self.framesData = 260;
      }
      $(".bxsliderCF").scrollLeft(0);
      if(self.OnloadFrames){
        // setTimeout(() => {
        //   this.Helper.validateFrames(Number(this.totalMatWidth), Number(this.totalMatHeight), this.isCollageApplied);
        // }, 50);
      }
      

      $(".myFrame").removeClass("frame_active");
      $("#myFrame_" + this.frameCode).addClass("frame_active");
    });
  }

  getFilterMatsData(){
    let self = this;
    this.getDataService.getFilterMatDataJSON().subscribe((data)=>{
      self.dataMatsArray = [];
    //   // self.dataMatsArray = JSON.parse(localStorage.getItem("mats"));
      self.dataMatsArray = data;

        $(".bxsliderCFMat").scrollLeft(0);
      setTimeout(() => {
        self.Helper.validateMats(
          self.top_mat,
          parseFloat($("#customWidth").val()),
          parseFloat($("#customHeight").val()),
          self.isCollageApplied,
          this.isMatOnlyProduct
        );
      }, 100);

        $(".modal-backdrop.in").css("display", "none");
      $(".frame-hide-btn").css("display", "block");
      $("#frameModal").modal("hide");
      $("#sizemodal").modal("hide");
      $("#decorModal").modal("hide");
      $("#glassModal").modal("hide");
    })
  }


  getFilterGlassData(){
    // var startTime = Date.now();
    // console.log("Before start glass api call , ", startTime)
    let self = this;
    console.log(this.changeGlass)
    if(!this.changeGlass){
      this.getDataService.getFilterGlassDataJSON().subscribe((data)=>{
        self.glassArr = [];
        self.glassArr = data;
        
        if (self.defaultParamObj.glass_type != null) {
          // self.selectedGlassVal = self.defaultParamObj.glass_type;
          self.selectedGlassVal = self.getDefaultGlassID()
          if(self.selectedGlassVal === "23"){
            self.selectedGlassVal = "114";
          }
          console.log("Selected glass 4 => ", this.selectedGlassVal)
          self.changeGlassManually = 1;
          console.log(self.selectedGlassVal)
          let glassName = self.glassArr.filter((data)=> data.glass_id === self.selectedGlassVal)
          console.log(glassName)
          self.urlGlassType = glassName[0].glass_type;
          console.log("this.urlGlassType 3 => ", self.urlGlassType)
          if(self.urlGlassType === '1'){
            $("#glass_only_name").text(glassName[0].name);
          }
          else{
            $("#glass_plexi_name").text(glassName[0].name);
          }
        }
        if (self.defaultParamObj.glassType != null) {
          // self.selectedGlassVal = self.defaultParamObj.glassType;
          self.selectedGlassVal = self.getDefaultGlassID()
          console.log("Selected glass 5 => ", this.selectedGlassVal)
          self.changeGlassManually = 1;
          let glassName = self.glassArr.filter((data)=> data.glass_id === self.selectedGlassVal)
          self.urlGlassType = glassName[0].glass_type;
          console.log("this.urlGlassType 4 => ", this.urlGlassType)
          if(self.urlGlassType === '1'){
            $("#glass_only_name").text(glassName[0].name);
          }
          else{
            $("#glass_plexi_name").text(glassName[0].name);
          }
        }
        self.selectedGlassVal = self.getDefaultGlassID();
        console.log("Selected glass 6 => ", this.selectedGlassVal)
        console.log(self.selectedGlassVal)
      })
    }
    this.changeGlass = false;
  }
}