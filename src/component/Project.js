import React, { useState } from 'react';
import RectangularButton from '../component/UI/Buttons/RectangularButton';

export default function Project({ data ,index}) {
  const {
    id,
    previewImgLink,
    name,

    description,
    technologiesUsed,
    projectColor,
    detailProjectLink,
  } = data;

  const [imgLink, setImgLink] = useState('/images/default-fallback-image.png');

  const handleLoadImg = () => {
    setImgLink(previewImgLink);
  };
  return (
    <>
      <div className='col c-12 md-6 l-6'>
        <div className='project__preview'>
          <div className='project__preview-wrapper'>
            <div className='project__lowerLayer'></div>

            <div className='project__preview-img'>
              <img src={imgLink} alt={'previewImg'} onLoad={handleLoadImg} />
            </div>
          </div>
        </div>
      </div>
      <div className='col c-12 md-6 l-6'>
        <div className='project__introduction'>
          <div>
            <p className='project__index'>Dự án số {index + 1}</p>
            <a
              href={detailProjectLink}
              className='project__name'
              style={{ color: projectColor }}
              target='_blank'
              rel='noopener noreferrer'
            >
              {name}
            </a>
            <p className='project__description'>{description}</p>
            <p className='project__technologiesUsed'>
              Sử dụng: {technologiesUsed}
            </p>

            <RectangularButton
              buttonTitle={'Xem chi tiết'}
              size='normal'
              classAdd='btn-github'
              linkAdress={detailProjectLink}
            />
          </div>
        </div>
      </div>
    </>
  );
}
