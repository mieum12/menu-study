import Controller from "./controller/Controller.js";

class App {
  async play() {
    await Controller.run();
  }
}

export default App;

const app = new App();
app.play();
