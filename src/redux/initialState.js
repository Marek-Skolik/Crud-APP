const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            category: 'Sport',
            author: 'John Doe'
        },

        {
            id: '2',
            title: 'Article title II',
            shortDescription: "Short description of the article...",
            content: 'Main content of the article',
            publishedDate: new Date('04.05.2004'),
            category: 'News',
            author: 'John Doe'
        },

        {
            id: '3',
            title: 'Article title III',
            shortDescription: "Short description of the article...",
            content: 'Main content of the article',
            publishedDate: new Date('15.12.1999'),
            category: 'Sport',
            author: 'John Doe'
        }
    ],

    categories : [
        'Sport', 
        'News', 
        'Movies'
      ]
}

export default initialState;