import{r as s,h as t,F as i}from"./p-e97fde0a.js";import{s as a,e,h as p,b as r}from"./p-b51c7476.js";import"./p-03631502.js";import"./p-13f5e4e1.js";import"./p-3f6362a4.js";import"./p-ec182234.js";import"./p-e2d5dc4f.js";import"./p-93127aa7.js";import"./p-830ab1a3.js";const c=".sc-product-pills-variant-option__wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-spacing-x-small)}";const o=c;const l=class{constructor(t){s(this,t);this.label=undefined;this.optionNumber=1;this.productId=undefined}render(){return t("sc-form-control",{key:"bc1fc4d77b4ccfc30b9e049eb0e0000c8d5d0611",label:this.label},t("span",{key:"7922c6a10380c10ea9396188338220bf3a323369",slot:"label"},this.label),t("div",{key:"ae36e63c0e4c0acb0a58b12c9c551dc252c431a3",class:"sc-product-pills-variant-option__wrapper"},(a[this.productId].variant_options[this.optionNumber-1].values||[]).map((s=>{const c=e(this.productId,this.optionNumber,s)||p(this.productId,this.optionNumber,s);return t("sc-pill-option",{isUnavailable:c,isSelected:a[this.productId].variantValues[`option_${this.optionNumber}`]===s,onClick:()=>r(this.productId,{variantValues:{...a[this.productId].variantValues,[`option_${this.optionNumber}`]:s}})},t("span",{"aria-hidden":"true"},s),t("sc-visually-hidden",null,wp.i18n.sprintf(wp.i18n.__("Select %s: %s.","surecart"),this.label,s),c&&t(i,null," ",wp.i18n.__("(option unavailable)","surecart")),a[this.productId].variantValues[`option_${this.optionNumber}`]===s&&t(i,null," ",wp.i18n.__("This option is currently selected.","surecart"))))}))))}};l.style=o;export{l as sc_product_pills_variant_option};
//# sourceMappingURL=p-ddc0ccc0.entry.js.map