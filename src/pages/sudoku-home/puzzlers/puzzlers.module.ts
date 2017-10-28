import { NgModule } from '@angular/core';
import { LasVegasPuzzler } from './lasvags-puzzler';
import { PuzzlerService } from './puzzler';


@NgModule({
    providers:[{provide:PuzzlerService,useClass:LasVegasPuzzler}]
})
export class SudokuPuzzlerModule {}
