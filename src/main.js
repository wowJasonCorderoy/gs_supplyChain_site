
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const Btn1 = document.querySelector('#btn1');
const Btn2 = document.querySelector('#btn2');
const closeBtn = document.querySelector('.close');

Btn1.addEventListener('click', openModal);
Btn2.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  console.log(this);
  //alert("Button clicked, id: "+this.id+", text: "+this.innerHTML);
  
  
  var tt = "Button clicked, id: "+this.id+", text: "+this.innerHTML
  modal.style.display = 'block';
  console.log(document.getElementsByClassName("modal-header"));

  $('.modal-header h2').html( this.id );
  $('.modal-body p:nth-child(2)').html( "Button clicked, id: "+this.id ); // Added to second paragraph with :nth-child(2)

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

