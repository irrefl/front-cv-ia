const hireMe = () =>{
    const template = `  <div class="chat-wrapper mx-auto w-1/2 hidden" style="z-index: 9999">
    <form id="do-chat">
      <h2 class="text-center text-2xl text-green-500 mb-4">
        Chat #admin@scala
      </h2>
      <table id="response" class="table table-bordered"></table>
      <fieldset class="border rounded-md p-4">
        <legend class="text-xl font-bold text-center">
          Interactive Curriculum Vitae
        </legend>
        <div class="flex flex-col space-y-4">
          <input type="text" class="w-full border rounded-md py-2 px-4" placeholder="Your message..." id="messagec" />
          <input type="submit"
            class="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-white mr-2 mb-2"
            value="Hire" />
          <button class="btn btn-outline-primary w-full" type="button" id="leave-room">
            Leave room
          </button>
        </div>
      </fieldset>
    </form>
  </div>`
  return template;
}