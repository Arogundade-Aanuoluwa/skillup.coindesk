class App{
    async get(url){
        const response = await fetch(url);
        const app = await response.json()
        return app;
    }
}