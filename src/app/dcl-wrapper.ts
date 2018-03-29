import { ComponentRef,  OnDestroy, OnChanges } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Component, ViewChild, Input, Type, ComponentFactoryResolver, Compiler, AfterViewInit } from '@angular/core';


// Helper component to add dynamic components
@Component({
    selector: 'dcl-wrapper',
    // template: `<div #target></div>`
    template: `<div #target></div>`
  })
  // tslint:disable-next-line:component-class-suffix
  export class DclWrapper  implements AfterViewInit , OnDestroy , OnChanges {
    @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
    @Input() type: Type<Component>;
    cmpRef: ComponentRef<Component>;
    private isViewInitialized = false;
  
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {}
  
    updateComponent() {
      if(!this.isViewInitialized) {
        return;
      }
      if(this.cmpRef) {
        // when the `type` input changes we destroy a previously 
        // created component before creating the new one
        this.cmpRef.destroy();
      }
  
      const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
      this.cmpRef = this.target.createComponent(factory)

   }

    ngOnChanges() {
      this.updateComponent();
    }

    ngAfterViewInit() {
        debugger;
      this.isViewInitialized = true;
      this.updateComponent();
    }

    ngOnDestroy() {
      if(this.cmpRef) {
        this.cmpRef.destroy();
      }
    }
  }