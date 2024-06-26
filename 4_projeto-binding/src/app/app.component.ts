import { Component } from '@angular/core';

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
}
