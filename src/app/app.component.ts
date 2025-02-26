import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './component/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit, DoCheck{
  
  
  title = 'day33l';
  isShow: boolean = false;
  
  // ? is optional (can either have or not)
  // ! is non null (is there)
  @ViewChild(ViewChildComponent) childComponent!: ViewChildComponent;

  @ViewChild("myImg") imageElement: ElementRef | undefined;
  // above is the same as this
  // @ViewChild("myImg") imageElement!: ElementRef;

  
  changeChildText() {
    this.childComponent.changeText();
  }

  ngOnInit(): void {
    this.isShow = true;
  }

  ngDoCheck(): void {
    console.log("DoCheck...")
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit...");
    console.log(this.imageElement);
  }
}
