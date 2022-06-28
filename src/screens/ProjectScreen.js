import React from 'react';
import Project from '../component/Project';

const dataProjects = [
  {
    
    previewImgLink: '/images/bsclauchpad.png',
    name: 'Bsclauchpad',
    introduction: 'Giao diện trang web bán giày chính hảng',
    description:
      'Dự án này được lấy toàn bộ ý tưởng và giao diện ở trang https://bscpad.com/',
    technologiesUsed: 'ReactJS, React-router-dom, Redux',
    projectColor: '#ffd141',
    detailProjectLink: 'https://bsclauchpad-chi.vercel.app/',
  },
  {
    
    previewImgLink: '/images/previewImgQuaTet.png',
    name: 'Quà tết',
    introduction: 'Giao diện trang web bán giày chính hảng',
    description:
      'Dự án này được lấy toàn bộ ý tưởng và giao diện ở trang quatet.orion.vn',
    technologiesUsed: 'ReactJS, React-router-dom',
    projectColor: '#ffd141',
    detailProjectLink: 'https://quatetorion.vercel.app/',
  },
  {
    
    previewImgLink: '/images/previewImg3.png',
    name: 'Shoes Store',
    introduction: 'Giao diện trang web bán giày chính hảng',
    description:
      'Dự án này được lấy toàn bộ ý tưởng và giao diện ở trang shooz.vn',
    technologiesUsed: 'Html, css, javascript',
    projectColor: '#ffd141',
    detailProjectLink: 'https://tmn2611.github.io/Shoes-Store/',
  },
  {
    
    previewImgLink: '/images/previewImg4.png',
    name: 'Covid19 ',
    introduction: 'Giao diện trên trang figma store langding page miễn phí',
    description: 'Giao diện trên Figma store được chuyển đổi  sang Html css',
    technologiesUsed: 'Html, sass, javascript',
    projectColor: '#FA5652',
    detailProjectLink: 'https://tmn2611.github.io/Covid19/',
  },
  {
    
    previewImgLink: '/images/previewImg5.png',
    name: 'LaslesVPN',
    introduction: 'Giao diện trên trang figma store langding page miễn phí',
    description: 'Giao diện trên Figma store  được chuyển đổi  sang Html css',
    technologiesUsed: 'Html, sass, javascript',
    projectColor: '#F53838',
    detailProjectLink: 'https://tmn2611.github.io/LaslesVPN/',
  },
  {
    
    previewImgLink: '/images/previewImg1.png',
    name: 'Sonar App',
    introduction:
      'Ứng dụng đặt thợ , với tiêu chí nhanh chóng - tiện dụng - hiệu quả',
    description:
      'Bạn không biết tìm thợ ở đâu , tìm thợ đã khó tìm được thợ giỏi lại càng khó hơn,Thợ quen biết của bạn hẹn mãi không đến, giá cả quá cao mỗi lần đặt thợ truyền thống. Ứng dụng của chúng tôi sẽ giải quyết tất cả các vấn đề trên , bạn có thể gọi thợ mọi lúc mọi nơi, nhanh chóng, hiệu quả, tiện dụng với giá cả phải chăng,sẽ được bảo hành nếu có hư hỏng phát sinh',
    technologiesUsed: 'React Native, Firebase',
    projectColor: '#ff5230',
    detailProjectLink:
      'https://drive.google.com/file/d/1WEPKeQGSI6zHk9U4_OBwm_9u8a6CW4RW/view?usp=sharing',
  },
  {
    
    previewImgLink: '/images/previewImg2.png',
    name: 'Sonar Partner App',
    introduction:
      'Ứng dụng đặt thợ , với tiêu chí nhanh chóng - tiện dụng - hiệu quả',
    description:
      'Bạn là thợ lành nghề, bạn muốn kết nối với hàng nghìn khách hàng bằng hình thức trực tuyến, tải app ngay',
    technologiesUsed: 'React Native, Firebase',
    projectColor: '#ff5230',
    detailProjectLink:
      'https://drive.google.com/file/d/1Avqcraypv13b-Q9VkdWF7JwIx1KOmjp-/view?usp=sharing',
  },
];
export default function ProjectScreen() {
  return (
    <>
      <div className='project'>
        <div className='section__title' style={{ marginBottom: '70px' }}>
          <span></span>
          <h3>Dự án</h3>
        </div>
        <div className='row'>
          {dataProjects.map((project,index) => {
            return <Project key={index} data={project} />;
          })}
        </div>
      </div>
    </>
  );
}
