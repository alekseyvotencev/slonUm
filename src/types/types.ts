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
}

export interface ITimer {
  endtime: Date;
}

export const AdvantagesListArray = [
  {
    id: 'star',
    description: 'Шанс занять 1 место — в вашем городе и по всей России'
  },
  {
    id: 'winner',
    description: 'Развитие самостоятельности + свободное время для родителей ;)'
  },
  {
    id: 'certification',
    description: 'Персональный диплом в разных номинациях каждому участнику'
  },
  {
    id: 'gift',
    description: 'Призы и скидки для подписчиков и авторизованных пользователей'
  },
  {
    id: 'email',
    description: 'Бесплатный диплом на email — через 1 день после конкурса'
  },
  {
    id: 'vk',
    description: 'Публикация работ победителей во ВКонтакте.'
  },
]

export const QAList = [
  {
    title: 'Может ли ребёнок заниматься самостоятельно?',
    content: 'Да'
  },
  {
    title: 'Как происходит оплата?',
    content: 'Оплатить могут только авторизованные пользователи. Оплата совершается с помощью сервиса SberPay. Данный сервис позволит быстро и безопасно оплатить заявку.'
  },
  {
    title: 'Есть ли гарантии усвоения материала?',
    content: 'Да'
  },{
    title: 'С кем будет общаться мой ребёнок?',
    content: 'Да'
  },
  {
    title: 'Каковы принципы обучения?',
    content: 'Да'
  },
  {
    title: 'Сколько раз в неделю можно заниматься?',
    content: 'Да'
  },
]

export type AdvantagesItemProps = {
  id: string,
  description: string,
}
