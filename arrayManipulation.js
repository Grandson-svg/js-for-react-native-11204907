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


function formatArrayStrings(strings,numbers){
    if(strings.length !== numbers.length){
        throw new Error("less string or number!");
    }
    return strings.map((string,index)=>{
            if(numbers[index] % 2 === 0){
         return  string.toUpperCase();

            }

            else{
         return   string.toLowerCase();
            }
    })

}
