import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-generate-output',
  template: `
      <pre *ngIf="urlResult">
        The following URL:
        {{ urlResult.url }}

        the following tiny url:
        http://{{ urlResult.hostname+'/'+urlResult.hash }}
      </pre>
  `,
  styles: []
})
export class GenerateOutputComponent implements OnInit {

  @Input() urlResult: any;

  constructor() { }

  ngOnInit(): void {
  }

}
