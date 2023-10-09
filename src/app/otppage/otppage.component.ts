import { Component } from '@angular/core';

@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.component.html',
  styleUrls: ['./otppage.component.css']
})
export class OtppageComponent {

}
export class OtpInputComponent {
  otp: string[] = ['', '', '', '', '', ''];
  otpDigits: number[] = [0, 1, 2, 3, 4, 5];
  activeIndex: number = 0;

  onInputChange(index: number) {
    if (this.otp[index].length === 1) {
      this.moveCursorToNext(index);
    }
  }

  moveCursorToNext(index: number) {
    if (index < this.otpDigits.length - 1) {
      this.activeIndex = index + 1;
    }
  }
}