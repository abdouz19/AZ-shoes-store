import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{g as getAdditionalErrorMessages}from"./getters4.js";import{s as state}from"./store2.js";import{c as currentFormState}from"./getters3.js";import{o as onChange}from"./store3.js";import{r as removeNotice}from"./mutations3.js";import{d as defineCustomElement$2}from"./sc-alert2.js";import{d as defineCustomElement$1}from"./sc-icon2.js";const scCheckoutFormErrorsCss=":host{display:block}ul{margin:6px 0px;padding:0px;list-style:none}",ScCheckoutFormErrorsStyle0=scCheckoutFormErrorsCss,ScCheckoutFormErrors=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.removeStateListener=()=>{}}getAlertType(){switch(null==state?void 0:state.type){case"error":return"danger";case"default":return"primary";default:return null==state?void 0:state.type}}componentWillLoad(){this.removeStateListener=onChange("formState",(()=>{["finalizing","updating"].includes(currentFormState())&&removeNotice()}))}disconnectedCallback(){this.removeStateListener()}getTopLevelError(){var e;return"checkout.invalid"===(null==state?void 0:state.code)&&(null===(e=getAdditionalErrorMessages())||void 0===e?void 0:e.length)?"":null==state?void 0:state.message}render(){return!(null==state?void 0:state.message)||["finalizing","updating"].includes(currentFormState())?h(Host,{style:{display:"none"}}):h(Host,null,h("sc-alert",{type:this.getAlertType(),scrollOnOpen:!0,open:!!(null==state?void 0:state.message),closable:!!(null==state?void 0:state.dismissible)},!!this.getTopLevelError()&&h("span",{slot:"title",innerHTML:this.getTopLevelError()}),(getAdditionalErrorMessages()||[]).map(((e,t)=>h("div",{innerHTML:e,key:t})))),h("slot",null))}static get style(){return ScCheckoutFormErrorsStyle0}},[1,"sc-checkout-form-errors"]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-checkout-form-errors","sc-alert","sc-icon"].forEach((e=>{switch(e){case"sc-checkout-form-errors":customElements.get(e)||customElements.define(e,ScCheckoutFormErrors);break;case"sc-alert":customElements.get(e)||defineCustomElement$2();break;case"sc-icon":customElements.get(e)||defineCustomElement$1()}}))}export{ScCheckoutFormErrors as S,defineCustomElement as d};