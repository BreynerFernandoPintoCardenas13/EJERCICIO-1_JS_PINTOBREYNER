
let ingreso = prompt('Ingrese la expresión a evaluar: ');
function delimitadoresF(ingreso) {
    
    let delimitadores = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let pila = [];
    for (let i = 0; i < ingreso.length; i++) {
        let element = ingreso[i];
        if (element in delimitadores) {
            pila.push(element);
            
            if (pila.length === '({[]})' || '()' || '{}' || '[]' || '{[]}' || '[{}]' || '({}])' || '({})]' || '[({})]' || '[{()}]' || '{[()]}') {
                console.log('True');
            }  
            else{
                console.log('False');   
            }
        }
        else{
            if (element === delimitadores[pila[pila.length - 1]]) {
                pila.pop();
            }
            else{
                console.log('False');
            }
        }
    }
    console.log(pila);
    
   
    
}
delimitadoresF(ingreso);

