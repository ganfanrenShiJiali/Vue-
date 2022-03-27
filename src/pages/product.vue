<template>
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <div class="btn">
                    立即购买
                </div>
            </template>
        </product-param>
    </div>
</template>
<script>
    import ProductParam from './../components/ProductParam';
    export default {
        name: 'product', //组件名称或者页面名称，加载组件引用的值
        components: {
            ProductParam
        }
    }
</script>
<style lang="scss">
    .product {
        .btn {
            margin-left: 10px;
        }
    }
</style>