import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SudokuHomePage } from './sudoku-home';
import { SudokuPuzzlerModule } from './puzzlers';
import { CommonUtilsModule } from '../../common-utils';




@NgModule({
  declarations: [
    SudokuHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SudokuHomePage),
    SudokuPuzzlerModule,
    CommonUtilsModule 
  ],
})
export class SudokuHomePageModule {}
