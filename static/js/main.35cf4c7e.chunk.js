(this["webpackJsonpnow-movies"]=this["webpackJsonpnow-movies"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r="https://api.themoviedb.org/3",a={apiURI:r,imgURL:"https://image.tmdb.org/t/p/original",token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGI1YTM0M2U3N2Q0NzdlNmQwM2JlN2RkZjhhYTU0NSIsInN1YiI6IjVlNjg3NGQwMmYzYjE3MDAxOTNkZjFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSpR_FInQJhwYWBiNSUQNSA-Ly7Sm5_beNFp2137kVQ",trendingUrl:r+"/trending",genreUrl:r+"/genre/movie/list"}},23:function(e,t,n){"use strict";var r=n(3),a=n.n(r),c=n(7),s=n(47),i=n.n(s),o=n(11),u=i.a.create({baseURL:o.a.apiURI,headers:{"Content-Type":"application/json"}});u.interceptors.request.use((function(e){var t=o.a.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e}));var l=u;function p(e,t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o.a.trendingUrl,"/").concat(t,"/").concat(n),e.next=3,l.get(r);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.a.genreUrl,e.next=3,l.get(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o.a.apiURI,"/").concat(n,"/").concat(t,"/external_ids"),e.next=3,l.get(r);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return v}))},42:function(e,t,n){"use strict";var r=n(40),a=n(3),c=n.n(a),s=n(7),i=n(30),o=n(31),u=n(43),l=n(41),p=n(1),h=n.n(p),m=n(97),f=n(95),v=n(99),d=n(96),b=h.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,124))})),w=function(){var e=Object(d.a)((function(){return{root:{backgroundColor:"#353940"}}}))();return h.a.createElement(v.a,null,h.a.createElement(m.a,{variant:"text",width:200,classes:{root:e.root}}),h.a.createElement(m.a,{variant:"rect",width:864,height:300,classes:{root:e.root}}))},g=function(e){var t=e.results,n=e.title;return h.a.createElement("div",{className:"bar"},h.a.createElement(f.a,{variant:"h4",className:"heading"},n),h.a.createElement("div",{className:"row"},t.map((function(e,t){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(w,null),key:t},h.a.createElement(b,{info:e,key:t}))}))))},k=n(23),x=n(98);n.d(t,"a",(function(){return j}));var j=h.a.createContext(),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).fetchMovies=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k.c)("movie",r.state.timeWindow);case 3:if(t=e.sent,!(n=t.data)||!n.results){e.next=7;break}return e.abrupt("return",n.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),r.fetchShows=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k.c)("tv",r.state.timeWindow);case 3:if(t=e.sent,!(n=t.data)||!n.results){e.next=7;break}return e.abrupt("return",n.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),r.storeGenres=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(k.b)();case 3:if(t=e.sent,!(n=t.data)){e.next=7;break}return e.abrupt("return",n.genres);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),r.state={timeWindow:"day",movies:[],shows:[],genres:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.fetchMovies(),this.fetchShows(),this.storeGenres()]);case 2:t=e.sent,n=Object(r.a)(t,3),a=n[0],s=n[1],i=n[2],this.setState({movies:a,shows:s,genres:i});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return h.a.createElement(x.a,{container:!0,justify:"center",alignItems:"center",style:{overflowY:"hidden"}},h.a.createElement(j.Provider,{value:this.state.genres},h.a.createElement(x.a,{item:!0,md:6},this.state.shows&&h.a.createElement(g,{results:this.state.shows,title:"Trending TV Shows"})),h.a.createElement(x.a,{item:!0,md:6},this.state.movies&&h.a.createElement(g,{results:this.state.movies,title:"Trending Movies"}))))}}]),n}(p.Component);t.b=y},55:function(e,t,n){e.exports=n(84)},60:function(e,t,n){},61:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(26),s=n.n(c),i=(n(60),n(61),n(42));var o=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",{className:"container-wrap"},a.a.createElement(i.b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(o,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.35cf4c7e.chunk.js.map