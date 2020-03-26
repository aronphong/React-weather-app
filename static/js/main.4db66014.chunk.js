(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,function(e,t,a){e.exports={Form:"Form_Form__2Bzy-",search:"Form_search__CifuG"}},,function(e,t,a){e.exports={Forecast:"Forecast_Forecast__12asK",name:"Forecast_name__iQAPw"}},,,function(e,t,a){e.exports={Content:"Layout_Content__3HqCG"}},,function(e,t,a){e.exports={Title:"Titles_Title__2zWnI"}},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=(a(19),a(1)),s=a(2),l=a(5),u=a(3),h=a(4),m=(a(20),a(11)),p=a.n(m),d=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:p.a.Content},this.props.children)}}]),a}(n.Component),v=a(6),f=a.n(v),g=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getInput=function(){var t=document.getElementsByTagName("input")[0].value;e.props.getLocation(t)},e.handleSearch=function(){""!==e.props.location?e.props.searchWeather():document.getElementsByTagName("input")[0].focus()},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:f.a.Form},r.a.createElement("input",{autoFocus:!0,className:f.a.search,type:"text",maxLength:"35",onChange:this.getInput,value:this.props.location,placeholder:"Enter City name"}),r.a.createElement("button",{onClick:this.props.switchUnits},this.props.units),r.a.createElement("button",{onClick:this.handleSearch},"Search"))}}]),a}(n.Component),w=a(7),E=a.n(w),b=a(12),y="4977766ec9fddf6a4a774c619886639d",_={getWeatherData:function(e){var t=arguments;return Object(b.a)(E.a.mark((function a(){var n,r,i;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"imperial",a.prev=1,a.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(y,"&units=").concat(n));case 4:return r=a.sent,a.next=7,r.json();case 7:return i=a.sent,a.next=10,i;case 10:return a.abrupt("return",a.sent);case 13:a.prev=13,a.t0=a.catch(1),console.log(a.t0);case 16:case"end":return a.stop()}}),a,null,[[1,13]])})))()},saveWeatherData:function(e){try{return{name:e.name,main:e.weather[0].main,description:e.weather[0].description,temp:e.main.temp,feelsLike:e.main.feels_like,tempMin:e.main.temp_min,tempMax:e.main.temp_max,pressure:e.main.pressure,wind:{speed:e.wind.speed,degrees:e.wind.deg},sunrise:e.sys.sunrise,sunset:e.sys.sunset}}catch(t){console.log(t)}}},k=a(13),C=a.n(k),j=function(){return r.a.createElement("header",null,r.a.createElement("h1",{className:C.a.Title},"Weather Now"))},O=a(8),W=a.n(O),x=function(e){var t=e.data,a="imperial"===e.units?"\xb0F":"\xb0C";return r.a.createElement("div",{className:W.a.Forecast},r.a.createElement("div",{className:W.a.name},t.name),r.a.createElement("div",null,t.temp,a," - ",t.main),r.a.createElement("div",null,t.description," throughout the day"),r.a.createElement("div",null,r.a.createElement("p",null,"Feels Like - ",t.feelsLike,a),r.a.createElement("p",null,"Low - ",t.tempMin,a),r.a.createElement("p",null,"High - ",t.tempMax,a)),r.a.createElement("div",null,"Wind Speed - ",t.wind.speed),r.a.createElement("div",null,"Wind Direction - ",t.wind.degrees,"\xb0"))},D=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={location:"",units:"imperial",weatherData:null},n.handleLocation=n.handleLocation.bind(Object(l.a)(n)),n.handleUnitChange=n.handleUnitChange.bind(Object(l.a)(n)),n.handleWeatherData=n.handleWeatherData.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.location!==this.state.location}},{key:"handleLocation",value:function(e){this.setState({location:e})}},{key:"handleUnitChange",value:function(){var e="imperial"===this.state.units?"metric":"imperial";this.setState({units:e})}},{key:"handleWeatherData",value:function(){var e=this;_.getWeatherData(this.state.location,this.state.units).then((function(t){var a=_.saveWeatherData(t);e.setState({weatherData:a})}))}},{key:"render",value:function(){var e;return e=this.state.weatherData?r.a.createElement(x,{data:this.state.weatherData,units:this.state.units}):null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(j,null),r.a.createElement(g,{location:this.state.location,getLocation:this.handleLocation,switchUnits:this.handleUnitChange,units:this.state.units,searchWeather:this.handleWeatherData}),e))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.4db66014.chunk.js.map