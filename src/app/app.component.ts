import { OnInit, Component } from '@angular/core';
import { ResultsService } from './results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public key = '';
  public results = [];
  public isDataLoaded = false;

  constructor(private _resultsService: ResultsService) {
    this.key = 'funny';
  }

  ngOnInit() {
    this.getResults(this.key);
  }

  getResults(key) {
    this._resultsService.getResults(key).subscribe(data => this.setResults(data));
  }

  setResults(data) {
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].data;
    }
    this.results = data;
  }

  onKey(event: any) { // without type info
    if (event.target.value.match('[^]*')) {
      if (!(this.key === '')) {
        this.ngOnInit();
      }
    }
  }

  showImage() {
    if (this.results[0].thumbnail === '') {
      return false;
    } else {
      return true;
    }
  }
}
