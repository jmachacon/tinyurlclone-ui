import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinyRoutingModule } from './tiny-routing.module';
import { TinyComponent } from './tiny.component';
import { GenerateInputComponent } from 'src/app/shared/components/generate-input/generate-input.component';
import { GenerateOutputComponent } from 'src/app/shared/components/generate-output/generate-output.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TinyComponent, 
    GenerateInputComponent,
    GenerateOutputComponent,
  ],
  imports: [
    CommonModule,
    TinyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TinyModule { }
