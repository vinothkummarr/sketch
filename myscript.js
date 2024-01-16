const le = 3
const container = document.querySelector('#container');
for (i=0;i<=le;i++){
    const divv = document.createElement('div')
    
    container.appendChild(divv)
    document.querySelector('div').id ='boxes'
    divv.style.padding='10px'
    for (j=0;j<=le;j++){
        const hdivv = document.createElement('divvv')
        hdivv.innerText=' vino '
        container.appendChild(hdivv)
        document.querySelector('divvv').id ='boxes'
        hdivv.style.padding='10px'


    }
}