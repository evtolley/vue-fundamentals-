<template>
    <div>
        <h1> {{ part.title }}</h1>
        <div>
            {{ part.description}}
        </div>
    </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
    name: 'PartInfo',
    props: { 
        partType: { type: String },
        id: { 
            validator(value) {
                return Number.isInteger(Number(value));
            }
          },
        },
    computed: {
        part() {
            return this.parts[this.partType].find(x => x.id === +this.id);           
        }
    },
    mixins: [getPartsMixin]
};
</script>
