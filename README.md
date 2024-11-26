<div align="center">
  <a href="https://github.com/giaroc/apex-sankey">
    <img src="./src/assets/ng-apex-sankey-logo.png" alt="Logo" width="80">
  </a>
  <h3 align="center">NG-APEX-SANKEY</h3>
  <p align="center">
    Angular library for creating customizable Sankey diagrams using ApexSankey.js
  </p>
  <p align="center">
    <a href="https://ng-apex-sankey.vercel.app/">Online Demo</a> |
    <a href="https://apexcharts.com/apexsankey/">ApexSankey.js</a>
  </p>
  <p align="center">
    <!-- -->
  </p>
</div>

## Table of contents
- [Getting Started](#getting-started)
- [Latest Update](#latest-update)
- [Installation](#installation)
- [Usage](#usage)
  - [Standalone](#standalone)
- [API](#api)
- [Demo](#demo)

# Getting Started

`ng-apex-sankey` is an Angular library for creating Sankey diagrams with full customization options.

# Latest Update

* 2024.11.26: Initial release

# Installation

Install the library via npm:

```bash
npm install ng-apex-sankey --save
npm install apexsankey --save
```

# Usage

## Standalone

Import `SankeyChartComponent` in your Angular component:

```typescript
import { Component } from '@angular/core';
import { SankeyChartComponent, SankeyOptions } from 'ng-apex-sankey';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SankeyChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sankeyOptions: SankeyOptions = {
    nodes: [
      { id: 'Homepage', title: 'Homepage' },
      { id: 'ProductPage', title: 'Product Page' },
      { id: 'Cart', title: 'Cart' },
      { id: 'Checkout', title: 'Checkout' },
      { id: 'Exit', title: 'Exit' }
    ],
    edges: [
      { source: 'Homepage', target: 'ProductPage', value: 300 },
      { source: 'Homepage', target: 'Exit', value: 100 },
      { source: 'ProductPage', target: 'Cart', value: 200 },
      { source: 'ProductPage', target: 'Exit', value: 100 },
      { source: 'Cart', target: 'Checkout', value: 150 },
      { source: 'Cart', target: 'Exit', value: 50 },
      { source: 'Checkout', target: 'Exit', value: 150 }
    ],
    graphOptions: {
      width: 800,
      height: 600,
      nodeWidth: 20,
      edgeOpacity: 0.5,
      enableTooltip: true,
    }
  };
}
```

# API
The SankeyChartComponent accepts a SankeyOptions object which includes nodes, edges, and graph options for customization.

# Demo

You can clone this repo and run the demo application to see the library in action:

```bash
npm install
ng serve 
```

The demo is available at: http://localhost:4200
