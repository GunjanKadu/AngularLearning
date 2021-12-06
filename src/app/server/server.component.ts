import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  info: string = "Server Component 1";
  id: number = 2;
  isDisabled: boolean = false;
  constructor() {}

  getInfo() {
    return this.info;
  }
  onServerAdd() {
    console.log("Server Was Added Successfully");
    this.isDisabled = true;
  }
}
