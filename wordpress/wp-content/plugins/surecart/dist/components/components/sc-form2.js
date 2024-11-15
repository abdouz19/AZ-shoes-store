import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";function serialize(t){const e=new FormData(t),s={};return e.forEach(((t,e)=>{s[e]=t})),s}const scFormCss=":host{display:block}::slotted(*:not(:last-child)){margin-bottom:var(--sc-form-row-spacing, 0.75em)}::slotted(*:not(:last-child)).wp-block-spacer{margin-bottom:0}::slotted(*:focus-within),::slotted(*:active){position:relative;z-index:var(--sc-form-focus-within-z-index, auto);}",ScFormStyle0=scFormCss,ScForm=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scSubmit=createEvent(this,"scSubmit",7),this.scFormSubmit=createEvent(this,"scFormSubmit",7),this.scFormChange=createEvent(this,"scFormChange",7),this.novalidate=!1}async getFormData(){return new FormData(this.formElement)}async getFormJson(){return serialize(this.formElement)}async handleChange(){this.scFormChange.emit(serialize(this.formElement))}async submit(){return this.submitForm()}getFormControls(){return[...this.form.querySelectorAll("*")]}async validate(){const t=this.getFormControls().filter((t=>"function"==typeof t.reportValidity));if(!this.novalidate)for(const e of t)if((e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&!await e.reportValidity())return!1;return!0}submitForm(){const t=document.createElement("button");this.formElement&&(t.type="submit",t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clip="rect(0 0 0 0)",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.formElement.append(t),t.click(),t.remove())}render(){return h("div",{key:"d3117f4821a3ab6a947b22ba2e08609cc72b3198",part:"base",class:"form",role:"form"},h("form",{key:"8bf710a0d232646a2a177caea56b021a9dd80afa",part:"form",ref:t=>this.formElement=t,class:"test",onSubmit:async t=>{if(t.preventDefault(),!await this.validate())return!1;this.scSubmit.emit(),this.scFormSubmit.emit()},novalidate:this.novalidate},h("slot",{key:"379beaa36b00f5a1a472cdfca3484198387ef043"})))}get form(){return this}static get style(){return ScFormStyle0}},[1,"sc-form",{novalidate:[1540],getFormData:[64],getFormJson:[64],submit:[64],validate:[64]},[[0,"scChange","handleChange"]]]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-form"].forEach((t=>{"sc-form"===t&&(customElements.get(t)||customElements.define(t,ScForm))}))}export{ScForm as S,defineCustomElement as d};