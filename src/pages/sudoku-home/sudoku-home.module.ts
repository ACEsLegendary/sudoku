import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SudokuHomePage } from './sudoku-home';
import { SudokuPuzzlerModule } from './puzzlers';




@NgModule({
  declarations: [
    SudokuHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SudokuHomePage),
    SudokuPuzzlerModule, 
  ],
})
export class SudokuHomePageModule {}
