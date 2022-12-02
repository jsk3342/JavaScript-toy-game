let str = '';
function curring (a) {
    if(arguments.length) {
        str += a
        return function(b) {
            if(arguments.length) {
                str += a
                return function(c) {
                    if(arguments.length) {
                        str += a
                        return function(d) {
                            if(arguments.length) {
                                str += a
                                return;
                            }
                        
                            if(!arguments.length){
                                return;
                            }
                        }
                    }
                
                    if(!arguments.length){
                        return;
                    }
                }
            }
        
            if(!arguments.length){
                return;
            }
        }
    }

    if(!arguments.length){
        return;
    }
}

console.log(curring('나는')('최고다')())
console.log(str)