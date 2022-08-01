import React from 'react'
import './QA.css'
import '../../../node_modules/react-accordion-ts/src/panel.css'
import { Accordion } from 'react-accordion-ts';
import { QAList } from '../../types/types';
import AccordionItem from '../AccordionItem/AccordionItem';

const QA = () => {

  const items = QAList.map(({ title, content }) => ({
    title: <AccordionItem title={title} />,
    content: <p>{content}</p>
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
