import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class MaterialModule { }