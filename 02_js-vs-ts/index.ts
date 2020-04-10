(function(){
    function tokenizer(data : string | string[]) {
        let result: string | boolean = ''
        if( data.length > 0){
            for(let i = 0; i < data.length; i++){
                result = result + data[i]+ '-'
            }

        } else {
            result = false;
        }

        return result
    }

    var output
    output = tokenizer('hello')
    console.log(output)

    output = tokenizer(['hello', 'world'])
    console.log(output)
    
    output = tokenizer('')
    console.log(output)
})()