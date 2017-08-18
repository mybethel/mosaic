import './components';

import Detail from './detail';
import Slide from './slide';

export default {
  title: 'Lyrics',
  color: '#c657fa',
  routes: [
    {
      component: Detail,
      name: 'lyrics',
      path: '/lyrics/:id',
      props: true,
      children: [
        {
          component: Slide,
          name: 'lyrics.slide',
          path: ':slideId',
          props: true,
        },
      ],
    },
  ],
};
