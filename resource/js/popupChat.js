const chatModal = document.querySelector('.chat-modal');
const chatServices = document.querySelector('.chat-services');
const showChat = document.querySelector('.show-chat');
const closeChat = document.querySelector('.close-chat');

showChat.addEventListener('click', () => {
    chatModal.classList.add('show');
    showChat.classList.add('hidden');
    setTimeout(() => {
        chatServices.classList.add('expand');
    }, 500);
});

closeChat.addEventListener('click', () => {
    setTimeout(() => {
        showChat.classList.remove('hidden');
    }, 820);
    chatServices.classList.remove('expand');
    setTimeout(() => {
        chatModal.classList.remove('show');
    }, 500);
});

const handleBadInputs = (e) => {

    const nickname = e.value.trim();

    const isValid = /^[a-zA-Z0-9 ]+$/.test(nickname) && nickname !== '';
    if (isValid) {
        return false;
    }
    alert('Nickname is invalid.')
    e.value = ''
    return true;
}