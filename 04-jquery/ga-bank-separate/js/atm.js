// This code knows nothing of the rules for deposits or withdrawals.
// Its job is to connect event handlers (and user interaction) with the
// corresponding operations in accounts.js.

// It also provides a much-used render() function which updates all
// aspects of the page with the precise current balances and zero
// styling, all in one place:

const render = function () {
  $('#checking-balance').text('$' + accounts.checkingBalance);
  $('#savings-balance').text('$' + accounts.savingsBalance);

  $('.zero').removeClass('zero');

  if (accounts.checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  if (accounts.savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
};

// All the event handlers must wait for the DOM to be ready before
// they can be attached.
$(document).ready(function () {
  render(); // Update the page with balances and zeros ASAP.

  $('#checking-deposit').on('click', function () {
    const amount = $('#checking-amount').val();
    $('#checking-amount').val('').focus();
    accounts.checkingDeposit(amount);
    render();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = $('#checking-amount').val();
    $('#checking-amount').val('').focus();
    accounts.checkingWithdraw(amount);
    render();
  });

  $('#savings-deposit').on('click', function () {
    const amount = $('#savings-amount').val();
    $('#savings-amount').val('').focus();
    accounts.savingsDeposit(amount);
    render();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = $('#savings-amount').val();
    $('#savings-amount').val('').focus();
    accounts.savingsWithdraw(amount);
    render();
  });
});
