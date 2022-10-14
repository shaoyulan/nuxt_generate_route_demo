const mix = {
  parseISODate(ISODateString){
    var date = new Date(ISODateString);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var date = date.getDate();
    var monthShort = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ][m];
  
    return {
      year: y,
      month: m,
      date,
      // 月份-短
      monthShort,
    }
  },
  rwdVal(minScreen, minValue, maxScreen, maxValue, viewWidth = window.innerWidth){
    var a = (maxValue - minValue) / (maxScreen - minScreen);
    var b = minValue - a * minScreen;
    var result = 0;

    if (b < 0) {
        result = (a * viewWidth - Math.abs(b))
    } else {
        result = (a * viewWidth + b)
    }

    if ( !result ) {
        result = 0;
    }

    return result;
  },
  appRwdVal(minScreen, minValue, maxScreen, maxValue){
    var viewWidth = window.innerWidth;

    if ( viewWidth > maxScreen ) {
        viewWidth = maxScreen;
    }

    if ( viewWidth < minScreen ) {
        viewWidth = minScreen
    }

    return mix.rwdVal(minScreen, minValue, maxScreen, maxValue, viewWidth)
  },
  openLineApp(id){
    var a = document.createElement('a');
    if ( !id ) return;
  
      if ( Device.isAgentMobile ){
          /**
            * 官方建議使用此新版line url scheme
            * - 目前還不支援電腦版Line開啟。會打開QR code的網頁
            * - 在手機版會直接打開 line app。不會經過詢問
            * */
          a.href = '<https://line.me/R/ti/p/@'> + id;
      } else {
          /**
            * 官方不建議使用此舊版line url scheme
            * - 可以在電腦版直接打開line app。會先經過詢問
            * - 可以在手機版直接打開line app。會先經過詢問
            * */
          a.href = 'line://ti/p/@' + id;
      }
  
      a.target = '_blank';
      a.click()
  }
}

export default function ({}, inject) {
  inject('mix', mix)
}

export {
  mix
}