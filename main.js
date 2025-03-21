
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
        pila.push(element);
        if (element in delimitadores) {            
            if (pila.length === '({[]})' || '()' || '{}' || '[]' || '{[]}' || '[{}]' || '({}])' || '({})]' || '[({})]' || '[{()}]' || '{[()]}') {
                console.log('True');
            }  
            else{
                console.log('False');   
            }
        }
        else{
                }
    }
    console.log(pila);
    
   
    
}
delimitadoresF(ingreso);

