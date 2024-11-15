import { Component } from "@angular/core";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private auth: AuthService) {}

  login() {
    if (this.email === "") {
      alert("Digite um e-mail válido");
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = "";
    this.password = "";
  }
}
