	var Custom_Framing_Responsive = Fiber.extend(function () {
	  		
	  		
	  		return{
	
					getInfo: function (configData) {
					
					 console.log("=====>configData");
					 console.log(configData);
					},
						
					cacheDom: function (options) { console.log("=====>cacheDom");},
					bindScope: function () { console.log("=====>bindScope");},
					setLocals: function (options) {console.log("=====>setLocals");},
					bindEvents: function (options) {console.log("=====>bindEvents");},
					beforeRender: function (options) {console.log("=====>beforeRender");},
					render: function (options) {console.log("=====>render");},
					afterRender: function (options) {console.log("=====>afterRender");},
					
				
					init: function (options) {
						this.cacheDom(options);
						this.bindScope();
						this.setLocals(options);
						this.bindEvents(options);
						this.beforeRender(options);
						this.render(options);
						this.afterRender(options);
					}
				}
});	
  	