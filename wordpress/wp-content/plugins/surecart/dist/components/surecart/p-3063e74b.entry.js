import{r as i,h as t}from"./p-e97fde0a.js";import{c as o}from"./p-28d98d61.js";import{c as d}from"./p-2cdfd4bc.js";import{s as e,u as n,a as s}from"./p-97f59651.js";import"./p-9a298389.js";import"./p-401e165e.js";import"./p-d3366af3.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-15630c79.js";import"./p-6ec14893.js";const r={expand:["line_items","line_item.price","price.product","customer","customer.shipping_address","payment_intent","discount","discount.promotion","discount.coupon","shipping_address","tax_identifier"]};const a=class{constructor(t){i(this,t);this.quantity=1;this.priceId=undefined;this.variantId=undefined;this.mode="live";this.formId=undefined;this.busy=undefined;this.error=undefined}getLineItem(){var i,t,o;const d=(((t=(i=e===null||e===void 0?void 0:e.checkout)===null||i===void 0?void 0:i.line_items)===null||t===void 0?void 0:t.data)||[]).find((i=>{var t,o,d;if(this.variantId){return((t=i.variant)===null||t===void 0?void 0:t.id)===this.variantId&&((o=i.price)===null||o===void 0?void 0:o.id)===this.priceId}return((d=i.price)===null||d===void 0?void 0:d.id)===this.priceId}));if(!(d===null||d===void 0?void 0:d.id)){return false}return{id:d===null||d===void 0?void 0:d.id,price_id:(o=d===null||d===void 0?void 0:d.price)===null||o===void 0?void 0:o.id,quantity:d===null||d===void 0?void 0:d.quantity}}async addToCart(){const{price:i}=await this.form.getFormJson();try{n("FETCH");e.checkout=await this.addOrUpdateLineItem({...!!i?{ad_hoc_amount:parseInt(i)||null}:{},...!!this.variantId?{variant_id:this.variantId||null}:{}});n("RESOLVE");s.set("cart",{...s.state.cart,...{open:true}})}catch(i){n("REJECT");console.error(i);this.error=(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Something went wrong","surecart")}}async addOrUpdateLineItem(i={}){var t,n;let s=this.getLineItem();let a=o(((t=e===null||e===void 0?void 0:e.checkout)===null||t===void 0?void 0:t.line_items)||[]);return await d({id:(n=e===null||e===void 0?void 0:e.checkout)===null||n===void 0?void 0:n.id,data:{live_mode:this.mode==="live",line_items:[...(a||[]).map((t=>{const o=this.variantId?t.price_id===this.priceId&&t.variant_id===this.variantId:t.price_id===this.priceId;if(o){return{...t,...!!(i===null||i===void 0?void 0:i.ad_hoc_amount)?{ad_hoc_amount:i===null||i===void 0?void 0:i.ad_hoc_amount}:{},...!!(i===null||i===void 0?void 0:i.variant_id)?{variant_id:i===null||i===void 0?void 0:i.variant_id}:{},quantity:!(t===null||t===void 0?void 0:t.ad_hoc_amount)?(t===null||t===void 0?void 0:t.quantity)+1:1}}return t})),...!s?[{price_id:this.priceId,variant_id:this.variantId,...!!(i===null||i===void 0?void 0:i.ad_hoc_amount)?{ad_hoc_amount:i===null||i===void 0?void 0:i.ad_hoc_amount}:{},quantity:1}]:[]]},query:{...r,form_id:this.formId}})}render(){return t("sc-form",{key:"7520eac4e53e3ce0ff66a59e666cfd63084cf7d2",ref:i=>this.form=i,onScSubmit:()=>{this.addToCart()}},this.error&&t("sc-alert",{key:"4462fdd6c86f6ee8701c58706c1e72161cdcc0d6",open:!!this.error,type:"danger"},t("span",{key:"65b2e9a851c8b73208550a9d48cfe0bc0e01dc11",slot:"title"},wp.i18n.__("Error","surecart")),this.error),t("slot",{key:"203c38679031ffa6a07f3705927fe643a52a4237"}))}};a.style="sc-cart-form { display: inline-block }";export{a as sc_cart_form};
//# sourceMappingURL=p-3063e74b.entry.js.map