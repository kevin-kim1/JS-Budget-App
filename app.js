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

})();

var controller = (function(budgetCtrl, UICtrl) {
    document.querySelector('.add__btn').addEventListener('click', function() {
        // 1. Get the field data
        // 2. add the item to budget controller
        // 3. add the item to the UI
        // 4. calculate budget
        // 5. display new budget on the UI
    });

    document.addEventListener('keypress', function(event) {
        if(event.keycode === 13 || event.which === 13) {
            console.log('Enter was pressed!');
        }
    });
})(budgetController, UIController);
