import { LightningElement, api } from 'lwc';

export default class BcpSldsBadge extends LightningElement {
    version = '1.2';
    @api variant;
    @api badgeLabel;
    @api alignment;
    @api padding;

    connectedCallback() {
        console.log(`Starting SLDS Link Button, Version ${this.version}`);
    }

    get colCSSClasses(){
        let cssClasses = 'bcp slds-col';

        if(this.alignment === 'Left'){
            cssClasses = cssClasses + ' slds-text-align_left';
        }else if (this.alignment === 'Right'){
            cssClasses = cssClasses + ' slds-text-align_right';
        }else{
            cssClasses = cssClasses + ' slds-text-align_center';
        }

        if(this.padding === 'X-Small'){
            cssClasses = cssClasses + ' slds-var-m-around_x-small';
        }else if (this.padding === 'Small'){
            cssClasses = cssClasses + ' slds-var-m-around_small';
        }else if (this.padding === 'Medium'){
            cssClasses = cssClasses + ' slds-var-m-around_medium';
        }else if (this.padding === 'Large'){
            cssClasses = cssClasses + ' slds-var-m-around_large';
        }else if (this.padding === 'X-Large'){
            cssClasses = cssClasses + ' slds-var-m-around_x-large';                                   
        }    
        console.log(`CSS Class for Badge Component Column is ${cssClasses}`);

        return cssClasses;

    }

    get badgeCSSClasses(){
        let cssClasses = 'bcp slds-badge';

        if(this.variant === 'Inverse'){
            cssClasses = cssClasses + ' slds-badge_inverse';
        }else if (this.variant === 'Lightest'){
            cssClasses = cssClasses + ' slds-badge_lightest';
        }else if (this.variant === 'Success'){
            cssClasses = cssClasses + ' slds-theme_success';
        }else if (this.variant === 'Warning'){
            cssClasses = cssClasses + ' slds-theme_warning';
        }else if (this.variant === 'Error'){
            cssClasses = cssClasses + ' slds-theme_error';                                   
        }

        console.log(`CSS Class for Badge Component is ${cssClasses}`);

        return cssClasses;

    }
}