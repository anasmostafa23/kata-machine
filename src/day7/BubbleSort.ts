export default function bubble_sort(arr: number[]): void {

    let temp = 0;


    for (let j = 0 ; j < arr.length-1 ; j++) { 


        for (let i = 0 ; i < arr.length-j-1 ; i++) {

            if( arr[i] >= arr[i-1] ) {
                temp = arr[i] ;
                arr[i] = arr[i-1] ; 
                arr[i-1] = temp ; }
        }





    }
}