/// <reference path="../../apexsankey.d.ts" />
import {Component, ElementRef, Input, OnInit} from '@angular/core';
import ApexSankey from 'apexsankey';

export type SankeyOptions = {
  nodes: { id: string; title: string }[];
  edges: { source: string; target: string; value: number }[];
  graphOptions?: {
    width?: number;
    height?: number;
    nodeWidth?: number;
    fontFamily?: string;
    fontWeight?: number;
    edgeOpacity?: number;
    enableTooltip?: boolean;
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

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const defaultGraphOptions = {
      nodeWidth: 20,
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      height: 600,
      width: 800,
      edgeOpacity: 0.4,
      enableTooltip: true,
    };

    const graphOptions = { ...defaultGraphOptions, ...this.sankeyOptions.graphOptions };

    const s = new ApexSankey(this.el.nativeElement.querySelector('#svg-sankey'), graphOptions);
    s.render(this.sankeyOptions);
  }
}
