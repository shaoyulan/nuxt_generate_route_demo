const mix = {
  parseISODate: (ISODateString)=>{
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
  }
}

export default function ({}, inject) {
  inject('mix', mix)
}

export {
  mix
}