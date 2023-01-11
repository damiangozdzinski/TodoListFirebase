import { nanoid } from 'nanoid';

export const newListMock = {
  lists: [
    {
      id: nanoid(),
      name: 'TestItem 1',
      createData: new Date(),
      todo: [
        {
          id: nanoid(),
          title: 'AAA Item title 1',
          done: false,
          createData: new Date(),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus tortor neque, vel ultricies erat euismod vitae. Donec felis odio, lacinia eu dictum at, interdum vitae augue. Duis non enim eu enim molestie vulputate ac in eros. Quisque ac auctor nunc. Nunc euismod mollis eleifend. Donec volutpat metus non erat aliquam, quis bibendum mauris aliquam. Nam scelerisque, dolor vel tristique fringilla, lacus dui interdum ante, id rutrum felis velit sit amet felis.'
        },
        {
          id: nanoid(),
          title: 'CCC Item title 2',
          done: false,
          createData: new Date(),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus tortor neque, vel ultricies erat euismod vitae. Donec felis odio, lacinia eu dictum at, interdum vitae augue. Duis non enim eu enim molestie vulputate ac in eros. Quisque ac auctor nunc. Nunc euismod mollis eleifend. Donec volutpat metus non erat aliquam, quis bibendum mauris aliquam. Nam scelerisque, dolor vel tristique fringilla, lacus dui interdum ante, id rutrum felis velit sit amet felis.'
        },
        {
          id: nanoid(),
          title: 'BBB Item title 3',
          done: false,
          createData: new Date(),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus tortor neque, vel ultricies erat euismod vitae. Donec felis odio, lacinia eu dictum at, interdum vitae augue. Duis non enim eu enim molestie vulputate ac in eros. Quisque ac auctor nunc. Nunc euismod mollis eleifend. Donec volutpat metus non erat aliquam, quis bibendum mauris aliquam. Nam scelerisque, dolor vel tristique fringilla, lacus dui interdum ante, id rutrum felis velit sit amet felis.'
        }
      ]
    }
  ]
};
