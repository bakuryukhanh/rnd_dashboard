import { Post } from '../api/news.api';
// import { newsTags } from './newsTags';
import  data  from '../api/data/project.json';

// const avatar1 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar1.webp';
// const avatar2 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar2.webp';

// const { health, covid } = newsTags;
const dataProject = data.project_24_02_2023
export const dashboardNews: Array<Post> = dataProject
// export const dashboardNews: Array<Post> = [
//   {
//     title: 'Sale Online Platform',
//     text: 'Đúng tiến độ',
//     date: Date.now(),
//     img: process.env.REACT_APP_ASSETS_BUCKET + '/med-news/Rectangle_440_1_ayb6yf.webp',
//     avatarUrl: avatar1,
//     author: 'Dr. Dan Reed',
//     tags: [health, covid],
//   },
//   {
//     title: 'Dialo',
//     text: 'Đúng tiến độ',
//     date: Date.now(),
//     img: process.env.REACT_APP_ASSETS_BUCKET + '/med-news/Rectangle_440_1_ayb6yf.webp',
//     avatarUrl: avatar1,
//     author: 'Dr. Dan Reed',
//     tags: [health, covid],
//   },
//   {
//     title: 'Omnichannel',
//     text: 'Đúng tiến độ',
//     date: Date.now(),
//     img: process.env.REACT_APP_ASSETS_BUCKET + '/med-news/Rectangle_440_1_ayb6yf.webp',
//     avatarUrl: avatar1,
//     author: 'Dr. Dan Reed',
//     tags: [health, covid],
//   },
//   {
//     title: 'Dự án khác',
//     text: 'Đúng tiến độ',
//     date: Date.now(),
//     img: process.env.REACT_APP_ASSETS_BUCKET + '/med-news/Rectangle_440_1_ayb6yf.webp',
//     avatarUrl: avatar1,
//     author: 'Dr. Dan Reed',
//     tags: [health, covid],
//   },
// ];
