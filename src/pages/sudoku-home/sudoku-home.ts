import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SudokuChecker } from './utils/sudoku-checker';
import { UIService, CommonTranslateService } from '../../common-utils';
import { PuzzlerService } from './puzzlers';
import { SudokuUtils } from './utils/sudoku-utils';



@IonicPage()
@Component({
  selector: 'page-sudoku-home',
  templateUrl: 'sudoku-home.html',
})
export class SudokuHomePage {
  _level: number = 1;
  get level() {
    return this._level;
  }
  set level(value) {
    this._level = value;
    this.initPuzzle();
  }
  levelOptions = [
    {
      name: "Kindergarten",
      value: 1,

    }, {
      value: 2,
      name: "Pupil"
    }, {
      value: 3,
      name: "Junior"
    }, {
      value: 4,
      name: "Senior"
    }, 
    {
      value:5,
      name:"Bachelor"
    },{
      value: 6,
      name: "Master"
    }, {
      value: 7,
      name: "Doctor"
    }, {
      value: 8,
      name: "Genius"
    }, {
      value: 9,
      name: "Godlike"
    }, {
      value: 10,
      name: "Legendary"
    }
  ];
  matrix: number[][];
  originMatrix;
  userMatrix;
  anwserMatrix;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private puzzler: PuzzlerService,
    private uiService: UIService,
    private translate: CommonTranslateService
  ) {
    this.initPuzzle();
  }

  initPuzzle() {
    this.originMatrix = this.puzzler.makePuzzle(this.level);
    this.userMatrix=SudokuUtils.deepClone(this.originMatrix);
    this.precedure(this.userMatrix);
    this.matrix = this.userMatrix;
  }
  /**
   * 
   * @param matrix set 0 cell to null to fit ion-input
   */
  precedure(matrix:any[][]){
    matrix.forEach(row=>{
      row.forEach((col,index)=>{
        if(col==0){
          row[index]=new String();
        }
      });
    });
  }

  check() {
    if (SudokuChecker.checkMatrix(this.matrix)) {
      this.uiService.presentAlert({
        title: this.translate.instant("Congratulations"),
        message: this.translate.instant("Congratulations_MSG"),
        buttons: [
          {
            text: this.translate.instant("TryHarder"),
            handler: () => {
              this.level++;
              this.initPuzzle();
            }
          },{
            text:  this.translate.instant("TryMore"),
            handler: () => {
              this.initPuzzle();
            }
          }, {
            text:  this.translate.instant("Cancel"),
            handler: () => {
              return;
            }
          }
        ]
      });
    } else {
      this.uiService.presentAlert({
        title: this.translate.instant("Sorry"),
        message: this.translate.instant("Sorry_MSG"),
      });
    }
  }

  peeking: boolean = false;
  peek() {
    this.peeking = !this.peeking;
    if (this.peeking) {
      if(!this.anwserMatrix){
        this.anwserMatrix=SudokuUtils.deepClone(this.puzzler.getAnswer());
      }
      this.matrix = this.anwserMatrix;
    } else {
      this.matrix = this.userMatrix;
    }
  }

  change() {
    this.initPuzzle();
  }

  

  calcColor(i:number,j:number):boolean{
    return (Math.floor(i/3)%2==0&&Math.floor(j/3)%2==0)||(Math.floor(i/3)%2==1&&Math.floor(j/3)%2==1);
  }
}
