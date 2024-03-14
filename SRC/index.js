import "./style.css";

function $(selector) {
  return document.querySelector(selector);
}

function createBirthdayRequest(birthday) {
  return fetch("http://localhost:3000/birthdays-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(birthday)
  }).then(r => r.json());
}

function deleteBirthdayRequest(id) {
  return fetch("http://localhost:3000/birthdays-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }).then(r => r.json());
}

function getBirthdayAsHTML(birthday) {
  return `<tr>
  <td>${birthday.name}</td>
  <td>${birthday.contact}</td>
  <td>${birthday.age}</td>
  <td>${birthday.url}</td>
  <td>${birthday.DOB}</td>
  <td>
  <button type="button" data-id="${birthday.id}" class="action btn delete-btn">♻</button>
  </td>
</tr>`;
}

function renderBirthdays(birthdays) {
  const birthdayHTML = birthdays.map(getBirthdayAsHTML);
  $("#birthdayTable tbody").innerHTML = birthdayHTML.join("");
}

function loadBirthdays() {
  fetch("http://localhost:3000/birthdays-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r =>
    r.json().then(birthdays => {
      renderBirthdays(birthdays);
    })
  );
}
function onSubmit(e) {
  // console.warn("submit", e);
  e.preventDefault();

  const contact = $("input[name=contact]").value;
  const age = $("#age").value;
  const url = $("#url").value;
  const DOB = $("#DOB").value;

  const birthday = {
    name: $("input[name=name]").value,
    contact: contact,
    age: age,
    url,
    DOB: DOB
  };

  createBirthdayRequest(birthday).then(status => {
    // console.warn("status", status);
    if (status.success) {
      window.location.reload();
    }
  });
}

function initEvents() {
  $("#birthdaysForm").addEventListener("submit", onSubmit);

  $("#birthdayTable tbody").addEventListener("click", e => {
    if (e.target.matches("button.delete-btn")) {
      const id = e.target.dataset.id;
      deleteBirthdayRequest(id).then(status => {
        if (status.success) {
          window.location.reload();
        }
      });
    }
  });
}
initEvents();
loadBirthdays();
