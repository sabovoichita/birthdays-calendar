import "./style.css";

const isDemo = location.host === "sabovoichita.github.io";

const API = {
  CREATE: {
    URL: "http://localhost:3000/birthdays-json/create",
    METHOD: "POST"
  },
  READ: {
    URL: "http://localhost:3000/birthdays-json",
    METHOD: "GET"
  },
  UPDATE: {
    URL: "http://localhost:3000/birthdays-json/update",
    METHOD: "PUT"
  },
  DELETE: {
    URL: "http://localhost:3000/birthdays-json/delete",
    METHOD: "DELETE"
  }
};
let editId;
let allBirthdays = [];

// for demo purposes...
if (isDemo) {
  API.READ.URL = "./data/birthdays.json";
  API.DELETE.URL = "./data/delete.json";
  API.CREATE.URL = "./data/create.json";
  API.UPDATE.URL = "./data/update.json";

  API.DELETE.METHOD = "GET";
  API.CREATE.METHOD = "GET";
  API.UPDATE.METHOD = "GET";
}

function $(selector) {
  return document.querySelector(selector);
}

function createBirthdayRequest(birthday) {
  return fetch(API.CREATE.URL, {
    method: API.CREATE.METHOD,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(birthday)
  }).then(r => r.json());
}

function deleteBirthdayRequest(id) {
  return fetch(API.DELETE.URL, {
    method: API.DELETE.METHOD,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }).then(r => r.json());
}

function updateBirthdayRequest(birthday) {
  return fetch(API.UPDATE.URL, {
    method: API.UPDATE.METHOD,
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
  <td>${formatDate(birthday.dob)}</td>
  <td>
  <button type="button" data-id="${birthday.id}" class="action-btn edit-btn" title="edit">🖍</button>
  <button type="button" data-id="${birthday.id}" class="action-btn delete-btn" title="recycle">♻</button>

  </td>
</tr>`;
}

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("/");
  return `${day}/${month}/${year}`;
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
  // Ensure that the age is updated based on today's date for each birthday
  birthdays.forEach(birthday => {
    birthday.age = calculateAgeFromDOB(birthday.dob);
  });

  // Check if the rendered birthdays are the same as the new birthdays to avoid unnecessary rendering
  if (areBirthdayEquals(renderedBirthdays, birthdays)) {
    return;
  }

  // Update the rendered birthdays to the current list
  renderedBirthdays = birthdays;

  // Generate the HTML for the birthday rows
  const birthdayHTML = birthdays.map(getBirthdayAsHTML);
  $("#birthdayTable tbody").innerHTML = birthdayHTML.join("");
}

// Function to calculate the age from the dob (yyyy/mm/dd)
function calculateAgeFromDOB(dob) {
  const [year, month, day] = dob.split("/");
  const birthdayDate = new Date(`${year}-${month}-${day}`);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthdayDate.getMonth();
  const dayDifference = currentDate.getDate() - birthdayDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

function loadBirthdays() {
  return fetch(API.READ.URL, {
    method: API.READ.METHOD,
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
  return birthdays.filter(({ name, contact, age, url, dob }) => {
    // console.log("birthday", birthday.name === search);
    return (
      name.toLowerCase().includes(search) ||
      contact.toLowerCase().includes(search) ||
      String(age).toLowerCase().includes(search) ||
      url.toLowerCase().includes(search) ||
      dob.toLowerCase().includes(search)
    );
  });
}

function sortByName(a, b) {
  console.log("sorting by name");
  return a.name.localeCompare(b.name);
}

function sortBirthdays(birthdays, sortBy, sortOrder) {
  const sortedBirthdays = birthdays.sort(); // Create a copy of birthdays array
  sortedBirthdays.sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });
  return sortedBirthdays.sort(sortByName);
}

function initEvents() {
  // Search input event listener
  $("#search").addEventListener("input", e => {
    const search = e.target.value;
    const filteredBirthdays = filterElements(allBirthdays, search);
    renderBirthdays(filteredBirthdays); // Only render the filtered birthdays
  });

  // Set up an interval to refresh the ages once a day
  setInterval(() => {
    allBirthdays.forEach(birthday => {
      birthday.age = calculateAgeFromDOB(birthday.dob);
    });
    renderBirthdays(allBirthdays);
  }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

  $("#birthdayForm").addEventListener("submit", onSubmit);
  $("#birthdayForm").addEventListener("reset", () => {
    editId = undefined;
  });

  document.querySelectorAll("#birthdayTable th span").forEach(span => {
    span.addEventListener("click", () => {
      const sortBy = span.dataset.sortBy;
      const sortOrder = span.dataset.sortOrder === "asc" ? "desc" : "asc"; // Toggle sorting order
      span.dataset.sortOrder = sortOrder;

      const sortedBirthdays = sortBirthdays(allBirthdays, sortBy, sortOrder);
      renderBirthdays(sortedBirthdays);
    });
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

const createStructure = () => {
  return `
    <div class="container">
      <h3>Age Calculator</h3>
      <div class="form">
        <label for="birthday">Enter date of birth</label>
        <input type="date" name="birthday" id="birthday" />
        <button id="btn">Calculate Age</button>
        <p id="result">Your age is___years old</p>
      </div>
    </div>
    `;
};

const insertHTML = () => {
  document.querySelector("#calcAge").innerHTML = createStructure();
};

const calculateAge = () => {
  const birthdayEl = document.querySelector("#birthday");
  const resultEl = document.querySelector("#result");
  const birthdayValue = birthdayEl.value;

  if (!birthdayValue) {
    alert("Please enter your birthday");
    return;
  }

  const age = getAge(birthdayValue);
  resultEl.innerText = `Your age is ${age} year${age !== 1 ? "s" : ""} old`;
};

const getAge = birthdayValue => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  const monthDifference = currentDate.getMonth() - birthdayDate.getMonth();
  const dayDifference = currentDate.getDate() - birthdayDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return age;
};

insertHTML();

const btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", calculateAge);
