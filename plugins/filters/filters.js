import Vue from 'vue';

const toUpperCase = (value) => {
  return value.toUpperCase();
}

const shorten = (value) => {
  const amountOfSigns = 80;
  if (value.length <= amountOfSigns) {
    return value;
  }
  return value.substring(0, amountOfSigns - 1) + '...';
}

const addLeadingZero = (value) => {
  if (value > 0 && value < 10) {
    return '0' + value;
  }
  return value + '';
}

const formatDate = (value) => {
  const day = value.getDate();
  const monthIndex = value.getMonth();
  const year = value.getFullYear();

  return addLeadingZero(day) + '.' + addLeadingZero(monthIndex + 1) + '.' + year;
}

Vue.filter('toUpperCase', toUpperCase);
Vue.filter('shorten', shorten);
Vue.filter('formatDate', formatDate);
