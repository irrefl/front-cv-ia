var wsocket;
//var serviceLocation = "ws://0.0.0.0:8080/chat/";
//var serviceLocation = "ws://192.168.100.3:8080/chat/";
let serverLocation = 'localhost'
let port = '8080'
let chatRoute = 'chat'
let localhost = window.location.hostname;
let serviceLocation = `ws://${localhost}:${port}/${chatRoute}/`
var $nickName;
var $message;
var $chatWindow;
var room = '';

function onMessageReceived(evt) {
    var msg = JSON.parse(evt.data); // native API

    console.table(msg)
    debugger;
    let userMessage = `
    <div class="message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3">
        <div class="flex items-end justify-end mb-1">
            <div class="flex flex-col items-end">
                <span class="text-gray-300 text-xs">${msg.created_at}</span>
                <div class="flex items-center">
                    <span class="font-semibold">${msg.sender}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                </div>
            </div>
        </div>
        <div class="text-sm">${msg.message}</div>
    </div>`;

    let adminMessage = `
    <div class="message text-white p-2 self-start my-2 rounded-md shadow mr-3"
            style="background-color: rgb(79 70 229);">
        <div class="flex items-start justify-start mb-1">
            <div class="flex flex-col items-start">
                <span class="text-gray-300 text-xs">${msg.created_at}</span>
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                    </svg>
                    <span class="font-semibold text-white">${msg.sender}</span>
                </div>
            </div>
        </div>
        <div class="text-white">${msg.message}</div>
    </div>`;

    let currentChatter = msg.sender === 'admin' ? adminMessage : userMessage;


    chatMessages.innerHTML += currentChatter;
    chatMessages.scrollTop = chatMessages.scrollHeight;

    let currentChatterName = msg.sender === 'admin' ? 'admin' : msg.sender;
    let chatter = document.querySelector('#chatter')

    chatter.textContent = currentChatterName;
}


function sendMessage() {

    let msg = `{
        "message" : "${$message.val()}",
        "sender" : "${$nickName.val()}",
        "questionCategory" : "development",
        "created_at" : "${new Date()}"
    }`
    wsocket.send(msg);
    $message.val('').focus();
}

function connectToChatserver() {
    room = $('#chatroom option:selected').val();
    
    /*
    wsocket = new WebSocket(serviceLocation + room);

    wsocket.onerror = function(event) {
        console.error("WebSocket error:", event);
    };
    
    wsocket.onmessage = onMessageReceived;
    console.table(serviceLocation);

    */

    return new Promise((resolve, reject) => {
         wsocket = new WebSocket(serviceLocation + room);
    
        wsocket.onopen = (event) => {
          console.log("WebSocket connection opened:", event);
          //wsocket.onmessage = onMessageReceived;
          // Perform any initialization or additional setup here
          resolve(wsocket);
        };
    
        wsocket.onerror = (event) => {
          console.error("WebSocket error:", event);
          reject(new Error("WebSocket connection failed"));
        };
    
        wsocket.onclose = (event) => {
          console.log("WebSocket connection closed:", event);
          // You may choose to handle the WebSocket closure if needed
        };
      });

}

function leaveRoom() {
    wsocket.close();
    $chatWindow.empty();
    $('.chat-wrapper').hide();
    $('.chat-signin').show();
    $nickName.focus();
}

$(document).ready(function () {
    $nickName = $('#nickname');
    $message = $('#message');

    $chatWindow = $('#response');
    chatMessages = document.querySelector('#chatMessages');
    $('.chat-wrapper').hide();
    $('#cv').hide();
    $nickName.focus();

    $('#enterRoom').click(function (evt) {
        evt.preventDefault();
        const nicknameInput = document.getElementById('nickname');
        let isBad = handleBadInputs(nicknameInput)
     
        if (isBad) {
            alert('Nickname is invalid.')
            
            return;
        }
        connectToChatserver()
        .then((_wssocket) => {
            // Continue with the rest of your code
            _wssocket.onmessage = onMessageReceived;
            console.table(serviceLocation);
        })
        .catch((error) => {
            console.warn("WebSocket connection couldn't be established:", error.message);
            // You can choose to ignore this and continue with the rest of your code
            // Or you can perform additional error handling if needed
        });

        $('.chat-wrapper h2').text('Chat # ' + $nickName.val() + "@" + room);
        $('.chat-signin').hide();
        $('.chat-wrapper').show();
        $('#cv').show();
        $message.focus();
    });
    $('#do-chat').submit(function (evt) {
        evt.preventDefault();
        sendMessage()
    });


    $('#do-sendInput').submit(function (evt) {
        evt.preventDefault();
        sendMessage()
    });

    $('#leave-room').click(function () {
        leaveRoom();
    });
})