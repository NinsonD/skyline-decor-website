// Image imports with types
import placeholder from '../../public/assets/img/home-01/funfact/funfact-placeholder.png';
import one from '../../public/assets/img/home-01/funfact/funfact-1.png';
import two from '../../public/assets/img/home-01/funfact/funfact-2.png';
import three from '../../public/assets/img/home-01/funfact/funfact-3.png';
import four from '../../public/assets/img/home-01/funfact/funfact-4.png';
import five from '../../public/assets/img/home-01/funfact/funfact-5.png';
import six from '../../public/assets/img/home-01/funfact/funfact-6.png';
import seven from '../../public/assets/img/home-01/funfact/funfact-7.png';
import eight from '../../public/assets/img/home-01/funfact/funfact-9.png';
import { Panel } from '@/types/custom-d-t';

// Panel data
const panelsData: Panel[] = [
  {
    id: 1,
    style: 'tp-funfact-green-wrap',
    subtitle: '( Nice! )',
    title: 'Clients <br> satisfied and <br> returning',
    funfactNumber: "right",
    spacingCls: "",
    images: [
      { src: one, delay: 0.3 },
      { src: placeholder, delay: 0.5 },
      { src: placeholder, delay: 0.7 },
      { src: placeholder, delay: 0.9 },
      { src: placeholder, delay: 1.0 },
      { src: two, delay: 1.1 },
      { src: three, delay: 1.2 },
      { src: placeholder, delay: 1.3 },
    ],
    secondaryImages: [
      { src: placeholder, delay: 1.4 },
      { src: four, delay: 1.5 },
      { src: five, delay: 1.6 },
      { src: placeholder, delay: 1.7 },
    ],
    bigImage: { src: six, delay: 0.7 },
    number: '98%',
  },
  {
    id: 2,
    style: 'tp-funfact-green-wrap pink-style',
    subtitle: '( Ho Ho! )',
    title: 'Projects completed <br> across the UAE <br> and GCC',
    funfactNumber: "right",
    spacingCls: "",
    images: [
      { src: one, delay: 0.3 },
      { src: seven, delay: 0.5 },
      { src: eight, delay: 0.7 },
      { src: placeholder, delay: 0.9 },
      { src: placeholder, delay: 1.0 },
      { src: two, delay: 1.1 },
      { src: placeholder, delay: 1.2 },
      { src: placeholder, delay: 1.3 },
    ],
    secondaryImages: [
      { src: placeholder, delay: 1.4 },
      { src: four, delay: 1.5 },
      { src: placeholder, delay: 1.6 },
      { src: five, delay: 1.7 },
    ],
    bigImage: { src: seven, delay: 0.7 },
    number: '125+',
  },
  {
    id: 3,
    style: 'tp-funfact-green-wrap yellow-style',
    subtitle: '( Holy Moly! )',
    title: 'Performing video',
    customCls: "align-items-md-end",
    funfactNumber: "center",
    spacingCls: "pl-140 mb-20",
    images: [
      { src: one },
      { src: two },
      { src: three },
      { src: four },
      { src: placeholder },
      { src: placeholder },
      { src: placeholder },
      { src: placeholder },
    ],
    number: '1Top',
  },
];

export default panelsData;