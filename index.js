let customerName = "bob";

function returnCustomerName() {
  return customerName;
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

let bestCustomer = "initial best customer";

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "initial least favorite customer";

function attemptLeastFavoriteCustomerChange() {
  leastFavoriteCustomer = "new least favorite customer";
  // This will result in an error because const variables cannot be reassigned
}
