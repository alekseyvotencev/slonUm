import React from 'react'
import './Certificates.css'
import certificateImg from '../../img/certificate.png'

const Certificates = () => {
  return (
    <section className='certificates'>
      <div className='container'>
        <div className='certificates__text'>
          <h3 className='certificates__heading'>Выдаём <span className='wavy-underline'>дипломы</span> участникам</h3>
          <p className='certificates__paragraph'>
            Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети!
          </p>
          <p className='certificates__paragraph'>
            Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.
          </p>
          <p className='certificates__paragraph'>
            Со слоном к победам напролом!
          </p>
        </div>
        <img src={certificateImg} alt="Диплом" />
      </div>
    </section>

  )
}

export default Certificates
