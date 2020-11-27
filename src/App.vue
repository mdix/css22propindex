<template>
  <div id="app">
    <h1 style="text-transform: uppercase">Sortable CSS 2.2 property list</h1>
    <p style="width: 90ch">
      Created from <a href="https://www.w3.org/TR/CSS22/propidx.html">CSS 2.2 property table</a>.<br/>
      <a href="https://gist.github.com/mdix/bdb6cfd9738c851466848e22a7ef7ca6">This code</a>
      was used to extract the data from the table linked above.
      <br /><br />
      <strong>(i) Click a column to sort asc / desc.</strong>
    </p>
    <hot-table :data="props" :settings="settings" />
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue';
import propindex from './data/propindex.json';

export default {
  name: 'App',
  components: {
    HotTable
  },
  data() {
      return {
          settings: {
            colHeaders: [
              'Name',
              'Inherited?',
              'Initial value',
              'Applies to (Default: all)',
              'Values',
              'Percentages (Default: N/A)',
              'Media groups'
            ],
            columns: [
              {
                type: 'text',
              },
              {
                type: 'checkbox',
                readOnly: true,
                columnSorting: {
                  compareFunctionFactory: function compareFunctionFactory(sortOrder) {
                    return function comparator(a) {
                      return sortOrder === 'asc' ? !a : a;
                    };
                  }
                }
              },
              {
                type: 'text',
              },
              {
                type: 'text',
              },
              {
                type: 'text',
              },
              {
                type: 'text',
              },
              {
                type: 'text',
              },
            ],
            width: '100%',
            colWidths: [
                150,
                100,
                500,
                200,
                150,
                220,
                150,
            ],
            search: true,
            editor: false,
            columnSorting: {
              sortEmptyCells: true,
              initialConfig: {
                column: 1,
                sortOrder: 'asc'
              },
            },
            licenseKey: 'non-commercial-and-evaluation'
          }
      }
  },
  computed: {
    props() {
      return propindex.map(i => {
          const values = Object.values(i);
          return [
              values[0],
              values[4],
              values[1],
              values[2],
              values[3],
              values[5],
              values[6],
          ];
      });
    }
  }
}
</script>

<style>
@import '~handsontable/dist/handsontable.full.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.handsontable th {
  text-align: left;
  padding: 5px;
  font-weight: bold;
}

.handsontable td {
  vertical-align: middle;
  padding: 5px;
}

.handsontable tr td:nth-child(2) {
  text-align: center;
}
</style>
