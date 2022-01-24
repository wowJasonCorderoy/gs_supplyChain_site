
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Events
// if(modalBtn){modalBtn.addEventListener('click', openModal);}
// if(closeBtn){closeBtn.addEventListener('click', closeModal);}
// if(window){window.addEventListener('click', outsideClick);}


// Open
function openModal() {
  console.log(this);
  alert("Button clicked, id: "+this.id+", text: "+this.innerHTML);
  var tt = "ghjjh"
  modal.style.display = 'block';
  document.getElementById('my-modal').innerHTML = `<div class="modal-content">
  <div class="modal-header">
    <span class="close">&times;</span>
    <h2>Modal Header 22</h2>
  </div>
  <div class="modal-body">
    <p>New heading!!</p>
    <p>
      ${tt}
    </p>
  </div>
  <div class="modal-footer">
    <h3>Modal Footer</h3>
  </div>
</div>`
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

