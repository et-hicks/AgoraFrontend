export type UserBannerProps = {
    userId: string
}

export type GenericButtonProps = {
    displayText?: string
}

export type ThreadPageRequest = {

    topic?: string,
    createdBefore?: number,

}

export type ThreadPageResponse = {
    title: string,
    description: string,
    createdAt: number,
    creator: UserDisplayInfo
    contributors: UserDisplayInfo[]
}

export type UserDisplayInfo = {
    username: string,
    userPageURL: string,
    contributeLevel: number
}



//     {
//         "title": "a thread",
//         "description": "suerp long and very important description item that is also very cool and nifty and neat yesyesyes",
//         "createdAt": 1651035861000,
//         "creator": {
//             "username": "etc_pie",
//             "userPageURL": "/path/to/users/page",
//             "level": 3
//         },
//         "contributors": [
//             {
//                 "username": "NOPE",
//                 "userPageURL": "/path/to/users/page",
//                 "level": 1
//             },
//             {
//                 "username": "YESS",
//                 "userPageURL": "/path/to/users/page",
//                 "level": 1
//             }
//         ],
//         "comments": 4
//     }