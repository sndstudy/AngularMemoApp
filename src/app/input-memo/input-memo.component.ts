import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-input-memo',
  templateUrl: './input-memo.component.html',
  styleUrls: ['./input-memo.component.css']
})
export class InputMemoComponent implements OnInit {

  inputData:String = "testtest";
  sendMemo:String = "";

  constructor() { }

  ngOnInit() {
  }

  send(){

    this.sendMemo = this.inputData;

  }

}
