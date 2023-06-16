import { Post } from '../api/news.api';
// import { newsTags } from './newsTags';
import  data  from '../api/data/diff-work.json';

// const avatar1 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar1.webp';
// const avatar2 = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar2.webp';

// const { health, covid } = newsTags;
const dataProject = data.diff_work_24_02_2023
export const dashboardNewsDiffWork: Array<Post> = dataProject

