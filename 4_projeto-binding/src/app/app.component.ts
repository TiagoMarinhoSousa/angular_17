import { Component } from '@angular/core';
import { InputType } from 'zlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {



  title = '4 - Projeto binding - diretivas - templates - decorators';
  inputText: string = "Texto inicial";
  inputType: string = "text";
  isDisabled: boolean = false;
  inputResposta: InputType = ""
  buttonTitle: string = "Texto do botão"
  buttonDisable: boolean = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setTextTypeInput() {
    this.inputType = "text";
  }
  setPasswordTypeInput() {
    this.inputType = "password";
  }

  handleInputKeyup($event: KeyboardEvent) {
    const currentText = (event?.target as HTMLInputElement).value;
    console.log(currentText);
    // const resposta = currentText;
    // console.log(resposta);
    this.inputResposta = currentText ;
    console.log(this.inputResposta);
  }

  onButtonClick() {
    this.buttonTitle = "Textto ALTERADO!!"
    this.buttonDisable = !this.buttonDisable;
  }

}
