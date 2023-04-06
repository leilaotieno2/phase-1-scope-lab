let customerName = 'bob';
let bestCustomer;
const leastFavoriteCustomer = 'not bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

module.exports = {
  customerName,
  leastFavoriteCustomer,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
