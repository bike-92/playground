import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  public highlight = false;

  ngOnInit(){
    console.log('highlight: ', this.highlight);
  }

  public alertMe(): void {
    console.log(' I have been clicked');
      alert(" I have been clicked!");
  }

  public hoverOver(): void {
    console.log('hovering over button ', this.highlight);
    this.highlight = !this.highlight;
    console.log('highlight: ', this.highlight);
  }
  }
