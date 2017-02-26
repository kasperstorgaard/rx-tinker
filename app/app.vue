<template>
    <div>
        <h1>header</h1>
        <interval-data></interval-data>
        <map-operator></map-operator>
        <print-visualizer></print-visualizer>
    </div>
</template>

<script>
    import intervalData from './data/interval-data.vue';
    import mapOperator from './operators/map-operator.vue';
    import printVisualizer from './visualizers/print-visualizer.vue';

    export default {
        name: 'app',
        components: {
            intervalData, 
            mapOperator,
            printVisualizer
        }
    };
</script>

<style>
    body {
        font : 100% Helvetica, sans-serif;
        color: #ecf0f1;
        text-align: center;
        background-color: #34495e;
    }
    .container {
        margin: 0 auto;
        padding-top: 70px;
    }
</style>