/// <reference path="../../apexsankey.d.ts" />
import {Component, ElementRef, Input, OnInit} from '@angular/core';
import ApexSankey from 'apexsankey';


export type SankeyData = {
  nodes: { id: string; title: string }[];
  edges: { source: string; target: string; value: number, type?: string }[];
  options?: {
    order?: string[][][],
    alignLinkTypes?: boolean
  };
};

export type SankeyOptions = {
  graphOptions?: {
    width?: number;
    height?: number;
    canvasStyle?: string;
    spacing?: number;
    nodeWidth?: number;
    nodeBorderWidth?: number;
    nodeBorderColor?: string;
    onNodeClick?: (node: any) => void;
    edgeOpacity?: number;
    edgeGradientFill?: boolean;
    enableTooltip?: boolean;
    tooltipId?: string;
    tooltipBorderColor?: string;
    tooltipBGColor?: string;
    tooltipTemplate?: (data: { source: any; target: any; value: number }) => string;
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: number;
    fontColor?: string;
  };
};

@Component({
  selector: 'apx-sankey',
  standalone: true,
  templateUrl: './sankey-chart.component.html',
  styleUrls: ['./sankey-chart.component.css']
})
export class SankeyChartComponent implements OnInit {
  private chartInstance: any;
  private internalGraphOptions: any;
  private _sankeyData!: SankeyData; // Internal variable

  @Input() sankeyOptions!: SankeyOptions;

  @Input() set sankeyData(data: SankeyData) {
    this._sankeyData = data;
    if (this.chartInstance) {
      this.rerenderChart(data);
    }
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const defaultGraphOptions = {
      width: 800,
      height: 600,
      nodeWidth: 20,
      edgeOpacity: 0.4,
      enableTooltip: true,
      tooltipTemplate: (data: any) => {
        return `
        <div style='display:flex;align-items:center;gap:5px;'>
          <div style='width:12px;height:12px;background-color:${data.source.color}'></div>
          <div>${data.source.title}</div>
          <div>=></div>
          <div style='width:12px;height:12px;background-color:${data.target.color}'></div>
          <div>${data.target.title}</div>
          <div>: ${data.value}</div>
        </div>
      `;
      },
    };

    if (this.sankeyOptions)
      this.internalGraphOptions = {...defaultGraphOptions, ...this.sankeyOptions.graphOptions};
    else
      this.internalGraphOptions = {...defaultGraphOptions}

    this.renderChart(this._sankeyData);
  }

  renderChart(data: SankeyData) {
    const container = this.el.nativeElement.querySelector('#svg-sankey');
    if (container) {
      this.chartInstance = new ApexSankey(container, this.internalGraphOptions);
      this.chartInstance.render(data);
    }
  }

  rerenderChart(data: SankeyData) {
    const container = this.el.nativeElement.querySelector('#svg-sankey');
    if (container) {
      container.innerHTML = ''; // Clear the existing chart
      this.renderChart(data); // Re-render with new data
    }
  }
}
