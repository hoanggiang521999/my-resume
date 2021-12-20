import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  listInfo = [
    {
      icon: 'fa fa-map-marker',
      value: 'Ha Noi - Viet Nam'
    },
    {
      icon: 'fa fa-phone',
      value: '036 294 7187'
    },
    {
      icon: 'fa fa-envelope',
      value: 'hoanggiang521999@gmail.com'
    },
    {
      icon: 'fa fa-check-circle',
      value: 'Freelance Available'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
