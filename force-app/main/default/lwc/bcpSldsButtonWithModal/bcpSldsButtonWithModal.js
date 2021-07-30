import { LightningElement, api, track } from 'lwc';

export default class BcpSldsButtonWithModal extends LightningElement {    version = '1.7';
@api variant;
@api buttonLabel;
@api alignment;
@api padding;
@api stretched;

@api modalTitle;
@api modalHTMLBody;

@track isModalOpen = false;

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


get variantClass(){
    return this.variant.toLowerCase();
}


  openModal() {
    // to open modal set isModalOpen tarck value as true
    this.isModalOpen = true;
  }

  closeModal() {
    // to close modal set isModalOpen tarck value as false
    this.isModalOpen = false;
  }



}