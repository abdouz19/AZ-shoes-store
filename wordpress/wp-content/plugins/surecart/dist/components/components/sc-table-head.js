import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";const scTableHeadCss=":host{display:table-header-group}::slotted(*){display:table-row}",ScTableHeadStyle0=scTableHeadCss,ScTable=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return h(Host,{key:"73349658575a37a68e2a4c4c57eee50c0199eef3"},h("slot",{key:"1099e0497be64605769683d3e9d750a1321554d2"}))}static get style(){return ScTableHeadStyle0}},[1,"sc-table-head"]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-table-head"].forEach((e=>{"sc-table-head"===e&&(customElements.get(e)||customElements.define(e,ScTable))}))}const ScTableHead=ScTable,defineCustomElement=defineCustomElement$1;export{ScTableHead,defineCustomElement};