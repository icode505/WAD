import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title: string = "Registration Form";
  displayname: string = "";
  displayaddress: string = "";
  displaycontact: string = "";

  getValue(name: string, address: string, contact: string) {
    this.displayname = name;
    this.displayaddress = address;
    this.displaycontact = contact;
  }
}
