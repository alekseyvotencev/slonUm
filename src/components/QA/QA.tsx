import React from 'react'
import './QA.css'
import '../../../node_modules/react-accordion-ts/src/panel.css'
import { Accordion } from 'react-accordion-ts';
import { QAList } from '../../types/types';
import AccordionTitleItem from '../AccordionTitleItem/AccordionTitleItem';
import AccordiomContentItem from '../AccordiomContentItem/AccordiomContentItem';

const QA: React.FC = () => {

  const items = QAList.map(({ title, content }) => ({
    title: <AccordionTitleItem title={title} key={title} />,
    content: <AccordiomContentItem content={content} key={content} />
  }));

  return (
    <section className='qa'>
      <div className="container">
        <h3 className='qa__title'>Вопрос/Ответ</h3>
        <Accordion items={items} duration={300} multiple={true} />
      </div>
    </section>
  )
}

export default QA
