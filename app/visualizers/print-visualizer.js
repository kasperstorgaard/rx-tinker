import template from './print-visualizer.html';

export default {
    data () {
        return {value: 0}
    },
    props: ['in'],
    watch: {
        in(observable) {
            if (!observable) {
                return;
            }
            observable.subscribe((value) => this.value = value);
        }
    },
    template
};