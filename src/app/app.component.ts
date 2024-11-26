import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SankeyChartComponent, SankeyOptions} from "ng-apex-sankey";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SankeyChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apex-sankey';

  public sankeyOptions: SankeyOptions = {
    nodes: [
      {id: 'Homepage', title: 'Homepage'},
      {id: 'ProductPage', title: 'Product Page'},
      {id: 'Cart', title: 'Cart'},
      {id: 'Checkout', title: 'Checkout'},
      {id: 'Exit', title: 'Exit'}
    ],
    edges: [
      {source: 'Homepage', target: 'ProductPage', value: 300},
      {source: 'Homepage', target: 'Exit', value: 100},
      {source: 'ProductPage', target: 'Cart', value: 200},
      {source: 'ProductPage', target: 'Exit', value: 100},
      {source: 'Cart', target: 'Checkout', value: 150},
      {source: 'Cart', target: 'Exit', value: 50},
      {source: 'Checkout', target: 'Exit', value: 150}
    ],
    graphOptions: {
      width: 1600,
      height: 600,
      nodeWidth: 20,
      edgeOpacity: 0.5,
      enableTooltip: true,
    }
  };
}
