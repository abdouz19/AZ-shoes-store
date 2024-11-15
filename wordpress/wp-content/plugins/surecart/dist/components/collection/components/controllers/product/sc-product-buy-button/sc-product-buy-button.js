import{h,Host}from"@stencil/core";import{getProductBuyLink,submitCartForm}from"../../../../store/product/mutations";import{state}from"../../../../store/product/index";import{setProduct}from"../../../../store/product/setters";import{onChange}from"../../../../store/product/index";import{isProductOutOfStock,isSelectedVariantMissing}from"../../../../store/product/getters";import{getTopLevelError,getAdditionalErrorMessages}from"../../../../functions/error";export class ScProductBuyButton{constructor(){this.addToCart=void 0,this.productId=void 0,this.formId=void 0,this.mode="live",this.checkoutLink=void 0,this.error=void 0}async handleCartClick(t){var e,r,o,i,s;if(t.preventDefault(),console.log(t),!(null===(e=state[this.productId])||void 0===e?void 0:e.busy))if(null===(o=null===(r=state[this.productId])||void 0===r?void 0:r.selectedPrice)||void 0===o?void 0:o.ad_hoc)setProduct(this.productId,{dialog:this.addToCart?"ad_hoc_cart":"ad_hoc_buy"});else{if(!this.addToCart){const t=null===(s=null===(i=null===window||void 0===window?void 0:window.scData)||void 0===i?void 0:i.pages)||void 0===s?void 0:s.checkout;if(!t)return;return window.location.assign(getProductBuyLink(this.productId,t,{no_cart:!this.addToCart}))}try{await submitCartForm(this.productId)}catch(t){console.error(t),this.error=t}}}componentDidLoad(){this.link=this.el.querySelector("a"),this.updateProductLink(),onChange(this.productId,(()=>this.updateProductLink()))}updateProductLink(){var t,e;const r=null===(e=null===(t=null===window||void 0===window?void 0:window.scData)||void 0===t?void 0:t.pages)||void 0===e?void 0:e.checkout;r&&this.link&&(this.link.href=getProductBuyLink(this.productId,r,this.addToCart?{}:{no_cart:!0}))}render(){var t,e;return h(Host,{key:"9fa17df67d7aca8a091bc5ff74b93d939c377ae0",class:{"is-busy":(null===(t=state[this.productId])||void 0===t?void 0:t.busy)&&!!this.addToCart,"is-disabled":null===(e=state[this.productId])||void 0===e?void 0:e.disabled,"is-sold-out":isProductOutOfStock(this.productId)&&!isSelectedVariantMissing(this.productId),"is-unavailable":isSelectedVariantMissing(this.productId)},onClick:t=>this.handleCartClick(t)},!!this.error&&h("sc-alert",{key:"175ac8094c855476bcb1b3df25c11ec3b6bd3170",onClick:t=>{t.stopPropagation()},type:"danger",scrollOnOpen:!0,open:!!this.error,closable:!1},!!getTopLevelError(this.error)&&h("span",{key:"e7663742d33d60425d8235233106744b1f403321",slot:"title",innerHTML:getTopLevelError(this.error)}),(getAdditionalErrorMessages(this.error)||[]).map(((t,e)=>h("div",{innerHTML:t,key:e})))),h("slot",{key:"e44e8947ff278be4257e150ca920ffcac8492bc8"}))}static get is(){return"sc-product-buy-button"}static get originalStyleUrls(){return{$:["sc-product-buy-button.scss"]}}static get styleUrls(){return{$:["sc-product-buy-button.css"]}}static get properties(){return{addToCart:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"add-to-cart",reflect:!1},productId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"product-id",reflect:!1},formId:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"form-id",reflect:!1},mode:{type:"string",mutable:!1,complexType:{original:"'live' | 'test'",resolved:'"live" | "test"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"mode",reflect:!1,defaultValue:"'live'"},checkoutLink:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"checkout-link",reflect:!1}}}static get states(){return{error:{}}}static get elementRef(){return"el"}}