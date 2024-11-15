import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{g as getProductBuyLink,s as submitCartForm,a as getTopLevelError,b as getAdditionalErrorMessages}from"./error.js";import{s as state,b as setProduct,o as onChange,i as isProductOutOfStock,c as isSelectedVariantMissing}from"./watchers.js";import{d as defineCustomElement$3}from"./sc-alert2.js";import{d as defineCustomElement$2}from"./sc-icon2.js";const scProductBuyButtonCss="sc-product-buy-button{position:relative}sc-product-buy-button a.wp-block-button__link{position:relative;text-decoration:none}sc-product-buy-button .sc-block-button--sold-out,sc-product-buy-button .sc-block-button--unavailable{display:none !important}sc-product-buy-button.is-unavailable a{display:none !important}sc-product-buy-button.is-unavailable .sc-block-button--unavailable{display:initial !important}sc-product-buy-button.is-sold-out a{display:none !important}sc-product-buy-button.is-sold-out .sc-block-button--sold-out{display:initial !important}sc-product-buy-button sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}sc-product-buy-button [data-text],sc-product-buy-button [data-loader]{transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}sc-product-buy-button [data-loader]{opacity:0;visibility:hidden}sc-product-buy-button.is-disabled{pointer-events:none}sc-product-buy-button.is-busy [data-text]{opacity:0;visibility:hidden}sc-product-buy-button.is-busy [data-loader]{opacity:1;visibility:visible}sc-product-buy-button sc-alert{margin-bottom:var(--sc-spacing-medium)}sc-product-buy-button.is-out-of-stock [data-text]{opacity:0.6}",ScProductBuyButtonStyle0=scProductBuyButtonCss,ScProductBuyButton$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.addToCart=void 0,this.productId=void 0,this.formId=void 0,this.mode="live",this.checkoutLink=void 0,this.error=void 0}async handleCartClick(t){var o,i,s,e,r;if(t.preventDefault(),console.log(t),!(null===(o=state[this.productId])||void 0===o?void 0:o.busy))if(null===(s=null===(i=state[this.productId])||void 0===i?void 0:i.selectedPrice)||void 0===s?void 0:s.ad_hoc)setProduct(this.productId,{dialog:this.addToCart?"ad_hoc_cart":"ad_hoc_buy"});else{if(!this.addToCart){const t=null===(r=null===(e=null===window||void 0===window?void 0:window.scData)||void 0===e?void 0:e.pages)||void 0===r?void 0:r.checkout;if(!t)return;return window.location.assign(getProductBuyLink(this.productId,t,{no_cart:!this.addToCart}))}try{await submitCartForm(this.productId)}catch(t){console.error(t),this.error=t}}}componentDidLoad(){this.link=this.el.querySelector("a"),this.updateProductLink(),onChange(this.productId,(()=>this.updateProductLink()))}updateProductLink(){var t,o;const i=null===(o=null===(t=null===window||void 0===window?void 0:window.scData)||void 0===t?void 0:t.pages)||void 0===o?void 0:o.checkout;i&&this.link&&(this.link.href=getProductBuyLink(this.productId,i,this.addToCart?{}:{no_cart:!0}))}render(){var t,o;return h(Host,{key:"9fa17df67d7aca8a091bc5ff74b93d939c377ae0",class:{"is-busy":(null===(t=state[this.productId])||void 0===t?void 0:t.busy)&&!!this.addToCart,"is-disabled":null===(o=state[this.productId])||void 0===o?void 0:o.disabled,"is-sold-out":isProductOutOfStock(this.productId)&&!isSelectedVariantMissing(this.productId),"is-unavailable":isSelectedVariantMissing(this.productId)},onClick:t=>this.handleCartClick(t)},!!this.error&&h("sc-alert",{key:"175ac8094c855476bcb1b3df25c11ec3b6bd3170",onClick:t=>{t.stopPropagation()},type:"danger",scrollOnOpen:!0,open:!!this.error,closable:!1},!!getTopLevelError(this.error)&&h("span",{key:"e7663742d33d60425d8235233106744b1f403321",slot:"title",innerHTML:getTopLevelError(this.error)}),(getAdditionalErrorMessages(this.error)||[]).map(((t,o)=>h("div",{innerHTML:t,key:o})))),h("slot",{key:"e44e8947ff278be4257e150ca920ffcac8492bc8"}))}get el(){return this}static get style(){return ScProductBuyButtonStyle0}},[4,"sc-product-buy-button",{addToCart:[4,"add-to-cart"],productId:[1,"product-id"],formId:[2,"form-id"],mode:[1],checkoutLink:[1,"checkout-link"],error:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-product-buy-button","sc-alert","sc-icon"].forEach((t=>{switch(t){case"sc-product-buy-button":customElements.get(t)||customElements.define(t,ScProductBuyButton$1);break;case"sc-alert":customElements.get(t)||defineCustomElement$3();break;case"sc-icon":customElements.get(t)||defineCustomElement$2()}}))}const ScProductBuyButton=ScProductBuyButton$1,defineCustomElement=defineCustomElement$1;export{ScProductBuyButton,defineCustomElement};