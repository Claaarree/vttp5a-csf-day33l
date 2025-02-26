import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  standalone: false,
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit{
  memberForm!: FormGroup
  hobbies!: FormArray

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.hobbies = this.fb.array([])
    this.addHobby()
    this.memberForm = this.fb.group({
      name: this.fb.control<string>('', Validators.required),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      mobileNo: this.fb.control<string>('', Validators.required),
      hobbies: this.hobbies
    })
  }

  private newHobby(): FormGroup {
    return this.fb.group({
      hobby: this.fb.control<string>('', Validators.required)
    })
  }

  protected addHobby() {
    this.hobbies.push(this.newHobby())
  }

  protected removeHobby(i: number) {
    console.log(i)
    this.hobbies.removeAt(i)
  }

  protected handleSubmit() {
    console.log(this.memberForm.value)
  }
}
