import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { ClassComponent } from './class/class.component';
import { DEventComponent } from './d-event/d-event.component';
import { TwoComponentComponent } from './two-component/two-component.component';
import { PCustomComponent } from './p-custom/p-custom.component';
import { MTemplateVariableComponent } from './m-template-variable/m-template-variable.component';
import { GNgIfComponent } from './g-ng-if/g-ng-if.component';
import { HNgForComponent } from './h-ng-for/h-ng-for.component';
import { INgSwitchComponent } from './i-ng-switch/i-ng-switch.component';
import { JNgClassComponent } from './j-ng-class/j-ng-class.component';
import { KNgStyleComponent } from './k-ng-style/k-ng-style.component';
import { MInputComponent } from './m-input/m-input.component';
import { GameNumberComponent } from './game-number/game-number.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './tutorial-route/products/products.component';
// import { TutorialRouteComponent } from './tutorial-route/tutorial-route.component';
import { ProductAddComponent } from './tutorial-route/product-add/product-add.component';
import { ProductEditComponent } from './tutorial-route/product-edit/product-edit.component';
import { ProductDeleteComponent } from './tutorial-route/product-delete/product-delete.component';
import { ProductComponent } from './tutorial-route/product/product.component';
// import { ProductService } from '../product.service';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    BPropertyComponent,
    ClassComponent,
    DEventComponent,
    TwoComponentComponent,
    PCustomComponent,
    MTemplateVariableComponent,
    GNgIfComponent,
    HNgForComponent,
    INgSwitchComponent,
    JNgClassComponent,
    KNgStyleComponent,
    MInputComponent,
    GameNumberComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    RegisterComponent,
    ProductsComponent,
    // TutorialRouteComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
