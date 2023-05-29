const checkbox = document.querySelectorAll('input[type="checkbox"]');

document.addEventListener('change', () => {
    checkbox.forEach(check => {
        if(check.checked){
            check.parentElement.nextElementSibling.innerHTML = `<s>${check.parentElement.nextElementSibling.textContent}</s>`   
        } else {
            check.parentElement.nextElementSibling.innerHTML = `${check.parentElement.nextElementSibling.textContent}`   
        }
    })
})
