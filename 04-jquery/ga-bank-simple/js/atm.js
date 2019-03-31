const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = + $('#checking-balance').text().slice(1);
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  const savingsBalance = + $('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
}

$(document).ready(function () {

  checkForZero();

  $('#checking-deposit').on('click', function () {
    const amount = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const newBalance = currentBalance + amount;
    $('#checking-balance').text('$' + newBalance);
    $('#checking-amount').val('').focus();

    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const otherBalance = + $('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
      $('#checking-amount').val('').focus();
    } else if (amount <= totalBalance) {
      $('#checking-balance').text('$0');
      $('#savings-balance').text('$' + (otherBalance + newBalance));
      $('#checking-amount').val('').focus();
    }

    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const amount = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);

    const newBalance = currentBalance + amount;
    $('#savings-balance').text('$' + newBalance);
    $('#savings-amount').val('').focus();

    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);

    const otherBalance = + $('#checking-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
      $('#savings-amount').val('').focus();
    } else if (amount <= totalBalance) {
      $('#savings-balance').text('$0');
      $('#checking-balance').text('$' + (otherBalance + newBalance));
      $('#savings-amount').val('').focus();
    }

    checkForZero();
  });
});
