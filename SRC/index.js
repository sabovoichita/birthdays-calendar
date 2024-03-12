import "./style.css";

function loadBirthdays() {
  fetch("birthdays.json").then(r =>
    r.json().then(birthdays => {
      console.warn("birthdays?", birthdays);
    })
  );
}

loadBirthdays();
