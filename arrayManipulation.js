function processArray(numbers){
    return numbers.map(num =>{
        try{
            if( num % 2 === 0){
                return Math.pow(num,2) ;
    
            }
    
            else{
                return num * 3 ;
            }

        }
        catch(error){
            error;
        }
       
    });
}