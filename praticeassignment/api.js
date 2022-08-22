// create a class object
class App{
    //make a get request
    async get(url){
         // await response of the fetch call
        const response = await fetch(url);
        // Only proceed once its resolved
        const app = await response.json()
         // only proceed once second promise is resolved
        return app;
    }
}