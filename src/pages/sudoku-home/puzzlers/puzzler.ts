export interface Puzzler{
    /**
     * level: the hard level of the sudoku,the bigger which is,the harder the puzzle is.
     */
    makePuzzle(level:number):number[][];
    /**
     * get the answer of sudoku
     */
    getAnswer():number[][];
}

export class PuzzlerService implements Puzzler{
    makePuzzle(level:number):number[][]{
        return null;
    }
    getAnswer():number[][]{
        return null;
    }
}