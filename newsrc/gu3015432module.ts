import { NgModule, ModuleWithProviders } from '@angular/core';
import { AcademyComponent } from './components/gu3015432';
import { AcademyProvider } from './providers/gu3015432';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        AcademyComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        AcademyComponent
    ]
})
export class IonicAcademyModule {

}