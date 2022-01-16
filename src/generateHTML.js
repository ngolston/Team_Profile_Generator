const htmlBlank = `<!DOCTYPE html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- css -->
    <link rel="stylesheet" href="./styles.css">

    <title>TEAM PROFILE</title>
</head>


<body>
    <header class="header-bg" style="width: 100%;">
        <div class="text-white text-center">
            <h1>My Team</h1>
        </div>
    </header>
    
    <div class="container">
        <div class="row">`;

createCards = (role, name, email, id, specialAttr) => {
  return `<div class="col-sm-4 mt-5">
    <div class="card">
        <div class="card-header">
            <h5>${name}</h5>
            <h6><i>${role} </i></h6>
        </div>
        <div class="card-body">
            <p class="subtitle">ID: ${id}</p>
            <p class="subtitle">Email: ${email}</p>
            <p class="subtitle">${specialAttr}</p>
        </div>
    </div>
</div>`;
};

createEmployeeCard = (employee) => {
  const role = employee.getRole();
  let specialAttr;

  if (role === "Manager") {
    specialAttr = "Office Number: " + employee.getOfficeNo();
  }

  if (role === "Engineer") {
    specialAttr = "Github: " + employee.getGithub();
  }

  if (role === "Intern") {
    specialAttr = "School: " + employee.getSchool();
  }

  return createCards(
    role,
    employee.getName(),
    employee.getEmail(),
    employee.getId(),
    specialAttr
  );
};

generateHtml = (teamArray) => {
  let html = htmlBlank;

  for (let index = 0; index < teamArray.length; index++) {
    const employee = teamArray[index];
    const card = createEmployeeCard(employee);
    html += card;
  }

  return html;
};

module.exports = {
  generateHtml,
};
