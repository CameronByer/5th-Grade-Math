(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{69:function(e,t,n){e.exports=n(93)},93:function(e,t,n){"use strict";n.r(t);var r=n(97),o=n(12),s=n.n(o),i=n(9),a=n.n(i),c=n(10),u=n.n(c),l=n(14),h=n.n(l),d=n(15),f=n.n(d),p=n(7),b=n.n(p),g=n(67),y=n(0),v=n(42),m=n(3),j=n(27),k=n(68),O=n(18),w=n(5);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b()(e);if(t){var o=b()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}function C(e){return e[Math.floor(Math.random()*e.length)]}var P=function(e,t){return e+Math.floor((t-e+1)*Math.random())},E=function(e){h()(n,e);var t=M(n);function n(e){var r;return a()(this,n),(r=t.call(this,e)).changeGuess=function(e){isNaN(e)||r.setState({guess:e})},r.submitGuess=function(){if(""!=r.state.guess){var e=r.state.streak;r.state.guess==r.state.answer.toString()?(e++,r.setState(x(x({},r.generate(e+1,r.getSelectedProblems())),{},{guess:""}))):e=0,r.setState({streak:e})}},r.keyHandler=function(e){console.log(e),"Enter"===e.nativeEvent.key&&r.submitGuess(),"Backspace"===e.nativeEvent.key&&r.changeGuess(r.state.guess.slice(0,-1)),".0123456789".includes(e.nativeEvent.key)&&r.changeGuess(r.state.guess+e.nativeEvent.key)},r.checkSubmit=function(e){console.log(e),"Enter"===e.nativeEvent.key&&r.submitGuess()},r.state=r.generate(),r.state=x(x({},r.state),{},{guess:"",streak:0,problemTypes:{Addition:!0,Subtraction:!0,Multiplication:!0,Division:!0,Rounding:!0}}),r}return u()(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyHandler,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyHandler,!1)}},{key:"updateCheckbox",value:function(e,t){var n=this.state.problemTypes;n[e]=t,this.setState({problemTypes:n})}},{key:"getSelectedProblems",value:function(){var e=[];for(var t in this.state.problemTypes)this.state.problemTypes[t]&&e.push(t);return e}},{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["Addition","Subtraction","Multiplication","Division","Rounding"],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["Decimals"],r=C(t).toLowerCase(),o="0",s=0;if("addition"==r){var i=P(e,5*e),a=P(e,5*e),c=0;if(n.includes("Decimals")){var u=Math.floor(Math.log10(Math.max(i,a)))+1;c=P(0,u)}o=(i/Math.pow(10,c)).toString()+"+"+(a/Math.pow(10,c)).toString(),s=(i+a)/Math.pow(10,c),console.log(s)}else if("subtraction"==r){var l=P(e,5*e),h=P(e,5*e);o=Math.max(l,h).toString()+"-"+Math.min(l,h).toString(),s=Math.abs(l-h)}else if("multiplication"==r){var d=P(2,2+2*e),f=P(2,2+2*e);o=d.toString()+"*"+f.toString(),s=d*f}else if("division"==r){var p=P(2,2+2*e);o=(p*(s=P(2,2+2*e))).toString()+"/"+p.toString()}else if("rounding"==r){for(var b=P(-3,3),g=["ones","tenths","hundredths","thousandths"],y=["ones","tens","hundreds","thousands"],v=b>0?y[b]:g[-b],m=b>0?P(b+1,b+Math.floor(e/10)):P(2-b,2-b+Math.floor(e/10)),j=b>0?0:P(1,m+b-1),k=P(1,9).toString(),O=1;O<m;O++)O==j&&(k+="."),k+=P(O!=m-1?0:1,9).toString();"5"==k.slice(-1)&&(b>0&&(k+="."),k+=P(1,9).toString()),o="Round "+k+" to the "+v+" place",s=Math.round(parseFloat(k)/Math.pow(10,b))/Math.pow(10,-b),b>=0&&(s=Math.round(s))}return{question:o,answer:s}}},{key:"render",value:function(){var e=this;return Object(w.jsxs)(y.Fragment,{children:[Object(w.jsx)(O.a,{style:{flexDirection:"row",flexWrap:"wrap"},children:Object.keys(this.state.problemTypes).map((function(t){return Object(w.jsx)(v.a,{onPress:function(){return e.updateCheckbox(t,!e.state.problemTypes[t])},children:Object(w.jsx)(j.a,{style:D.toggleable,children:Object(w.jsx)(j.a,{style:{color:e.state.problemTypes[t]?"green":"red"},children:t})})},t)}))}),Object(w.jsx)(j.a,{style:D.bigCenter,children:this.state.question}),Object(w.jsx)(k.a,{style:D.bigCenter,onChangeText:this.changeGuess,onKeyPress:this.checkSubmit,value:this.state.guess,placeholder:"Answer",keyboardType:"numeric"}),Object(w.jsx)(v.a,{style:D.submitContainer,onPress:this.submitGuess,children:Object(w.jsx)(j.a,{style:D.submit,children:"Submit"})}),Object(w.jsxs)(j.a,{style:D.bigCenter,children:["Streak: ",this.state.streak]})]})}}]),n}(y.Component);document.addEventListener("keydown",(function(e){console.log("Key: "+e.key+" with keycode "+e.keyCode+" has been pressed")}));var D=m.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},bigCenter:{fontSize:"4vw",fontWeight:"bold",padding:"2vw",textAlign:"center"},submit:{fontSize:"3vw",color:"white"},submitContainer:{backgroundColor:"purple",borderRadius:"1vw",paddingHorizontal:"3vw",paddingVertical:"0.5vw"},toggleable:{fontSize:"1.5vw",fontWeight:"bold",padding:".5vw",textAlign:"center"}});Object(r.a)((function(){return Object(w.jsxs)(O.a,{style:D.container,children:[Object(w.jsx)(E,{}),Object(w.jsx)(g.a,{style:"auto"})]})}))}},[[69,1,2]]]);
//# sourceMappingURL=app.53f33e0c.chunk.js.map