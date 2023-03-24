// Get the form, input, and items list
const form = document.querySelector('form');
const input = document.querySelector('input');
const itemsList = document.querySelector('.items');

// Function to create a new item
function createNewItem(text) {
  // Create a new list item
  const item = document.createElement('li');

  // Create a div to hold the item text and buttons
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item-div');

  // Create a span to hold the item text
  const itemText = document.createElement('span');
  itemText.innerText = text;
  itemDiv.appendChild(itemText);

  // Create a div to hold the item buttons
  const itemActions = document.createElement('div');
  itemActions.classList.add('actions');

  // Create a button to mark item as urgent
  const urgentBtn = document.createElement('button');
  urgentBtn.innerText = 'Mark Urgent';
  urgentBtn.classList.add('urgent');
  urgentBtn.addEventListener('click', function() {
    item.classList.toggle('urgent');
  });
  itemActions.appendChild(urgentBtn);

  // Create a button to mark item as completed
  const completedBtn = document.createElement('button');
  completedBtn.innerText = 'Mark Completed';
  completedBtn.classList.add('completed');
  completedBtn.addEventListener('click', function() {
    item.classList.toggle('completed');
  });
  itemActions.appendChild(completedBtn);

  // Create a button to edit the item
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('edit');
  editBtn.addEventListener('click', function() {
    const newText = prompt('Enter new text');
    if (newText) {
      itemText.innerText = newText;
    }
  });
  itemActions.appendChild(editBtn);

  // Create a button to delete the item
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', function() {
    item.remove();
  });
  itemActions.appendChild(deleteBtn);

  itemDiv.appendChild(itemActions);
  item.appendChild(itemDiv);

  // Add the new item to the list
  itemsList.appendChild(item);
}

// Function to handle form submission
function handleFormSubmit(event) {
  // Prevent page refresh on form submission
  event.preventDefault();

  // Get the input value
  const inputValue = input.value.trim();

  // If the input value is not empty, create a new item
  if (inputValue !== '') {
    createNewItem(inputValue);
    // Clear the input field
    input.value = '';
    // Set focus on the input field
    input.focus();
  }
}

// Add event listener to the form
form.addEventListener('submit', handleFormSubmit);
