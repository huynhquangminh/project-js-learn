import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule
    ]
})
export class MaterialModule { }