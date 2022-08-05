import star from '../img/star.png'
import winner from '../img/winner.png'
import certification from '../img/certification.png'
import gift from '../img/gift.png'
import email from '../img/email.png'
import vk from '../img/vk.png'

export type ButtonPropsTypes = {
  children: React.ReactNode;
  [x: string]: any;
}

export type InputPropsTypes = {
  type: string,
  placeholder: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  [x: string]: any;
}

export type CheckboxPropsTypes = {
  [x: string]: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITimer {
  endtime: Date;
}

export const AdvantagesListArray = [
  {
    icon: star,
    description: 'Шанс занять 1 место — в вашем городе и по всей России'
  },
  {
    icon: winner,
    description: 'Развитие самостоятельности + свободное время для родителей ;)'
  },
  {
    icon: certification,
    description: 'Персональный диплом в разных номинациях каждому участнику'
  },
  {
    icon: gift,
    description: 'Призы и скидки для подписчиков и авторизованных пользователей'
  },
  {
    icon: email,
    description: 'Бесплатный диплом на email — через 1 день после конкурса'
  },
  {
    icon: vk,
    description: 'Публикация работ победителей во ВКонтакте.'
  },
]

export const QAList = [
  {
    title: 'Может ли ребёнок заниматься самостоятельно?',
    content: 'Ответ'
  },
  {
    title: 'Как происходит оплата?',
    content: 'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.'
  },
  {
    title: 'Есть ли гарантии усвоения материала?',
    content: 'Ответ'
  }, {
    title: 'С кем будет общаться мой ребёнок?',
    content: 'Ответ'
  },
  {
    title: 'Каковы принципы обучения?',
    content: 'Ответ'
  },
  {
    title: 'Сколько раз в неделю можно заниматься?',
    content: 'Ответ'
  },
]

export type AdvantagesItemProps = {
  icon: string,
  description: string,
}

export type AccordionTitleItemProps = {
  title: string
};

export type AccordionContentItemProps = {
  content: string
};

export enum MsInTime {
  MS_IN_DAY = 24 * 60 * 60 * 1000,
  MS_IN_HOUR = 60 * 60 * 1000,
  MS_IN_MINUTE = 60 * 1000,
  MS_IN_SECOND = 1000,
}

export const endCompetition = new Date('2022.08.08');
