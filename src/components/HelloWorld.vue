<template>
  <div class="hello" id="main">
    <h1>Sauna calculator</h1>
    <button @click.prevent="calculate" :disabled="step < 4" :class="{ disabled: step < 4 }">КАЛЬКУЛИРОВАТЬ</button>
    <h3 v-show="showPrice">Final price is <span :class="{greenText: !changed}">{{finalPrice}}</span> </h3>
    <h2 v-show="showPrice">Final price for you: <span :class="{greenText: !changed}">{{finalPriceForOne}}</span> </h2>
    <div class="step" id="first">
        <label for="numberOfPeople">Количество людей: </label>
        <input type="text" name="numberOfPeople" id="numberOfPeople" v-model="numberOfPeople" @focus="onFocusInput()" @keyup.enter="enterClicked()" @change="hourPriceChange()">
    </div>
    <div class="step" id="second" v-show="step >= 2">
        <label for="numberWithoutAdditional">Людей без увеличения стоимости влезает: </label>
        <input type="text" name="numberWithoutAdditional" id="numberWithoutAdditional" @focus="onFocusInput()" v-model="numberWithoutAdditional" @keyup.enter="enterClicked()" @change="hourPriceChange()">
    </div>
    <div class="step" id="third" v-show="step >= 3">
        <label for="hourPrice">Стоимость часа: </label>
        <input type="text" name="hourPrice" id="hourPrice" v-model="hourPrice" @keyup.enter="enterClicked()" @change="hourPriceChange()" @focus="onFocusInput()">
    </div>
    <div class="step" id="fourth" v-show="step >= 4">
        <label for="numOfHours">Количество часов: </label>
        <input type="text" name="numOfHours" id="numOfHours" v-model="numOfHours" @keyup.enter="enterClicked()" @focus="onFocusInput()">
    </div>    
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
          finalPrice: 0,
          finalPriceForOne: 0,
          shoPrice: false,
          changed: false
      }
  },
  mounted(){
    this.$nextTick(() => {
        document.getElementById('numberOfPeople').focus()
      });
    
  },
  computed: {
    showElem2: function () {
      if (this.step >= 2) {
        //this.$refs.numberWithoutAdditional.focus();
        
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
      this.$nextTick(() => {
        this.focusInput();
      });
    }, 
    hourPriceChange() {      
      if (this.numberOfPeople > this.numberWithoutAdditional) {
          this.hourPrice = this.hourPrice * ((10 * (this.numberOfPeople - this.numberWithoutAdditional) / 100) + 1)        
      }
    },
    calculate(){
      this.finalPrice = this.numOfHours * this.hourPrice;
      this.finalPriceForOne = (Math.round((this.finalPrice/this.numberOfPeople) * 100) / 100).toFixed(2)
      this.showPrice = true
      this.changed = false
    },
    onFocusInput(){
      this.changed = true      
    },
    focusInput() {      
      switch (this.step) {
        case 2:
          document.getElementById('numberWithoutAdditional').focus()
          break;
        case 3:
          document.getElementById('hourPrice').focus()
          break;
        case 4:
          document.getElementById('numOfHours').focus()          
          break;
        default:
          break;
      }
      
    }
  }
}
</script>

<style scoped>
.step{
  height: 15%;
  display: flex;
  align-items: center;
  margin: 7px;
}

h3 {
  margin: 40px 0 0;
}
input {
  width: 40px;
}
label{
  width: 250px;
  text-align: right;
  margin-right: 7px;
}
.greenText{
  color: green;
}

span {
  color: orange;
}

.disabled {
  background-color: lightgray;
}

button {
  background-color: cyan;  
}
button:hover {
  background-color: green;
}
</style>
