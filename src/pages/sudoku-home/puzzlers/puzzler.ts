export interface Puzzler{
    /**
     * level: the hard level of the sudoku,the bigger which is,the harder the puzzle is.
     */
    makePuzzle(level:number):number[][];
}
