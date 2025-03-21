
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
        }
    }
    console.log(pila);
    
    if (pila.length === '({[]})' || '()' || '{}' || '[]' || '{[]}' || '[{}]' || '({}])' || '({})]' || '[({})]' || '[{()}]' || '{[()]}') {
        console.log('Expresión correcta');
        console.log(pila);
    }  
    else{
        console.log('Expresión incorrecta')   
    }
    
}
delimitadoresF(ingreso);

