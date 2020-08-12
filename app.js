var budgetController = (function () {
    var x = 23;
    var add = function(a) {
      return x + a;
    }

    return {
      publicTest:  function(b) {
        return (add(b));
      }
    }
})();


var UIController = (function() {
  var DOMStrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value'
  }
    return {
              getInput: function() {
                return {
                    type: document.querySelector(DOMStrings.inputType).value,
                    desc: document.querySelector(DOMStrings.inputDesc).value,
                    value: document.querySelector(DOMStrings.inputValue).value
                };
              },
              getDOMStrings: function () {
                return DOMStrings;
              }
          };
})();

var controller = (function(budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMStrings;
    var ctrlAddItem = function() {
        // 1. Get the field data
        var input = UICtrl.getInput();
        // 2. add the item to budget controller
        // 3. add the item to the UI
        // 4. calculate budget
        // 5. display new budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if(event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);
