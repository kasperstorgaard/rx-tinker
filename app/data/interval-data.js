import template from './interval-data.html';
import Rx from 'rxjs/Rx';

export default {
    mounted() {
        const data = Rx.Observable.interval(500);
        this.$emit('out', {data});
    },
    template
};