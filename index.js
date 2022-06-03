const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model.js');
// Import of the data from './data.json'
const data = require('./data');
const { deleteOne } = require('./models/Recipe.model.js');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';



// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(recipes => {
   console.log(`Connected to the database: "${recipes.connection.name}"`);
    /*Recipe.create(data)
    .then(createdRecipe => {
    console.log(createdRecipe.title);
    });
    // Before adding any recipes to the database, let's remove all existing ones
    
    //return Recipe.deleteMany();*/
    return recipes
  })
  .then((recipes) => {
    return Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration:100},{new:true})

  })
  .then((recipes)=>{
    console.log(recipes)
    return recipes
  })
  .then((recipes)=>{
    return Recipe.deleteOne({title:"Carrot Cake"})
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
