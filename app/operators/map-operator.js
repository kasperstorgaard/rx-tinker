import template from './map-operator.html';

export default {
    props: ['in'],
    watch: {
        in(observable) {
            if (!observable) {
                return;
            }
            const data = observable.map(val => val * 10);
            this.$emit('out', {data});
        }
    },
    template
};