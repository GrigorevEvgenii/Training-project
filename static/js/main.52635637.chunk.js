(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[0],{12:function(e,t,a){e.exports={nav:"Navbar_nav__2imOE",navItem:"Navbar_navItem__16nSi"}},13:function(e,t,a){e.exports={posts:"MyPosts_posts__3tZ1c",title:"MyPosts_title__3q_Ko",subtitle:"MyPosts_subtitle__2xs3s",PostInputLabel:"MyPosts_PostInputLabel__c--yl",PostInput:"MyPosts_PostInput__1Ljwk",AddPostBtn:"MyPosts_AddPostBtn__2pdsB",AddNewPostContainer:"MyPosts_AddNewPostContainer__2sPCl"}},15:function(e,t,a){e.exports={Dialogs:"Dialogs_Dialogs__1HvdP",DialogsItems:"Dialogs_DialogsItems__LIXpe",Messages:"Dialogs_Messages__2OSA1",SendMessage:"Dialogs_SendMessage__1NwkL",SendMessageArea:"Dialogs_SendMessageArea__HC-UV",SendMessageBtn:"Dialogs_SendMessageBtn__3of2E"}},2:function(e,t,a){e.exports={users:"Users_users__2Iv27",pageButtons:"Users_pageButtons__1q9F3",pageButton:"Users_pageButton__1ZjBo",selectedPageButton:"Users_selectedPageButton__3I9sU",userContainer:"Users_userContainer__1Ycei",aboutUserContainer:"Users_aboutUserContainer__Tb5P-",userDescriptionContainer:"Users_userDescriptionContainer__2XS4y",locationContainer:"Users_locationContainer__1oxmJ",photoContainer:"Users_photoContainer__2PJTc",photo:"Users_photo__2hOPg",button:"Users_button__1saaY",userName:"Users_userName__1mt5V",userStatus:"Users_userStatus__3dsIO",userCountry:"Users_userCountry__6nBlk",userCity:"Users_userCity__2cNhS"}},20:function(e,t,a){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__34LEF",imgContainer:"ProfileInfo_imgContainer__1Au_4",img:"ProfileInfo_img__1lpBU"}},26:function(e,t,a){e.exports=a.p+"static/media/user.da338dae.png"},33:function(e,t,a){e.exports={header:"Header_header__1VCKf",img:"Header_img__3ifQS"}},47:function(e,t,a){e.exports={Profile:"Profile_Profile__3HF8E"}},48:function(e,t,a){e.exports={post:"Post_post__A0EJd"}},49:function(e,t,a){e.exports=a.p+"static/media/Spinner.9064981b.svg"},50:function(e,t,a){e.exports={DialogsItem:"DialogsItem_DialogsItem__16bfh"}},51:function(e,t,a){e.exports={MessagesItem:"MessagesItem_MessagesItem__34gIN"}},52:function(e,t,a){e.exports=a(82)},57:function(e,t,a){},60:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),o=a.n(r),i=(a(57),a(18)),c=a(10),l=a(27),u=a(17),m={posts:[{id:1,text:"Hi, how are you?",likesCount:12},{id:2,text:"It's my first post",likesCount:11},{id:3,text:"Blabla",likesCount:3},{id:4,text:"Dada",likesCount:11}],profile:null,currentText:"Some text",isFetching:!0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_TEXT":var a=Object.assign({},e);return a.currentText=t.text,a;case"ADD_POST":var n=Object(u.cloneDeep)(e);return n.posts=[].concat(Object(l.a)(e.posts),[{id:e.posts.length+1,text:e.currentText,likesCount:e.posts.length+1}]),n.currentText="",n;case"SET_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"TOGGLE_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});default:return e}},g={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],currentMessageBody:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEW_MESSAGE_TEXT":var a=Object(u.cloneDeep)(e);return a.currentMessageBody=t.messageBody,a;case"SEND_MESSAGE":var n=Object(u.cloneDeep)(e);return n.messages=[].concat(Object(l.a)(e.messages),[{id:e.messages.length+1,message:e.currentMessageBody}]),n.currentMessageBody="",n;default:return e}},f={users:[],pageSize:5,currentPage:1,isFetching:!0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===t.userId&&(e.followed=!0),e}))});case"UNFOLLOW":return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===t.userId&&(e.followed=!1),e}))});case"SET_USERS":return Object(c.a)({},e,{users:t.users,totalCount:t.totalCount,currentPage:t.currentPage});case"TOGGLE_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.currentPage});default:return e}},E=Object(i.b)({profilePage:p,dialogsPage:d,usersPage:_}),h=Object(i.c)(E);window.store=h;var P=h,v=(a(60),a(33)),C=a.n(v),N=function(){return s.a.createElement("header",{className:C.a.header},s.a.createElement("img",{className:C.a.img,src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}))},b=a(12),y=a.n(b),S=a(7),I=function(){return s.a.createElement("nav",{className:y.a.nav},s.a.createElement("div",{className:y.a.navItem},s.a.createElement(S.b,{to:"/Profile"},"Profile")),s.a.createElement("div",{className:y.a.navItem},s.a.createElement(S.b,{to:"/Dialogs"},"Messages")),s.a.createElement("div",{className:y.a.navItem},s.a.createElement("a",{href:"/Users"},"Users")),s.a.createElement("div",{className:y.a.navItem},s.a.createElement("a",{href:"#"},"News")),s.a.createElement("div",{className:y.a.navItem},s.a.createElement("a",{href:"#"},"Music")),s.a.createElement("div",{className:y.a.navItem},s.a.createElement("a",{href:"#"},"Settings")))},O=a(23),w=a(24),k=a(28),M=a(25),x=a(29),F=a(47),U=a.n(F),j=a(13),B=a.n(j),D=a(48),T=a.n(D),A=function(e){return s.a.createElement("div",{className:T.a.post},s.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.text,s.a.createElement("div",null,s.a.createElement("span",null,"like ",e.likesCount)))},L=a(8),G=Object(L.b)((function(e){return{currentText:e.profilePage.currentText,posts:e.profilePage.posts}}),(function(e){return{newText:function(t){e({type:"NEW_TEXT",text:t})},newPostHandler:function(){e({type:"ADD_POST"})}}}))((function(e){var t=e.posts.map((function(e){return s.a.createElement(A,{text:e.text,likesCount:e.likesCount})}));return s.a.createElement("div",{className:B.a.posts},s.a.createElement("div",{className:B.a.title},s.a.createElement("span",{className:B.a.subtitle},"My posts:")),t,s.a.createElement("div",{className:B.a.AddNewPostContainer},s.a.createElement("label",{className:B.a.PostInputLabel},"New Post",s.a.createElement("br",null),s.a.createElement("textarea",{className:B.a.PostInput,onChange:function(t){e.newText(t.target.value)},value:e.currentText,rows:"4"})),s.a.createElement("button",{className:B.a.AddPostBtn,onClick:function(){e.newPostHandler()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c")))})),H=a(20),z=a.n(H),R=a(49),W=a.n(R),X=function(){return s.a.createElement("div",null,s.a.createElement("img",{src:W.a}))},J=a(26),V=a.n(J),Y=function(e){return e.profile?s.a.createElement("div",{className:z.a.ProfileInfo},s.a.createElement("div",{className:z.a.imgContainer},s.a.createElement("img",{className:z.a.img,src:e.profile.photos.large?e.profile.photos.large:V.a})),s.a.createElement("div",{className:z.a.description})):s.a.createElement(X,null)},q=function(e){return console.log(e),s.a.createElement("div",{className:U.a.Profile},s.a.createElement(Y,{profile:e.profile}),s.a.createElement("div",null,s.a.createElement(G,null)))},K=a(14),Z=a(11),Q=function(e){function t(){return Object(O.a)(this,t),Object(k.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userID;t||(t=2),K.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(t)).then((function(t){e.props.setProfile(t.data),e.props.toggleFetching(!1)}))}},{key:"render",value:function(){return console.log(this.props),s.a.createElement(n.Fragment,null,this.props.isFetching?s.a.createElement(X,null):null,s.a.createElement(q,Object.assign({},this.props,{profile:this.props.profile})))}}]),t}(s.a.Component),$=Object(Z.e)(Q),ee=Object(L.b)((function(e){return{isFetching:e.profilePage.isFetching,profile:e.profilePage.profile}}),{setProfile:function(e){return{type:"SET_PROFILE",profile:e}},toggleFetching:function(e){return{type:"TOGGLE_FETCHING",isFetching:e}}})($),te=a(15),ae=a.n(te),ne=a(50),se=a.n(ne),re=function(e){var t="/dialogs/"+e.id;return s.a.createElement("div",{className:se.a.DialogsItem},s.a.createElement(S.b,{to:t},e.name))},oe=a(51),ie=a.n(oe),ce=function(e){return s.a.createElement("div",{className:ie.a.MessagesItem},e.message)},le=function(e){var t=e.dialogs.map((function(e){return s.a.createElement(re,{name:e.name,id:e.id})})),a=e.messages.map((function(e){return s.a.createElement(ce,{id:e.id,message:e.message})}));return s.a.createElement("div",{className:ae.a.Dialogs},s.a.createElement("div",{className:ae.a.DialogsItems},t),s.a.createElement("div",{className:ae.a.Messages},a),s.a.createElement("div",{className:ae.a.SendMessage},s.a.createElement("textarea",{rows:"4",className:ae.a.SendMessageArea,onChange:function(t){e.updateNewMessageHandler(t.target.value)},value:e.currentMessageBody}),s.a.createElement("button",{onClick:function(){e.sendMessageHandler()},className:ae.a.SendMessageBtn},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))},ue=Object(L.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,currentMessageBody:e.dialogsPage.currentMessageBody}}),(function(e){return{updateNewMessageHandler:function(t){e({type:"UPDATE_NEW_MESSAGE_TEXT",messageBody:t})},sendMessageHandler:function(){e({type:"SEND_MESSAGE"})}}}))(le),me=a(2),pe=a.n(me),ge=function(e){return console.log(e),s.a.createElement("div",{className:pe.a.users},s.a.createElement("div",{className:pe.a.pageButtons},s.a.createElement("span",null,s.a.createElement("i",{onClick:e.handlePreviousPageClick},"<"),e.pageButtons,s.a.createElement("i",{onClick:e.handleNextPageClick},">"))),e.users.map((function(t){return s.a.createElement("div",{className:pe.a.userContainer},s.a.createElement("div",{className:pe.a.photoContainer},s.a.createElement(S.b,{to:"Profile/".concat(t.id)},s.a.createElement("img",{src:t.photos.small?t.photos.small:V.a,alt:"avatar",className:pe.a.photo})),!0===t.followed?s.a.createElement("button",{onClick:function(){return e.handleUnfollow(t.id)},className:pe.a.button},"Unfollow"):s.a.createElement("button",{onClick:function(){return e.handleFollow(t.id)},className:pe.a.button},"Follow")),s.a.createElement("div",{className:pe.a.aboutUserContainer},s.a.createElement("div",{className:pe.a.userDescriptionContainer},s.a.createElement("span",{className:pe.a.userName},t.name),s.a.createElement("span",{className:pe.a.userStatus},t.status)),s.a.createElement("div",{className:pe.a.locationContainer},s.a.createElement("span",{className:pe.a.userCountry},"item.location.country"),s.a.createElement("span",{className:pe.a.userCity},"item.location.city"))))})))},de=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(k.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(s)))).handlePageButtonClick=function(e,t){a.props.toggleFetching(!0),K.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(t)).then((function(t){a.props.setUsers(t.data.items,t.data.totalCount),a.props.setCurrentPage(e),a.props.toggleFetching(!1)}))},a.handlePreviousPageClick=function(e,t){a.props.toggleFetching(!0),e--,K.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(t)).then((function(t){a.props.setUsers(t.data.items,t.data.totalCount),a.props.setCurrentPage(e),a.props.toggleFetching(!1)}))},a.handleNextPageClick=function(e,t){a.props.toggleFetching(!0),e++,K.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(t)).then((function(t){a.props.setUsers(t.data.items,t.data.totalCount),a.props.setCurrentPage(e),a.props.toggleFetching(!1)}))},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this;K.get("https://social-network.samuraijs.com/api/1.0/users?count=".concat(this.props.pageSize)).then((function(t){e.props.setUsers(t.data.items,t.data.totalCount),e.props.setCurrentPage(1),e.props.toggleFetching(!1)}))}},{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.totalCount/this.props.pageSize),a=[],r=0;r<this.props.pageSize;r++)a.push(r+1),r===this.props.pageSize-1&&a.push(t);return a=a.map((function(t,n){return n===a.length-1?s.a.createElement("span",{onClick:function(){return e.handlePageButtonClick(t,e.props.pageSize)},className:t===e.props.currentPage?"".concat(pe.a.pageButton," + ").concat(pe.a.selectedPageButton):pe.a.pageButton},s.a.createElement("i",null,"... "),t):s.a.createElement("span",{onClick:function(){return e.handlePageButtonClick(t,e.props.pageSize)},className:t===e.props.currentPage?"".concat(pe.a.pageButton," + ").concat(pe.a.selectedPageButton):pe.a.pageButton},t)})),s.a.createElement(n.Fragment,null,this.props.isFetching?s.a.createElement(X,null):null,s.a.createElement(ge,{handlePreviousPageClick:this.handlePreviousPageClick,handleNextPageClick:this.handleNextPageClick,handleFollow:this.props.follow,handleUnfollow:this.props.unfollow,pageButtons:a,users:this.props.users,currentPage:this.props.currentPage}))}}]),t}(s.a.Component),fe=Object(L.b)((function(e){return{users:e.usersPage.users,totalCount:e.usersPage.totalCount,currentPage:e.usersPage.currentPage,pageSize:e.usersPage.pageSize,isFetching:e.usersPage.isFetching}}),{follow:function(e){return{type:"FOLLOW",userId:e}},unfollow:function(e){return{type:"UNFOLLOW",userId:e}},setUsers:function(e,t){return{type:"SET_USERS",users:e,totalCount:t}},toggleFetching:function(e){return{type:"TOGGLE_FETCHING",isFetching:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}})(de),_e=function(e){return s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(N,null),s.a.createElement(I,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(Z.a,{render:function(){return s.a.createElement(ee,null)},path:"/Profile/:userID?"}),s.a.createElement(Z.a,{render:function(){return s.a.createElement(ue,null)},path:"/Dialogs"}),s.a.createElement(Z.a,{render:function(){return s.a.createElement(fe,null)},path:"/Users/:userID?"})))};a.d(t,"render",(function(){return Ee}));var Ee=function(e){o.a.render(s.a.createElement(S.a,null,s.a.createElement(L.a,{store:P},s.a.createElement(_e,null))),document.getElementById("root"))};Ee(P.getState())}},[[52,1,2]]]);
//# sourceMappingURL=main.52635637.chunk.js.map