import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Observable, Subscription} from 'rxjs';
import {GroceryListService} from '../service/grocery-list.service';
import {MatDialog} from "@angular/material/dialog";
import {EditGroceryListComponent} from "../edit-grocery-list/edit-grocery-list.component";
import {MessageBoxService} from "../service/message-box.service";
import {GroceryListModal} from '../model/groceryListModel';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit, OnDestroy {


  displayedColumns = ['_id', 'name', 'quantities', 'description', 'numberOfUnits', 'pricePerUnit', 'totalAmount', 'action'];
  dataSource: any = new MatTableDataSource<GroceryListModal>();
  editRoute: string = 'updateList';

  receiveDataSubscription: Subscription;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  HTMLDisplayValue: GroceryListModal[];

  constructor(private groceryListService: GroceryListService,
              private dialog: MatDialog,
              private messageBox: MessageBoxService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.receiveDataSubscription = this.groceryListService.getAllData().subscribe((data: GroceryListModal[]) => {
      console.log(data);
      this.HTMLDisplayValue = data;
      this.dataSource = new MatTableDataSource(this.HTMLDisplayValue);
    });
  }

  editCurrentRow(groceryListModal: GroceryListModal, index: number) {
    const dialogRef = this.dialog.open(EditGroceryListComponent, {
      disableClose: true,
      data: groceryListModal
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData();
        this.messageBox.openDialog('done', '', 'Successfully Update', 'OK');
      }
    },
     (err) => {
      console.log(err);
     });
  }

  ngOnDestroy(): void {
   this.receiveDataSubscription.unsubscribe();
  }
}




