//BUDGET CONTROLLER
var budgetController = (function() {
  //Some Code
})();

//UI CONTROLLER
var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        desription: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMStrings: function() {
      return DOMstrings;
    }
  };
})();

//GLOBAL APP CONTROLLER
var contoller = (function(budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMStrings();
  var setupEventListeners = function() {
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keycode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    // 1. Get the field input data
    var input = UICtrl.getInput();
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on UI
  };

  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  };
})(budgetController, UIController);

contoller.init();
