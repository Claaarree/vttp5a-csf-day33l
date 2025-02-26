import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  standalone: false,
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {

  childText: string = "Default String";
  productForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.productForm = this.formbuilder.group({
      products: this.formbuilder.array([])
    });
  }

  get products() {
    return this.productForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(this.createFormItem());
  }

  createFormItem(): FormGroup {
    return this.formbuilder.group({
      name: '',
      description: '',
      qty: ''
    })
  }

  removeAt(i : number) {
    this.products.removeAt(i)
  }
  
  onSubmit() {
    console.log("OnSubmit...")
  }

  changeText() {
    this.childText = "Updated by ViewChild"
  }
}
