import { LightningElement } from 'lwc';

export default class BcpHorizontalRule extends LightningElement {
    version = '1.0';

    connectedCallback() {
        console.log(`Starting Horizontal Rule, Version ${this.version}`);
    }

}