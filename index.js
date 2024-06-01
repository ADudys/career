// const employee = {
//   personalInfo: {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       state: "NY",
//       postalCode: "12345",
//     },
//   },
//   employmentDetails: {
//     position: "Software Engineer",
//     department: "Engineering",
//     startDate: "2022-01-01",
//     endDate: null,
//     manager: {
//       firstName: "Alice",
//       lastName: "Smith",
//       email: "alice@example.com",
//     },
//   },
// };
// console.log(employee)

// function getEmploeeInfo(key) {
//   const personalKeys = Object.keys(employee.personalInfo);
//   const employmentKeys = Object.keys(employee.employmentDetails);

//   const keysArray = personalKeys.concat(employmentKeys);

//   if (keysArray.includes(key)) {
//     if (personalKeys.includes(key)) {
//       console.log(employee.personalInfo[key]);
//     }

//     if (employmentKeys.includes(key)) {
//       console.log(employee.employmentDetails[key]);
//     }
//   } else {
//     return console.log("Klucz nie istnieje");
//   }
// }
// getEmploeeInfo("firstName");
// getEmploeeInfo("lastName");
// getEmploeeInfo("position");
// getEmploeeInfo("street");
// getEmploeeInfo("address");
