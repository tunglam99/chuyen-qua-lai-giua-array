import { Component, VERSION ,OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  a = [
    "123","456","789"
  ];
  b = [];

  c = [
    {name: "lam"},
    {name: "lam2"},
    {name: "lam3"},
  ];
  d = []
  ngOnInit(): void {
    this.a.forEach(x => {
      this.b.push({name: x[1]})
    })
    console.log(this.b)


    this.c.forEach(x=> {
      this.d.push(x.name)
    })
    console.log(this.d)
  }
}
