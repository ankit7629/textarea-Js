const output = document.getElementById('output');
const total = document.getElementById('total')
const remain = document.getElementById('remain')

output.addEventListener('input', (e) => {
    
    console.log(output.value)
    console.log(50-output.value.length )
    console.log(output.value.length)
    total.innerHTML = `Total Characters: ${output.value.length}`;
    remain.innerHTML = `Remaining Characters: ${50-output.value.length}`;
    if(50 - output.value.length === 0){
       output.disabled = true;
    }
})