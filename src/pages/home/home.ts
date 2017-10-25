import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  games=[
    {
      name:"sudoku",
      img:"/assets/img/sudoku/sudoku.jpg",
      page:"SudokuHomePage"
    }
  ];
  constructor(public navCtrl: NavController) {

  }


  gotoGame(page){
    if(page){
      this.navCtrl.push(page);
    }
  }
}
