import{r as e,h as s,F as d,a as i}from"./p-e97fde0a.js";import{a as t}from"./p-401e165e.js";const n=":host{display:block}.download__details{opacity:0.75}";const o=n;const l=class{constructor(s){e(this,s);this.allLink=undefined;this.heading=undefined;this.busy=undefined;this.loading=undefined;this.requestNonce=undefined;this.error=undefined;this.purchases=[]}renderEmpty(){return s("div",null,s("sc-divider",{style:{"--spacing":"0"}}),s("slot",{name:"empty"},s("sc-empty",{icon:"download"},wp.i18n.__("You don't have any downloads.","surecart"))))}renderLoading(){return s("sc-card",{"no-padding":true,style:{"--overflow":"hidden"}},s("sc-stacked-list",null,s("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},s("div",{style:{padding:"0.5em"}},s("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),s("sc-skeleton",{style:{width:"20%"}})))))}renderList(){return this.purchases.map((e=>{var i,n,o;const l=(n=(i=e===null||e===void 0?void 0:e.product)===null||i===void 0?void 0:i.downloads)===null||n===void 0?void 0:n.data.filter((e=>!e.archived));const a=(l||[]).map((e=>{var s;return(e===null||e===void 0?void 0:e.media)?(s=e===null||e===void 0?void 0:e.media)===null||s===void 0?void 0:s.byte_size:0}));const c=a.reduce(((e,s)=>e+s),0);return s("sc-stacked-list-row",{href:!(e===null||e===void 0?void 0:e.revoked)?t(window.location.href,{action:"show",model:"download",id:e.id,nonce:this.requestNonce}):null,key:e.id,"mobile-size":0},s("sc-spacing",{style:{"--spacing":"var(--sc-spacing-xx--small)"}},s("div",null,s("strong",null,(o=e===null||e===void 0?void 0:e.product)===null||o===void 0?void 0:o.name)),s("div",{class:"download__details"},wp.i18n.sprintf(wp.i18n._n("%s file","%s files",l===null||l===void 0?void 0:l.length,"surecart"),l===null||l===void 0?void 0:l.length),!!c&&s(d,null," ","• ",s("sc-format-bytes",{value:c})))),s("sc-icon",{name:"chevron-right",slot:"suffix"}))}))}renderContent(){var e;if(this.loading){return this.renderLoading()}if(((e=this.purchases)===null||e===void 0?void 0:e.length)===0){return this.renderEmpty()}return s("sc-card",{"no-padding":true,style:{"--overflow":"hidden"}},s("sc-stacked-list",null,this.renderList()))}render(){return s("sc-dashboard-module",{key:"1280cf4e2f416113f7df74d320ecf9d081113d16",class:"downloads-list",error:this.error},s("span",{key:"b6572c32b02fa09c8ed4b235c2c9a7babd43cfd9",slot:"heading"},s("slot",{key:"e31399c1132c98a81c68643b823d6fb02d757c8c",name:"heading"},this.heading||wp.i18n.__("Items","surecart"))),s("slot",{key:"ff3fc49b670b59dd1078889b449f06c5d67431e4",name:"before"}),!!this.allLink&&s("sc-button",{key:"29bc6e645a170051adf2127581fee298fbfa3fb7",type:"link",href:this.allLink,slot:"end"},wp.i18n.__("View all","surecart"),s("sc-icon",{key:"87dddafcbb1284d7e35292987ac3e160352dffe7",name:"chevron-right",slot:"suffix"})),this.renderContent(),s("slot",{key:"46ad7789571f56cd4a3ef9543b6250dbfcf9e93b",name:"after"}),this.busy&&s("sc-block-ui",{key:"8ff00f895a62c8d12fdf9f82f76d18bb1f1b826a"}))}get el(){return i(this)}};l.style=o;export{l as sc_purchase_downloads_list};
//# sourceMappingURL=p-86164450.entry.js.map