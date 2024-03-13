import "./style.css";

function getBirthdayAsHTML(birthday) {
  return `<tr>
  <td>${birthday.name}</td>
  <td>${birthday.contact}</td>
  <td>${birthday.age}</td>
  <td>${birthday.url}</td>
  <td>${birthday.DOB}</td>
</tr>`;
}

function renderBirthdays(birthdays) {
  const birthdayHTML = birthdays.map(getBirthdayAsHTML);
  document.querySelector("#birthdayTable tbody").innerHTML = birthdayHTML.join("");
}

function loadBirthdays() {
  fetch("http://localhost:3000/birthdays.json").then(r =>
    r.json().then(birthdays => {
      renderBirthdays(birthdays);
    })
  );
}

loadBirthdays();
