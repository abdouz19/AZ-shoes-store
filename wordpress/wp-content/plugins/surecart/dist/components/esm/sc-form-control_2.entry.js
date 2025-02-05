import { r as registerInstance, h, a as getElement, c as createEvent, H as Host } from './index-745b6bec.js';
import { i as isRtl } from './page-align-0cdacf32.js';
import { F as FormSubmitController } from './form-data-76641f16.js';

const scFormControlCss = ".form-control{font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-normal);display:flex;flex-direction:column;gap:var(--sc-input-label-margin)}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control--has-label .form-control__label{display:inline-block;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0)}.form-control--has-label.form-control--small .form-control__label{font-size:var(--sc-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--sc-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--sc-input-label-font-size-large)}::slotted(.control--errors){margin-top:var(--sc-spacing-small);color:var(--sc-color-danger-500)}::slotted([slot=label-end]){float:right}.form-control--is-required .required{color:var(--sc-color-danger-500)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--sc-input-help-text-color)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--sc-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--sc-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--sc-input-help-text-font-size-large)}.form-control--has-error .form-control__error-text{display:block;color:var(--sc-input-error-text-color)}.form-control--has-error.form-control--small .form-control__error-text{font-size:var(--sc-input-error-text-font-size-small)}.form-control--has-error.form-control--medium .form-control__error-text{font-size:var(--sc-input-error-text-font-size-medium)}.form-control--has-error.form-control--large .form-control__error-text{font-size:var(--sc-input-error-text-font-size-large)}.form-control--has-error ::part(base){border-color:rgb(var(--sl-color-danger-500))}.form-control--is-rtl.form-control--has-label .form-control__label{text-align:right}";
const ScFormControlStyle0 = scFormControlCss;

const ScFormControl = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'medium';
        this.name = undefined;
        this.showLabel = true;
        this.label = undefined;
        this.labelId = undefined;
        this.inputId = undefined;
        this.required = false;
        this.help = undefined;
        this.helpId = undefined;
    }
    render() {
        return (h("div", { key: 'c9c208f999526fd99372cc5cabc934fef7de9eb2', part: "form-control", class: {
                'form-control': true,
                'form-control--small': this.size === 'small',
                'form-control--medium': this.size === 'medium',
                'form-control--large': this.size === 'large',
                'form-control--has-label': !!this.label && this.showLabel,
                'form-control--has-help-text': !!this.help,
                'form-control--is-required': !!this.required,
                'form-control--is-rtl': isRtl(),
            } }, h("label", { key: 'e8fe874d2a8f36a3531e3a3ad11361bbfd1ecf00', part: "label", id: this.labelId, class: "form-control__label", htmlFor: this.inputId, "aria-hidden": !!this.label ? 'false' : 'true' }, h("slot", { key: '7fb74943e796964f9c013246f25a38caa3192356', name: "label" }, this.label), h("slot", { key: '3d208285a35f584631e6152a6ef87538e1dd7120', name: "label-end" }), !!this.required && (h("span", { key: 'bd73d7f70b0f45c7a93d0fabba0fb5fa92f26c7c', "aria-hidden": "true", class: "required" }, ' ', "*")), h("sc-visually-hidden", { key: 'a46680afdac2fff9cab65b0b812f4b1e2ef615e1' }, !!this.required ? wp.i18n.__('required', 'surecart') : '')), h("div", { key: 'd77d32d09114bb21c93f1e2433a2ae562c4c14c9', part: "input", class: "form-control__input" }, h("slot", { key: '8c64364e5ac8c6b6a71ff508583b759c537516da' })), this.help && (h("div", { key: '7f482cb35ef7b3b47b9410f6d66db6b14e114892', part: "help-text", id: this.helpId, class: "form-control__help-text" }, h("slot", { key: 'baa833b9ae848573c5d25c074adf825047ad8457', name: "help-text" }, this.help)))));
    }
    get el() { return getElement(this); }
};
ScFormControl.style = ScFormControlStyle0;

const scInputCss = ":host{--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary);display:block;position:relative}.input__control[type=number]{-moz-appearance:textfield}.input__control::-webkit-outer-spin-button,.input__control::-webkit-inner-spin-button{-webkit-appearance:none}.input{flex:1 1 auto;display:inline-flex;align-items:center;justify-content:start;position:relative;width:100%;box-sizing:border-box;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);letter-spacing:var(--sc-input-letter-spacing);background-color:var(--sc-input-background-color);border:solid 1px var(--sc-input-border-color, var(--sc-input-border));vertical-align:middle;box-shadow:var(--sc-input-box-shadow);transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow;cursor:text}.input:hover:not(.input--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover);z-index:7}.input:hover:not(.input--disabled) .input__control{color:var(--sc-input-color-hover)}.input.input--focused:not(.input--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring);z-index:8}.input.input--focused:not(.input--disabled) .input__control{color:var(--sc-input-color-focus)}.input.input--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.input.input--disabled .input__control{color:var(--sc-input-color-disabled)}.input.input--disabled .input__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.input__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;min-width:0;height:100%;color:var(--sc-input-color);border:none;background:none;box-shadow:none;padding:0;margin:0;cursor:inherit;-webkit-appearance:none;box-sizing:border-box;width:100%}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--sc-input-height-large) var(--sc-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--sc-input-color)}.input__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.input__prefix,.input__suffix{display:inline-flex;flex:0 0 auto;align-items:center;color:var(--sc-input-color);cursor:default}.input__prefix ::slotted(sc-icon),.input__suffix ::slotted(sc-icon){color:var(--sc-input-icon-color)}.input--small{border-radius:var(--sc-input-border-radius-small);font-size:var(--sc-input-font-size-small);height:var(--sc-input-height-small)}.input--small .input__control{height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-small)}.input--small .input__clear,.input--small .input__password-toggle{margin-right:var(--sc-input-spacing-small)}.input--small .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-small)}.input--small .input__suffix ::slotted(sc-dropdown){margin:0}.input--medium{border-radius:var(--sc-input-border-radius-medium);font-size:var(--sc-input-font-size-medium);height:var(--sc-input-height-medium)}.input--medium .input__control{height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-medium)}.input--medium .input__clear,.input--medium .input__password-toggle{margin-right:var(--sc-input-spacing-medium)}.input--medium .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(:not(sc-button[size=medium]):not(sc-button[size=small])){margin-right:var(--sc-input-spacing-medium) !important}.input--medium .input__suffix ::slotted(sc-tag),.input--medium .input__suffix ::slotted(sc-button[size=small]){line-height:1;margin-right:var(--sc-input-spacing-small) !important}.input--medium .input__suffix ::slotted(sc-dropdown){margin:3px}.input--large{border-radius:var(--sc-input-border-radius-large);font-size:var(--sc-input-font-size-large);height:var(--sc-input-height-large)}.input--large .input__control{height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);padding:0 var(--sc-input-spacing-large)}.input--large .input__clear,.input--large .input__password-toggle{margin-right:var(--sc-input-spacing-large)}.input--large .input__prefix ::slotted(*){margin-left:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(*){margin-right:var(--sc-input-spacing-large)}.input--large .input__suffix ::slotted(sc-dropdown){margin:3px}.input--pill.input--small{border-radius:var(--sc-input-height-small)}.input--pill.input--medium{border-radius:var(--sc-input-height-medium)}.input--pill.input--large{border-radius:var(--sc-input-height-large)}.input__clear,.input__password-toggle{display:inline-flex;align-items:center;font-size:inherit;color:var(--sc-input-icon-color);border:none;background:none;padding:0;transition:var(--sc-input-transition, var(--sc-transition-medium)) color;cursor:pointer}.input__clear:hover,.input__password-toggle:hover{color:var(--sc-input-icon-color-hover)}.input__clear:focus,.input__password-toggle:focus{outline:none}.input--empty .input__clear{visibility:hidden}.input--squared{border-radius:0}.input--squared-top{border-top-left-radius:0;border-top-right-radius:0}.input--squared-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.input--squared-left{border-top-left-radius:0;border-bottom-left-radius:0}.input--squared-right{border-top-right-radius:0;border-bottom-right-radius:0}";
const ScInputStyle0 = scInputCss;

let id = 0;
const ScInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scChange = createEvent(this, "scChange", 7);
        this.scClear = createEvent(this, "scClear", 7);
        this.scInput = createEvent(this, "scInput", 7);
        this.scFocus = createEvent(this, "scFocus", 7);
        this.scBlur = createEvent(this, "scBlur", 7);
        this.inputId = `input-${++id}`;
        this.helpId = `input-help-text-${id}`;
        this.labelId = `input-label-${id}`;
        this.squared = undefined;
        this.squaredBottom = undefined;
        this.squaredTop = undefined;
        this.squaredLeft = undefined;
        this.squaredRight = undefined;
        this.hidden = false;
        this.type = 'text';
        this.size = 'medium';
        this.name = undefined;
        this.value = '';
        this.pill = false;
        this.label = undefined;
        this.showLabel = true;
        this.help = '';
        this.clearable = false;
        this.togglePassword = false;
        this.placeholder = undefined;
        this.disabled = false;
        this.readonly = false;
        this.minlength = undefined;
        this.maxlength = undefined;
        this.min = undefined;
        this.max = undefined;
        this.step = undefined;
        this.pattern = undefined;
        this.required = false;
        this.invalid = false;
        this.autocorrect = undefined;
        this.autocomplete = undefined;
        this.autofocus = undefined;
        this.spellcheck = undefined;
        this.inputmode = undefined;
        this.hasFocus = undefined;
        this.isPasswordVisible = false;
    }
    async reportValidity() {
        return this.input.reportValidity();
    }
    /** Sets focus on the input. */
    async triggerFocus(options) {
        return this.input.focus(options);
    }
    /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
    async setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
    }
    /** Removes focus from the input. */
    async triggerBlur() {
        return this.input.blur();
    }
    /** Prevent mouse scroll wheel from modifying input value */
    handleWheel() {
        var _a;
        if (this.type === 'number') {
            (_a = this.input) === null || _a === void 0 ? void 0 : _a.blur();
        }
    }
    /** Selects all the text in the input. */
    select() {
        return this.input.select();
    }
    handleBlur() {
        this.hasFocus = false;
        this.scBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.scFocus.emit();
    }
    handleChange() {
        this.value = this.input.value;
        this.scChange.emit();
    }
    handleInput() {
        this.value = this.input.value;
        this.scInput.emit();
    }
    handleClearClick(event) {
        this.value = '';
        this.scClear.emit();
        this.scInput.emit();
        this.scChange.emit();
        this.input.focus();
        event.stopPropagation();
    }
    handlePasswordToggle() {
        this.isPasswordVisible = !this.isPasswordVisible;
    }
    handleFocusChange() {
        setTimeout(() => {
            this.hasFocus && this.input ? this.input.focus() : this.input.blur();
        }, 0);
    }
    handleValueChange() {
        if (this.input) {
            this.invalid = !this.input.checkValidity();
        }
    }
    componentDidLoad() {
        this.formController = new FormSubmitController(this.el).addFormData();
        this.handleFocusChange();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
    }
    render() {
        var _a;
        return (h(Host, { key: '8a673666206e40eec341edf2bc46ad02a7c6dfdc', hidden: this.hidden }, h("sc-form-control", { key: '681a2139c405539da2369ad99c8669d170a63123', exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name }, h("slot", { key: '09778a48b704dfff7dc69631345e27290b3652d5', name: "label-end", slot: "label-end" }), h("div", { key: '06e4cf9cdd83fe21ed8927e66aaef702d7af1dc5', part: "base", class: {
                'input': true,
                // Sizes
                'input--small': this.size === 'small',
                'input--medium': this.size === 'medium',
                'input--large': this.size === 'large',
                // States
                'input--focused': this.hasFocus,
                'input--invalid': this.invalid,
                'input--disabled': this.disabled,
                'input--squared': this.squared,
                'input--squared-bottom': this.squaredBottom,
                'input--squared-top': this.squaredTop,
                'input--squared-left': this.squaredLeft,
                'input--squared-right': this.squaredRight,
            } }, h("span", { key: '0472df603615afff08791a78ffaaa03113a8faa0', part: "prefix", class: "input__prefix" }, h("slot", { key: 'c9d8b031e2ce55807729499acfcfa5de4917cb91', name: "prefix" })), h("slot", { key: '02789ebdfc7ef005c8e07c3b77f702b5deda20ba' }, h("input", { key: 'a2100958e6ff04dd00ecf39de5744fcab77e2d9a', part: "input", id: this.inputId, class: "input__control", ref: el => (this.input = el), type: this.type === 'password' && this.isPasswordVisible ? 'text' : this.type, name: this.name, disabled: this.disabled, readonly: this.readonly, required: this.required, placeholder: this.placeholder, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step,
            // TODO: Test These below
            autocomplete: this.autocomplete, autocorrect: this.autocorrect, autofocus: this.autofocus, spellcheck: this.spellcheck, pattern: this.pattern, inputmode: this.inputmode, "aria-label": this.label, "aria-labelledby": this.labelId, "aria-invalid": this.invalid ? true : false, value: this.value, onChange: () => this.handleChange(), onInput: () => this.handleInput(),
            // onInvalid={this.handleInvalid}
            onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur(), onKeyDown: e => {
                // Only stop propagation on keys that are not handled by the browser
                if (!['Enter', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Tab'].includes(e.key)) {
                    e.stopPropagation();
                }
            } })), h("span", { key: '8ca593d03813ada4d6be253cd3dd1b90b86be8e8', part: "suffix", class: "input__suffix" }, h("slot", { key: '077b3125fa04becdc553b02318782ff4b678aba4', name: "suffix" })), this.clearable && ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > 0 && (h("button", { key: '2a24870c5e6f31379aa7f4eb1306773f9527f9ca', part: "clear-button", class: "input__clear", type: "button", onClick: e => this.handleClearClick(e), tabindex: "-1" }, h("slot", { key: 'c451ba48a2b069f02208a3247c3ea4f259b7c72a', name: "clear-icon" }, h("svg", { key: 'f47d0aadc31ec82f9f48cd99786ba8765d71d1ff', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-x" }, h("line", { key: '20cf8f518d3168fbeecb8082c39a5dd8f498030a', x1: "18", y1: "6", x2: "6", y2: "18" }), h("line", { key: '0fab8e752d56d3367470967158a98521f8950960', x1: "6", y1: "6", x2: "18", y2: "18" })))))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "hasFocus": ["handleFocusChange"],
        "value": ["handleValueChange"]
    }; }
};
ScInput.style = ScInputStyle0;

export { ScFormControl as sc_form_control, ScInput as sc_input };

//# sourceMappingURL=sc-form-control_2.entry.js.map