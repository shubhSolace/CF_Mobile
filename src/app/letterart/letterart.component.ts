
import { Component, OnInit, ViewChild } from '@angular/core';
import { HostListener } from "@angular/core";
import { GetDataService } from '../services/index';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import { NgxCarousel } from 'ngx-carousel';
import { HelperService } from '../services/helper.service'
declare var $, paypal: any;


// import Hardware from '../../assets/hardware.json';
// import VgooveDetails from '../../assets/VgooveDetails.json';
// import MatDetails from '../../assets/MatDetails.json';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-letterart',
  templateUrl: './letterart.component.html',
  styleUrls: ['./letterart.component.css'],
  providers: [GetDataService]
})

export class LetterartComponent implements OnInit {

  rectW: number = 400;
  rectH: number = 400;
  rectColor: string = "#FF00F0";
  ctx: CanvasRenderingContext2D;
  @ViewChild("framecanvas") framecanvas;

  ctxSwatch: CanvasRenderingContext2D;
  @ViewChild("swatchCanvas") swatchCanvas;

  ctxTempCanvas: CanvasRenderingContext2D;
  @ViewChild("tempCanvas") tempCanvas;

  ctxTempCanvasLetter: CanvasRenderingContext2D;
  @ViewChild("tempCanvasLetter") tempCanvasLetter;

  innerLayerCtx: CanvasRenderingContext2D;
  @ViewChild("innerlayerCanvas") innerlayerCanvas;

  imageLayerCtx: CanvasRenderingContext2D;
  @ViewChild("imagelayercanvas") imagelayercanvas;

  popupMatCtx: CanvasRenderingContext2D;
  @ViewChild("popupmatcanvas") popupmatcanvas;

  vGrooveCtx: CanvasRenderingContext2D;
  @ViewChild("groovecanvas") groovecanvas;

  @HostListener('window:resize', ['$event'])

  public carouselBannerItems: Array<any>;
  public carouselBanner: NgxCarousel;

  public showtab: boolean = false;
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
  matFilter: any;
  hardwareID: any;
  frameFilter: any = [];
  frameFilterID: any;
  frameSortID: any;
  matFilterID: any;
  customWidth: any;
  customHeight: any;
  activeTab: any;
  image = this.Helper.cdn6 + "/products/frames/SwatchSmall/RFB-150-TOB/100.jpg";
  res: any;
  dataConfifArray: any;
  frameCanvas: any;
  frameURL: any;
  matURL: any;
  desktopVersion: any;
  settingData: any;
  linethick: any;
  imgNaturalWidth: any;
  imgNaturalHeight: any;
  swatchImgPath: any;
  EXIF: any;
  defaultParamObj: any;
  isCustomFraming: any;
  isMobile: any;
  top_mat: any;
  selected_mat: any;
  height1: any;
  width1: any;
  isRequestGetInfo: any;
  frameLoadCount: any;
  previewWidth: any;
  configuration: any;
  editPopupChangedWidth: any;
  editPopupChangedHeight: any;
  priceParameters: any;
  customFramingPricePara: any;
  scale: any;
  frameOverScale: any;
  popupScale: any;
  selectedCut: any;
  selectedCutDetails;
  selectedCutShape;
  preview_max_height: any;
  lib: any;
  cutImageUploaded: any;
  hasCustomShape: any;
  baseUrl: any;
  hostname: any;
  thumb_path: any;
  mydrop: any;
  max_size: any;
  bottom_mat: any;
  tripple_mat: any;
  setBottomMat: any;
  loadCounter: any;
  optionctr: any;
  mega_pixel: any;
  noMat: any;
  collage_dm: any;
  isUploadFromPopup: any;
  url_width_height: any;
  uploaded_image_width: any;
  uploaded_image_height: any;
  imageUploadTool: any;
  textmat: any;
  intOffset: any;
  tempFrames: any;
  frameSeeMore: any;
  lastViewedProducts: any;
  configurationUrl: any;
  curr_mat1_id: any;
  prev_mat1_id: any;
  change_item: any;
  customsize_with_validation: any;
  customsize_height_validation: any;
  isSafari: any;
  windowHeight: any;
  windowWidth: any;
  firstPageLoad: any;
  currentCut: any;
  define_width: any;
  define_height: any;
  current_img_width: any;
  current_img_height: any;
  containerWidthV2: any;
  containerHeightV2: any;
  cntLoadMultilpeImg: any;
  is_standard_size: any;
  toolPanelPopup: any;
  singlePopupMatImg: any;
  selectedVgroove: any;
  singleDesignMap: any;
  multipleDesignMap: any;
  prevMatCode: any;
  showRecordsV4: any;
  objTmpFrame: any;
  variant_width: any;
  variant_height: any;
  mouseOverFrameCode: any;
  mouseOverLinerFrameCode: any;
  third_mat_click_count: any;
  botttom_mat_click_count: any;
  lowMatWidth: any;
  priceUpdate: any;
  ptype: any;
  browserName: any;
  fullVersion: any;
  browserInfo: any;
  timer: any;
  isIntervalSet: any;
  isSelectedCut: any;
  isOpeningChange: any;
  cartRedirectUrl: any;
  imgWidth: any;
  imgHeight: any;
  newWidth: any;
  newHeight: any;
  newX: any;
  newY: any;
  croppedImageScale: any;
  cropX: any;
  cropY: any;
  cropWt: any;
  cropHt: any;
  cropSelection: any;
  isCropped: any;
  newScale: any;
  previewHeight: any;
  changedMatCode: any;
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
  activeFrameName: any;
  currentPrice: any;
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
  currentFilterImg: any;
  bottomPersonalizeCanvasWidth: any;
  topPersonalizeCanvasWidth: any;
  previousChildMat: any;
  previousOpening: any;
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
    maxY: 0
  };
  matWidthArr: any = {
    minX: 0,
    minY: 0,
    maxX: 0,
    maxY: 0
  };
  getInfo_dev_file_name: any;
  canvasWidth: any;
  canvasHeight: any;
  frameWidth: any;
  linerFrameWidth: any;
  getImage_file_name: any;
  close_value: any;
  isPageLoadFrames: any;
  swatchResizedImg: any;
  linerSwatchResizedImg: any;
  swatchLinerImg: any;
  frameLinerResults: any;
  isCallLinerFrameV4: any;
  innerLayerCanvas: any;
  imageLayerCanvas: any;
  grooveCanvas: any;
  grooveCtx: any;
  frameResults: any;
  isCallFrameV4: any;
  color_dropdown: any;
  selectedMat: any;
  canvasMatScale: any;
  canvasSecondMatScale: any;
  imgPosition: any;
  popupMatArr: any;
  vgroovConfigArr: any;
  popupMatStringTopCodeArraytmp: any;
  popupMatStringBottomCodeArraytmp: any;
  vgroovShapeCodesArray: any;
  popupMatStringCode: any;
  popupMatStringTopCode: any;
  popupMatStringBottomCode: any;
  mainImageUrl: any;
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
  clearSliderInterval: any;
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
  hoverTopMatColor: any;
  isHoverBottomMat: any;
  isHoverThirdMat: any;
  isCollageApplied: any;
  isMatChange: any;
  setModalTex2_oversize_CF: any;
  setModalTexMain_oversize_CF: any;
  setModalTex1_oversize_CF: any;
  setModalTex1_CF: any;
  setModalTex2_CF: any;
  setModalTexMain: any;
  previewUrl: any;
  isUndoChanges: any;
  submittedFileToUpload: any;
  completedUploadedFile: any;
  multipleUploadedImagesArr: any;
  editPopupConfigurationArr: any;
  editPopupConfiguration: any;
  undoChangesStack: any;
  selectedColor2: any;
  selectedColor3: any;
  bottomPersonalizeCanvas: any;
  bottomPersonalizeCanvasCtx: any;
  topPersonalizeCanvas: any;
  topPersonalizeCanvasCtx: any;
  activeFrameLipWidth: any;
  activeFrameId: any;
  activeFramePrice: any;
  activeFrameTimeFactor: any;
  activeFrameWidth: any;
  defaultImages: any;
  selectedGlassVal: any;
  onLoadGlassFlag: any;
  cropFlagOpening: any;
  frameLoadFlag: any;
  patternLoadsData: any;
  previewWidthMax: any;
  frameCode: any;
  preview: any;
  framewidth: any;
  frameheight: any;
  matCodeArray: any;
  isUploadInProgress: any = 0;
  public frameModal: boolean = false;
  datarr: any;
  dataFramesArray = [];
  dataMatsArray = [];
  decorativeMats = [];
  vgrooveArr = [];
  collageArr: any;
  collageChlidMatArr: any;
  getInfoArr: any;
  glassArr : any = [];
  custom_Framing: any;
  hardwareData: any;
  ppi: any;
  isLetterArt: any;
  outSideHeight: any;
  outSideWidth: any;
  imagePath: any;
  letterArtLength: any;
  ShowId: any;
  userInput: any;
  clickedLetter: any;
  randomLetterResult: any;
  textinputModalStyle: any;
  frameModalStyle: any;
  matModalStyle: any;
  decorModalStyle: any;
  glassModalStyle: any;
  mainprevewclsStyle: any;
  selectedMatType: any = '';
  tabImages: any;
  textActiveImg: any;
  frameActiveImg: any;
  matActiveImg: any;
  decorActiveImg: any;
  glassActiveImg: any;
  textInctiveImg: any;
  frameInctiveImg: any;
  matInctiveImg: any;
  decorInctiveImg: any;
  glassInctiveImg: any;
  infomodalStyle: any;
  colorfilter: any;
  glassPopup: any;
  mainProductPreviewStyle: any;
  mainConatinerStyle: any;
  equalHeightsStyle: any;
  randomImageModalStyle: any;
  hardwarepopupStyle: any;
  HideButtonStyle: any;
  onPageload: any;
  bottomMatId: any;
  topMatId: any;
  tempSelectedGlassArray: any;
  frameMaxWidth: any;
  frameMaxHeight: any;
  maxFrameSize: any;
  frameMaterial: any;
  frameNote: any;
  OnloadFrames: any[];
  framesData: any = [];
  changeGlassManually: any;
  tempHardwareArray: any;
  changeHardwareManually: any;
  infoflag: any;
  productCode: any;
  isLodedMats: any;
  totalPrice: any;
  onloadGlassArray: any;
  oldSelectedFrameCode: any;
  frameMaxWidthOld: any;
  frameMaxHeightOld: any;
  showingChangeFrameMessage: any;
  oldSelectedMatCode: any;
  showingChangeMatMessage: any;
  isSelectedMatNotFound: boolean = false;
  isSelectedFrameNotFound: boolean = false;
  TopMatTitle: any;
  canvasThirdMatScaleCollage: any;
  trippleMatId: any;
  noFramess: boolean;
  imagePathTemp: any;
  imageSizesArray: any = [];
  isImageSize: any;
  selectedColorFilter: string = "";
  imagePathDuplicate: any;
  selectedMatId: any;
  parentHardwareData: any;
  selectedHardwareId: any;
  parentHardwareId: any;


  constructor(private route: ActivatedRoute, private title: Title, private getDataService: GetDataService, private http: HttpClient, public Helper: HelperService) {

    $("link[rel=canonical]").attr( "href", "https://www.arttoframe.com/custom_framing/");
    $("meta[name='keywords']").attr('content', "8x10 Pinpix Decorative Bulletin Board,8x10 Pinpix Bulletin Board, null");
    this.title.setTitle("Online Custom Framing | Upload and Frame Your Own Photos | ArtToFrames");
    // this.datarr = { MatDetails };
    // localStorage.setItem('mats', JSON.stringify(this.datarr['MatDetails']));
    this.getDataService.getInfoAngular().subscribe(
      res => {
        this.getInfoArr = res;
        localStorage.setItem('getInfo', this.getInfoArr);
      });

    //mat colors name
    this.http.get<any>("https://www.arttoframe.com/cfqaapi/v4/index.php?action=getMatFilterColors").subscribe(res => {
      this.matFilter = res.data;
      //this.getMatFilterColors();
    },
      error => {
        console.log("mat filter data not loaded");
      });
    // this.datarr = { VgooveDetails };
    // localStorage.setItem('vgroove', JSON.stringify(this.datarr['VgooveDetails']));
  }

  ngAfterViewInit() {

    // this.arrange();

  }

  getInputSizes(){
    this.imageSizesArray = [];
    this.getDataService.getImageSizesForLetterart(this.userInput.length).subscribe((res) => {
      this.imageSizesArray = res;
      console.log(this.imageSizesArray);
    })
  }
  ngOnInit() {
    this.getFilterGlassData()
    // this.textinputModalStyle['display'] = 'block';
    this.carouselBannerItems = [this.Helper.cdn + "/images/upload_20.png", this.Helper.cdn + "/images/upload_20.png", this.Helper.cdn + "/images/upload_20.png", this.Helper.cdn + "/images/upload_20.png"];

    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
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
        `
      },
      interval: 4000,
      load: 1,
      loop: false,
      custom: 'banner',
      touch: true
    }

    this.ppi = 72;
    this.matWidth = $("#matWidth").val();
    this.selectOpening = 0;
    this.frameCanvas = $("#framecanvas");
    this.frameCode = 'FRBW26079';
    this.activeTab = "";
    this.width_to_height_ratio = 0;
    this.cropped_width = 100;
    this.cropped_height = 150;
    this.cropped_x = 0;
    this.cropped_y = 0;
    this.frameURL = this.Helper.cdn1+ "/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg";
    this.matURL = 61;
    this.hardwareID = 52;
    this.matFilter = "";
    this.frameFilterID = "";
    this.frameSortID = "";
    this.frameFilter = [];
    this.matFilterID = "";
    this.preview = $('#preview');
    this.linethick = 0.25;
    this.imgNaturalWidth = 50;
    this.imgNaturalHeight = 50;
    this.desktopVersion = '';
    this.settingData = 57;
    this.EXIF = '';
    this.defaultParamObj = '';
    this.isCustomFraming = '';
    this.isMobile = false;
    this.top_mat = 61;
    this.selected_mat = 61;
    this.height1 = $(window).height();
    this.width1 = $(window).width();
    this.isRequestGetInfo = false;
    this.frameLoadCount = 0;
    this.previewWidth = 0;
    this.configuration = {};
    this.editPopupChangedWidth = "";
    this.editPopupChangedHeight = "";
    this.priceParameters = "";
    this.customFramingPricePara = "";
    this.scale = 1;
    this.frameOverScale = 1;
    this.popupScale = 1;
    this.selectedCut = -1;
    this.selectedCutDetails;
    this.selectedCutShape;
    this.previewWidthMax = 950;
    this.preview_max_height = "";
    this.lib = "/product_images/lib/";
    this.cutImageUploaded = false;
    this.hasCustomShape = false;
    this.baseUrl = '';
    this.hostname = '';
    this.thumb_path = '';
    this.mydrop = 1;
    this.max_size = 40;
    this.bottom_mat = 89;
    this.tripple_mat = 61;
    this.setBottomMat = 1;
    this.loadCounter = 0;

    // add this because carousal not working
    $(".ngxcarousel").css("width", $(window).width());
    
    
    this.optionctr = 0;
    this.mega_pixel = 0;
    this.noMat = '';
    this.collage_dm = 0;
    this.isUploadFromPopup = 0;
    this.url_width_height = 0;
    this.uploaded_image_width = "";
    this.uploaded_image_height = "";
    this.imageUploadTool = "";
    this.textmat = 0;
    this.intOffset = 0;
    this.tempFrames = '';
    this.frameSeeMore = false;
    this.lastViewedProducts = {};
    this.configurationUrl = '';
    this.curr_mat1_id = "";
    this.prev_mat1_id = "";
    this.change_item = 'Default Configuration';
    this.customsize_with_validation = 800;
    this.customsize_height_validation = 1000;
    this.isSafari = false;
    this.windowHeight = $(window).height();
    this.windowWidth = $(window).width();
    this.firstPageLoad = 1;
    this.currentCut = 0;
    this.define_width = "";
    this.define_height = "";
    this.current_img_width = 0;
    this.current_img_height = 0;
    this.containerWidthV2 = 0;
    this.containerHeightV2 = 0;
    this.cntLoadMultilpeImg = 1;
    this.is_standard_size = '';
    this.toolPanelPopup = '';
    this.singlePopupMatImg = 8;
    this.selectedVgroove = 4;
    this.singleDesignMap = '';
    this.multipleDesignMap = '';
    this.prevMatCode = 0;
    this.showRecordsV4 = 10;
    this.objTmpFrame = '';
    this.variant_width = 0;
    this.variant_height = 0;
    this.mouseOverFrameCode = '';
    this.mouseOverLinerFrameCode = "";
    this.third_mat_click_count = 0;
    this.botttom_mat_click_count = 0;
    this.lowMatWidth = 0;
    this.priceUpdate = false;
    this.ptype = "no";
    this.browserName = '';
    this.fullVersion = '';
    this.browserInfo = "";
    this.timer = null;
    this.isIntervalSet = false;
    this.isSelectedCut = true;
    this.isOpeningChange = false;
    this.cartRedirectUrl = "";
    this.imgWidth = 0;
    this.imgHeight = 0;
    this.newWidth = 0;
    this.newHeight = 0;
    this.newX = 0;
    this.newY = 0;
    this.croppedImageScale = {};
    this.cropX = "";
    this.cropY = "";
    this.cropWt = "";
    this.cropHt = "";
    this.cropSelection = [];
    this.isCropped = false;
    this.newScale = 1;
    this.previewHeight = "";
    this.changedMatCode = "";
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
    this.activeFrameName = "";
    this.currentPrice = "";
    this.priceTempArr = [];
    this.OSInfo = "Unknown OS";
    this.isCheckMatBySize = false;
    this.isAlreadyRequested = false;
    this.isPageLoadFromLanding = true;
    this.isPageLoad = 1;
    this.configImageDataUrl = [];
    this.editPopupImageDataUrl = {};
    this.collageOpenings = {
      'cutCode': 0,
      'outsidewidth': 0,
      'outsideheight': 0,
      'allow_personalization': 0
    };
    this.imageArr = [];
    this.currentFilterImg = "";
    this.bottomPersonalizeCanvasWidth = "";
    this.topPersonalizeCanvasWidth = "";
    this.previousChildMat = "";
    this.previousOpening = "";
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
      maxY: 0
    };

    this.matWidthArr = {
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0
    };
    this.getInfo_dev_file_name = "getInfoV1_mobile_dev.php";
    this.canvasWidth = "";
    this.canvasHeight = "";
    this.frameWidth = "";
    this.linerFrameWidth = "";
    this.getImage_file_name = "";
    this.close_value = "";
    this.isPageLoadFrames = true;
    this.swatchResizedImg = $("#swatchResizedImg");
    this.linerSwatchResizedImg = "";
    this.swatchLinerImg = "";
    this.frameLinerResults = false;
    this.isCallLinerFrameV4 = false;
    this.frameCanvas = "";
    this.imageLayerCanvas = "";
    this.grooveCanvas = "";
    this.grooveCtx = "";
    this.frameResults = false;
    this.isCallFrameV4 = false;
    this.color_dropdown = "";
    this.selectedMat = "topMat";
    this.canvasMatScale = {};
    this.canvasSecondMatScale = {};
    this.imgPosition = [];
    this.popupMatArr = [];
    this.vgroovConfigArr = [];
    this.popupMatStringTopCodeArraytmp = [];
    this.popupMatStringBottomCodeArraytmp = [];
    this.vgroovShapeCodesArray = [];
    this.popupMatStringCode = "";
    this.popupMatStringTopCode = "";
    this.popupMatStringBottomCode = "";
    this.mainImageUrl = "";
    this.cutSize = [];
    this.canvasThirdMatScale = {};
    this.canvasImageScales = [];
    this.cuts = [];
    this.canvasSecondMatScaleCollage = [];
    this.canvasThirdMatScaleCollage = [];
    this.matcode = "custom";
    this.openingsizes = [];
    this.matCategory = 'mats';
    this.clickedMatCategory = "words";
    this.lastMatSelection = {};
    this.openingCuts = [];
    this.clearSliderInterval = "";
    this.isFrameFilter4 = false;
    this.useCacheImg = false;
    this.cacheImages = {};
    this.cacheShapeImages = {};
    this.cacheShapeImages[0] = {
      useCacheImg: false,
      src: ""
    };
    this.bottomPersonalizeTxtScale = {};
    this.topPersonalizeTxtScale = {};
    this.isEditLinkClick = false;
    this.isBottomPersonalizationSet = false;
    this.isTopPersonalizationSet = false;
    this.isHoverTopMat = false;
    this.hoverTopMatColor = '';
    this.isHoverBottomMat = false;
    this.isHoverThirdMat = false;
    this.isMatChange = false;
    this.setModalTex2_oversize_CF = "to [SIZE1]&#8243; x[SIZE2]&#8243;";
    this.setModalTexMain_oversize_CF = "Oversize limit";
    this.setModalTex1_oversize_CF = "The complete size should be less than or equal";
    this.setModalTex1_CF = "Please enter a  minimum size of [SIZE1]&#8243; x [SIZE2]&#8243;";
    this.setModalTex2_CF = "and maximum finish size of [SIZE1]&#8243; x [SIZE2]&#8243;";
    this.setModalTexMain = "Minimum size limit";
    this.previewUrl = "";
    this.isUndoChanges = false;
    this.submittedFileToUpload = 0;
    this.completedUploadedFile = 0;
    this.multipleUploadedImagesArr = {};
    this.editPopupConfigurationArr = {};
    this.editPopupConfiguration = {};
    this.undoChangesStack = [];
    this.selectedColor2 = '';
    this.selectedColor3 = '';
    this.bottomPersonalizeCanvas = document.createElement('canvas');
    this.bottomPersonalizeCanvasCtx = this.bottomPersonalizeCanvas.getContext('2d');
    this.topPersonalizeCanvas = document.createElement('canvas');
    this.topPersonalizeCanvasCtx = this.topPersonalizeCanvas.getContext('2d');
    this.activeFrameLipWidth = "";
    this.activeFrameId = 3926;
    this.activeFramePrice = "";
    this.activeFrameTimeFactor = "";
    this.activeFrameWidth = 1.25;
    this.defaultImages = '';
    this.selectedGlassVal = 14;
    this.onLoadGlassFlag = 1;
    this.cropFlagOpening = 1;
    this.frameLoadFlag = 0;
    this.patternLoadsData = 0;
    this.framewidth = "";
    this.frameheight = "";
    this.isCollageApplied = false;
    this.collageOpenings = "";
    this.imagePath = "";
    this.matCodeArray = "";
    this.letterArtLength = "";
    this.outSideHeight = 10;
    this.outSideWidth = 8;
    this.ShowId = "";
    this.userInput = "";
    this.clickedLetter = "";
    this.randomLetterResult = "";
    this.isLetterArt = 1;
    this.textinputModalStyle = [];
    this.frameModalStyle = [];
    this.matModalStyle = [];
    this.decorModalStyle = [];
    this.glassModalStyle = [];
    this.tabImages = [];
    this.textActiveImg = "size_active_sep.svg";
    this.frameActiveImg = "frame_active_sep.svg";
    this.matActiveImg = "mat_active_sep.svg?v=7";
    this.decorActiveImg = "decor_active_sep.svg?v=4";
    this.glassActiveImg = "glass_active_sep.svg";
    this.textInctiveImg = "size_sep.svg";
    this.frameInctiveImg = "frame_sep.svg";
    this.matInctiveImg = "mat_sep.svg";
    this.decorInctiveImg = "decor_sep.svg";
    this.glassInctiveImg = "glass_sep.svg";
    this.infomodalStyle = [];
    this.colorfilter = [];
    this.glassPopup = [];
    this.mainprevewclsStyle = [];
    this.mainProductPreviewStyle = [];
    this.mainConatinerStyle = [];
    this.equalHeightsStyle = [];
    this.randomImageModalStyle = [];
    this.hardwarepopupStyle = [];
    this.HideButtonStyle = [];
    this.onPageload = 0;
    this.bottomMatId = 0;
    this.topMatId = 0;
    this.trippleMatId = 0;
    this.tempSelectedGlassArray = [];
    this.frameMaxWidth = 32;
    this.frameMaxHeight = 42;
    this.maxFrameSize = "";
    this.frameMaterial = "MDF"
    this.frameNote = "";
    this.changeGlassManually = 0;
    this.productCode = 48;
    this.tempHardwareArray = [];
    this.changeHardwareManually = 0;
    this.infoflag = 0;
    this.isLodedMats=0;



    // this.OnloadFrames = [];
    // this.framesData = { Frame }
    // localStorage.setItem('frames', JSON.stringify(this.framesData['Frame']));
    // this.OnloadFrames = this.framesData['Frame'];
    this.getFilterFramesData();
    this.getFilterMatsData();

    // this.hardwareData = { Hardware }
    // this.hardwareData = this.hardwareData['Hardware'];
    // this.frameFilter = { frameColor }
    // this.frameFilter = this.frameFilter['frameColor'];
    /*  this.onloadGlassArray = { Glass };
     this.onloadGlassArray = this.onloadGlassArray['Glass'][0]; */


    this.route.queryParams.forEach((params: Params) => {
      this.userInput = params['letterart'];
      // console.log(this.userInput)
      this.getInputSizes()
    });

    if (this.userInput != null || this.userInput != undefined) {
      this.onGoUserText(this.userInput);
    } else {
      this.userInput = "HOME";
      this.onGoUserText("HOME");
    }

    // this.location.replaceState("?letterart=" + this.userInput);

    /*$('.main-product-preview').css('display', 'none');
    $('.mainConatiner').css('display', 'none');
    $('.mainContainerLoader').css('display', 'block');*/

    // $('.LA_sliderContainer').bxSlider({ touchEnabled: false });

    $('.bx-wrapper').css({
      'background': 'transparent',
      'box-shadow': 'none',
      'border': 'none'
    });

    $('.bx-controls-direction').css('display', 'none');
    $('.container-fluid').css('padding', '0px');
    $('.bx-viewport').css('height', 'unset');

    this.defaultParamObj = JSON.parse(localStorage.getItem('defaultParam'));
    console.log(this.defaultParamObj)
    if (this.defaultParamObj != null) {
      this.selectMats('bottommats');
      if (this.defaultParamObj.length != 2) {

        if (this.defaultParamObj.frameId != null) {
          this.activeFrameId = this.defaultParamObj.frameId;
        }

        if (this.defaultParamObj.frameCode != null) {
          this.frameCode = this.defaultParamObj.frameCode;
          this.frameURL = this.Helper.cdn1 + "/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg";
        }

        if (this.defaultParamObj.topMatId != null) {
          this.top_mat = this.defaultParamObj.topMatId;
        }

        if (this.defaultParamObj.current_width != null) {
          this.customWidth = this.defaultParamObj.current_width;
        } else {
          this.customWidth = 4;
        }

        if (this.defaultParamObj.current_height != null) {
          this.customHeight = this.defaultParamObj.current_height;
        } else {
          this.customHeight = 6;
        }
        console.log( "one =>  " + this.customWidth, this.customHeight)
        if (this.defaultParamObj.hardwareId != null) {
          this.hardwareID = this.defaultParamObj.hardwareId;
          this.changeHardwareManually = 1;
        }

        if (this.defaultParamObj.bottomMatId != null) {
          this.bottom_mat = this.defaultParamObj.bottomMatId;
        }

        if (this.defaultParamObj.glassId != null) {
          this.selectedGlassVal = this.defaultParamObj.glassId;
        }

      }

    }


    // this.mainprevewclsStyle['height'] = window.innerHeight-460; 
    //this.mainProductPreviewStyle['height'] = window.innerHeight-155; 
    //this.mainConatinerStyle['height'] = window.innerHeight-158;
    // this.equalHeightsStyle['height'] = window.innerHeight-190;
    let self = this;

    $(document).ready(function (e) {
      // z-index: 100; bottom: 127.275px; display: block;
      $('body').css('background', '#EAE6E4');
      console.log($('#textinputModal').css('bottom'))
      // if($('#textinputModal').css('bottom') === "125.137px"){
      //   console.log($('#textinputModal').css('bottom'))
        $('#textinputModal').css('bottom', '157px')
      // }
      console.log(self.Helper.cdn)
      // $('#textinputModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 30 + 'px')
      $('#showLetterArtpopup img').attr('src', self.Helper.cdn + '/images/size_active_sep.svg');
      $('#matoption  img').attr('src', self.Helper.cdn + '/images/mat_sep.svg?v=1');
      $('#framesoption img').attr('src', self.Helper.cdn + '/images/frame_sep.svg');
      $('#decoroption img').attr('src', self.Helper.cdn + '/images/decor_sep.svg?v=5');
      $('#glassoption img').attr('src', self.Helper.cdn + '/images/glass_sep.svg');

      $('#openingSelectorContainer').delegate('.openingSelector', 'click', function (event) {
        $('.openingSelector').removeClass('active');
        $('#' + $(this).attr('id')).addClass('active');
      });
      setTimeout(() => {

        // $('.main-product-preview,.mainConatiner,#previewSlider,.main-prevewcls').css('height', $(window).height() - 240);
        // $('#preview_container').css('height', $(window).height() - 190);
        // $('.equal-heights').css('height', $(window).height() - 190);
        // $('.ngxcarouselPoint').css('top', $(window).height() - 240);
        // $('.main-prevewcls').css('max-width', $(window).width());

        // Commented due to slider issue
        $(
          ".main-product-preview,.mainConatiner,#previewSlider,.main-prevewcls"
        ).css("height", $(window).height() - 400);
        // $(
        //   ".main-product-preview,.mainConatiner,#previewSlider"
        // ).css("height", $(window).height() - 350);
        $("#preview_container").css("height", $(window).height() - 300);
        $(".equal-heights").css("height", $(window).height() - 300);
        $(".ngxcarouselPoint").css("top", $(window).height() - 350);

        $(".main-prevewcls").css("max-width", $(window).width());
        
      }, 50);
      // $('.main-prevewcls').css('height', $(window).height() - 190);
      // $('.main-product-preview').css('height', $(window).height() - 155);
      // $('.mainConatiner').css('height', $(window).height() - 158);
      // $('.equal-heights').css('height', $(window).height() - 190);

      // $('.bx-wrapper').css('margin-bottom', '0px');
      // $('.bx-pager').css('bottom', '0px');
      // $('.bx-wrapper').css('height', $(window).height() - 190);
      // $('.bx-viewport').css('height', $(window).height() - 190);
      // $('.bx-page').css('bottom', '40px');

      var isMobile = window.matchMedia("only screen and (width: 360px)").matches;
      $(".modal-backdrop.in").css('display', 'none');
      $(".traversing").hide();


      $(".MatTabsChild1 li").on('click', function () {
        $(".MatTabsChild1 li").removeClass('active');
        $(this).addClass('active');
      });

    });

    if (this.onPageload == 0) {
      this.colorfilter['display'] = 'none';
      this.onPageloadGlassId();
      this.showLetterArtpopup();
    }
    $('.color-filterbtn').click(function () {
      $('#colorfilter').modal('show');
    });

    /*    this.tabImages['letterArtPopup'] = "size_active_ic_28.png";
        this.tabImages['showFrames'] = "frame_ic_28.png";
        this.tabImages['showMats'] = "mat_ic_28.png";
        this.tabImages['showDecorativeMats'] = "decor_ic_28.png";
        this.tabImages['showGlass'] = "glass_ic_28.png";*/
  }
  public carouselBannerLoad(evt: any) {
    console.log("ffffssadas")
    const len = this.carouselBannerItems.length
    if (len <= 3) {
      for (let i = len; i < len + 4; i++) {
        this.carouselBannerItems.push(i);
      }
    }

  }

  public onGoUserText(inputtext: string) {
    var self = this;
    // console.log("----In onGoUserText-----")
    // this.arrange();
    self.userInput = inputtext;
    this.getInputSizes()
    self.selectCollageOpening(self.userInput);
    this.getFilterFramesData()
    // self.inputValidation();
  }


  public colorFilterMat() {
    this.colorfilter['display'] = 'block';
  }

  public CreateLetterArtCanvas(img, i) {
    // console.log("CreateLetterArtCanvas================")
    // console.log(i)
    var self = this;
    // console.log(i)
    let Tcanvas = self.tempCanvasLetter.nativeElement;
    let Tctx = Tcanvas.getContext("2d");
    var imgurl = new Image();
    imgurl.crossOrigin = "Anonymous";
    imgurl.src = img.image.replace("https://www.arttoframe.com", self.Helper.cdn1);
    // imgurl.src = img.image as string;
    // imgurl.src = 'assets/test.jpg'; //check final
    // console.log(imgurl)
    imgurl.onload = function () {
      Tcanvas.width = img['size'][0];
      Tcanvas.height = img['size'][1];
      Tctx.drawImage(imgurl, 0, 0, Tcanvas.width, Tcanvas.height);
      var scaleImgUp = Tcanvas.toDataURL();
      self.drawImageTempScalePreviewSRC(scaleImgUp, i);
    }

  }


  public showLetterArtpopup() {

    this.textinputModalStyle['display'] = 'block';
    $('#textinputModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 30 + 'px')
    this.frameModalStyle['display'] = 'none';
    this.matModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';

    this.tabImages['letterArtPopup'] = this.textActiveImg;
    this.tabImages['showFrames'] = this.frameInctiveImg;
    this.tabImages['showMats'] = this.matInctiveImg;
    this.tabImages['showDecorativeMats'] = this.decorInctiveImg;
    this.tabImages['showGlass'] = this.glassInctiveImg;
    setTimeout(() => {
      this.HideButtonStyle['display'] = 'block';
      $('.update-hide-btn').css('display', 'block')
      $('.frame-hide-btn').css('display', 'block')
    }, 100);
    $('.modal-backdrop').css('display', 'none');

  }

  /*   public showFrames(param) {
      this.frameModalStyle['display'] = 'block';
      this.matModalStyle['display'] = 'none';
      this.textinputModalStyle['display'] = 'none';
      this.decorModalStyle['display'] = 'none';
      this.glassModalStyle['display'] = 'none';
  
      this.tabImages['showFrames'] = this.frameActiveImg;
      this.tabImages['letterArtPopup'] = this.textInctiveImg;
      this.tabImages['showMats'] = this.matInctiveImg;
      this.tabImages['showDecorativeMats'] = this.decorInctiveImg;
      this.tabImages['showGlass'] = this.glassInctiveImg;
      this.HideButtonStyle['display'] = 'block';
  
      $(".modal-backdrop.in").css('display', 'none');
  
      this.datarr = localStorage.getItem('frames');
      $("#selFrameColor").val(0);
  
      if (param == "filter" && this.frameFilterID != 0) {
        this.getFrameFilterColorsName();
      } else {
        this.dataFramesArray = JSON.parse(this.datarr);
      }
  
      this.frameModal = true;
      $(".myFrame").removeClass("frame_active");
      $("#myFrame_" + this.frameCode).addClass("frame_active");
    } */

  public showFrames(param) {
    this.frameModalStyle['display'] = 'block';
    $('#frameModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 30 + 'px')
    this.matModalStyle['display'] = 'none';
    this.textinputModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';

    this.tabImages['showFrames'] = this.frameActiveImg;
    this.tabImages['letterArtPopup'] = this.textInctiveImg;
    this.tabImages['showMats'] = this.matInctiveImg;
    this.tabImages['showDecorativeMats'] = this.decorInctiveImg;
    this.tabImages['showGlass'] = this.glassInctiveImg;
    this.HideButtonStyle['display'] = 'block';

    this.getFilterFramesData()
    // this.datarr = localStorage.getItem('frames');
    // // $("#selFrameColor").val(0);
    // console.log(this.frameFilterID)
    // if(this.frameFilterID === "52"){
    //   $('.alert-frame-text').show();
    //   this.noFramess = true;
    //   return;
    // }
    // console.log(this.frameFilterID)
    // this.noFramess = false;
    // if (param == "filter" && this.frameFilterID != 0) {
    //   this.getFrameFilterColorsName();
    // } else {
    //   var self = this;
    //   if (self.OnloadFrames.length == 0) {
    //     self.OnloadFrames = JSON.parse(self.datarr);
    //   }

    // }
    // setTimeout(() => {
    //   // this.Helper.validateFrames();
    // }, 50);

    // // New added on 08 sept 2022 for filtered frames by input size
    // if(this.frameFilterID == 0){
    //   let tempFrameArry = []
    //   let selectedFrame = this.OnloadFrames.filter((data)=> this.frameCode === data.code);
    //   console.log(selectedFrame)
    //   let finishWidth = parseFloat(this.outSideWidth) + ((parseFloat(selectedFrame[0].width) - parseFloat(selectedFrame[0].lip_width)) * 2);
    //   let finishHeigth = parseFloat(this.outSideHeight) + ((parseFloat(selectedFrame[0].width) - parseFloat(selectedFrame[0].lip_width)) * 2);
    //   this.OnloadFrames = JSON.parse(self.datarr)
    //   this.OnloadFrames.forEach((data)=>{
    //     let frameMaxSize = data.max_finished_size.split("x");
    //     if (finishWidth <= parseInt(frameMaxSize[0]) && finishHeigth <= parseInt(frameMaxSize[1])) {
    //       tempFrameArry.push(data);
    //     }
    //   })

    
    // // if (
    // //   tmpFrameMaxWidth <= parseInt(this.frameMaxWidth) && tmpFrameMaxHeight <= parseInt(this.frameMaxHeight)
    // // ) {
    // //   return true;
    // // } else {
    // //   $("#myModal_maxsize h4").html(
    // //     " Please switch to another frame from bellow frame tab."
    // //   );
    // //   $("#myModal_maxsize").modal("toggle");
    // //   return false;
    // // }
    //   this.OnloadFrames = []
    //   this.OnloadFrames = tempFrameArry;
    // }
    

    // // self.frameModal = true;
    // $(".myFrame").removeClass("frame_active");
    // $("#myFrame_" + self.frameCode).addClass("frame_active");
  }

  public showMats(param) {
    // console.log("showmats=========================================")
    this.matModalStyle['display'] = 'block';
    $('#matModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 30 + 'px')
    this.textinputModalStyle['display'] = 'none';
    this.frameModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';
    this.colorfilter['display'] = 'none';

    this.tabImages['showMats'] = this.matActiveImg;
    this.tabImages['letterArtPopup'] = this.textInctiveImg;
    this.tabImages['showFrames'] = this.frameInctiveImg;
    this.tabImages['showDecorativeMats'] = this.decorInctiveImg;
    this.tabImages['showGlass'] = this.glassInctiveImg;
    this.HideButtonStyle['display'] = 'block';

    $(".modal-backdrop.in").css('display', 'none');

    if (param == "filter" && this.matFilterID != 0) {
      this.getMatColorFilterData();
    } else {
      var self = this;
      if (this.isLodedMats == 1) {
        // this.dataMatsArray = JSON.parse(localStorage.getItem('mats'));
      } else {
        /* this.getDataService.getMatsData().subscribe(
          res => {
            this.datarr = res;
            localStorage.setItem('mats', this.datarr);
         
            $('#mat_loader').css('display', 'none');
          }); */
        // this.datarr = localStorage.getItem('mats');
        // this.dataMatsArray = JSON.parse(localStorage.getItem('mats'));
        this.isLodedMats = 1;
        // this.showMats('mat')
      }
    }
    this.getFilterMatsData();
    // setTimeout(() => {
    //   this.Helper.validateMats(this.top_mat, parseFloat($("#customWidth").val()), parseFloat($("#customHeight").val()), this.isCollageApplied);
    //   setTimeout(() => {
    //     // //console.log($(".matAvailable").val())
    //     if ($(".matAvailable").val() == "0") {
    //       self.changeMat(61);
    //       $(".matAvailable").val(1)
    //     }
    //   }, 100);
    //   $(".bxsliderCFMat").scrollLeft(0);

    // }, 50);

  }

  public showDecorativeMats() {
    // this.datarr = localStorage.getItem('vgroove');
    // this.vgrooveArr = JSON.parse(this.datarr);
    console.log(this.vgrooveArr)
    if(this.vgrooveArr.length === 0){
      this.getDataService.getVgrooveJSON().subscribe((responce : any)=>{
        this.vgrooveArr = responce;
      })
    }
    

    this.decorModalStyle['display'] = 'block';
    $('#decorModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 30 + 'px')
    this.textinputModalStyle['display'] = 'none';
    this.frameModalStyle['display'] = 'none';
    this.matModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';

    this.tabImages['showDecorativeMats'] = this.decorActiveImg;
    this.tabImages['letterArtPopup'] = this.textInctiveImg;
    this.tabImages['showFrames'] = this.frameInctiveImg;
    this.tabImages['showMats'] = this.matInctiveImg;
    this.tabImages['showGlass'] = this.glassInctiveImg;
    this.HideButtonStyle['display'] = 'block';

    $(".modal-backdrop.in").css('display', 'none');

    if (
      $("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") ==
      false
    ) {
      $(".mat-checkbox-green2").removeClass("vgroove_active");
    }
    else{
      console.log(this.selectedVgroove)
      $(".mat-checkbox-green2").removeClass("vgroove_active");
      $(".vgrooveSelect_" + this.selectedVgroove).addClass("vgroove_active");
    }

  }

  public btnHide() {
    this.textinputModalStyle['display'] = 'none';
    this.frameModalStyle['display'] = 'none';
    this.matModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';
    this.HideButtonStyle['display'] = 'none';
    // $('#sizemodal,#frameModal,#patternModal, #matModal, #decorModal, #glassModal,#AddingToCart_success').modal('hide');
    // $("#size").removeClass('in active');
    // $(".frame-hide-btn").css('display', 'none');

  }

  public btnHideInfo() {
    this.glassPopup['display'] = 'none';
    this.infomodalStyle['vgrooveDisplay'] = 'none';
    this.infomodalStyle['priceDisplay'] = 'none';
    this.colorfilter['display'] = 'none';
    this.randomImageModalStyle['display'] = 'none';
    this.hardwarepopupStyle['display'] = 'none';
    $(".modal-backdrop.in").hide();
  }

  // =======preview function===========

  /* public changeFrame(e) {
    
    this.activeFrameLipWidth = e.lip_width;
    this.frameURL = "";
    this.frameCode = e.code;
    this.activeFrameId = e.id;
    this.activeFrameWidth = $("#frame_" + this.frameCode).attr('data-width');
    this.frameWidth = $("#frame_" + this.frameCode).attr('data-width');
    this.frameURL = "https://www.arttoframe.com/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg";
    $("#cornerPro").attr("src", "https://www.arttoframe.com/products/frame/corner_profile/" + this.frameCode + "/300.jpg?v=56");
    $("#cornerAngImage").attr("src", "https://www.arttoframe.com/products/frame/corner_angle_image/" + this.frameCode + "/300.jpg?v=82")
    $(".myFrame").removeClass("frame_active");
    $("#myFrame_" + this.frameCode).addClass("frame_active");
    this.confirmSizeE();
    this.arrange();
    // this.getPrice();
  } */

  public changeFrame(e) {
    var self = this;
    // console.log(e)
    this.isSelectedFrameNotFound = true;
    console.log(this.isSelectedFrameNotFound)
    // this.WriteToFile("frame changed : " + e.code);
    this.frameMaxWidth = e.finished_size.split('x')[0]
    this.frameMaxHeight = e.finished_size.split('x')[1]
    this.frameURL = "";
    this.frameCode = e.code;
    this.activeFrameId = e.frame_id;
    if (e.material_id == 1) {
      this.frameMaterial = "Wood";
    } else {
      this.frameMaterial = "MDF";
    }
    if (e.product_page_note != "") {
      $('#info_log').css('display', 'block')
      this.frameNote = e.product_page_note.split(': ')[1];
    } else {
      $('#info_log').css('display', 'none')
      this.frameNote = "";
    }

    /* if (e.search_labels != 0) {
      // console.log(e.search_labels)

      self.bestSellerDiv['display'] = 'block';
      var offerImageArr = JSON.parse(self.offerImgData.data)

      $.each(offerImageArr, function (index, txt) {
        if (offerImageArr[index].id == e.search_labels) {
          self.offerImagePath = offerImageArr[index].image_path;
        }
      });

    } else {
      self.bestSellerDiv['display'] = 'none';
      self.offerImagePath = "";
    } */

    // this.activeFrameWidth = $("#frame_" + this.frameCode).attr('data-width');
    // this.frameWidth = $("#frame_" + this.frameCode).attr('data-width');
    this.activeFrameWidth = "1.25";
    this.frameWidth = "1.25";

    // this.frameURL = "https://cdn1.arttoframe.com/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg";

    this.frameURL = this.Helper.cdn1 + "/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg";

    // $("#cornerPro").attr("src", "https://cdn2.arttoframe.com/products/frame/corner_profile/" + this.frameCode + "/300.jpg?v=56");
    $("#cornerPro").attr("src", this.Helper.cdn2 + "/products/frame/corner_profile/" + this.frameCode + "/500.jpg?v=23");

    // $("#cornerAngImage").attr("src", "https://cdn1.arttoframe.com/products/frame/corner_angle_image/" + this.frameCode + "/300.jpg?v=82")
    $("#glazeSliderImage").attr("src", this.Helper.cdn2 + "/products/glaze/new/small/" + this.selectedGlassVal + ".png?v=23")
    if(this.selectedGlassVal === '114'){
      $("#glazeSliderImage").attr("src", this.Helper.cdn3 + "/products/glaze/new/Plexi-Regular.png")
    }

    $("#cornerAngImage").attr("src", this.Helper.cdn2 + "/products/frame/corner_angle_image/" + this.frameCode + "/500.jpg?v=23")

    $("#lifestyleImage").attr("src", this.Helper.cdn2 + "/products/frame/lifestyle_lifestyle_original/" + this.frameCode + "/500.jpg?v=90")

    $("#newcornerframeimg").attr("src", this.Helper.cdn2 + "/products/image-corner-wom-tight/framed-art/wom/" + this.frameCode + "/small/corner-image.jpg?v=29")

    $(".myFrame").removeClass("frame_active");
    $("#myFrame_" + this.frameCode).addClass("frame_active");

    $(".ngxcarouselPoint li").removeClass("active");
    $(".ngxcarouselPoint li:first-child").addClass("active").click();


    this.confirmSizeE();
    // this.getPrice();
    // this.arrange();
  }

  /*  public loadingWindow() {
     this.arrange();
   } */

  public arrange() {

    // this.preview_max_height = $("#preview_container").height() - 50;
    // this.previewWidthMax = $("#preview_container").width() - 50;
    this.preview_max_height = $("#preview_container").height() - 100;
    this.previewWidthMax = $("#preview_container").width() - 25;


    if (this.preview_max_height <= 50) {
      this.preview_max_height = this.previewWidthMax;
      $("#preview_container").height(this.previewWidthMax + 25)
    }

    // if (this.isFrameMatChanged == 0) {
    this.customWidth = parseFloat($("#customWidth").val());
    this.customHeight = parseFloat($("#customHeight").val());
    // }
    this.selectedGlassVal = this.getDefaultGlassID();

    // this.isFrameMatChanged = 0;
    this.customWidth = parseFloat(this.outSideWidth);
    this.customHeight = parseFloat(this.outSideHeight);
    console.log( "two =>  " + this.customWidth, this.customHeight)
    this.selectedGlassVal = this.getDefaultGlassID();
    var scale1 = 1;
    var scale2 = 1;

    this.framewidth = (this.customWidth + (2 * this.activeFrameWidth)) * this.ppi;
    this.frameheight = (this.customHeight + (2 * this.activeFrameWidth)) * this.ppi;

    if (this.frameheight > this.preview_max_height) {
      scale2 = this.preview_max_height / this.frameheight;
      this.frameheight = this.preview_max_height;
      this.framewidth = this.framewidth * scale2;
    }

    if (this.framewidth > this.previewWidthMax) {
      scale1 = this.previewWidthMax / this.framewidth;
      this.framewidth = this.previewWidthMax;
      this.frameheight = this.frameheight * scale1;
    }

    var matWidthX = this.matWidthArr.minX;
    var matWidthY = this.matWidthArr.minY;
    this.scale = scale1 * scale2;

    if (this.frameheight <= 0 || this.preview_max_height <= 0) {
      this.framewidth = 260;
      this.frameheight = 295;
      this.scale = 0.24;
    }

    // if (this.frameheight <= 0 || this.preview_max_height <= 0) {
    //   this.framewidth = 295;
    //   this.frameheight = 335.69;
    //   this.scale = 0.29;
    // }

    this.loadCanvasFrame();
    this.setTopMat();
    this.getPrice();
    this.inputValidation()
  }



  public loadCanvasFrame() {
    if (this.noMat == 1) {
      this.isInnerLayerChange = true;
      this.isImageLayerChange = true;
    }

    var frameCut = '';

    this.activeFrameLipWidth = 0.25;
    this.activeFramePrice = 0.213;
    this.activeFrameTimeFactor = 3.5;
    this.activeFrameName = "Satin Black";

    var sliderHeight = parseInt($('.mainConatiner').height()) - 70;
    $(".bx-wrapper img").css("max-height", sliderHeight + "px");

    this.frameWidth = (this.activeFrameWidth - 0.25) * this.ppi * this.scale;
    // this.frameWidth = this.activeFrameWidth * this.ppi * this.scale;
    
    $("#cornerPro").attr("src", this.Helper.cdn2 + "/products/frame/corner_profile/" + this.frameCode + "/500.jpg?v=23");
    $("#cornerAngImage").attr("src", this.Helper.cdn2 + "/products/frame/corner_angle_image/" + this.frameCode + "/500.jpg?v=23")
    $("#lifestyleImage").attr("src", this.Helper.cdn2 + "/products/frame/lifestyle_lifestyle_original/" + this.frameCode + "/500.jpg?v=90")
    $("#glazeSliderImage").attr("src", this.Helper.cdn2 + "/products/glaze/new/small/" + this.selectedGlassVal + ".png?v=23")
    if(this.selectedGlassVal === '114'){
      $("#glazeSliderImage").attr("src", this.Helper.cdn3 + "/products/glaze/new/Plexi-Regular.png")
    }
    var img = this.frameURL;
    this.swatchImgPath = this.Helper.getDefaultSwatchImg();
    this.image = '/assets/test.jpeg';
    let framecanvas = this.framecanvas.nativeElement;
    this.ctx = framecanvas.getContext("2d");
    this.canvasWidth = this.framewidth;
    this.canvasHeight = this.frameheight;

    if (this.isMainCanvasChange || this.isImageOnLoad) {

      var stroke = 5;

      if (this.noMat == 1) {
        this.matWidth = 0;
        stroke = 0;
      }

      var linerWidth = 1;
      var previousTop = $("#innerlayer-canvas").css('top');
      var newTop = 10;
      var topDiff = 10;
      let swatchCanvas = this.swatchCanvas.nativeElement;
      let ctxSwatch = swatchCanvas.getContext("2d");
      var imgD = new Image();
      imgD.crossOrigin = "anonymous";
      imgD.src = this.frameURL;

      imgD.onload = () => {
        var swatchScale = this.frameWidth / imgD.naturalHeight;
        swatchCanvas.height = this.frameWidth;
        swatchCanvas.width = imgD.naturalWidth * swatchScale;
        ctxSwatch.drawImage(imgD, 0, 0, imgD.naturalWidth, imgD.naturalHeight, 0, 0, imgD.naturalWidth * swatchScale, this.frameWidth);
        $("#swatchResizedImg").attr("src", "");
        $("#swatchResizedImg").attr("src", swatchCanvas.toDataURL());
      };

      this.isMainCanvasChange = false;
      var self = this;
      document.getElementById("swatchResizedImg").onload = () => {
        self.swatchResizedImageLoad();
      };
    }
  }

  public swatchResizedImageLoad() {
    var toRadians = 0.017453292519943295;
    let c2 = this.tempCanvas.nativeElement;
    let ctx2 = c2.getContext("2d");
    c2.width = this.framewidth;
    c2.height = this.frameheight;

    this.canvasWidth = this.framewidth;
    this.canvasHeight = this.frameheight;

    let framecanvas = this.framecanvas.nativeElement;
    let ctx = framecanvas.getContext("2d");

    framecanvas.width = this.canvasWidth;
    framecanvas.height = this.canvasHeight;

    var pat = ctx.createPattern(document.getElementById("swatchResizedImg"), "repeat");

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

    var pat2 = ctx2.createPattern(document.getElementById("swatchResizedImg"), "repeat");

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

    var pat2 = ctx2.createPattern(document.getElementById("swatchResizedImg"), "repeat");

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

    var pat2 = ctx2.createPattern(document.getElementById("swatchResizedImg"), "repeat");

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

    var pat2 = ctx2.createPattern(document.getElementById("swatchResizedImg"), "repeat");

    ctx2.fillStyle = pat2;
    ctx2.fill();
    ctx2.save();
    ctx.drawImage(c2, this.canvasWidth - this.frameWidth, 0);
    // $('#framecanvas').css('top', (($('.main-prevewcls').height() - $('#framecanvas').height()) / 2) + 'px');
    // $('#framecanvas').css('left', (($(".main-prevewcls").width() - $("#framecanvas").width()) / 2) + 'px')
    this.setTopMat();
  }

  /* public getDefaultSwatchImg() {
    var swatchImgPath = "https://cdn.arttoframe.com/products/frames/SwatchSmall/FRBW26074/300.jpg?is_https_site=1";
    return swatchImgPath;
  } */

  public setTopMat() {

    this.canvasMatScale = {
      top: parseFloat(this.frameWidth) - 1,
      left: parseFloat(this.frameWidth),
      width: this.framewidth - parseFloat(this.frameWidth) * 2,
      height: this.frameheight - parseFloat(this.frameWidth) * 2
    };

    this.ctx.beginPath();
    var topMatImg = new Image();
    topMatImg.crossOrigin = "anonymous";
    topMatImg.src = this.Helper.cdn1 + "/products/mats/images/200/" + this.top_mat + ".jpg";

    topMatImg.onload = () => {
      this.ctx.fillStyle = this.ctx.createPattern(topMatImg, "repeat"); //"#FF0000"
      this.ctx.fillRect(this.canvasMatScale.left, this.canvasMatScale.top, this.canvasMatScale.width, this.canvasMatScale.height);
    };

  }

  public getPrice() {
    var self = this;
    var designerMatId = "";
    var popupMat = ""
    var printing_type = 21;

    var topMatVal = this.top_mat;
    var bottomMatVal = this.bottom_mat;
    var trippleMatVal = this.bottom_mat;
    console.log(self.dataMatsArray)
    console.log(this.top_mat, this.bottom_mat)
    this.getDataService.getFilterMatDataJSON().subscribe((data : any)=>{
      self.dataMatsArray = data;
    $.each(self.dataMatsArray, function (index, txt) {
      if (self.dataMatsArray[index].code == self.top_mat) {
        self.topMatId = self.dataMatsArray[index].id;
      }
    });

    $.each(self.dataMatsArray, function (index, txt) {
      if (self.dataMatsArray[index].code == self.bottom_mat) {
        self.bottomMatId = self.dataMatsArray[index].id;
      }
    });

    $.each(self.dataMatsArray, function (index, txt) {
      if (self.dataMatsArray[index].code == self.tripple_mat) {
        self.trippleMatId = self.dataMatsArray[index].id;
      }
    });
  

    if ($("#bottommats").parent().find('input:checkbox').is(':checked') == false) {
      bottomMatVal = "";
      self.bottomMatId = "";
    }

    if ($("#topmats").parent().find('input:checkbox').is(':checked') == false) {
      topMatVal = "";
    }

    if ($("#tripplemats").parent().find('input:checkbox').is(':checked') == false) {
      self.trippleMatId = 0;
    }

    var vgroovshapeId = "";

    if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
      vgroovshapeId = ($("#vgroov_" + this.selectedVgroove).attr('vgroovCode')).split(";")[0];
    }

    var matcode = this.matcode;
    var inside_width = this.customWidth;
    var inside_height = this.customHeight;
    var change_item = "Double mat option Selected";
    designerMatId = "";
    popupMat = "";

    

    if (this.collageOpenings.cutCode != null) {
      var tempArr1 = this.collageOpenings.cutCode.split(';');
      console.log(tempArr1)
      var tempArr2 = tempArr1[0].split(":");
      var prodNameSize = "(" + this.userInput.length + ") " + tempArr2[2];
      var tempArr3 = tempArr2[2].split("x");
      var cuts_width = tempArr3[0];
      var cuts_height = tempArr3[1];
    } else {
      prodNameSize = "(" + this.userInput.length + ") " + $("#customWidth").val() + "x" + $("#customHeight").val();
      cuts_width = 4;
      cuts_height = 6;
    }

    if(this.isImageSize){
      let splitSize = this.isImageSize.split('x');
      cuts_width = splitSize[0];
      cuts_height = splitSize[1];
    }
    var prodNameSize = "Letter Art (" + this.userInput.length + ") " + cuts_width + "x" + cuts_height;
    $('.product-name').html(prodNameSize);
    console.log(self.topMatId, self.bottomMatId);
    var parameters = {
      url: "https=//www.arttoframe.com/price_calc.php",
      app_name: "customframe",
      inside_width: inside_width,
      inside_height: inside_height,
      opening_size: prodNameSize,
      matcode: matcode,
      topmat_width: 2.00,
      bottommat_width: 0.25,
      frame_id: this.activeFrameId,
      current_frame_code: this.frameCode,
      current_liner_frame_code: "",
      glass: "yes",
      fitting: "yes",
      change_item: change_item,
      browserInfo: "Netscape -version=5",
      OSInfo: "windows",
      thirdparty: 0,
      mat1_id: self.topMatId,
      mat2_id: self.bottomMatId,
      mat3_id: "",
      printing: "yes",
      glass_type: self.selectedGlassVal,
      backing_type: 2,
      debug: "debug",
      cut_val: 0,
      color_filter: "",
      printing_type: printing_type,
      hardware_id: this.hardwareID,
      hardware_two_id: this.parentHardwareId,
      hardware_type: this.hardwareID,
      /* vgroov: vgroov,
      vgroovshapecodes: vgroovshapecodes, */
      vgroovshapeId: vgroovshapeId,
      cuts_width: cuts_width,
      cuts_height: cuts_height,
      BoundWidth: "NaN",
      BoundHeight: "NaN",
      popupMat: popupMat,
      appliedMat: "",
      designerMatId: "",
      website: 2,
      show_cost: 1,
      paper_backing: 9,
      letterart: 1
    };

    let priceParam = new HttpParams();

    // priceParam = priceParam.append('url', "https=//www.arttoframe.com/price_calc.php");
    priceParam = priceParam.append('app_name', "customframe");
    priceParam = priceParam.append('inside_width', inside_width);
    priceParam = priceParam.append('inside_height', inside_height);
    // priceParam = priceParam.append('opening_size', prodNameSize);

    var matcodeid = this.matCodeArray[this.userInput.length];

    if(this.selectedMatId){
      matcodeid = this.selectedMatId;
    }
    priceParam = priceParam.append('matcode', matcodeid);
    // priceParam = priceParam.append('topmat_width', '2.00');
    // priceParam = priceParam.append('bottommat_width', '0.25');
    priceParam = priceParam.append('frame_id', this.activeFrameId);
    priceParam = priceParam.append('current_frame_code', this.frameCode);
    // priceParam = priceParam.append('current_liner_frame_code', '');
    priceParam = priceParam.append('glass', 'yes');
    priceParam = priceParam.append('fitting', 'yes');
    priceParam = priceParam.append('change_item', change_item);
    priceParam = priceParam.append('browserInfo', "Netscape -version=5");
    priceParam = priceParam.append('OSInfo', "windows");
    priceParam = priceParam.append('thirdparty', '0');
    priceParam = priceParam.append('mat1_id', self.topMatId);
    priceParam = priceParam.append('mat2_id', self.bottomMatId);
    priceParam = priceParam.append('mat3_id', self.trippleMatId);
    priceParam = priceParam.append('printing', 'yes');
    priceParam = priceParam.append('glass_type', this.selectedGlassVal);
    priceParam = priceParam.append('backing_type', '2');
    priceParam = priceParam.append('debug', 'debug');
    priceParam = priceParam.append('cut_val', '0');
    // priceParam = priceParam.append('color_filter', "");
    // priceParam = priceParam.append('printing_type', printing_type.toString());
    priceParam = priceParam.append('hardware_id', this.hardwareID);
    priceParam = priceParam.append('hardware_two_id', this.parentHardwareId);
    priceParam = priceParam.append('hardware_type', this.hardwareID);
    priceParam = priceParam.append('vgroovshapeId', vgroovshapeId);
    // priceParam = priceParam.append('vgroovshapecodes', vgroovshapecodes);
    priceParam = priceParam.append('cuts_width', cuts_width.toString());
    priceParam = priceParam.append('cuts_height', cuts_height.toString());
    // priceParam = priceParam.append('BoundWidth', "NaN");
    // priceParam = priceParam.append('BoundHeight', "NaN");
    priceParam = priceParam.append('popupMat', popupMat);
    // priceParam = priceParam.append('appliedMat', "");
    // priceParam = priceParam.append('designerMatId', "");
    priceParam = priceParam.append('website', '2');
    priceParam = priceParam.append('show_cost', '1');
    priceParam = priceParam.append('paper_backing', '9');
    priceParam = priceParam.append('letterart', '1');

    self.priceTempArr = this.Helper.getprice(priceParam, this.change_item, parameters, this.onloadGlassArray, 57);

    this.Helper.eventCallback$.subscribe((data) => {
      if(data.price){
        this.totalPrice = Number(data.price);
      } 
    })

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

    // this.getDataService.getPriceAngular(parameters).subscribe(
    //   res => {
    //     $('.price-txt').html('$' + res.data.total);
    //     this.currentPrice = res.data.total;
    //     this.priceTempArr = res.data;

    //     // console.log(self.change_item)
    //     if (self.change_item == 'hardware') {
    //       $('.hdwtitleOptions span').html("Calculating...");

    //       this.getDataService.getHardwarePrice(parameters).subscribe(
    //         res => {
    //           var hardwareDataPrice = JSON.parse(res.data);

    //           for (var key in hardwareDataPrice) {
    //             var hardwarePriceDiff = (hardwareDataPrice[key] - this.currentPrice).toFixed(2);
    //             if ((parseFloat(hardwarePriceDiff) == 0)) {
    //               hardwarePriceDiff = "$ 0";
    //             }
    //             if (key == self.hardwareID) {
    //               hardwarePriceDiff = "$ 0";
    //             } else {
    //               hardwarePriceDiff = hardwarePriceDiff.replace("-", "- $");
    //             }
    //             $('.hardwarePrice_' + key).html((parseFloat(hardwarePriceDiff) > 0 ? "+ $" : "") + hardwarePriceDiff);
    //           }
    //         });
    //       this.change_item = 'Default Configuration';
    //     }
    //   });
    if (this.change_item == 'glass') {
      this.getDataService.getGlassPrice(parameters).subscribe(
        res => {
          var glassDataPrice = JSON.parse(res.data);

          for (var key in glassDataPrice) {
            var glassPriceDiff = (glassDataPrice[key] - this.currentPrice).toFixed(2);

            if ((parseFloat(glassPriceDiff) == 0)) {
              glassPriceDiff = "$ 0";
            } else {
              glassPriceDiff = glassPriceDiff.replace("-", "- $");
            }
            $('.glassPriceDifference_' + key).html((parseFloat(glassPriceDiff) > 0 ? "+ $" : "") + glassPriceDiff);
          }
        });
      this.change_item = 'Default Configuration';
    }


  this.historyPushUrl();
});
  }

  historyPushUrl(){
    let UpdatedRoute = "custom_framing.php?intro=false&letterart="+ this.userInput;
    history.pushState(null, null, "/" + UpdatedRoute);
  }


  public drawImageTempScalePreviewSRC(ImgSrc, i) {
    var self = this;
    let imagelayerCanvas = this.imagelayercanvas.nativeElement;
    let dataImage = imagelayerCanvas.getContext("2d");
    var width = (this.customWidth * this.ppi) * this.scale;
    var height = (this.customHeight * this.ppi) * this.scale;
    imagelayerCanvas.width = width;
    imagelayerCanvas.height = height;
    var img = new Image;
    img.src = ImgSrc as string;

    img.onload = () => {
      self.cutSize = [img.width, img.height];
      self.width_to_height_ratio = img.width / img.height;

      var thumbSize = $("#preview_container").width();
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

      var width = (self.customWidth * self.ppi) * self.scale;
      var height = (self.customHeight * self.ppi) * self.scale;

      imagelayerCanvas.width = width;
      imagelayerCanvas.height = height;

      var Tcanvas = document.createElement("canvas");
      var Tctx = Tcanvas.getContext("2d");
      Tctx.clearRect(0, 0, Tcanvas.width, Tcanvas.height);
      Tcanvas.width = img.width;
      Tcanvas.height = img.height;
      Tctx.drawImage(img, 0, 0, img.width, img.height);
      var scaleImgUp = Tcanvas.toDataURL();

      $("#positionPreview").attr('src', "");
      $("#positionPreview").attr('src', scaleImgUp);

      var Timg = new Image();
      Timg.src = scaleImgUp as string;
      Timg.onload = () => {
        // console.log(i)
        self.selectOpening = i;
        self.cuts[self.selectOpening]['size'] = [Timg.width, Timg.height];
        if(this.selectedColorFilter === ""){
          self.configImageDataUrl[self.selectOpening] = scaleImgUp;
        }
        
        self.setCanvasOpenings();
      }

    }
  }

  public onPageloadGlassId() {
    var self = this;
    self.onPageload = 1;

    self.selectedGlassVal = 23;

    // self.datarr = localStorage.getItem('mats');

    // self.dataMatsArray = JSON.parse(self.datarr);

  }

  public showHardwarePopup() {
    this.hardwarepopupStyle['display'] = 'block';
    // if (this.isCollageApplied == true) {

    //   this.getDataService.getHardware().subscribe(
    //     res => {
    //       this.hardwareData = res;
    //       this.getHardwareData();
    //     });

    // } else {

    //   this.getDataService.getHardware().subscribe(
    //     res => {
    //       this.hardwareData = res;
    this.getHardwareData();
    //     });

    // }

    // this.getPrice();
    // this.arrange();
  }

  public getHardwareData() {
    var self = this;
    this.tempHardwareArray = [];
    this.hardwarepopupStyle['display'] = 'block';
    this.textinputModalStyle['display'] = 'none';
    this.frameModalStyle['display'] = 'none';
    this.matModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';

    this.tabImages['showFrames'] = this.frameInctiveImg;
    this.tabImages['letterArtPopup'] = this.textInctiveImg;
    this.tabImages['showMats'] = this.matInctiveImg;
    this.tabImages['showDecorativeMats'] = this.decorInctiveImg;
    this.tabImages['showGlass'] = this.glassInctiveImg;

    this.getDataService.getHardwareJSON().subscribe((responce:any)=>{
      this.hardwareData = responce;
      self.hardwareID = this.defalt_hardware_id();

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

    // self.hardwareID = this.defalt_hardware_id();

    // setTimeout(function () {
    //   self.setHarwareHTML();
    //   $(".removeHardware").removeClass("hardwareCFOptionactive");
    //   $(".removeHardware").addClass("hardwareCFOption");
    //   $("#hardware_" + self.hardwareID).removeClass("hardwareCFOption");
    //   $("#hardware_" + self.hardwareID).addClass("hardwareCFOptionactive");
    // }, 50);

    this.change_item = "hardware";
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
    console.log(this.parentHardwareId);
    this.getPrice();
  }

  public selectHardware(id, flag) {
    if(flag === true){
      this.parentHardwareId = "";
    }
    this.selectedHardwareId = '';
    this.changeHardwareManually = 1;
    $('.hdwtitleOptions span').html("Calculating...");
    this.hardwareID = id;
    $('.removeHardware').removeClass('hardwareCFOptionactive');
    $('.removeHardware').addClass('hardwareCFOption');
    $('#hardware_' + this.hardwareID).removeClass('hardwareCFOption');
    $('#hardware_' + this.hardwareID).addClass('hardwareCFOptionactive');
    this.change_item = "hardware"
    if(flag === true){
      this.getPrice();
    }
  }

  public addToCart() {

    var self = this;
    self.hardwarepopupStyle['display'] = 'none';
    // console.log(self.cuts)
    this.HideButtonStyle['display'] = 'none';
    // $(".addToCartLoader").show();
    $('#AddingToCart_modal').modal('show');
    this.change_item = "glass";
    this.getPrice();

    if (self.isCollageApplied == false) {
      self.updateZoomValue();
    }

    var topMatVal = self.top_mat;
    var bottomMatVal = self.bottom_mat;
    var trippleMatVal = self.tripple_mat;
    var bottommat_width = "0.25"
    if ($("#bottommats").parent().find('input:checkbox').is(':checked') == false) {
      bottomMatVal = "";
      bottommat_width = "0"
    }

    if ($("#topmats").parent().find('input:checkbox').is(':checked') == false) {
      topMatVal = "";
    }

    if ($("#tripplemats").parent().find('input:checkbox').is(':checked') == false) {
      trippleMatVal = "";
    }

    var sid = $("#atfsid").val();
    var directory = $("#dir_id").val();
    if(this.isImageSize){
      let splitSize = this.isImageSize.split('x');
      this.cuts[0]['w'] = splitSize[0];
      this.cuts[0]['h'] = splitSize[1];
    }
    var prodNameSize = "(" + this.userInput.length + ") " + this.cuts[0]['w'] + "x" + this.cuts[0]['h'];
    var designerMatId = "";
    var popupMat = "";
    var popupMatID = "";
    var popupMatStringCode = "";
    var popupMatStringBottomCode = "";
    var popupMatStringTopCode = "";
    var popupMatStringTopCodeOld = "";
    var popupMatStringCodeOld = "";
    var popupMatStringBottomCodeOld = "";
    var vgroovshapecodes = "";
    var vgroov = "";
    var vgroovBW = "";
    var vgroovBH = "";
    var vgroovDT = "";
    var rotate = $('#myrotate').val();

    if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
      vgroov = "1";
      vgroovshapecodes = $("#vgroov_" + this.selectedVgroove).attr('vgroovCode');

      if (this.isCollageApplied == true) {
        vgroovBW = String(this.customWidth - 2);
        vgroovBH = String(this.customHeight - 2);
      } else {
        vgroovBW = this.customWidth + 2.5;
        vgroovBH = this.customHeight + 2.5;
      }

      vgroovDT = '1';
    }

    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();

    if (this.isCollageApplied == true) {
      var tempArr = self.cuts;
      console.log(tempArr)
      tempArr.forEach(function (item, index) {
        body = body.append('cuts[' + index + '][shape]', self.cuts[index]['shape']);
        body = body.append('cuts[' + index + '][x]', self.cuts[index]['x']);
        body = body.append('cuts[' + index + '][y]', self.cuts[index]['y']);

        if(self.isImageSize){
          let splitSize = self.isImageSize.split('x');
          self.cuts[index]['w'] = splitSize[0];
          self.cuts[index]['h'] = splitSize[1];
        }

        body = body.append('cuts[' + index + '][w]', self.cuts[index]['w']);
        body = body.append('cuts[' + index + '][h]', self.cuts[index]['h']);
        body = body.append('cuts[' + index + '][filter]', self.selectedColorFilter);
        body = body.append('cuts[' + index + '][rotate]', self.cuts[index]['rotate']);
        body = body.append('cuts[' + index + '][zoom]', "1");
        // body = body.append('letterart[' + index + ']', self.cuts[index]['letter']);


        if (self.cuts[index]['image'] != undefined || self.cuts[index]['image'] != "") {
          self.cuts[index]['image'] = self.cuts[index]['image'].replace("https://www.arttoframe.com", "/data/vhosts/arttoframe.com/http");
          body = body.append('cuts[' + index + '][image]', self.cuts[index]['image']);
        } else {
          body = body.append('cuts[' + index + '][image]', "");
        }

        body = body.append('cuts[' + index + '][bottomMatBordercut]', '#FEFEFA');
        body = body.append('cuts[' + index + '][topMatBordercut]', '#FEFEFA');

        var imgCropTop = 0;
        var imgCropLeft = 0;
        var imgCropWidth = 0;
        var imgCropHeight = 0;
        var ppiRatio = 0;

        if (self.cuts[index]['position'] != 0 && self.cuts[index]['cropSelection'] == 0 && self.cuts[index]['image'] != "") {
          body = body.append('cuts[' + index + '][position][0]', self.cuts[index]['position'][0]);
          body = body.append('cuts[' + index + '][position][1]', self.cuts[index]['position'][1]);
          body = body.append('cuts[' + index + '][position][2]', self.cuts[index]['position'][2]);
          body = body.append('cuts[' + index + '][position][3]', self.cuts[index]['position'][3]);
          body = body.append('cuts[' + index + '][letter]', self.cuts[index]['letter']);
          // body = body.append('cuts[' + index + '][size][0]', self.imagePath[index]['imgSize'][0]);
          // body = body.append('cuts[' + index + '][size][1]', self.imagePath[index]['imgSize'][1]);
        }

        if (self.cuts[index]['cropSelection'] != 0 && self.cuts[index]['image'] != "") {
          ppiRatio = self.cuts[index]['cropSelection'].w / self.cuts[index]['w'];
          imgCropTop = self.cuts[index]['cropSelection'].y / ppiRatio;
          imgCropLeft = self.cuts[index]['cropSelection'].x / ppiRatio;
          imgCropWidth = self.cuts[index]['size'][0] / ppiRatio;
          imgCropHeight = self.cuts[index]['size'][1] / ppiRatio;
          body = body.append('cuts[' + index + '][position][0]', String(imgCropWidth));
          body = body.append('cuts[' + index + '][position][1]', String(imgCropHeight));
          body = body.append('cuts[' + index + '][position][2]', String("-" + imgCropLeft));
          body = body.append('cuts[' + index + '][position][3]', String("-" + imgCropTop));
          body = body.append('cuts[' + index + '][size][0]', self.cuts[index]['size'][0]);
          body = body.append('cuts[' + index + '][size][1]', self.cuts[index]['size'][1]);
        }

      });

      var matcodeid = self.matCodeArray[self.userInput.length];
      if(self.selectedMatId){
        matcodeid = self.selectedMatId;
      }
      body = body.set('matcode', matcodeid);
      body = body.set('openingsizes', prodNameSize);
      // body = body.set('lastViewedProductConfig[0][matcode]', this.matcode);
      // body = body.set('framePriceData[change_item]', 'matcode');
      body = body.set('glass[0]', '13.5');
      body = body.set('glass[1]', '15.5');

    } else {
      body = body.set('cuts[0][position][0]', this.imgPosition[0]);
      body = body.set('cuts[0][position][1]', this.imgPosition[1]);
      body = body.set('cuts[0][position][2]', this.imgPosition[2]);
      body = body.set('cuts[0][position][3]', this.imgPosition[3]);
      body = body.set('cuts[0][zoom]', this.imgPosition[4]);
      body = body.set('cuts[0][size][0]', this.imgPosition[5]);
      body = body.set('cuts[0][size][1]', this.imgPosition[6]);
      body = body.set('cuts[0][size][mime]', "image/jpeg");
      body = body.set('cuts[0][shape] ', '1');
      body = body.set('cuts[0][y]', "2.00");
      body = body.set('cuts[0][x]', "2.00");
      body = body.set('cuts[0][w]', this.customWidth);
      body = body.set('cuts[0][h]', this.customHeight);
      body = body.set('cuts[0][filter]', this.selectedColorFilter);
      body = body.set('cuts[0][rotate]', rotate);
      body = body.set('cuts[0][image]', this.mainImageUrl);
      body = body.set('cuts[0][bottomMatBordercut]', '#FEFEFA');
      body = body.set('cuts[0][topMatBordercut]', '#Array');
      body = body.set('cuts[0][thirdMatBordercut]', '#FEFEFA');
      var matcodeid2 = self.matCodeArray[self.userInput.length];
      if(self.selectedMatId){
        matcodeid = self.selectedMatId;
      }
      body = body.set('matcode', matcodeid2);
      body = body.set('openingsizes', prodNameSize);
      // body = body.set('lastViewedProductConfig[0][matcode]', '3');
      // body = body.set('framePriceData[change_item]', 'Single mat option Selected');
      body = body.set('glass[0]', '13.5');
      body = body.set('glass[1]', '15.5');
      body = body.set('glass[outsidewidth]', this.outSideWidth);
      body = body.set('glass[outsideheight]', this.outSideHeight);
      body = body.set('glass[insidewidth]', this.customWidth + 4);
      body = body.set('glass[insideheight]', this.customHeight + 4);
      body = body.set('glass[finishedwidth]', this.customWidth + 6);
      body = body.set('glass[finishedheight]', this.customHeight + 6);
      body = body.set('glass[finalizedwidth]', this.customWidth + 6.5);
      body = body.set('glass[finalizedheight]', this.customHeight + 6);
      body = body.set('glass[frameWidth]', '1.25');
    }

    body = body.set('isWordCutOutFrame', 'false');
    body = body.set('isMultipleOpenings', 'false');
    body = body.set('cutOutWord', '');
    body = body.set('ppi', this.ppi);
    body = body.set('swatch', '90');
    body = body.set('lipwidth', this.activeFrameLipWidth);
    body = body.set('directory', directory);
    body = body.set('allow_customtext', '1');
    body = body.set('imagescale', '1');
    body = body.set('mat_width', this.matWidth);
    body = body.set('linethick', '0.25');
    // body = body.set('lastViewedProductConfig[0][current_width]', this.customWidth);
    // body = body.set('lastViewedProductConfig[0][current_height]', this.customHeight);
    // body = body.set('lastViewedProductConfig[0][framecode]', this.frameCode);
    // body = body.set('lastViewedProductConfig[0][color1id]', topMatVal);
    // body = body.set('lastViewedProductConfig[0][color2id]', bottomMatVal);
    // body = body.set('lastViewedProductConfig[0][color3id]', '');
    // body = body.set('lastViewedProductConfig[0][set_top_mat]', '1');
    // body = body.set('lastViewedProductConfig[0][set_bottom_mat]', '1');
    // body = body.set('lastViewedProductConfig[0][loaded]', 'true');
    body = body.set('lastViewedProductConfigId', 'false');
    body = body.set('version', '82');
    body = body.set('myrotate', '0');
    body = body.set('current_height', this.customHeight);
    body = body.set('collageOpening[outsidewidth]', this.customWidth);
    body = body.set('collageOpening[outsideheight]', this.customHeight);
    body = body.set('vgroov', vgroov ? vgroov : "0");
    body = body.set('vgroovshapecodes', vgroovshapecodes);
    body = body.set('vgroovshapecodesold', vgroovshapecodes);
    body = body.set('vgroov_BoundWidth', vgroovBW);
    body = body.set('vgroov_BoundHeight', vgroovBH);
    body = body.set('matDist', '0.25');
    body = body.set('vgroov_DT', '0.5');
    body = body.set('vgrooveDT', vgroovDT);
    body = body.set('vgroovset', '1');
    body = body.set('mouseOverLinerFrameCode', '');
    body = body.set('linerframeset', '0');
    body = body.set('linerFrameWidth', '');
    body = body.set('linerFrameLipWidth', '');
    body = body.set('designerMatId', designerMatId);
    body = body.set('popupMatID', popupMatID);
    body = body.set('popupMat', '1');
    body = body.set('appliedMat', '');
    body = body.set('popupMat_appliedMat', '');
    body = body.set('popupMatStringBottomCode', popupMatStringBottomCode);
    body = body.set('popupMatStringTopCode', popupMatStringTopCode);
    body = body.set('linerFrameID', '');
    body = body.set('popupmatbottomlinethick', '0.25');
    body = body.set('popupmattopmatwidth', '2.00');
    body = body.set('designer_mat', '0');
    body = body.set('popupMatFlag', '0');
    body = body.set('popupMatStringTopCodeOld', popupMatStringTopCodeOld);
    body = body.set('popupMatStringCodeOld', popupMatStringCodeOld);
    body = body.set('popupMatStringCode', popupMatStringCode);
    body = body.set('popupMatStringBottomCodeOld', popupMatStringBottomCodeOld);
    body = body.set('popupMat_openingWidth', this.customWidth);
    body = body.set('popupMat_openingHeight', this.customHeight);
    // body = body.set('framePriceData[url]', 'https://www.arttoframe.com/price_calc.php');
    // body = body.set('framePriceData[app_name]', 'customframe');
    // body = body.set('framePriceData[inside_width]', this.priceTempArr['inside_width']);
    // body = body.set('framePriceData[inside_height]', this.priceTempArr['inside_height']);
    // body = body.set('framePriceData[opening_size]', prodNameSize);
    // body = body.set('framePriceData[matcode]', this.matcode);
    // body = body.set('framePriceData[topmat_width]', '2.00');
    // body = body.set('framePriceData[bottommat_width]', bottommat_width);
    // body = body.set('framePriceData[frame_id]', this.activeFrameId);
    // body = body.set('framePriceData[current_frame_code]', this.frameCode);
    // body = body.set('framePriceData[current_liner_frame_code]', '');
    // body = body.set('framePriceData[glass]', 'yes');
    // body = body.set('framePriceData[fitting]', 'yes');
    // body = body.set('framePriceData[browserInfo]', 'Netscape -version=5');
    // body = body.set('framePriceData[OSInfo]', 'MacOS');
    // body = body.set('framePriceData[thirdparty]', '0');
    // body = body.set('framePriceData[mat1_id]', '20');
    // body = body.set('framePriceData[mat2_id]', '');
    // body = body.set('framePriceData[mat3_id]', '');
    // body = body.set('framePriceData[printing]', 'yes');
    // body = body.set('framePriceData[glass_type]', '14');
    // body = body.set('framePriceData[backing_type]', '2');
    // body = body.set('framePriceData[debug]', 'debug');
    // body = body.set('framePriceData[cut_val]', '0');
    // body = body.set('framePriceData[color_filter]', '');
    // body = body.set('framePriceData[printing_type]', '21');
    // body = body.set('framePriceData[hardware_id]', this.hardwareID);
    // body = body.set('framePriceData[hardware_type]', this.hardwareID);
    // body = body.set('framePriceData[vgroov]', vgroov);
    // body = body.set('framePriceData[vgroovshapecodes]', vgroovshapecodes);
    // body = body.set('framePriceData[cuts_width]', this.customWidth);
    // body = body.set('framePriceData[cuts_height]', this.customHeight);
    // body = body.set('framePriceData[BoundWidth]', 'NaN');
    // body = body.set('framePriceData[BoundHeight]', 'NaN');
    // body = body.set('framePriceData[popupMat]', '1');
    // body = body.set('framePriceData[appliedMat]', '');
    // body = body.set('framePriceData[designerMatId]', popupMatID);
    // body = body.set('framePriceData[paper_backing]', '9');
    // body = body.set('framePriceData[website]', '2');
    // body = body.set('framePriceData[show_cost]', '1');
    // body = body.set('price[numShippingDay]', this.priceTempArr['numShippingDay']);
    body = body.set('price[total]', this.totalPrice);
    body = body.set('price[additionalPriceInDollar]', '');
    body = body.set('price[ships_in_days]', this.priceTempArr['ships_in_days']);
    body = body.set('price[frame]', this.priceTempArr['frame']);
    body = body.set('price[glass]', this.priceTempArr['glass']);
    body = body.set('price[glassPriceV2]', this.priceTempArr['glassPriceV2']);
    body = body.set('price[topMatPriceV2]', this.priceTempArr['topMatPriceV2']);
    // body = body.set('price[paper]', this.priceTempArr['paper']);
    body = body.set('price[base_price]', this.priceTempArr['base_price']);
    body = body.set('price[pricecalc_discount]', this.priceTempArr['pricecalc_discount']);
    body = body.set('price[discounted_price]', this.priceTempArr['discounted_price']);
    body = body.set('price[vgroovPrice]', this.priceTempArr['vgroovPrice']);
    body = body.set('price[designerMatPrice]', this.priceTempArr['designerMatPrice']);
    body = body.set('price[framePriceV2]', this.priceTempArr['framePriceV2']);
    // body = body.set('price[paperPriceV2]', this.priceTempArr['paperPriceV2']);
    body = body.set('price[is_standard_size]', this.priceTempArr['is_standard_size']);
    body = body.set('price[frame_cost_price]', this.priceTempArr['frame_cost_price']);
    // body = body.set('price[frame_cost_only]', this.priceTempArr['frame_cost_only']);
    body = body.set('price[glass_curve_price]', this.priceTempArr['glass_curve_price']);
    // body = body.set('price[time_factor][times_factor]', this.priceTempArr['time_factor'].times_factor);
    body = body.set('price[product_time_factor]', this.priceTempArr['product_time_factor']);
    body = body.set('price[cost_base_price]', this.priceTempArr['cost_base_price']);
    body = body.set('price[glass_cost_price]', this.priceTempArr['glass_cost_price']);
    // body = body.set('price[fitting_cost_price]', this.priceTempArr['fitting_cost_price']);
    body = body.set('price[mat1_cost_price]', this.priceTempArr['mat1_cost_price']);
    // body = body.set('price[printing_cost_price]', this.priceTempArr['printing_cost_price']);
    body = body.set('price[hardware_cost_price]', this.priceTempArr['hardware_cost_price']);
    body = body.set('price[personalized_cost_glass]', this.priceTempArr['personalized_cost_glass']);
    body = body.set('price[paper_backing_cost_price]', this.priceTempArr['paper_backing_cost_price']);
    body = body.set('price[backing_cost_price]', this.priceTempArr['backing_cost_price']);
    body = body.set('price[design_charge]', this.priceTempArr['design_charge']);
    body = body.set('price[inside_width]', this.priceTempArr['inside_width']);
    body = body.set('price[inside_height]', this.priceTempArr['inside_height']);
    body = body.set('price[outside_width]', this.priceTempArr['outside_width']);
    body = body.set('price[outside_height]', this.priceTempArr['outside_height']);
    body = body.set('price[box_price]', this.priceTempArr['box_price']);
    body = body.set('price[box_name]', this.priceTempArr['box_name']);
    body = body.set('price[box_width]', this.priceTempArr['box_width']);
    body = body.set('price[box_length]', this.priceTempArr['box_length']);
    body = body.set('price[box_height]', this.priceTempArr['box_height']);
    body = body.set('price[box_number]', this.priceTempArr['box_number']);
    body = body.set('price[pallet_qty]', this.priceTempArr['pallet_qty']);
    body = body.set('price[box_weight]', this.priceTempArr['box_weight']);
    // body = body.set('price[actual_item_weight]', this.priceTempArr['actual_item_weight']);
    body = body.set('price[product_weight]', this.priceTempArr['product_weight']);
    body = body.set('price[production_cost]', this.priceTempArr['production_cost']);
    body = body.set('price[cost]', this.priceTempArr['cost']);
    body = body.set('price[frame_time_factor]', this.priceTempArr['frame_time_factor']);
    // body = body.set('price[amazon_shipping_cost]', '0');
    body = body.set('price[mat_base_price2]', this.priceTempArr['mat_base_price2']);
    body = body.set('price[mat_base_price1]', this.priceTempArr['mat_base_price1']);
    body = body.set('price[mat_base_price3]', this.priceTempArr['mat_base_price3']);
    body = body.set('price[price]', this.priceTempArr['price']);
    body = body.set('price[times_cost]', this.priceTempArr['times_cost']);
    // body = body.set('price[additional_cost_price]', this.priceTempArr['additional_cost_price']);
    // body = body.set('price[additional_cost_by_dollor_or_per]', this.priceTempArr['additional_cost_by_dollor_or_per']);
    body = body.set('price[pricebeforepartner]', this.priceTempArr['pricebeforepartner']);
    body = body.set('price[price_canada]', this.priceTempArr['price_canada']);
    body = body.set('price[keywords]', '');
    console.log(this.priceTempArr)
    // Added new price params on 13th sept 2022
    body = body.set('price[3_base_price]', this.priceTempArr['3_base_price']);
    body = body.set('price[3_cost_price]', this.priceTempArr['3_cost_price']);
    body = body.set('price[3_material_cost]', this.priceTempArr['3_material_cost']);
    body = body.set('price[3_time_factor]', this.priceTempArr['3_time_factor']);
    body = body.set('price[3P_time_cost]', this.priceTempArr['3P_time_cost']);
    body = body.set('price[ad_margin_limit]', this.priceTempArr['ad_margin_limit']);
    body = body.set('price[amazon_shipping_template]', this.priceTempArr['amazon_shipping_template']);
    body = body.set('price[atf_cost]', this.priceTempArr['atf_cost']);
    body = body.set('price[backing_material_cost]', this.priceTempArr['backing_material_cost']);

    body = body.set('price[backing_time_factor]', this.priceTempArr['backing_time_factor']);
    body = body.set('price[bottomMatPriceV2]', this.priceTempArr['bottomMatPriceV2']);
    body = body.set('price[box_query]', this.priceTempArr['box_query']);
    body = body.set('price[calculated_times_cost]', this.priceTempArr['calculated_times_cost']);
    body = body.set('price[discount]', this.priceTempArr['discount']);
    body = body.set('price[frame_material_cost]', this.priceTempArr['frame_material_cost']);
    body = body.set('price[free_shipping_cost]', this.priceTempArr['free_shipping_cost']);
    body = body.set('price[glass_curve_material_cost]', this.priceTempArr['glass_curve_material_cost']);
    body = body.set('price[glass_curve_time_factor]', this.priceTempArr['glass_curve_time_factor']);

    body = body.set('price[glass_material_cost]', this.priceTempArr['glass_material_cost']);
    body = body.set('price[glass_time_factor]', this.priceTempArr['glass_time_factor']);
    body = body.set('price[hardware_material_cost]', this.priceTempArr['hardware_material_cost']);
    body = body.set('price[hardware_time_factor]', this.priceTempArr['hardware_time_factor']);
    body = body.set('price[item_weight]', this.priceTempArr['item_weight']);
    body = body.set('price[mat_material_cost1]', this.priceTempArr['mat_material_cost1']);
    body = body.set('price[mat_material_cost2]', this.priceTempArr['mat_material_cost2']);
    body = body.set('price[mat1_time_factor]', this.priceTempArr['mat1_time_factor']);
    body = body.set('price[mat2_cost_price]', this.priceTempArr['mat2_cost_price']);

    body = body.set('price[mat2_time_factor]', this.priceTempArr['mat2_time_factor']);
    body = body.set('price[paper_backing_material_cost]', this.priceTempArr['paper_backing_material_cost']);
    body = body.set('price[paper_backing_time_factor]', this.priceTempArr['paper_backing_time_factor']);
    body = body.set('price[shipping_template]', this.priceTempArr['shipping_template']);
    body = body.set('price[shipping_time]', this.priceTempArr['shipping_time']);
    body = body.set('price[time_factor]', this.priceTempArr['time_factor']);
    body = body.set('price[mat_material_cost2]', this.priceTempArr['mat_material_cost2']);
    body = body.set('price[mat1_time_factor]', this.priceTempArr['mat1_time_factor']);
    body = body.set('price[mat2_cost_price]', this.priceTempArr['mat2_cost_price']);


    // Added code for glass data on 13th sept
    var finishedwidth : any = 10;
    var finishedHeight : any = 12;
    if ($("#frame_" + this.frameCode).attr('data-width') != undefined) {
      finishedwidth = parseFloat(this.outSideWidth) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
      finishedHeight = parseFloat(this.outSideHeight) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
    }

    body = body.set('glass[finalizedwidth]', "14.5");
    body = body.set('glass[finalizedheight]', "16.5");
    body = body.set('glass[finishedheight]', finishedHeight);
    body = body.set('glass[finishedwidth]', finishedwidth);
    body = body.set('glass[frameLipWidth]', '0.25');
    body = body.set('glass[frameWidth]', '1.25');
    body = body.set('glass[insideheight]', this.customHeight);
    body = body.set('glass[insidewidth]', this.customWidth);
    body = body.set('glass[outsideheight]', finishedHeight);
    body = body.set('glass[outsidewidth]', finishedwidth);


    body = body.set('AccountName', 'ArtToFrames - CF Angular');
    body = body.set('user_sid', sid);
    body = body.set('mat_id', this.matcode);
    body = body.set('frame_code', this.frameCode);

    
    

    

    body = body.set('color1_id', topMatVal);

    if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
      body = body.set('color2_id', bottomMatVal);
    }

    if ($("#tripplemats").parent().find('input:checkbox').is(':checked') == true) {
      body = body.set('color2_id', trippleMatVal);
      body = body.set('color3_id', bottomMatVal);
    }

    
    body = body.set('border', '0.25');
    // body = body.set('paper_id', '21');
    body = body.set('backing_id', '2');
    body = body.set('glass_id', this.selectedGlassVal);
    body = body.set('hardware_id', this.hardwareID);
    body = body.set('hardware_two_id', this.parentHardwareId);
    body = body.set('current_width', this.customWidth);
    body = body.set('cutImageUploaded', 'true');
    body = body.set('free_shipping', '0');
    body = body.set('offer_id', '0');
    body = body.set('image_type', '');
    body = body.set('pattern_id', '');
    body = body.set('top_width', '2.00');
    body = body.set('bottom_width', '2.00');
    body = body.set('left_width', '2.00');
    body = body.set('right_width', '2.00');
    body = body.set('desktopVersion', '6');
    body = body.set('isLetterArt', this.userInput);
    // body = body.set('color3_id', '');
    body = body.set('wordcutout', 'false');
    body = body.set('cutoutword', '');
    body = body.set('diplomaFrame', '0');
    body = body.set('page_type', 'M');
    // body = body.set('quantity', $('.Qty_cls').val());
    // console.log(body)

    setTimeout(function () {
      self.Helper.addtocart(body, self.tempCanvas.nativeElement, 48);

      /* self.http.post("https://www.arttoframe.com/custom_framing/preview/actions/addToCart_dev_ng.php", body, {
        headers: myheader
      }).subscribe(response => {

        if (response) {
          self.getSVGToPNG(response);
          // console.log("POST addToCart Request is successful,");
          // document.location.href = "https://www.arttoframe.com/cart";
          // $('#AddingToCart_modal').modal('hide');
          // $('#AddingToCart_success').modal('show');
          // $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[1])) + 1).toString()))
        } else {
          alert("Something went wrong...");
        }
      },

        error => {
          alert("Something went wrong...");
          console.log("POST addToCart error");
        }); */

    }, 100);
  }

  public confirmSizeE() {
    // console.log("confirmSizeE")
    this.onLoadGlassFlag = 1;
    this.cropFlagOpening = 1;
    this.customWidth = $("#customWidth").val();
    this.customHeight = $("#customHeight").val();

    if (this.isCollageApplied == true) {
      $("#customWidth").val(this.customWidth);
      $("#customHeight").val(this.customHeight);
    } else {

      if (this.customWidth >= 3 && this.customWidth <= 36) {
        $("#customWidth").val(this.customWidth);
      } else {
        console.log("reset dsfsdf=" + this.customWidth);
        this.customWidth = 4;
        this.customHeight = 6;
        $("#customWidth").val(this.customWidth);
      }

      if (this.customHeight >= 3 && this.customHeight <= 36) {
        $("#customHeight").val(this.customHeight);
      } else {
        console.log("reset hdsft=" + this.customHeight);
        this.customWidth = 4;
        this.customHeight = 6;
        $("#customHeight").val(this.customHeight);
      }

    }

    // var prodNameSize = 'LETTER ART';
    // var prodNameSize = "LETTER ART (" + this.userInput.length + ") 4x6";
    // setTimeout(() => {
    // }, 200);
    // $('.product-name').html(prodNameSize);
    console.log("Arrange 1")
    this.arrange();
    // this.getPrice();
  }

  public changeMat(e) {
    this.isSelectedMatNotFound = true;
    console.log(this.isSelectedMatNotFound)
    this.activeTab = $(".disabled_tab.active").attr('data-tab');
    console.log(this.activeTab)
    if (this.activeTab == "nomats") {
      if ($("#nomats").parent().find('input:checkbox').is(':checked') == true) {
        this.matWidth = 0;
        $("#innerlayer-canvas").css("display", "none");
      }
    }

    if (this.activeTab == "top") {
      if ($("#topmats").parent().find('input:checkbox').is(':checked') == true) {
        this.matWidth = 2;
        this.top_mat = e;
      }
    }

    if (this.activeTab == "bottom") {
      if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.bottom_mat = e;
      }
    }

    if (this.activeTab == "tripple") {
      if ($("#tripplemats").parent().find('input:checkbox').is(':checked') == true) {
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.tripple_mat = e;
      }
    }

    this.selected_mat = "" + e;
    this.TopMatTitle = e.name;
    console.log(this.selected_mat)
    // this.arrange();
    this.confirmSizeE();

    //if (this.activeTab == "nomats") {
    // this.confirmSizeE();
    //} else {
    //this.applyChanges();
    //}

    if (this.isCollageApplied == true) {
      console.log("Setrippppp  1")
      this.setSecondMatCollage();
      if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true) {
        this.setThirdMatCollage();
      }
    }
  }

  public clickMats(mat) {
    if (mat == "topmats") {
        this.selected_mat = this.top_mat;
    }

    if (mat == "bottommats") {
        this.selected_mat = this.bottom_mat;
    }

    if (mat == "tripplemats") {
        this.selected_mat = this.tripple_mat;
    }
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

  public selectMat(mat) {
    // this.selectedMatType = mat;
    if (mat == "nomats") {
        $("#topmats, #bottommats").prop('checked', false).removeAttr('checked');
        $("#nomats").prop('checked', true);
        this.matWidth = 0;
        this.activeTab = "nomats";
        this.selected_mat = "";
        $("#innerlayer-canvas").css("display", "none");
    }

    if (mat == "topmats") {
        $("#nomats").prop('checked', false).removeAttr('checked');
        $("#topmats").prop('checked', true);
        this.matWidth = 2;
        this.activeTab = "topmats";
        this.selected_mat = this.top_mat;
      }

    if (mat == "bottommats") {
        $("#nomats").prop('checked', false).removeAttr('checked');
        $("#bottommats,#topmats").prop('checked', true);
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.activeTab = "bottommats";
        this.selected_mat = this.bottom_mat;
    }

    if (mat == "tripplemats") {
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#bottommats, #topmats, #tripplemats").prop("checked", true);
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.activeTab = "tripplemats";
        this.selected_mat = this.tripple_mat;
        this.updateConfiguration()
        this.setCanvasOpenings();
    }
    this.arrange();
    // this.applyChanges();
  }

  public selectMats(mat) {
    this.selectedMatType = mat;
    console.log(this.selectedMatType, '  this.selectedMatType')

    if (mat === "nomats") {
      $("#nomats").prop("checked", true);
      $("#topmats").prop("checked", false);
      $("#bottommats").prop("checked", false);
      $("#tripplemats").prop("checked", false);
      $("#bottommats").attr("disabled", "true");
      $("#topmats").attr("disabled", "true");
      $("#topMatLi").removeClass("active");
      $(".topMatHide").css("display", "none");
      $(".bottomMatHide").css("display", "none");
      $(".trippleMatHide").css("display", "none");
      $("#dropdownWidth").css("width", "105px");
      $("#noMatLi").css("width", "33%");
      $(".noMatLi").css("width", "100%");
      $(".noMatLi").addClass("active");
      $(".topMatLi").removeClass("active");
      $(".bottomMatLi").removeClass("active");
      $(".trippleMatLi").removeClass("active");

    }
    if (mat === "topmats") {
      $("#topMatLi").addClass("active");
      
      $("#nomats").prop("checked", false);
      $("#topmats").prop("checked", true);
      $("#bottommats").prop("checked", false);
      $("#tripplemats").prop("checked", false);
      $("#bottommats").attr("disabled", "true");
      $("#tripplemats").attr("disabled", "true");
      $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
      $(".topMatHide").css("display", "block");
      $(".bottomMatHide").css("display", "none");
      $(".trippleMatHide").css("display", "none");
      $(".noMatLi").removeClass("active");
      $(".topMatLi").addClass("active");
      $(".bottomMatLi").removeClass("active");
      $(".trippleMatLi").removeClass("active");
      $("#topMatLi").css("width", "66%");
      $("#noMatLi").css("width", "33%");
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
      $(".topMatLi").css("width", "100%");
      $("#lbl1Mat").html(
        "SINGLE"
      );
      
    }
    if (mat == "bottommats") {
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

    if (mat == "tripplemats") {
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


    if (mat == "nomats") {
      if ($("#nomats").parent().find('input:checkbox').is(':checked') == true) {
        $("#topmats, #bottommats").prop('checked', false).removeAttr('checked');
        $("#nomats").prop('checked', true);
        this.matWidth = 0;
        this.activeTab = "nomats";
        this.selected_mat = "";
        $("#innerlayer-canvas").css("display", "none");
      } else {
        $("#nomats").prop('checked', false).removeAttr('checked');
        $("#topmats").prop('checked', true);
      }

    }

    if (mat == "topmats") {

      if ($("#topmats").parent().find('input:checkbox').is(':checked') == true) {
        $("#nomats").prop('checked', false).removeAttr('checked');
        $("#topmats").prop('checked', true);
        this.matWidth = 2;
        this.activeTab = "topmats";
        this.selected_mat = this.top_mat;
      } else {
        $("#topmats").prop('checked', false).removeAttr('checked');

        if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
          $("#bottommats").prop('checked', false).removeAttr('checked');
          $("#tripplemats").prop('checked', false).removeAttr('checked');
          $("#fancyCheckbox").prop('checked', false).removeAttr('checked');
        }

        $("#nomats").prop('checked', true);
        this.activeTab = "nomats";
        this.matWidth = 0;
      }

    }

    if (mat == "bottommats") {

      if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
        $("#nomats").prop('checked', false).removeAttr('checked');
        $("#bottommats,#topmats").prop('checked', true);
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.activeTab = "bottommats";
        this.selected_mat = this.bottom_mat;
      } else {

        $("#bottommats").prop('checked', false).removeAttr('checked');
        $("#tripplemats").prop('checked', false).removeAttr('checked');
        $("#fancyCheckbox").prop('checked', false).removeAttr('checked');
        $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
        this.selected_mat = "";
        setTimeout(() => {
          $('.bottomatli').removeClass('active');
          $('topmatli').addClass('active');
        }, 200);
      }

    }

    if (mat == "tripplemats") {
      if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true) {
        $("#nomats").prop("checked", false).removeAttr("checked");
        $("#bottommats, #topmats, #tripplemats").prop("checked", true);
        $("#innerlayer-canvas").css("display", "block");
        this.matWidth = 2;
        this.activeTab = "tripplemats";
        this.selected_mat = this.tripple_mat;
        this.updateConfiguration()
        this.setCanvasOpenings();
      } else {
        $("#tripplemats").prop('checked', false).removeAttr('checked');
        $("#fancyCheckbox").prop('checked', false).removeAttr('checked');
        // $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
        this.selected_mat = "";
        setTimeout(() => {
          $('.tripplematli').removeClass('active');
          $('.bottomatli').addClass('active');
          $('topmatli').addClass('active');
        }, 200);
        this.updateConfiguration()
        this.setCanvasOpenings();
      }
    }
    // console.log("Arrange 2")
    // this.arrange();
    // this.applyChanges();
  }


  public getframeFilterColorsList() {
    
  }
  public getFrameFilterColorsName() {
    var self = this;
    this.frameFilterID = $("#selFrameColor :selected").val();
    this.showFrames("frame");
  }

  public getMatColorFilterData() {

    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('mat_color', this.matFilterID);
    this.http.post<any>("https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getMatFilterDataByColors", body, {
      headers: myheader
    }).subscribe(res => {

      if (res) {
        this.dataMatsArray = [];
        this.dataMatsArray = res.data;
        $(".bxsliderCFMat").scrollLeft(0);
        this.Helper.validateMats(this.top_mat, parseFloat($("#customWidth").val()), parseFloat($("#customHeight").val()), this.isCollageApplied, false);
      } else {
        //console.log("getMatColorFilterData something went wrong...");
      }
    },
      error => {
        //console.log("getMatColorFilterData error");
      });
  }

  public selectMatFilter(id) {
    this.matFilterID = id;
    $('.matFilterCls').removeClass("matfilter-name-active");
    $('.matFilterCls').removeClass("matfilter-name");
    $('.matFilterCls').addClass("matfilter-name");
    $("#matColor_" + id).removeClass("matfilter-name");
    $("#matColor_" + id).addClass("matfilter-name-active");

    // this.datarr = localStorage.getItem('mats');
    this.getFilterMatsData();
    // if (this.matFilterID != 0) {
    //   this.getFilterMatsData();
    // } else {
    //   // this.dataMatsArray = JSON.parse(this.datarr);
    //   this.Helper.validateMats(this.top_mat, parseFloat($("#customWidth").val()), parseFloat($("#customHeight").val()), this.isCollageApplied);
    // }
    $('#colorfilter').modal('hide');
    $('#matModal').modal('show');
    $(".modal-backdrop.in").css('display', 'none');
    $(".frame-hide-btn").css('display', 'block');
    $('#frameModal').modal('hide');
    $('#sizemodal').modal('hide');
    $('#decorModal').modal('hide');
    $('#glassModal').modal('hide');
  }

  // onmoveFn(event){
  //   console.log(event)
  // }

  public getFrameSortData() {

    this.frameSortID = $("#myframe_sortby :selected").val();
    // console.log("frameSortID==" + this.frameSortID)

    if (this.frameSortID == "") {
      // this.datarr = localStorage.getItem('frames');
      // this.OnloadFrames = JSON.parse(this.datarr);
      this.frameModal = true;
      // $("#selFrameColor").val(0);
      this.getFrameFilterColorsName();
      // this.showFrames('frames');
      $(".bxsliderCFWco").scrollLeft(0);
      // console.log("default frames");
      return;
    }
    this.OnloadFrames = this.Helper.getFrameSortData(this.frameSortID, this.OnloadFrames);
    // this.showFrames('frames')
    $(".bxsliderCFWco").scrollLeft(0);
    return;
  }

  public glassPopupToggle(e) {
    $('.glassShowHide ,.confirmGlass').css("display", "none");
    $('.traversing_' + e).toggle();
    $('.traversing_' + e).removeClass('traverse_' + e);
    $('.traverse_' + e).find('.confrim-btn').toggle();
    $('.traverse_' + e).find('.see-more-btn').toggle();
    $('.main-area-glass').css('background', '#DCE9F4');
    $('.main-area-glass').css('border', '1px solid #075CA3');
    $('.glass-name').css('color', '#075CA3');

    if ($(".traversing_" + e).css('display') == "block") {
      $(".confirmGlass").text("CONFIRM");
      $(".selectedGlass_" + this.selectedGlassVal).text("SELECTED");
      $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
      $(".seeMoreBtn_" + this.selectedGlassVal).parent().css("text-align", "left");

      if ($(".seeMoreBtn_" + e).css('display') == "none") {
        $('.traversing_' + e).css("display", "block");
      } else {
        $('.confirmGlass').css("display", "none");
        $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
        $(".seeMoreBtn_" + this.selectedGlassVal).parent().css("text-align", "left");
        $('.traversing_' + e).css("display", "none");
      }
    }

    if ($(".traversing_" + e).css('display') == "none") {
      $(".confirmGlass").text("CONFIRM");
      $(".selectedGlass_" + this.selectedGlassVal).text("SELECTED");
      $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
      $(".seeMoreBtn_" + this.selectedGlassVal).parent().css("text-align", "left");
    }
  }

  public glassPopupConfirmBtn(code) {
    // this.WriteToFile("changed glass : " + code);
    console.log(code)
    this.changeGlassManually = 1;
    $(".confirmGlass").text("CONFIRM");
    $('.applicableGlass_' + this.selectedGlassVal).find('.main-area-glass').removeClass('glass-activecls');
    this.selectedGlassVal = code;
    $(".selectedGlass_" + this.selectedGlassVal).text("SELECTED");
    $(".seeMoreBtn_" + this.selectedGlassVal).hide();
    $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
    var glass_name = $(".applicableGlass_" + this.selectedGlassVal).find('.glass-name').text();
    $("#glass_only_name").text(glass_name);
    $("#glass_plexi_name").text(glass_name);
    $(".glassdetail span").text(glass_name);
    $('#glassPopup').modal('hide');
    
    $("#glazeSliderImage").attr("src", this.Helper.cdn2 + "/products/glaze/new/small/" + this.selectedGlassVal + ".png?v=23")
    this.change_item = "glass";
    this.glassModalStyle['display'] = 'none';
    this.glassPopup['display'] = 'none';
    this.getPrice();
  }

  public showGlass() {
    this.glassModalStyle['display'] = 'block';
    $('#glassModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 30 + 'px')
    this.textinputModalStyle['display'] = 'none';
    this.frameModalStyle['display'] = 'none';
    this.matModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';

    this.tabImages['showGlass'] = this.glassActiveImg;
    this.tabImages['letterArtPopup'] = this.textInctiveImg;
    this.tabImages['showFrames'] = this.frameInctiveImg;
    this.tabImages['showMats'] = this.matInctiveImg;
    this.tabImages['showDecorativeMats'] = this.decorInctiveImg;
    this.HideButtonStyle['display'] = 'block';

    // this.datarr = localStorage.getItem('glass');
    // this.glassArr = JSON.parse(this.datarr);
    this.glassArr.forEach((glass)=>{
      if (glass.code == 114) {
        glass.image = this.Helper.cdn3 + "/products/glaze/new/Plexi-Regular.png";
      }
    })

    if ((this.customWidth >= 16 || this.customHeight >= 20) || (this.customWidth >= 20 || this.customHeight >= 16)) {
      $('.glass_only').css("display", "none");
      $('.glass_only').removeClass("active")
      $('.glass_plexi').addClass("active");
      $('.glass_plexi').css("width", "100%");
      $('.plexiTab_newUI').addClass('plexiRad');

      this.selectedGlassVal = this.getDefaultGlassID();
      var glass_name = $(".applicableGlass_" + this.selectedGlassVal).find('.glass-name').text();
      $("#glass_only_name, #glass_plexi_name").text(glass_name);

      if (glass_name == "") {
        $("#glass_only_name, #glass_plexi_name").text("Regular Plexi Glass");
      } else {
        $("#glass_only_name, #glass_plexi_name").text(glass_name);
      }

      $('.glassdetail span').text(glass_name);
    } else {
      $('.glass_only').css("display", "block");
      $('.glass_plexi').removeClass("active")
      $('.glass_only').addClass("active");
      $('.glass_plexi').css("width", "50%");
      $('.plexiTab_newUI').removeClass('plexiRad');

      this.selectedGlassVal = this.getDefaultGlassID();
      var glass_name = $(".applicableGlass_" + this.selectedGlassVal).find('.glass-name').text();

      /*  if (glass_name == "") {
         $("#glass_only_name, #glass_plexi_name").text("Regular Glass");
       } else {
         $("#glass_only_name, #glass_plexi_name").text(glass_name);
       } */
      $('.glassdetail span').text(glass_name);
    }
    // console.log(this.selectedGlassVal)
    // this.change_item = "glass";
    // this.getPrice();
  }

  public getDefaultGlassID() {
    var self = this;
    var matWidth = self.outSideHeight;
    var matHeight = self.outSideWidth;

    return this.Helper.getDefaultGlassID(this.glassArr, matWidth, matHeight, self.selectedGlassVal, self.changeGlassManually)

    // this.tempSelectedGlassArray = [];
    // console.log(this.glassArr)


    // var tempglassArray = this.glassArr

    // tempglassArray.sort((a, b) => {
    //   return a['code'] - b['code']
    // })

    // for (let item of tempglassArray) {

    //   var glassMaxSize1 = item.max_size1;
    //   var glassMaxSize2 = item.max_size2;

    //   if ((matWidth < glassMaxSize1 && matHeight < glassMaxSize2) || (matWidth < glassMaxSize2 && matHeight < glassMaxSize1)) {
    //     this.tempSelectedGlassArray.push(item);
    //   }
    // }
    // // console.table(this.tempSelectedGlassArray)

    // for (let item of self.tempSelectedGlassArray) {
    //   if (item.code == self.selectedGlassVal && self.changeGlassManually == 1) {
    //     return item.code;
    //   } else if ((item.default_glass == 1 || item.default_plexi == 1) && self.changeGlassManually == 0) {
    //     return item.code;
    //   }
    // }
    // if (self.tempSelectedGlassArray[0] == undefined) {
    //   return self.selectedGlassVal;
    // } else {
    //   return self.tempSelectedGlassArray[0].code;
    // }
  }

  public showGlassPoup() {

    // $('#glassPopup').modal('show');
    this.glassPopup['display'] = 'block';
    if (this.onLoadGlassFlag == 1) {
      this.onLoadGlassFlag = 0;
      this.selectedGlassVal = this.getDefaultGlassID();
      // console.log($(".applicableGlass_" + this.selectedGlassVal).find('.glass-name').text())
      // console.log("============" + this.selectedGlassVal)
      $(".confirmGlass").text("CONFIRM");
      $(".selectedGlass_" + this.selectedGlassVal).text("Selected");
      $(".seeMoreBtn_" + this.selectedGlassVal).hide();
    }
    var glass_name = $(".applicableGlass_" + this.selectedGlassVal).find('.glass-name').text();
    // console.log(this.selectedGlassVal)
    $("#glass_plexi_name").text(glass_name);
    if ($('.glass_only').hasClass('active')) {
      $(".glassType_1").css('display', 'block');
      $(".glassType_2").css('display', 'none');
      $('#glsPopupTitle').html('Choose Your Glass');
    }
    if ($('.glass_plexi').hasClass('active')) {
      $(".glassType_2").css('display', 'block');
      $(".glassType_1").css('display', 'none');
      $('#glsPopupTitle').html('Choose Your Plexi Glass');
    }
    this.setGlassHTML();
    $(".confirmGlass").css("display", "none");
    $(".selectedGlass_" + this.selectedGlassVal).css("display", "block");
    $(".selectedGlass_" + this.selectedGlassVal).text("SELECTED");
    $(".seeMoreBtn_" + this.selectedGlassVal).hide();
    $(".see-more-btn").parent().css("text-align", "right");
    $(".seeMoreBtn_" + this.selectedGlassVal).parent().css("text-align", "left");

    $('.applicableGlass_' + this.selectedGlassVal).find('.main-area-glass').addClass('glass-activecls');
    $('.traversing_' + this.selectedGlassVal).css('display', 'none');
    $(".select-btn").show();
    $(".seeMoreBtn_" + this.selectedGlassVal).hide();

    this.change_item = "glass";
    this.getPrice();
    // this.arrange();
  }

  public setGlassHTML() {

    var glassMaxWidth = this.customWidth + 4; //this.configuration.glass['insidewidth'];
    var glassMaxHeight = this.customHeight + 4; //this.configuration.glass['insideheight'];
    var glassOnlyActive = $('.glass_only').hasClass('active');

    this.glassArr.sort((a, b) => {
      return b['rating'] - a['rating']
    })
    // console.table(this.glassArr)
    for (let item of this.glassArr) {

      var glassMaxSize1 = parseFloat(item.max_size1);
      var glassMaxSize2 = parseFloat(item.max_size2);

      if (((glassMaxWidth < glassMaxSize1 && glassMaxHeight < glassMaxSize2) || (glassMaxWidth > glassMaxSize1 && glassMaxHeight < glassMaxSize1 && glassMaxWidth < glassMaxSize2)) && $(".applicableGlass_" + item.code).css('display') == "block") {

        $(".applicableGlass_" + item.code).css('display', 'block');
      } else {
        $(".applicableGlass_" + item.code).css('display', 'none');
      }
    }
  }

  public setHarwareHTML() {
    var glassMaxWidth = parseFloat(this.customWidth) + 4;
    var glassMaxHeight = parseFloat(this.customHeight) + 4;
    console.log(glassMaxWidth, glassMaxHeight)
    for (let item of this.hardwareData) {
      var glassMaxSize1 = parseFloat(item.max_size1);
      var glassMaxSize2 = parseFloat(item.max_size2);

      if ((glassMaxWidth < glassMaxSize1 && glassMaxHeight < glassMaxSize2) ||
        (glassMaxWidth > glassMaxSize1 && glassMaxHeight < glassMaxSize1 && glassMaxWidth < glassMaxSize2)) {

        $(".hardwareId_" + item.id).css('display', 'block');

      } else {

        $(".hardwareId_" + item.id).css('display', 'none');

      }
    }
  }

  public defalt_hardware_id() {
    // console.log("defalt_hardware_id")

    var self = this;
    var glassMaxWidth = self.outSideHeight;
    var glassMaxHeight = self.outSideWidth;

    // return this.Helper.defalt_hardware_id(this.hardwareData, glassMaxWidth, glassMaxHeight, self.hardwareID, self.changeHardwareManually, this.productCode);
    return this.Helper.defaulthardwareid(this.hardwareData, glassMaxWidth, glassMaxHeight, self.hardwareID, self.changeHardwareManually, 57);


    /* var defalt_id = '52';
    for (let item of this.hardwareData) {

      var glassMaxSize1 = parseFloat(item.max_size1);
      var glassMaxSize2 = parseFloat(item.max_size2);

      if ((glassMaxWidth < glassMaxSize1 && glassMaxHeight < glassMaxSize2) || (glassMaxWidth > glassMaxSize1 && glassMaxHeight < glassMaxSize1 && glassMaxWidth < glassMaxSize2)) {
        this.tempHardwareArray.push(item);
      }
    }
    // console.log(this.tempHardwareArray)
    for (let item of self.tempHardwareArray) {
      if (item.id == self.hardwareID && self.changeHardwareManually == 1) {
        self.tempHardwareArray = [];
        return self.hardwareID;
      } else if (self.changeHardwareManually == 0) {
        this.hardwareID = defalt_id;
        self.tempHardwareArray = [];
        return defalt_id;
      }
    }
    if (self.tempHardwareArray[0] == undefined) {
      self.tempHardwareArray = [];
      return self.hardwareID;
    } else {
      self.tempHardwareArray = [];
      return defalt_id;
    } */
  }
  //remove
  public updateZoomValue() {
    var self = this;
    var areas = $('img#positionPreview').selectAreas('areas');
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
    img_tmp_height = self.cutSize[1];
    img_tmp_width = self.cutSize[0];
    openingWidth = this.customWidth;
    openingHeight = this.customHeight;
    cropZoom = 1;
    imgCropTop = (openingHeight / self.cropped_height) * self.cropped_y;
    imgCropLeft = (openingWidth / self.cropped_width) * self.cropped_x;
    imgCropWidth = (openingWidth / self.cropped_width) * image.width;
    imgCropHeight = (openingHeight / self.cropped_height) * image.height;
    self.cutSize = [image.width, image.height];
    oMW = self.cutSize[0];
    oMH = self.cutSize[1];
    self.imgPosition = [imgCropWidth,
      imgCropHeight,
      "-" + imgCropLeft,
      "-" + imgCropTop,
      1,
      oMW,
      oMH
    ];
  }

  navigateToSearchPage(){

  }

  public showInfoPopup(action) {
    console.log(action)
    if (action == "vgroove") {
      this.infomodalStyle['vgrooveDisplay'] = 'block';
    }

    if (action == "price") {
      console.log("Trueeeee")
      this.infomodalStyle['priceDisplay'] = 'block';
      //$('#infomodal').show();
      $('#infomodal1').modal({
        keyboard: true
      });
      $('.framematerialdetail span').text(this.frameMaterial);
      $('.modal-backdrop').css('display', 'none');
      $('.framecodedetail span').text(this.frameCode);
      $('.framenamedetail span').text($('.fname_' + this.frameCode).html());
      if(this.isImageSize){
        let splitSize = this.isImageSize.split('x');
        this.cuts[0]['w'] = splitSize[0];
        this.cuts[0]['h'] = splitSize[1];
        this.outSideWidth = this.customWidth;
        this.outSideHeight = this.customHeight;
      }
      var prodNameSize = "(" + this.userInput.length + ") " + this.cuts[0]['w'] + "x" + this.cuts[0]['h'];
      // $('.openingsizedetail span').text(this.customWidth + 'x' + this.customHeight);
      
      $('.openingsizedetail span').text(prodNameSize);
      var finishedwidth = 10;
      var finishedHeight = 12;
      if ($("#frame_" + this.frameCode).attr('data-width') != undefined) {
        finishedwidth = parseFloat(this.outSideWidth) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
        finishedHeight = parseFloat(this.outSideHeight) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
      }


      // console.log(this.customWidth)
      // console.log(this.customHeight)
      // console.log(this.frameCode)
      $('.finishedsizedetail span').text(finishedwidth + "x" + finishedHeight);
      $('#popupPrice').html($('.price-txt').html());
      // console.log(this.top_mat)
      // console.log(this.bottom_mat)
      if ($("#nomats").parent().find('input:checkbox').is(':checked') == false) {
        $('.topmatcolordetail span').text($('.matName_' + this.top_mat).html());
        $('.bottommatcolordetail span').text($('.matName_' + this.bottom_mat).html());
        $('.thirdmatcolordetail span').text($('.matName_' + this.tripple_mat).html());
      } else {
        $('.topmatcolordetail span,.bottommatcolordetail span,.thirdmatcolordetail span').text("No mat")
      }
      this.hardwareID = this.defalt_hardware_id();
      // console.log(this.hardwareID)
      if ($('#hardware_' + this.hardwareID).html() != undefined) {
        $('.hardwaredetail span').text($('#hardware_' + this.hardwareID).html().split('<')[0]);
      }
      if ($("#bottommats").parent().find('input:checkbox').is(':checked') == false) {
        $('.bottommatcolordetail span').text("No mat");
      }
      if ($("#tripplemats").parent().find('input:checkbox').is(':checked') == false) {
        $('.thirdmatcolordetail span').text("No mat");
      }

      this.selectedGlassVal = this.getDefaultGlassID();
      var glass_name = $(".applicableGlass_" + this.selectedGlassVal).find('.glass-name').text();
      if (glass_name == '') {
        glass_name = "Regular Glass";
      }
      $(".glassdetail span").text(glass_name);

    }

  }

  public PopupMat(id) {
    console.log("id")
    this.singlePopupMatImg = id;
    $("#fancyCheckbox").prop('checked', true);

    if ($("#fancyCheckbox").parent().find('input:checkbox').is(':checked') == true && this.isCollageApplied == false) {
      this.setPopupMat(id);
      $('#popupmatcanvas').css("display", "block");
      $('#innerlayer-canvas').css("display", "none");
      $('.mat-checkbox-green2').removeClass("fancy_active");
      $('.fancySelect_' + id).addClass("fancy_active");
    } else {
      $('.mat-checkbox-green2').removeClass("fancy_active");
      console.log("Arrange 3")
      this.arrange();
      $('#popupmatcanvas').css("display", "none");
      $('#innerlayer-canvas').css("display", "block");
    }
  }

  public setPopupMat(id) {
    var self = this;
    var popupFlag = 0;

    self.popupMatStringCode = $("#designerMatId_" + id).attr('designCode');
    self.popupMatStringBottomCode = $("#designerMatId_" + id).attr("data-value-double-bottom");
    self.popupMatStringTopCode = $("#designerMatId_" + id).attr("data-value-double-top");
    self.popupMatArr = self.getPopUpMatDesign(self.popupMatStringCode, self.popupMatStringTopCode, self.popupMatStringBottomCode, self.top_mat, self.bottom_mat, "", self.customWidth, self.customHeight);

    let popupmatCanvas = self.popupmatcanvas.nativeElement;
    let popupMatCtx = popupmatCanvas.getContext("2d");

    popupmatCanvas.width = self.popupMatArr.WD * self.scale;
    popupmatCanvas.height = self.popupMatArr.HT * self.scale;

    var popupimg = new Image();
    popupimg.src = self.popupMatArr.svg;

    popupimg.onload = function () {
      $("#svgwd").val(self.popupMatArr.WD);
      $("#svght").val(self.popupMatArr.HT);
      popupMatCtx.clearRect(0, 0, self.popupMatArr.WD, self.popupMatArr.HT);
      popupMatCtx.drawImage(popupimg,
        0, 0,
        self.popupMatArr.WD,
        self.popupMatArr.HT,
        0,
        0,
        self.popupMatArr.WD * self.scale,
        self.popupMatArr.HT * self.scale
      );
    }

    $('#popupmatcanvas').css('display', 'block');
    console.log("Arrange 4")
    self.arrange();
    // self.getPrice();
  }

  public getPopUpMatDesign(popupMatStringCode, popupMatStringTopCode, popupMatStringBottomCode, bottomMatColor, topMatColor, appliedMat, openingWidth, openingHeight) {

    this.matWidthArr = {
      minX: 1.875,
      minY: 2,
      maxX: (openingWidth + 0.125),
      maxY: (openingHeight + 0.125)
    }
    var self = this;
    appliedMat = 2;
    var popupMatStringTopCodeArray = popupMatStringTopCode.split(';');
    var popupMatStringBottomCodeArray = popupMatStringBottomCode.split(';');

    if (openingWidth >= openingHeight) {
      var dist = openingHeight / 7;
    } else {
      var dist = openingWidth / 7;
    }

    var BM = parseFloat(self.linethick) * self.ppi;
    var ST = self.matWidthArr.minX * self.ppi;
    ST = ST + (self.scale * 20);
    var DT = dist * self.ppi;
    var WD = (openingWidth + (self.matWidthArr.minX * 2)) * self.ppi;
    var HT = (openingHeight + (self.matWidthArr.minX * 2)) * self.ppi;
    var svg = '';
    var xpoly, ypoly;
    self.popupMatStringTopCodeArraytmp = popupMatStringTopCodeArray[4].split(' ');
    var tempSTop = 0;

    for (let i = 0; i <= self.popupMatStringTopCodeArraytmp.length - 1; i++) {

      if (self.popupMatStringTopCodeArraytmp[i].indexOf(',') != -1) {
        xpoly = eval(self.popupMatStringTopCodeArraytmp[i].split(',')[0]);
        ypoly = eval(self.popupMatStringTopCodeArraytmp[i].split(',')[1]);
        xpoly = xpoly.toFixed(2);
        ypoly = ypoly.toFixed(2);

        if (tempSTop != 1) {
          svg += " " + xpoly + "," + ypoly + " ";
          tempSTop = 1;
        } else {
          svg += xpoly + "," + ypoly + " ";
        }

      } else {

        if (self.popupMatStringTopCodeArraytmp[i] != '~' && self.popupMatStringTopCodeArraytmp[i] != '|') {
          svg += self.popupMatStringTopCodeArraytmp[i];
          tempSTop = 0;
        }

      }

    }

    var svgBottom = '';
    self.popupMatStringBottomCodeArraytmp = popupMatStringBottomCodeArray[4].split(' ');
    var tempSBottom = 0;

    for (let i = 0; i <= self.popupMatStringBottomCodeArraytmp.length - 1; i++) {

      if (self.popupMatStringBottomCodeArraytmp[i].indexOf(',') != -1) {
        xpoly = eval(self.popupMatStringBottomCodeArraytmp[i].split(',')[0]);
        ypoly = eval(self.popupMatStringBottomCodeArraytmp[i].split(',')[1]);
        xpoly = xpoly.toFixed(2);
        ypoly = ypoly.toFixed(2);

        if (tempSBottom != 1) {
          svgBottom += " " + xpoly + "," + ypoly + " ";
          tempSBottom = 1;
        } else {
          svgBottom += xpoly + "," + ypoly + " ";
        }

      } else {

        if (self.popupMatStringBottomCodeArraytmp[i] != '~' && self.popupMatStringBottomCodeArraytmp[i] != '|') {
          svgBottom += self.popupMatStringBottomCodeArraytmp[i];
          tempSBottom = 0;
        }

      }
    }

    $("#svgpath").attr("d", svg);
    $("#svgpathBottom").attr("d", svgBottom);
    $("#svgpathBorder").attr("d", svg);
    $("#svgpathBottomBorder").attr("d", svgBottom);
    $("#svgId").attr("width", WD);
    $("#svgId").attr("height", HT);
    $("#svgpath").css("fill", 'url(#imgpattern)');
    var svgImageData = document.querySelector('#svgId');
    var img = document.querySelector('#svgimg');
    var svgData = (new XMLSerializer()).serializeToString(svgImageData);
    var svgURL = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgData);
    $("#svgimg").attr("src", svgURL);

    return {
      "svg": svgURL,
      "WD": WD,
      "HT": HT
    };
  }

  /*   public getSVGToPNG(response) {
      var self = this;
      $(".cartImage, .cartImg2").attr('src', 'https://www.arttoframe.com/custom_framing/order/' + response.orderId + '/preview.jpg?' + new Date().getTime());
  
      if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
  
        var resOrderId = response.orderId;
        var SVGEncoded = $("#svgimg").attr('src');
        var svgData = SVGEncoded;
        let canvas = this.tempCanvas.nativeElement;
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
  
          body = body.set('orderId[success]', response['success']);
          body = body.set('orderId[url]', response['url']);
          body = body.set('orderId[condition]', response['condition']);
          body = body.set('orderId[userseesionid]', response['userseesionid']);
          body = body.set('orderId[xml]', response['xml']);
          body = body.set('orderId[orderId]', response['orderId']);
          body = body.set('orderId[id]', response['id']);
          body = body.set('pngData', pngData);
  
          self.http.post("https://www.arttoframe.com/custom_framing/preview/actions/getPngfromSvg_demo.php", body, {
            headers: myheader
          }).subscribe(res => {
  
            $(".cartImage, .cartImg2").attr('src', 'https://www.arttoframe.com/custom_framing/order/' + resOrderId + '/preview.jpg?' + new Date().getTime());
            console.log("POST addToCart Request is successful...from svg");
            // document.location.href = "https://www.arttoframe.com/cart";
            $('#AddingToCart_modal').modal('hide');
            $('#AddingToCart_success').modal('show');
            $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[1])) + 1).toString()))
          });
        }
  
      } else {
  
        $(".cartImage, .cartImg2").attr('src', 'https://www.arttoframe.com/custom_framing/order/' + response.orderId + '/preview.jpg?' + new Date().getTime());
        console.log("POST addToCart Request is successful.............");
        // document.location.href = "https://www.arttoframe.com/cart";
        $('#AddingToCart_modal').modal('hide');
        $('#AddingToCart_success').modal('show');
        $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[1])) + 1).toString()))
      }
    } */

  public vgrooveSwitch() {

    if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
      this.selectedVgroove = 4;
      this.applyVGroove(this.selectedVgroove);
    } else {
      this.selectedVgroove = "";
      this.getPrice();
      $('.mat-checkbox-green2').removeClass("vgroove_active");
      $('#groovecanvas').hide();
    }

  }

  public applyVGroove(id) {
    $("#vgrooveCheckbox").prop('checked', true);

    if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
      this.selectedVgroove = "";
      this.selectedVgroove = id;
      $('.mat-checkbox-green2').removeClass("vgroove_active");
      $('.vgrooveSelect_' + id).addClass("vgroove_active");
      $('#groovecanvas').show()
      this.setVgroove();
      setTimeout(() => {
        console.log("Arrange 5")
        this.arrange();
        // this.getPrice();
      }, 100);
    } else {
      $('#groovecanvas').hide();
    }
  }

  public setVgroove() {
    console.log("Shubh")
    var self = this;
    var stroke = (parseFloat(self.linethick)) + 1;
    var matWidth = self.matWidth;
    var matDist = 0;
    //check
    if (self.isCollageApplied == false) {
      matDist = 0.05;

      if ($("#topmats").parent().find('input:checkbox').is(':checked') == true) {
        matDist = 0.125;
      }

      if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
        matDist = 0.25;
      }
    }

    var vgroovshapecodes = $("#vgroov_" + self.selectedVgroove).attr('vgroovCode');
    var vgroov_BoundWidth = parseFloat(self.customWidth) + matDist + (0.5 * 2);
    var vgroov_BoundHeight = parseFloat(self.customHeight) + matDist + (0.5 * 2);
    console.log(vgroovshapecodes)
    self.vgroovConfigArr = self.getVgroovDesign(vgroovshapecodes, parseFloat(self.customWidth) + matDist, parseFloat(self.customHeight) + matDist);
    var data = encodeURIComponent(self.vgroovConfigArr.svg);
    var img = new Image();
    img.src = "data:image/svg+xml;utf8," + data;
    console.log(img.src)
    var cutWidthX = 2;
    var cutWidthY = 2;
    var frameWidth = ((parseFloat(this.frameWidth) / parseFloat(self.ppi)) / parseFloat(self.scale));
    var vgroovStartX = ((frameWidth + (cutWidthX) - self.vgroovConfigArr.dt / parseFloat(self.ppi) - (matDist / 2)) * parseFloat(self.ppi)) * self.scale;
    var vgroovStartY = ((frameWidth + (cutWidthY) - self.vgroovConfigArr.dt / parseFloat(self.ppi) - (matDist / 2)) * parseFloat(self.ppi)) * self.scale;
    self.vgroovConfigArr.bw += 4;
    self.vgroovConfigArr.bh += 4;

    let grooveCanvas = self.groovecanvas.nativeElement;
    let grooveCtx = grooveCanvas.getContext("2d");

    var adjustemntFactor = 0;

    if (self.isCollageApplied == true) {
      adjustemntFactor = 45;
    }

    img.onload = function () {
      grooveCtx.clearRect(0, 0, self.vgroovConfigArr.bw * self.scale, self.vgroovConfigArr.bh * self.scale);
      grooveCanvas.width = self.vgroovConfigArr.bw * self.scale - adjustemntFactor;
      grooveCanvas.height = self.vgroovConfigArr.bh * self.scale - adjustemntFactor;
      grooveCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight,
        0, 0, (self.vgroovConfigArr.bw * self.scale) - adjustemntFactor, (self.vgroovConfigArr.bh * self.scale) - adjustemntFactor);
    }
  }

  // public getVgroovDesign(vgrooveCode, openingWidth, openingHeight) {
  //   var self = this;
  //   self.vgroovShapeCodesArray = vgrooveCode.split(';');
  //   var vgroov_DT = parseFloat(self.vgroovShapeCodesArray[1]);
  //   var DT = parseFloat(self.vgroovShapeCodesArray[1]) * self.ppi;

  //   if (self.isCollageApplied == true) {
  //     DT = 0.5 * self.ppi;
  //     vgroov_DT = 0.5;
  //   }

  //   var BW = (openingWidth + parseFloat(self.vgroovShapeCodesArray[1]) * 2) * self.ppi;
  //   var vgroov_BoundWidth = openingWidth + parseFloat(self.vgroovShapeCodesArray[1]) + parseFloat(self.vgroovShapeCodesArray[1]);

  //   if (self.isCollageApplied == true) {
  //     var BW = (openingWidth + (0.5 * 2)) * self.ppi;
  //     vgroov_BoundWidth = openingWidth + (0.5 * 2);
  //   }

  //   var BH = (openingHeight + parseFloat(self.vgroovShapeCodesArray[1]) * 2) * self.ppi;
  //   var vgroov_BoundHeight = openingHeight + parseFloat(self.vgroovShapeCodesArray[1]) + parseFloat(self.vgroovShapeCodesArray[1]);

  //   if (self.isCollageApplied == true) {
  //     BH = (openingHeight + (0.5 * 2)) * self.ppi;
  //     vgroov_BoundHeight = openingHeight + (0.5 * 2);
  //   }

  //   var CL = parseFloat(self.vgroovShapeCodesArray[3]) * self.ppi;
  //   var svg = '<svg id="vgroovFrame" xmlns="http://www.w3.org/2000/svg" width="' + (BW + 4) + '" height="' + (BH + 4) + '">';
  //   var svgMain = '';
  //   var svgShadow = '';
  //   var svgShadowUp = '';

  //   for (var i = 4; i <= self.vgroovShapeCodesArray.length - 1; i++) {
  //     svgMain += eval(self.vgroovShapeCodesArray[i].split('x')[0]) + "," + eval(self.vgroovShapeCodesArray[i].split('x')[1]) + " ";
  //     var a = eval(self.vgroovShapeCodesArray[i].split('x')[0]) + 1;
  //     var b = eval(self.vgroovShapeCodesArray[i].split('x')[1]) + 1;
  //     svgShadow += a + "," + b + " ";
  //     var c = eval(self.vgroovShapeCodesArray[i].split('x')[0]) - 0.5;
  //     var d = eval(self.vgroovShapeCodesArray[i].split('x')[1]) - 0.5;
  //     svgShadowUp += c + "," + d + " ";
  //   }

  //   var matCoreColor = "0xFEFEFA";
  //   matCoreColor = matCoreColor.replace("0x", "#");
  //   svg += '<polyline points="' + svgShadowUp + '" style="fill:#00ffff00;stroke:#737373;stroke-width:1" />';
  //   svg += '<polyline points="' + svgShadow + '" style="fill:#00ffff00;stroke:#737373;stroke-width:1" />';

  //   svg += '<polyline id="topLeft" points="' + svgMain + '" style="fill:#00ffff00;stroke:' + matCoreColor + ';stroke-width:1.5" />';
  //   svg += '</svg>';
  //   return {
  //     "svg": svg,
  //     "bw": BW,
  //     "bh": BH,
  //     "dt": DT,
  //   };
  // }

  public getVgroovDesign(vgrooveCode, openingWidth, openingHeight) {
    console.log("Shubh")
    var self = this;
    let matVDist : any = 2;

    let matDist = 2;

    self.vgroovShapeCodesArray = vgrooveCode.split(';');
			// self.configuration.vgroov_DT = parseFloat(matVDist / 4);
			var DT = (matDist / 4) * self.ppi;
      console.log(parseFloat(self.vgroovShapeCodesArray[ 1 ]))
      var BW : any =
      (openingWidth + parseFloat(self.vgroovShapeCodesArray[ 1 ]) * matDist) * self.ppi;
      if (self.isCollageApplied == true) {
        var BW : any = (openingWidth + 0.5 * matDist) * self.ppi;
      }

      var BH : any =
        (openingHeight + parseFloat(self.vgroovShapeCodesArray[ 1 ]) * matDist) * self.ppi;

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

  public selectCollageOpening(e) {
    var self = this;
    self.cuts = [];//set null array
    self.matCodeArray = [];
    self.matCodeArray = {
      0: "undefined",
      1: 632,
      2: 530,
      3: 23,
      4: 14,
      5: 153,
      6: 713,
      7: 375,
      8: 590,
      9: 684,
      10: 685
    }

    var matcodeid = this.matCodeArray[e.length];
    var parameters = {
      letter_art_random: 1,
      letter_art_selectedletters: '',
      matcode: matcodeid
    };



    this.res = this.getDataService.getLetterArtImages(parameters, e)
      .subscribe(
        collageOpenings => {
          self.outSideHeight = collageOpenings.openingCuts['outsideheight'];
          self.outSideWidth = collageOpenings.openingCuts['outsidewidth'];
          // console.log(collageOpenings)
          // console.log(this.activeFrameWidth)

          if(self.isImageSize){
            // let splitSize = self.isImageSize.split('x');
            // self.cuts[0]['w'] = splitSize[0];
            // self.cuts[0]['h'] = splitSize[1];
            self.outSideWidth = self.customWidth;
            self.outSideHeight = self.customHeight;
          }

          self.collageOpenings = {

            cutCode: collageOpenings.openingCuts['cutCode'],
            outsideheight: collageOpenings.openingCuts['outsideheight'],
            outsidewidth: collageOpenings.openingCuts['outsidewidth']

          }
          /*
                  if (collageOpenings.letterImages[0]['url']) {
                    console.log("show preview");
                    $('.mainContainerLoader').css('display', 'none');
                    $('.main-product-preview').css('display', 'block');
                    $('.mainConatiner').css('display', 'block');         
                  }
          
                  setTimeout(function(){
                   console.log("auto show preview");
                    $('.mainContainerLoader').css('display', 'none');
                    $('.main-product-preview').css('display', 'block');
                    $('.mainConatiner').css('display', 'block');
                  },3000);*/

          if(self.selectedColorFilter === ""){
            console.log("fsddddddddddddddddddddddddddddddddddddddddddd")
            self.imagePath = collageOpenings['letterImages'];
            self.imagePathTemp = collageOpenings['letterImages'];
          }
          
          self.collageOpenings = collageOpenings.openingCuts;
          self.canvasSecondMatScaleCollage = [];
          // self.canvasThirdMatScaleCollage = [];
          self.canvasImageScales = [];
          self.matcode = self.matCodeArray[e.length];
          self.isCollageApplied = true;
          this.Helper.getOpeningSize(self.collageOpenings.cutCode, "Letter Art")

          self.confirmSizeE();

          $(this).find('img').attr('src', "https://www.arttoframe.com/custom_framing/design/activemobilethumbNew/" + self.matcode + ".jpeg?activeblue=blue");

          $('#imagelayer-canvas').css("background", "none");
          self.updateMainCanvasSizes();
          this.setCanvasOpenings()
          // self.getPrice();

        });
  }

  public updateMainCanvasSizes() {
    var self = this;
    var opening = [];
    self.cuts = [];

    // if(self.isImageSize){
    //   self.collageOpenings.outsidewidth = self.customWidth;
    //   self.collageOpenings.outsideheight = self.customHeight;
    // }

    self.openingsizes = "";
    var arr1 = self.collageOpenings.cutCode.split(';');
    console.log(self.collageOpenings) 
    
    // console.log("%%%%################%%%%%%")
    // console.log(arr1)
    arr1.forEach(function (item, index) {
      var arr2 = item.split(':');
      var arr3 = arr2[1].split('x');
      var imagePath = "https://www.arttoframe.com" + self.imagePath[index]['url'];
      // var imagePath = "/data/vhosts/arttoframe.com/http" + self.imagePath[index]['url'];

      // var splittedImgUrl = imagePath.replace("https://www.arttoframe.com", "/data/vhosts/arttoframe.com/http");
      // console.log(splittedImgUrl);
      // self.configImageDataUrl[index] = self.imagePath[index]['dataUrl']['dataUrl'];

      if (typeof (self.cuts[index]) == 'undefined') self.cuts[index] = {};

      var arr4 = arr2[2].split('x');
      console.log(arr4)
      if(self.isImageSize === "5x7"){
        arr4 = self.isImageSize.split('x');
        // if(index == 0){
        //   arr3[1] = parseFloat(arr3[1]) + 1;
        // }
        if(index > 0){
          arr3[1] = parseFloat(arr3[1]) + 1;
        }
        if(index > 1){
          arr3[1] = parseFloat(arr3[1]) + 1;
        }
        if(index > 2){
          arr3[1] = parseFloat(arr3[1]) + 1;
        }
      }
      console.log(arr4)
      self.cuts[index]['shape'] = arr2[0];
      self.cuts[index]['y'] = arr3[0];
      self.cuts[index]['x'] = arr3[1];

      
      
      self.cuts[index]['image'] = imagePath;
      self.cuts[index]['w'] = arr4[0];
      self.cuts[index]['h'] = arr4[1];
      self.cuts[index]['size'] = [self.imagePath[index]['imgSize'][0], self.imagePath[index]['imgSize'][1]];
      self.cuts[index]['position'] = 0;
      self.cuts[index]['original_position'] = index;
      self.cuts[index]['cropSelection'] = 0;
      self.cuts[index]['rotate'] = 0;
      self.cuts[index]['letter'] = self.imagePath[index]['letter'];

    });
    this.updateConfiguration();

  }

  public changeSingleImage(res) {

    console.log("----in changeSingleImage----")
    console.log(res)

    var self = this;
    var basePath = "https://www.arttoframe.com"
    var newString = res.image.replace("/data/vhosts/arttoframe.com/http", self.Helper.cdn1);
    self.cuts[self.selectOpening]["image"] = newString;
    // self.updateConfiguration();
    self.cuts[self.selectOpening]['position'] = res.position;
    this.CreateLetterArtCanvas(this.cuts[self.selectOpening], self.selectOpening);
  }

  public updateConfiguration() {
    // console.log("updateConfiguration")
    var self = this;
    for (var i in this.cuts) {
      var imgWidthNew = 0;
      var imgHeightNew = 0;
      var imgTopNew = 0;
      var imgLeftNew = 0;
      var stroke = 0;
      var overlap = 0;
      var swatch : any = this.activeFrameWidth * this.ppi;
      var top = 0;
      var left = 0;
      var width = 0;
      var height = 0;

      if (this.matWidthArr.minX > parseFloat(this.cuts[i]['x']) || this.matWidthArr.minX == 0) {
        this.matWidthArr.minX = parseFloat(this.cuts[i]['x']);
      }

      if (this.matWidthArr.minY > parseFloat(this.cuts[i]['y']) || this.matWidthArr.minY == 0) {
        this.matWidthArr.minY = parseFloat(this.cuts[i]['y']);
      }

      left = (this.cuts[i]['x'] * this.ppi) * this.scale;
      top = (this.cuts[i]['y'] * this.ppi) * this.scale;
      width = (this.cuts[i]['w'] * this.ppi) * this.scale;
      height = (this.cuts[i]['h'] * this.ppi) * this.scale;

      // this.canvasSecondMatScaleCollage[i] = {
      //   top: top,
      //   left: left,
      //   width: width + 8,
      //   height: height + 8,
      // };

      this.canvasSecondMatScaleCollage[i] = {
        top: top + 2,
        left: left + 2,
        width: width - 2,
        height: height - 2,
      };

      this.canvasThirdMatScaleCollage[i] = {
        top: top + 4,
        left: left + 4,
        width: width - 6,
        height: height - 6,
      };

      if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true) {
        this.setThirdMatCollage();
      }


      let thirdMatWidth = (this.cuts[i]['w'] * this.ppi) * this.scale + 1.8 * stroke;
      let thirdMatHeight = (this.cuts[i]['h'] * this.ppi) * this.scale + stroke;

      let thirdMatLeft = (this.cuts[i]['x'] * this.ppi + parseFloat(swatch)) * this.scale - 1.8;
      let thirdMatTop = (this.cuts[i]['y'] * this.ppi + parseFloat(swatch)) * this.scale - 1.8;

      this.canvasThirdMatScale[i] = {
        top: thirdMatTop,
        left: thirdMatLeft,
        width: thirdMatWidth,
        height: thirdMatHeight
      };

      if (this.noMat == 1) {
        imgWidthNew = (((this.cuts[i]['w'] * this.ppi) * this.scale));
        imgHeightNew = ((this.cuts[i]['h'] * this.ppi) * this.scale);
      } else {
        imgWidthNew = ((this.cuts[i]['w'] * this.ppi) * this.scale + (2 * stroke + overlap) * 2);
        imgHeightNew = ((this.cuts[i]['h'] * this.ppi) * this.scale + (2 * stroke + overlap) * 2);

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
          imgWidthNew = (((this.cuts[i]['w'] * this.ppi) * this.scale) - (overlap));
          imgHeightNew = (((this.cuts[i]['h'] * this.ppi) * this.scale) - (overlap));
        } else {
          imgWidthNew = (((this.cuts[i]['w'] * this.ppi) * this.scale) - (overlap));
          imgHeightNew = (((this.cuts[i]['h'] * this.ppi) * this.scale) - (overlap));
        }

        var a = (2 * stroke) + 1;
        imgTopNew = a;
        imgLeftNew = (a + 2.5);
      }

      var cutWidth = (this.cuts[i]['w']) * this.ppi;
      var cutHeight = (this.cuts[i]['h']) * this.ppi;
      this.canvasImageScales[i] = {
        top: imgTopNew,
        left: imgLeftNew,
        width: imgWidthNew - 2,
        height: imgHeightNew - 2,
      };
      // console.log(this.canvasImageScales)
      if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true) {
        
        this.canvasImageScales[i] = {
          top: imgTopNew,
          left: imgLeftNew,
          width: imgWidthNew - 6,
          height: imgHeightNew - 6,
        };
        console.log(this.canvasImageScales)
      }
      // self.drawImageTempScalePreviewSRC(self.configImageDataUrl[i]);
      this.CreateLetterArtCanvas(this.cuts[i], i);
      this.getDefaultGlassID();
    }
    console.log("Setrippppp  2")
    this.setSecondMatCollage();
    if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true) {
      this.setThirdMatCollage();
    }
  }


  public setCanvasOpenings() {

    var self = this;
    var stroke = (parseFloat(self.linethick) * self.ppi) * self.scale;
    var imageIndex = 0;
    var openingSelector = "";

    let imagelayerCanvas = self.imagelayercanvas.nativeElement;

    self.imageLayerCtx = imagelayerCanvas.getContext("2d");
    // imagelayerCanvas.width = (self.framewidth - ((2 * self.activeFrameWidth) + ((0.875 * self.ppi * self.scale) * 2)));
    // imagelayerCanvas.height = (self.frameheight - ((2 * self.activeFrameWidth) + ((1 * self.ppi * self.scale) * 2)));

    imagelayerCanvas.width =
      self.framewidth -
      (2 * self.activeFrameWidth + 0.875 * self.ppi * self.scale * 2);
    imagelayerCanvas.height =
      self.frameheight -
      (2 * self.activeFrameWidth + 1 * self.ppi * self.scale * 2);

    self.imageLayerCtx.beginPath();

    let matsArray = [];
    if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true) {
      matsArray = self.canvasThirdMatScaleCollage
    }
    else{
      matsArray = self.canvasSecondMatScaleCollage
    }
    // console.log(self.canvasImageScales)
    self.canvasImageScales.forEach(function (item, i) {
      // console.log(self.configImageDataUrl[i])
      // if(self.selectedColorFilter != ""){
      //   self.configImageDataUrl[i] = self.imagePath[i]['url'];
      // }
      
      
      // self.canvasSecondMatScaleCollage[i]["top"] = self.canvasSecondMatScaleCollage[i]["top"] + 1;
      // self.canvasSecondMatScaleCollage[i]["left"] = self.canvasSecondMatScaleCollage[i]["left"] + 1;
      
      // self.canvasSecondMatScaleCollage[i]["top"] = self.canvasSecondMatScaleCollage[i]["top"] - 1;
      // item.height = item.height - 5
      // self.configImageDataUrl[i] = self.cuts[i]['image'];
      $('.openingImg').find('img#opening_' + i).attr('src', self.configImageDataUrl[i]).attr('width', item.width).attr('height', item.height);

      openingSelector += '<div class="openingSelector active" id="openingSelector_' + i + '" style="top:' + matsArray[i]['top'] + 'px;left:' + matsArray[i]['left'] + 'px;width:' + self.canvasImageScales[i]['width'] + 'px;height:' + self.canvasImageScales[i]['height'] + 'px; background:transparent; position:absolute;z-index:1000" ></div>';
      $('#openingSelectorContainer').width(imagelayerCanvas.width).height(imagelayerCanvas.height).html(openingSelector);

      var imageResizeData = new Image()
      imageResizeData.src = $('.openingImg').find('img#opening_' + i).attr('src');

      imageResizeData.onload = function () {

        var imgLeft = item.left;
        var imgTop = item.top;
        var ptageScale = 0.30;
        var orgImgWidth = 165;
        var orImgHeight = 185;
        var newHeight = 0;
        var newWidth = 0;
        var width = self.canvasSecondMatScaleCollage[i]['width'];
        var height = self.canvasSecondMatScaleCollage[i]['height'];
        var stroke = 5;
        var imgWidth = 0;
        var imgHeight = 0;

        self.getAspectRatioSizePosition(imageResizeData.width, imageResizeData.height, self.cuts[i]['w'], self.cuts[i]['h'], i);

        self.collagePreview(i);
      }

    });
    // $('#groovecanvas').css('display', 'none');
    if ($("#vgrooveCheckbox").parent().find("input:checkbox").is(":checked") == true) {
      $("#groovecanvas").show();
      this.setVgroove();
    } else {
      $("#groovecanvas").hide();
    }
  }

  public selectedImageForChange() {
    var self = this;
    self.randomImageModalStyle['display'] = 'block';
    setTimeout(function () {
      self.selectOpening = $('.openingSelector.active').attr('id').split('_')[1];
      self.clickedLetter = self.userInput.split('')[self.selectOpening];
      self.getRandomImg();
    }, 10);

  }

  public getRandomImg() {
    var self = this;
    self.randomLetterResult = "";

    $(".randomImagesLoader").css('display', 'block');
    $("#randomImages").css('display', 'none');
    $('#randomImageModal').modal('show');

    this.getDataService.getRandomImages(self.selectOpening, self.clickedLetter)
      .subscribe(res => {
        self.randomLetterResult = res;
        console.log(self.randomLetterResult)
        $(".randomImagesLoader").css('display', 'none');
        $("#randomImages").css('display', 'block');
      });

    this.frameModalStyle['display'] = 'none';
    this.textinputModalStyle['display'] = 'none';
    this.matModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';
    this.HideButtonStyle['display'] = 'block';

    $('.modal-backdrop').css('display', 'none');

  }

  public selectImage(imgId) {
    var self = this;
    $('#randomImageModal').modal('hide');
    this.getDataService.getOriginalImg(self.selectOpening, imgId, self.cuts[self.selectOpening]['w'], self.cuts[self.selectOpening]['h'], self.matcode)
      .subscribe(res => {
        self.changeSingleImage(res);
      });
  }

  public collagePreview(i) {

    var self = this;
    var imgData = new Image();
    imgData.src = self.configImageDataUrl[i];

    let matsArray = [];
    if ($("#tripplemats").parent().find("input:checkbox").is(":checked") == true) {
      matsArray = self.canvasThirdMatScaleCollage
    }
    else{
      matsArray = self.canvasSecondMatScaleCollage
    }

    imgData.onload = function () {
      var framewidthcollage = imgData.width;//self.imgWidth;
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
      // console.log("collagePreview======================")
      scaleN = scale1 * scale2 * scale3 * scale4;
      newW = (((self.cuts[i]['w'] * imgData.width) / self.cuts[i]['position'][0]) * scaleN);
      newH = (((self.cuts[i]['h'] * imgData.height) / self.cuts[i]['position'][1]) * scaleN);
      newX = ((Math.abs(self.cuts[i]['position'][2]) * (newW / scaleN) / self.cuts[i]['w']) * scaleN);
      newY = ((Math.abs(self.cuts[i]['position'][3]) * (newH / scaleN) / self.cuts[i]['h']) * self.newScale);
      self.imageLayerCtx.drawImage(imgData, matsArray[i]['left'], matsArray[i]['top'], self.canvasImageScales[i]['width'], self.canvasImageScales[i]['height']);
      // console.log(self.canvasSecondMatScaleCollage)

      self.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)"
      self.imageLayerCtx.lineWidth = 1;
      self.imageLayerCtx.strokeRect(matsArray[i]['left'], matsArray[i]['top'], matsArray[i]['width'], matsArray['height']);

      /*var stroke = 0.25 * self.scale;
       self.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)"
      self.imageLayerCtx.lineWidth = stroke + 1;
      self.imageLayerCtx.strokeRect(self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasImageScales[i]['width'], self.canvasImageScales[i]['height']); */
    }
    // this.vgrooveSwitch();
  }


  public setSecondMatCollage() {
    var self = this;
    var stroke = (parseFloat(self.linethick) * self.ppi) * self.scale;
    var hoverColor = hoverColor || false;

    let innerlayerCanvas = self.innerlayerCanvas.nativeElement;
    let innerLayerCtx = innerlayerCanvas.getContext("2d");

    innerlayerCanvas.width = (self.framewidth - ((2 * self.activeFrameWidth) + ((0.875 * self.ppi * self.scale) * 2)));
    innerlayerCanvas.height = (self.frameheight - ((2 * self.activeFrameWidth) + ((1 * self.ppi * self.scale) * 2)));
    self.canvasSecondMatScaleCollage.forEach(function (item, i) {

      var html = '<a href="javascript:void(0);" class="settings-upload" id="settings-upload_' + i + '" ><img src="https://www.arttoframe.com/images/up-img-19.png" id="opening_' + i + '" width="' + item.width + '" height="' + item.height + '"></a>';

      $(".openingImg").append(html);
      console.log(self.bottom_mat)
      innerLayerCtx.beginPath();
      var strokeColor = "https://www.arttoframe.com/products/mats/images/200/" + self.bottom_mat + ".jpg";
      var strokeColorImg = new Image();
      strokeColorImg.src = strokeColor;
      console.log(strokeColor)
      innerLayerCtx.rect(item.left, item.top, item.width, item.height);
      innerLayerCtx.fillStyle = innerLayerCtx.createPattern(strokeColorImg, "repeat");
      innerLayerCtx.fill();

      innerLayerCtx.lineWidth = (stroke + 2) * self.scale;
      innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(strokeColorImg, "repeat");

      innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);
      innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);

      innerLayerCtx.beginPath();
      innerLayerCtx.lineWidth = stroke;

      color = $("#color2_" + self.selectedColor2).attr("data-src");


      var color = "https://www.arttoframe.com/products/mats/images/200/" + self.bottom_mat + ".jpg";
      var bottomColorImg = new Image();
      bottomColorImg.src = color;

      innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(bottomColorImg, "repeat");
      innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);

    });
  }

  setThirdMatCollage(){
    console.log("Third mat")
    var self = this;
    var stroke = (parseFloat(self.linethick) * self.ppi) * self.scale;
    var hoverColor = hoverColor || false;

    let innerlayerCanvas = self.innerlayerCanvas.nativeElement;
    let innerLayerCtx = innerlayerCanvas.getContext("2d");

    // let imagelayerCanvas = self.imagelayercanvas.nativeElement;
    // this.imageLayerCanvas.width = this.frameCanvas.width - ((2 * this.frameWidth) + ((matWidthX * this.configuration.ppi * this.scale) * 2) - (((2 * stroke) * 2) + 2.5));
    // this.imageLayerCanvas.height = this.frameCanvas.height - ((2 * this.frameWidth) + ((matWidthY * this.configuration.ppi * this.scale) * 2) - (((2 * stroke) * 2) + 2.5));
    // this.innerlayerCanvas.css('top', this.frameWidth + (matWidthY * this.configuration.ppi * this.scale) - (2 * stroke))
    // this.innerlayerCanvas.css('left', this.frameWidth + (matWidthX * this.configuration.ppi * this.scale) - (2 * stroke))
    // Above from desktop

    // innerlayerCanvas.width = (self.framewidth - ((2 * self.activeFrameWidth) + ((0.875 * self.ppi * self.scale) * 2)));
    // innerlayerCanvas.height = (self.frameheight - ((2 * self.activeFrameWidth) + ((1 * self.ppi * self.scale) * 2)));
    self.canvasThirdMatScaleCollage.forEach(function (item, i) {

      var html = '<a href="javascript:void(0);" class="settings-upload" id="settings-upload_' + i + '" ><img src="https://www.arttoframe.com/images/up-img-19.png" id="opening_' + i + '" width="' + item.width + '" height="' + item.height + '"></a>';

      $(".openingImg").append(html);

      innerLayerCtx.beginPath();
      var strokeColor = "https://www.arttoframe.com/products/mats/images/200/" + self.tripple_mat + ".jpg";
      var strokeColorImg = new Image();
      strokeColorImg.src = strokeColor;

      innerLayerCtx.rect(item.left, item.top, item.width, item.height);
      innerLayerCtx.fillStyle = innerLayerCtx.createPattern(strokeColorImg, "repeat");
      innerLayerCtx.fill();

      innerLayerCtx.lineWidth = (stroke + 2) * self.scale;
      innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(strokeColorImg, "repeat");

      innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);
      innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);

      // innerLayerCtx.strokeRect(item.left + 5, item.top + 5, item.width - (5 * 2), item.height - (5 * 2));
      // innerLayerCtx.strokeRect(item.left + 5, item.top + 5, item.width - (5 * 2), item.height - (5 * 2));

      innerLayerCtx.beginPath();
      innerLayerCtx.lineWidth = stroke;

      color = $("#color2_" + self.selectedColor2).attr("data-src");


      var color = "https://www.arttoframe.com/products/mats/images/200/" + self.tripple_mat + ".jpg";
      var bottomColorImg = new Image();
      bottomColorImg.src = color;

      innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(bottomColorImg, "repeat");
      innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);

    });
  }

  public CollageChildsShape() {
    $('#show-img-sizepopupCF').modal('hide');
  }

  public loadPreview() {
    var self = this;
    $("#positionPreview").attr('src', self.configImageDataUrl[self.selectOpening]);
    var imgData = new Image();
    imgData.src = self.configImageDataUrl[self.selectOpening];
    imgData.onload = function () {
      var framewidthcollage = imgData.width;//self.imgWidth;
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
      self.setSelectionOnPreview(imgData.width, imgData.height);
    }
  }

  public setSelectionOnPreview(imgWT, imgHT) {
    var self = this;

    if (self.configImageDataUrl[self.selectOpening]) {

      if (self.cuts[self.selectOpening]['cropSelection']) {
        console.log("cropSelection>> 1 ")
        self.newWidth = self.cuts[self.selectOpening]['cropSelection'].w * self.newScale;
        self.newHeight = self.cuts[self.selectOpening]['cropSelection'].h * self.newScale;
        self.newX = self.cuts[self.selectOpening]['cropSelection'].x * self.newScale;
        self.newY = self.cuts[self.selectOpening]['cropSelection'].y * self.newScale;
      } else {

        self.newWidth = (((self.cuts[self.selectOpening]['w'] * imgWT) / self.cuts[self.selectOpening]['position'][0]) * self.newScale);

        self.newHeight = (((self.cuts[self.selectOpening]['h'] * imgHT) / self.cuts[self.selectOpening]['position'][1]) * self.newScale);

        self.newX = ((Math.abs(self.cuts[self.selectOpening]['position'][2]) * (self.newWidth / self.newScale) / self.cuts[self.selectOpening]['w']) * self.newScale);

        self.newY = ((Math.abs(self.cuts[self.selectOpening]['position'][3]) * (self.newHeight / self.newScale) / self.cuts[self.selectOpening]['h']) * self.newScale);

        if ((self.newWidth + self.newX) > imgWT) {
          self.newWidth = imgWT;
          self.newX = 0;
        }

        if ((self.newHeight + self.newY) > imgHT) {
          self.newHeight = imgHT;
          self.newY = 0;
        }
      }

      var AS_RATIO_PER_SIZE = self.newWidth / self.newHeight;
      $('img#positionPreview').selectAreas('destroy');
      var areaOptions = {
        x: self.newX,
        y: self.newY,
        width: self.newWidth,
        height: self.newHeight,
      };
      $('img#positionPreview').selectAreas({
        minSize: [50, 50],
        allowSelect: false,
        handles: false,
        allowResize: true,
        aspectRatio: AS_RATIO_PER_SIZE,
        allowMove: true
      });

      setTimeout(function () {
        $("img#positionPreview").selectAreas('remove', 0);
        $('img#positionPreview').selectAreas('add', areaOptions);
      }, 300);
    }
  }

  public getAspectRatioSizePosition(wt, ht, ow, oh, i) {
    var self = this;
    var tempPPI = wt / ow;
    var psizes = {
      'w': wt,
      'h': ht
    };

    var shapeSizes = {
      'w': tempPPI * ow,
      'h': tempPPI * oh
    }

    var ratio = psizes['w'] / shapeSizes['w'];
    var tpWt = psizes['w'] * ratio;
    var tpHt = psizes['h'] * ratio;

    if (tpHt < shapeSizes['h']) {
      ratio = shapeSizes['h'] / tpHt;
      tpWt *= ratio;
      tpHt *= ratio;
    }
    var tpX = (tpWt - shapeSizes['w']) / 2;
    var tpY = (tpHt - shapeSizes['h']) / 2;

    self.cuts[i]['position'] = [tpWt / tempPPI,
    tpHt / tempPPI,
    tpX / tempPPI,
    tpY / tempPPI
    ];
  }

  public showFrameInfo() {
    $('#infoPopup').modal('toggle');
    setTimeout(() => {
      $('#infoPopup').modal('hide');
    }, 5000);
  }

  //  For page Reload
  public reload() {
    location.reload();
    this.btnHide();
  }

  public tooltiptextMat() {
    $('.tooltiptextMat').show();
    setTimeout(() => {
      $('.tooltiptextMat').hide();
    }, 3000);
  }

  public inputValidation() {
    

    var maxFrameSizeData = $("#frame_" + this.frameCode).attr("data-maxSize");
    if (maxFrameSizeData == "" || maxFrameSizeData == undefined) {
      maxFrameSizeData = "32x42";
    }
    this.frameMaxWidth = maxFrameSizeData.split("x")[ 0 ];
    this.frameMaxHeight = maxFrameSizeData.split("x")[ 1 ];

    if(this.oldSelectedFrameCode){
      var maxFrameSizeDataOld = $("#frame_" + this.oldSelectedFrameCode).attr("data-maxSize");
      this.frameMaxWidthOld = maxFrameSizeDataOld.split("x")[ 0 ];
      this.frameMaxHeightOld = maxFrameSizeDataOld.split("x")[ 1 ];
    }
    this.oldSelectedFrameCode = "";
    var tmpFrameMaxWidth;
    var tmpFrameMaxHeight;

      // tmpFrameMaxWidth =
      //   parseInt(this.frameMaxWidth) -
      //   parseInt($("#frame_" + this.frameCode).attr("data-width")) * 2;
      // tmpFrameMaxHeight =
      //   parseInt(this.frameMaxHeight) -
      //   parseInt($("#frame_" + this.frameCode).attr("data-width")) * 2;

      // tmpFrameMaxWidth = (this.framewidth * 2) + (this.userInput.length - 1) + (this.userInput.length * 3) - (this.activeFrameLipWidth * 2) + 4;
      // tmpFrameMaxHeight = (this.framewidth * 2) + 3 + 4 - (this.activeFrameLipWidth * 2);
      // var tmpFrameMaxWidth = 10;
      // var tmpFrameMaxHeight = 12;
      // this.OnloadFrames = JSON.parse(localStorage.getItem('frames'));
      // let selectedFrame = this.OnloadFrames.filter((data)=> this.frameCode === data.code);
      // tmpFrameMaxWidth = parseFloat(this.outSideWidth) + ((parseFloat(selectedFrame[0].width) - parseFloat(selectedFrame[0].lip_width)) * 2);
      // tmpFrameMaxHeight = parseFloat(this.outSideHeight) + ((parseFloat(selectedFrame[0].width) - parseFloat(selectedFrame[0].lip_width)) * 2);
      tmpFrameMaxWidth = parseFloat(this.outSideWidth) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
      tmpFrameMaxHeight = parseFloat(this.outSideHeight) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
      console.log(tmpFrameMaxWidth, tmpFrameMaxHeight)
      this.validateMats(
        this.top_mat,
        tmpFrameMaxWidth,
        tmpFrameMaxHeight,
        this.isCollageApplied
      );
    // this.maxFrameSize = 'Max image size to ' + this.frameMaxWidth + '″x' + this.frameMaxHeight + '″';
    this.maxFrameSize =
      "Max image size to " + tmpFrameMaxWidth + "″x" + tmpFrameMaxHeight + "″";
    // this.maxFrameSize = 'Max frame size to ' + this.frameMaxWidth + '″x' + this.frameMaxHeight + '″';

      if (
        tmpFrameMaxWidth <= parseInt(this.frameMaxWidth) &&
        tmpFrameMaxHeight <= parseInt(this.frameMaxHeight)
      ) {
        return true;
      } else {
        $("#myModal_maxsize12 h4").html(
          " Please switch to another frame from bellow frame tab."
        );
        $("#myModal_maxsize12").modal("show");
        // this.isSelectedFrameNotFound = true;
        this.oldSelectedFrameCode = this.frameCode;
        let tempFrameArry = []
        let selectedFrame = this.OnloadFrames.filter((data)=> this.frameCode === data.code);
        let finishWidth = parseFloat(this.outSideWidth) + ((parseFloat(selectedFrame[0].framewidth) - parseFloat(selectedFrame[0].lip_width)) * 2);
        let finishHeigth = parseFloat(this.outSideHeight) + ((parseFloat(selectedFrame[0].framewidth) - parseFloat(selectedFrame[0].lip_width)) * 2);
        // this.OnloadFrames = JSON.parse(localStorage.getItem('frames'))
        this.OnloadFrames.forEach((data)=>{
          let frameMaxSize = data.finished_size.split("x");
          if (finishWidth <= parseInt(frameMaxSize[0]) && finishHeigth <= parseInt(frameMaxSize[1])) {
            tempFrameArry.push(data);
          }
        })
        
        this.OnloadFrames = tempFrameArry;
        this.frameCode = this.OnloadFrames[0].code;
        this.showingChangeFrameMessage = this.OnloadFrames[0].name;
        // let tempArray = this.OnloadFrames.filter((data) => this.frameCode === data.code)
        // if(tempArray.length === 0){
        //     this.isSelectedMatNotFound = true;
        // }
        this.changeFrame(this.OnloadFrames[0])
        return false;
      }

      
  }
  public validateMats(top_mat, mat_width, mat_height, isCollageApplied){

    var big_mat = 0;
    var medium_mat = 0;
    var small_mat = 0;
    // var mat_width = 0;
    // var mat_height = 0;
    var mat_code;
    var tempMatArray = [];

    if ((mat_width <= 32 && mat_height <= 40) || (mat_width <= 40 && mat_height <= 32)) {
      small_mat = 1;
    } else if ((mat_width <= 40 && mat_height <= 60) || (mat_width <= 60 && mat_height <= 40)) {
      medium_mat = 1;
    } else if ((mat_width <= 48 && mat_height <= 96) || (mat_width <= 96 && mat_height <= 48)) {
      big_mat = 1;
    }
    if(!this.isSelectedMatNotFound){
      // this.dataMatsArray = JSON.parse(localStorage.getItem('mats'));
      this.dataMatsArray.forEach((data:any)=> {
        if (small_mat == 1) {
          if (data.size32x40 == '1') {
            tempMatArray.push(data);
          } else {
          }
        } else if (medium_mat == 1) {
          if (data.size40x60 == '1') {
            tempMatArray.push(data);
          } else {
          }
        } else if (big_mat == 1) {
          if (data.size48x96 == '1') {
            tempMatArray.push(data);
          } else {
          }
        }
      });

      this.dataMatsArray = [];
      this.dataMatsArray = tempMatArray;
    }
    this.isSelectedMatNotFound = false;
    console.log(this.dataMatsArray)
    console.log(this.top_mat)
    let tempArray = this.dataMatsArray.filter((data) => "" + this.top_mat === data.code)
    console.log(tempArray)
    if(tempArray.length === 0){
      // if(!this.isSelectedFrameNotFound){
        $("#myModal_maxsize12 h4").html(
          " Please switch to another mat from bellow mat tab."
        );
        $("#myModal_maxsize12").modal("show");
      // }
          
      this.isSelectedFrameNotFound = false;
      console.log(this.isSelectedFrameNotFound)
      this.oldSelectedMatCode = this.selected_mat;
      this.selected_mat = this.dataMatsArray[0].code;
      this.showingChangeMatMessage = this.dataMatsArray[0].name;
      // this.changeMat(this.dataMatsArray[0]);
      this.top_mat = this.dataMatsArray[0].code;
      this.confirmSizeE()
    if (this.isCollageApplied == true) {
      console.log("Setrippppp  3")
      this.setSecondMatCollage();
    }
    }
    // this.dataMatsArray.forEach((data)=>{
    //   if(this.selected_mat != data.code){
    //     $("#myModal_maxsize_mat h4").html(
    //       " Please switch to another mat from bellow mat tab."
    //     );
    //     $("#myModal_maxsize_mat").modal("toggle");
    //     this.oldSelectedMatCode = this.selected_mat;
    //     this.selected_mat = this.dataMatsArray[0].code;
    //     this.showingChangeMatMessage = this.dataMatsArray[0].name;
    //     // this.changeMat(this.dataMatsArray[0])
    //   }
      
    // })

    

    // $(".bxsliderCFMat").scrollLeft(0);
    this.Helper.validateMats(
      this.top_mat,
      this.customWidth,
      this.customHeight,
      this.isCollageApplied, false
    );
  }

  getImageSize(event){
    console.log(event.target.value);

    let sizeData = this.imageSizesArray.filter((data)=>event.target.value === data.alphabet_size);
    console.log(sizeData)
    this.selectedMatId = sizeData[0].id;
    this.customWidth = sizeData[0].outsidewidth;
    this.customHeight = sizeData[0].outsideheight;
    this.isImageSize = sizeData[0].alphabet_size;
    this.getPrice();
    this.selectCollageOpening(this.userInput)
    // this.cuts[index]['w'] = arr4[0];
    // this.cuts[index]['h'] = arr4[1];
  }

  getColorFilter(event){
    let self = this;
    self.selectedColorFilter = event.target.value;
    let array = [];
    console.log(self.imagePathTemp)
    self.imagePathTemp.forEach((data, index)=>{
      self.getDataService.getLetterartImageData("/data/vhosts/arttoframe.com/http" + data.url, 4, 6, event.target.value).subscribe((response: any) => {
        array.push(response)
        self.configImageDataUrl[index] = response['dataUrl'];
        // self.imagePathDuplicate[index]['url'] = response['dataUrl'];
        if(index === self.imagePathTemp.length - 1){
          console.log("ABBBBBc")
          self.selectCollageOpening(self.userInput);
        }
      });
    })
  }

   getFilterFramesData(){
    let self = this;
    console.log(parseFloat(this.outSideWidth))
    console.log(this.frameCode)
    let tmpFrameMaxWidth = parseFloat(this.outSideWidth) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
    let tmpFrameMaxHeight = parseFloat(this.outSideHeight) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
    this.getDataService.getFilterFrameData(this.frameFilterID, tmpFrameMaxWidth, tmpFrameMaxHeight, this.activeFrameId).subscribe((res : any) => {
      console.log('Frame data', res.data)
      self.OnloadFrames = res.data;
      self.frameFilter = res.frameColor;
      console.log(self.framesData)
      if(self.framesData.length < 2){
        console.log("Shu hhhhh")
        self.framesData = res.data;
      }
      $(".bxsliderCFWco").scrollLeft(0);
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
    let tmpFrameMaxWidth = parseFloat(this.outSideWidth) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
    let tmpFrameMaxHeight = parseFloat(this.outSideHeight) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
    this.getDataService.getFilterMatData(this.topMatId, tmpFrameMaxWidth, tmpFrameMaxHeight, this.bottomMatId, this.matFilterID).subscribe((res : any) => {
      console.log('Mats data', res.top)
      self.dataMatsArray = [];
      // self.dataMatsArray = JSON.parse(localStorage.getItem("mats"));
      self.dataMatsArray = res.top;
      $(".bxsliderCFMat").scrollLeft(0);
      setTimeout(() => {
        self.Helper.validateMats(
          self.top_mat,
          tmpFrameMaxWidth,
          tmpFrameMaxHeight,
          self.isCollageApplied, false
        );
      }, 100);
      
      // $(".bxsliderCF").scrollLeft(0);

      $(".modal-backdrop.in").css("display", "none");
      $(".frame-hide-btn").css("display", "block");
      $("#frameModal").modal("hide");
      $("#sizemodal").modal("hide");
      $("#decorModal").modal("hide");
      $("#glassModal").modal("hide");
    });
  }

  getFilterGlassData(){
    let self = this;
    this.getDataService.getFilterGlassDataJSON().subscribe((data)=>{
      self.glassArr = data;
      self.selectedGlassVal = this.getDefaultGlassID();
    })
  }
} 