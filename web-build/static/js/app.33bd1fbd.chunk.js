(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{69:function(t,e,n){t.exports=n(93)},93:function(t,e,n){"use strict";n.r(e);var r=n(97),o=n(12),s=n.n(o),i=n(8),a=n.n(i),c=n(9),u=n.n(c),l=n(13),f=n.n(l),h=n(14),g=n.n(h),b=n(6),p=n.n(b),d=n(67),j=n(0),v=n(61),y=n(3),O=n(33),S=n(68),m=n(17),x=n(11);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p()(t);if(e){var o=p()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g()(this,n)}}function P(t){return t[Math.floor(Math.random()*t.length)]}var C=function(t,e){return t+Math.floor((e-t+1)*Math.random())},R=function(t){f()(n,t);var e=k(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).changeGuess=function(t){NaN!=parseFloat(t)&&r.setState({guess:t})},r.submitGuess=function(){if(""!=r.state.guess){var t=r.state.streak;r.state.guess==r.state.answer.toString()?t++:t=0,r.setState(M(M({},r.generate(t+1)),{},{guess:"",streak:t}))}},r.state=r.generate(),r.state=M(M({},r.state),{},{guess:"",streak:0}),r}return u()(n,[{key:"generate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["addition","subtraction","multiplication","division","rounding"],n=P(e),r="0+0",o=0;if("addition"==n){var s=C(t,5*t),i=C(t,5*t);r=s.toString()+"+"+i.toString(),o=s+i}else if("subtraction"==n){var a=C(t,5*t),c=C(t,5*t);r=Math.max(a,c).toString()+"-"+Math.min(a,c).toString(),o=Math.abs(a-c)}else if("multiplication"==n){var u=C(2,2+2*t),l=C(2,2+2*t);r=u.toString()+"*"+l.toString(),o=u*l}else if("division"==n){var f=C(2,2+2*t);r=(f*(o=C(2,2+2*t))).toString()+"/"+f.toString()}else if("rounding"==n){for(var h=C(-3,3),g=["ones","tenths","hundredths","thousandths"],b=["ones","tens","hundreds","thousands"],p=h>0?b[h]:g[-h],d=h>0?C(h+1,h+Math.floor(t/10)):C(2-h,2-h+Math.floor(t/10)),j=h>0?0:C(1,d+h-1),v=C(1,9).toString(),y=1;y<d;y++)y==j&&(v+="."),v+=C(y!=d-1?0:1,9).toString();"5"==v.slice(-1)&&(h>0&&(v+="."),v+=C(1,9).toString()),r="Round "+v+" to the "+p+" place",o=Math.round(parseFloat(v)/Math.pow(10,h))/Math.pow(10,-h),h>=0&&(o=Math.round(o))}return{question:r,answer:o}}},{key:"render",value:function(){return Object(x.jsxs)(m.a,{children:[Object(x.jsx)(O.a,{style:D.bigCenter,children:this.state.question}),Object(x.jsx)(S.a,{style:D.bigCenter,onChangeText:this.changeGuess,value:this.state.guess,placeholder:"Answer",keyboardType:"numeric"}),Object(x.jsx)(v.a,{onPress:this.submitGuess,title:"Submit",color:"#841584"}),Object(x.jsxs)(O.a,{style:D.bigCenter,children:["Streak: ",this.state.streak]})]})}}]),n}(j.Component);var D=y.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},bigCenter:{fontSize:48,fontWeight:"bold",textAlign:"center"}});Object(r.a)((function(){return Object(x.jsxs)(m.a,{style:D.container,children:[Object(x.jsx)(R,{}),Object(x.jsx)(d.a,{style:"auto"})]})}))}},[[69,1,2]]]);
//# sourceMappingURL=app.33bd1fbd.chunk.js.map