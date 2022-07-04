import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-dashboard',
  templateUrl: './item-dashboard.component.html',
  styleUrls: ['./item-dashboard.component.css']
})
export class ItemDashboardComponent implements OnInit {
  closeResult!: string;
  formValue !:FormGroup;
  Items:any;

  constructor(private modalService: NgbModal,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      ItemName:new FormControl(''),
      ItemRate:new FormControl(''),
      ItemDescription:new FormControl('')
    })
  }
  open(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }
  onSubmit(){
    console.log('Items:',this.formValue.value);
    this.formValue.reset();
  }
  get ItemName()
  {
    return this.Items.get('ItemName')
  }
  get ItemRate()
  {
    return this.Items.get('ItemRate')
  }
  get ItemDescription()
  {
    return this.Items.get('ItemDescription')
  }
}
