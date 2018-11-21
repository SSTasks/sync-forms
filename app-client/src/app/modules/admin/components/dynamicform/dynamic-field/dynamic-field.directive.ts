
import { ComponentFactoryResolver, ComponentRef, 
         Directive, Input, OnInit, ViewContainerRef } from "@angular/core";

import { FormGroup } from "@angular/forms";

import { FieldConfig  } from "../form-controls/field.interface";
import { InputComponent  } from "../form-controls/input.component";
import { SelectComponent  } from "../form-controls/select.component";
import { ToggleComponent  } from "../form-controls/toggle.component";
import { ButtonComponent  } from "../form-controls/button.component";

const componentMapper = {
  input: InputComponent,
  select: SelectComponent,
  toggle: ToggleComponent,
  button: ButtonComponent
}
         

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  //ComponentFactoryResolver is used to resolve the component at run time
  //ViewContainerRef to gain access to the view container of the element that will host the dynamically added component.
  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) { }

  //maintains the instance of dynamically created component
  componentRef : any

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
      }      

}
