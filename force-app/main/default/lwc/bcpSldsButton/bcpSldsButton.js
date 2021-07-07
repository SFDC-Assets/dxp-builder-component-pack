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

    get colCSSClasses(){
        //console.log(`Input Variables: buttonLabel=${buttonLabel},targetUrl=${targetUrl},alignment=${alignment},variant=${variant},padding=${padding},stretched=${stretched}`);

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
        console.log(`CSS Class for Button Component Column is ${cssClasses}`);

        return cssClasses;

    }


    get buttonCSSClasses(){
        let cssClasses = 'bcp slds-button';

        if(this.variant === 'Brand'){
            cssClasses = cssClasses + ' slds-button_brand';
        }else if (this.variant === 'Outline Brand'){
            cssClasses = cssClasses + ' slds-button_outline-brand';
        }else if (this.variant === 'Destructive'){
            cssClasses = cssClasses + ' slds-button_destructive';
        }else if (this.variant === 'Neutral'){
            cssClasses = cssClasses + ' slds-button_neutral';
        }else if (this.variant === 'Text Destructive'){
            cssClasses = cssClasses + ' slds-button_text-destructive';                                   
        }else if (this.variant === 'Success'){
            cssClasses = cssClasses + ' slds-button_success';                                   
        }else{
            cssClasses = cssClasses + ' slds-button_neutral';    
        }

        if (this.stretched){
            cssClasses = cssClasses + ' slds-button_stretch';    
        }

        console.log(`CSS Class for Button Component is ${cssClasses}`);

        return cssClasses;

    }


   get buttonTarget(){
        let buttonTarget = '';

        if(this.targetType === 'Blank'){
            buttonTarget = '_blank';
        }else if (this.targetType === 'Parent'){
            buttonTarget = '_parent';
        }else if (this.targetType === 'Top'){
            buttonTarget = '_top';
        }else {
            buttonTarget = '_self';
        }

        console.log(`Target for Button Component is ${buttonTarget}`);

        return buttonTarget;

    }


}