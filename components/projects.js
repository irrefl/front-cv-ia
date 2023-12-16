const projects = () =>{
    const template = ` <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    <li class="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition duration-500">
      <div class="aspect-w-16 aspect-h-1 relative">
        <img src="chatbot.jpg" alt="Chatbot"
          class="object-cover object-center absolute inset-0 filter blur-sm mx-auto rounded-lg" />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        <div class="absolute inset-0 ring-4 ring-blue-600 ring-offset-4 ring-offset-gray-100"></div>
        <!-- Add this div for the water drop effect -->
        <div class="absolute inset-0 animate-drop opacity-50 scale-150">
          <img src="water-drop.png" alt="Water drop" class="object-cover object-center absolute inset-0" />
        </div>
      </div>
      <div class="p-4">
        <div class="flex justify-between my-0 z-">
          <strong>Chatbot</strong>
        </div>
        <ul class="flex mb-2">
          <li>
            <a href="#"
              class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:opacity-75">Live</a>
          </li>
          <li>
            <a href="#"
              class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:opacity-75">Code</a>
          </li>
        </ul>
        <p class="text-base md:text-base text-gray-700">
          Un chatbot que tiene la capacidad de platicar con mis
          clientes potenciales
        </p>
        <p class="flex mb-2">
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
        </p>
      </div>
    </li>
    <li class="bg-gray-100 shadow-lg rounded-lg overflow-hidden transition duration-500 ease-in-out">
      <div class="aspect-w-16 aspect-h-9 relative">
        <img src="eshopping.jpg" alt="EShopping App"
          class="object-cover object-center absolute inset-0 filter blur-sm mx-auto rounded-lg" />
        <div class="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        <div class="absolute inset-0 ring-4 ring-blue-600 ring-offset-4 ring-offset-gray-100"></div>
        <!-- Add this div for the water drop effect -->
        <div class="absolute inset-0 animate-drop opacity-50 scale-150">
          <img src="water-drop.png" alt="Water drop" class="object-cover object-center absolute inset-0" />
        </div>
      </div>
      <div class="p-4">
        <div class="flex justify-between my-1 -z-50" style="z-index: -9999">
          <strong>EShopping App</strong>
        </div>
        <ul class="flex mb-2">
          <li>
            <a href="#"
              class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:opacity-75">Live</a>
          </li>
          <li>
            <a href="#"
              class="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded hover:opacity-75">Code</a>
          </li>
        </ul>
        <p class="text-base md:text-base text-gray-700">
          Una aplicación de delivery con microservicios.
        </p>
        <p class="flex mt-2">
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">HTML</span>
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">CSS</span>
          <span class="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">JS</span>
        </p>
      </div>
    </li>
  </ul>`

  return template;
}

document.querySelector('#projects').innerHTML = projects();

