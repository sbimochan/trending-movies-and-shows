(this["webpackJsonptrending-movies-and-shows"]=this["webpackJsonptrending-movies-and-shows"]||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(19),c=n.n(s),i=(n(26),n(27),n(7)),o=n(1),u=n.n(o),l=n(2),m=n(4),p=n(5),f=n(8),h=n(6),v=n(9),d=function(e){var t=e.info;return a.a.createElement("span",null,t.name)},b=function(e){var t=e.info;return a.a.createElement("span",null,t.title)},w={apiURI:"https://api.themoviedb.org/3",imgURL:"https://image.tmdb.org/t/p/w185",token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGI1YTM0M2U3N2Q0NzdlNmQwM2JlN2RkZjhhYTU0NSIsInN1YiI6IjVlNjg3NGQwMmYzYjE3MDAxOTNkZjFkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KSpR_FInQJhwYWBiNSUQNSA-Ly7Sm5_beNFp2137kVQ",trendingUrl:"https://api.themoviedb.org/3/trending",genreUrl:"https://api.themoviedb.org/3/genre/movie/list"};var g=n(20),k=n.n(g).a.create({baseURL:w.apiURI,headers:{"Content-Type":"application/json"}});k.interceptors.request.use((function(e){var t=w.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e}));var y=k;function E(e,t){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(w.trendingUrl,"/").concat(t,"/").concat(n),e.next=3,y.get(r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.genreUrl,e.next=3,y.get(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return U.apply(this,arguments)}function U(){return(U=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(w.apiURI,"/").concat(n,"/").concat(t,"/external_ids"),e.next=3,y.get(r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return _.apply(this,arguments)}function _(){return(_=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,n);case 2:return r=e.sent,a=r.data.imdb_id,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,n);case 2:return r=e.sent,a="https://imdb.com/title/"+r,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).makeImdbUrl=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(n.state.info.id,n.state.info.media_type);case 2:t=e.sent,n.setState({imdbUrl:t});case 4:case"end":return e.stop()}}),e)}))),n.makeYoutubeTrailer=function(){var e,t=(e=n.state.info.title||n.state.info.name,"https://www.youtube.com/results?search_query=".concat(e.replace(/ /g,"+"),"+1080p+trailer"));n.setState({youtubeUrl:t})},n.state={info:e.info,imdbUrl:"",youtubeUrl:""},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.makeImdbUrl(),this.makeYoutubeTrailer()}},{key:"render",value:function(){var e=this;return a.a.createElement(W.Consumer,null,(function(t){var n,r=t.filter((function(t){return e.state.info.genre_ids.includes(t.id)})).map((function(e){return e.name}));return a.a.createElement("div",{className:"card"},a.a.createElement("a",{href:e.state.imdbUrl,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:(n=e.state.info.poster_path,"".concat(w.imgURL,"/").concat(n)),alt:"shows of thumbnails",className:"thumbnail"})),a.a.createElement("div",{className:"media-body"},a.a.createElement("div",{className:"vote"},e.state.info.vote_average,a.a.createElement("span",{className:"out-of-10"},"/10")),a.a.createElement("div",{className:"media-title"},"movie"===e.state.info.media_type?a.a.createElement(b,{info:e.state.info}):a.a.createElement(d,{info:e.state.info})),a.a.createElement("div",null,r.map((function(e,t){return a.a.createElement("li",{className:"genre-list",key:t},e)}))),a.a.createElement("article",{className:"movie-overview"},e.state.info.overview.substring(0,200),a.a.createElement("a",{href:e.state.imdbUrl,rel:"noopener noreferrer",className:"read-more",target:"_blank"},"...")),a.a.createElement("div",{className:"watch-trailer"},a.a.createElement("a",{href:e.state.youtubeUrl,rel:"noopener noreferrer",target:"_blank"},"Watch Trailer"))))}))}}]),t}(r.Component),T=function(e){var t=e.results,n=e.title;return a.a.createElement("div",{className:"bar"},a.a.createElement("h2",{className:"heading"},n),a.a.createElement("div",{className:"row"},t.map((function(e,t){return a.a.createElement(M,{info:e,key:t})}))))},W=a.a.createContext(),C=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).fetchMovies=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("movie",n.state.timeWindow);case 3:if(t=e.sent,!(r=t.data)||!r.results){e.next=7;break}return e.abrupt("return",r.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.fetchShows=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("tv",n.state.timeWindow);case 3:if(t=e.sent,!(r=t.data)||!r.results){e.next=7;break}return e.abrupt("return",r.results);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.storeGenres=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:if(t=e.sent,!(n=t.data)){e.next=7;break}return e.abrupt("return",n.genres);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.state={timeWindow:"day",movies:[],shows:[],genres:[]},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.fetchMovies(),this.fetchShows(),this.storeGenres()]);case 2:t=e.sent,n=Object(i.a)(t,3),r=n[0],a=n[1],s=n[2],this.setState({movies:r,shows:a,genres:s});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(W.Provider,{value:this.state.genres},this.state.shows&&a.a.createElement(T,{results:this.state.shows,title:"Trending TV Shows"}),this.state.movies&&a.a.createElement(T,{results:this.state.movies,title:"Trending Movies"})))}}]),t}(r.Component);var Q=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",{className:"container-wrap"},a.a.createElement(C,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a7f18339.chunk.js.map