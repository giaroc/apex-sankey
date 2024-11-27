import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SankeyChartComponent, SankeyData, SankeyOptions} from "ng-apex-sankey";
import {Highlight} from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SankeyChartComponent, Highlight],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apex-sankey';

  // HTML strings for displaying Sankey charts
  sankeyHtml1: string = '<apx-sankey [sankeyData]="sankeyData1" [sankeyOptions]="sankeyOptions1"></apx-sankey>';
  sankeyHtml2: string = '<apx-sankey [sankeyData]="sankeyData2" [sankeyOptions]="sankeyOptions2"></apx-sankey>';
  sankeyHtml3: string = '<apx-sankey [sankeyData]="sankeyData3"></apx-sankey>';

  // Sankey data and options
  sankeyData1: SankeyData = {
    nodes: [
      {id: 'England', title: 'england'},
      {id: 'Wales', title: 'wales'},
      {id: 'Level 4', title: 'level 4'},
      {id: 'Level 3', title: 'level 3'},
      {id: 'Level 2', title: 'level 2'},
      {id: 'Level 1 and entry level', title: 'level 1 and entry level'},
      {id: 'No qualifications', title: 'no qualifications'},
      {id: 'Other', title: 'other'},
      {id: 'Wholesale & retail', title: 'wholesale & retail'},
      {id: 'Health & social work', title: 'health & social work'},
      {id: 'Education', title: 'education'},
      {id: 'Construction', title: 'construction'},
      {id: 'Manufacturing', title: 'manufacturing'},
      {id: 'Transport & storage', title: 'transport & storage'},
      {id: 'Finance & insurance', title: 'finance & insurance'},
    ],
    edges: [
      {source: 'England', target: 'Level 4', value: 13},
      {source: 'England', target: 'Level 3', value: 8},
      {source: 'England', target: 'Level 2', value: 8},
      {source: 'England', target: 'Level 1 and entry level', value: 6},
      {source: 'England', target: 'No qualifications', value: 3},
      {source: 'Wales', target: 'Level 4', value: 7},
      {source: 'Wales', target: 'Level 3', value: 8},
      {source: 'Wales', target: 'Level 2', value: 4},
      {source: 'Wales', target: 'Level 1 and entry level', value: 5},
      {source: 'Wales', target: 'No qualifications', value: 5},
      {source: 'Level 4', target: 'Wholesale & retail', value: 4},
      {source: 'Level 4', target: 'Health & social work', value: 3},
      {source: 'Level 4', target: 'Education', value: 2},
      {source: 'Level 4', target: 'Construction', value: 1},
      {source: 'Level 4', target: 'Manufacturing', value: 2},
      {source: 'Level 4', target: 'Other', value: 3},
      {source: 'Level 4', target: 'Transport & storage', value: 2},
      {source: 'Level 4', target: 'Finance & insurance', value: 3},
      {source: 'Level 3', target: 'Wholesale & retail', value: 3},
      {source: 'Level 3', target: 'Health & social work', value: 2},
      {source: 'Level 3', target: 'Education', value: 1},
      {source: 'Level 3', target: 'Construction', value: 2},
      {source: 'Level 3', target: 'Manufacturing', value: 1},
      {source: 'Level 3', target: 'Other', value: 3},
      {source: 'Level 3', target: 'Transport & storage', value: 2},
      {source: 'Level 3', target: 'Finance & insurance', value: 2},
      {source: 'Level 2', target: 'Wholesale & retail', value: 2},
      {source: 'Level 2', target: 'Health & social work', value: 1},
      {source: 'Level 2', target: 'Education', value: 2},
      {source: 'Level 2', target: 'Construction', value: 1},
      {source: 'Level 2', target: 'Manufacturing', value: 2},
      {source: 'Level 2', target: 'Other', value: 2},
      {source: 'Level 2', target: 'Transport & storage', value: 1},
      {source: 'Level 2', target: 'Finance & insurance', value: 1},
      {source: 'Level 1 and entry level', target: 'Wholesale & retail', value: 1},
      {source: 'Level 1 and entry level', target: 'Health & social work', value: 2},
      {source: 'Level 1 and entry level', target: 'Education', value: 1},
      {source: 'Level 1 and entry level', target: 'Construction', value: 2},
      {source: 'Level 1 and entry level', target: 'Manufacturing', value: 1},
      {source: 'Level 1 and entry level', target: 'Other', value: 2},
      {source: 'Level 1 and entry level', target: 'Transport & storage', value: 1},
      {source: 'Level 1 and entry level', target: 'Finance & insurance', value: 1},
      {source: 'No qualifications', target: 'Wholesale & retail', value: 1},
      {source: 'No qualifications', target: 'Health & social work', value: 1},
      {source: 'No qualifications', target: 'Education', value: 1},
      {source: 'No qualifications', target: 'Construction', value: 1},
      {source: 'No qualifications', target: 'Manufacturing', value: 1},
      {source: 'No qualifications', target: 'Other', value: 1},
      {source: 'No qualifications', target: 'Transport & storage', value: 1},
      {source: 'No qualifications', target: 'Finance & insurance', value: 1}
    ]
  };

  sankeyOptions1: SankeyOptions = {
    graphOptions: {
      width: 800,
      height: 400,
      nodeWidth: 20,
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: 600,
      edgeOpacity: 0.2
    }
  };

  sankeyData2: SankeyData = {
    nodes: [
      {id: 'Homepage', title: 'Homepage'},
      {id: 'ProductPage', title: 'Product Page'},
      {id: 'Cart', title: 'Cart'},
      {id: 'Checkout', title: 'Checkout'},
      {id: 'Exit', title: 'Exit'}
    ],
    edges: [
      {source: 'Homepage', target: 'ProductPage', value: 300, type: "Homepage"},
      {source: 'Homepage', target: 'Exit', value: 100, type: "Homepage"},
      {source: 'ProductPage', target: 'Cart', value: 200, type: "Homepage"},
      {source: 'ProductPage', target: 'Exit', value: 100, type: "A"},
      {source: 'Cart', target: 'Checkout', value: 150, type: "E"},
      {source: 'Cart', target: 'Exit', value: 50, type: "F"},
      {source: 'Checkout', target: 'Exit', value: 150, type: "A"}
    ],
    options: {
      order: [
        [["Homepage"]], [["ProductPage", "Cart"]], [["Cart", "Checkout"]], [["Checkout", "Exit"]], [["Exit"]]
      ],
      alignLinkTypes: false
    }
  };

  sankeyOptions2: SankeyOptions = {
    graphOptions: {
      width: 800,
      height: 600,
      canvasStyle: 'border: 1px solid #caced0',
      spacing: 100,
      nodeWidth: 20,
      nodeBorderWidth: 1,
      nodeBorderColor: '#000',
      onNodeClick: (node) => console.log('Node clicked:', node),
      edgeOpacity: 0.4,
      edgeGradientFill: true,
      enableTooltip: true,
      tooltipId: 'sankey-tooltip-container',
      tooltipBorderColor: '#BCBCBC',
      tooltipBGColor: '#FFFFFF',
      fontSize: '14px',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 400,
      fontColor: '#212121',
      tooltipTemplate: (data: any) => {
        return `
          <div style='display:flex; align-items:center; gap:10px; padding:8px;'>
            <div style='display:flex; align-items:center;'>
              <div style='width:14px; height:14px; background-color:${data.source.color}; border-radius:50%;'></div>
              <div style='margin-left:8px; font-size:14px; color:#666;'>${data.source.title}</div>
            </div>
            <div style='font-size:14px; color:#666;'>&rarr;</div>
            <div style='display:flex; align-items:center;'>
              <div style='width:14px; height:14px; background-color:${data.target.color}; border-radius:50%;'></div>
              <div style='margin-left:8px; font-size:14px; color:#666;'>${data.target.title}</div>
            </div>
            <div style='margin-left:auto; font-size:14px; color:#666;'>Value: <strong>${data.value}</strong></div>
          </div>
        `;
      }
    }
  };

  sankeyData3: SankeyData = {
    nodes: [
      {id: 'Source1', title: 'Source 1'},
      {id: 'Source2', title: 'Source 2'},
      {id: 'Source3', title: 'Source 3'},
      {id: 'Source4', title: 'Source 4'},
      {id: 'Target1', title: 'Target 1'},
      {id: 'Target2', title: 'Target 2'},
      {id: 'Target3', title: 'Target 3'},
      {id: 'Target4', title: 'Target 4'},
      {id: 'Target5', title: 'Target 5'},
      {id: 'Target6', title: 'Target 6'},
      {id: 'Target7', title: 'Target 7'},
      {id: 'Target8', title: 'Target 8'}
    ],
    edges: this.generateRandomEdges()
  };

  // String representations for highlighting
  sankeyOptions1String!: string;
  sankeyOptions2String!: string;
  sankeyData2String!: string;
  sankeyData3String!: string;

  // Function string for display
  generateRandomFunction: string = `
    ngOnInit() {
      setInterval(() => {
        this.updateSankeyData();
      }, 3000);
    }

    generateRandomEdges(): any[] {
      const sources: string[] = ['Source1', 'Source2', 'Source3', 'Source4'];
      const targets: string[] = ['Target1', 'Target2', 'Target3', 'Target4', 'Target5', 'Target6', 'Target7', 'Target8'];
      const edges: any[] = [];

      sources.forEach(source => {
        targets.forEach(target => {
          if (Math.random() > 0.5) { // Random condition to create an edge
            edges.push({
              source: source,
              target: target,
              value: Math.floor(Math.random() * 100) + 1 // Random value between 1 and 100
            });
          }
        });
      });

      return edges;
    }

    updateSankeyData() {
      this.sankeyData3 = {
        ...this.sankeyData3,
        edges: this.generateRandomEdges()
      };
    }
  `;

  ngOnInit() {
    // Update data every 3 seconds
    setInterval(() => {
      this.updateSankeyData();
    }, 3000);

    // Convert options to string for display
    this.sankeyOptions1String = 'sankeyOptions1: SankeyOptions = ' + JSON.stringify(this.sankeyOptions1, null, 2);
    this.sankeyOptions2String = 'sankeyOptions2: SankeyOptions = ' + JSON.stringify(this.sankeyOptions2, null, 2);
    this.sankeyData2String = 'sankeyData2: SankeyData = ' + JSON.stringify(this.sankeyData2, null, 2);
    this.sankeyData3String = 'sankeyData3: SankeyData = ' + JSON.stringify(this.sankeyData3, null, 2);
  }

  // Generate random edges for dynamic Sankey data
  generateRandomEdges(): any[] {
    const sources: string[] = ['Source1', 'Source2', 'Source3', 'Source4'];
    const targets: string[] = ['Target1', 'Target2', 'Target3', 'Target4', 'Target5', 'Target6', 'Target7', 'Target8'];
    const edges: any[] = [];

    sources.forEach(source => {
      targets.forEach(target => {
        if (Math.random() > 0.5) { // Random condition to create an edge
          edges.push({
            source: source,
            target: target,
            value: Math.floor(Math.random() * 100) + 1 // Random value between 1 and 100
          });
        }
      });
    });

    return edges;
  }

  // Update Sankey data with new random edges
  updateSankeyData() {
    this.sankeyData3 = {
      ...this.sankeyData3,
      edges: this.generateRandomEdges()
    };
  }
}
