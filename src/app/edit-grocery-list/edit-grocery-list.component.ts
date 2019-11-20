import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GroceryListService} from "../service/grocery-list.service";
import {GroceryListModal} from '../model/groceryListModel';

@Component({
  selector: 'app-edit-grocery-list',
  templateUrl: './edit-grocery-list.component.html',
  styleUrls: ['./edit-grocery-list.component.scss']
})
export class EditGroceryListComponent implements OnInit {

  private EditListForm: FormGroup;
  private tempDataHolder: GroceryListModal;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditGroceryListComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: GroceryListModal,
    private groceryListService: GroceryListService
  ) {
    this.tempDataHolder = passedData;
    this.EditListForm = formBuilder.group({
      _id: [this.tempDataHolder._id],
      name: [this.tempDataHolder.name],
      quantities: [this.tempDataHolder.quantities],
      description: [this.tempDataHolder.description],
      numberOfUnits: [this.tempDataHolder.numberOfUnits],
      pricePerUnit: [this.tempDataHolder.pricePerUnit],
      totalAmount: [this.tempDataHolder.totalAmount]
    });
  }

  ngOnInit() {
  }

  updateCurrentRow() {
    this.groceryListService.updateListData({
      _id: this.EditListForm.value._id,
      name: this.EditListForm.value.name,
      quantities: this.EditListForm.value.quantities,
      description: this.EditListForm.value.description,
      numberOfUnits: this.EditListForm.value.numberOfUnits,
      pricePerUnit: this.EditListForm.value.pricePerUnit,
      totalAmount: this.EditListForm.value.totalAmount
    }).subscribe();
  }

  cancelClick() {
    this.dialogRef.close();
  }

}
