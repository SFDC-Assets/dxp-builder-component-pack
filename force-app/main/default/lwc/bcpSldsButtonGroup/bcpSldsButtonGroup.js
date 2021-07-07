import { LightningElement, api } from 'lwc';

export default class BcpSldsButtonGroup extends LightningElement {
    version = '1.3';
    @api variant;
    @api targetUrls;
    @api buttonLabels;
    @api alignment;
    @api padding;
    stretched = false;
    @api targetType;
    

    connectedCallback() {
        console.log(`Starting SLDS Link Button Group, Version ${this.version}`);
    }

    get buttonItems(){
        console.log(`Processing Button Group Items: Labels=${this.buttonLabels}, URLs=${this.targetUrls}`);
        if(this.buttonLabels !== '' && this.targetUrls !== ''){
            console.log(`Processing Button Labels and Target Urls`);
            let buttonItems = [];
            let buttonLabels = this.buttonLabels.split(",");
            let targetUrls = this.targetUrls.split(",");

            for(let i = 0; i < buttonLabels.length; i ++){
                let buttonItem = {};
                console.log(`Processing Button Group Item: Label=${buttonLabels[i]}, URL=${targetUrls[i]}`);
                buttonItem.id = i;
                buttonItem.buttonLabel = buttonLabels[i];
                buttonItem.targetUrl = targetUrls[i];


                let buttonCSSClasses = 'bcp slds-button';

                if(this.variant === 'Brand'){
                    buttonCSSClasses = buttonCSSClasses + ' slds-button_brand';
                }else if (this.variant === 'Outline Brand'){
                    buttonCSSClasses = buttonCSSClasses + ' slds-button_outline-brand';
                }else if (this.variant === 'Destructive'){
                    buttonCSSClasses = buttonCSSClasses + ' slds-button_destructive';
                }else if (this.variant === 'Neutral'){
                    buttonCSSClasses = buttonCSSClasses + ' slds-button_neutral';
                }else if (this.variant === 'Text Destructive'){
                    buttonCSSClasses = buttonCSSClasses + ' slds-button_text-destructive';                                   
                }else if (this.variant === 'Success'){
                    buttonCSSClasses = buttonCSSClasses + ' slds-button_success';                                   
                }else{
                    buttonCSSClasses = buttonCSSClasses + ' slds-button_neutral';    
                }
        
                if (this.stretched){
                    buttonCSSClasses = buttonCSSClasses + ' slds-button_stretch';    
                }

                buttonItem.buttonCSSClasses = buttonCSSClasses;




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
        
                buttonItem.buttonTarget = buttonTarget;



                buttonItems.push(buttonItem);
            }

            return buttonItems;
        }else{
            return null;
        }
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
        console.log(`CSS Class for Button Group Component Column is ${cssClasses}`);

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