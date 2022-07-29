export type ButtonPropsTypes = {
  children: React.ReactNode;
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

export type AdvantagesItemProps = {
  id: string,
  description: string,
}
