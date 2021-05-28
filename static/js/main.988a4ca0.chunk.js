(this.webpackJsonpweatherclock=this.webpackJsonpweatherclock||[]).push([[0],{49:function(e,t,r){},55:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},61:function(e,t,r){},62:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(13),i=r.n(o),s=(r(49),r(7)),c=r(10),l=r(9),d=r(34),u=r.n(d),h=(r(55),r(16)),m=r(23),p=(r(58),r(38)),g=r(35),f=(r(59),function e(t){var r=this;if(Object(s.a)(this,e),this.hourDx=function(e){var t=2*Math.PI*(r.decimalHour/12);return Math.sin(t)*e},this.hourDy=function(e){var t=2*Math.PI*(r.decimalHour/12);return-Math.cos(t)*e},this.minuteDx=function(e){var t=2*Math.PI*(r.decimalHour%12);return Math.sin(t)*e},this.minuteDy=function(e){var t=2*Math.PI*(r.decimalHour%12);return-Math.cos(t)*e},this.symbolDx=function(e,t){var a=2*Math.PI*(r.decimalHour/12);return Math.sin(a)*e-(t-1)/2},this.symbolDy=function(e,t){var a=2*Math.PI*(r.decimalHour/12);return-Math.cos(a)*e-(t-1)/2},this._degreesDistance=function(e,t){var r=Math.abs(t-e);return r>180?360-r:r},this.rankFreeDirections=function(){var e=[0,90,180,270],t=r.decimalHour%1*360,a=r.decimalHour%12/12*360,n={};return e.forEach((function(e){var o=r._degreesDistance(e,t),i=r._degreesDistance(e,a);n[e]=Math.min(o,i)})),e.sort((function(e,t){var r=n[e],a=n[t];return r<a?1:r>a?-1:0})),e},"number"===typeof t)this.decimalHour=t;else{if("object"!==typeof t||"Date"!==t.constructor.name)throw new TypeError("Expected number (decimal hours) or Date");this.decimalHour=t.getHours()+t.getMinutes()/60+t.getSeconds()/3600}}),j=r(2),w=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).render=function(){var t=0|e.props.degreesCelsius,r=e.props.coordinates.hourDx(39),a=e.props.coordinates.hourDy(39);return Object(j.jsxs)("text",{className:"hour",x:r,y:a,children:[t,"\xb0"]})},e}return r}(n.a.Component),b=10,v=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).render=function(){var t="".concat("/weatherclock","/api-met-no-weathericons/png/").concat(e.props.symbol_code,".png"),r=e.props.coordinates.symbolDx(29,b),a=e.props.coordinates.symbolDy(29,b);return Object(j.jsx)("image",{className:"symbol",x:r,y:a,width:b,height:b,href:t})},e}return r}(n.a.Component),x=(r(61),function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).state={textWidth:0,textHeight:0},a.componentDidMount=function(){var e=a.textRef.current.getBBox();a.setState({textWidth:e.width,textHeight:e.height})},a.render=function(){var e=a.props.coords.hourDx(13),t=a.props.coords.hourDy(13),r=1.2*a.state.textWidth,o=1.2*a.state.textHeight;return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)("rect",{x:e-r/2,y:t-o/2,width:r,height:o,rx:"2",ry:"2",className:"wind"}),Object(j.jsx)("text",{ref:a.textRef,x:e,y:t,className:"wind",dominantBaseline:"middle",textAnchor:"middle",children:a.props.children})]})},a.textRef=n.a.createRef(),a}return r}(n.a.Component)),y=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).renderTemperatures=function(e){return e.filter((function(e){return void 0!==e.celsius})).map((function(e){var t=new f(e.timestamp);return Object(j.jsx)(w,{coordinates:t,degreesCelsius:e.celsius},"hour-".concat(t.decimalHour))}))},e.renderWeathers=function(e){return e.filter((function(e){return void 0!==e.symbol_code})).map((function(e){var t=new f(e.timestamp);return Object(j.jsx)(v,{coordinates:t,symbol_code:e.symbol_code},"weather-".concat(t.decimalHour))}))},e.renderWindAndPrecipitation=function(t){var r=0,a=null,o=null;t.forEach((function(e){(null==a||a>e.wind_m_s)&&(a=e.wind_m_s),(null==o||o<e.wind_m_s)&&(o=e.wind_m_s),void 0!==e.precipitation_mm&&(r+=e.precipitation_mm)})),a=Math.round(a),o=Math.round(o);var i=a===o?"".concat(a," m/s"):"".concat(a,"-").concat(o," m/s");console.debug("Wind: ".concat(i));var s=navigator.language||navigator.userLanguage,c=new Intl.NumberFormat(s,{minimumFractionDigits:1,maximumFractionDigits:1}).format(r),l="".concat(c,"mm");console.debug("Precipitation: ".concat(l));var d=new f(e.props.now).rankFreeDirections(),u=d[0],h=new f(12*u/360),m=d[1],p=new f(12*m/360);return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)(x,{coords:h,children:i}),Object(j.jsx)(x,{coords:p,children:l})]})},e.getForecastsToRender=function(){var t,r=[],a=e.props.now.getTime(),n=new Date(a+27e5),o=new Date(a+423e5),i=Object(g.a)(e.props.forecast.entries());try{for(i.s();!(t=i.n()).done;){var s=Object(p.a)(t.value,2),c=s[0],l=s[1],d=new Date(c);d<n||(d>o||r.push(l))}}catch(u){i.e(u)}finally{i.f()}return console.debug(r),r},e.render=function(){var t=e.getForecastsToRender();return Object(j.jsxs)(n.a.Fragment,{children:[e.renderTemperatures(t),e.renderWeathers(t),e.renderWindAndPrecipitation(t)]})},e}return r}(n.a.Component),O=(r(62),function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).render=function(){return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)("line",{className:"hand shadow",x1:"0",y1:"0",x2:e.props.dx,y2:e.props.dy,strokeWidth:e.props.width}),Object(j.jsx)("circle",{className:"shadow",cx:"0",cy:"0",r:"2"}),Object(j.jsx)("line",{className:"hand",x1:"0",y1:"0",x2:e.props.dx,y2:e.props.dy,strokeWidth:e.props.width}),Object(j.jsx)("circle",{cx:"0",cy:"0",r:"2"})]})},e}return r}(n.a.Component)),T=r(95),D=r(91),N=r(92),_=r(93),M=r(94),S=r(97),C=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).render=function(){return Object(j.jsxs)(T.a,{open:!0,onClose:e.props.reload,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(j.jsx)(D.a,{id:"alert-dialog-title",children:e.props.title}),Object(j.jsx)(N.a,{children:Object(j.jsx)(_.a,{id:"alert-dialog-description",children:e.props.children})}),Object(j.jsx)(M.a,{children:Object(j.jsx)(S.a,{onClick:e.props.reload,color:"primary",autoFocus:!0,children:"Retry"})})]})},e}return r}(n.a.Component),F=r(22),I=r(96);var k=function(){function e(t){if(Object(s.a)(this,e),this._startTime=void 0,this._name=void 0,this._daysFromNow=void 0,this._daysFromNow=t,0===t)return this._startTime=new Date,void(this._name="Now");var r=new Date;if(r.setDate(r.getDate()+t),r.setHours(7),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0),this._startTime=r,1!==t){var a=r.toLocaleDateString(navigator.language,{weekday:"long"});this._name=function(e){var t=e[0];return t<"\ud800"||t>"\udfff"?e[0].toUpperCase()+e.slice(1):e.slice(0,2).toUpperCase()+e.slice(2)}(a)}else this._name="Tomorrow"}return Object(F.a)(e,[{key:"name",get:function(){return this._name}},{key:"startTime",get:function(){return this._startTime}},{key:"daysFromNow",get:function(){return this._daysFromNow}}]),e}(),H=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).render=function(){for(var t=[],r=0;r<3;r++){var a=new k(r).name;t.push(Object(j.jsx)("option",{value:String(r),children:a},a))}return Object(j.jsx)(I.a,{style:{position:"absolute",right:"0px",top:"0px"},value:e.props.daysFromNow,onChange:e.onChange,children:t})},e.onChange=function(t){e.props.onSetStartTime(new k(parseInt(t.target.value)))},e}return r}(n.a.Component),P=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e))._getInitialState=function(){return navigator.geolocation?{startTime:a.props.startTime,progress:void 0,error:void 0}:(m.a.exception({description:"Geolocation unsupported",fatal:!0}),{startTime:a.props.startTime,progress:void 0,error:Object(j.jsxs)(C,{title:"Geolocation unsupported",reload:a.props.reload,children:["Please try ",Object(j.jsx)("a",{href:"https://getfirefox.com",children:"another browser"}),"."]})})},a.componentDidMount=function(){a.startGeolocationIfNeeded()},a.componentDidUpdate=function(){a.props.startTime.startTime!==a.state.startTime.startTime&&a.setState(a._getInitialState()),a.startGeolocationIfNeeded()||a.state.progress||a.forecastIsCurrent()||a.download_weather()},a.startGeolocationIfNeeded=function(){if(a.state.progress)return!1;if(a.state.error)return!1;if(a.state.position){var e=Date.now()-a.state.positionTimestamp.getTime();if(e<3e5)return console.debug("Retaining cached position of ".concat(e,"ms age")),!1}return console.log("Geolocating..."),a.setState({progress:Object(j.jsx)("text",{className:"progress",children:"Locating phone..."})}),navigator.geolocation.getCurrentPosition(a.setPosition,a.geoError),!0},a.setPosition=function(e){var t=e.coords.latitude,r=e.coords.longitude;console.log("got position: ".concat(t," ").concat(r)),a.setState({position:e.coords,positionTimestamp:new Date}),a.forecastIsCurrent()||a.download_weather()},a.getDistanceFromLatLonInKm=function(e,t,r,n){var o=a.deg2rad(r-e),i=a.deg2rad(n-t),s=Math.sin(o/2)*Math.sin(o/2)+Math.cos(a.deg2rad(e))*Math.cos(a.deg2rad(r))*Math.sin(i/2)*Math.sin(i/2);return 6371*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))},a.deg2rad=function(e){return e*(Math.PI/180)},a.forecastIsCurrent=function(){if(!a.state.forecast)return!1;var e=a.state.forecastMetadata,t=Date.now()-e.timestamp.getTime();if(t>72e5)return!1;var r=a.getDistanceFromLatLonInKm(e.latitude,e.longitude,a.state.position.latitude,a.state.position.longitude);return!(r>5)&&(console.debug("Forecast considered current: ".concat(t,"ms old and ").concat(r,"km away")),!0)},a.download_weather=function(){var e=a.state.position.latitude,t=a.state.position.longitude;a.setState({progress:Object(j.jsx)("text",{className:"progress",children:"Downloading weather..."})});var r="https://europe-west2-api-met-no-proxy.cloudfunctions.net/api-met-no-proxy/locationforecast/2.0/classic?lat=".concat(e,";lon=").concat(t);console.log("Getting weather from: "+r);var n=Object(h.a)(a);fetch(r).then((function(e){if(!e.ok)throw new C("Response code from upstream: ".concat(e.status));return e.text()})).then((function(r){var a=n.parseWeatherXml(r);n.setState({forecast:a,forecastMetadata:{timestamp:new Date,latitude:e,longitude:t}})})).catch((function(e){console.error(e),m.a.exception({description:"Downloading weather failed: ".concat(e.message),fatal:!a.state.forecast}),a.setState({error:Object(j.jsx)(C,{title:"Downloading weather failed",reload:a.props.reload,children:e.message})})}))},a.parseWeatherXml=function(e){var t=(new window.DOMParser).parseFromString(e,"text/xml").getElementsByTagName("time");console.log("Parsing "+t.length+" prognoses...");for(var r=new Map,a=0;a<t.length;a++){var n=t[a],o=new Date(n.attributes.getNamedItem("from").value),i=new Date(n.attributes.getNamedItem("to").value),s=(i.getTime()-o.getTime())/36e5,c=new Date((o.getTime()+i.getTime())/2),l=r.get(c.getTime());if(!(void 0!==l&&l.span_h<=s)){l||(l={timestamp:c,span_h:s});var d=n.getElementsByTagName("symbol");if(d&&d.length>0){var u=d[0].attributes.getNamedItem("code").value;l.symbol_code=u}var h=n.getElementsByTagName("temperature");if(h&&h.length>0){var m=h[0].attributes.getNamedItem("value").value;l.celsius=parseFloat(m)}var p=n.getElementsByTagName("windSpeed");if(p&&p.length>0){var g=p[0].attributes.getNamedItem("mps").value;l.wind_m_s=parseFloat(g)}var f=n.getElementsByTagName("precipitation");if(f&&f.length>0){var j=f[0].attributes.getNamedItem("maxvalue"),w=f[0].attributes.getNamedItem("value"),b=void 0===j?w.value:j.value;l.precipitation_mm=parseFloat(b)}r.set(c.getTime(),l)}}return console.log(r),r},a.geoError=function(e){console.log("Geolocation failed"),m.a.exception({description:"Geolocation failed: ".concat(e.message),fatal:!a.state.forecast}),a.setState({error:Object(j.jsx)(C,{title:e.message,reload:window.location.reload.bind(window.location,!0),children:'If you are asked whether to allow the Weather Clock to know your current location, please say "yes".'})})},a.renderHands=function(){var e=new f(a.state.startTime.startTime);return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)(O,{width:2.5,dx:e.hourDx(23),dy:e.hourDy(23)}),Object(j.jsx)(O,{width:2,dx:e.minuteDx(34),dy:e.minuteDy(34)})]})},a.render=function(){return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsxs)("svg",{id:"weatherclock",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"-50 -50 100 100",children:[Object(j.jsx)("image",{x:"-50",y:"-50",width:"100",height:"100",xlinkHref:"/weatherclock/clock-frame.png"}),a.getClockContents()]}),a.state.error,a.state.forecast?Object(j.jsx)(H,{daysFromNow:a.props.startTime.daysFromNow,onSetStartTime:a.props.onSetStartTime}):null]})},a.getClockContents=function(){return a.state.forecast?0!==a.props.startTime.daysFromNow?Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)(y,{forecast:a.state.forecast,now:a.state.startTime.startTime}),Object(j.jsx)("text",{className:"tomorrow",children:a.state.startTime.name})]}):Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)(y,{forecast:a.state.forecast,now:a.state.startTime.startTime}),a.renderHands()]}):a.state.error?a.renderHands():a.state.progress?a.state.progress:null},a.state=a._getInitialState(),a}return r}(n.a.Component),W=r(37);m.a.initialize("UA-59702036-2"),m.a.set({anonymizeIp:!0}),m.a.pageview(window.location.pathname+window.location.search);var E=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={startTime:new k(0)},e.setTimeToNow=function(){e.setState({startTime:new k(0)})},e.handleVisibilityChange=function(t){console.debug("Page visibility changed: ".concat(t)),t&&e.setTimeToNow()},e.onSetStartTime=function(t){u()(t),e.setState({startTime:t})},e.render=function(){return Object(j.jsx)(W.a,{onChange:e.handleVisibilityChange,children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(P,{startTime:e.state.startTime,reload:e.setTimeToNow,onSetStartTime:e.onSetStartTime}),Object(j.jsx)("button",{type:"button",onClick:e.setTimeToNow,children:"Update forecast"}),Object(j.jsxs)("p",{children:["Weather forecast from ",Object(j.jsx)("a",{href:"yr.no",children:"yr.no"}),", delivered by the"," ",Object(j.jsx)("a",{href:"https://met.no/English/",children:"Norwegian Meteorological Institute"})," ","and the ",Object(j.jsx)("a",{href:"https://www.nrk.no/",children:"NRK"}),"."]}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:"https://github.com/walles/weatherclock/tree/".concat("d0213c07706581f31834c9a4c0d879ef0a8b49a8"),children:"Source code on GitHub"})})]})})},e}return r}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=window.location.protocol;"http:"===A&&"localhost"!==window.location.hostname?window.location.href="https:"+window.location.href.substring(A.length):(i.a.render(Object(j.jsx)(E,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})))}},[[65,1,2]]]);
//# sourceMappingURL=main.988a4ca0.chunk.js.map