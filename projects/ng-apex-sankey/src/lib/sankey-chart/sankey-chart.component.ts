/// <reference path="../../apexsankey.d.ts" />
import {Component, ElementRef, Input, OnInit} from '@angular/core';
import ApexSankey from 'apexsankey';

export type SankeyOptions = {
  nodes: { id: string; title: string }[];
  edges: { source: string; target: string; value: number, type?: string }[];
  options?: {
    order?: string[][][],
    alignLinkTypes?: boolean
  };
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
  imports: [],
  templateUrl: './sankey-chart.component.html',
  styleUrl: './sankey-chart.component.css'
})
export class SankeyChartComponent implements OnInit {
  @Input() sankeyOptions!: SankeyOptions;

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
      `
      },
    };

    const graphOptions = {...defaultGraphOptions, ...this.sankeyOptions.graphOptions};

    const s = new ApexSankey(this.el.nativeElement.querySelector('#svg-sankey'), graphOptions);
    s.render(this.sankeyOptions);
  }
}
