"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=o(function(R,u){"use strict";var l=require("@stdlib/ndarray-base-assert-is-read-only"),f=require("@stdlib/ndarray-dtype"),g=require("@stdlib/ndarray-shape"),q=require("@stdlib/ndarray-strides"),y=require("@stdlib/ndarray-offset"),p=require("@stdlib/ndarray-order"),h=require("@stdlib/ndarray-data-buffer"),m=require("@stdlib/ndarray-ctor"),w=require("@stdlib/ndarray-defaults"),D=w("order");function O(r){var e,t,i,n,s,a,v;if(v=f(r),s=h(r),n=g(r),e=q(r),t=y(r),i=p(r)||D,arguments.length>1?a=arguments[1]:a={},l(r)){if(a.readonly===void 0)a.readonly=!0;else if(a.readonly===!1)throw new Error("invalid argument. Cannot write to a read-only array.")}return new m(v,s,n,e,t,i,a)}u.exports=O});var c=d();module.exports=c;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
