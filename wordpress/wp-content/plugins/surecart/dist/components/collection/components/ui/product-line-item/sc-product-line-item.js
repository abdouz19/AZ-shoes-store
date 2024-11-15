import{h,Fragment}from"@stencil/core";import{__,_n,sprintf}from"@wordpress/i18n";import{isRtl}from"../../../functions/page-align";export class ScProductLineItem{constructor(){this.image=void 0,this.name=void 0,this.priceName=void 0,this.variantLabel="",this.quantity=void 0,this.amount=void 0,this.fees=void 0,this.setupFeeTrialEnabled=!0,this.scratchAmount=void 0,this.currency=void 0,this.interval=void 0,this.trialDurationDays=void 0,this.removable=void 0,this.editable=!0,this.max=void 0,this.sku="",this.purchasableStatusDisplay=void 0}renderPriceAndInterval(){const e=(this.fees||[]).find((e=>"setup"===e.fee_type));return this.trialDurationDays?h("div",{class:"item__price",part:"price"},h("div",{class:"price",part:"price__amount"},e&&!this.setupFeeTrialEnabled?h(Fragment,null,null==e?void 0:e.description," ",h("sc-format-number",{part:"price__amount",type:"currency",currency:this.currency,value:e.amount})):sprintf(_n("%d day free","%d days free",this.trialDurationDays,"surecart"),this.trialDurationDays)),h("div",{class:"price__description",part:"price__description"},
/** translators: 30 days free, Then $99 per month. */
__("Then","surecart")," ",!!this.scratchAmount&&this.scratchAmount>this.amount&&h(Fragment,null,h("sc-format-number",{class:"item__scratch-price",part:"price__scratch",type:"currency",currency:this.currency,value:this.scratchAmount})," "),h("sc-format-number",{part:"price__amount",type:"currency",currency:this.currency,value:this.amount})," ",!!this.interval&&this.interval,!!e&&!this.setupFeeTrialEnabled&&sprintf(_n("starting in %d day","starting in %d days",this.trialDurationDays,"surecart"),this.trialDurationDays))):h("div",{class:"item__price",part:"price"},h("div",{class:"price",part:"price__amount"},!!this.scratchAmount&&this.scratchAmount!==this.amount&&h(Fragment,null,h("sc-format-number",{class:"item__scratch-price",type:"currency",currency:this.currency,value:this.scratchAmount})," "),h("sc-format-number",{type:"currency",currency:this.currency,value:this.amount})),!!this.interval&&h("div",{class:"price__description",part:"price__description"},this.interval))}renderPurchasableStatus(){return this.purchasableStatusDisplay?h("div",{class:"item__price",part:"price"},h("div",{class:"product-line-item__purchasable-status",part:"price__amount"},this.purchasableStatusDisplay)):null}render(){var e,t;return h("div",{key:"3d7c7409319e1f110efa7a115d28481c0617ad6c",class:"base",part:"base"},h("div",{key:"940603baadf97cfafcf4a63981fcbe20ef507802",part:"product-line-item",class:{item:!0,"item--has-image":!!(null===(e=this.image)||void 0===e?void 0:e.src),"item--is-rtl":isRtl(),"product-line-item__editable":this.editable,"product-line-item__removable":this.removable}},!!(null===(t=this.image)||void 0===t?void 0:t.src)&&h("img",{key:"fe377bccb4f28363073e2df34d754c1b06eb2540",...this.image,part:"image"}),h("div",{key:"1ae94a88404d3681d5d3e1a3d6e3ab027360e322",class:"item__text",part:"text"},h("div",{key:"607ada73ea5a07c6fb6fa9f03334e436fab9233d",class:"item__text-details"},h("div",{key:"c333fd90e4c2ee623227c7c42758b42e2953c478",class:"item__title",part:"title"},h("slot",{key:"ee6fad859e67a27f9889a326ebd04e2910f0cbe2",name:"title"},this.name)),h("div",{key:"58f781734173cc14a59c5b11b7a8d358e9ff0553",class:"item__description item__price-variant",part:"description"},h("div",{key:"127164a563aa88ebd17440d0ccefcb6d9441eda4"},this.variantLabel),h("div",{key:"0b5ad6e1a52b097566f2201f39f2eeec89a11634"},this.priceName),!!this.sku&&h("div",{key:"77645a7bb01aa35932b5b3264314a25d45effc49"},__("SKU:","surecart")," ",this.sku)),!this.editable&&this.quantity>1&&h("span",{key:"e8d239539e1a2e80105b01d1c2247bddb538b4e3",class:"item__description",part:"static-quantity"},__("Qty:","surecart")," ",this.quantity)),this.editable&&h("sc-quantity-select",{key:"11ea246bec03505153e18052a047c5482246cf77",max:this.max||1/0,exportparts:"base:quantity, minus:quantity__minus, minus-icon:quantity__minus-icon, plus:quantity__plus, plus-icon:quantity__plus-icon, input:quantity__input",clickEl:this.el,quantity:this.quantity,size:"small",onScChange:e=>e.detail&&this.scUpdateQuantity.emit(e.detail),"aria-label":
/** translators: %1$s: product name, %2$s: product price name */
sprintf(__("Change Quantity - %1$s %2$s","surecart"),this.name,this.priceName)})),h("div",{key:"be436ad807edcd9a921c7da805c85f9e22ec726f",class:"item__suffix",part:"suffix"},this.removable?h("sc-icon",{exportparts:"base:remove-icon__base",class:"item__remove",name:"x",onClick:()=>this.scRemove.emit(),onKeyDown:e=>{"Enter"===e.key&&this.scRemove.emit()},tabindex:"0","aria-label":sprintf(__("Remove Item - %1$s %2$s","surecart"),this.name,this.priceName)}):h("div",null),this.renderPriceAndInterval(),this.renderPurchasableStatus())),(this.fees||[]).map((e=>this.trialDurationDays&&!this.setupFeeTrialEnabled&&"setup"===e.fee_type?null:h("sc-line-item",{exportparts:"price-description:line-item__price-description"},h("sc-format-number",{slot:"price-description",type:"currency",value:null==e?void 0:e.amount,currency:this.currency||"usd"}),h("span",{slot:"price-description",class:"fee__description"},null==e?void 0:e.description)))))}static get is(){return"sc-product-line-item"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-product-line-item.scss"]}}static get styleUrls(){return{$:["sc-product-line-item.css"]}}static get properties(){return{image:{type:"unknown",mutable:!1,complexType:{original:"ImageAttributes",resolved:"ImageAttributes",references:{ImageAttributes:{location:"import",path:"../../../types",id:"src/types.ts::ImageAttributes"}}},required:!1,optional:!1,docs:{tags:[],text:"Image attributes."}},name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Product name"},attribute:"name",reflect:!1},priceName:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Price name"},attribute:"price-name",reflect:!1},variantLabel:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Product variant label"},attribute:"variant-label",reflect:!1,defaultValue:"''"},quantity:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Quantity"},attribute:"quantity",reflect:!1},amount:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Product monetary amount"},attribute:"amount",reflect:!1},fees:{type:"unknown",mutable:!1,complexType:{original:"Fee[]",resolved:"Fee[]",references:{Fee:{location:"import",path:"../../../types",id:"src/types.ts::Fee"}}},required:!1,optional:!1,docs:{tags:[],text:"Product line item fees."}},setupFeeTrialEnabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is the setup fee not included in the free trial?"},attribute:"setup-fee-trial-enabled",reflect:!1,defaultValue:"true"},scratchAmount:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The line item scratch amount"},attribute:"scratch-amount",reflect:!1},currency:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Currency for the product"},attribute:"currency",reflect:!1},interval:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Recurring interval (i.e. monthly, once, etc.)"},attribute:"interval",reflect:!1},trialDurationDays:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Trial duration days"},attribute:"trial-duration-days",reflect:!1},removable:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is the line item removable"},attribute:"removable",reflect:!1},editable:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Can we select the quantity"},attribute:"editable",reflect:!1,defaultValue:"true"},max:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The max allowed."},attribute:"max",reflect:!1},sku:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The SKU."},attribute:"sku",reflect:!1,defaultValue:"''"},purchasableStatusDisplay:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The purchasable status display"},attribute:"purchasable-status-display",reflect:!1}}}static get events(){return[{method:"scUpdateQuantity",name:"scUpdateQuantity",bubbles:!1,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the quantity changes."},complexType:{original:"number",resolved:"number",references:{}}},{method:"scRemove",name:"scRemove",bubbles:!1,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the quantity changes."},complexType:{original:"void",resolved:"void",references:{}}}]}static get elementRef(){return"el"}}