(this["webpackJsonpstrona-wizytowka2"]=this["webpackJsonpstrona-wizytowka2"]||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){},197:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),i=t.n(l),A=(t(91),t(17)),o=t(24),s=t(20),c=(t(92),t(15)),m=t(16),u=t(22),d=t(19),g=t(18),E=(t(93),function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).canvasRef=r.a.createRef(),n}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.particles,a=this.canvasRef.current,t=a.getContext("2d");a.width=window.innerWidth,a.height=window.innerHeight;for(var n=0;n<e.length;n++)t.beginPath(),t.arc(e[n].x,e[n].y,e[n].size,0,2*Math.PI,!1),t.fillStyle=e[n].color,t.fill();for(var r=1,l=0;l<e.length;l++)for(var i=l;i<e.length;i++){var A=(e[l].x-e[i].x)*(e[l].x-e[i].x)+(e[l].y-e[i].y)*(e[l].y-e[i].y);A<8e3&&(r=1-A/6e3,t.strokeStyle="rgba(0,0,0,"+r+")",t.beginPath(),t.lineWidth=1,t.moveTo(e[l].x,e[l].y),t.lineTo(e[i].x,e[i].y),t.stroke())}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{className:"canvasOne",ref:this.canvasRef}))}}]),t}(n.Component)),h=(t(94),t(4)),p=function(){for(var e=[],a=0;a<80;a++){var t=Math.random()*window.innerWidth,n=Math.random()*window.innerHeight,r=Math.random()+2;e.push({x:t,y:n,size:r,color:"black",weight:.01})}return e}(),f=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={mouseX:null,mouseY:null,par:p},n.updateAnimationState=n.updateAnimationState.bind(Object(u.a)(n)),n.handleMouse=n.handleMouse.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"handleMouse",value:function(e){this.setState({mouseX:e.clientX,mouseY:e.clientY})}},{key:"componentDidMount",value:function(){this.rAF=requestAnimationFrame(this.updateAnimationState)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF)}},{key:"updateAnimationState",value:function(){for(var e=this.state.par,a=this.state,t=a.mouseX,n=a.mouseY,r=0;r<e.length;r++)e[r].size-=.02,e[r].size<0&&(e[r].x=t+(20*Math.random()-10),e[r].y=n+(20*Math.random()-10),e[r].size=2*Math.random()+2,e[r].weight=2*Math.random()-.5),e[r].y+=e[r].weight,e[r].weight-=.004,e[r].y>window.innerHeight-e[r].size&&(e[r].weight*=-.1);this.setState({par:e,mouseX:void 0,mouseY:void 0}),this.rAF=requestAnimationFrame(this.updateAnimationState)}},{key:"render",value:function(){return r.a.createElement("div",{className:"animation",onMouseMove:this.handleMouse},r.a.createElement("h1",null,"ProDeveloper"),r.a.createElement("p",null,this.props.translate.webdesign),r.a.createElement(E,{particles:this.state.par}))}}]),t}(r.a.Component),w=Object(h.b)((function(e){return{translate:e.translate}}),null)(f),v=(t(98),function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).canvasRef=r.a.createRef(),n}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.particles,a=this.canvasRef.current,t=a.getContext("2d");a.width=window.innerWidth,a.height=window.innerHeight;for(var n=0;n<e.length;n++)t.beginPath(),t.arc(e[n].x,e[n].y,e[n].size,0,2*Math.PI,!1),t.fillStyle=e[n].color,t.fill()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{className:"canvasTwo",ref:this.canvasRef}))}}]),t}(n.Component)),b=(t(99),window.innerWidth),B=function(){for(var e=[],a=0;a<80;a++){var t=Math.random()*window.innerWidth,n=Math.random()*window.innerHeight,r=Math.random()+2;e.push({x:t,y:n,size:r,color:"black",weight:.01})}return e}(),y=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={par:B},n.updateAnimationState=n.updateAnimationState.bind(Object(u.a)(n)),n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.rAF=requestAnimationFrame(this.updateAnimationState)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF)}},{key:"updateAnimationState",value:function(){for(var e=this.state.par,a=0;a<e.length;a++)e[a].size-=.02,e[a].size<0&&(e[a].x=Math.random()*b,e[a].y=20*Math.random()-10+20,e[a].size=4*Math.random()+2,e[a].weight=2*Math.random()-.5),e[a].y+=e[a].weight,e[a].weight+=.004,e[a].y>window.innerHeight-e[a].size&&(e[a].weight*=-.1);this.setState({par:e}),this.rAF=requestAnimationFrame(this.updateAnimationState)}},{key:"render",value:function(){return r.a.createElement("div",{className:"animation"},r.a.createElement("h1",null,"ProDeveloper"),r.a.createElement("p",null,"websites design"),r.a.createElement(v,{particles:this.state.par}))}}]),t}(r.a.Component),Q=(t(100),Object(h.b)((function(e){return{translate:e.translate}}),null)((function(e){var a=e.translate,t=a.start,l=a.offer,i=a.aboutme,s=a.contact,c=Object(n.useState)(!1),m=Object(A.a)(c,2),u=m[0],d=m[1];return r.a.createElement("div",{onClick:function(){d(!u)},className:u?"navi active":"navi"},r.a.createElement("p",null,"menu"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/"},t)),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/oferta"},l)),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/omnie"},i)),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/kontakt"},s))))}))),C=t(26),k=(t(102),t(44)),N=t(27),j=t(63),I=t.n(j),z=t(64),O=t.n(z),x=t(65),S=t.n(x),F=t(66),P=t.n(F),T=t(67),L=t.n(T),M=t(68),D=t.n(M),U=t(69),W=t.n(U),R=t(70),V=t.n(R),Z=t(71),Y=t.n(Z),G=t(72),K=t.n(G);function q(){var e=Object(C.a)(["\n  animation: 4s ",";\n"]);return q=function(){return e},e}function H(){var e=Object(C.a)(["",""]);return H=function(){return e},e}function X(){var e=Object(C.a)(["\n  animation: 2s ",";\n"]);return X=function(){return e},e}function J(){var e=Object(C.a)(["",""]);return J=function(){return e},e}var _=Object(N.b)(J(),k.fadeInLeftBig),$=N.a.div(X(),_),ee=Object(N.b)(H(),k.fadeInRightBig),ae=N.a.div(q(),ee),te=Object(h.b)((function(e){return{translate:e.translate}}),null)((function(e){var a=e.translate,t=a.myname,n=a.bio,l=a.projects,i=a.hobbies,A=a.guitar,o=a.bike,s=a.travel;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"about"},r.a.createElement($,null,r.a.createElement("div",{className:"mycv"},r.a.createElement("img",{src:I.a,alt:"moje zdj\u0119cie profilowe"}),r.a.createElement("p",null," ",r.a.createElement("span",null,t),r.a.createElement("br",null),n))),r.a.createElement(ae,null,r.a.createElement("div",{className:"myportfolio"},r.a.createElement("p",null,l),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.immorise.com"},r.a.createElement("img",{src:L.a,alt:"zdj\u0119cie strony immorise"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://takyes.edu.pl"},r.a.createElement("img",{src:D.a,alt:"zdj\u0119cie strony Takyes"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/haydulski"},r.a.createElement("img",{src:W.a,alt:"logo ze strony github"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://dranna.pl"},r.a.createElement("img",{src:V.a,alt:"logo ze strony dranna.pl"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://lederg.com"},r.a.createElement("img",{src:K.a,alt:"logo sklepu lederg"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://koparkasuwalki.pl"},r.a.createElement("img",{src:Y.a,alt:"logo strony koparka"})))))),r.a.createElement($,null,r.a.createElement("div",{className:"freetime"},r.a.createElement("p",null,i),r.a.createElement("div",{className:"hobbycontainer"},r.a.createElement("div",{className:"hobby"},r.a.createElement("img",{src:S.a,alt:"moje zdj\u0119cie jak gram na gitarze"}),r.a.createElement("p",null,A)),r.a.createElement("div",{className:"hobby"},r.a.createElement("img",{src:P.a,alt:"moje zdj\u0119cie na rowerze"}),r.a.createElement("p",null,o)),r.a.createElement("div",{className:"hobby"},r.a.createElement("img",{src:O.a,alt:"zdj\u0119cie z wycieczki"}),r.a.createElement("p",null,s)))))))})),ne=t(33),re=t.n(ne),le=(t(57),t(36)),ie=t(78),Ae=t.n(ie),oe=function(e){var a={};return e.firstName?e.firstName.length>15&&(a.firstName="za du\u017co liter (too many letters)"):a.firstName="pole wymagane (please fill)",e.lastName?e.lastName.length>20&&(a.lastName="za du\u017co liter (too many letters)"):a.lastName="pole wymagane (please fill )",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="niepoprawny adres email (wrong email address)"):a.email="email wymagany (mail required)",e.message?e.message.length<10&&(a.message="napisz co\u015b.. (type something...)"):a.message="chcesz wys\u0142a\u0107 bez wiadomo\u015bci?  (type message)",a},se=Object(h.b)((function(e){return{translate:e.translate}}),null)((function(e){var a=e.translate,t=a.form,l=a.firstname,i=a.surname,o=a.email,s=a.mes,c=a.submit,m=a.human,u=Object(le.a)({initialValues:{firstName:"",lastName:"",email:"",message:""},validate:oe,onSubmit:function(e){E.res?re()({method:"POST",url:"https://formspree.io/xpzywvla",data:e}).then((function(e){u.setSubmitting(!1),u.resetForm(),p(!0,"Twoja wiadomo\u015b\u0107 zosta\u0142a wys\u0142ana (Your message was send!)")})).catch((function(e){u.setSubmitting(!1),p(!1,e.response.data.error)})):alert(m)}}),d=Object(n.useState)({ok:"",msg:"",res:""}),g=Object(A.a)(d,2),E=g[0],h=g[1],p=function(e,a){h({ok:e,msg:a})};return r.a.createElement("div",{className:"contactMain"},r.a.createElement("h3",null,t),r.a.createElement("form",{onSubmit:u.handleSubmit},r.a.createElement("label",{htmlFor:"firstName"},l),r.a.createElement("input",{id:"firstName",name:"firstName",type:"text",onChange:u.handleChange,onBlur:u.handleBlur,value:u.values.firstName}),u.touched.firstName&&u.errors.firstName?r.a.createElement("div",null,u.errors.firstName):null,r.a.createElement("label",{htmlFor:"lastName"},i),r.a.createElement("input",{id:"lastName",name:"lastName",type:"text",onChange:u.handleChange,onBlur:u.handleBlur,value:u.values.lastName}),u.touched.lastName&&u.errors.lastName?r.a.createElement("div",null,u.errors.lastName):null,r.a.createElement("label",{htmlFor:"email"},o),r.a.createElement("input",{id:"email",name:"email",type:"email",onChange:u.handleChange,onBlur:u.handleBlur,value:u.values.email}),u.touched.email&&u.errors.email?r.a.createElement("div",null,u.errors.email):null,r.a.createElement("label",{htmlFor:"message"},s),r.a.createElement("textarea",{id:"message",name:"message",type:"textarea",onChange:u.handleChange,onBlur:u.handleBlur,value:u.values.message}),u.touched.message&&u.errors.message?r.a.createElement("div",null,u.errors.message):null,r.a.createElement("button",{type:"submit"},c),E&&r.a.createElement("p",{className:E.ok?"":"errorMsg"},E.msg),r.a.createElement(Ae.a,{sitekey:"6Ld7XPsUAAAAAFPgFRzJNz6qIwe1O8oWk3zUJ0rG",render:"automatic",verifyCallback:function(e){e&&h({res:e})},theme:"dark",className:"recaptcha-one"})))})),ce=t(79),me=t.n(ce),ue=function(e){var a={};return e.firstName?e.firstName.length>15&&(a.firstName="too many letters"):a.firstName="please fill",e.lastName?e.lastName.length>20&&(a.lastName="too many letters"):a.lastName="please fill",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="wrong email address"):a.email="mail required",e.message?e.message.length<10&&(a.message="type something..."):a.message="type message",a},de=function(){var e=Object(le.a)({initialValues:{firstName:"",lastName:"",email:"",message:""},validate:ue,onSubmit:function(a){l.flag?re()({method:"POST",url:"https://formspree.io/xpzywvla",data:a}).then((function(a){e.setSubmitting(!1),e.resetForm(),o(!0,"Your message was send!")})).catch((function(a){e.setSubmitting(!1),o(!1,a.response.data.error)})):alert("Prove you are human")}}),a=Object(n.useState)({ok:"",msg:"",res:"",flag:!1}),t=Object(A.a)(a,2),l=t[0],i=t[1],o=function(e,a){i({ok:e,msg:a,flag:!1})};return r.a.createElement("div",{className:"contactMain"},r.a.createElement("h3",null,"Lets stay in touch"),r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("label",{htmlFor:"firstName"},"Name"),r.a.createElement("input",{id:"firstName",name:"firstName",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.firstName}),e.touched.firstName&&e.errors.firstName?r.a.createElement("div",null,e.errors.firstName):null,r.a.createElement("label",{htmlFor:"lastName"},"Surname"),r.a.createElement("input",{id:"lastName",name:"lastName",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.lastName}),e.touched.lastName&&e.errors.lastName?r.a.createElement("div",null,e.errors.lastName):null,r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{id:"email",name:"email",type:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.touched.email&&e.errors.email?r.a.createElement("div",null,e.errors.email):null,r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{id:"message",name:"message",type:"textarea",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.message}),e.touched.message&&e.errors.message?r.a.createElement("div",null,e.errors.message):null,!l.flag&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"humantest"}," Type this text to prove that you are human:"),r.a.createElement("img",{className:"captchatest",src:me.a,alt:"tekst do przepisania"}),r.a.createElement("input",{type:"text",id:"humantest",name:"humantest",value:l.res,onChange:function(e){return function(e){"a24d"===e.target.value?i({res:e.target.value,flag:!0}):i({res:e.target.value,flag:!1})}(e)}})),r.a.createElement("button",{type:"submit"},"Submit"),l&&r.a.createElement("p",{className:l.ok?"":"errorMsg"},l.msg)))},ge=(t(197),t(80)),Ee=t.n(ge),he=t(81),pe=t.n(he),fe=t(82),we=t.n(fe),ve=t(83),be=t.n(ve),Be=(t(200),function(){return r.a.createElement("div",{className:"loadingio-spinner-spinner-cu128w6r814"},r.a.createElement("div",{className:"ldio-tcvi6l9bxba"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),ye=Object(h.b)((function(e){return{translate:e.translate}}),null)((function(e){var a=e.translate,t=a.hello,n=a.order,l=a.newest,i=a.newest1,A=a.seo,o=a.seo2,s=a.rwd,c=a.rwd2,m=a.price,u=a.currency,d=a.amount;return u?r.a.createElement("div",{className:"offer"},r.a.createElement("header",null,t),r.a.createElement("h1",null,n),r.a.createElement("div",{className:"offermain"},r.a.createElement("div",null,r.a.createElement("h2",null,l),r.a.createElement("img",{src:pe.a,alt:"zdj\u0119cie j\u0119zyk\xf3w programowania"}),r.a.createElement("p",null,i)),r.a.createElement("div",null,r.a.createElement("h2",null,A),r.a.createElement("img",{src:we.a,alt:"logo pozycjonowania strony"}),r.a.createElement("p",null,o)),r.a.createElement("div",null,r.a.createElement("h2",null,s),r.a.createElement("img",{src:be.a,alt:"logo responsive web designing"}),r.a.createElement("p",null,c))),r.a.createElement("div",{className:"promo"},m," ",r.a.createElement("span",null,r.a.createElement(Ee.a,{start:0,end:d,duration:20}))," ",u)):r.a.createElement(Be,null)})),Qe=(t(201),Object(h.b)(null,{toEng:function(){return function(e){e({type:"LANG_ENG"})}},toPl:function(){return function(e){e({type:"LANG_PL"})}}})((function(e){var a=e.toEng,t=e.toPl;return r.a.createElement("div",{className:"langChoice"},r.a.createElement("button",{onClick:t},"PL "),r.a.createElement("button",{onClick:a},"ENG"))}))),Ce=t(28),ke=t(84),Ne=t.n(ke),je=window.innerWidth;var Ie=function(){var e=Object(n.useState)(1),a=Object(A.a)(e,2),t=a[0],l=a[1];function i(){l(-1*t)}return je>860?r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Be,null)},r.a.createElement(o.a,null,r.a.createElement("aside",null,r.a.createElement(Q,null)),r.a.createElement(Qe,null),r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(s.a,{path:"/oferta"},r.a.createElement(ye,null)),r.a.createElement(s.a,{path:"/omnie"},r.a.createElement(te,null)),r.a.createElement(s.a,{path:"/kontakt"},r.a.createElement(se,null)),r.a.createElement(s.a,{component:w})))))):r.a.createElement("div",{className:"containerMobile"},t>0?r.a.createElement("button",{className:"navClick",onClick:i},r.a.createElement("img",{src:Ne.a,alt:"ikona menu"})):null,t<0?r.a.createElement("div",{className:"mobileNavigation"},r.a.createElement("button",{className:"navClose",onClick:i},"X"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(Ce.Link,{activeClass:"active",to:"animation",spy:!0,smooth:!0,duration:1e3,onClick:i},"Start")),r.a.createElement("li",null,r.a.createElement(Ce.Link,{activeClass:"active",to:"offer",spy:!0,smooth:!0,duration:1e3,onClick:i},"Offer")),r.a.createElement("li",null,r.a.createElement(Ce.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,duration:1e3,onClick:i},"About me")),r.a.createElement("li",null,r.a.createElement(Ce.Link,{activeClass:"active",to:"contactMain",spy:!0,smooth:!0,duration:600,onClick:i},"Contact")))):null,r.a.createElement(y,null),r.a.createElement(ye,null),r.a.createElement(te,null),r.a.createElement(de,null))},ze=t(23),Oe={name:"ENG",start:"Home",offer:"Offer",aboutme:"About me",contact:"Contact",myname:"Hi, I'm Damian!",bio:'Apart from music and bicycle, my big passion is creating websites and programming. For the first time I tried to write the code  in 1993 on the Amiga 600 computer. My young age and user manual in German language meant that as a 9-year-old I was only able to display "Hello world" on the TV screen. I wrote the first page 17 years later in CMS Joomla for my music band. I have varied professional experience but now I focus my career on programming. I am constantly expanding my knowledge, especially in JavaScript, React-js, Node-Express and WordPress. I like to design websites and willingly take on new challenges.',projects:"My projects",hobbies:"In free time I...",bike:"Riding bicycle",guitar:"Play on guitar",travel:"Travel",form:"Let's stay in touch",firstname:"Name",surname:"Surname",email:"Your email",mes:"Message",submit:"Submit",human:"Confirm that you are human :)",hello:"hello!",order:"Order your own website",newest:"Newest technologies",newest1:"Depending on the requirements I will create a website in optimal technology. It will be visually attractive, efficient and will provide satisfaction to users.",seo:"Optymalization of SEO",seo2:"Thanks to the right techniques in writing the code, the site will be highly positioned in search engine results",rwd:"Responsive web designing",rwd2:"My websites and applications comply with the Responsive Web Design standards. The designed template will adapt to the device on which it is displayed",price:"Prices from",currency:"pounds!",amount:100,webdesign:"websites design"},xe=Object(ze.c)({translate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LANG_ENG":return Oe;case"LANG_PL":return{name:"PL",start:"Start",offer:"Oferta",aboutme:"O mnie",contact:"Kontakt",myname:"Witam na mojej stronie",bio:'Moj\u0105 pasj\u0105 opr\xf3cz muzyki i roweru jest tworzenie stron internetowych i programowanie. Pierwszy raz spr\xf3bowa\u0142em napisa\u0107 kod w 1993 roku na komputerze Amiga 600. M\u0142ody wiek i instrukcja obs\u0142ugi w niemieckim j\u0119zyku sprawi\u0142y, \u017ce jako 9-latek uda\u0142o mi si\u0119 jedynie wy\u015bwietli\u0107 "Hello world" na monitorze. Pierwsz\u0105 stron\u0119 napisa\u0142em 17 lat p\xf3\u017aniej w CMS Joomla dla mojego zespo\u0142u. Mam szerokie do\u015bwiadzczenia zawodowe ale przysz\u0142o\u015b\u0107 wi\u0105\u017c\u0119 z programowaniem. Ci\u0105gle poszerzam swoj\u0105 wiedz\u0119 m.in. w j\u0119zyku JavaScript, \u015brodowisku React-js, Node-Express, oraz WordPress. Lubi\u0119 projektowa\u0107 strony WWW i ch\u0119tni\u0119 podejmuj\u0119 nowe wyzwania. Damian.',projects:"Moje projekty",hobbies:"Po pracy...",bike:"Je\u017cd\u017c\u0119 rowerem",guitar:"Gram na gitarze",travel:"Podr\xf3\u017cuj\u0119",form:"B\u0105d\u017amy w kontakcie",firstname:"Imi\u0119",surname:"Nazwisko",email:"Adres email",mes:"Wiadomo\u015b\u0107",submit:"Wy\u015blij",human:"Potwierd\u017a czy jeste\u015b cz\u0142owiekiem :)",hello:"Witaj!",order:"Zam\xf3w swoj\u0105 stron\u0119 internetow\u0105",newest:"Najnowsze technologie",newest1:"W zale\u017cno\u015bci od wymaga\u0144 wykonam stron\u0119 w optymalnej technologii. B\u0119dzie atrakcyjna wizualnie, wydajna, zapewni satysfakcj\u0119 u\u017cytkownikom.",seo:"Optymalizacja pozycjonowania",seo2:"Dzi\u0119ki odpowiednim technikom w pisaniu kodu strona b\u0119dzie wysoko pozycjonowana w wynikach wyszukiwarek",rwd:"Responsywny designing",rwd2:"Moje strony i aplikacje s\u0105 zgodne ze standardami Responsive Web Design. Zaprojektowany szablon dostosuje si\u0119 do urz\u0105dzenia na jakim jest wy\u015bwietlany",price:"Ceny ju\u017c od",currency:"z\u0142otych!",amount:500,webdesign:"projektowanie stron WWW"};default:return e}}}),Se=t(85),Fe=Object(ze.d)(xe,Object(ze.a)(Se.a)),Pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:Fe},r.a.createElement(Ie,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");Pe?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Te(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Te(a,e)}))}}()},57:function(e,a,t){},63:function(e,a,t){e.exports=t.p+"static/media/damian1.e2957fa7.png"},64:function(e,a,t){e.exports=t.p+"static/media/hobby1.a8779a6c.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/hobby2.c02ef994.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/hobby3.6a7c34e1.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/strona-immorise.c94b33a8.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/strona-takyes.3d8f7a41.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/strona-github.97482000.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/strona-dranna.e7faaa68.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/strona-koparka.b0c25d29.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/strona-lederg.7baae178.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/humantest.4ab1fa6c.jpg"},81:function(e,a,t){e.exports=t.p+"static/media/programy.e40add3c.png"},82:function(e,a,t){e.exports=t.p+"static/media/seologo.d5023c54.png"},83:function(e,a,t){e.exports=t.p+"static/media/rwdlogo.0ed6361e.png"},84:function(e,a){e.exports="data:image/png;base64,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QEAAEBAABAQAAQFAQABAQAAQEAAEBAABAUBAAEBAABAQAAQEAAEBQEAAQEAAEBAABAQAAQEAAQFAQAAQEAAEBAABAQABAUBAABAQAAQEAAEBAAEBQEAAEBAABASA/PrIL78u89njcK1AAu344LPtNpAbiQdgntlAhAMQkattxAYCwLAyBMT2AVTZRAREPADGn3d+YQEgIAAICAACAoCAAICAACAgAAgIAAICgIAAgIAAICAACAgAAgKAgACAgAAgIAAICAACAoCAAICAACAgAAgIAAICgIAAgIAAICAACAgAAgKAgACAgAAgIAAICAACAoCAAICAACAgAAgIAAICAAICgIAAICAACAgAAgIAAgJA8YA0VwgU8bp5NzlUAHOuakAAeEBPVudwpYDNwwaS7rABMs2zFuGjHQAbCAACAoCAACAgACAgAAgIAAICgIAAICAAICAACAgAAgKAgAAgIAAgIAAICAACAoCAACAgACAgAAgIAAICgIAAICAAICAACAgAAgKAgAAgIAAgIAAICAACAoCAACAgACAgAAgIAAICgIAAgIAAICAACAgAAgKAgACAgAAgIAAICAACAoCAAICAACAgAAgIAAICgIAAgIAAICAACAgAAgKAgACAgAAgIAAICAACAoCAAICAACAgAAgIAAICgIAAwPd+AQAA//8DABD+NiPKoSWnAAAAAElFTkSuQmCC"},86:function(e,a,t){e.exports=t(209)},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.d95b033d.chunk.js.map