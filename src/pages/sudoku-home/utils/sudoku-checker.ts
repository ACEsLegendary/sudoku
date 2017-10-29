export class SudokuChecker {
    static checkMatrix(matrix: number[][]): boolean {
        let rb = new Array(9).fill(0, 0, 9);
        let cb = new Array(9).fill(0, 0, 9);
        let sb = new Array(9).fill(0, 0, 9);
        for (var i = 0; i < 9; i++) {
            if(matrix[i].find(x=>x==0||x==null)>-1){
                return false;
            }
            for (var j = 0; j < 9; j++) {
                rb[matrix[i][j] - 1]++;
                cb[matrix[j][i] - 1]++;
                sb[matrix[Math.floor(i/3)*3+Math.floor(j/3)][(i%3)*3+j%3]-1]++;
            }
            if (rb.find(x=>x>i+1)>-1||cb.find(x=>x>i+1)>-1||sb.find(x=>x>i+1)>-1){//row or col or square has dupilicate number
                return false;
            }
        }
        return true;
    }
    /**
     * 
     * @param matrix 
     * @param v  value to fill
     * @param x  row number, 0-based
     * @param y  col number, 0-based
     */
    static fitCell(matrix:number[][],v:number,x:number,y:number):boolean{
        if(matrix[x][y]!=0){
            return false;
        }
        for (var i = 0; i < 9; i++) {
            if(matrix[x][i]==v||matrix[i][y]==v||matrix[Math.floor(x/3)*3+Math.floor(i/3)][Math.floor(y/3)*3+i%3]==v){
                return false;
            }
        }
        return true;
    }

    // private static validateCell(x:any):boolean{
    //     if(typeof x ==undefined)
    // }
}