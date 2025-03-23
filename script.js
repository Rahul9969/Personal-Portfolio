'use strict';


const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


function openCertificate(src) {
  document.getElementById("certificate-modal").style.display = "flex";
  document.getElementById("certificate-image").src = src;
}

function closeCertificate() {
  document.getElementById("certificate-modal").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const navbarLinks = document.querySelectorAll(".navbar-link");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("iMRl4KMQ0gkmONe0M"); 
  document.getElementById("contactform").addEventListener("submit", function (event) {
      event.preventDefault();
      let userEmail = document.getElementById("email").value.trim();
      let formData = {
        to_name: document.getElementById("name").value,
        to_email: userEmail,
        from_email: "rahulkewat9768@gmail.com",
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value
    };
      console.log("Form Data:", formData);
      emailjs.send("service_21q17hp", "template_9twaumc", formData)
      .then(response => {
          alert("Message sent successfully!");
          console.log("EmailJS Response:", response);
          document.getElementById("contactform").reset();
      })
      .catch(error => {
          alert("Failed to send message. Check the console for details.");
          console.error("EmailJS Error:", error);
      });
  });
});
