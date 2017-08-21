import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-business-card-directory',
  templateUrl: './business-card-directory.component.html',
  styleUrls: ['./business-card-directory.component.css']
})
export class BusinessCardDirectoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
        console.log('jquery app-business-card-directory is OK');
        /*$('#myModal').modal();*/
    });
  }

}
