import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabModule } from '@custom-ui/ui';
import { NgForOf } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, TabModule, NgForOf],
  selector: 'cui-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-ui-components';
  itens: number[] = [];

  ngOnInit() {
    for (let i = 1; i <= 40; i++) {
      this.itens.push(i);
    }
  }
}
