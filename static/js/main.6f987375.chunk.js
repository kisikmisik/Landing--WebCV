(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/menu.cf3d0126.svg"},function(e,t,a){e.exports=a.p+"static/media/me2.6ea34720.png"},function(e,t,a){e.exports=a.p+"static/media/linkedin.64dc861c.svg"},function(e,t,a){e.exports=a.p+"static/media/github.6180538d.svg"},function(e,t,a){e.exports=a.p+"static/media/map.932a26f1.png"},,,,,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),c=(a(25),a(9)),l=a(10),o=a(19),m=a(18),u=(a(26),a(27),a(11)),p=a.n(u),d=function(e){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"visually-hidden"},"Front-end developer, UI/UX specialist web resume, work and projects"),n.a.createElement("div",{className:"header__burger",id:"showMenu"},n.a.createElement("img",{onClick:function(){e.changeOuterMenuStatus(!0)},className:"header__burger-image",src:p.a,alt:"Menu",width:"35"})))},h=(a(28),function(e){return n.a.createElement("li",{className:"side-nav__item "+(e.currentSlide===e.number?"active":"")},n.a.createElement("span",null,e.number),n.a.createElement("a",{href:"#slide-"+e.number},e.name))}),k=function(e){return n.a.createElement("nav",{className:"side-nav"},n.a.createElement("ol",{className:"side-nav__list"},e.navItems.map((function(t){return n.a.createElement(h,{currentSlide:e.currentSlide,name:t.name,number:t.itemNumber,changeCurrentSlide:e.changeCurrentSlide,key:t.name})}))))},g=(a(29),a(12)),_=a.n(g),b=a(13),E=a.n(b),f=a(14),v=a.n(f),N=function(e){return n.a.createElement("section",{id:"slide-1",className:"home slide slide--1"},n.a.createElement("div",{className:"home__top-wrapper"},n.a.createElement("h2",{className:"home__title"},"Hi,",n.a.createElement("br",null)," I am Vladimir,",n.a.createElement("br",null)," web developer"),n.a.createElement("img",{src:_.a,alt:"Portrait of ugly me",className:"home__portrait",width:"310",height:"auto"}),n.a.createElement("div",{className:"home__links-wrapper"},n.a.createElement("a",{href:"#slide-4",className:"home__button"},"Hire me"),n.a.createElement("a",{href:"Resume-Volodymyr-Nofenko.pdf",target:"_blank",className:"home__button"},"Resume"))),n.a.createElement("div",{className:"home__links"},n.a.createElement("a",{href:"https://www.linkedin.com/in/vnofenko/",className:"home__link--linkedin link-button"},n.a.createElement("img",{src:E.a,alt:"linkedin icon",width:"30"}),n.a.createElement("span",null,"linkedin")),n.a.createElement("a",{href:"#slide-2",className:"button home__link--portfolio"},"Portfolio"),n.a.createElement("a",{href:"https://github.com/kisikmisik",className:"home__link--github link-button"},n.a.createElement("img",{src:v.a,alt:"github icon",width:"35"}),n.a.createElement("span",null,"github"))))},w=a(1),S=(a(30),function(e){var t=function(t){e.changeCurrentMobileFilterLabel(t.target.textContent);for(var a=document.querySelectorAll(".filters__filter"),i=0;i<a.length;i++)a[i].classList.contains("active")&&a[i].classList.remove("active");return t.target.classList.add("active"),document.documentElement.clientWidth<=800&&e.changeMobileFiltersVisibility(!1),e.changeCurrentFilter(t.target.textContent)};return n.a.createElement("div",{className:"works__filters filters"},e.filters.map((function(e){return n.a.createElement("button",{key:e,onClick:t,className:"filters__filter button"},e)})))}),j=(a(31),function(e){return n.a.createElement("li",{onClick:function(){return e.showProjectPopup(e.title)},className:"portfolio__preview-wrapper"},n.a.createElement("img",{className:"portfolio__image",src:e.imageLink,alt:"project background",width:"100%"}),n.a.createElement("div",{className:"portfolio__preview-text-wrapper"},n.a.createElement("button",{className:"portfolio__item-view"},"Details")))}),y=(a(32),a(33),function(e){return n.a.createElement("article",{onClick:function(){return e.changeProjectPopupStatus(!1)},className:"portfolio__item-popup project"},n.a.createElement("div",{className:"project__wrapper"},n.a.createElement("div",{className:"project__preview-wrapper"},n.a.createElement("img",{src:e.clickedProject.bigImage,alt:"project preview project__left-section",className:"project__preview",width:"100%"})),n.a.createElement("div",{className:"project__right-section"},n.a.createElement("h3",{className:"project__title"},e.clickedProject.title),n.a.createElement("p",{className:"project__about"},e.clickedProject.about),n.a.createElement("h4",{className:"project__stack-title"},"Technical Sheet"),n.a.createElement("p",{className:"project__stack-desc"},"Code technologies and skills I got involved with while working on this project:"),n.a.createElement("ul",{className:"project__stack-list"},e.clickedProject.stack.map((function(e){return n.a.createElement("li",{className:"project__stack-item"},e)}))),n.a.createElement("div",{className:"project__links"},n.a.createElement("a",{target:"_blank",href:e.clickedProject.siteLink,className:"project__link-visit link-button"},"Visit the Website"),n.a.createElement("a",{target:"_blank",href:e.clickedProject.sourceLink,className:"project__link-code link-button"},"Source code")))))}),L=function(e){var t=Object(i.useState)(!1),a=Object(w.a)(t,2),r=a[0],s=a[1],c=Object(i.useState)(null),l=Object(w.a)(c,2),o=l[0],m=l[1],u=function(t){var a=e.projects.filter((function(e){return e.title===t}));m(a),s(!0)};return n.a.createElement("ul",{className:"works__portfolio portfolio"},e.projects.map((function(e){return n.a.createElement(j,{key:e.id,imageLink:e.smallImage,showProjectPopup:u,title:e.title})})),r&&n.a.createElement(y,{changeProjectPopupStatus:s,clickedProject:o[0]}))},O=(a(34),function(e){var t=Object(i.useState)("Show all"),a=Object(w.a)(t,2),r=a[0],s=a[1],c=Object(i.useState)(!1),l=Object(w.a)(c,2),o=l[0],m=l[1],u=Object(i.useState)("Filters"),p=Object(w.a)(u,2),d=p[0],h=p[1];return n.a.createElement("section",{id:"slide-2",className:"works slide slide--2"},n.a.createElement("div",{className:"works__top-wrapper"},n.a.createElement("h2",{className:"works__title"},"Portfolio"),n.a.createElement("button",{onClick:function(){m(!0)},className:"works__filter-button button",disabled:o},d),n.a.createElement("div",{className:"works__swipe-wrapper"},n.a.createElement("span",{className:"works__swipe"},"Swipe left for more")),o||document.documentElement.clientWidth>750?n.a.createElement(S,{changeMobileFiltersVisibility:m,changeCurrentFilter:s,filters:e.filters,changeCurrentMobileFilterLabel:h}):n.a.createElement("span",null)),n.a.createElement(L,{currentFilter:r,projects:function(){var t=e.projects,a=function(e){return e===r};return"Show all"!==r?t=t.filter((function(e){return e.stack.some(a)})):t}()}))}),C=(a(35),a(15)),M=a.n(C),I=(a(36),function(e){var t=Object(i.useState)(!1),a=Object(w.a)(t,2),r=a[0],s=a[1];return n.a.createElement("form",{className:"contact-popup"},n.a.createElement("div",{className:"contact-popup__wrapper"},n.a.createElement("label",{className:"contact-popup__input-wrapper"},n.a.createElement("p",{className:"contact-popup__label"},"Your email:"),n.a.createElement("input",{type:"email",className:"contact-popup__email",placeholder:"Email address",autoFocus:!0,required:!0,maxLength:"50"})),n.a.createElement("label",{className:"contact-popup__input-wrapper"},n.a.createElement("p",{className:"contact-popup__label"},"Title:"),n.a.createElement("input",{type:"text",className:"contact-popup__name",placeholder:"Theme",maxLength:"50",required:!0})),n.a.createElement("label",{className:"contact-popup__input-wrapper"},n.a.createElement("p",{className:"contact-popup__label"},"Message:"),n.a.createElement("textarea",{cols:"30",rows:"5",className:"contact-popup__message",placeholder:"Type your message..",maxLength:"200",required:!0}))),r?n.a.createElement("p",{className:"contact-popup__sent"},"Thanks! I'll answer shortly."):n.a.createElement("button",{onClick:function(){s(!0)},type:"submit",className:"contact-popup__send"},"Send message"))}),T=function(e){var t=Object(i.useState)(!1),a=Object(w.a)(t,2),r=a[0],s=a[1];return n.a.createElement("section",{id:"slide-3",className:"contact slide slide--3"},n.a.createElement("h2",{className:"visually-hidden"},"Contact information, address, map location and get in touch form"),n.a.createElement("img",{src:M.a,alt:"Krakow on map",height:"100%",className:"contact__map"}),n.a.createElement("article",{className:"info-block"},n.a.createElement("address",{className:"info-block__address"},"Krakow, Poland"),n.a.createElement("a",{className:"info-block__email",href:"mailto:700mmr@gmail.com"},"700mmr@gmail.com"),n.a.createElement("a",{className:"info-block__phone",href:"tel:+48537118414"},"+48 537 118 414"),n.a.createElement("button",{onClick:function(){return s(!0)},className:"info-block__contact-btn"},"Contact me")),r||document.documentElement.clientWidth<=800?n.a.createElement(I,{changePopupVisibility:s}):n.a.createElement(n.a.Fragment,null))},x=(a(37),function(e){return n.a.createElement("section",{id:"slide-4",className:"hire-me slide slide--4"},n.a.createElement("h2",{className:"visually-hidden"},"Hire me to make a website or webapp for you or your business"),n.a.createElement("form",{className:"hire-me__form"},n.a.createElement("fieldset",{className:"hire-me__work-type-wrapper"},n.a.createElement("legend",null,"You want me to do"),n.a.createElement("div",{className:"hire-me__row-wrapper hire-me__row-wrapper--1"},n.a.createElement("label",{className:"hire-me__work hire-me__work--landing button"},n.a.createElement("input",{type:"checkbox",className:"visually-hidden"}),n.a.createElement("span",{className:"hire-me__work-text"},"Landing page")),n.a.createElement("label",{className:"hire-me__work hire-me__work--shop button"},n.a.createElement("input",{type:"checkbox",className:"visually-hidden"}),n.a.createElement("span",{className:"hire-me__work-text"},"Online shop")),n.a.createElement("label",{className:"hire-me__work hire-me__work--html button"},n.a.createElement("input",{type:"checkbox",className:"visually-hidden"}),n.a.createElement("span",{className:"hire-me__work-text"},"Semantic HTML"))),n.a.createElement("div",{className:"hire-me__row-wrapper hire-me__row-wrapper--2"},n.a.createElement("label",{className:"hire-me__work hire-me__work--app button"},n.a.createElement("input",{type:"checkbox",className:"visually-hidden"}),n.a.createElement("span",{className:"hire-me__work-text"},"Web application")),n.a.createElement("label",{className:"hire-me__work hire-me__work--design button"},n.a.createElement("input",{type:"checkbox",className:"visually-hidden"}),n.a.createElement("span",{className:"hire-me__work-text"},"UI/UX design"))),n.a.createElement("div",{className:"hire-me__row-wrapper hire-me__row-wrapper--3"},n.a.createElement("label",{className:"hire-me__work hire-me__work--job button"},n.a.createElement("input",{type:"checkbox",className:"visually-hidden"}),n.a.createElement("span",{className:"hire-me__work-text"},"Remote ft/pt job")),n.a.createElement("label",{className:"hire-me__work hire-me__work--other button"},n.a.createElement("input",{type:"checkbox",className:"visually-hidden"}),n.a.createElement("span",{className:"hire-me__work-text"},"Other")))),n.a.createElement("div",{className:"hire-me__bottom-wrapper"},n.a.createElement("input",{type:"text",className:"hire-me__name",placeholder:"Name",maxLength:"50"}),n.a.createElement("input",{type:"email",className:"hire-me__email",placeholder:"Email",maxLength:"50"})),n.a.createElement("button",{type:"submit",className:"hire-me__submit"},"Send request")))}),P=(a(38),function(e){return n.a.createElement("main",{id:"mainSliders",className:"main"},n.a.createElement(N,null),n.a.createElement(O,{projects:e.projects,filters:e.filters}),n.a.createElement(T,null),n.a.createElement(x,null))}),R=a(17),H=a(3),U={currentSlide:1,filters:["Show all","HTML/CSS","React.js","JavaScript","Less","Sass","Canvas"],projects:[{title:"Vladimir Nofenko | Web developer | Portfolio",id:0,bigImage:"myWeb.jpg",smallImage:"myWeb-small.jpg",about:"This website is a showcase of my recent projects as a Front-end Web Developer and as UI/UX designer.",stack:["React.js","Redux, React-redux","Sass","JavaScript"],sourceLink:"https://github.com/kisikmisik/Landing--WebCV",siteLink:""},{title:"Social Network",id:1,bigImage:"socialNetwork.jpg",smallImage:"socialNetwork-small.jpg",about:"Trial social network made to show my skills in building SPA on React.js. Click 'Source code' to see the instructions how to try it.",stack:["React.js","Redux, React-redux","Redux-thunk","Redux-form","Axios","React-test-renderer","JavaScript"],sourceLink:"https://github.com/kisikmisik/Study--SocialNetwork",siteLink:"https://kisikmisik.github.io/Study--SocialNetwork"},{title:"Online-shop Cat-Energy | adaptive | 3 pages",id:2,bigImage:"catEnergy.jpg",smallImage:"catEnergy-small.jpg",about:"This was a training project made as part of the front end developer course at htmlacademy.ru Pages are adaptive for tablets and smartphones. Adaptive layouts made by media queries",stack:["HTML5","Less","Gulp","JavaScript"],sourceLink:"https://github.com/kisikmisik/Study-project--EnergyCat",siteLink:"https://kisikmisik.github.io/Study-project--EnergyCat"},{title:"Online-shop Device | 2 pages",id:3,bigImage:"device.jpg",smallImage:"device-small.jpg",about:"A first training project made during the course of front-end development at htmlacademy.ru",stack:["HTML5","Less","Gulp"],sourceLink:"https://github.com/kisikmisik/Study-project--Device",siteLink:"https://kisikmisik.github.io/Study-project--Device"},{title:"Kekstagram | upload and edit your image",id:4,bigImage:"kekstagram.jpg",smallImage:"kekstagram-small.jpg",about:"This project is a 'final exam' done as part of the front end developer course at htmlacademy.ru",stack:["JavaScript","HTML5","Less","Gulp"],sourceLink:"https://github.com/kisikmisik/Study-project--Kekstagram",siteLink:"https://kisikmisik.github.io/Study-project--Kekstagram"},{title:"Peridona | adaptive landing page",id:5,bigImage:"peridona.jpg",smallImage:"peridona-small.jpg",about:"Another pet project, typical business landing page, adaptive layouts for tablets and smartphones.",stack:["JavaScript","HTML5","Less","Gulp"],sourceLink:"https://github.com/kisikmisik/Landing--Peridona",siteLink:"https://kisikmisik.github.io/Landing--Peridona"},{title:"Scholarship | adaptive landing page",id:6,bigImage:"scholarship.jpg",smallImage:"scholarship-small.jpg",about:"One of the first freelance projects. Adaptive design made using media queries.",stack:["HTML/CSS","PHP","Gulp"],sourceLink:"https://github.com/kisikmisik/Commercial--Scholarship",siteLink:"https://studyup.club/"},{title:"StudyUP | adaptive landing page",id:7,bigImage:"studyUp.jpg",smallImage:"studyUp-small.jpg",about:"One of the freelance projects. Adaptive layouts done by media queries.",stack:["HTML/CSS","PHP","Gulp"],sourceLink:"https://github.com/kisikmisik/Commercial--StudyUp",siteLink:"https://kisikmisik.github.io/Commercial--StudyUp"},{title:"Space Tennis | HTML game",id:8,bigImage:"tennis.jpg",smallImage:"tennis-small.jpg",about:"My version of one of the first video games in the world. Made using ES6+ tools like classes and promises",stack:["HTML5","Canvas","CSS","JavaScript"],sourceLink:"https://github.com/kisikmisik/Commercial--StudyUp",siteLink:"https://kisikmisik.github.io/Study--SpaceTennis"},{title:"Snake | HTML game",id:9,bigImage:"snake.jpg",smallImage:"snake-small.jpg",about:"Just classic.",stack:["HTML5","Canvas","CSS","JavaScript"],sourceLink:"https://github.com/kisikmisik/Study---snake",siteLink:"https://kisikmisik.github.io/Study---snake/"},{title:"Kvast | quick-made landing page",id:10,bigImage:"kvast.jpg",smallImage:"kvast-small.jpg",about:"The point was to make a landing page as fast as possible. This one took 6 hours.",stack:["HTML/CSS"],sourceLink:"https://github.com/kisikmisik/Study--Kvast",siteLink:"https://kisikmisik.github.io/Study--Kvast"}],navItems:[{itemNumber:1,name:"home"},{itemNumber:2,name:"works"},{itemNumber:3,name:"contact"},{itemNumber:4,name:"hire me"}],isOuterMenu:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"mainReducer/CHANGE-CURRENT-SLIDE":return Object(H.a)(Object(H.a)({},e),{},{currentSlide:t.newSlide});case"mainReducer/CHANGE_OUTER_MENU_STATUS":return Object(H.a)(Object(H.a)({},e),{},{isOuterMenu:t.status});default:return e}},W=(a(45),function(e){return n.a.createElement("li",{onClick:function(){e.changeOuterMenuStatus(!1)},className:"main-nav__item "+(e.number===e.currentSlide?"active":"")},n.a.createElement("a",{href:"#slide-"+e.number},e.name))}),F=function(e){return n.a.createElement("nav",{className:e.isOuterMenu?"main nav":"main nav visually-hidden"},n.a.createElement("ul",{className:"main-nav__list"},e.navItem.map((function(t){return n.a.createElement(W,{key:t.name,currentSlide:e.currentSlide,name:t.name,number:t.itemNumber,changeOuterMenuStatus:e.changeOuterMenuStatus})}))))},J=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="Vladimir Nofenko | Web developer | Portfolio";var t=document.getElementById("mainSliders");t.addEventListener("scroll",(function(a){e.changeSideNav(t)}));var a=document.getElementById("main-wrapper");a.addEventListener("click",(function(){a.classList.contains("outer-left")&&e.props.changeOuterMenuStatus(!1)}))}},{key:"changeSideNav",value:function(e){e.scrollTop<50?this.props.changeCurrentSlide(1):e.scrollTop>50&&e.scrollTop<1100?this.props.changeCurrentSlide(2):e.scrollTop>1100&&e.scrollTop<1700?this.props.changeCurrentSlide(3):e.scrollTop>1700&&this.props.changeCurrentSlide(4)}},{key:"render",value:function(){return n.a.createElement("div",{className:this.props.isOuterMenu?"perspective":""},n.a.createElement("div",{id:"main-wrapper",className:this.props.isOuterMenu?"main-wrapper outer-left":"main-wrapper"},n.a.createElement(d,{changeOuterMenuStatus:this.props.changeOuterMenuStatus}),n.a.createElement(k,{changeCurrentSlide:this.props.changeCurrentSlide,navItems:this.props.navItems,currentSlide:this.props.currentSlide}),n.a.createElement(P,{currentSlide:this.props.currentSlide,projects:this.props.projects,filters:this.props.filters})),n.a.createElement(F,{isOuterMenu:this.props.isOuterMenu,currentSlide:this.props.currentSlide,navItem:this.props.navItems,changeOuterMenuStatus:this.props.changeOuterMenuStatus}))}}]),a}(n.a.Component),G=Object(R.a)((function(e){return{currentSlide:e.mainReducer.currentSlide,navItems:e.mainReducer.navItems,isOuterMenu:e.mainReducer.isOuterMenu,projects:e.mainReducer.projects,filters:e.mainReducer.filters}}),{changeCurrentSlide:function(e){return{type:"mainReducer/CHANGE-CURRENT-SLIDE",newSlide:e}},changeOuterMenuStatus:function(e){return{type:"mainReducer/CHANGE_OUTER_MENU_STATUS",status:e}}})(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(2),V=Object(q.b)({mainReducer:A}),D=Object(q.c)(V);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,{store:D})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.6f987375.chunk.js.map