import { LightningElement, api } from 'lwc';

export default class BcpSldsButton extends LightningElement {
    version = '1.7';
    @api variant;
    @api targetUrl;
    @api buttonLabel;
    @api alignment;
    @api padding;
    @api stretched;
    @api targetType;

    connectedCallback() {
        console.log(`Starting SLDS Link Button, Version ${this.version}`);
    }
}