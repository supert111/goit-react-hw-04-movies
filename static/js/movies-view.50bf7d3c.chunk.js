(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{32:function(t,e,n){"use strict";var r=n(37),a=n.n(r),c="https://api.themoviedb.org/",o="e0864e234ad59915a65f6e683712555d",i={fetchPopularFilms:function(){return a.a.get("".concat(c,"/3/trending/movie/day?api_key=").concat(o)).then((function(t){return t.data.results})).catch((function(){return console.error("no popular")}))},fetchFilmByQuery:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.a.get("".concat(c,"3/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t)).then((function(t){return t.data.results})).catch((function(){return console.error("no search movie")}))},fetchFilmById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.a.get("".concat(c,"3/movie/").concat(t,"?api_key=").concat(o)).then((function(t){return t.data})).catch((function(){return console.error("current film is missing")}))},fetchCast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.a.get("".concat(c,"3/movie/").concat(t,"/credits?api_key=").concat(o)).then((function(t){return t.data})).catch((function(){return console.error("no cast")}))},fetchReviews:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a.a.get("".concat(c,"3/movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(t){return t.data.results})).catch((function(){return console.error("no cast")}))},posterimgpath:"https://image.tmdb.org/t/p/w342/",profilePath:"https://image.tmdb.org/t/p/w185/"};e.a=i},64:function(t,e,n){t.exports={form:"Searchbar_form__2_JCa"}},71:function(t,e,n){"use strict";n.r(e);var r=n(33),a=n(34),c=n(36),o=n(35),i=n(0),u=n(32),s=n(9),h=n(7),l=n(1),f=function(t){var e=t.movies;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:"".concat(h.a.movies,"/").concat(t.id),children:t.title})},t.id)}))})},m=n(64),v=n.n(m),p=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={query:""},t.handleChange=function(e){t.setState({query:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.query),t.setState({query:""})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:this.handleSubmit,className:v.a.form,children:[Object(l.jsx)("input",{className:"",type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),Object(l.jsx)("button",{type:"submit",className:"",children:Object(l.jsx)("span",{className:"",children:"Search"})})]})})}}]),n}(i.Component),d=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={query:"",movies:[]},t.fetchMovie=function(){var e=t.state.query;u.a.fetchFilmByQuery(e).then((function(n){t.setState({query:e,movies:n})}))},t.onChangeQuery=function(e){t.setState({query:e})},t}return Object(a.a)(n,[{key:"componentDidUpdate",value:function(t,e){e.query!==this.state.query&&this.fetchMovie()}},{key:"render",value:function(){var t=this.state,e=t.movies,n=t.query;return console.log(n),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{onSubmit:this.onChangeQuery}),Object(l.jsx)(f,{movies:e})]})}}]),n}(i.Component);e.default=d}}]);
//# sourceMappingURL=movies-view.50bf7d3c.chunk.js.map