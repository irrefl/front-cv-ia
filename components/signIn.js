const SignIn = () =>{

    const template = `<div class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 chat-signin">
    <div class="bg-gradient-to-b from-black via-black to-transparent fixed inset-0"></div>
    <div class="bg-white rounded-lg p-8 max-w-md mx-auto z-10 relative">
      <form class="form-signin">
        <h2 class="text-center text-green-700 text-lg font-bold mb-4">Chat</h2>
        <label class="block text-sm font-medium text-gray-700 mb-2" 
                for="nickname">e-mail</label>
        <input class="form-control w-full border rounded-md py-2 px-4" 
                oninput="handleBadInputs(this)" id="nickname"
                 placeholder="Use any email" />

        <div class="flex flex-col space-y-4">
          <label class="block text-sm font-medium text-gray-700 mb-2" for="chatroom">Chatroom</label>
          <select class="form-control w-full border rounded-md py-2 px-4" id="chatroom">
            <option>arduino</option>
            <option>java</option>
            <option>go</option>
            <option>scala</option>
          </select>
          <button type="submit"
              id="enterRoom"  
            class="border text-green-800 bg-blue-500 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-md text-base px-4 py-2 mb-2 transition-all duration-300 ease-in-out">
            Sign In
          </button>

        </div>
      </form>
    </div>
  </div>`

  return template;
}

document.querySelector('#SignInForm').innerHTML = SignIn();