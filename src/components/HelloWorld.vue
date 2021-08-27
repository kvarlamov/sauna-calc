<template>
  <div class="hello" id="main">
    <h1>Sauna calculator</h1>  
    <div class="step" id="first">
        <label for="numberOfPeople">Количество людей: </label>
        <input type="text" name="numberOfPeople" id="numberOfPeople" ref="numberOfPeople" v-model="numberOfPeople" @keyup.enter="enterClicked()" @change="hourPriceChange()">
    </div>
    <div class="step" id="second" v-show="showElem2">
        <label for="numberWithoutAdditional">Людей без увеличения стоимости влезает: </label>
        <input type="text" name="numberWithoutAdditional" id="numberWithoutAdditional" ref="numberWithoutAdditional" v-model="numberWithoutAdditional" @keyup.enter="enterClicked()" @change="hourPriceChange()">
    </div>
    <div class="step" id="third" v-show="showElem3">
        <label for="hourPrice">Стоимость часа: </label>
        <input type="text" name="hourPrice" id="hourPrice" v-model="hourPrice" ref="hourPrice" @keyup.enter="enterClicked()" @change="hourPriceChange()">
    </div>
    <div class="step" id="fourth" v-show="showElem4">
        <label for="numOfHours">Количество часов: </label>
        <input type="text" name="numOfHours" id="numOfHours" v-model="numOfHours" ref="numOfHours" @keyup.enter="enterClicked()">
    </div>
    <h3 v-show="step>=5">Final price is {{finalPrice}}</h3>
    <h2 v-show="step>=5">Final price for you: {{finalPrice/numberOfPeople}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
      return {
          step: 1,
          numberOfPeople: 6,
          numberWithoutAdditional: 6,
          hourPrice: 1300,
          numOfHours: 5,
          finalPrice: 0
      }
  },
  mounted(){
    document.getElementById('numberOfPeople').focus()
  },
  computed: {
    showElem2: function () {
      if (this.step >= 2) {
        //this.$refs.numberWithoutAdditional.focus();
        return true;
      }

      return false;
    },
    showElem3: function () {
      if (this.step >=3) { 
        return true;
      }

      return false;
    },
    showElem4: function () {
      if (this.step >= 4) { 
        return true;
      }

      return false;
    }
  },
  methods: {
    enterClicked() {      
      this.step++;
      if (this.step >= 5) {
        this.finalPrice = this.numOfHours * this.hourPrice;
      }      
    }, 
    hourPriceChange() {
      console.log('fired')
        if (this.numberOfPeople > this.numberWithoutAdditional) {
          this.hourPrice = this.hourPrice * ((10 * (this.numberOfPeople - this.numberWithoutAdditional) / 100) + 1)        
      }
    }
  }
}
</script>

<style scoped>
.step{
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

h3 {
  margin: 40px 0 0;
}
input {
  width: 60px;
}
label{
  width: 330px;
  text-align: right;
  margin-right: 10px;
}
</style>
