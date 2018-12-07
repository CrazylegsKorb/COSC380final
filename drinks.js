const request = require("request");

//Searches drink DB by ingredient
const searchIngredient = (search, callback) => {
    request(
        {
            url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`,
            json: true
        },
        (error, response, body) => {    
            try{
                if(!error && response.statusCode === 200){
                    callback(undefined,{
                        matchingDrinks: body.drinks,
                        drinkid: body.drinks[0].idDrink
                    });
                } else{
                    callback("The API may be down :(");
                }
            }catch(err){
                console.log(`Any drinks containing ${search} could not be found in the database\nPlease try again`);
            }
        }
    );
};

//searches drink DB by drinkID
const searchID = (id, callback) => {
    request(
        {
            url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
            json: true
        },
        (error, response, body) => {
            try{
                if(!error && response.statusCode === 200){
                    callback(undefined,{
                        body: body,
                        name: body.drinks[0].strDrink,
                        id: body.drinks[0].idDrink,
                        glass: body.drinks[0].strGlass,
                        alcoholic: body.drinks[0].strAlcoholic,
                        instructions: body.drinks[0].strInstructions,
                        pic: body.drinks[0].strDrinkThumb,
                        in1: body.drinks[0].strIngredient1,
                        in2: body.drinks[0].strIngredient2,
                        in3: body.drinks[0].strIngredient3,
                        in4: body.drinks[0].strIngredient4,
                        in5: body.drinks[0].strIngredient5,
                        in6: body.drinks[0].strIngredient6,
                        in7: body.drinks[0].strIngredient7,
                        in8: body.drinks[0].strIngredient8,
                        in9: body.drinks[0].strIngredient9,
                        in10: body.drinks[0].strIngredient10,
                        in11: body.drinks[0].strIngredient11,
                        in12: body.drinks[0].strIngredient12,
                        in13: body.drinks[0].strIngredient13,
                        in14: body.drinks[0].strIngredient14,
                        in15: body.drinks[0].strIngredient15,
                        me1: body.drinks[0].strMeasure1,
                        me2: body.drinks[0].strMeasure2,
                        me3: body.drinks[0].strMeasure3,
                        me4: body.drinks[0].strMeasure4,
                        me5: body.drinks[0].strMeasure5,
                        me6: body.drinks[0].strMeasure6,
                        me7: body.drinks[0].strMeasure7,
                        me8: body.drinks[0].strMeasure8,
                        me9: body.drinks[0].strMeasure9,
                        me10: body.drinks[0].strMeasure10,
                        me11: body.drinks[0].strMeasure11,
                        me12: body.drinks[0].strMeasure12,
                        me13: body.drinks[0].strMeasure13,
                        me14: body.drinks[0].strMeasure14,
                        me15: body.drinks[0].strMeasure15
                    });
                } else{
                    callback("The API may be down :(");
                }
            }catch(err){
                console.log(`No drinks found with an ID of :${id}\nPlease try again`);
            }
        }
    );
};
//searches drink DB by name
const searchName = (name, callback) => {
    request(
        {
            url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
            json: true
        },
        (error, response, body) => {
            try{
                if(!error && response.statusCode === 200){
                    callback(undefined,{
                        body: body,
                        name: body.drinks[0].strDrink,
                        id: body.drinks[0].idDrink,
                        glass: body.drinks[0].strGlass,
                        alcoholic: body.drinks[0].strAlcoholic,
                        instructions: body.drinks[0].strInstructions,
                        pic: body.drinks[0].strDrinkThumb,
                        in1: body.drinks[0].strIngredient1,
                        in2: body.drinks[0].strIngredient2,
                        in3: body.drinks[0].strIngredient3,
                        in4: body.drinks[0].strIngredient4,
                        in5: body.drinks[0].strIngredient5,
                        in6: body.drinks[0].strIngredient6,
                        in7: body.drinks[0].strIngredient7,
                        in8: body.drinks[0].strIngredient8,
                        in9: body.drinks[0].strIngredient9,
                        in10: body.drinks[0].strIngredient10,
                        in11: body.drinks[0].strIngredient11,
                        in12: body.drinks[0].strIngredient12,
                        in13: body.drinks[0].strIngredient13,
                        in14: body.drinks[0].strIngredient14,
                        in15: body.drinks[0].strIngredient15,
                        me1: body.drinks[0].strMeasure1,
                        me2: body.drinks[0].strMeasure2,
                        me3: body.drinks[0].strMeasure3,
                        me4: body.drinks[0].strMeasure4,
                        me5: body.drinks[0].strMeasure5,
                        me6: body.drinks[0].strMeasure6,
                        me7: body.drinks[0].strMeasure7,
                        me8: body.drinks[0].strMeasure8,
                        me9: body.drinks[0].strMeasure9,
                        me10: body.drinks[0].strMeasure10,
                        me11: body.drinks[0].strMeasure11,
                        me12: body.drinks[0].strMeasure12,
                        me13: body.drinks[0].strMeasure13,
                        me14: body.drinks[0].strMeasure14,
                        me15: body.drinks[0].strMeasure15
                    });
                } else{
                    callback("The API may be down :(");
                }
            }catch(err){
                console.log(`${name} cannot be found\nPlease try again`);
            }
        }
    );
};
//returns a random drink from the DB
const rand = (callback) => {
    request(
        {
            url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
            json: true
        },
        (error, response, body) => {
            try{
                if(!error && response.statusCode === 200){
                    callback(undefined,{
                        body: body,
                        name: body.drinks[0].strDrink,
                        id: body.drinks[0].idDrink,
                        glass: body.drinks[0].strGlass,
                        alcoholic: body.drinks[0].strAlcoholic,
                        instructions: body.drinks[0].strInstructions,
                        pic: body.drinks[0].strDrinkThumb,
                        in1: body.drinks[0].strIngredient1,
                        in2: body.drinks[0].strIngredient2,
                        in3: body.drinks[0].strIngredient3,
                        in4: body.drinks[0].strIngredient4,
                        in5: body.drinks[0].strIngredient5,
                        in6: body.drinks[0].strIngredient6,
                        in7: body.drinks[0].strIngredient7,
                        in8: body.drinks[0].strIngredient8,
                        in9: body.drinks[0].strIngredient9,
                        in10: body.drinks[0].strIngredient10,
                        in11: body.drinks[0].strIngredient11,
                        in12: body.drinks[0].strIngredient12,
                        in13: body.drinks[0].strIngredient13,
                        in14: body.drinks[0].strIngredient14,
                        in15: body.drinks[0].strIngredient15,
                        me1: body.drinks[0].strMeasure1,
                        me2: body.drinks[0].strMeasure2,
                        me3: body.drinks[0].strMeasure3,
                        me4: body.drinks[0].strMeasure4,
                        me5: body.drinks[0].strMeasure5,
                        me6: body.drinks[0].strMeasure6,
                        me7: body.drinks[0].strMeasure7,
                        me8: body.drinks[0].strMeasure8,
                        me9: body.drinks[0].strMeasure9,
                        me10: body.drinks[0].strMeasure10,
                        me11: body.drinks[0].strMeasure11,
                        me12: body.drinks[0].strMeasure12,
                        me13: body.drinks[0].strMeasure13,
                        me14: body.drinks[0].strMeasure14,
                        me15: body.drinks[0].strMeasure15
                    });
                } else{
                    callback("The API may be down :(");
                }
            }catch(err){
                console.log(`Sorry, something went wrong :(`);
            }
        }
    );
};  
//returns all alcoholic or non-alcoholic drinks
const alcoholic = (res, callback) => {
    if(res === true){
        request(
        {
            url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`,
            json: true
        },
        (error, response, body) => {    
            try{
                if(!error && response.statusCode === 200){
                    callback(undefined,{
                        matchingDrinks: body.drinks,
                        drinkid: body.drinks[0].idDrink
                    });
                } else{
                    callback("The API may be down :(");
                }
            }catch(err){
                console.log(`Sorry, something went wrong :(`);
            }
        });
    }else{
        request(
        {
            url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`,
            json: true
        },
        (error, response, body) => {    
            try{
                if(!error && response.statusCode === 200){
                    callback(undefined,{
                        matchingDrinks: body.drinks,
                        drinkid: body.drinks[0].idDrink
                    });
                } else{
                    callback("The API may be down :(");
                }
            }catch(err){
                console.log(`Sorry, something went wrong :(`);
            }
        });
    }
};

//exporting all drink methods
module.exports = {
    searchIngredient,
    searchID,
    searchName,
    rand,
    alcoholic
};