export type IPosts = {
    count: number,
    next: string,
    previous: null,
    results: IPostResult[]
}

export type IPostResult = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num?: number,
    title: string,
    author: number

}

export const PostsArray: IPosts = {
    "count": 200,
    "next": "http://studapi.teachmeskills.by/blog/posts/?limit=10&offset=10",
    "previous": null,
    "results": [
        {
            "id": 85,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/898d74b05f9f08983876e998acf84076.jpeg",
            "text": "У каждого из нас есть повод быть недовольным своим телом. Тут что-то мешает, там натирает, а жир с живота иногда хочется просто взять и растопить. Но так это не работает: из проблемных зон лишнее уходит в последнюю очередь. К этому моменту многие теряют интерес к правильному питанию и тренировкам и машут на себя рукой: «Ну, не будет у меня идеальной фигуры, и ладно». Вместе с опытным тренером из «Мира фитнеса» хотим убедить вас в обратном: все возможно, главное — правильный настрой и системный подход.\r\n\r\nПри одном и том же росте и весе мы выглядим по-разному — это факт. Придумано множество классификаций: людей сравнивают то с фруктами («груша», «яблоко», «банан» и так далее), то с геометрическими фигурами («квадрат», «перевернутый треугольник», «овал»). В культуризме принято говорить о трех основных типах фигуры: эктоморф, мезоморф и эндоморф.\r\n\r\n— Все достаточно просто. Есть высокие и стройные люди, у которых минимум подкожного жира и мышечной массы (эктоморф). Есть средние — которым все по плечу, они могут набирать и сбрасывать вес моментально (мезоморф). И есть люди, склонные к полноте, — у них широкая кость, масса тела выше нормы (эндоморф). Это актуально как для мужчин, так и для женщин, — рассказывает тренер Владимир Клименок.",
            "date": "2022-06-13",
            "lesson_num": 666,
            "title": "Как растопить жир в проблемных зонах? Советы тренера для обладателей пяти типов фигур",
            "author": 397
        },
        {
            "id": 2,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
            "text": "Text",
            "date": "2021-10-07",
            "lesson_num": 48,
            "title": "Title",
            "author": 7
        },
        {
            "id": 3,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
            "text": "Hello!",
            "date": "2021-10-07",
            "lesson_num": 23,
            "title": "B-52!",
            "author": 97
        },
        {
            "id": 4,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_5c5gF9H.jpeg",
            "text": "Hi",
            "date": "2021-10-07",
            "lesson_num": 22,
            "title": "b-52",
            "author": 97
        },
        {
            "id": 5,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg",
            "text": "Test",
            "date": "2021-10-07",
            "lesson_num": 59,
            "title": "b-52",
            "author": 97
        },
        {
            "id": 6,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-10-07_%D0%B2_10.12.21.png",
            "text": "Hello",
            "date": "2021-10-07",
            "lesson_num": 44,
            "title": "b-52",
            "author": 99
        },
        {
            "id": 7,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_Akeb3ob.jpeg",
            "text": "Hello2",
            "date": "2021-10-07",
            "lesson_num": 441,
            "title": "b-52!!",
            "author": 99
        },
        {
            "id": 8,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-10-08_%D0%B2_11.32.46.png",
            "text": "На чиле",
            "date": "2021-10-08",
            "lesson_num": 100,
            "title": "b-52!!",
            "author": 122
        },
        {
            "id": 9,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/a1.JPG",
            "text": "Blablablalba",
            "date": "2021-10-08",
            "lesson_num": 49,
            "title": "BLABLABLA",
            "author": 123
        },
        {
            "id": 10,
            "image": "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
            "text": "my sisters cat",
            "date": "2021-10-08",
            "lesson_num": 49,
            "title": "Cat Niira",
            "author": 123
        }
    ]
}