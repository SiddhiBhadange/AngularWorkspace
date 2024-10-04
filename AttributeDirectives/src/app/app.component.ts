import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AttributeDirectives';


  isHighlight=false;
  HighlightONOFF() {
   this.isHighlight=!this.isHighlight;
  }

  FontSize='30px';

  increase() {
   this.FontSize= parseInt(this.FontSize ) + 2 + 'px';
  }
  decrease() {
    this.FontSize=parseInt(this.FontSize ) - 2+'px';
  }
}
