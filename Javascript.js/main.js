console.log("customers",customers);
let addressEResult = document.querySelector(".emailContain");
customers
  .map(customer => customer.contacts.email)
  .forEach(customer => {
    console.log(customer);
    addressEResult.innerHTML += `<div>${customer.join(", ")}</div><br><hr>`;
  });