import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Charity } from 'src/app/api/models';
import { CharityService } from 'src/app/api/services';

@Component({
  selector: 'app-charity-add',
  templateUrl: './charity-add.component.html',
  styleUrls: ['./charity-add.component.scss']
})
export class CharityAddComponent implements OnInit {

  public model: Charity = {};

  @Output() charityCreated = new EventEmitter<Charity>();

  constructor(private charityService : CharityService) { }

  ngOnInit(): void {
  }

  Save() {
    this.charityService.apiCharityPost$Json({ body: this.model }).subscribe(
      {
        next: (c) => {
          this.model.name = "";
          this.charityCreated.emit(c);
          console.log("Saved product");
        }, error: (error) => {
          console.log("Could not save the product");
        }
      }
    );
  }

}
