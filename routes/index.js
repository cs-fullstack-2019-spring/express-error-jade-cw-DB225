const express = require('express');
var router = express.Router();

//route for exercise1
router.get('/exercise1/:replace/:replace2', (request, response) =>{
    context = {
        placeholder: request.params.replace,
        placeholder2: request.params.replace2
    };
    response.render('exercise1', context)
});

//route for exercise2
router.get('/exercise2/:placeholder', (request, response) =>{
    var temp = '';
    if(request.params.placeholder < 0){
        var temp = 'Less than';
    }
    else if(request.params.placeholder > 0){
        temp = 'Greater than';
    }
    else{
        temp = "Either zero either string character";
    }
    response.render('exercise2',{placeholder: temp});
});

//route for exercise3
router.get('/exercise3/', (request, response) =>{
    response.render('exercise3');
});

module.exports = router;