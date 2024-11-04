let data = [
    {
        name: 'Frankenstein',
        age: '206'  
    },
    {
        name: 'Dracula',
        age: '127'  
    }, 
    {
        name: 'Griffin',
        age: '127'  
    },
    {
        name: 'Mr. Hyde',
        age: '138'  
    },
    {
        name: 'King Kong',
        age: '91'  
    },
    {
        name: 'Gojira',
        age: '70'  
    }
] ;

const info = document.querySelector('#info')

let details = data.map(function(item){
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>' 
    )
}) ;

info.innerHTML = details.join('\n') ;

console.log('Ages calculated in the year 2024') ;
console.log('Calculated and Created by Adan Rubio') ;