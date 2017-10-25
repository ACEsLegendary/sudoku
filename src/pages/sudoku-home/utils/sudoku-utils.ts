export class SudokuUtils{
    static getRandom(min:number,max:number):number{
        return Math.random()*(max-min)+min;
    }
    static getRandomInt(min:number,max:number):number{
        return Math.floor(Math.random()*(max-min)+min);
    }

    static printMatrix(matrix:any[]){
        for(var i=0;i<matrix.length;i++){
            console.log(matrix[i]);
        }
    }
    static deepClone(source:any){
        return JSON.parse(JSON.stringify(source));
    }
}