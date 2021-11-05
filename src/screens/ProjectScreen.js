import React from 'react';
import Project from '../component/Project';

const dataProjects = [
  {
    id: 1,
    previewImgLink: '/images/previewImg1.png',
    name: 'Sonar App',
    introduction:
      'Ứng dụng đặt thợ , với tiêu chí nhanh chóng - tiện dụng - hiệu quả',
    description:
      'Bạn không biết tìm thợ ở đâu , tìm thợ đã khó tìm được thợ giỏi lại càng khó hơn,Thợ quen biết của bạn hẹn mãi không đến, giá cả quá cao mỗi lần đặt thợ truyền thống. Ứng dụng của chúng tôi sẽ giải quyết tất cả các vấn đề trên , bạn có thể gọi thợ mọi lúc mọi nơi, nhanh chóng, hiệu quả, tiện dụng với giá cả phải chăng,sẽ được bảo hành nếu có hư hỏng phát sinh',
    technologiesUsed: 'React Native, Firebase',
    projectColor: '#ff5230',
    detailProjectLink: 'https://github.com/TMN2611/SonarApp',
  },
  {
    id: 2,
    previewImgLink: '/images/previewImg2.png',
    name: 'Shoes Store',
    introduction: 'Giao diện trang web bán giày chính hảng',
    description:
      'Dự án này được lấy toàn bộ ý tưởng và giao diện ở trang shooz.vn',
    technologiesUsed: 'Html, css, javascript',
    projectColor: '#ffd141',
    detailProjectLink: 'https://tmn2611.github.io/Shoes-Store/',
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
          {dataProjects.map(project => {
            return <Project key={project.id} data={project} />;
          })}
        </div>
      </div>
    </>
  );
}
