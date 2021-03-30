import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  operazione: string;
  //  ultimonumero : string;

  constructor() {}

  ngOnInit() {
    this.operazione = "0"; //init della variabile
  }

  inserisciNum(numero: number) {
    if (this.operazione != "0") this.operazione += numero.toString();
    else this.operazione = numero.toString();

    //    this.ultimonumero += numero.toString();
  }

  cancella() {
    this.operazione = "0";
  }

  inserisciOp(operatore: string) {
    if (
      this.operazione.endsWith("+") ||
      this.operazione.endsWith("-") ||
      this.operazione.endsWith("/") ||
      this.operazione.endsWith("*")
    )
      this.operazione =
        this.operazione.slice(0, this.operazione.length - 1) + operatore;
    else this.operazione += operatore;

    //    this.ultimonumero = "";
  }

  uguale() {
    this.operazione = eval(this.operazione).toString();
    //    this.ultimonumero = this.operazione;
  }

  virgola() {
    // if (!this.ultimonumero.includes("."))
    // {
    //   this.ultimonumero += ".";
    //   this.operazione += ".";
    // }
    let str = "-+*/";
    let indiceMax = 0;
    for (let i = 0; i < str.length; i++) {
      let indiceAttuale = this.operazione.lastIndexOf(str.charAt(i));
      if (indiceAttuale > indiceMax) indiceMax = indiceAttuale;
    }
    if (!this.operazione.includes(".", indiceMax)) this.operazione += ".";
  }

  invertiSegno() {
    if (this.operazione != "0") console.log("sas");
    if (this.operazione.startsWith("-"))
      this.operazione = this.operazione.slice(1);
    else this.operazione = "-" + this.operazione;
  }
}
