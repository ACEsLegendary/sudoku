import { Injectable } from '@angular/core';
import { Puzzler } from './puzzler';
import { SudokuUtils } from '../utils/sudoku-utils';
import { SudokuChecker } from '../utils/sudoku-checker';


@Injectable()
export class LasVegasPuzzler implements Puzzler {

    constructor(){}
    puzzle: number[][];
    answer:number[][];
    makePuzzle(level: number): number[][] {
        //las-vegas method to get a solced sudoku
        var ok:boolean =false;
        while(!ok){
            this.initMatrix(11);
            ok=this.dfsSearch(0,0);
        }
        this.answer=SudokuUtils.deepClone(this.puzzle);       
        SudokuUtils.printMatrix(this.answer);
        this.blurMatrix(level);
        SudokuUtils.printMatrix(this.puzzle);
        return this.getPuzzle();
    }


    private getPuzzle(): any {
        return this.puzzle;
    }

    getAnswer(){
        return this.answer;
    }
    /**
     * 
     * @param base cell number of seed matrix
     */
    private initMatrix(base:number) {
        //init to 0 matrix
        var matrix=[];
        for(var i=0;i<9;i++){
            matrix.push(new Array(9).fill(0));
        }
        //random fill matrix with 0-9 in n cell;
        while(base--){
                var p=SudokuUtils.getRandomInt(0,81);
                var x=Math.floor(p/9);
                var y=p%9;
                var v=SudokuUtils.getRandomInt(1,10);
                if(!SudokuChecker.fitCell(matrix,v,x,y)){
                    base++;
                }else{
                    matrix[x][y]=v;
                }   
            
        }
        this.puzzle=matrix;
    }

    private dfsSearch(i:number,j:number):boolean{
        let matrix=this.puzzle;
        //search first empty cell
        outer:
        for(var x=i;x<9;x++){
            for(var y=0;y<9;y++){
                if(matrix[x][y]==0){
                    i=x;
                    j=y;
                    break outer;
                }
            }
        }
        //if there is no empty cell,search stop because puzzle has bean sovled.
        if(matrix[i][j]!=0){
            SudokuUtils.printMatrix(matrix);
            return true;
        }
        //try to fill cell[i,j] with k
        for (var k=1;k<=9;k++){
            if(!SudokuChecker.fitCell(matrix,k,i,j)) continue;
            //check pass,fill
            matrix[i][j]=k;
            //if not finished, try to fill next cell
            if(i!=8||j!=8){
                var ni=j==8?i+1:i;
                var nj=j==8?0:j+1;
                //recurse search
                if(this.dfsSearch(ni,nj)){
                    return true;
                } else{
                    matrix[i][j]=0;//reset cell[i][j]
                }
            }else{
                return true;
            }
        }
        return false;
    }

    private blurMatrix(level: number = 0) {
        let puzzle = this.puzzle;
        if (puzzle) {
            let holeNum = this.calcHoleNum(level);
            let range = 81;
            while (holeNum-- > 0) {
                var index = Math.floor(Math.random() * range);
                if (this.puzzle[Math.floor(index / 9)][index % 9]) {
                    this.puzzle[Math.floor(index / 9)][index % 9] = 0;
                }else{
                    holeNum++;
                }
            }
        }
    }
    /**
     * min 27,max 64
     */
    private calcHoleNum(level: number): any {
        let num = (63 - 27) / 9 * level + 27;
        if (num > 64) num = 64;
        return num;
    }

}
