<template>
    <div class="col-sm-6 col-md-4">
        
            <div class="card" style="width: 28rem;" >
                <h3 class="card-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
                </h3>
                <div class="card-text pull-left">
                <div >
                    <input type="text"
                    class="form-control"
                    placeholder="quantity"
                    v-model="quantity"
                    :class="{danger : insufficientQuantity}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" 
                    @click="sellStock"
                    :disable="quantity <=0 || !Number.isInteger(quantity)">{{insufficientQuantity? 'Not enough':'Sell'}}</button>
                </div>
            </div>
            
                

            </div>
        
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    props:['stock'],
    data(){
        return{
 quantity:0
  }
    },
    computed:{
        insufficientQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods:{
        ...mapActions({
            sellOrder:'sellStock'
        }),
       sellStock(){
           const order ={
               stockId: this.stock.id,
               stockPrice: this.stock.price,
               quantity: this.quantity
           };
           this.sellOrder(order);
           this.quantity=0;
       }
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