import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TinyUrlService } from 'src/app/services/tiny-url.service';

@Component({
  selector: 'app-tiny',
  templateUrl: './tiny.component.html',
  styleUrls: ['./tiny.component.scss']
})
export class TinyComponent implements OnInit {
  
  urlResult: Observable<any>;

  constructor(private _service: TinyUrlService) { }

  ngOnInit(): void {
  }

  generateEventClicked(url:string){
    this.urlResult = this._service.generateTinyUrl(url).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}
