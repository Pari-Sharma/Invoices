import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  Customers: any[] = ['read', 'book'];
  address: boolean = false;
  newCust = '';
  closeResult = '';
  isAlert:boolean=false;

  constructor(private route: ActivatedRoute, private modalService: NgbModal) {}
  date = new Date();
  currentYear = this.date.getUTCFullYear();
  currentMonth = this.date.getUTCMonth() + 1;
  currentDay = this.date.getUTCDate();
  //YYYY-MM-DD
  TodayDate = '2022-05-15';
  FinalMonth: any;
  FinalDay: any;
  ngOnInit(): void {
    if (this.currentMonth < 10) {
      this.FinalMonth = '0' + this.currentMonth;
    } else {
      this.FinalMonth = this.currentMonth;
    }
    if (this.currentDay < 10) {
      this.FinalDay = '0' + this.currentDay;
    } else {
      this.FinalDay = this.currentDay;
    }
    this.TodayDate =
      this.currentYear + '-' + this.FinalMonth + '-' + this.FinalDay;
    // this.onchange()
    this.change();
  }
  /* displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }*/

  /*check(){
    if( this.selectedCustomers.length!=0){
      return true;

    }return false;
  }
  onchange(){
    if(this.Customers.length!=0)
   {
     return this.selectedCustomers=this.Customers;


   }return this.Customers
 }*/

  newCustomer(data: any) {
    this.newCust = data.target.value;
  }
  change() {
    if (this.newCust.length != 0) {
      return false;
    }
    return true;
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  //funtion for modal shipping and Billing
  open1(content1: any) {
    this.modalService
      .open(content1, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  openSm(Content2: any) {
    this.modalService.open(Content2, { size: 'sm' });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  DeleteInvoice(Delete: any) {
    this.modalService.open(Delete, { size: 'sm' });
  }
  alert(isAlert:any){
    if(this.isAlert==false){
      this.isAlert=true;
    }
    else{
      this.isAlert= false;
    }
  }

}
