const EventEmitter = require("events");

class Auth extends EventEmitter {
  login(username, password) {
    if (username === "admin" && password === "1234") {
      this.emit("loginSuccess", username);
    } else {
      this.emit("loginFailure", username);
    }
  }
}

const auth = new Auth();

auth.on("loginSuccess", (user) => {
  console.log(`Usuário ${user} logado com sucesso!`);
});

auth.on("loginFailure", (user) => {
  console.log(`Falha no login para o usuário: ${user}`);
});

//auth.login("admin", "1234");
auth.login("admin", "1234");
