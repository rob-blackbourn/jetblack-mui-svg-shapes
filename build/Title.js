(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('Title',[],b):'object'==typeof exports?exports.Title=b():a.Title=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=53)}({0:function(a){a.exports=require('react')},1:function(a){a.exports=require('prop-types')},2:function(a){a.exports=require('clsx')},3:function(a){a.exports=require('@material-ui/core/styles')},53:function(a,b,c){a.exports=c(54)},54:function(a,b,c){'use strict';function d(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}Object.defineProperty(b,'__esModule',{value:!0});var e=c(0),f=c.n(e),g=c(1),h=c.n(g),i=c(2),j=c.n(i),k=c(3),l=c.n(k),m=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};const n={root:{}};b.styles=n;class o extends e.Component{render(){var a=this.props;const b=a.classes,c=a.className,f=a.children,g=d(a,['classes','className','children']);return Object(e.createElement)('title',m({className:j()(b.root,c)},g),f)}}o.propTypes={children:h.a.node,classes:h.a.object.isRequired,className:h.a.string},o.defaultProps={},b['default']=Object(k.withStyles)(n,{name:'MuiTitle'})(o)}})});
//# sourceMappingURL=Title.js.map