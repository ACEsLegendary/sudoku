import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LasVegasPuzzler } from './puzzlers/index';
import { SudokuChecker } from './utils/sudoku-checker';
import { UIService } from '../../common-utils/index';



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
    }, {
      value: 5,
      name: "Master"
    }, {
      value: 6,
      name: "Doctor"
    }, {
      value: 7,
      name: "Genius"
    }, {
      value: 8,
      name: "Godlike"
    }, {
      value: 9,
      name: "Legendary"
    }, {
      value: 10,
      name: "Computer"
    }
  ];
  matrix: number[][];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private puzzler: LasVegasPuzzler,
    private uiService: UIService
  ) {
  }

  ngAfterViewInit() {
    this.initPuzzle();
  }

  userMatrix;
  initPuzzle() {
    this.userMatrix = this.puzzler.makePuzzle(this.level);
    this.matrix = this.userMatrix;
  }

  check() {
    if (SudokuChecker.checkMatrix(this.matrix)) {
      this.uiService.presentAlert({
        title: "Congratulations",
        message: "You finished this sudoku successfully!",
        buttons: [
          {
            text: "TryHarder",
            role:"danger",
            handler: () => {
              this.level++;
              this.initPuzzle();
            }
          },{
            text: "TryMore",
            handler: () => {
              this.initPuzzle();
            }
          }, {
            text: "Cancel",
            role:"cancel",
            handler: () => {
              return;
            }
          }
        ]
      });
    } else {
      this.uiService.presentAlert({
        title: "Sorry",
        message: "You didn't finish this sudoku successfully! Please Try Again!",
      });
    }
  }

  peeking: boolean = false;
  peek() {
    this.peeking = !this.peeking;
    if (this.peeking) {
      this.matrix = this.puzzler.getAnswer();
    } else {
      this.matrix = this.userMatrix;
    }
  }

  change() {
    this.initPuzzle();
  }
}
