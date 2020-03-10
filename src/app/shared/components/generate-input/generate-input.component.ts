import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-generate-input',
  template: `
      <form class="form-signin" role="form" [formGroup]="tinyForm" (ngSubmit)="onSubmit()">
      <input type="text" class="form-control" placeholder="Enter Url" formControlName="url" required autofocus [ngClass]="{ 'is-invalid': showErrors && f.url.errors }">
      <div *ngIf="showErrors && f.url.errors" class="invalid-feedback">
          <div *ngIf="f.url.errors.required">This is required</div>
          <div *ngIf="f.url.errors.pattern">Must be a valid url</div>
      </div>
      <button class="btn btn-lg btn-primary btn-block" id="generate-btn" type="submit">Generate</button>
    </form>
  `,
  styles: [
    '.btn#generate-btn { margin-top:13px; }'
  ]
})
export class GenerateInputComponent implements OnInit {
  showErrors: boolean;
  tinyForm: FormGroup;
  @Output() generateClick: EventEmitter<string> = new EventEmitter();

  get f(){
    return this.tinyForm.controls;
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tinyForm = this._formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(/(https|http):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)]],
    });
  }

  onSubmit() {
    if (this.tinyForm.invalid) {
      this.showErrors = true;
       return;
    }
    this.generateClick.emit(this.f.url.value);
  }

}
