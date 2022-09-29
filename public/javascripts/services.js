// Show an object on the screen.
function showObject(obj) {
  const pre = document.getElementById('response');
  const preParent = pre.parentElement;
  pre.innerText = JSON.stringify(obj, null, 4);
  preParent.classList.add('flashing');
  setTimeout(() => preParent.classList.remove('flashing'), 300);
}

// Axios responses have a lot of data. This shows only the most relevant data.
function showResponse(axiosResponse) {
  const fullResponse = axiosResponse.response === undefined
    ? axiosResponse
    : axiosResponse.response;
  const abridgedResponse = {
    data: fullResponse.data,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
  };
  showObject(abridgedResponse);
}

// IT IS UNLIKELY THAT YOU WILL WANT TO EDIT THE CODE ABOVE

// EDIT THE CODE BELOW TO SEND REQUESTS TO YOUR API

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

/**
 * You can use axios to make API calls like this:
 * const body = { bar: 'baz' };
 * axios.post('/api/foo', body)
 *   .then(showResponse) // on success (Status Code 200)
 *   .catch(showResponse); // on failure (Other Status Code)
 * See https://github.com/axios/axios for more info
 */

function listAll(fields) {
  axios.get('/bookmarks/')
    .then(showResponse)
    .catch(showResponse);
}

function addOne(fields) {
  // TODO2: Change the "get" below to the proper method
  axios.get('TODO1: RESTful API endpoint URL', fields) 
    .then(showResponse)
    .catch(showResponse);
}

function deleteOne(fields) {
  // TODO6: Change the "get" below to the proper method
  axios.get(`TODO5: RESTful API endpoint URL - You can include the input like this ${fields.name}`, fields)
    .then(showResponse)
    .catch(showResponse);
}

// IT IS UNLIKELY THAT YOU WILL WANT TO EDIT THE CODE BELOW

// map form (by id) to the function that should be called on submit
const formsAndHandlers = {
  'add-one': addOne,
  'list-all': listAll,
  'delete-one': deleteOne,
};

// attach handlers to forms
function init() {
  Object.entries(formsAndHandlers).forEach(([formID, handler]) => {
    const form = document.getElementById(formID);
    form.onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      (new FormData(form)).forEach((value, key) => {
        data[key] = value;
      });
      handler(data);
      return false; // don't reload page
    };
  });
}

window.onload = init; // attach handlers once DOM is ready
