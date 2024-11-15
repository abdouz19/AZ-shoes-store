import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{s as state}from"./watchers5.js";import{d as defineCustomElement$1}from"./sc-card2.js";const scPaymentMethodChoiceCss=':host{display:block}:slotted([slot="summary"]){line-height:1;display:flex;align-items:center;gap:0.5em}',ScPaymentMethodChoiceStyle0=scPaymentMethodChoiceCss,ScPaymentMethodChoice=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.methodId=void 0,this.processorId=void 0,this.isManual=void 0,this.card=void 0}isSelected(){return this.methodId?(null==state?void 0:state.id)===this.processorId&&(null==state?void 0:state.method)==this.methodId:!(null==state?void 0:state.method)&&(null==state?void 0:state.id)===this.processorId}getAllOptions(){const e=this.el.closest("sc-payment")||this.el.parentElement;return e?[...e.querySelectorAll(this.el.tagName)]:[]}getSiblingItems(){return this.getAllOptions().filter((e=>e!==this.el))}hasOthers(){var e;return!!(null===(e=this.getSiblingItems())||void 0===e?void 0:e.length)}render(){const e=this.hasOthers()?"sc-toggle":"div";return h(e,{key:"d90879d2b147b1e9597d98ffd60b5e8eced64815","show-control":!0,borderless:!0,open:this.isSelected(),onScShow:()=>{state.id=this.processorId,state.manual=!!this.isManual,state.method=this.methodId}},this.hasOthers()&&h("slot",{key:"9b184447f0881479cc93ceca880b3b8aea5779ba",name:"summary",slot:"summary"}),this.card&&!this.hasOthers()?h("sc-card",null,h("slot",null)):h("slot",null))}get el(){return this}static get style(){return ScPaymentMethodChoiceStyle0}},[1,"sc-payment-method-choice",{methodId:[513,"method-id"],processorId:[1,"processor-id"],isManual:[4,"is-manual"],card:[4]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-payment-method-choice","sc-card"].forEach((e=>{switch(e){case"sc-payment-method-choice":customElements.get(e)||customElements.define(e,ScPaymentMethodChoice);break;case"sc-card":customElements.get(e)||defineCustomElement$1()}}))}export{ScPaymentMethodChoice as S,defineCustomElement as d};