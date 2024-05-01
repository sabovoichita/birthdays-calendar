import "./style.css";

let editId;
let allBirthdays = [];

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

function updateBirthdayRequest(birthday) {
  return fetch("http://localhost:3000/birthdays-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(birthday)
  }).then(r => r.json());
}

function getBirthdayAsHTML(birthday) {
  const url = birthday.url;
  const displayUrl = url.startsWith("https://www") ? url.substring(12) : url;
  return `<tr>
  <td>${birthday.name}</td>
  <td>${birthday.contact}</td>
  <td>${birthday.age}</td>
  <td>
  <a href = " ${url}"  target = "_blank">${displayUrl}</a>
  </td>
  <td>${birthday.dob}</td>
  <td>
  <button type="button" data-id="${birthday.id}" class="action-btn edit-btn" title="edit">🖍</button>
  <button type="button" data-id="${birthday.id}" class="action-btn delete-btn" title="recycle">♻</button>

  </td>
</tr>`;
}

function areBirthdayEquals(renderedBirthdays, birthdays) {
  if (renderedBirthdays === birthdays) {
    // console.info("same array");
    return true;
  }
  if (renderedBirthdays.length === birthdays.length) {
    const eq = renderedBirthdays.every((birthday, i) => birthday === birthday[i]);
    if (eq) {
      // console.info("same content in arrays");
      return true;
    }
  }
  return false;
}

let renderedBirthdays = [];
function renderBirthdays(birthdays) {
  // console.time("eq-check");
  if (areBirthdayEquals(renderedBirthdays, birthdays)) {
    // console.timeEnd("eq-check");
    return;
  }
  // console.timeEnd("eq-check");

  renderedBirthdays === birthdays;
  // console.time("render");
  const birthdayHTML = birthdays.map(getBirthdayAsHTML);
  $("#birthdayTable tbody").innerHTML = birthdayHTML.join("");
  // console.timeEnd("render");
}

function loadBirthdays() {
  fetch("http://localhost:3000/birthdays-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r =>
    r.json().then(birthdays => {
      allBirthdays = birthdays;
      renderBirthdays(birthdays);
      // console.timeEnd("app-ready");
    })
  );
}
function onSubmit(e) {
  // console.warn("submit", e);
  e.preventDefault();

  const birthday = getBirthdayValues();

  if (editId) {
    birthday.id = editId;
    // console.warn("should we edit?", editId, birthday);
    updateBirthdayRequest(birthday).then(status => {
      // console.warn("status", status);
      if (status.success) {
        // window.location.reload();
        birthday.id = status.id;
        allBirthdays = allBirthdays.map(birthday => birthday);
        allBirthdays.push(birthday);
        renderBirthdays(allBirthdays);
        $("#birthdayForm").reset();
      }
    });
  } else
    createBirthdayRequest(birthday).then(status => {
      // console.warn("status", status);
      if (status.success) {
        window.location.reload();
      }
    });
}

function startEdit(id) {
  editId = id;
  const birthday = allBirthdays.find(birthday => birthday.id === id);
  // console.warn("edit", id, birthday);
  setBithdayValues(birthday);
}

function getBirthdayValues() {
  const name = $("input[name=name]").value;
  const contact = $("input[name=contact]").value;
  const age = $("input[name=age]").value;
  const url = $("input[name=url]").value;
  const dob = $("input[name=dob]").value;

  return {
    name: name,
    contact: contact,
    age: age,
    url,
    dob
  };
}

function setBithdayValues(birthday) {
  $("input[name=name]").value = birthday.name;
  $("input[name=contact]").value = birthday.contact;
  $("input[name=age]").value = birthday.age;
  $("input[name=url]").value = birthday.url;
  $("input[name=dob]").value = birthday.dob;
}

function filterElements(birthdays, search) {
  search = search.toLowerCase();
  // console.warn("search %o", search);
  return birthdays.filter(birthday => {
    // console.log("birthday", birthday.name === search);
    return (
      birthday.name.toLowerCase().includes(search) ||
      birthday.contact.toLowerCase().includes(search) ||
      birthday.age.toLowerCase().includes(search) ||
      birthday.url.toLowerCase().includes(search) ||
      birthday.dob.toLowerCase().includes(search)
    );
  });
}

function initEvents() {
  $("#search").addEventListener("input", e => {
    const search = e.target.value;
    const birthdays = filterElements(allBirthdays, search);
    renderBirthdays(birthdays);
  });

  $("#birthdayForm").addEventListener("submit", onSubmit);
  $("#birthdayForm").addEventListener("reset", () => {
    // console.warn("reset", editId);
    editId = undefined;
  });

  $("#birthdayTable tbody").addEventListener("click", e => {
    if (e.target.matches("button.delete-btn")) {
      const id = e.target.dataset.id;
      deleteBirthdayRequest(id).then(status => {
        if (status.success) {
          allBirthdays = allBirthdays.filter(birthday => birthday.id !== id);
          renderBirthdays(allBirthdays);
        }
      });
    } else if (e.target.matches("button.edit-btn")) {
      const id = e.target.dataset.id;

      startEdit(id);
    }
  });
}
initEvents();
loadBirthdays();
