// Get DOM Elements
//const modal = document.querySelector('.modal');

// non jQuery event handling
//window.addEventListener('click', outsideClick);

//jQuery event handling
$(".modalButton").click((e) => openModal(e));
$(".close").click((e) => closeModal(e));
$(".modal").click((e) => outsideClick(e));

// Open a modal
function openModal(e) {
  console.log("printing e:");
  console.log(e.target);

  //modal.style.display = 'block';
  console.log(document.getElementsByClassName("modal-header"));

  $(".modal-header h2").html(e.target.id);
  $(".modal-body p:nth-child(1)").html(
    "Button clicked, id: " + e.target.className
  ); // Added to second paragraph with :nth-child(2)
  $(".modal-body p:nth-child(2)").html("Button clicked, id: " + e.target.id); // Added to second paragraph with :nth-child(2)
  $(".modal").show();
}

// Close a modal
function closeModal(e) {
  //modal.style.display = 'none';
  $(".modal").hide();
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == document.querySelector('.modal')) {
    $(".modal").hide();
  }
}
