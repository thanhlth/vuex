
<template>
    <div class="col-sm-6 col-md-4">
        
            <div class="card" style="width: 28rem;" >
                <h3 class="card-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}})</small>
                </h3>
                <div class="card-text pull-left">
                <div >
                    <input type="text"
                    class="form-control"
                    placeholder="quantity"
                    v-model="quantity"
                    :class="{danger :insufficientFunds}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" 
                    @click="buyStock"
                    :disable="insufficientFunds || quantity <=0 || !Number.isInteger(quantity)">
                    {{insufficientFunds ? 'Insufficient Funds':'Buy'}}</button>
                </div>
            </div>
            
                

            </div>
        
    </div>
</template>
<script>
export default {
    props:['stock'],
    data(){
        return{
 quantity:0
  }
    },
    computed: {
        funds(){
            return this.$store.getters.funds;
        },
insufficientFunds(){
    return this.quantity * this.stock.price > this.funds;
}
    },
    methods:{
        buyStock(){
            const order={

                stockId:this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity=0;
        },
           }
}
</script>
<style>
.card {
    margin-bottom:60px ;
}
.danger{
    border: 1px solid red;
}
</style>