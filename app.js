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

let details = data.map(function(){
    return (
        '<div>' + item.name + '</div>'
    )
})

info.innerHTML = details.join('\n') ;