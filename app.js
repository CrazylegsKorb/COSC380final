const yargs = require("yargs");
const drinks = require("./drinks.js");

const argv = yargs
    .options({
        ingredient: {
            describe: "Search drinks by ingredient",
            demand: false,
            alias: "in",
            string: true
        },
        drinkid: {
            describe: "Retrieve drink by ID",
            demand: false,
            alias: "id",
            string: true
        },
        drinkname: {
            describe: "Retrieve drink by name",
            demand: false,
            alias: "name",
            string: true
        },
        random: {
            describe: "Retrieve random drink when true",
            demand: false,
            alias: "rand",
            boolean: true
        },
        alcoholic:{
            describe: "Retrieve all drinks that are alcoholic if true, all non-alcoholic drinks otherwise",
            demand: false,
            alias: "alco",
            boolean: true
        }
    })
    .help()
    .alias("help","h").argv;

//console.log(argv);

if(
/*all args are filled*/     (argv.drinkid != null && argv.ingredient != null && argv.drinkname != null && argv.random != null && argv.alcoholic != null)||
/*four args are filled*/    (argv.drinkid != null && argv.ingredient != null && argv.drinkname != null && argv.random != null)||
                            (argv.drinkid != null && argv.ingredient != null && argv.drinkname != null && argv.alcoholic != null)||
                            (argv.ingredient != null && argv.drinkname != null && argv.random != null && argv.alcoholic != null)||
                            (argv.drinkid != null && argv.ingredient != null && argv.random != null && argv.alcoholic != null)||
/*three args are filled*/   (argv.drinkname != null && argv.random != null && argv.alcoholic != null)||
                            (argv.ingredient != null && argv.random != null && argv.alcoholic != null)||
                            (argv.ingredient != null && argv.drinkname != null && argv.alcoholic != null)||
                            (argv.ingredient != null && argv.drinkname != null && argv.random != null)||
                            (argv.drinkid != null && argv.random != null && argv.alcoholic != null)||
                            (argv.drinkid != null && argv.drinkname != null && argv.alcoholic != null)||
                            (argv.drinkid != null && argv.drinkname != null && argv.random != null)||
                            (argv.drinkid != null && argv.ingredient != null && argv.alcoholic != null)||
                            (argv.drinkid != null && argv.ingredient != null && argv.drinkname != null)||
/*two args is filled*/      (argv.random != null && argv.alcoholic != null)|| 
                            (argv.drinkname != null && argv.alcoholic != null)||
                            (argv.ingredient != null && argv.alcoholic != null)||
                            (argv.drinkid != null && argv.alcoholic != null)||
                            (argv.drinkname != null && argv.random != null)||
                            (argv.ingredient != null && argv.random != null)||
                            (argv.drinkid != null && argv.random != null)||
                            (argv.ingredient != null && argv.drinkname != null)||
                            (argv.drinkid != null && argv.drinkname != null)||
                            (argv.drinkid != null && argv.ingredient != null)
                            ){
    console.log("Too many arguments\nPlease use one argument (--in, --id, --name)");
}else if(argv.drinkid === null && argv.ingredient === null && argv.drinkname === null && argv.alcoholic === null && argv.random === null){
    console.log("Please use one of the following arguments\n--in : searches by ingredient\n--id : searches by drink id\n--name : searches by drink name");
}else if(argv.ingredient != null){
/*    try{*/
        drinks.searchIngredient(argv.ingredient, (errorMessage, results) => {
            //displays all matching drink stats
            //console.log(results.matchingDrinks);
    
            //displays all matching drink names
            for(var i=0; i < results.matchingDrinks.length; i++){
                console.log(`${results.matchingDrinks[i].strDrink} - id: ${results.matchingDrinks[i].idDrink}`);
            }
        });
/*    }catch(err){
        console.log(`Any drinks containing ${argv.ingredient} could not be found in the database\nPlease try again`);
    }*/
} else if(argv.drinkid != null){
    drinks.searchID(argv.drinkid,(errorMessage, results) => {
    
    //prints the whole data structure from results
    //console.log(results.body);
    
    //pretty print
    console.log(`${results.pic}\nDrink name: ${results.name}\nGlass type: ${results.glass}\nAlcoholic: ${results.alcoholic}\n\n---Ingredients---`);
    //I'm dumb, and I can't figure out how to make this more efficient at the moment
    //will have to change the data structure in drinks.js to make this more efficient
        if(results.in1 != '' && results.in1 != ' ' && results.in1 != '\n'){
            if(results.me1 != '' && results.me1 != ' ' && results.me1 != '\n'){
                console.log(`${results.in1}: ${results.me1}`);
            }else{
                console.log(`${results.in1}`);
            }
        }if(results.in2 != '' && results.in2 != ' ' && results.in2 != '\n'){
            if(results.me2 != '' && results.me2 != ' ' && results.me2 != '\n'){
                console.log(`${results.in2}: ${results.me2}`);
            }else{
                console.log(`${results.in2}`);
            }
        }if(results.in3 != '' && results.in3 != ' ' && results.in3 != '\n'){
            if(results.me3 != '' && results.me3 != ' ' && results.me3 != '\n'){
                console.log(`${results.in3}: ${results.me3}`);
            }else{
                console.log(`${results.in3}`);
            }
        }if(results.in4 != '' && results.in4 != ' ' && results.in4 != '\n'){
            if(results.me4 != '' && results.me4 != ' ' && results.me4 != '\n'){
                console.log(`${results.in4}: ${results.me4}`);
            }else{
                console.log(`${results.in4}`);
            }
        }if(results.in5 != '' && results.in5 != ' ' && results.in5 != '\n'){
            if(results.me5 != '' && results.me5 != ' ' && results.me5 != '\n'){
                console.log(`${results.in5}: ${results.me5}`);
            }else{
                console.log(`${results.in5}`);
            }
        }if(results.in6 != '' && results.in6 != ' ' && results.in6 != '\n'){
            if(results.me6 != '' && results.me6 != ' ' && results.me6 != '\n'){
                console.log(`${results.in6}: ${results.me6}`);
            }else{
                console.log(`${results.in6}`);
            }
        }if(results.in7 != '' && results.in7 != ' ' && results.in7 != '\n'){
            if(results.me7 != '' && results.me7 != ' ' && results.me7 != '\n'){
                console.log(`${results.in7}: ${results.me7}`);
            }else{
                console.log(`${results.in7}`);
            }
        }if(results.in8 != '' && results.in8 != ' ' && results.in8 != '\n'){
            if(results.me8 != '' && results.me8 != ' ' && results.me8 != '\n'){
                console.log(`${results.in8}: ${results.me8}`);
            }else{
                console.log(`${results.in8}`);
            }
        }if(results.in9 != '' && results.in9 != ' ' && results.in9 != '\n'){
            if(results.me9 != '' && results.me9 != ' ' && results.me9 != '\n'){
                console.log(`${results.in9}: ${results.me9}`);
            }else{
                console.log(`${results.in9}`);
            }
        }if(results.in10 != '' && results.in10 != ' ' && results.in10 != '\n'){
            if(results.me11 != '' && results.me10 != ' ' && results.me10 != '\n'){
                console.log(`${results.in10}: ${results.me10}`);
            }else{
                console.log(`${results.in10}`);
            }
        }if(results.in11 != '' && results.in11 != ' ' && results.in11 != '\n'){
            if(results.me11 != '' && results.me11 != ' ' && results.me11 != '\n'){
                console.log(`${results.in11}: ${results.me11}`);
            }else{
                console.log(`${results.in11}`);
            }
        }if(results.in12 != '' && results.in12 != ' ' && results.in12 != '\n'){
            if(results.me12 != '' && results.me12 != ' ' && results.me12 != '\n'){
                console.log(`${results.in12}: ${results.me12}`);
            }else{
                console.log(`${results.in12}`);
            }
        }if(results.in13 != '' && results.in13 != ' ' && results.in13 != '\n'){
            if(results.me13 != '' && results.me13 != ' ' && results.me13 != '\n'){
                console.log(`${results.in13}: ${results.me13}`);
            }else{
                console.log(`${results.in13}`);
            }
        }if(results.in14 != '' && results.in14 != ' ' && results.in14 != '\n'){
            if(results.me14 != '' && results.me14 != ' ' && results.me14 != '\n'){
                console.log(`${results.in14}: ${results.me14}`);
            }else{
                console.log(`${results.in14}`);
            }
        }if(results.in15 != '' && results.in15 != ' ' && results.in15 != '\n'){
            if(results.me15 != '' && results.me15 != ' ' && results.me15 != '\n'){
                console.log(`${results.in15}: ${results.me15}`);
            }else{
                console.log(`${results.in15}`);
            }
        }
        console.log(`\n---Instructions---\n${results.instructions}`);
    });
} else if(argv.drinkname != null){
    drinks.searchName(argv.drinkname,(errorMessage, results) => {
        
        //prints whole data structure from results
        //console.log(results.body);
        
        //pretty print
        console.log(`${results.pic}\nDrink name: ${results.name}\nGlass type: ${results.glass}\nAlcoholic: ${results.alcoholic}\n\n---Ingredients---`);
        //I'm dumb, and I can't figure out how to make this more efficient at the moment
        //will have to change the data structure in drinks.js to make this more efficient
        if(results.in1 != '' && results.in1 != ' ' && results.in1 != '\n'){
            if(results.me1 != '' && results.me1 != ' ' && results.me1 != '\n'){
                console.log(`${results.in1}: ${results.me1}`);
            }else{
                console.log(`${results.in1}`);
            }
        }if(results.in2 != '' && results.in2 != ' ' && results.in2 != '\n'){
            if(results.me2 != '' && results.me2 != ' ' && results.me2 != '\n'){
                console.log(`${results.in2}: ${results.me2}`);
            }else{
                console.log(`${results.in2}`);
            }
        }if(results.in3 != '' && results.in3 != ' ' && results.in3 != '\n'){
            if(results.me3 != '' && results.me3 != ' ' && results.me3 != '\n'){
                console.log(`${results.in3}: ${results.me3}`);
            }else{
                console.log(`${results.in3}`);
            }
        }if(results.in4 != '' && results.in4 != ' ' && results.in4 != '\n'){
            if(results.me4 != '' && results.me4 != ' ' && results.me4 != '\n'){
                console.log(`${results.in4}: ${results.me4}`);
            }else{
                console.log(`${results.in4}`);
            }
        }if(results.in5 != '' && results.in5 != ' ' && results.in5 != '\n'){
            if(results.me5 != '' && results.me5 != ' ' && results.me5 != '\n'){
                console.log(`${results.in5}: ${results.me5}`);
            }else{
                console.log(`${results.in5}`);
            }
        }if(results.in6 != '' && results.in6 != ' ' && results.in6 != '\n'){
            if(results.me6 != '' && results.me6 != ' ' && results.me6 != '\n'){
                console.log(`${results.in6}: ${results.me6}`);
            }else{
                console.log(`${results.in6}`);
            }
        }if(results.in7 != '' && results.in7 != ' ' && results.in7 != '\n'){
            if(results.me7 != '' && results.me7 != ' ' && results.me7 != '\n'){
                console.log(`${results.in7}: ${results.me7}`);
            }else{
                console.log(`${results.in7}`);
            }
        }if(results.in8 != '' && results.in8 != ' ' && results.in8 != '\n'){
            if(results.me8 != '' && results.me8 != ' ' && results.me8 != '\n'){
                console.log(`${results.in8}: ${results.me8}`);
            }else{
                console.log(`${results.in8}`);
            }
        }if(results.in9 != '' && results.in9 != ' ' && results.in9 != '\n'){
            if(results.me9 != '' && results.me9 != ' ' && results.me9 != '\n'){
                console.log(`${results.in9}: ${results.me9}`);
            }else{
                console.log(`${results.in9}`);
            }
        }if(results.in10 != '' && results.in10 != ' ' && results.in10 != '\n'){
            if(results.me11 != '' && results.me10 != ' ' && results.me10 != '\n'){
                console.log(`${results.in10}: ${results.me10}`);
            }else{
                console.log(`${results.in10}`);
            }
        }if(results.in11 != '' && results.in11 != ' ' && results.in11 != '\n'){
            if(results.me11 != '' && results.me11 != ' ' && results.me11 != '\n'){
                console.log(`${results.in11}: ${results.me11}`);
            }else{
                console.log(`${results.in11}`);
            }
        }if(results.in12 != '' && results.in12 != ' ' && results.in12 != '\n'){
            if(results.me12 != '' && results.me12 != ' ' && results.me12 != '\n'){
                console.log(`${results.in12}: ${results.me12}`);
            }else{
                console.log(`${results.in12}`);
            }
        }if(results.in13 != '' && results.in13 != ' ' && results.in13 != '\n'){
            if(results.me13 != '' && results.me13 != ' ' && results.me13 != '\n'){
                console.log(`${results.in13}: ${results.me13}`);
            }else{
                console.log(`${results.in13}`);
            }
        }if(results.in14 != '' && results.in14 != ' ' && results.in14 != '\n'){
            if(results.me14 != '' && results.me14 != ' ' && results.me14 != '\n'){
                console.log(`${results.in14}: ${results.me14}`);
            }else{
                console.log(`${results.in14}`);
            }
        }if(results.in15 != '' && results.in15 != ' ' && results.in15 != '\n'){
            if(results.me15 != '' && results.me15 != ' ' && results.me15 != '\n'){
                console.log(`${results.in15}: ${results.me15}`);
            }else{
                console.log(`${results.in15}`);
            }
        }
        console.log(`\n---Instructions---\n${results.instructions}`);
    });
}else if(argv.random === true){
    drinks.rand((errorMessage, results) => {
        
        //prints whole data structure from results
        //console.log(results.body);
        
        //pretty print
        console.log(`${results.pic}\nDrink name: ${results.name}\nGlass type: ${results.glass}\nAlcoholic: ${results.alcoholic}\n\n---Ingredients---`);
        //I'm dumb, and I can't figure out how to make this more efficient at the moment
        //will have to change the data structure in drinks.js to make this more efficient
        if(results.in1 != '' && results.in1 != ' ' && results.in1 != '\n'){
            if(results.me1 != '' && results.me1 != ' ' && results.me1 != '\n'){
                console.log(`${results.in1}: ${results.me1}`);
            }else{
                console.log(`${results.in1}`);
            }
        }if(results.in2 != '' && results.in2 != ' ' && results.in2 != '\n'){
            if(results.me2 != '' && results.me2 != ' ' && results.me2 != '\n'){
                console.log(`${results.in2}: ${results.me2}`);
            }else{
                console.log(`${results.in2}`);
            }
        }if(results.in3 != '' && results.in3 != ' ' && results.in3 != '\n'){
            if(results.me3 != '' && results.me3 != ' ' && results.me3 != '\n'){
                console.log(`${results.in3}: ${results.me3}`);
            }else{
                console.log(`${results.in3}`);
            }
        }if(results.in4 != '' && results.in4 != ' ' && results.in4 != '\n'){
            if(results.me4 != '' && results.me4 != ' ' && results.me4 != '\n'){
                console.log(`${results.in4}: ${results.me4}`);
            }else{
                console.log(`${results.in4}`);
            }
        }if(results.in5 != '' && results.in5 != ' ' && results.in5 != '\n'){
            if(results.me5 != '' && results.me5 != ' ' && results.me5 != '\n'){
                console.log(`${results.in5}: ${results.me5}`);
            }else{
                console.log(`${results.in5}`);
            }
        }if(results.in6 != '' && results.in6 != ' ' && results.in6 != '\n'){
            if(results.me6 != '' && results.me6 != ' ' && results.me6 != '\n'){
                console.log(`${results.in6}: ${results.me6}`);
            }else{
                console.log(`${results.in6}`);
            }
        }if(results.in7 != '' && results.in7 != ' ' && results.in7 != '\n'){
            if(results.me7 != '' && results.me7 != ' ' && results.me7 != '\n'){
                console.log(`${results.in7}: ${results.me7}`);
            }else{
                console.log(`${results.in7}`);
            }
        }if(results.in8 != '' && results.in8 != ' ' && results.in8 != '\n'){
            if(results.me8 != '' && results.me8 != ' ' && results.me8 != '\n'){
                console.log(`${results.in8}: ${results.me8}`);
            }else{
                console.log(`${results.in8}`);
            }
        }if(results.in9 != '' && results.in9 != ' ' && results.in9 != '\n'){
            if(results.me9 != '' && results.me9 != ' ' && results.me9 != '\n'){
                console.log(`${results.in9}: ${results.me9}`);
            }else{
                console.log(`${results.in9}`);
            }
        }if(results.in10 != '' && results.in10 != ' ' && results.in10 != '\n'){
            if(results.me11 != '' && results.me10 != ' ' && results.me10 != '\n'){
                console.log(`${results.in10}: ${results.me10}`);
            }else{
                console.log(`${results.in10}`);
            }
        }if(results.in11 != '' && results.in11 != ' ' && results.in11 != '\n'){
            if(results.me11 != '' && results.me11 != ' ' && results.me11 != '\n'){
                console.log(`${results.in11}: ${results.me11}`);
            }else{
                console.log(`${results.in11}`);
            }
        }if(results.in12 != '' && results.in12 != ' ' && results.in12 != '\n'){
            if(results.me12 != '' && results.me12 != ' ' && results.me12 != '\n'){
                console.log(`${results.in12}: ${results.me12}`);
            }else{
                console.log(`${results.in12}`);
            }
        }if(results.in13 != '' && results.in13 != ' ' && results.in13 != '\n'){
            if(results.me13 != '' && results.me13 != ' ' && results.me13 != '\n'){
                console.log(`${results.in13}: ${results.me13}`);
            }else{
                console.log(`${results.in13}`);
            }
        }if(results.in14 != '' && results.in14 != ' ' && results.in14 != '\n'){
            if(results.me14 != '' && results.me14 != ' ' && results.me14 != '\n'){
                console.log(`${results.in14}: ${results.me14}`);
            }else{
                console.log(`${results.in14}`);
            }
        }if(results.in15 != '' && results.in15 != ' ' && results.in15 != '\n'){
            if(results.me15 != '' && results.me15 != ' ' && results.me15 != '\n'){
                console.log(`${results.in15}: ${results.me15}`);
            }else{
                console.log(`${results.in15}`);
            }
        }
        console.log(`\n---Instructions---\n${results.instructions}`);
    });
}else if(argv.alcoholic != null){
    drinks.alcoholic(argv.alcoholic,(errorMessage, results) => {
        for(var i=0; i < results.matchingDrinks.length; i++){
            console.log(`${results.matchingDrinks[i].strDrink} - id: ${results.matchingDrinks[i].idDrink}`);
        }
    });
}