// theme changes
$("#sketchy").click(function () {
  $("#theme").attr("href", "bootstrap.sketchy.css");
});

$("#dark").click(function () {
  $("#theme").attr("href", "bootstrap.superhero.css");
});

$("#light").click(function () {
  $("#theme").attr("href", "bootstrap.litera.css");
});

$("#cyberpunk").click(function () {
  $("#theme").attr("href", "bootstrap.vapor.css");
});

$("#hacker").click(function () {
  $("#theme").attr("href", "hacker.css");
});

//jQuery event handling
$(".modalButton").click((e) => openModal(e));
$(".close").click((e) => closeModal(e));
$(".modal").click((e) => outsideClick(e));

// Open a modal
function openModal(e) {
  $(".modal").hide();
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
  btn_Abattoir: {
    heading: "Abattoir",
    body: `<p>blah blah</p>
                        <p>
                            blahdeeblah blah.
                          </p>
                          <a href="https://www.google.com" target="_blank">link</a>`,
    footer: "Abattoir footer",
  },
  btn_hides_skin: {
    heading: "Hide/Skin Manufacturing",
    body: `<p>blah blah</p>
    <p>
        blahdeeblah blah.
      </p>
      <a href="https://www.google.com" target="_blank">link</a>`,
    footer: "Hide/Skin Manufacturing footer",
  },
  btn_cold_storage: {
    heading: "3PL Cold Store",
    body: `<p>blah blah</p>
    <p>
        blahdeeblah blah.
      </p>
      <a href="https://www.google.com" target="_blank">link</a>`,
    footer: "3PL Cold Store footer yay",
  },
  btn_hilton: {
    heading: "Hilton",
    body: `<p>blah blah</p>
    <p>
        blahdeeblah blah.
      </p>
      <a href="https://www.google.com" target="_blank">link</a>`,
    footer: "Hilton footer yay",
  },
  btn_International: {
    heading: "International",
    body: `<p>blah blah</p>
    <p>
        blahdeeblah blah.
      </p>
      <a href="https://www.google.com" target="_blank">link</a>`,
    footer: "International footer yay",
  },
  btn_supp_vendors: {
    heading: "Supplementary Vendors",
    body: `<p>blah blah</p>
    <p>
        blahdeeblah blah.
      </p>
      <a href="https://www.google.com" target="_blank">link</a>`,
    footer: "Supplementary Vendors footer yay",
  },
  btn_vendor_lines: {
    heading: "Vendor Lines",
    body: `<p>blah blah</p>
    <p>
        blahdeeblah blah.
      </p>
      <a href="https://www.google.com" target="_blank">link</a>`,
    footer: "Vendor Lines footer yay",
  },
  btn_wow_stores: {
    heading: "WOW Stores",
    body: `<p>blah blah</p>
    <p>
        blahdeeblah blah.
      </p>
      <a href="https://www.google.com" target="_blank">link</a>`,
    footer: "WOW Stores footer yay",
  },
  btn_agw_wholesale: {
    heading: "AGW (Wholesale)",
    body: `<p>blah blah</p>
    <p>
        blahdeeblah blah.
      </p>
      <a href="https://www.google.com" target="_blank">link</a>
      `,
    footer: "AGW (Wholesale) footer yay",
  },
};
