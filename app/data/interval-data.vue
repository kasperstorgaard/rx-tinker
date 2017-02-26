<template></template>
<script>
    import Rx from 'rxjs/Rx';

    export default {
        mount() {
            const observable = Rx.Observable.interval(500);
            this.$emit('observable', {observable});
        }
    };
</script>