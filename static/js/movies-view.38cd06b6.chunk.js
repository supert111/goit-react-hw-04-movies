(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{32:function(t,e,n){"use strict";var a=n(37),r=n.n(a),c="https://api.themoviedb.org/",o="e0864e234ad59915a65f6e683712555d",i={fetchPopularFilms:function(){return r.a.get("".concat(c,"/3/trending/movie/day?api_key=").concat(o)).then((function(t){return t.data.results})).catch((function(){return console.error("no popular")}))},fetchFilmByQuery:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.a.get("".concat(c,"3/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t)).then((function(t){return t.data.results})).catch((function(){return console.error("no search movie")}))},fetchFilmById:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.a.get("".concat(c,"3/movie/").concat(t,"?api_key=").concat(o)).then((function(t){return t.data})).catch((function(){return console.error("current film is missing")}))},fetchCast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.a.get("".concat(c,"3/movie/").concat(t,"/credits?api_key=").concat(o)).then((function(t){return t.data})).catch((function(){return console.error("no cast")}))},fetchReviews:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.a.get("".concat(c,"3/movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(t){return t.data.results})).catch((function(){return console.error("no cast")}))},posterimgpath:"https://image.tmdb.org/t/p/w342/",profilePath:"https://image.tmdb.org/t/p/w185/"};e.a=i},38:function(t,e,n){"use strict";var a=n(9),r=n(2),c=n(7),o=n(1);e.a=Object(r.f)((function(t){var e=t.movies,n=t.location;return Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:{pathname:"".concat(c.a.movies,"/").concat(t.id),state:{from:n}},children:t.title})},t.id)}))})}))},65:function(t,e,n){t.exports={form:"Searchbar_form__2_JCa"}},74:function(t,e,n){"use strict";n.r(e);var a=n(33),r=n(34),c=n(36),o=n(35),i=n(0),u=n(32),s=n(38),h=n(65),l=n.n(h),f=n(1),m=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={query:""},t.handleChange=function(e){t.setState({query:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.query),t.setState({query:""})},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:l.a.form,children:[Object(f.jsx)("input",{className:"",type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),Object(f.jsx)("button",{type:"submit",className:"",children:Object(f.jsx)("span",{className:"",children:"Search"})})]})})}}]),n}(i.Component),p=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={query:"",movies:[]},t.fetchMovie=function(){var e=t.state.query;u.a.fetchFilmByQuery(e).then((function(n){t.setState({query:e,movies:n})}))},t.onChangeQuery=function(e){t.setState({query:e}),t.props.history.push({pathname:t.props.location.pathname,search:"query=".concat(e)})},t}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(t,e){e.query!==this.state.query&&this.fetchMovie()}},{key:"render",value:function(){var t=this.state,e=t.movies,n=t.query;return console.log(n),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{onSubmit:this.onChangeQuery}),e&&Object(f.jsx)(s.a,{movies:e})]})}}]),n}(i.Component);e.default=p}}]);
//# sourceMappingURL=movies-view.38cd06b6.chunk.js.map