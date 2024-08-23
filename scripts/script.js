lucide.createIcons();

const btnAddTask = document.getElementById('btn-add-task')

function mensagemInformacao (mensagem, cTipo, time) {
    const boxMensagem = document.getElementById('error-local');

    boxMensagem.innerHTML = `
        <div class="mensagem-info flex w-100 align-center">
            <div class="box-svg">

            </div>
            <div class="description">
                <p>${mensagem}</p>
            </div>
            <div>
                <button class="btn-close-mensagem-info flex justify-center align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
        </div>
    `;

    const mensagemInfo = document.querySelector('.mensagem-info')
    const boxSvg = document.querySelector('.box-svg');

    if(cTipo == 'success') {
        boxSvg.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        `

        mensagemInfo.style.backgroundColor = 'green'
    } else {
        boxSvg.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>  
        `

        mensagemInfo.style.backgroundColor = 'red'
    }

    setInterval(() => {
        mensagemInfo.classList.add('hidden')
    }, time)

    const btnClose = document.querySelector('.btn-close-mensagem-info')

    btnClose.addEventListener('click', () => {
        mensagemInfo.remove()
    })

}

btnAddTask.addEventListener('click', () => {
    const inputValue = document.getElementById('input-task-value').value;

    const listCards = document.getElementById('list-cards')

    

    if(inputValue == '') {
        mensagemInformacao("Preencha o campo de descrição", 'error', 1000);
    } else {
        listCards.innerHTML += `
        <div class="card flex">
            <div>
                <input class="flex align-center" type="checkbox">
            </div>
            <div class="description">
                <p>${inputValue}</p>
            </div>
            <div>
                <button class="btn-delete-task">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                </button>
            </div>
        </div>
    `
    }

    const btnDeleteTasks = document.querySelectorAll('.btn-delete-task');

    btnDeleteTasks.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.card');
            card.remove();

            mensagemInformacao('Tarefa deletada com sucesso!', 'success')
        });
    });    
});