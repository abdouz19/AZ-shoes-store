import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{F as FormSubmitController}from"./form-data.js";import{i as isRtl}from"./page-align.js";const scCheckboxCss=':host{display:block}.checkbox{display:flex;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;cursor:pointer}.checkbox__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sc-checkbox-size);height:var(--sc-checkbox-size);border:solid var(--sc-input-border-width) var(--sc-input-border-color);border-radius:2px;background-color:var(--sc-input-background-color);color:var(--sc-color-white);transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) opacity, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.checkbox__control .checkbox__icon{display:inline-flex;width:var(--sc-checkbox-size);height:var(--sc-checkbox-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control{border-color:var(--sc-input-border-color-focus);background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{opacity:0.8}.checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,.checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control{border-color:var(--sc-color-white);background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.checkbox--disabled{opacity:0.5;cursor:not-allowed}.checkbox__label{line-height:var(--sc-checkbox-size);margin-top:var(--sc-input-border-width);margin-left:0.5em;flex:1}.checkbox--is-required .checkbox__label:after{content:" *";color:var(--sc-color-danger-500)}::slotted(*){display:inline-block}.checkbox--is-rtl .checkbox__label{margin-left:0;margin-right:0.5em}',ScCheckboxStyle0=scCheckboxCss;let id=0;const ScCheckbox=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scBlur=createEvent(this,"scBlur",7),this.scChange=createEvent(this,"scChange",7),this.scFocus=createEvent(this,"scFocus",7),this.inputId="checkbox-"+ ++id,this.labelId=`checkbox-label-${id}`,this.hasFocus=!1,this.name=void 0,this.value=void 0,this.disabled=!1,this.edit=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1}firstUpdated(){this.input.indeterminate=this.indeterminate}async triggerClick(){return this.input.click()}async triggerFocus(e){return this.input.focus(e)}async triggerBlur(){return this.input.blur()}async reportValidity(){return this.invalid=!this.input.checkValidity(),this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleLabelMouseDown(){this.input.focus()}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.scChange.emit()}componentDidLoad(){this.formController=new FormSubmitController(this.el,{value:e=>e.checked?e.value:void 0}).addFormData()}disconnectedCallback(){var e;null===(e=this.formController)||void 0===e||e.removeFormData()}render(){const e=this.edit?"div":"label";return h(e,{key:"dd6844e630a087b0c6503f4adc57c804bd0f79cc",part:"base",class:{checkbox:!0,"checkbox--is-required":this.required,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--is-rtl":isRtl()},htmlFor:this.inputId,onMouseDown:()=>this.handleLabelMouseDown()},h("span",{key:"1215ab0a61be24a701cee53c5b8b57f31665dcea",part:"control",class:"checkbox__control"},this.checked?h("span",{part:"checked-icon",class:"checkbox__icon"},h("svg",{viewBox:"0 0 16 16"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},h("g",{stroke:"currentColor","stroke-width":"2"},h("g",{transform:"translate(3.428571, 3.428571)"},h("path",{d:"M0,5.71428571 L3.42857143,9.14285714"}),h("path",{d:"M9.14285714,0 L3.42857143,9.14285714"})))))):"",!this.checked&&this.indeterminate?h("span",{part:"indeterminate-icon",class:"checkbox__icon"},h("svg",{viewBox:"0 0 16 16"},h("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},h("g",{stroke:"currentColor","stroke-width":"2"},h("g",{transform:"translate(2.285714, 6.857143)"},h("path",{d:"M10.2857143,1.14285714 L1.14285714,1.14285714"})))))):"",h("input",{key:"178560b67dd89248bd39732caec144058a655774",id:this.inputId,ref:e=>this.input=e,type:"checkbox",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,role:"checkbox","aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onClick:()=>this.handleClick(),onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()})),h("span",{key:"31ddbcea3a35eba9c0df04b3401657c3fb31e070",part:"label",id:this.labelId,class:"checkbox__label"},h("slot",{key:"d31d548b1923f1f9b2a2615960082ad5a76f3ace"})))}get el(){return this}static get watchers(){return{checked:["handleStateChange"],indeterminate:["handleStateChange"]}}static get style(){return ScCheckboxStyle0}},[1,"sc-checkbox",{name:[1],value:[1],disabled:[516],edit:[516],required:[516],checked:[1540],indeterminate:[1540],invalid:[1540],hasFocus:[32],triggerClick:[64],triggerFocus:[64],triggerBlur:[64],reportValidity:[64]},void 0,{checked:["handleStateChange"],indeterminate:["handleStateChange"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-checkbox"].forEach((e=>{"sc-checkbox"===e&&(customElements.get(e)||customElements.define(e,ScCheckbox))}))}export{ScCheckbox as S,defineCustomElement as d};