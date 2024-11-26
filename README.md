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
The SankeyChartComponent accepts a `SankeyOptions` object which includes nodes, edges, and graph options for customization.

## SankeyOptions Configuration

### Nodes

- **id**: Unique identifier for the node.
- **title**: Title of the node, displayed in the diagram.

### Edges

- **source**: ID of the source node.
- **target**: ID of the target node.
- **value**: Value of the flow between nodes.
- **type** (optional): Type of the link, useful for categorizing flows.

### Options

- **order**: (optional) A list of layers defining the order of nodes. It's a list of bands, each containing node IDs. Example:

```
    json

    {
      "order": [
        [["a", "b"]],
        [["c"]]
      ]
    }
```
- **alignLinkTypes**: (optional) Boolean indicating whether to align link types across nodes. Default: false.

### GraphOptions

- **width**: (optional) Width of the graph container.
- **height**: (optional) Height of the graph container.
- **canvasStyle**: (optional) CSS styles for the canvas container.
- **spacing**: (optional) Spacing from the top and left of the graph container.
- **nodeWidth**: (optional) Width of the Sankey nodes.
- **nodeBorderWidth**: (optional) Border width of the nodes.
- **nodeBorderColor**: (optional) Border color of the nodes.
- **onNodeClick**: (optional) Callback function executed when a node is clicked.
- **edgeOpacity**: (optional) Opacity of the edges.
- **edgeGradientFill**: (optional) Boolean to enable gradient fill on edges.
- **enableTooltip**: (optional) Enables tooltip on hover over edges.
- **tooltipId**: (optional) HTML element ID for the tooltip.
- **tooltipBorderColor**: (optional) Border color of the tooltip.
- **tooltipBGColor**: (optional) Background color of the tooltip.
- **tooltipTemplate**: (optional) Function to customize the tooltip template. Accepts an object { source, target, value }.
- **fontSize**: (optional) Font size for node labels.
- **fontFamily**: (optional) Font family for node labels.
- **fontWeight**: (optional) Font weight for node labels.
- **fontColor**: (optional) Font color for node labels.

These options allow you to fully customize the Sankey diagram to fit your specific needs, providing detailed control over every aspect of the chart.

# Demo

You can clone this repo and run the demo application to see the library in action:

```bash
npm install
ng serve 
```

The demo is available at: http://localhost:4200
