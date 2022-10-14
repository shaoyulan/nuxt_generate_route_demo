<template>
  <div 
    ref="refRoot" 
    class="auth-code-field" 
    :class="{
      'auth-code-field_error': isError
    }"
  >
    <div class="auth-code-field__main">
      <div class="field-item">
        <input type="text" inputmode="numeric" :placeholder="placeholderHTML"  ref="ipt1">
      </div>
      <div class="field-item">
        <input type="text" inputmode="numeric" :placeholder="placeholderHTML"  ref="ipt2">
      </div>
      <div class="field-item">
        <input type="text" inputmode="numeric" :placeholder="placeholderHTML"  ref="ipt3">
      </div>
      <div class="field-item">
        <input type="text" inputmode="numeric" :placeholder="placeholderHTML"  ref="ipt4">
      </div>
    </div>
    <div v-if="errorMsg" class="auth-code-field__error">
      <img src="~/assets/img/icon/status_alert.svg" alt="" srcset="">
      {{errorMsg}}
    </div>
  </div>
</template>

<script>
export default {
    props:{
      isError: Boolean,
      errorMsg: String,
      modelValue: {
        default: "",
      },
    },
    emits: ['update:modelValue'],
    data: () => ({ 
      placeholderHTML: ''
    }),
    watch:{
      isError(){
        if ( this.isError ){

        }
      }
    },
    mounted(){

      const iptArr = [
        this.$refs['ipt1'],
        this.$refs['ipt2'],
        this.$refs['ipt3'],
        this.$refs['ipt4'],
      ]

      console.log('slots', this.$refs);

      const combineValue = ()=> {
        var result = '';
        iptArr.forEach((ipt) => {
            if ( ipt && ipt.value ) {
              result += String($(ipt.value).val());
            }
        });
        return result;
      }

      function updateUI(){
        //  若一次貼上一組數字，則自動分配到各欄位
        iptArr.forEach((ipt, idx)=>{
          var iptEl = $(ipt);
          var ipt = iptEl;
          var iptVal = ipt.val()
          if ( (!iptVal && iptVal !== 0 && iptVal !== '0') || String(iptVal).length > 1) {
            ipt.css('color', 'transparent')
          } else {
            ipt.css('color', '')
            ipt.addClass('is-has-value')
          }
        })
      }

      updateUI();

      iptArr.forEach((ipt, idx)=>{
        var iptEl = $(ipt);
        iptEl.on('change', function(e){
          var val = String(e.target.value).trim();
          if ( val.length > 1 ) {
              iptArr.forEach((ipt, idx) => {
                if ( val[idx] ) {
                  var ipt = $(ipt)[0]
                  
                  ipt.value  = val[idx];

                  var evt = document.createEvent("HTMLEvents");
                  evt.initEvent("change", false, true);
                  ipt.dispatchEvent(evt);
                }
              })
          }
          updateUI()
        });

        iptEl.on('input', function(e){
          updateUI()
        });

        iptEl.on('keypress', function(e){
          // keypress只會針對可以輸出文字符號的按鍵有效，也就是說ESC、方向鍵、倒退鍵......等等。
          // 這類沒有辦法輸出文字的鍵無法觸發該事件
          // 會因為大小寫的不同取得不同的keyCode
          var charCode = (e.which) ? e.which : e.keyCode;
          
          // keypress 階段娶不到輸入值
          // 故使用 charCode 判斷
          if (charCode > 31 && (charCode < 48 || charCode > 57)) { 
              // 禁止非數字
              e.preventDefault();
          } 
          if ( e.target.value ) {
              // 當前已欄位已有值
              e.preventDefault();
          }
          updateUI()
        });

        iptEl.on('keyup', function(e){
          var charCode = (e.which) ? e.which : e.keyCode;
          var value = parseInt(e.target.value);
          var isNum = isNaN(value) ? false:true;
          if ( charCode === 8 ) {
            // 往前一格
            if ( iptArr[idx - 1] ) {
                $(iptArr[idx - 1]).focus()
            }
          } else {
            if ( isNum ) {
                if ( iptArr[idx + 1] ) {
                  $(iptArr[idx + 1]).focus()
                }
            }
          }
         })
      });

      this.$emit('init', {
        getValue(){
          return combineValue();
        }
      })

    },
};
</script>

<style lang="scss">
@import "~assets/css/design";

// indicator-link
.auth-code-field{
  --height: 140px;
  --border-width: 1px;
  --font-size: 64px;

  width: 520px;
  background: #fff;
  margin-bottom: 15px;
  overflow: hidden;

  &__main{
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  &__error{
    font-size: 14px;
    line-height: calc(24 / 14);
    letter-spacing: 1.2px;
    color: #DD3835;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 12px;
    }
  }

  .field-item{
    flex-grow: 1;
    position:relative;
    margin: 0 12px;

    &:first-child{
      margin-left: 0;
    }

    &:last-child{
      margin-right: 0;
    }

    + .field-item{
    }
  }

  input{
    caret-color: #000!important;
    height: calc(var(--height) - (var(--border-width) * 2));
    border: var(--border-width) solid #D3D3D3;
    border-radius: 4px;
    width: 100%;
    text-align: center;
    font-size: var(--font-size);
    background: none;
    font-family: $ff-open-sans;
    font-weight: 600;
    line-height: calc(87 / 64);
    letter-spacing: 1.2px;
    text-indent: 1.2px;
    color: #000;
    &::-webkit-input-placeholder{
      line-height: 1;
    }

    &:focus, &:active{
      outline: 0;
    }

    &:focus{
      border: var(--border-width) solid #252525;
    }
  }

  &_error{
    input{
      border-color: #E7142D!important;
      background: #FFEBED!important;
    }
  }
}
// indicator-link /

</style>
