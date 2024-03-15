# live link[Birthdays-Calendar-List](https://sabovoichita.github.io/Birthdays-Calendar-List/)

# 💌 Birthdays-Calendar-List

A Birthday Calendar List to store all important information (name, contact, age, url, DOB).

## 🎂 Features and Usage

- [x] Birthday Calendar List (CRUD\*) Operations

  - [x] **C**reate
  - [x] **R**ead
  - [x] **U**pdate
  - [x] **D**elete

- [ ] Search

- [ ] Loading Mask

## ‼ Start (Daily usage)

Start node-API

```sh
cd C:/Users/kita/Desktop/Projects/toDo-node
```

start app(run in current project):

```sh
npm start
```

or

```sh
Shift+RightClick in node folder to open PowerShell
and
npm start
```

## JSon file as storage

-modify content to fit your needs

// GET birthdays-json
fetch("http://localhost:3000/birthdays-json", {
method: "GET",
headers: {
"Content-Type": "application/json"
}
});

// POST birthdays-json/create
fetch("http://localhost:3000/birthdays-json/create", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name:"firstName lastName"
contact: "Country",
age: "number",
url: "https://www.google.com",
dob: "yyyy/mm/dd"
})
});

// DELETE birthdays-json/delete
fetch("http://localhost:3000/birthdays-json/create", {
method: "DELETE",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ id: "fedcba1610309909431" })
});

// PUT birthdays-json/update
fetch("http://localhost:3000/birthdays-json/update", {
method: "PUT",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
id: "fedcba1610310163146",
name:"firstName lastName"
contact: "Country",
age: "number",
url: "https://google.com",
dob: "yyyy/mm/dd"
})
});
