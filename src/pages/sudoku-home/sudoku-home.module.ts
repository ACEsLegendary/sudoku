import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SudokuHomePage } from './sudoku-home';
import { SudokuPuzzlerModule } from './puzzlers';
import { CommonUtilsModule } from '../../common-utils';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    SudokuHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SudokuHomePage),
    TranslateModule.forChild(),
    SudokuPuzzlerModule,
    CommonUtilsModule
  ],
})
export class SudokuHomePageModule { }
