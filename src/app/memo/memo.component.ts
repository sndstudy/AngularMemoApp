import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  @Input() memoList:String;

  constructor() { }

  ngOnInit() {
  }

}
