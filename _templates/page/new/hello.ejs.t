---
to: "pages/<%= name %>.vue"
---
<template>
    <v-container>
    </v-container>
</template>

<script>
export default {
    name: 'IndexPage',
    layout: 'fluid',
    props:{

    },
    data: () => ({ 
        isMobile: 'test text' 
    }),
    mounted(){
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";


</style>
