
import { Component, OnInit, ViewChild , HostListener } from "@angular/core";
import { GetDataService } from '../services/index';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { HelperService } from '../services/helper.service'
import { NgxCarousel } from 'ngx-carousel';
// import Hardware from '../../assets/hardware.json';
// import VgooveDetails from '../../assets/VgooveDetails.json';
// import MatDetails from '../../assets/MatDetails.json';
// import MatColor from '../../assets/MatColor.json';
import { Title } from "@angular/platform-browser";
declare var $, paypal: any;

declare var $: any;

@Component({
  selector: 'app-word-cutout',
  templateUrl: './word-cutout.component.html',
  styleUrls: ['./word-cutout.component.css'],
  providers: [GetDataService]
})

export class WordCutoutComponent implements OnInit {
  uploadState: Observable<string>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  rectW: number = 400;
  rectH: number = 400;
  rectColor: string = "#FF00F0";
  ctx: CanvasRenderingContext2D;
  @ViewChild("framecanvas") framecanvas;

  ctxSwatch: CanvasRenderingContext2D;
  @ViewChild("swatchCanvas") swatchCanvas;

  ctxTempCanvas: CanvasRenderingContext2D;
  @ViewChild("tempCanvas") tempCanvas;

  ctxTempCanvasWordcoutout: CanvasRenderingContext2D;
  @ViewChild("tempCanvasWordcoutout") tempCanvasWordcoutout;

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
  third_mat: any;
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
  selectedVgroove: any = "";
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
  textinputModalStyle: any;
  frameModalStyle: any;
  matModalStyle: any;
  decorModalStyle: any;
  glassModalStyle: any;
  mainprevewclsStyle: any;

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
  hardwarepopupStyle: any;
  HideButtonStyle: any;
  onPageload: any;
  bottomMatId: any;
  topMatId: any;
  productCode: number;
  imgUpload: number;
  onimageload: any;
  DataUrl: any;
  collage_Opening_Image_Array: any;
  collageImageArray: any;
  pixelPerinch: any;
  collageCropPositionArray: any;
  onloadGlassArray: any;
  changeGlassManually: any;
  frameMaxWidth: any;
  frameMaxHeight: any;
  cropflagOnrotation: any;
  tempHardwareArray: any;
  changeHardwareManually: any;
  framesData: any = [];
  VgooveDetails: any;
  MatDetails: any;
  shapeImage: any;
  OnloadFrames: any;
  displayAfterUpload: any;
  srcOrientation: any;
  ImgOriantation: any;
  collageOriginalSizeArray: any;
  boundWidth: any;
  boundHeight: any;
  collageimageImageSizes: any;
  isEditPopup: any;
  isFrameMatChanged: any;
  tempImage: any;
  frameMaterial: any;
  frameNote: any;
  isLodedMats: any;
  totalPrice: number;
  urlGlassType: any;
  TopMatTitle: string = "Super White";
  maxFrameSize: string;
  frameMaxWidthOld: any;
  frameMaxHeightOld: any;
  oldSelectedFrameCode: any;
  showingChangeFrameMessage: string;
  oldSelectedMatCode: any;
  showingChangeMatMessage: any;
  isSelectedMatNotFound: boolean = false;
  isSelectedFrameNotFound: boolean = false;
  parentHardwareData: any;
  parentHardwareId: string;
  selectedHardwareId: string;


  constructor(private afStorage: AngularFireStorage, private route: ActivatedRoute, private title: Title, private getDataService: GetDataService, private http: HttpClient, public Helper: HelperService) {
    $("link[rel=canonical]").attr( "href", "https://www.arttoframe.com/custom_framing/");
    $("meta[name='keywords']").attr('content', "8x10 Pinpix Decorative Bulletin Board,8x10 Pinpix Bulletin Board, null");
    this.title.setTitle("Online Custom Framing | Upload and Frame Your Own Photos | ArtToFrames");
    this.getDataService.getInfoAngular().subscribe(
      res => {
        this.getInfoArr = res;
        localStorage.setItem('getInfo', this.getInfoArr);
      });

    // if (window.location.origin == "http://localhost:4200") {
      // this.MatDetails = { MatDetails };
      // localStorage.setItem('mats', JSON.stringify(this.MatDetails['MatDetails']));
      // var tempGlass = { GlassData }
      // this.glassArr = tempGlass['GlassData']
      // localStorage.setItem('glass', JSON.stringify(this.glassArr));
      // this.VgooveDetails = { VgooveDetails };
      // localStorage.setItem('vgroove', JSON.stringify(this.VgooveDetails['VgooveDetails']));
    // }

  }
  // ngAfterViewInit() {
  //   this.arrange();

  // }

  ngOnInit() {
    this.getFilterGlassData();
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
    this.frameURL = this.Helper.cdn1 + "/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg";
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
    this.top_mat = "61";
    this.selected_mat = "61";
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
    this.baseUrl = window.location.origin;
    this.hostname = '';
    this.thumb_path = '';
    this.mydrop = 1;
    this.max_size = 40;
    this.bottom_mat = 61;
    this.third_mat = 0;
    this.setBottomMat = 0;
    this.loadCounter = 0;
    this.optionctr = 0;
    this.mega_pixel = 0;
    this.noMat = '';
    this.collage_dm = 0;

    $(".ngxcarousel").css("width", $(window).width());
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
    this.selectedVgroove = "";
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
    this.activeFrameName = "Satin Black";
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
    this.collageOpenings = [];
    this.imagePath = "";
    this.matCodeArray = "";
    this.letterArtLength = "";
    this.outSideHeight = 10;
    this.outSideWidth = 8;
    this.ShowId = "";
    this.userInput = "";
    this.clickedLetter = "";
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
    this.hardwarepopupStyle = [];
    this.HideButtonStyle = [];
    this.onPageload = 0;
    this.bottomMatId = 0;
    this.topMatId = 0;
    this.onimageload = 0;
    this.collage_Opening_Image_Array = [];
    this.collageImageArray = [];
    this.pixelPerinch = 0;
    this.collageCropPositionArray = [];
    this.changeGlassManually = 0;
    this.frameMaxWidth = 32;
    this.frameMaxHeight = 42;
    this.cropflagOnrotation = 0;
    this.tempHardwareArray = [];
    this.changeHardwareManually = 0;
    this.displayAfterUpload = 0;
    this.ImgOriantation = "";
    this.collageOriginalSizeArray = [];
    this.boundWidth = NaN;
    this.boundHeight = NaN;
    this.collageimageImageSizes = [];
    this.isEditPopup = 1;
    this.isFrameMatChanged = 0;
    this.frameMaterial = "MDF"
    this.frameNote = "";
    this.productCode = 61;
    this.isLodedMats = 0;

    this.OnloadFrames = [];
    // this.framesData = { Frame }
    // localStorage.setItem('frames', JSON.stringify(this.framesData['Frame']));
    // this.OnloadFrames = this.framesData['Frame'];
    this.getFilterFramesData();
    this.getFilterMatsData();
    this.matFilter = "";
    // this.matFilter = { MatColor }
    // this.matFilter = this.matFilter['MatColor'];
    // this.hardwareData = { Hardware }
    // this.hardwareData = this.hardwareData['Hardware'];
    // this.frameFilter = { frameColor }
    // this.frameFilter = this.frameFilter['frameColor'];

    this.route.queryParams.forEach((params: Params) => {
      this.userInput = params['wordcutout'];
    });

    if (this.userInput != null || this.userInput != undefined) {

      this.onGoUserText(this.userInput);
    } else {

      this.userInput = "HOME";
      this.onGoUserText("HOME");
    }

    // this.location.replaceState("?wordcutout="+this.userInput);

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
    $('.detailPopupClose, #confirmGlass,.confrim-btn, .confirm-Opening-popup, #confirmhardware, .glassdetailpopup').click(function (e) {
      $('#fancy_shape_popup, #mat_engraving_popup, #glassPopup, #hardwarepopup, #sizepopup').modal('hide');

    });
    $('#vgroove_info').click(function (e) {
      $('#mat_engraving_popup').modal('show');
      $('.modal-backdrop').css('z-index', '9999');
    });

    this.defaultParamObj = JSON.parse(localStorage.getItem('defaultParam'));

    if (this.defaultParamObj != null) {

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
          this.customWidth = 10;
        }

        if (this.defaultParamObj.current_height != null) {
          this.customHeight = this.defaultParamObj.current_height;
        } else {
          this.customHeight = 6;
        }

        if (this.defaultParamObj.hardwareId != null) {
          this.hardwareID = this.defaultParamObj.hardwareId;
          this.changeHardwareManually = 1;
        }

        if (this.defaultParamObj.bottomMatId != null) {
          this.bottom_mat = this.defaultParamObj.bottomMatId;
        }

        if (this.defaultParamObj.glassId != null) {
          this.selectedGlassVal = this.defaultParamObj.glassId;
          this.changeGlassManually = 1;
          let glassName = this.glassArr.filter((data)=> data.glass_id === this.selectedGlassVal)
          this.urlGlassType = glassName[0].glass_type;
          if(this.urlGlassType === '1'){
            $("#glass_only_name").text(glassName[0].name);
          }
          else{
            $("#glass_plexi_name").text(glassName[0].name);
          }
        }

      }

    }


    // this.mainprevewclsStyle['height'] = window.innerHeight-460; 
    //this.mainProductPreviewStyle['height'] = window.innerHeight-155; 
    //this.mainConatinerStyle['height'] = window.innerHeight-158;
    // this.equalHeightsStyle['height'] = window.innerHeight-190;

    let self = this;
    $(document).ready(function (e) {
      $('body').css('background', '#EAE6E4');
      $('#textinputModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 20 + 'px')
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

        $(
          ".main-product-preview,.mainConatiner,#previewSlider,.main-prevewcls"
        ).css("height", $(window).height() - 350);
        $("#preview_container").css("height", $(window).height() - 300);
        $(".equal-heights").css("height", $(window).height() - 300);
        $(".ngxcarouselPoint").css("top", $(window).height() - 350);
        // $('.main-prevewcls').css('max-width', $(window).width());

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
      $('.back-btn-colorfilter').click(function () {
        $('#colorfilter').modal('hide');
      });
      var isMobile = window.matchMedia("only screen and (width: 360px)").matches;
      $(".modal-backdrop.in").css('display', 'none');
      $(".traversing").hide();

      $('.color-filterbtn').click(function () {
        $('#colorfilter').modal('show');
      });

      $(".MatTabsChild1 li").on('click', function () {
        $(".MatTabsChild1 li").removeClass('active');
        $(this).addClass('active');
      });

    });

    if (this.onPageload == 0) {
      this.textinputModalStyle['display'] = 'block';
      this.colorfilter['display'] = 'none';
      this.onPageloadGlassId();
    }

    /*    this.tabImages['letterArtPopup'] = "size-active-1909.png";
        this.tabImages['showFrames'] = "frame-1909.png";
        this.tabImages['showMats'] = "mat-1909.png";
        this.tabImages['showDecorativeMats'] = "decor-1909.png";
        this.tabImages['showGlass'] = "glass-1909.png";*/

        const modal = document.querySelector('#infomodal')

          document.addEventListener('click', (e: any) => {
            // this.btnHideInfo();
            let clickInside = modal.contains(e.target)
            if (clickInside) {
              $(".modal-backdrop.in").hide();
            }
          })
  }

  getFilterFramesData(){
    let self = this;
    console.log(parseFloat(this.outSideWidth))
    console.log(this.frameCode)
    let tmpFrameMaxWidth = this.customWidth;
    let tmpFrameMaxHeight = this.customHeight;
    this.getDataService.getFilterFrameData(this.frameFilterID, tmpFrameMaxWidth, tmpFrameMaxHeight, this.activeFrameId).subscribe((res : any) => {
      console.log('Frame data', res.data)
      self.OnloadFrames = res.data;
      self.frameFilter = res.frameColor;
      this.inputValidation()
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

  public onGoUserText(inputtext: string) {
    var self = this;
    // this.arrange();
    self.userInput = inputtext;
    self.selectCollageOpening(self.userInput);
    this.getFilterFramesData()
    // self.inputValidation();
  }


  public colorFilterMat() {
    this.colorfilter['display'] = 'block';
  }

  public showLetterArtpopup() {
    this.textinputModalStyle['display'] = 'block';
    $('#textinputModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 20 + 'px')
    this.frameModalStyle['display'] = 'none';
    this.matModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';

    this.tabImages['letterArtPopup'] = this.textActiveImg;
    this.tabImages['showFrames'] = this.frameInctiveImg;
    this.tabImages['showMats'] = this.matInctiveImg;
    this.tabImages['showDecorativeMats'] = this.decorInctiveImg;
    this.tabImages['showGlass'] = this.glassInctiveImg;
    this.HideButtonStyle['display'] = 'block';

    $('.modal-backdrop').css('display', 'none');

  }

  public showFrames(param) {
    this.frameModalStyle['display'] = 'block';
    // $('#frameModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() + 30 + 'px')
    $('#frameModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() - 10 + 'px')
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
    // $("#selFrameColor").val(0);
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

    // // self.frameModal = true;
    // let tempFrameArry = []
    // let selectedFrame = this.OnloadFrames.filter((data)=> this.frameCode === data.code);
    // let finishWidth = parseFloat(this.outSideWidth) + ((parseFloat(selectedFrame[0].width) - parseFloat(selectedFrame[0].lip_width)) * 2);
    // let finishHeigth = parseFloat(this.outSideHeight) + ((parseFloat(selectedFrame[0].width) - parseFloat(selectedFrame[0].lip_width)) * 2);
    // this.OnloadFrames = JSON.parse(self.datarr)
    // this.OnloadFrames.forEach((data)=>{
    //   let frameMaxSize = data.max_finished_size.split("x");
    //   if (finishWidth <= parseInt(frameMaxSize[0]) && finishHeigth <= parseInt(frameMaxSize[1])) {
    //     tempFrameArry.push(data);
    //   }
    // })

    
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
    // this.OnloadFrames = []
    // this.OnloadFrames = tempFrameArry;
    
    // $(".myFrame").removeClass("frame_active");
    // $("#myFrame_" + self.frameCode).addClass("frame_active");
  }

  public showMats(param) {
    this.matModalStyle['display'] = 'block';
    $('#matModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() - 10 + 'px')
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
    
    if (param == "filter" && this.matFilterID != 0) {
      this.getMatColorFilterData();
    } else {
      var self = this;
      if (this.isLodedMats == 1) {
        // this.dataMatsArray = JSON.parse(localStorage.getItem('mats'));

      } else {
        // this.dataMatsArray = JSON.parse(localStorage.getItem('mats'));
        this.isLodedMats = 1;
        // this.showMats('mat')
      }
    }
    this.getFilterMatsData();
    // setTimeout(() => {
    //   this.Helper.validateMats(this.top_mat, this.customWidth, this.customHeight, this.isCollageApplied);
    //   setTimeout(() => {
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

    this.getDataService.getVgrooveJSON().subscribe((responce : any)=>{
      this.vgrooveArr = responce;
    })

    this.decorModalStyle['display'] = 'block';
    $('#decorModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() - 10 + 'px')
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
  }

  public btnHide() {
    this.textinputModalStyle['display'] = 'none';
    this.frameModalStyle['display'] = 'none';
    this.matModalStyle['display'] = 'none';
    this.decorModalStyle['display'] = 'none';
    this.glassModalStyle['display'] = 'none';
    this.HideButtonStyle['display'] = 'none';

  }

  public btnHideInfo() {
    this.glassPopup['display'] = 'none';
    this.infomodalStyle['vgrooveDisplay'] = 'none';
    this.infomodalStyle['priceDisplay'] = 'none';
    this.colorfilter['display'] = 'none';
    this.hardwarepopupStyle['display'] = 'none';
    $(".modal-backdrop.in").hide();
  }

  // =======preview function===========
  public changeFrame(e) {
    var self = this;
    this.isSelectedFrameNotFound = true;
    // this.WriteToFile("frame changed : " + e.code);
    this.frameMaxWidth = e.finished_size.split('x')[0]
    this.frameMaxHeight = e.finished_size.split('x')[1]
    this.frameURL = "";
    this.frameCode = e.code;
    this.activeFrameId = e.frame_id;
    this.activeFrameName = e.name;

    // var old_frameMaxWidth = this.frameMaxWidth;
    // var old_frameMaxHeight = this.frameMaxHeight;
    // var old_frameCode = this.frameCode;

    // var returnVal = this.inputValidation();
    // if (returnVal != true) {
    //   this.frameMaxHeight = old_frameMaxWidth;
    //   this.frameMaxWidth = old_frameMaxHeight;
    //   this.frameCode = old_frameCode;
    //   this.isFrameMatChanged = 0;
    //   return false;
    // }

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

    // var openingSize = self.customWidth + "x" + self.customHeight;
    // var frameName: any = "-" + self.activeFrameName.replace(/ /g, "-");
    // var productTitle = "-picture-frame/"
    // var currentColor = self.TopMatTitle + '/';
    // let UpdatedRoute = openingSize + frameName + productTitle + currentColor.replace(" ", "-") + this.top_mat;
    // history.pushState(null, null, "/" + UpdatedRoute + "?page_type=M");

    // this.activeFrameWidth = $("#frame_" + this.frameCode).attr('data-width');
    // this.frameWidth = $("#frame_" + this.frameCode).attr('data-width');

    this.activeFrameWidth = "1.25";
    this.frameWidth = "1.25";

    console.log(this.activeFrameWidth)
    console.log(this.frameWidth)
    this.frameURL = this.Helper.cdn1 + "/products/frames/SwatchSmall/" + this.frameCode + "/100.jpg";
    // $("#cornerPro").attr("src", "https://cdn2.arttoframe.com/products/frame/corner_profile/" + this.frameCode + "/300.jpg?v=56");
    $("#cornerPro").attr("src", this.Helper.cdn2 + "/products/frame/corner_profile/" + this.frameCode + "/500.jpg?v=23");

    // $("#cornerAngImage").attr("src", "https://cdn1.arttoframe.com/products/frame/corner_angle_image/" + this.frameCode + "/300.jpg?v=82")
    $("#glazeSliderImage").attr("src", this.Helper.cdn2 + "/products/glaze/new/small/" + this.selectedGlassVal + ".png?v=23")

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
 
  public arrange() {
    // this.preview_max_height = $("#preview_container").height() - 50;
    // this.previewWidthMax = $("#preview_container").width() - 50;
    this.preview_max_height = $("#preview_container").height() - 100;
    this.previewWidthMax = $("#preview_container").width() - 25;

    console.log(this.preview_max_height)
    console.log(this.previewWidthMax)
    if(this.previewWidthMax < 0){
      this.previewWidthMax = 350.2
    }
    if (this.preview_max_height <= 50) {
      this.preview_max_height = this.previewWidthMax;
      // $("#preview_container").height(this.previewWidthMax+25)
    }
    console.log(this.preview_max_height)

//     267
// word-cutout.component.ts:1375 350.2
// word-cutout.component.ts:1380 267
// helper.service.ts:234 57

// 267
// word-cutout.component.ts:1375 -25
// word-cutout.component.ts:1380 267
// helper.service.ts:234 57
    // if (this.isFrameMatChanged == 0) {
    this.customWidth = parseFloat($("#customWidth").val());
    this.customHeight = parseFloat($("#customHeight").val());
    // }
    this.selectedGlassVal = this.getDefaultGlassID();

    // this.isFrameMatChanged = 0;
    this.customWidth = parseFloat(this.outSideWidth);
    this.customHeight = parseFloat(this.outSideHeight);
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
    if (this.isCollageApplied == true) {
      this.setCanvasOpenings();
    }
    this.setTopMat();
    this.getPrice();
    // this.inputValidation()
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
    // this.activeFrameName = "Satin Black";

    var sliderHeight = parseInt($('.mainConatiner').height()) - 70;
    $(".bx-wrapper img").css("max-height", sliderHeight + "px");

    this.frameWidth = (this.activeFrameWidth - 0.25) * this.ppi * this.scale;

    // $("#cornerPro").attr("src", "https://cdn2.arttoframe.com/products/frame/corner_profile/" + this.frameCode + "/300.jpg?v=56");
    // $("#cornerAngImage").attr("src", "https://cdn1.arttoframe.com/products/frame/corner_angle_image/" + this.frameCode + "/300.jpg?v=82")
    var img = this.frameURL;
    // this.swatchImgPath = this.getDefaultSwatchImg();
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
    this.setTopMat();
  }

  // public getDefaultSwatchImg() {
  //   var swatchImgPath = "https://cdn.arttoframe.com/products/frames/SwatchSmall/FRBW26074/300.jpg?is_https_site=1";
  //   return swatchImgPath;
  // }

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
    topMatImg.src = this.Helper.cdn2 + "/products/mats/images/200/" + this.top_mat + ".jpg";
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
    var uploaded = $("#positionPreview").attr('src');
    if (uploaded != "") {
      // self.imageDataForLog(1);
      printing_type = 21;
    } else {
      // self.imageDataForLog(0);
      printing_type = 24;
    }
    var topMatVal = this.top_mat;
    var bottomMatVal = this.bottom_mat;
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

    if ($("#bottommats").parent().find('input:checkbox').is(':checked') == false) {
      bottomMatVal = "";
    }

    if ($("#topmats").parent().find('input:checkbox').is(':checked') == false) {
      topMatVal = "";
    }

    var vgroov = "";
    var vgroovshapecodes = "";

    if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
      vgroov = "1";
      vgroovshapecodes = $("#vgroov_" + this.selectedVgroove).attr('vgroovCode');
    }

    var matcode = this.matcode;
    var inside_width = this.customWidth;
    var inside_height = this.customHeight;
    var change_item = "color1";
    designerMatId = "";
    popupMat = "";
    /*if(self.collageOpenings != null){
      var tempArr1 = this.collageOpenings.cutCode.split(';');
      var tempArr2 = tempArr1[0].split(":");
      var prodNameSize = "("+this.userInput.length+") " + tempArr2[2];
      var tempArr3 = tempArr2[2].split("x");
      var cuts_width = tempArr3[0];
      var cuts_height = tempArr3[1];
    }else{*/
    var cuts_width = 3;
    var cuts_height = 3;
    /*}*/
    if (this.cuts.length) {
      cuts_width = self.cuts[0].w;
      cuts_height = self.cuts[0].h;
    } else {
    }
    var prodNameSize = "Word CutOut (" + this.userInput.length + ") " + cuts_width + "x" + cuts_height;
    $('.product-name').html(prodNameSize);
    //  var cuts_width = self.cuts.w;
    //  var cuts_height = self.cuts.h;
    /*}*/
    // this.selectedGlassVal = this.getDefaultGlassID();
    var vgroov = "";
    var vgroovshapeId = "";

    if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
      vgroov = "1";
      // vgroovshapecodes = $("#vgroov_" + this.selectedVgroove).attr('vgroovCode');
      vgroovshapeId = ($("#vgroov_" + this.selectedVgroove).attr('vgroovCode')).split(";")[0];
      // vgroovshapeData = vgroovshapeData + ";" + ($("#vgroov_" + this.selectedVgroove).attr('vgroovCode')).split(";")[2];
    }

    var parameters = {
      url: "https=//www.arttoframe.com/price_calc.php",
      app_name: "customframe",
      inside_width: inside_width,
      inside_height: inside_height,
      // opening_size: prodNameSize,
      matcode: "custom",
      // matcode: matcode,
      // topmat_width: 2.00,
      // bottommat_width: 0.25,
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
      mat2_id: '0',
      mat3_id: "",
      printing: "yes",
      glass_type: this.selectedGlassVal,
      backing_type: 2,
      debug: "debug",
      cut_val: 0,
      color_filter: "",
      printing_type: printing_type,
      hardware_id: this.hardwareID,
      hardware_two_id: this.parentHardwareId,
      hardware_type: this.hardwareID,
      vgroovshapeId: vgroovshapeId,
      // vgroovshapecodes: vgroovshapecodes,
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
      wordcutout: 1
    };
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    let priceParam = new HttpParams();

    priceParam = priceParam.append('url', "https=//www.arttoframe.com/price_calc.php");
    priceParam = priceParam.append('app_name', "customframe");
    priceParam = priceParam.append('inside_width', inside_width);
    priceParam = priceParam.append('inside_height', inside_height);
    // priceParam = priceParam.append('opening_size', prodNameSize);
    priceParam = priceParam.append('matcode', "custom");
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
    priceParam = priceParam.append('mat2_id', '0');
    // priceParam = priceParam.append('mat3_id', '');
    priceParam = priceParam.append('printing', 'yes');
    priceParam = priceParam.append('glass_type', this.selectedGlassVal);
    priceParam = priceParam.append('backing_type', '2');
    priceParam = priceParam.append('debug', 'debug');
    priceParam = priceParam.append('cut_val', '0');
    // priceParam = priceParam.append('color_filter', "");
    priceParam = priceParam.append('printing_type', printing_type.toString());
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
    priceParam = priceParam.append('wordcutout', '1');

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
    // res => {
    //   $('.price-txt').html('$' + res.data.total);
    //   this.currentPrice = res.data.total;
    //   this.priceTempArr = res.data;
    // });
    // // self.priceTempArr = this.Helper.getprice(parameters, this.change_item, parameters, this.onloadGlassArray, 57);
    // this.getDataService.getGlassPrice(parameters).subscribe(
    // res => {
    //   var glassDataPrice = JSON.parse(res.data);

    //   for (var key in glassDataPrice) {
    //     var glassPriceDiff = (glassDataPrice[key] - this.currentPrice).toFixed(2);

    //     if ((parseFloat(glassPriceDiff) == 0)) {
    //       glassPriceDiff = "$ 0";
    //     } else {
    //       glassPriceDiff = glassPriceDiff.replace("-", "- $");
    //     }
    //     $('.glassPriceDifference_' + key).html((parseFloat(glassPriceDiff) > 0 ? "+ $" : "") + glassPriceDiff);
    //   }
    // });

    // this.getDataService.getHardwarePrice(parameters).subscribe(
    // res => {
    //   var hardwareDataPrice = JSON.parse(res.data);

    //   for (var key in hardwareDataPrice) {
    //     var hardwarePriceDiff = (hardwareDataPrice[key] - this.currentPrice).toFixed(2);

    //     if ((parseFloat(hardwarePriceDiff) == 0)) {
    //       hardwarePriceDiff = "$ 0";
    //     } else {
    //       hardwarePriceDiff = hardwarePriceDiff.replace("-", "- $");
    //     }
    //     $('.hardwarePrice_' + key).html((parseFloat(hardwarePriceDiff) > 0 ? "+ $" : "") + hardwarePriceDiff);
    //   }
    // });
    
      })
    this.historyPushUrl()
  }

  historyPushUrl(){
    var openingSize = this.customWidth + "x" + this.customHeight;
    var frameName: any = "-" + this.activeFrameName.replace(/ /g, "-");
    var productTitle = "-picture-frame/"
    var currentColor = this.TopMatTitle + '/';
    // let UpdatedRoute = openingSize + frameName + productTitle + currentColor.replace(" ", "-") + this.top_mat;
    let defaultParamObj = JSON.parse(localStorage.getItem("defaultParam"));
    let UpdatedRoute = "custom_framing.php?intro=false&wordcutout="+ this.userInput + "&frameId=" + defaultParamObj.frameId + "&frame_color=Black&mat_color=" + this.top_mat;
    history.pushState(null, null, "/" + UpdatedRoute);
  }

  //working
  public drawImageTempScalePreviewSRC(ImgSrc) {
    var self = this;
    self.displayAfterUpload = 1;
    let imagelayerCanvas = self.imagelayercanvas.nativeElement;
    let dataImage = imagelayerCanvas.getContext("2d");
    var width = (this.customWidth * this.ppi) * this.scale;
    var height = (this.customHeight * this.ppi) * this.scale;
    imagelayerCanvas.width = width;
    imagelayerCanvas.height = height;

    var img = new Image;
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

      self.cutSize = [img.width, img.height];
      self.width_to_height_ratio = img.width / img.height;

      if (self.isCollageApplied == false) {
        var option_select = $.trim($("#recomended_frames").val());
        $("#recomended_frames option").remove();
        self.optionctr = 0;
        // self.populate('#recomended_frames', option_select);
        self.Helper.populate('#recomended_frames', option_select, this.width_to_height_ratio, 57);

        $('#finished_size_recommend option').remove();
        self.optionctr = 0;
        // self.populate('#finished_size_recommend', $('#finished_size_recommend').val());
        self.Helper.populate('#finished_size_recommend', $('#finished_size_recommend').val(), this.width_to_height_ratio, 57);

        var tempWidth = $("#recomended_frames :selected").text().split('x')[0]
        var tempWHeight = $("#recomended_frames :selected").text().split('x')[1]

        $("#customWidth").val(self.addZeroes(tempWidth));
        $("#customHeight").val(self.addZeroes(tempWHeight));
        self.confirmSizeE();
      }

      // var thumbSize = $("#preview_container").width() - 20;
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
        self.collageOriginalSizeArray[self.selectOpening] = [self.imgNaturalWidth, self.imgNaturalHeight];
        self.collageimageImageSizes[self.selectOpening] = [img.width, img.height];
        self.cuts[self.selectOpening]['size'] = [img.width, img.height];

        var width = (self.cuts[self.selectOpening]['w'] * self.ppi) * self.scale;
        var height = (self.cuts[self.selectOpening]['h'] * self.ppi) * self.scale;
      } else {
        var width = (self.customWidth * self.ppi) * self.scale;
        var height = (self.customHeight * self.ppi) * self.scale;
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

      $("#positionPreview").attr('src', "");
      $("#positionPreview").attr('src', scaleImgUp);
      // self.lockAspectRatio();
      // self.isSwap = 0;
      var Timg = new Image();

      Timg.src = scaleImgUp as string;
      Timg.onload = () => {

        if (self.isCollageApplied == true) {

          self.cuts[self.selectOpening]['size'] = [Timg.width, Timg.height];
          self.configImageDataUrl[self.selectOpening] = scaleImgUp;
          self.setCanvasOpenings();
        } else {
          if (img.width > img.height) {

            self.cropped_width = (Timg.width - 90);
            self.cropped_height = (Timg.height - 45);
            self.cropped_x = 20;
            self.cropped_y = 0;
            //$("#positionPreview").css("width", img.width - 100);
          } else {
            self.cropped_width = Timg.width;
            self.cropped_height = Timg.height;
            self.cropped_x = 0;
            self.cropped_y = 0;
          }
          dataImage.drawImage(Timg, 0, 0, Timg.width, Timg.height, 0, 0, width, height);
          if ($("#positionPreview").attr('src') != "" && this.isEditPopup == 1) {

            self.cropOnclick();
            self.showEditImagePopup();

          }
        }
      }
    }
  }
  // public drawImageTempScalePreviewSRC(ImgSrc,shape) {
  //   var self = this;
  //   let imagelayerCanvas = this.imagelayercanvas.nativeElement;
  //   let dataImage = imagelayerCanvas.getContext("2d");
  //   var width = (this.customWidth * this.ppi) * this.scale;
  //   var height = (this.customHeight * this.ppi) * this.scale;
  //   imagelayerCanvas.width = width;
  //   imagelayerCanvas.height = height;
  //   var img = new Image;
  //   // if(ImgSrc == undefined){
  //   //   ImgSrc = "https://cdn.arttoframe.com/images/upload-with-text_05.svg"
  //   // }
  //   img.src = ImgSrc;
  //   img.onload = () => {
  //     this.cutSize[0] = [img.width, img.height];
  //     this.width_to_height_ratio = img.width / img.height;

  //     var thumbSize = $("#preview_container").width();
  //     var scale = 0;

  //     if (img.width > thumbSize) {
  //       scale = thumbSize / img.width;
  //       img.width *= scale;
  //       img.height *= scale;
  //     }
  //     if (img.height > thumbSize) {
  //       scale = thumbSize / img.height;
  //       img.width *= scale;
  //       img.height *= scale;
  //     }
  //     // var width = (this.customWidth * this.ppi) * this.scale;
  //     // var height = (this.customHeight * this.ppi) * this.scale;

  //     // var buffer = document.createElement('canvas');
  //     // var b_ctx = buffer.getContext('2d');

  //     // buffer.width = width ;
  //     // buffer.height = height;        
  //     // this.createShape(img,shape,img.width,img.height,width, height)
  //     var scaleImgUp = this.shapeImage;

  //     $("#positionPreview").attr('src', "");
  //     $("#positionPreview").attr('src', scaleImgUp);  

  //     var Timg = new Image();
  //     Timg.src = scaleImgUp as string;

  //     Timg.onload = () => {
  //       // self.cuts[self.selectOpening]['size'] = [Timg.width, Timg.height];
  //       // self.configImageDataUrl[self.selectOpening] = scaleImgUp;
  //       // self.setCanvasOpenings();
  //       if (self.isCollageApplied == true) {
  //           self.cuts[self.selectOpening]['size'] = [Timg.width, Timg.height];
  //           self.configImageDataUrl[self.selectOpening] = scaleImgUp;
  //           self.setCanvasOpenings();
  //         } else {
  //           if (img.width > img.height) {

  //             self.cropped_width = (Timg.width - 90);
  //             self.cropped_height = (Timg.height - 45);
  //             self.cropped_x = 20;
  //             self.cropped_y = 0;
  //             //$("#positionPreview").css("width", img.width - 100);
  //           } else {
  //             self.cropped_width = Timg.width;
  //             self.cropped_height = Timg.height;
  //             self.cropped_x = 0;
  //             self.cropped_y = 0;
  //           }
  //           dataImage.drawImage(Timg, 0, 0, Timg.width, Timg.height, 0, 0, width, height);
  //           if ($("#positionPreview").attr('src') != "" ) { // in condition && this.isEditPopup == 1

  //             self.cropOnclick();
  //             self.showEditImagePopup();

  //           }
  //         }
  //     }

  //   }
  // }

  public onPageloadGlassId() {
    // this.arrange();
    this.onPageload = 1;

    // this.datarr = localStorage.getItem('mats');

    // this.dataMatsArray = JSON.parse(this.datarr);

  }

  public showHardwarePopup() {
    // this.hardwarepopupStyle['display'] = 'block';
    $('#hardwarepopup').modal('show');
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
    console.log("Flag  =>  ", flag)
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
    console.log(this.parentHardwareId);
    if(flag === true){
      this.getPrice();
    }
    
  }

  public addToCart() {
    var returnVal = this.inputValidation();
    if (!returnVal) {
      $('#sizemodal').modal('show');
      $('.modal-backdrop').css('display', 'none');
      return false;
    }
    if ((this.mainImageUrl == "" && this.isUploadInProgress == 1)) {
      alert("Hold on, Image uploading is in progress...")
    } else {
      var self = this;
      $(".frame-hide-btn").click();
      $('#AddingToCart_modal').modal('show');

      if (this.isCollageApplied == false) {
        this.updateZoomValue();
      }
      // if (this.productCode != 38) {
      //   if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true && this.bottom_mat == "") {
      //     this.bottom_mat = 89;
      //   }
      //   if ($("#topmats").parent().find('input:checkbox').is(':checked') == true && this.top_mat == "") {
      //     this.top_mat = 61;
      //   }
      // }
      var topMatVal = this.top_mat;
      var bottomMatVal = this.bottom_mat;

      if ($("#bottommats").parent().find('input:checkbox').is(':checked') == false) {
        bottomMatVal = "";
      }
      if ($("#topmats").parent().find('input:checkbox').is(':checked') == false) {
        topMatVal = "";
      }
      var sid = $("#atfsid").val();
      var directory = $("#dir_id").val();
      // var prodNameSize = '(1) ' + self.customWidth + "x" + self.customHeight;
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
        vgroovshapecodes = $("#vgroov_" + this.selectedVgroove).attr("vgroovCode");
        // vgroovshapecodes = btoa($("#vgroov_" + this.selectedVgroove).attr('vgroovCode'));
        if (this.isCollageApplied == true) {
          vgroovBW = String(this.customWidth - 2);
          vgroovBH = String(this.customHeight - 2);
        } else {
          vgroovBW = this.customWidth + 2.5;
          vgroovBH = this.customHeight + 2.5;
        }
        vgroovDT = '1';
      }

      if ($("#fancyCheckbox").parent().find('input:checkbox').is(':checked') == true) {
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


      const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

      let body = new HttpParams();
      if (this.isCollageApplied == true) {
        var tempArr = self.cuts;
        tempArr.forEach(function (item, index) {

          body = body.append('cuts[' + index + '][shape]', self.cuts[index]['shape']);
          body = body.append('cuts[' + index + '][x]', self.cuts[index]['x']);
          body = body.append('cuts[' + index + '][y]', self.cuts[index]['y']);
          body = body.append('cuts[' + index + '][w]', self.cuts[index]['w']);
          body = body.append('cuts[' + index + '][h]', self.cuts[index]['h']);
          body = body.append('cuts[' + index + '][filter]', "");
          // body = body.append('cuts[' + index + '][rotate]', self.cuts[index]['rotate']);
          body = body.append('cuts[' + index + '][rotate]', '');
          body = body.append('cuts[' + index + '][zoom]', "1");
          if (self.cuts[index]['image'] != undefined && self.cuts[index]['image'] != "") {
            // body = body.append('cuts[' + index + '][image]', self.mainImageUrl);
            body = body.append('cuts[' + index + '][image]', self.cuts[ index ][ "image" ]);
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
            /*ppiRatio =  self.cuts[index]['position'][0] / self.cuts[index]['w'];
            
            imgCropTop= self.cuts[index]['position'][3] / ppiRatio;   
            imgCropLeft= self.cuts[index]['position'][2] / ppiRatio;   
           
            imgCropWidth= self.cuts[index]['size'][0] / ppiRatio;
            imgCropHeight = self.cuts[index]['size'][1] / ppiRatio;*/
            if (self.collageCropPositionArray != null) {
              ppiRatio = self.collageCropPositionArray[index]['w'] / self.cuts[index]['w'];

              imgCropTop = self.collageCropPositionArray[index]['y'] / ppiRatio;
              imgCropLeft = self.collageCropPositionArray[index]['x'] / ppiRatio;

              imgCropWidth = self.cuts[index]['size'][0] / ppiRatio;
              imgCropHeight = self.cuts[index]['size'][1] / ppiRatio;

              body = body.append('cuts[' + index + '][position][0]', String(imgCropWidth));
              body = body.append('cuts[' + index + '][position][1]', String(imgCropHeight));
              body = body.append('cuts[' + index + '][position][2]', String("-" + imgCropLeft));
              body = body.append('cuts[' + index + '][position][3]', String(imgCropTop));
            } else {
              body = body.append('cuts[' + index + '][position][0]', self.cuts[index]['position'][0]);
              body = body.append('cuts[' + index + '][position][1]', self.cuts[index]['position'][1]);
              body = body.append('cuts[' + index + '][position][2]', self.cuts[index]['position'][2]);
              body = body.append('cuts[' + index + '][position][3]', self.cuts[index]['position'][3]);
            }


            body = body.append('cuts[' + index + '][size][0]', self.collageOriginalSizeArray[index][0]);
            body = body.append('cuts[' + index + '][size][1]', self.collageOriginalSizeArray[index][1]);
          }

          if (self.cuts[index]['cropSelection'] != 0 && self.cuts[index]['image'] != "") {

            body = body.append('cuts[' + index + '][position][0]', String(self.collageCropPositionArray[index].w));
            body = body.append('cuts[' + index + '][position][1]', String(self.collageCropPositionArray[index].h));
            body = body.append('cuts[' + index + '][position][2]', String("-" + self.collageCropPositionArray[index].y));
            body = body.append('cuts[' + index + '][position][3]', String(self.collageCropPositionArray[index].x));

            body = body.append('cuts[' + index + '][size][0]', self.collageOriginalSizeArray[index][0]);
            body = body.append('cuts[' + index + '][size][1]', self.collageOriginalSizeArray[index][1]);
          }

        });

        body = body.set('matcode', "custom");
        body = body.set('openingsizes', prodNameSize);
        // body = body.set('lastViewedProductConfig[0][matcode]', this.matcode);
        // body = body.set('framePriceData[change_item]', 'matcode');

      } else {

        body = body.set('cuts[0][position][0]', this.imgPosition[0]);
        body = body.set('cuts[0][position][1]', this.imgPosition[1]);
        body = body.set('cuts[0][position][2]', this.imgPosition[2]);
        body = body.set('cuts[0][position][3]', this.imgPosition[3]);
        body = body.set('cuts[0][zoom]', this.imgPosition[4]);

        body = body.set('cuts[0][size][0]', this.imgPosition[5]);
        body = body.set('cuts[0][size][1]', this.imgPosition[6]);
        body = body.set('cuts[0][size][mime]', "image/jpeg");

        body = body.set('cuts[0][shape] ', self.cuts[0]['shape']);
        body = body.set('cuts[0][y]', "2.00");
        body = body.set('cuts[0][x]', "2.00");
        body = body.set('cuts[0][w]', this.customWidth);
        body = body.set('cuts[0][h]', this.customHeight);
        body = body.set('cuts[0][filter]', '');
        body = body.set('cuts[0][rotate]', rotate ? rotate : '');
        body = body.set('cuts[0][image]', btoa(this.mainImageUrl));
        body = body.set('cuts[0][bottomMatBordercut]', '#FEFEFA');
        body = body.set('cuts[0][topMatBordercut]', '#Array');
        body = body.set('cuts[0][thirdMatBordercut]', '#FEFEFA');

        // body = body.set('matcode', 'custom');
        // body = body.set('openingsizes', prodNameSize);
        // body = body.set('framePriceData[change_item]', 'Single mat option Selected');

      }
      this.activeFrameLipWidth = $("#frame_" + this.frameCode).attr('data-lip_width')
      this.framewidth = $("#frame_" + this.frameCode).attr('data-width')
      var outsidewidth = (this.framewidth * 2) + (this.userInput.length - 1) + (this.userInput.length * 3) - (this.activeFrameLipWidth * 2) + 4;
      var outsideheight = (this.framewidth * 2) + 3 + 4 - (this.activeFrameLipWidth * 2);
      // body = body.set('lastViewedProductConfig[0][matcode]', '3');
      body = body.set('lastViewedProductConfig', '');
      body = body.set('mat_orders_id', '');
      body = body.set('glass[0]', '13.5');
      body = body.set('glass[1]', '15.5');
      body = body.set('glass[outsidewidth]', outsidewidth.toString());
      body = body.set('glass[ousidewidth]', outsidewidth.toString());
      body = body.set('glass[outsideheight]', outsideheight.toString());
      body = body.set('glass[insidewidth]', this.customWidth);
      body = body.set('glass[insideheight]', this.customHeight);
      body = body.set('glass[finishedwidth]', outsidewidth.toString());
      body = body.set('glass[finishedheight]', outsideheight.toString());
      body = body.set('glass[finalizedwidth]', "14.5");
      body = body.set('glass[finalizedheight]', "16.5");
      body = body.set('glass[frameWidth]', '1.25');

      body = body.set('isWordCutOutFrame', 'true');
      body = body.set('isMultipleOpenings', 'true');
      body = body.set('cutOutWord', '');
      body = body.set('ppi', this.ppi);
      body = body.set('swatch', '90');
      body = body.set('lipwidth', '18');      

      body = body.set('directory', directory);
      body = body.set('allow_customtext', '1');
      body = body.set('imagescale', '1');
      body = body.set('mat_width', this.matWidth);
      body = body.set('linethick', '0.25');


      // body = body.set('lastViewedProductConfig[0][current_width]', this.cuts[0]['w']);
      // body = body.set('lastViewedProductConfig[0][current_height]', this.cuts[0]['h']);
      // body = body.set('lastViewedProductConfig[0][framecode]', this.frameCode);
      // body = body.set('lastViewedProductConfig[0][color1id]', topMatVal);
      // body = body.set('lastViewedProductConfig[0][color2id]', bottomMatVal);
      // body = body.set('lastViewedProductConfig[0][color3id]', '');
      // body = body.set('lastViewedProductConfig[0][set_top_mat]', '1');
      // body = body.set('lastViewedProductConfig[0][set_bottom_mat]', '1');
      // body = body.set('lastViewedProductConfig[0][loaded]', 'true');

      body = body.set('lastViewedProductConfigId', 'false');
      body = body.set('version', '90');
      body = body.set('myrotate', '0');
      body = body.set('current_height', this.cuts[0]['h']);
      body = body.set('collageOpening[outsidewidth]', this.customWidth);
      body = body.set('collageOpening[outsideheight]', this.customHeight);
      body = body.set('vgroov', vgroov);
      body = body.set('vgroovshapecodes', vgroovshapecodes);
      body = body.set('vgroovshapecodesold', vgroovshapecodes);
      body = body.set('vgroov_BoundWidth', this.boundWidth);
      body = body.set('vgroov_BoundHeight', this.boundHeight);
      // body = body.set('vgroovshapecodes', "2;1;BW:BH;0.175;0.25;0xCL;CL+CLxCL;CL+CLxCL+CL;CLxCL+CL;CLx0;BW-CLx0;BW-CLxCL+CL;BW-CL-CLxCL+CL;BW-CL-CLxCL;BWxCL;BWxBH-CL;BW-CL-CLxBH-CL;BW-CL-CLxBH-CL-CL;BW-CLxBH-CL-CL;BW-CLxBH;CLxBH;CLxBH-CL-CL;CL+CLxBH-CL-CL;CL+CLxBH-CL;0xBH-CL;0xCL;");
      // body = body.set('vgroovshapecodesold', "2;1;BW:BH;0.175;0.25;0xCL;CL+CLxCL;CL+CLxCL+CL;CLxCL+CL;CLx0;BW-CLx0;BW-CLxCL+CL;BW-CL-CLxCL+CL;BW-CL-CLxCL;BWxCL;BWxBH-CL;BW-CL-CLxBH-CL;BW-CL-CLxBH-CL-CL;BW-CLxBH-CL-CL;BW-CLxBH;CLxBH;CLxBH-CL-CL;CL+CLxBH-CL-CL;CL+CLxBH-CL;0xBH-CL;0xCL;");
      // body = body.set('vgroov_BoundWidth', "16.34375");
      // body = body.set('vgroov_BoundHeight', "4.21875");
      body = body.set('matDist', '0.125');
      body = body.set('vgroovCollageCutMetrics[minX]', '1.875');
      body = body.set('vgroovCollageCutMetrics[minY]', '2');
      body = body.set('vgroovCollageCutMetrics[maxX]', '17.125');
      body = body.set('vgroovCollageCutMetrics[maxY]', '5.125');
      body = body.set('vgroov_DT', '0.234375');
      // body = body.set('vgrooveDT', vgroovDT);
      body = body.set('vgroovmouseover', '0');
      body = body.set('vgroovset', '1');

      body = body.set('mouseOverLinerFrameCode', '');
      body = body.set('linerframeset', '0');
      body = body.set('linerFrameWidth', '');
      body = body.set('linerFrameLipWidth', '');

      body = body.set('designerMatId', designerMatId);
      // body = body.set('popupMatID', popupMatID);
      body = body.set('popupMat', ' ');
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
      // body = body.set('popupMat_openingWidth', this.customWidth);
      // body = body.set('popupMat_openingHeight', this.customHeight);

      /* body = body.set('vgroov_BoundWidth', 'NaN');
       body = body.set('vgroov_BoundHeight', 'NaN');*/
      // body = body.set('framePriceData[url]', 'https://www.arttoframe.com/price_calc.php');
      // body = body.set('framePriceData[app_name]', 'customframe');
      // body = body.set('framePriceData[inside_width]', this.priceTempArr['inside_width']);
      // body = body.set('framePriceData[inside_height]', this.priceTempArr['inside_height']);
      // body = body.set('framePriceData[opening_size]', prodNameSize);
      // body = body.set('framePriceData[matcode]', 'custom');
      // body = body.set('framePriceData[topmat_width]', '2.00');
      // body = body.set('framePriceData[bottommat_width]', '0.25');
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
      // body = body.set('framePriceData[glass_type]', this.selectedGlassVal);
      // body = body.set('framePriceData[backing_type]', '2');
      // body = body.set('framePriceData[debug]', 'debug');
      // body = body.set('framePriceData[cut_val]', '0');
      // body = body.set('framePriceData[color_filter]', '');

      var uploaded = $("#positionPreview").attr('src');
      if (uploaded != "") {
        // self.imageDataForLog(1);
        // body = body.set('framePriceData[printing_type]', "21");
      } else {
        // self.imageDataForLog(0);
        // body = body.set('framePriceData[printing_type]', "24");
      }
      // body = body.set('framePriceData[hardware_id]', this.hardwareID);
      // body = body.set('framePriceData[hardware_type]', this.hardwareID);
      // body = body.set('framePriceData[vgroov]', vgroov);
      // body = body.set('framePriceData[vgroovshapecodes]', vgroovshapecodes);
      // body = body.set('framePriceData[cuts_width]', this.customWidth);
      // body = body.set('framePriceData[cuts_height]', this.customHeight);
      // body = body.set('framePriceData[BoundWidth]', this.boundWidth);
      // body = body.set('framePriceData[BoundHeight]', this.boundHeight);
      // body = body.set('framePriceData[popupMat]', '1');
      // body = body.set('framePriceData[appliedMat]', '');
      // body = body.set('framePriceData[designerMatId]', popupMatID);
      // body = body.set('framePriceData[paper_backing]', '9');
      // body = body.set('framePriceData[website]', '2');
      // body = body.set('framePriceData[show_cost]', '1');


      // body = body.set('price[numShippingDay]', this.priceTempArr['numShippingDay']);
      body = body.set('price[total]', this.priceTempArr.price);
      body = body.set('price[additionalPriceInDollar]', '');
      body = body.set('price[ships_in_days]', this.priceTempArr['ships_in_days']);
      body = body.set('price[frame]', this.priceTempArr['frame']);
      body = body.set('price[glass]', this.priceTempArr['glass']);
      body = body.set('price[glassPriceV2]', this.priceTempArr['glassPriceV2']);
      body = body.set('price[topMatPriceV2]', this.priceTempArr['topMatPriceV2']);
      body = body.set('price[paper]', this.priceTempArr['paper']);
      body = body.set('price[base_price]', this.priceTempArr['base_price']);
      body = body.set('price[pricecalc_discount]', this.priceTempArr['pricecalc_discount']);
      body = body.set('price[discounted_price]', this.priceTempArr['discounted_price']);
      body = body.set('price[vgroovPrice]', this.priceTempArr['vgroovPrice']);
      body = body.set('price[designerMatPrice]', this.priceTempArr['designerMatPrice']);
      body = body.set('price[framePriceV2]', this.priceTempArr['framePriceV2']);
      body = body.set('price[paperPriceV2]', this.priceTempArr['paperPriceV2']);
      body = body.set('price[is_standard_size]', this.priceTempArr['is_standard_size']);
      body = body.set('price[frame_cost_price]', this.priceTempArr['frame_cost_price']);
      // body = body.set('price[frame_cost_only]', this.priceTempArr['frame_cost_only']);
      body = body.set('price[glass_curve_price]', this.priceTempArr['glass_curve_price']);
      // body = body.set('price[time_factor][times_factor]', this.priceTempArr.time_factor['times_factor']);
      body = body.set('price[product_time_factor]', this.priceTempArr['product_time_factor']);
      body = body.set('price[cost_base_price]', this.priceTempArr['cost_base_price']);
      body = body.set('price[glass_cost_price]', this.priceTempArr['glass_cost_price']);
      // body = body.set('price[fitting_cost_price]', this.priceTempArr['fitting_cost_price']);
      body = body.set('price[mat1_cost_price]', this.priceTempArr['mat1_cost_price']);
      body = body.set('price[printing_cost_price]', this.priceTempArr['printing_cost_price']);
      body = body.set('price[hardware_cost_price]', this.priceTempArr['hardware_cost_price']);
      body = body.set('price[personalized_cost_glass]', this.priceTempArr['personalized_cost_glass']);
      body = body.set('price[paper_backing_cost_price]', this.priceTempArr['paper_backing_cost_price']);
      body = body.set('price[backing_cost_price]', this.priceTempArr['backing_cost_price']);
      // body = body.set('price[design_charge]', '');
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
      // body = body.set('price[actual_item_weight]', this.priceTempArr['product_weight']);
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
      body = body.set('price[keywords]', this.priceTempArr['keywords']);

      // / Added new params
      body = body.set('price[item_weight]', this.priceTempArr['item_weight']);
      body = body.set('item_weight', "");
      body = body.set('price[bottomMatPriceV2]', this.priceTempArr['bottomMatPriceV2']);
      body = body.set('price[time_factor]', this.priceTempArr['time_factor']);
      body = body.set('price[frame_material_cost]', this.priceTempArr['frame_material_cost']);
      body = body.set('price[glass_material_cost]', this.priceTempArr['glass_material_cost']);
      body = body.set('price[glass_curve_material_cost]', this.priceTempArr['glass_curve_material_cost']);
      body = body.set('price[glass_curve_time_factor]', this.priceTempArr['glass_curve_time_factor']);
      body = body.set('price[glass_time_factor]', this.priceTempArr['glass_time_factor']);
      body = body.set('price[mat1_time_factor]', this.priceTempArr['mat1_time_factor']);
      body = body.set('price[mat_material_cost1]', this.priceTempArr['mat_material_cost1']);
      body = body.set('price[mat2_cost_price]', this.priceTempArr['mat2_cost_price']);
      body = body.set('price[mat2_time_factor]', this.priceTempArr['mat2_time_factor']);
      body = body.set('price[mat_material_cost2]', this.priceTempArr['mat_material_cost2']);
      body = body.set('price[printing_material_cost]', this.priceTempArr['printing_material_cost']);
      body = body.set('price[printing_time_factor]', this.priceTempArr['printing_time_factor']);
      body = body.set('price[hardware_material_cost]', this.priceTempArr['hardware_material_cost']);
      body = body.set('price[hardware_time_factor]', this.priceTempArr['hardware_time_factor']);
      body = body.set('price[paper_backing_time_factor]', this.priceTempArr['paper_backing_time_factor']);
      body = body.set('price[paper_backing_material_cost]', this.priceTempArr['paper_backing_material_cost']);
      body = body.set('price[backing_time_factor]', this.priceTempArr['backing_time_factor']);
      body = body.set('price[backing_material_cost]', this.priceTempArr['backing_material_cost']);
      body = body.set('price[shipping_template]', this.priceTempArr['shipping_template']);
      body = body.set('price[box_query]', this.priceTempArr['box_query']);
      body = body.set('price[amazon_shipping_template]', this.priceTempArr['amazon_shipping_template']);
      body = body.set('price[3_cost_price]', this.priceTempArr['3_cost_price']);
      body = body.set('price[3_time_factor]', this.priceTempArr['3_time_factor']);
      body = body.set('price[3_material_cost]', this.priceTempArr['3_material_cost']);
      body = body.set('price[3_base_price]', this.priceTempArr['3_base_price']);
      body = body.set('price[free_shipping_cost]', this.priceTempArr['free_shipping_cost']);
      body = body.set('price[discount]', this.priceTempArr['discount']);
      body = body.set('price[atf_cost]', this.priceTempArr['atf_cost']);
      body = body.set('price[calculated_times_cost]', this.priceTempArr['calculated_times_cost']);
      body = body.set('price[3P_time_cost]', this.priceTempArr['3P_time_cost']);
      body = body.set('price[ad_margin_limit]', this.priceTempArr['ad_margin_limit']);
      body = body.set('price[shipping_time]', this.priceTempArr['shipping_time']);

      body = body.set('AccountName', 'ArtToFrames - CF Angular');
      body = body.set('user_sid', sid);
      body = body.set('mat_id', 'custom');
      body = body.set('frame_code', this.frameCode);
      body = body.set('color1_id', this.top_mat);
      body = body.set('color2_id', '');
      body = body.set('border', '0.25');
      if (uploaded != "") {
        body = body.set('paper_id', '21');
      } else {
        body = body.set('paper_id', '24');
      }
      body = body.set('backing_id', '2');
      body = body.set('glass_id', this.selectedGlassVal);

      body = body.set('hardware_id', this.hardwareID);
      body = body.set('hardware_two_id', this.parentHardwareId);
      body = body.set('rotate', '0');
      body = body.set('current_width', this.cuts[0]['w']);
      body = body.set('cutImageUploaded', 'false');
      body = body.set('free_shipping', '0');
      body = body.set('offer_id', '0');
      body = body.set('image_type', '');
      body = body.set('pattern_id', '');
      body = body.set('top_width', '2.00');
      body = body.set('bottom_width', '2');
      body = body.set('left_width', '2.00');
      body = body.set('right_width', '2.00');
      body = body.set('desktopVersion', '6');
      body = body.set('isLetterArt', '');
      body = body.set('color3_id', '');
      body = body.set('wordcutout', 'true');
      body = body.set('cutoutword', this.userInput.toUpperCase());
      body = body.set('diplomaFrame', '0');
      body = body.set('page_type', 'M');
      // body = body.set('quantity', $('.Qty_cls').val());
      // if (self.pod_image_id != 0) {
      //   body = body.set('pod_image_id', self.pod_image_id);
      // }
      setTimeout(function () {
        // if(self.isCollageApplied == false){
        if (self.productCode == 38 && self.isCollageApplied == false) {
          let bodySF = new HttpParams();
          bodySF = bodySF.set('is_https_site', "1");
          bodySF = bodySF.set('type', "wom");
          bodySF = bodySF.set('singal_mat', "no");
          bodySF = bodySF.set('frame_code', self.frameCode);
          bodySF = bodySF.set('size', $("#customWidth").val() + "x" + $("#customHeight").val());
          bodySF = bodySF.set('mat_color_code', self.top_mat);
          bodySF = bodySF.set('mat2_color_code', self.bottom_mat);
          bodySF = bodySF.set('mat_cut_id', $("#customWidth").val() + "x" + $("#customHeight").val());
          bodySF = bodySF.set('glass_type', self.selectedGlassVal);
          bodySF = bodySF.set('hardware_type', self.hardwareID);
          bodySF = bodySF.set('dimension', "T:0.00,B:0.00,L:0.00,R:0.00");
          bodySF = bodySF.set('backing_type', "1");
          bodySF = bodySF.set('orderquantity', "1");
          bodySF = bodySF.set('page_type', "M");
          bodySF = bodySF.set('diploma_tussel_flag', "");
          bodySF = bodySF.set('frame_type', "frames");

          //var isExicute = false;
          self.http.post("https://www.arttoframe.com/cartmanager_search_productpage.php", bodySF, {
            headers: myheader
          }).subscribe(response => {

          },
            error => {
            });

          setTimeout(function () {
            self.http.get("https://www.arttoframe.com/custom_framing/preview/actions/getCartId.php?is_https_site=1", {
              headers: myheader
            }).subscribe(response => {
              document.location.href = "https://www.arttoframe.com/cart.php?cart=" + response;
            })
          }, 500)

        }
        // }
        else {
          self.Helper.addtocart(body, self.tempCanvas.nativeElement, 5);
        }
        /*  self.http.post("https://www.arttoframe.com/custom_framing/preview/actions/addToCart_dev_ng.php", body, {
           headers: myheader
         }).subscribe(response => {
           if (response) {
             self.getSVGToPNG(response);
             // self.WriteToFile("addToCart Request is successful");
             setTimeout(() => {
               $('#AddingToCart_modal').modal('hide');
               $('#AddingToCart_success').modal('show');
               $('#cartCntMobile').html(" " + ((parseFloat(($('#cartCntMobile').html().split(" ")[1])) + 1).toString()))
             }, 100);
             // document.location.href = "https://www.arttoframe.com/cart";
           } else {
           }
         },
           error => {
  
           }); */
      }, 100);
    }
  }

  public confirmSizeE() {
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
        this.customWidth = 19;
        this.customHeight = 7;
        $("#customWidth").val(this.customWidth);
      }
      
      if (this.customHeight >= 3 && this.customHeight <= 36) {
        $("#customHeight").val(this.customHeight);
      } else {
        this.customWidth = 19;
        this.customHeight = 7;
        $("#customHeight").val(this.customHeight);
      }

    }
    this.arrange();
    // this.getPrice();
  }

  public changeMat(e) {
    this.isSelectedMatNotFound = true;
    $(".ngxcarouselPoint li").removeClass("active");
    $(".ngxcarouselPoint li:first-child").addClass("active").click();

    this.activeTab = $(".disabled_tab.active").attr('data-tab');

    if (this.activeTab == "nomats") {
      if ($("#nomats").parent().find('input:checkbox').is(':checked') == true) {
        this.matWidth = 0;
        $("#innerlayer-canvas").css("display", "none");
      }
    }

    if (this.activeTab == "top") {
      if ($("#topmats").parent().find('input:checkbox').is(':checked') == true) {
        this.matWidth = 2;
        this.top_mat = e.code;
      }
    }

    // if (this.activeTab == "bottom") {
    //   if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
    //     $("#innerlayer-canvas").css("display", "block");
    //     this.matWidth = 2;
    //     this.bottom_mat = e;
    //   }
    // }

    this.selected_mat = e.code;
    this.TopMatTitle = e.name;
    
    let self = this;
    let tmpFrameMaxWidth = this.customWidth;
    let tmpFrameMaxHeight = this.customHeight;
    setTimeout(() => {
      self.Helper.validateMats(
        self.top_mat,
        tmpFrameMaxWidth,
        tmpFrameMaxHeight,
        self.isCollageApplied, false
      );
    }, 100);
    // this.arrange();
    // var openingSize = this.customWidth + "x" + this.customHeight;
    // var frameName: any = "-" + this.activeFrameName.replace(/ /g, "-");
    // var productTitle = "-picture-frame/"
    // var currentColor = this.TopMatTitle + '/';
    // let UpdatedRoute = openingSize + frameName + productTitle + currentColor.replace(" ", "-") + this.top_mat;
    // history.pushState(null, null, "/" + UpdatedRoute + "?page_type=M");
    //if (this.activeTab == "nomats") {
    this.confirmSizeE();
    //} else {
    //this.applyChanges();
    //}

    // if (this.isCollageApplied == true) {
    //   this.setSecondMatCollage();
    // }
  }

  public selectMats(mat) {

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

        // if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
        //   $("#bottommats").prop('checked', false).removeAttr('checked');
        //   $("#fancyCheckbox").prop('checked', false).removeAttr('checked');
        // }

        $("#nomats").prop('checked', true);
        this.activeTab = "nomats";
        this.matWidth = 0;
      }

    }

    // if (mat == "bottommats") {

    //   if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
    //     $("#nomats").prop('checked', false).removeAttr('checked');
    //     $("#bottommats,#topmats").prop('checked', true);
    //     $("#innerlayer-canvas").css("display", "block");
    //     this.matWidth = 2;
    //     this.activeTab = "bottommats";
    //     this.selected_mat= this.bottom_mat;
    //   } else {
    //     $("#bottommats").prop('checked', false).removeAttr('checked');
    //     $("#fancyCheckbox").prop('checked', false).removeAttr('checked');
    //     $("#innerlayer-canvas, #popupmatcanvas").css("display", "none");
    //     this.selected_mat = "";
    //   }

    // }
    $(".new-cf-tabs").show();
    this.arrange();
    this.applyChanges();
  }


  public getFrameFilterColorsName() {
    var self = this;
    this.frameFilterID = $("#selFrameColor :selected").val();
    this.showFrames("frame");
    // if (this.frameFilterID == 0) {
    //   this.datarr = localStorage.getItem('frames');
    //   this.OnloadFrames = JSON.parse(this.datarr);
    //   this.showFrames('frames');
    //   this.frameModal = true;
    //   return;
    // }

    // var col1arr = [];
    // var col2arr = [];
    // var col3arr = [];
    // var col4arr = [];
    // var mainFilterArrray = [];
    // // self.datarr = localStorage.getItem('frames');
    // // self.OnloadFrames = JSON.parse(self.datarr);
    // for (let index = 0; index < self.OnloadFrames.length; index++) {
    //   var color1 = self.OnloadFrames[index].color1;
    //   var color2 = self.OnloadFrames[index].color2;
    //   var color3 = self.OnloadFrames[index].color3;

    //   if (color1 == self.frameFilterID && color2 == 0 && color3 == 0) {
    //     col1arr.push(self.OnloadFrames[index]);
    //   } else

    //     if (color1 == self.frameFilterID && color2 != 0 && color3 == 0) {
    //       col2arr.push(self.OnloadFrames[index]);
    //     } else

    //       if (color1 != 0 && color2 == self.frameFilterID && color3 == 0) {
    //         col3arr.push(self.OnloadFrames[index]);
    //       } else

    //         if (color1 != 0 && color2 != 0 && color3 == self.frameFilterID) {
    //           col4arr.push(self.OnloadFrames[index]);
    //         }

    // }
    // setTimeout(() => {
    //   col3arr = col3arr.concat(col4arr);
    //   col2arr = col2arr.concat(col3arr);
    //   col1arr = col1arr.concat(col2arr);
    //   mainFilterArrray.push(col1arr)

    //   if (col1arr.length == 0) {
    //     self.OnloadFrames = JSON.parse(localStorage.getItem('frames'));
    //     this.getFrameFilterColorsName();
    //     $("#myframe_sortby").val("")
    //   }


    //   if (this.frameFilterID != 0) {
    //     this.OnloadFrames = mainFilterArrray[0];
    //   } else {
    //     this.datarr = localStorage.getItem('frames');
    //     this.OnloadFrames = JSON.parse(this.datarr);
    //     this.frameModal = true;

    //   }
    //   this.showFrames('frames');
    //   $(".myFrame").removeClass("frame_active");
    //   $("#myFrame_" + this.frameCode).addClass("frame_active");
    //   $(".bxsliderCF").scrollLeft(0);
    //   $('select[id="selFrameColor"] option').removeAttr('selected');
    //   $('select[id="selFrameColor"]').find('option[value=' + this.frameFilterID + ']').attr("selected", true);
    // }, 20);

  }

  // public getMatColorFilterData() {

  //   const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  //   let body = new HttpParams();
  //   body = body.set('mat_color', this.matFilterID);

  //   this.http.post<any>("https://www.arttoframe.com/ng/assets/api/v2/index.php?action=getMatFilterDataByColors", body, {
  //     headers: myheader
  //   }).subscribe(res => {
  //     if (res) {
  //       this.dataMatsArray = $.parseJSON(res.data);
  //       $(".bxsliderCF").scrollLeft(0);
  //     } else {
  //     }

  //   },
  //     error => {
  //     });
  // }

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
              this.customWidth,
              this.customHeight,
              this.isCollageApplied, false
            );
          } else {
          }
        },
        (error) => {
        }
      );
  }

  public selectMatFilter(id) {
    var param = "filter";
    this.matFilterID = id;
    $('.matFilterCls').removeClass("matfilter-name-active");
    $('.matFilterCls').removeClass("matfilter-name");
    $('.matFilterCls').addClass("matfilter-name");
    $("#matColor_" + id).removeClass("matfilter-name");
    $("#matColor_" + id).addClass("matfilter-name-active");

    // this.datarr = localStorage.getItem('mats');
    this.getFilterMatsData();
    // if (param == "filter" && this.matFilterID != 0) {
    //   this.getMatColorFilterData();
    // } else {
    //   this.dataMatsArray = JSON.parse(this.datarr);
    //   this.Helper.validateMats(
    //     this.top_mat,
    //     this.customWidth,
    //     this.customHeight,
    //     this.isCollageApplied
    //   );
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

  public validateMats(top_mat, mat_width, mat_height, isCollageApplied){

    var big_mat = 0;
    var medium_mat = 0;
    var small_mat = 0;
    // var mat_width = 0;
    // var mat_height = 0;
    var mat_code;
    var tempMatArray = [];

    console.log(mat_width, mat_height)

    if ((mat_width <= 32 && mat_height <= 40) || (mat_width <= 40 && mat_height <= 32)) {
      small_mat = 1;
    } else if ((mat_width <= 40 && mat_height <= 60) || (mat_width <= 60 && mat_height <= 40)) {
      medium_mat = 1;
    } else if ((mat_width <= 48 && mat_height <= 96) || (mat_width <= 96 && mat_height <= 48)) {
      big_mat = 1;
    }
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

    let tempArray = this.dataMatsArray.filter((data) => this.selected_mat === data.code)
    if(tempArray.length === 0){
      // if(!this.isSelectedFrameNotFound){
        $("#myModal_maxsize h4").html(
          " Please switch to another mat from bellow mat tab."
        );
        $("#myModal_maxsize").modal("show");
      // }
        console.log(this.dataMatsArray)
      this.isSelectedFrameNotFound = false;
      this.oldSelectedMatCode = this.selected_mat;
      this.selected_mat = this.dataMatsArray[0].code;
      this.showingChangeMatMessage = this.dataMatsArray[0].name;
      // this.changeMat(this.dataMatsArray[0])
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

    

    $(".bxsliderCFMat").scrollLeft(0);
    this.Helper.validateMats(
      this.top_mat,
      this.customWidth,
      this.customHeight,
      this.isCollageApplied, false
    );
  }

  public getFrameSortData() {

    this.frameSortID = $("#myframe_sortby :selected").val();

    if (this.frameSortID == "") {
      // this.datarr = localStorage.getItem('frames');
      // this.OnloadFrames = JSON.parse(this.datarr);
      this.frameModal = true;
      // $("#selFrameColor").val(0);
      this.getFrameFilterColorsName();
      // this.showFrames('frames');
      $(".bxsliderCFWco").scrollLeft(0);
      return;
    }
    this.OnloadFrames = this.Helper.getFrameSortData(this.frameSortID, this.OnloadFrames);
    // this.showFrames('frames')
    $(".bxsliderCFWco").scrollLeft(0);
    return;
    /* if (this.frameSortID == "ASC") {
      this.OnloadFrames.sort((a, b) => {
        return a['framePrice'] - b['framePrice']
      })
      this.showFrames('frames');

      $(".bxsliderCF").scrollLeft(0);
      return;
    }

    if (this.frameSortID == "DESC") {

      this.OnloadFrames.sort(function (a, b) {
        return b['framePrice'] - a['framePrice']
      });
      this.showFrames('frames');

      $(".bxsliderCF").scrollLeft(0);
      return;
    } */
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
    this.change_item = "glass"
    this.getPrice();
  }

  public showGlass() {
    this.glassModalStyle['display'] = 'block';
    $('#glassModal').css('bottom', $('.new-cf-tabs').height() + $('.BottomAddtocartHolder').height() - 10 + 'px')
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
    var glass_name = $(".applicableGlass_" + this.selectedGlassVal).find('.glass-name').text();
    $("#glass_only_name").text(glass_name);
    $("#glass_plexi_name").text(glass_name);
    $(".glassdetail span").text(glass_name);
    // this.datarr = localStorage.getItem('glass');
    // this.glassArr = JSON.parse(this.datarr);

    this.glassArr.forEach((data)=>{
      if(data.code === '114'){
        data['image'] = this.Helper.cdn3 + "/products/glaze/new/Plexi-Regular.png";
      }
    })

    if ((this.customWidth >= 16.1 || this.customHeight >= 20.1) || (this.customWidth >= 20.1 || this.customHeight >= 16.1)) {
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
    // this.change_item = "glass";
    // this.getPrice();
  }
  public getDefaultGlassID() {
    var self = this;
    var matWidth = this.customWidth;
    var matHeight = this.customHeight;
    console.log(matWidth, matHeight )
    // let matWidth = parseFloat(this.outSideWidth) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
    // let matHeight = parseFloat(this.outSideHeight) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
    return this.Helper.getDefaultGlassID(this.glassArr, matWidth, matHeight, self.selectedGlassVal, self.changeGlassManually);

    /* this.tempSelectedGlassArray = [];


    var tempglassArray = this.glassArr

    tempglassArray.sort((a, b) => {
      return a['code'] - b['code']
    })

    for (let item of tempglassArray) {

      var glassMaxSize1 = item.max_size1;
      var glassMaxSize2 = item.max_size2;

      if ((matWidth < glassMaxSize1 && matHeight < glassMaxSize2) || (matWidth < glassMaxSize2 && matHeight < glassMaxSize1)) {
        this.tempSelectedGlassArray.push(item);
      }
    }
    // console.table("this.tempSelectedGlassArray===")
    // console.table(this.tempSelectedGlassArray)

    for (let item of self.tempSelectedGlassArray) {
      if (item.code == self.selectedGlassVal && self.changeGlassManually == 1) {
        return item.code;
      } else if ((item.default_glass == 1 || item.default_plexi == 1) && self.changeGlassManually == 0) {
        return item.code;
      }
    }
    if (self.tempSelectedGlassArray[0] == undefined) {
      return self.selectedGlassVal;
    } else {
      return self.tempSelectedGlassArray[0].code;
    } */
  }

  public showGlassPoup() {
    $('#glassPopup').modal('show');

    if (this.onLoadGlassFlag == 1) {
      this.onLoadGlassFlag = 0;
      this.selectedGlassVal = this.getDefaultGlassID();
      $(".confirmGlass").text("CONFIRM");
      $(".selectedGlass_" + this.selectedGlassVal).text("Selected");
      $(".seeMoreBtn_" + this.selectedGlassVal).hide();
    }
    var glass_name = $(".applicableGlass_" + this.selectedGlassVal).find('.glass-name').text();
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
    var glassMaxWidth = this.customWidth + 4;
    var glassMaxHeight = this.customHeight + 4;

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

    var self = this;
    var glassMaxWidth = self.outSideHeight;
    var glassMaxHeight = self.outSideWidth;

    return this.Helper.defaulthardwareid(this.hardwareData, glassMaxWidth, glassMaxHeight, self.hardwareID, self.changeHardwareManually, 57);


    /* var defalt_id = '52';
    for (let item of this.hardwareData) {

      var glassMaxSize1 = parseFloat(item.max_size1);
      var glassMaxSize2 = parseFloat(item.max_size2);

      if ((glassMaxWidth < glassMaxSize1 && glassMaxHeight < glassMaxSize2) || (glassMaxWidth > glassMaxSize1 && glassMaxHeight < glassMaxSize1 && glassMaxWidth < glassMaxSize2)) {
        this.tempHardwareArray.push(item);
      }
    }
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
    if (action == "vgroove") {
      this.infomodalStyle['vgrooveDisplay'] = 'block';
    }

    if (action == "price") {

      this.infomodalStyle['priceDisplay'] = 'block';
      //$('#infomodal').show();
      $('.modal-backdrop').css('z-index', '999');
      $('.modal-backdrop').css('display', 'block');
      $('#infomodal').modal({
        keyboard: true
      });
      $('.framematerialdetail span').text(this.frameMaterial);
      // $('.modal-backdrop').css('display', 'none');
      $('.framecodedetail span').text(this.frameCode);
      $('.framenamedetail span').text($('.fname_' + this.frameCode).html());
      var prodNameSize = "(" + this.userInput.length + ") " + this.cuts[0]['w'] + "x" + this.cuts[0]['h'];
      // $('.openingsizedetail span').text(this.customWidth + 'x' + this.customHeight);
      $('.openingsizedetail span').text(prodNameSize);
      var finishedwidth = 10;
      var finishedHeight = 12;
      if ($("#frame_" + this.frameCode).attr('data-width') != undefined) {
        finishedwidth = parseFloat(this.outSideWidth) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
        finishedHeight = parseFloat(this.outSideHeight) + ((parseFloat($("#frame_" + this.frameCode).attr('data-width')) - parseFloat($("#frame_" + this.frameCode).attr('data-lip_width'))) * 2);
      }


      $('.finishedsizedetail span').text(finishedwidth + "x" + finishedHeight);
      $('#popupPrice').html($('.price-txt').html());
      // if ($("#nomats").parent().find('input:checkbox').is(':checked') == false) {
      $('.topmatcolordetail span').text($('.matName_' + this.top_mat).html());
      //   $('.bottommatcolordetail span').text($('.matName_' + this.bottom_mat).html());
      // } else {
      //   $('.topmatcolordetail span,.bottommatcolordetail span').text("No mat")
      // }
      this.hardwareID = this.defalt_hardware_id();
      if ($('#hardware_' + this.hardwareID).html() != undefined) {
        $('.hardwaredetail span').text($('#hardware_' + this.hardwareID).html().split('<')[0]);
      }
      if ($("#bottommats").parent().find('input:checkbox').is(':checked') == false) {
        $('.bottommatcolordetail span').text("No mat");
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
    this.singlePopupMatImg = id;
    $("#fancyCheckbox").prop('checked', true);

    if ($("#fancyCheckbox").parent().find('input:checkbox').is(':checked') == true && this.isCollageApplied == false) {
      this.setPopupMat(id);
      $('#popupmatcanvas').css("display", "block");
      $('#innerlayer-canvas').css("display", "none");
      $('.mat-checkbox-green1').removeClass("fancy_active");
      $('.fancySelect_' + id).addClass("fancy_active");
    } else {
      $('.mat-checkbox-green1').removeClass("fancy_active");
      this.arrange();
      $('#popupmatcanvas').css("display", "none");
      // $('#innerlayer-canvas').css("display","block");
      $('#innerlayer-canvas').css("display", "none");
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
    self.getPrice();
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

  public getSVGToPNG(response) {
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
          document.location.href = "https://www.arttoframe.com/cart";
        });
      }

    } else {

      $(".cartImage, .cartImg2").attr('src', 'https://www.arttoframe.com/custom_framing/order/' + response.orderId + '/preview.jpg?' + new Date().getTime());
      document.location.href = "https://www.arttoframe.com/cart";
    }
  }

  public vgrooveSwitch() {

    if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
      this.applyVGroove(this.selectedVgroove);
    } else {
      $('#groovecanvas').hide();
      $('.mat-checkbox-green1').removeClass("vgroove_active");
      this.getPrice();
    }

  }

  public applyVGroove(id) {
    $("#vgrooveCheckbox").prop('checked', true);

    if ($("#vgrooveCheckbox").parent().find('input:checkbox').is(':checked') == true) {
      this.selectedVgroove = "";
      this.selectedVgroove = id;
      $('.mat-checkbox-green1').removeClass("vgroove_active");
      $('.vgrooveSelect_' + id).addClass("vgroove_active");
      $('#groovecanvas').show()
      this.setVgroove();
      this.getPrice();
    } else {
      $('#groovecanvas').hide();
    }
  }

  public setVgroove() {
    var self = this;
    var stroke = (parseFloat(self.linethick)) + 3;
    var matWidth = self.matWidth;
    var matDist = 0;
    //check
    if (self.isCollageApplied == false) {
      matDist = 0.05;

      if ($("#topmats").parent().find('input:checkbox').is(':checked') == true) {
        matDist = 0.125;
      }

      // if ($("#bottommats").parent().find('input:checkbox').is(':checked') == true) {
      //   matDist = 0.25;
      // }
    }

    var vgroovshapecodes = $("#vgroov_" + self.selectedVgroove).attr('vgroovCode');
    var vgroov_BoundWidth = parseFloat(self.customWidth) + matDist + (0.5 * 2);
    var vgroov_BoundHeight = parseFloat(self.customHeight) + matDist + (0.5 * 2);
    // this.boundWidth = parseFloat(self.customWidth) + matDist + (0.5 * 2);
    // this.boundHeight = parseFloat(self.customHeight) + matDist + ( 0.5 * 2);
    // this.boundWidth = (parseFloat(self.customWidth) + matDist + 0.5 * 2) - 4;
    // this.boundHeight = (parseFloat(self.customHeight) + matDist + 0.5 * 2) - 4;
    self.cutMetrics.maxX = parseFloat(self.customWidth) - 1.875;
    this.boundWidth = (parseFloat(self.cutMetrics.maxX) - 1.875) + (0.9375 / 2) + 0.125 + (0.25 * 2);
    this.boundHeight = 4.21875;
    self.vgroovConfigArr = self.getVgroovDesign(vgroovshapecodes, parseFloat(self.customWidth) + matDist, parseFloat(self.customHeight) + matDist);
    var data = encodeURIComponent(self.vgroovConfigArr.svg);
    var img = new Image();
    img.src = "data:image/svg+xml;utf8," + data;
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

  public getVgroovDesign(vgrooveCode, openingWidth, openingHeight) {

    console.log("Ahubh")
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


    // var self = this;
    // self.vgroovShapeCodesArray = vgrooveCode.split(';');
    // var vgroov_DT = parseFloat(self.vgroovShapeCodesArray[1]);
    // var DT = parseFloat(self.vgroovShapeCodesArray[1]) * self.ppi;

    // if (self.isCollageApplied == true) {
    //   DT = 0.5 * self.ppi;
    //   vgroov_DT = 0.5;
    // }

    // var BW = (openingWidth + parseFloat(self.vgroovShapeCodesArray[1]) * 2) * self.ppi;
    // var vgroov_BoundWidth = openingWidth + parseFloat(self.vgroovShapeCodesArray[1]) + parseFloat(self.vgroovShapeCodesArray[1]);

    // if (self.isCollageApplied == true) {
    //   var BW = (openingWidth + (0.5 * 2)) * self.ppi;
    //   vgroov_BoundWidth = openingWidth + (0.5 * 2);
    // }

    // var BH = (openingHeight + parseFloat(self.vgroovShapeCodesArray[1]) * 2) * self.ppi;
    // var vgroov_BoundHeight = openingHeight + parseFloat(self.vgroovShapeCodesArray[1]) + parseFloat(self.vgroovShapeCodesArray[1]);

    // if (self.isCollageApplied == true) {
    //   BH = (openingHeight + (0.5 * 2)) * self.ppi;
    //   vgroov_BoundHeight = openingHeight + (0.5 * 2);
    // }

    // var CL = parseFloat(self.vgroovShapeCodesArray[3]) * self.ppi;
    // var svg = '<svg id="vgroovFrame" xmlns="http://www.w3.org/2000/svg" width="' + (BW + 4) + '" height="' + (BH + 4) + '">';
    // var svgMain = '';
    // var svgShadow = '';
    // var svgShadowUp = '';

    // for (var i = 4; i <= self.vgroovShapeCodesArray.length - 1; i++) {
    //   svgMain += eval(self.vgroovShapeCodesArray[i].split('x')[0]) + "," + eval(self.vgroovShapeCodesArray[i].split('x')[1]) + " ";
    //   var a = eval(self.vgroovShapeCodesArray[i].split('x')[0]) + 1;
    //   var b = eval(self.vgroovShapeCodesArray[i].split('x')[1]) + 1;
    //   svgShadow += a + "," + b + " ";
    //   var c = eval(self.vgroovShapeCodesArray[i].split('x')[0]) - 0.5;
    //   var d = eval(self.vgroovShapeCodesArray[i].split('x')[1]) - 0.5;
    //   svgShadowUp += c + "," + d + " ";
    // }

    // var matCoreColor = "0xFEFEFA";
    // matCoreColor = matCoreColor.replace("0x", "#");
    // svg += '<polyline points="' + svgShadowUp + '" style="fill:#00ffff00;stroke:#737373;stroke-width:1" />';
    // svg += '<polyline points="' + svgShadow + '" style="fill:#00ffff00;stroke:#737373;stroke-width:1" />';

    // svg += '<polyline id="topLeft" points="' + svgMain + '" style="fill:#00ffff00;stroke:' + matCoreColor + ';stroke-width:1.5" />';
    // svg += '</svg>';
    // return {
    //   "svg": svg,
    //   "bw": BW,
    //   "bh": BH,
    //   "dt": DT,
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
      6: 52,
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

    this.res = this.getDataService.getWordcoutCuts(e)
      .subscribe(
        cuts => {
          var cuts = $.parseJSON(cuts.data);

        });


    this.res = this.getDataService.getWordcoutShape(parameters, e)
      .subscribe(
        result => {

          self.configuration = result;

          self.outSideHeight = self.configuration.collageOpening['outsideheight'];
          self.outSideWidth = self.configuration.collageOpening['outsidewidth'];
          self.collageOpenings = {

            outsideheight: self.configuration.collageOpening['outsideheight'],
            outsidewidth: self.configuration.collageOpening['outsidewidth']

          }
          // self.imagePath = self.configuration.collageOpening['letterImages'];
          self.canvasSecondMatScaleCollage = [];
          self.canvasImageScales = [];
          self.matcode = self.matCodeArray[e.length];

          self.isCollageApplied = true;
          self.confirmSizeE();

          $(this).find('img').attr('src', "https://www.arttoframe.com/custom_framing/design/activemobilethumbNew/" + self.matcode + ".jpeg?activeblue=blue");

          $('#imagelayer-canvas').css("background", "none");

          self.updateMainCanvasSizes();
          self.getPrice();

        });
  }

  public updateMainCanvasSizes() {
    var self = this;
    var opening = [];
    self.cuts = [];
    self.openingsizes = "";
    var tmp = self.configuration;

    $.each(tmp.cuts, function (index, item) {

      // this.baseUrl+'product_images/lib/'+this.configuration.cuts[cutId]['shape']+'.png';
      //var imagePath = "https://cdn2.arttoframe.com/images/upload-icon-19.png";
      var basePath = "https://www.arttoframe.com/";

      if (typeof (self.cuts[index]) == 'undefined') self.cuts[index] = {};
      var imageSizes = 0;
      if (self.collageImageArray[index] != undefined) {
        imageSizes = self.collageimageImageSizes[index]
      }
      self.cuts[index]['shape'] = tmp.cuts[index]["shape"];
      self.cuts[index]['x'] = tmp.cuts[index]["x"];
      self.cuts[index]['y'] = tmp.cuts[index]["y"];
      // if(self.collageImageArray[index] != undefined){
      self.cuts[index]['image'] = self.collageImageArray[index];
      // }
      // else{
      //   self.cuts[index]['image'] = "https://cdn.arttoframe.com/images/upload-with-text_05.svg";
      // }
      self.cuts[index]['Shapeimage'] = basePath + 'product_images/lib/' + tmp.cuts[index].shape + '.png';
      self.cuts[index]['w'] = tmp.cuts[index]["w"];
      self.cuts[index]['h'] = tmp.cuts[index]["h"];
      self.cuts[index]['size'] = 0;
      self.cuts[index]['position'] = 0;
      self.cuts[index]['original_position'] = index;
      self.cuts[index]['cropSelection'] = 0;
      self.cuts[index]['rotate'] = 0;
      self.cuts[index]['bottomMatBordercut'] = tmp.cuts[index]["bottomMatBordercut"];
      self.cuts[index]['letter'] = self.userInput.split('')[index];

    });


    $.each(opening, function (index, txt) {
      opening[index] = "(" + txt[0] + ") " + txt[1][0] + "x" + txt[1][1];
    });

    self.openingsizes = opening.join(", ");
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

      this.canvasSecondMatScaleCollage[i] = {
        top: top + 4,
        left: left + 4,
        width: width,
        height: height,
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
        width: imgWidthNew,
        height: imgHeightNew,
      };
      // this.drawImageTempScalePreviewSRC(this.cuts[i]['image'],this.cuts[i]['Shapeimage']);
      //this.CreateLetterArtCanvas(this.cuts[i]);
      this.getDefaultGlassID();
    }
    this.setSecondMatCollage();
    this.setCanvasOpenings();
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
    self.canvasImageScales.forEach(function (item, i) {
      if (self.configImageDataUrl[i] != undefined) {
        $('.openingImg').find('img#opening_' + i).attr('src', self.configImageDataUrl[i]).attr('width', item.width).attr('height', item.height);
      } else {
        //$('.openingImg').find('img#opening_'+i).attr('src', "https://www.arttoframe.com/custom_framing/preview/images/upload1.svg?v=1").attr('width', item.width).attr('height', item.height);
        $('.openingImg').find('img#opening_' + i).attr('src', "https://www.arttoframe.com/images/upload-with-text_05.svg").attr('width', item.width).attr('height', item.height).attr('style', 'display:none');
      }
      openingSelector += '<div class="openingSelector" id="openingSelector_' + i + '" style="top:' + self.canvasSecondMatScaleCollage[i]['top'] + 'px;left:' + self.canvasSecondMatScaleCollage[i]['left'] + 'px;width:' + self.canvasSecondMatScaleCollage[i]['width'] + 'px;height:' + self.canvasSecondMatScaleCollage[i]['height'] + 'px; background:transparent; position:absolute;"></div>';
      $('#openingSelectorContainer').width(imagelayerCanvas.width).height(imagelayerCanvas.height).html(openingSelector);

      var imageResizeData = new Image()
      imageResizeData.src = $('.openingImg').find('img#opening_' + i).attr('src');

      imageResizeData.onload = function () {

        var imgLeft = item.left;
        var imgTop = item.top;
        var ptageScale = 0.50;//0.35;//0.50;  // 15%
        var orgImgWidth = 165;
        var orImgHeight = 185;
        var newHeight = 0;
        var newWidth = 0;
        var width = self.canvasSecondMatScaleCollage[i]['width'];
        var height = self.canvasSecondMatScaleCollage[i]['height'];
        var stroke = 5;
        var imgWidth = 0;
        var imgHeight = 0;
        if (self.configImageDataUrl[i] != undefined) {
          self.loadPreview();


          if (self.cuts[i]['position'] == 0) {

            self.getAspectRatioSizePosition(imageResizeData.width, imageResizeData.height, self.cuts[i]['w'], self.cuts[i]['h'], i);


            setTimeout(function () {
              // self.loadPreview();
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
              self.collageCropPositionArray[i] = {
                'x': imgLeft,
                'y': imgTop,
                'w': imgWidth,
                'h': imgHeight
              }
              // self.drawEllipse(innerLayerCtx, item.left, item.top, item.width, item.height);

              var Tcanvas = document.createElement("canvas");
              var Tctx = Tcanvas.getContext("2d");
              // Tctx.clearRect(0, 0, Tcanvas.width, Tcanvas.height);
              Tcanvas.width = imageResizeData.width;
              Tcanvas.height = imageResizeData.height;
              // Tctx.drawImage(img, 0, 0, img.width, img.height);
              var shapeImg = new Image();
              shapeImg.crossOrigin = "*";

              if (window.location.origin == "http://localhost:4200") {
                shapeImg.src = "http://localhost:4200/assets/16.png";
              } else {
                shapeImg.src = "https://www.arttoframe.com/product_images/lib/" + self.cuts[i]['shape'] + ".png";
              }

              shapeImg.onload = function () {
                var Tcanvas2 = document.createElement("canvas");
                var Tctx2 = Tcanvas2.getContext("2d");
                // Tctx2.clearRect(0, 0, Tcanvas2.width, Tcanvas2.height);
                Tcanvas2.width = imageResizeData.width;
                Tcanvas2.height = imageResizeData.height;
                // Tctx2.drawImage(shapeImg, 0, 0, img.width, img.height, 0, 0, img.width, Tcanvas2.height);
                Tctx2.drawImage(imageResizeData, imgLeft, imgTop, imgWidth, imgHeight, 0, 0, imageResizeData.width, Tcanvas2.height);



                Tctx2.globalCompositeOperation = "destination-out";
                Tctx2.drawImage(shapeImg, 0, 0, shapeImg.width, shapeImg.height, 0, 0, imageResizeData.width, Tcanvas2.height);

                Tctx.globalCompositeOperation = "source-out";
                Tctx.drawImage(Tcanvas2, 0, 0, imgWidth, imgHeight);

                var finalImg = new Image();
                finalImg.crossOrigin = "*";
                finalImg.src = Tcanvas.toDataURL();
                finalImg.onload = function () {
                  self.imageLayerCtx.drawImage(finalImg, 0, 0, imgWidth, imgHeight, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height'])
                }


                // self.tempImage = Tcanvas.toDataURL()
                // self.drawImageTempScalePreviewSRC(self.tempImage)
              }
              // self.imageLayerCtx.drawImage(imageResizeData, imgLeft, imgTop, imgWidth, imgHeight, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height']);

              // if (self.cuts[i]['shape'] == 2) {
              //   self.drawEllipse(self.imageLayerCtx, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height']);
              // }
              return;
            }, 500);
            //self.imageLayerCtx.drawImage(imageResizeData, 0, 0, imageResizeData.width, imageResizeData.height, self.canvasSecondMatScaleCollage[i]['left'] , self.canvasSecondMatScaleCollage[i]['top'] , self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height'] );

          }

          if (i == self.selectOpening) {

            // self.loadPreview();


            imgWidth = self.cropped_width;
            imgHeight = self.cropped_height;
            imgLeft = self.cropped_x;
            imgTop = self.cropped_y;
            var Tcanvas = document.createElement("canvas");
            var Tctx = Tcanvas.getContext("2d");
            // Tctx.clearRect(0, 0, Tcanvas.width, Tcanvas.height);
            Tcanvas.width = imageResizeData.width;
            Tcanvas.height = imageResizeData.height;
            // Tctx.drawImage(img, 0, 0, img.width, img.height);
            var shapeImg = new Image();
            shapeImg.crossOrigin = "*";
            if (window.location.origin == "http://localhost:4200") {
              shapeImg.src = "http://localhost:4200/assets/16.png";
            } else {
              shapeImg.src = "https://www.arttoframe.com/product_images/lib/" + self.cuts[i]['shape'] + ".png";
            }            

            shapeImg.onload = function () {
              var Tcanvas2 = document.createElement("canvas");
              var Tctx2 = Tcanvas2.getContext("2d");
              // Tctx2.clearRect(0, 0, Tcanvas2.width, Tcanvas2.height);
              Tcanvas2.width = imageResizeData.width;
              Tcanvas2.height = imageResizeData.height;
              // Tctx2.drawImage(shapeImg, 0, 0, img.width, img.height, 0, 0, img.width, Tcanvas2.height);
              Tctx2.drawImage(imageResizeData, imgLeft, imgTop, imgWidth, imgHeight, 0, 0, imageResizeData.width, Tcanvas2.height);

              // Tctx2.drawImage(imageResizeData,imgLeft, imgTop, imgWidth, imgHeight,0, 0, Tcanvas2.width, Tcanvas2.height);

              Tctx2.globalCompositeOperation = "destination-out";
              Tctx2.drawImage(shapeImg, 0, 0, shapeImg.width, shapeImg.height, 0, 0, imageResizeData.width, Tcanvas2.height);

              Tctx.globalCompositeOperation = "source-out";
              Tctx.drawImage(Tcanvas2, 0, 0, imgWidth, imgHeight);

              var finalImg = new Image();
              finalImg.crossOrigin = "*";
              finalImg.src = Tcanvas.toDataURL();
              finalImg.onload = function () {
                self.imageLayerCtx.drawImage(finalImg, 0, 0, imgWidth, imgHeight, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height'])
              }


              // self.tempImage = Tcanvas.toDataURL()
              // self.drawImageTempScalePreviewSRC(self.tempImage)
            }
            // self.imageLayerCtx.drawImage(imageResizeData, imgLeft, imgTop, imgWidth, imgHeight, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height']);

            // self.imageLayerCtx.strokeStyle = "rgb(241, 241, 241)"
            // self.imageLayerCtx.lineWidth = 1;
            // self.imageLayerCtx.strokeRect(self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height']);

            // if (self.cuts[i]['shape'] == 2) {
            //   self.drawEllipse(self.imageLayerCtx, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height']);
            // }

          } else {
            self.collagePreview(i);
          }

        } else {

          if (parseInt(self.cuts[i]['w']) > parseInt(self.cuts[i]['h'])) {
            newHeight = (self.cuts[i]['h'] * self.ppi) * ptageScale * self.scale;
            newWidth = (orgImgWidth * newHeight) / orImgHeight;
          } else {
            newWidth = (self.cuts[i]['w'] * self.ppi) * ptageScale * self.scale;
            newHeight = (orImgHeight * newWidth) / orgImgWidth;
          }
          self.tempshape(imageResizeData, i, 0, 0, item.width, item.height);
        }
      }
    });
    // uncommented because upload image functionality not working
    console.log(this.selectedVgroove)
    if(!this.selectedVgroove){
      $('#groovecanvas').css('display', 'none');
    }
    
  }

  public collagePreview(i) {
    var self = this;
    var imgData = new Image();
    imgData.src = self.configImageDataUrl[i];

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
      scaleN = scale1 * scale2 * scale3 * scale4;

      if (self.cuts[i]['cropSelection']) {
        newW = self.cuts[i]['cropSelection'].w * scaleN;
        newH = self.cuts[i]['cropSelection'].h * scaleN;
        newX = self.cuts[i]['cropSelection'].x * scaleN;
        newY = self.cuts[i]['cropSelection'].y * scaleN;
      } else {
        newW = (((self.cuts[i]['w'] * imgData.width) / self.cuts[i]['position'][0]) * scaleN);
        newH = (((self.cuts[i]['h'] * imgData.height) / self.cuts[i]['position'][1]) * scaleN);
        newX = ((Math.abs(self.cuts[i]['position'][2]) * (newW / scaleN) / self.cuts[i]['w']) * scaleN);
        newY = ((Math.abs(self.cuts[i]['position'][3]) * (newH / scaleN) / self.cuts[i]['h']) * self.newScale);
      }
      // self.imageLayerCtx.fillStyle = "#C8C8C8";
      // self.imageLayerCtx.fillRect((self.canvasSecondMatScaleCollage[i]['left'] + 1), (self.canvasSecondMatScaleCollage[i]['top'] + 1), (self.canvasSecondMatScaleCollage[i]['width'] - 2), (self.canvasSecondMatScaleCollage[i]['height'] - 2));
      // self.tempshape(imgData,i,0, 0, newW, newH);
      var Tcanvas = document.createElement("canvas");
      var Tctx = Tcanvas.getContext("2d");
      // Tctx.clearRect(0, 0, Tcanvas.width, Tcanvas.height);
      Tcanvas.width = imgData.width;
      Tcanvas.height = imgData.height;
      // Tctx.drawImage(img, 0, 0, img.width, img.height);
      var shapeImg = new Image();
      shapeImg.crossOrigin = "*";
      if (window.location.origin == "http://localhost:4200") {
        shapeImg.src = "http://localhost:4200/assets/16.png";
      } else {
        shapeImg.src = "https://www.arttoframe.com/product_images/lib/" + self.cuts[i]['shape'] + ".png";
      }      

      shapeImg.onload = function () {
        var Tcanvas2 = document.createElement("canvas");
        var Tctx2 = Tcanvas2.getContext("2d");
        // Tctx2.clearRect(0, 0, Tcanvas2.width, Tcanvas2.height);
        Tcanvas2.width = imgData.width;
        Tcanvas2.height = imgData.height;
        // Tctx2.drawImage(shapeImg, 0, 0, img.width, img.height, 0, 0, img.width, Tcanvas2.height);
        Tctx2.drawImage(imgData, newX, newY, newW, newH, 0, 0, imgData.width, Tcanvas2.height);
        // Tctx2.drawImage(imageResizeData,imgLeft, imgTop, imgWidth, imgHeight, 0, 0, imageResizeData.width, Tcanvas2.height);
        Tctx2.globalCompositeOperation = "destination-out";
        Tctx2.drawImage(shapeImg, 0, 0, shapeImg.width, shapeImg.height, 0, 0, imgData.width, Tcanvas2.height);

        Tctx.globalCompositeOperation = "source-out";
        Tctx.drawImage(Tcanvas2, 0, 0, imgData.width, imgData.height);

        var finalImg = new Image();
        finalImg.crossOrigin = "*";
        finalImg.src = Tcanvas.toDataURL();
        finalImg.onload = function () {


          // self.imageLayerCtx.drawImage(finalImg, 0, 0, imgWidth, imgHeight, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height'])
          self.imageLayerCtx.drawImage(finalImg, 0, 0, imgData.width, imgData.height, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height'])
        }


        // self.tempImage = Tcanvas.toDataURL()
        // self.drawImageTempScalePreviewSRC(self.tempImage)
      }
    }
  }

  public setSecondMatCollage() {

    //$('#groovecanvas').css('display', 'none');
    var self = this;
    var stroke = (parseFloat(self.linethick) * self.ppi) * self.scale;
    var hoverColor = hoverColor || false;

    let innerlayerCanvas = self.innerlayerCanvas.nativeElement;
    let innerLayerCtx = innerlayerCanvas.getContext("2d");

    innerlayerCanvas.width = (self.framewidth - ((2 * self.activeFrameWidth) + ((0.875 * self.ppi * self.scale) * 2)));
    innerlayerCanvas.height = (self.frameheight - ((2 * self.activeFrameWidth) + ((1 * self.ppi * self.scale) * 2)));

    self.canvasSecondMatScaleCollage.forEach(function (item, i) {

      //var html = '<a href="javascript:void(0);" class="settings-upload" id="settings-upload_'+i+'" ><img src="https://www.arttoframe.com/custom_framing/preview/images/upload1.svg?v=1" id="opening_'+i+'" width="'+item.width+'" height="'+item.height+'"></a>';     
      var html = '<a href="javascript:void(0);" class="settings-upload" id="settings-upload_' + i + '" ><img src="https://www.arttoframe.com/images/upload-with-text_05.svg" id="opening_' + i + '" width="' + item.width + '" height="' + item.height + '"></a>';

      $(".openingImg").append(html);
      innerLayerCtx.beginPath();
      var strokeColor = "https://www.arttoframe.com/products/mats/images/200/" + self.bottom_mat + ".jpg";
      var strokeColorImg = new Image();
      strokeColorImg.crossOrigin = "anonymous";

      strokeColorImg.src = strokeColor;
      /* if(self.configuration['isWordCutOutFrame'] == false && self.settingData['isLetterArt'] == 0) {
         
         if($('#single_mat_option').hasClass('active') && self.canvasImageScales[i]['path']) {           
         } else {*/

      innerLayerCtx.rect(item.left, item.top, item.width, item.height);
      innerLayerCtx.fillStyle = innerLayerCtx.createPattern(strokeColorImg, "repeat");
      innerLayerCtx.fill();
      /*$('#popupmat-canvas').css('display', 'none');
      if(self.configuration.popupMat == 1 &&  self.configuration.cuts.length  == 1  && !$('.mat_none_option').find('img').hasClass('active')){ 
        self.setPopupMat();
        $('#popupmat-canvas').css('display', 'block');
      }
    }         
    }*/
      //if (self.noMat != 1) {          
      // if(!$('#single_mat_option').hasClass('active')) {         
      innerLayerCtx.lineWidth = (stroke + 2) * self.scale;
      innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(strokeColorImg, "repeat");
      if (self.cuts[i]['shape'] == 2) {
        // self.drawEllipse(innerLayerCtx, item.left, item.top, item.width, item.height);
        self.drawEllipse(innerLayerCtx, item.left, item.top, item.width, item.height);
      } else {
        // innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);
        innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);
      }

      innerLayerCtx.beginPath();
      innerLayerCtx.lineWidth = stroke;

      color = $("#color2_" + self.selectedColor2).attr("data-src");

      /*if(hoverColor) {            
        if(self.isHoverBottomMat || $('.mat_single_option').find('img').hasClass('active')){
          color = hoverColor ;
          var hoverBottomColorArr = hoverColor.split("/200/");
          self.hoverBottomMatColor = hoverBottomColorArr[1];          
        }else{
          color = $("#color2_"+self.selectedColor2).attr("data-src");
          self.hoverBottomMatColor = self.selectedColor2;
        }
      } else {
        color = $("#color2_"+self.selectedColor2).attr("data-src");
        self.hoverBottomMatColor = self.selectedColor2;
      } */

      var color = "https://www.arttoframe.com/products/mats/images/200/" + self.bottom_mat + ".jpg"; //
      var bottomColorImg = new Image();
      bottomColorImg.src = color;

      if (self.cuts[i]['shape'] == 2) {
        self.drawEllipse(innerLayerCtx, item.left, item.top, item.width, item.height);
      } else {
        innerLayerCtx.strokeStyle = innerLayerCtx.createPattern(bottomColorImg, "repeat");
        innerLayerCtx.strokeRect(item.left, item.top, item.width, item.height);
      }
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

  // public setSelectionOnPreview(imgWT,imgHT){
  //   var self = this;

  //   if (self.configImageDataUrl[self.selectOpening]) {

  //     if(self.cuts[self.selectOpening]['cropSelection'] ) {          
  //       self.newWidth = self.cuts[self.selectOpening]['cropSelection'].w * self.newScale;
  //       self.newHeight = self.cuts[self.selectOpening]['cropSelection'].h * self.newScale;
  //       self.newX = self.cuts[self.selectOpening]['cropSelection'].x * self.newScale;
  //       self.newY = self.cuts[self.selectOpening]['cropSelection'].y * self.newScale;
  //     } else {        

  //       self.newWidth = (((self.cuts[self.selectOpening]['w'] * imgWT)/self.cuts[self.selectOpening]['position'][0]) * self.newScale);

  //       self.newHeight = (((self.cuts[self.selectOpening]['h'] * imgHT)/self.cuts[self.selectOpening]['position'][1]) * self.newScale);

  //       self.newX = ((Math.abs(self.cuts[self.selectOpening]['position'][2]) * (self.newWidth/self.newScale)/self.cuts[self.selectOpening]['w'])*self.newScale);

  //       self.newY = ((Math.abs(self.cuts[self.selectOpening]['position'][3]) * (self.newHeight/self.newScale)/self.cuts[self.selectOpening]['h']) * self.newScale) ;

  //       if((self.newWidth +self.newX) > imgWT){
  //         self.newWidth = imgWT;
  //         self.newX = 0;
  //       }

  //       if((self.newHeight +self.newY) > imgHT){
  //         self.newHeight = imgHT;
  //         self.newY = 0;
  //       }
  //     }

  //     var AS_RATIO_PER_SIZE = self.newWidth/self.newHeight;
  //     $('img#positionPreview').selectAreas('destroy');
  //     var areaOptions = {
  //     x: self.newX,
  //     y: self.newY,
  //     width: self.newWidth,
  //     height: self.newHeight,
  //     };
  //     $('img#positionPreview').selectAreas({
  //     minSize: [50, 50],
  //     allowSelect: false,
  //     handles: false,
  //     allowResize: true,
  //     aspectRatio : AS_RATIO_PER_SIZE, 
  //     allowMove: true
  //     });

  //     setTimeout(function(){
  //       $("img#positionPreview").selectAreas('remove', 0);
  //       $('img#positionPreview').selectAreas('add', areaOptions);
  //     }, 300);
  //   }
  // }
  public setSelectionOnPreview(imgWT, imgHT) {
    var self = this;
    if (self.configImageDataUrl[self.selectOpening]) {
      if (self.cuts[self.selectOpening]['cropSelection']) {
        self.newWidth = self.cuts[self.selectOpening]['cropSelection'].w * self.newScale;
        self.newHeight = self.cuts[self.selectOpening]['cropSelection'].h * self.newScale;
        self.newX = self.cuts[self.selectOpening]['cropSelection'].x * self.newScale;
        self.newY = self.cuts[self.selectOpening]['cropSelection'].y * self.newScale;
        //self.cuts[self.selectOpening]['cropSelection'] = {};
      } else {


        self.newWidth = (((self.cuts[self.selectOpening]['w'] * imgWT) / self.cuts[self.selectOpening]['position'][0]));

        self.newHeight = (((self.cuts[self.selectOpening]['h'] * imgHT) / self.cuts[self.selectOpening]['position'][1]));

        self.newX = ((Math.abs(self.cuts[self.selectOpening]['position'][2]) * self.newWidth / self.cuts[self.selectOpening]['w']));

        self.newY = ((Math.abs(self.cuts[self.selectOpening]['position'][3]) * self.newHeight / self.cuts[self.selectOpening]['h']));

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
      // $('img#positionPreview').selectAreas('destroy');
      // var areaOptions = {
      //   x: self.newX,
      //   y: self.newY,
      //   width: self.newWidth,
      //   height: self.newHeight,
      // };
      // $('img#positionPreview').selectAreas({
      //   // maxSize: [100, 150],
      //   allowSelect: false,
      //   handles: true,
      //   allowResize: true,
      //   aspectRatio: AS_RATIO_PER_SIZE,
      //   allowMove: true,
      //   maxAreas: 1,
      // });



      // var temp_previewWidth = $("#positionPreview").width()
      // var temp_previewHeight = $("#positionPreview").height()

      // var totalWidth = self.newX + self.newWidth
      // if (this.rotateFlag) {
      //   self.newX = 0;
      //   self.newY = 0;
      //   if (self.newWidth > self.newHeight){
      //     self.newWidth = 150;
      //     self.newHeight = 100
      //   }
      // }

      $('img#positionPreview').selectAreas('destroy');
      setTimeout(function () {
        // self.imageMinCrop = (self.cropped_width / self.customWidth) * 3;

        // self.imageMinCrop = (self.cropped_width / self.customWidth) * 3;

        let areaOptions={
          x: self.newX,
          y: self.newY,
          width: self.newWidth,
          height: self.newHeight
        }
        var OutLineThick : any = 0.25;

        if (self.height1 > 660) {
          var outlineHeight = 1;
        } else {
          var outlineHeight = 2;
        }
        var stroke = ((parseFloat(OutLineThick) * outlineHeight * self.configuration.ppi) * self.scale);
          $("img#positionPreview").selectAreas('remove', 0);
          $('img#positionPreview').selectAreas('add', areaOptions);
          console.log(parseInt(self.cuts[self.selectOpening].shape))
          if (parseInt(self.cuts[self.selectOpening].shape) != 1) {
            $('.select-areas-background-area').html('<img src="custom_framing/preview/actions/getSampleImageCropLetter.php?top_mat_swatch=' + $("#color1id").val() + '&shape=' + parseInt(self.cuts[self.selectOpening].shape) + '" style="width: 100%;height:100%"/>');
          }
          else {
            $('.select-areas-background-area').css('outline', stroke + 'px solid #1e940a');
            $('.select-areas-background-area').css('outline-offset', -stroke + 'px');
          }

          // $('img#positionPreview').selectAreas({
          //   minSize: [100, 100],
          //   allowSelect: false,
          //   handles: false,
          //   allowResize: false,
          //   allowMove: true,
          //   areas: [
          //     {
          //       x: self.cropped_x,
          //       y: self.cropped_y,
          //       width: self.cropped_width,
          //       height: self.cropped_height
          //     }
          //   ]
          // });

        $('img#positionPreview').selectAreas({
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
          areas: [{
            x: self.newX,
            y: self.newY,
            width: self.newWidth,
            height: self.newHeight
          }]
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
  public selectedOpeningCollage() {
    var self = this;
    setTimeout(function () {
      if (self.isCollageApplied == true) {
        self.selectOpening = $('.openingSelector.active').attr('id').split('_')[1];
      }
      self.uploadImage();
    }, 200);
  }
  public uploadImage() {
    // var condtion = this.isUploadInProgress == 1;
    // this.productCode = 57;
    console.log(this.cuts[this.selectOpening].shape)
    var condtion = $("#positionPreview").attr('src') != "";
    var AS_RATIO_PER_SIZE = 0;
    this.imgUpload = 1
    if (this.isCollageApplied == true) {
      AS_RATIO_PER_SIZE = this.cuts[this.selectOpening]['w'] / this.cuts[this.selectOpening]['w'];
      condtion = this.configImageDataUrl[this.selectOpening] != undefined;
    }

    if (condtion) {
      var self = this;

      if (this.isCollageApplied == true) {
        self.loadPreview();
      } else {

        setTimeout(function () {
          // self.imageMinCrop = (self.cropped_width / self.customWidth) * 3;

          $('img#positionPreview').selectAreas('destroy');
          $('img#positionPreview').selectAreas({
            // minSize: [self.imageMinCrop, self.imageMinCrop],
            allowSelect: false,
            handles: true,
            allowResize: true,
            aspectRatio: AS_RATIO_PER_SIZE,
            allowMove: true,
            maxAreas: 1,
            //onChanged : self.updateZoomValue(),
            //onChanging : this.checkSelectionChange,
            areas: [{
              x: self.cropped_x,
              y: self.cropped_y,
              width: self.cropped_width,
              height: self.cropped_height
            }]
          });
        }, 200);
      }
      $(".frame-hide-btn").click();

      if ($("#positionPreview").attr('src') != "") {
        this.showEditImagePopup();
      } else {
        if (this.isUploadInProgress == 0) {
          $("#qqfile2").val('');
          $('#qqfile2').trigger('click');
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
        $('#qqfile2').trigger('click');
        // this.uploadImageCF();
      } else {
        $("#progressModal").show();
        setTimeout(() => {
          $("#progressModal").hide();
        }, 1000);
      }
    }
  }
  public upload(event) {
    var self = this;
    this.onimageload = this.isUploadInProgress = 1;
    var file = event.target.files[0];

    if (file.type.indexOf("image") == -1) {
      this.cropOnclick();
      return false;
    } else {
      var reader = new FileReader();
      $(".loaderImg").show();
      reader.onload = function (e) {

        self.DataUrl = reader.result; //DATAURL HERE
        self.creatCanvasPreviewOnDataUrl();
        // var basePath = "https://www.arttoframe.com/"
        // var shapeImage = basePath+'product_images/lib/'+self.cuts[self.selectOpening].shape+'.png'
        // self.drawImageTempScalePreviewSRC(self.DataUrl,shapeImage);
      }
      reader.readAsDataURL(file);

      const randomId = Math.random().toString(36).substring(2) + ".jpg";
      const dirr = $('#dir_id').val();

      if (self.isCollageApplied == true) {
        self.collage_Opening_Image_Array[self.selectOpening] = randomId;
      }
      //this.ref = this.afStorage.ref('/userUploads/'+randomId);
      this.ref = this.afStorage.ref('/useruploads/' + dirr + '/' + randomId)
      // this.ref = this.afStorage.ref('/useruploads/3339924/' + randomId)
      this.task = this.ref.put(event.target.files[0]);
      this.uploadProgress = this.task.percentageChanges();
      this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.mainImageUrl = "";
          this.mainImageUrl = this.ref.getDownloadURL();
          this.mainImageUrl.subscribe(url => {
            this.mainImageUrl = url;
            this.isUploadInProgress = 0;
            if (self.isCollageApplied == true) {

              setTimeout(() => {
                var temp_imgId = (url.split("%2F")[2]).split("?")[0];
                $.each(self.collage_Opening_Image_Array, function (index, txt) {
                  if (self.collage_Opening_Image_Array[index] == temp_imgId) {

                    self.cuts[index]['image'] = url;
                    self.collageImageArray[index] = url;
                    // self.imageDataForLog(1);
                    self.getDataService.addimgLog(index, btoa(url))

                      .subscribe(
                        res => {
                        }
                      );
                  }

                });
                // self.cuts[self.selectOpening]['image'] = url;

              }, 300);
            }
            else {
              self.getDataService.addimgLog(0, btoa(url))
                .subscribe(
                  res => {
                  }
                );
            }
            $(".loaderImg").hide();
          })
        })
      )
        .subscribe();
    }

  }
  public cropOnclick() {
    var self = this;
    $('img#positionPreview').selectAreas('destroy');
    var img = new Image();
    img.src = $('#positionPreview').attr('src');

    // self.Helper.cropOnclick(img.src, self.isCollageApplied, self.newWidth, self.newHeight, self.newX, self.newY)
    img.onload = function () {

      var width_image = img.width;
      var height_image = img.height;
      var x_image = 0;
      var y_image = 0;

      if (self.isCollageApplied == true) {
        // self.imageMinCrop = (self.cropped_width / self.customWidth) * 3;

        $('img#positionPreview').selectAreas({
          // minSize: [self.imageMinCrop, self.imageMinCrop],
          allowSelect: false,
          handles: true,
          allowResize: true,
          aspectRatio: self.newWidth / self.newHeight,
          allowMove: true,
          maxAreas: 1,
          areas: [{
            x: self.newX,
            y: self.newY,
            width: self.newWidth,
            height: self.newHeight
          }]
        });
      } else {
        self.pixelPerinch = width_image / self.customWidth;
        // self.imageMinCrop = (self.cropped_width / self.customWidth) * 3;

        $('img#positionPreview').selectAreas({
          // minSize: [self.imageMinCrop, self.imageMinCrop],
          maxSize: [width_image, height_image],
          allowSelect: false,
          handles: true,
          allowResize: true,
          allowMove: true,
          maxAreas: 1,
          //onChanged : self.updateZoomValue(),
          //onChanging : this.checkSelectionChange,
          areas: [{
            x: 0,
            y: 0,
            width: width_image,
            height: height_image
          }]
        });
      }

    }
    setTimeout(() => {
      $('.select-areas-resize-handler').show();
      $('.select-areas-resize-handler').css('opacity', '1');
      $('.select-areas-resize-handler').css('border-radius', '10px');
      $('.select-areas-resize-handler').css('z-index', '120');
      $('.select-areas-resize-handler').css('background-color', 'white');
      $('.select-areas-resize-handler').css('border', '4px #DCDCDC solid')
    }, 300);
  }
  public deleteImage() {
    var self = this;
    $(".loaderImg").hide();
    self.isUploadInProgress = 0;
    this.imgUpload = 0;
    $('img#positionPreview').selectAreas('destroy');
    $("#positionPreview").attr('src', "");
    if (this.isCollageApplied == true) {
      self.configImageDataUrl[self.selectOpening] = undefined;
      self.collageImageArray[self.selectOpening] = undefined;
      self.setCanvasOpenings();
    } else {
      // self.setCanvasSingleOpenings();
      // this.keepRatio = 0;
      // self.getSingleOpening();
      // self.isUploadInProgress = 0;
    }
    this.mainImageUrl = "";
    this.rotationVal = 0;
    this.rotateFlag = 0;
    // this.pod_image_id = 0;
    // this.podFlag = 0;
    $('#aspectRatio img').attr('src', 'https://www.arttoframe.com/images/aspectR_active_ng.png');
    $('#imageCropModal').modal('hide');
    // self.imageDataForLog(0);
  }
  // public imageDataForLog(flag) {
  //   var self = this;
  //   const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  //   let imgData = new HttpParams();
  //   if (flag == 1) {
  //     if (this.isCollageApplied == true) {

  //       $.each(self.collageImageArray, function (index, txt) {
  //         if (self.collageImageArray[index] != null || self.collageImageArray[index] != undefined) {
  //           imgData = imgData.append('cfcut_' + index + '[0]', btoa(self.collageImageArray[index]));
  //           if (self.collageCropPositionArray != null) {
  //             var ppiRatio = self.collageCropPositionArray[index]['w'] / self.cuts[index]['w'];
  //             var imgCropTop = self.collageCropPositionArray[index]['y'] / ppiRatio;
  //             var imgCropLeft = self.collageCropPositionArray[index]['x'] / ppiRatio;
  //             var imgCropWidth = self.cuts[index]['size'][0] / ppiRatio;
  //             var imgCropHeight = self.cuts[index]['size'][1] / ppiRatio;

  //             imgData = imgData.append('cfcut_' + index + '[position][0]', String(imgCropWidth));
  //             imgData = imgData.append('cfcut_' + index + '[position][1]', String(imgCropHeight));
  //             imgData = imgData.append('cfcut_' + index + '[position][2]', String("-" + imgCropLeft));
  //             imgData = imgData.append('cfcut_' + index + '[position][3]', String("-" + imgCropTop));
  //           } else {
  //             imgData = imgData.append('cfcut_' + index + '[position][0]', self.cuts[index]['position'][0]);
  //             imgData = imgData.append('cfcut_' + index + '[position][1]', self.cuts[index]['position'][1]);
  //             imgData = imgData.append('cfcut_' + index + '[position][2]', self.cuts[index]['position'][2]);
  //             imgData = imgData.append('cfcut_' + index + '[position][3]', self.cuts[index]['position'][3]);
  //           }
  //           imgData = imgData.append('cfcut_filter_' + index, "");
  //           imgData = imgData.append('cfcut_rotate_' + index, self.cuts[index]['rotate']);
  //           imgData = imgData.append('cfcut_zoom_' + index, "1");
  //         }
  //         else {
  //           imgData = imgData.append('cfcut_' + index + '[position][0]', self.cuts[index]['position'][0]);
  //           imgData = imgData.append('cfcut_' + index + '[position][1]', self.cuts[index]['position'][1]);
  //           imgData = imgData.append('cfcut_' + index + '[position][2]', self.cuts[index]['position'][2]);
  //           imgData = imgData.append('cfcut_' + index + '[position][3]', self.cuts[index]['position'][3]);
  //         }

  //       });
  //     } else {
  //       imgData = imgData.append('cut_val', "0");
  //       imgData = imgData.append('cfcut_0[0]', btoa(self.mainImageUrl));
  //       imgData = imgData.append('cfcut_0[position][0]', String(this.imgPosition[0]));
  //       imgData = imgData.append('cfcut_0[position][1]', String(this.imgPosition[1]));
  //       imgData = imgData.append('cfcut_0[position][2]', String(this.imgPosition[2]));
  //       imgData = imgData.append('cfcut_0[position][3]', String(this.imgPosition[3]));
  //       imgData = imgData.append('cfcut_zoom_0', String(this.imgPosition[4]));
  //       imgData = imgData.append('cfcut_filter_0', '');
  //       imgData = imgData.append('cfcut_rotate_0', $('#myrotate').val());
  //     }
  //   } else {
  //     imgData = imgData.append('cfcut_0', '');
  //   }

  //   self.http.post("https://www.arttoframe.com/demo_custom_framing_ng/assets/Image_path.php", imgData, {
  //     headers: myheader
  //   }).subscribe((res: any) => {
  //   });

  // }
  // public getDefaultGlassID() {
  //   var self = this;
  //   var matWidth = self.outSideHeight;
  //   var matHeight = self.outSideWidth;

  //   return this.Helper.getDefaultGlassID(this.glassArr, matWidth, matHeight, self.selectedGlassVal, self.changeGlassManually)
  // }
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
    // let imageContext = imageCanvas.getContext("2d");

    var width = (this.customWidth * this.ppi) * this.scale;
    var height = (this.customHeight * this.ppi) * this.scale;

    imageCanvas.width = width;
    imageCanvas.height = height;

    let canvas = this.tempCanvas.nativeElement;
    let context = canvas.getContext("2d");

    var toRadians = 0.017453292519943295; //Math.PI/180;
    var degree = 90;
    var rotatedImgSrc = $("#positionPreview").attr('src');
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
      $('#positionPreview').attr('src', "");
      $('#positionPreview').attr('src', canvas.toDataURL());
      if (self.isCollageApplied == true) {
        self.configImageDataUrl[self.selectOpening] = canvas.toDataURL();
        self.cuts[self.selectOpening]['rotate'] = self.rotationVal;
        self.loadPreview();
        // self.showEditImagePopup();
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
          // self.imageMinCrop = (self.cropped_width / self.customWidth) * 3;

          $('img#positionPreview').selectAreas('destroy');
          $('img#positionPreview').selectAreas({
            // minSize: [self.imageMinCrop, self.imageMinCrop],
            allowSelect: false,
            handles: true,
            allowResize: true,
            allowMove: true,
            maxAreas: 1,
            areas: [{
              x: self.cropped_x,
              y: self.cropped_y,
              width: self.cropped_width,
              height: self.cropped_height
            }]
          });
        }, 50);

        self.showEditImagePopup();
        // var selectedArea = $('img#positionPreview').selectAreas('areas');
      }
    }
  }
  public uploadImageFromEditPopup() {
    var self = this;
    // this.pod_image_id = this.keepRatio = 0;
    if (this.isUploadInProgress == 0) {
      $("#qqfile2").val('');
      $('#qqfile2').trigger('click');
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
  public uploadImageCF() {
    var self = this;
    // self.uploadProgress = 0;
    let imagelayerCanvas = this.imagelayercanvas.nativeElement;
    let dataImage = imagelayerCanvas.getContext("2d");
    var width = 0;
    var height = 0;
    var cutW = 0;
    var cutH = 0;

    if (self.isCollageApplied == true) {
      cutW = self.cuts[self.selectOpening]['w'];
      cutH = self.cuts[self.selectOpening]['h'];
      width = (cutW * this.ppi) * this.scale;
      height = (cutH * this.ppi) * this.scale;
    } else {
      cutW = this.customWidth;
      cutH = this.customHeight;
      width = (this.customWidth * this.ppi) * this.scale;
      height = (this.customHeight * this.ppi) * this.scale;
    }

    imagelayerCanvas.width = width;
    imagelayerCanvas.height = height;
  }
  public reload() {
    // location.reload();
    $('#AddingToCart_success').modal('hide');
    this.btnHide();
  }
  drawEllipse(innerLayerCtx, x, y, w, h) {
    var kappa = .5522848;
    var ox = (w / 2) * kappa; // control point offset horizontal
    var oy = (h / 2) * kappa; // control point offset vertical
    var xe = x + w;           // x-end
    var ye = y + h;           // y-end
    var xm = x + w / 2;       // x-middle
    var ym = y + h / 2;       // y-middle

    innerLayerCtx.beginPath();
    innerLayerCtx.moveTo(x, ym);
    innerLayerCtx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    innerLayerCtx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    innerLayerCtx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    innerLayerCtx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    innerLayerCtx.stroke();
  }

  // public createShape(img,shape,imgwidth,imgheight,width, height){
  public createShape(img, width, height, cutId, callback) {
    // img.crossOrigin = '*';
    var self = this;
    var buffer = document.createElement('canvas');
    var b_ctx = buffer.getContext('2d');

    buffer.width = width;
    buffer.height = height;

    var shapeImg = new Image();

    shapeImg.src = self.cuts[cutId]['Shapeimage'];
    var resizeW = 216
    var resizeH = 216
    shapeImg.onload = function () {
      var shapeCanvas = document.createElement('canvas');
      var shapeCanvasCtx = shapeCanvas.getContext('2d');

      shapeCanvas.width = width;
      shapeCanvas.height = height;
      shapeCanvasCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, shapeCanvas.height);

      shapeCanvasCtx.globalCompositeOperation = "destination-out";
      // shapeCanvasCtx.drawImage(shapeImg, 0, 0, 362, 362, 0, 0, resizeW, resizeH);
      shapeCanvasCtx.drawImage(shapeImg, 0, 0, shapeImg.width, shapeImg.height, 0, 0, img.width, shapeCanvas.height);
      
      var resizeScale = 73.55555555555556;

      var top = (resizeScale == width) ? ((height / 2) - (width / 2)) : 0;
      var left = (resizeScale == height) ? ((width / 2) - (height / 2)) : 0;
      b_ctx.globalCompositeOperation = "source-out";
      b_ctx.drawImage(shapeCanvas, 0, 0, resizeScale, resizeScale);
    }
  }

  public creatCanvasPreviewOnDataUrl() {
    var self = this;
    var img = new Image();
    var Imagedata = self.DataUrl;

    // $("#test_exif_img").attr('src', Imagedata);

    self.getOrientation(Imagedata, function (e) {
      self.srcOrientation = e;
      if (navigator.platform == "iOS") {
        self.srcOrientation = e;

      }
      self.drawImageTempScalePreviewSRC(self.DataUrl);
    });
  }
  public getOrientation(file, callback) {

    var reader = new FileReader();
    var BlobData = this.dataURItoBlob(file);

    reader.onload = function (e) {

      //var view = new DataView(e.target.result);
      var arrayBuffer = reader.result as ArrayBuffer;
      // var  tt =reader.result;
      var view = new DataView(arrayBuffer);

      if (view.getUint16(0, false) != 0xFFD8) {
        return callback(-2);
      }
      var length = view.byteLength,
        offset = 2;
      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) return callback(-1);
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
          if (view.getUint32(offset += 2, false) != 0x45786966) {
            return callback(-1);
          }

          var little = view.getUint16(offset += 6, false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;
          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + (i * 12), little) == 0x0112) {
              return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
          }
        } else if ((marker & 0xFF00) != 0xFF00) {
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
    if (typeof dataURI !== 'string') {
      throw new Error('Invalid argument: dataURI must be a string');
    }
    dataURI = dataURI.split(',');
    var type = dataURI[0].split(':')[1].split(';')[0],
      byteString = atob(dataURI[1]),
      byteStringLength = byteString.length,
      arrayBuffer = new ArrayBuffer(byteStringLength),
      intArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteStringLength; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([intArray], {
      type: type
    });
  }
  public showEditImagePopup() {
    if ($("#positionPreview").attr('src') != "") {
      $('#imageCropModal').modal('show');
      $(".modal-backdrop.in").css('display', 'none');
      setTimeout(() => {
        $('.select-areas-resize-handler').show();
        $('.select-areas-resize-handler').css('opacity', '1');
        $('.select-areas-resize-handler').css('border-radius', '10px');
        $('.select-areas-resize-handler').css('z-index', '120');
        $('.select-areas-resize-handler').css('background-color', 'white');
        $('.select-areas-resize-handler').css('border', '4px #DCDCDC solid')
      }, 200);
    }
  }
  public addZeroes(num) {
    var num1 = Number(num);
    if (String(num1).split(".").length < 2 || String(num1).split(".")[1].length == undefined || String(num1).split(".")[1].length == null) {
      var num1_str = num1 + "";
      return num1_str;
    } else
      if (String(num1).split(".").length < 2 || String(num1).split(".")[1].length > 2) {
        var num1_str = String((num1).toFixed(2));
        if (String(num1_str).split(".")[1] == "00") {
          num1_str = String(num1_str).split(".")[0];
        }
        return num1_str;
      }
    // Return the number
    return num1;
  }
  public applyChanges() {
    var self = this;
    var selectedArea = $('img#positionPreview').selectAreas('areas');
    this.updateZoomValue();
    if (selectedArea.length != 0) {

      if (this.isFrameMatChanged == 0) {
        var old_cropped_height = this.cropped_height;
        var old_cropped_width = this.cropped_width;
        this.cropped_height = selectedArea[0].height;
        this.cropped_width = selectedArea[0].width;
        this.cropped_x = selectedArea[0].x;
        this.cropped_y = selectedArea[0].y;
      }

      if (this.isCollageApplied == true) {

        if (typeof (self.cuts[self.selectOpening]['cropSelection']) == 'undefined') {
          self.cuts[self.selectOpening]['cropSelection'] = {};
        }
        self.collageImagePosForATC(self.selectOpening, selectedArea)

        self.cuts[self.selectOpening]['cropSelection'] = {
          'x': selectedArea[0].x / self.newScale,
          'y': selectedArea[0].y / self.newScale,
          'w': selectedArea[0].width / self.newScale,
          'h': selectedArea[0].height / self.newScale
        };
      }
    }


    if (this.isCollageApplied == false) {
      var newW = (this.cropped_width) / self.pixelPerinch;
      var newH = (this.cropped_height) / self.pixelPerinch;

      if ((newW == NaN || newW == Infinity || newW == 0 || newH == NaN || newH == Infinity || newH == 0) && this.isFrameMatChanged == 0) {
        $(".size-alert").show();
        setTimeout(() => {
          $(".size-alert").hide();
        }, 2000);
        this.cropped_height = old_cropped_height;
        this.cropped_width = old_cropped_width;
        return false;
      } else if (newW != Infinity && newH != Infinity && this.isFrameMatChanged == 0) {
        this.cropFlagOpening = 2;
        $("#customWidth").val(parseFloat(newW.toFixed()));
        $("#customHeight").val(parseFloat(newH.toFixed()));
      }
      var oldWidth = this.customWidth;
      var oldHeight = this.customHeight;

      if (this.isFrameMatChanged == 0) {
        this.customWidth = parseFloat($("#customWidth").val());
        this.customHeight = parseFloat($("#customHeight").val());
        if (this.onimageload != 1) {
          if (this.customWidth < this.customHeight) {
            if (oldWidth < oldHeight) {
              $("#customWidth").val(oldWidth);
              this.aspectRatioSizeCalcultionW();
            } else {
              $("#customWidth").val(oldHeight);
              this.aspectRatioSizeCalcultionW();
            }
          } else {
            if (oldWidth < oldHeight) {
              $("#customHeight").val(oldWidth);
              this.aspectRatioSizeCalcultionH();
            } else {
              $("#customHeight").val(oldHeight);
              this.aspectRatioSizeCalcultionH();
            }
          }

        } else {
          if ($("#customWidth").val() < $("#customHeight").val() || $("#customWidth").val() < 8) {
            $("#customWidth").val(8);
            this.aspectRatioSizeCalcultionW();
          }
          if ($("#customHeight").val() < $("#customWidth").val() || $("#customHeight").val() < 8) {
            $("#customHeight").val(8);
            this.aspectRatioSizeCalcultionH();
          }
        }
      }
      this.onimageload = 0;
    }


    // var returnVal = this.inputValidation();
    // if (returnVal == true) {
    // this.customWidth = parseFloat($("#customWidth").val());
    // this.customHeight = parseFloat($("#customHeight").val());
    // $('#imageCropModal').modal('hide');
    // var prodNameSize = "(" + this.userInput.length + ") " + this.cuts[0]['w'] + "x" + this.cuts[0]['h'];
    // // }
    // $('.product-name').html(prodNameSize);
    // $('#sizepopup').modal('hide');
    // this.arrange();
    // }
    // } else {
    // this.cropped_height = old_cropped_height;
    // this.cropped_width = old_cropped_width;
    // $("#customWidth").val(oldWidth)
    // $("#customHeight").val(oldHeight)
    // this.customWidth = oldWidth;
    // this.customHeight = oldHeight;
    // }
  }
  public aspectRatioSizeCalcultionW() {

    var uploadedImg = $("#positionPreview").attr('src');
    if ((uploadedImg != "") || this.cropFlagOpening == 2 || this.onimageload == 1) {

      var opWt = $("#customWidth").val();
      var opHt = $("#customHeight").val();

      this.Helper.aspectRatioSizeCalcultionW(opWt, opHt, this.customWidth, this.customHeight);

      /* var width_to_height_ratio = this.customWidth / this.customHeight;

      if (this.customWidth > this.customHeight) {
        opHt = opWt / width_to_height_ratio;
        opWt = opHt * width_to_height_ratio;
        if (opWt > opHt) {
          $("#customHeight").val(this.addZeroes(opHt));
        } else {
          $("#customHeight").val(this.addZeroes(opWt));
        }
      }

      if (this.customWidth < this.customHeight) {
        opHt = opWt / width_to_height_ratio;

        if (opHt > opWt) {
          $("#customHeight").val(this.addZeroes(opHt));
        } else {
          $("#customHeight").val(this.addZeroes(opWt));
        }

      }
      if (this.customWidth == this.customHeight) {
        $("#customWidth,#customHeight").val(this.addZeroes(opWt));
      } */
    }
    // this.inputValidation()
  }


  public aspectRatioSizeCalcultionH() {
    var uploadedImg = $("#positionPreview").attr('src');
    if ((uploadedImg != "") || this.cropFlagOpening == 2 || this.onimageload == 1) {
      var opWt = $("#customWidth").val();
      var opHt = $("#customHeight").val();

      this.Helper.aspectRatioSizeCalcultionH(opWt, opHt, this.customWidth, this.customHeight);

      /*  var width_to_height_ratio = this.customWidth / this.customHeight;
 
       if (this.customWidth > this.customHeight) {
         opWt = opHt * width_to_height_ratio;
         $("#customWidth").val(this.addZeroes(opWt));
       }
 
       if (this.customWidth < this.customHeight) {
         opWt = opHt * width_to_height_ratio;
         $("#customWidth").val(this.addZeroes(opWt));
       }
       if (this.customWidth == this.customHeight) {
         $("#customWidth,#customHeight").val(this.addZeroes(opHt));
       } */
    }
    // this.inputValidation()
  }
  public collageImagePosForATC(selectedCut, areas) {
    var self = this;
    // var areas = $('img#positionPreview').selectAreas('areas');

    var stroke = 0;

    if (areas.length > 0) {
      var areaWidth = areas[0].width + (2 * stroke);
      var areaHeight = areas[0].height + (2 * stroke);
      var areaX = areas[0].x - (stroke);
      var areaY = areas[0].y - (stroke);

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

      var openingWidth = self.cuts[selectedCut]['w']//OPENING_WIDTH_IMG;
      var openingHeight = self.cuts[selectedCut]['h']//OPENING_HEIGHT_IMG;

      if (image.naturalWidth >= image.naturalHeight) {
        scaleDownRatio = ImgMaxSize / image.naturalWidth;
      }
      else {
        scaleDownRatio = ImgMaxSize / image.naturalHeight;
      }
      var isFixedHeight = 0;
      img_tmp_height = img_tmp_height / this.newScale;
      img_tmp_width = img_tmp_width / this.newScale;
      var pixelPerInch = img_tmp_width / openingWidth;

      if (image.naturalHeight < (image.naturalHeight * pixelPerInch)) {
        pixelPerInch = img_tmp_height / openingHeight;
        isFixedHeight = 1;
      }
      var zoom = 1;
      if (isFixedHeight) {
        zoom = img_tmp_height / (cropped_height / scaleDownRatio);
      }
      else {
        zoom = img_tmp_width / (cropped_width / scaleDownRatio);
      }
      // var cropZoom = parseFloat(zoom);
      cropped_y = cropped_y;
      cropped_x = cropped_x;
      var imgCropTop = cropped_y / pixelPerInch * zoom / scaleDownRatio;
      var imgCropLeft = cropped_x / pixelPerInch * zoom / scaleDownRatio;
      var imgCropWidth = parseFloat(img_tmp_width) / pixelPerInch * zoom / scaleDownRatio;
      var imgCropHeight = parseFloat(img_tmp_height) / pixelPerInch * zoom / scaleDownRatio;

      self.collageCropPositionArray[self.selectOpening] = {
        'x': imgCropTop,
        'y': imgCropLeft,
        'w': imgCropWidth,
        'h': imgCropHeight
      };
    }
  }
  tempshape(imgR, i, imgLeft, imgTop, imgWidth, imgHeight) {
    var img = new Image;
    var self = this
    img.src = imgR.src;
    // "https://miro.medium.com/max/1620/0*-eZT6nzE_ib78UuD";
    img.crossOrigin = "*";
    img.onload = () => {
      var Tcanvas = document.createElement("canvas");
      var Tctx = Tcanvas.getContext("2d");
      // Tctx.clearRect(0, 0, Tcanvas.width, Tcanvas.height);
      Tcanvas.width = img.width;
      Tcanvas.height = img.height;
      // Tctx.drawImage(img, 0, 0, img.width, img.height);
      var shapeImg = new Image();
      shapeImg.crossOrigin = "*";
      if (window.location.origin == "http://localhost:4200") {
        shapeImg.src = "http://localhost:4200/assets/16.png";
      } else {
        shapeImg.src = "https://www.arttoframe.com/product_images/lib/" + self.cuts[i]['shape'] + ".png";
      }      

      shapeImg.onload = function () {
        var Tcanvas2 = document.createElement("canvas");
        var Tctx2 = Tcanvas2.getContext("2d");
        // Tctx2.clearRect(0, 0, Tcanvas2.width, Tcanvas2.height);
        Tcanvas2.width = img.width;
        Tcanvas2.height = img.height;
        // Tctx2.drawImage(shapeImg, 0, 0, img.width, img.height, 0, 0, img.width, Tcanvas2.height);
        Tctx2.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, Tcanvas2.height);
        Tctx2.globalCompositeOperation = "destination-out";
        Tctx2.drawImage(shapeImg, 0, 0, shapeImg.width, shapeImg.height, 0, 0, img.width, Tcanvas2.height);

        Tctx.globalCompositeOperation = "source-out";
        Tctx.drawImage(Tcanvas2, 0, 0, imgWidth, imgHeight);

        var finalImg = new Image();
        finalImg.crossOrigin = "*";
        finalImg.src = Tcanvas.toDataURL();
        finalImg.onload = function () {
          self.imageLayerCtx.drawImage(finalImg, imgLeft, imgTop, imgWidth, imgHeight, self.canvasSecondMatScaleCollage[i]['left'], self.canvasSecondMatScaleCollage[i]['top'], self.canvasSecondMatScaleCollage[i]['width'], self.canvasSecondMatScaleCollage[i]['height'])
        }


        // self.tempImage = Tcanvas.toDataURL()
        // self.drawImageTempScalePreviewSRC(self.tempImage)
      }

    }
  }

  public getframeFilterColorsList() {

    // $("#selFrameColor").val(this.frameFilterID)  
    setTimeout(() => {

      //Using the value

    }, 200);
  }
  public tooltiptextMat() {
    $('.tooltiptextMat').show();
    setTimeout(() => {
      $('.tooltiptextMat').hide();
    }, 3000);
  }

  public carouselBannerLoad(evt: any) {

    const len = this.carouselBannerItems.length
    if (len <= 3) {
      for (let i = len; i < len + 4; i++) {
        this.carouselBannerItems.push(i);
      }
    }

  }

  public inputValidation() {
    console.log(this.OnloadFrames)

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
      let selectedFrame = this.OnloadFrames.filter((data)=> this.frameCode === data.code);
      console.log("selectedFrame => ", selectedFrame)
      tmpFrameMaxWidth = parseFloat(this.outSideWidth) + ((parseFloat(selectedFrame[0].framewidth) - parseFloat(selectedFrame[0].lip_width)) * 2);
      tmpFrameMaxHeight = parseFloat(this.outSideHeight) + ((parseFloat(selectedFrame[0].framewidth) - parseFloat(selectedFrame[0].lip_width)) * 2);
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
  
  // public inputValidation() {
    

  //   var maxFrameSizeData = $("#frame_" + this.frameCode).attr("data-maxSize");
  //   if (maxFrameSizeData == "" || maxFrameSizeData == undefined) {
  //     maxFrameSizeData = "32x42";
  //   }
  //   this.frameMaxWidth = maxFrameSizeData.split("x")[ 0 ];
  //   this.frameMaxHeight = maxFrameSizeData.split("x")[ 1 ];

  //   if(this.oldSelectedFrameCode){
  //     var maxFrameSizeDataOld = $("#frame_" + this.oldSelectedFrameCode).attr("data-maxSize");
  //     this.frameMaxWidthOld = maxFrameSizeDataOld.split("x")[ 0 ];
  //     this.frameMaxHeightOld = maxFrameSizeDataOld.split("x")[ 1 ];
  //   }
  //   this.oldSelectedFrameCode = "";
  //   var tmpFrameMaxWidth;
  //   var tmpFrameMaxHeight;

  //     // tmpFrameMaxWidth =
  //     //   parseInt(this.frameMaxWidth) -
  //     //   parseInt($("#frame_" + this.frameCode).attr("data-width")) * 2;
  //     // tmpFrameMaxHeight =
  //     //   parseInt(this.frameMaxHeight) -
  //     //   parseInt($("#frame_" + this.frameCode).attr("data-width")) * 2;

  //     // tmpFrameMaxWidth = (this.framewidth * 2) + (this.userInput.length - 1) + (this.userInput.length * 3) - (this.activeFrameLipWidth * 2) + 4;
  //     // tmpFrameMaxHeight = (this.framewidth * 2) + 3 + 4 - (this.activeFrameLipWidth * 2);
  //     // var tmpFrameMaxWidth = 10;
  //     // var tmpFrameMaxHeight = 12;
  //     // this.OnloadFrames = JSON.parse(localStorage.getItem('frames'));
  //     console.log(this.OnloadFrames)
  //     let selectedFrame = this.OnloadFrames.filter((data)=> this.frameCode === data.code);
  //     tmpFrameMaxWidth = parseFloat(this.outSideWidth) + ((parseFloat(selectedFrame[0].framewidth) - parseFloat(selectedFrame[0].lip_width)) * 2);
  //     tmpFrameMaxHeight = parseFloat(this.outSideHeight) + ((parseFloat(selectedFrame[0].framewidth) - parseFloat(selectedFrame[0].lip_width)) * 2);

  //     this.validateMats(
  //       this.top_mat,
  //       tmpFrameMaxWidth,
  //       tmpFrameMaxHeight,
  //       this.isCollageApplied
  //     );
  //   // this.maxFrameSize = 'Max image size to ' + this.frameMaxWidth + '″x' + this.frameMaxHeight + '″';
  //   this.maxFrameSize =
  //     "Max image size to " + tmpFrameMaxWidth + "″x" + tmpFrameMaxHeight + "″";
  //   // this.maxFrameSize = 'Max frame size to ' + this.frameMaxWidth + '″x' + this.frameMaxHeight + '″';

  //     if (
  //       tmpFrameMaxWidth <= parseInt(this.frameMaxWidth) &&
  //       tmpFrameMaxHeight <= parseInt(this.frameMaxHeight)
  //     ) {
  //       return true;
  //     } else {
  //       $("#myModal_maxsize h4").html(
  //         " Please switch to another frame from bellow frame tab."
  //       );
  //       $("#myModal_maxsize").modal("show");
  //       // this.isSelectedFrameNotFound = true;
  //       this.oldSelectedFrameCode = this.frameCode;
  //       let tempFrameArry = []
  //       let selectedFrame = this.OnloadFrames.filter((data)=> this.frameCode === data.code);
  //       let finishWidth = parseFloat(this.outSideWidth) + ((parseFloat(selectedFrame[0].width) - parseFloat(selectedFrame[0].lip_width)) * 2);
  //       let finishHeigth = parseFloat(this.outSideHeight) + ((parseFloat(selectedFrame[0].width) - parseFloat(selectedFrame[0].lip_width)) * 2);
  //       // this.OnloadFrames = JSON.parse(localStorage.getItem('frames'))
  //       this.OnloadFrames.forEach((data)=>{
  //         let frameMaxSize = data.finished_size.split("x");
  //         if (finishWidth <= parseInt(frameMaxSize[0]) && finishHeigth <= parseInt(frameMaxSize[1])) {
  //           tempFrameArry.push(data);
  //         }
  //       })
        
  //       this.OnloadFrames = tempFrameArry;
  //       this.frameCode = this.OnloadFrames[0].code;
  //       this.showingChangeFrameMessage = this.OnloadFrames[0].name;
  //       // let tempArray = this.OnloadFrames.filter((data) => this.frameCode === data.code)
  //       // if(tempArray.length === 0){
  //       //     this.isSelectedMatNotFound = true;
  //       // }
  //       this.changeFrame(this.OnloadFrames[0])
  //       return false;
  //     }

      
  // }

  getFilterMatsData(){
    let self = this;
    let tmpFrameMaxWidth = this.customWidth;
    let tmpFrameMaxHeight = this.customHeight;
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