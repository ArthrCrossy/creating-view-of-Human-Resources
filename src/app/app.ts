import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsumeApi } from './consume-api/consume-api';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, ConsumeApi]
})
export class App {
  protected readonly title = signal('consume');
}
