import { kanbanTags } from './kanbanTags';
import { kanbanPeople } from './kanbanPeople';

const { high, medium, low, ui, dev } = kanbanTags;
const { anna, pavel } = kanbanPeople;

export const kanbanData = {
  lanes: [
    // {
    //   id: '1',
    //   title: 'Backlog',
    //   cards: [
    //     {
    //       id: '11',
    //       title: 'Marketing',
    //       description:
    //         'Nam augue nibh, lobortis quis velit quis, pretium ultricies ante. Aenean nisi nibh, ornare id augue id, pharetra feugiat orci.',
    //       tags: [high],
    //       participants: [anna, pavel],
    //     },
    //     {
    //       id: '12',
    //       title: 'Build a sales team',
    //       description:
    //         'Fusce facilisis massa mauris, id varius justo ornare sit amet. Vivamus ut blandit nibh. Curabitur in feugiat mi.',
    //       tags: [medium, dev],
    //       participants: [anna, pavel],
    //     },
    //     {
    //       id: '13',
    //       title: 'Explain every detail of the product',
    //       description:
    //         'Praesent eget eleifend neque, a fermentum ex. Etiam ligula tellus, fringilla lobortis ultricies at, congue id sapien. Proin ex urna, accumsan id mattis sit amet, bibendum sed neque. Suspendisse consectetur justo purus. Duis sit amet ornare risus.',
    //       tags: [low, dev],
    //       participants: [anna, pavel],
    //     },
    //   ],
    // },
    {
      id: '1',
      title: 'Tuần 1 Tháng 2',
      cards: [
        {
          id: '21',
          title: 'Họp daily thứ 3!',
          description:
            'Không có phát sinh',
          tags: [ui],
          participants: [anna],
        },
        {
          id: '22',
          title: 'Họp daily thứ 6!',
          description:
            'Hoàn thành bugs cập nhật nhân sự',
          tags: [medium],
          participants: [anna, pavel],
        },
      ],
    },
    {
      id: '2',
      title: 'Tuần 2 tháng 2',
      cards: [
        {
          id: '31',
          title: 'Họp daily thứ 4',
          description:
            'Có bugs lấy thông tin người dùn,Có bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùnCó bugs lấy thông tin người dùn',
          tags: [high, dev],
          participants: [pavel],
        },
        {
          id: '32',
          title: 'Họp daily thứ 4',
          description: `Hoàn thành bugs`,
          tags: [low, dev],
        },
        {
          id: '33',
          title: 'Họp daily thứ 6',
          description:
            'Không có phát sinh',
          tags: [low],
        },
      ],
    },
    {
      id: '3',
      title: 'Tuần 3 tháng 2',
      cards: [
        {
          id: '41',
          title: 'Họp daily thứ 2',
          description:
            'Hoàn thành',
          tags: [medium],
        },
        {
          id: '42',
          title: 'Họp daily thứ 4',
          description: `Không có phát sinh`,
          tags: [low, dev],
        },
      ],
    },
  ],
};
