import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter';
  constructor() {

    var countDownDate = new Date("Dec 12, 2020 14:00:00").getTime();

    var x = setInterval(function () {

      var now = new Date().getTime();
      var duration = countDownDate - now;
      var days = Math.floor(duration / (1000 * 60 * 60 * 24));
      var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((duration % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

      if (duration < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }


}

