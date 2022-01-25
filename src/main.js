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

  $(".modal-header h2").html(modal_dict[e.target.id].heading);
  $(".modal-body p").html(modal_dict[e.target.id].body);
  $(".modal-footer h3").html(modal_dict[e.target.id].footer);

  $(".modal").show();
}

// Close a modal
function closeModal(e) {
  //modal.style.display = 'none';
  $(".modal").hide();
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == document.querySelector(".modal")) {
    $(".modal").hide();
  }
}

// Create dict for modal content. key = button id.
const modal_dict = {
  btn1: {
    heading: "heading for btn 1",
    body: `<p>test btn 1</p>
                        <p>
                            blahdeeblah btn 1 blah.
                          </p>`,
    footer: "btn1 footer",
  },
  btn2: {
    heading: "heading for btn 2",
    body: `<p>test btn 2</p>
                        <p>
                            blahdeeblah btn 2 blah.
                          </p>`,
    footer: "btn2 footer",
  },
};
