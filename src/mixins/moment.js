import moment from 'moment-timezone';
import 'moment/locale/pt-br';

moment.locale('pt-br');
moment.updateLocale('pt-br', {
  dow: 1,
  doy: 7,
  weekdaysShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
});

export default {
  methods: {
    tzMoment (d) {
      return moment(d || new Date()).tz('America/Sao_Paulo');
    }
  }
};
