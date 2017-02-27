import template from './app.html';
import './app.css';

import intervalData from './data/interval-data';
import mapOperator from './operators/map-operator';
import printVisualizer from './visualizers/print-visualizer';

export default {
    name: 'app',
    data: () => ({data: null, mapped: null}),
    components: {intervalData, mapOperator, printVisualizer},
    template
};