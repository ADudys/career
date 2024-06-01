const employee = [
  {
    personalInfo: [
      ["firstName", "John"],
      ["lastName", "Doe"],
      ["age", 30],
      [
        "address",
        [
          ["city", "Anytown"],
          ["state", "NY"],
          ["postalCode", "12345"],
        ],
      ],
    ],
  },
  {
    employmentDetails: [
      ["position", "Software Engineer"],
      ["department", "Engineering"],
      ["startDate", "2022-01-01"],
      ["endDate", null],
      [
        "manager",
        [
          ["firstName", "Alice"],
          ["lastName", "Smith"],
          ["email", "alice@example.com"],
        ],
      ],
    ],
  },
];

const personalHalf = employee[0].personalInfo;
const employmentHalf = employee[1].employmentDetails;

const getKeys = () => {
  var keys = [];
  for (let i = 0; i < personalHalf.length; i += 1) {
    let personalKeys = personalHalf[i][0];
    keys.push(personalKeys);
  }
  for (let i = 0; i < employmentHalf.length; i += 1) {
    let employmentKeys = employmentHalf[i][0];
    keys.push(employmentKeys);
  }
  return keys;
};

function getEmploeeInfo(key) {
  const keys = getKeys();
  if (keys.includes(key)) {
    for (let i = 0; i < personalHalf.length; i += 1) {
      let personalKeys = personalHalf[i][0];
      if (personalKeys.includes(key)) {
        console.log(personalHalf[i][1]);
        break;
      }}
      for (let i = 0; i < employmentHalf.length; i += 1) {
        let employmentKeys = employmentHalf[i][0];
        if (employmentKeys.includes(key)) {
          console.log(employmentHalf[i][1]);

          break;
        
      }
    }
  } else {
    console.log("Nie ma takiego klucza");
  }
}

getEmploeeInfo("firstName");
getEmploeeInfo("lastName");
getEmploeeInfo("position");
getEmploeeInfo("street");
getEmploeeInfo("address");
