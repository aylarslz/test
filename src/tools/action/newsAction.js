export const addNews = ({cTitle,cImg,cCat})=>({
    type:"ADD_NEWS",
    news:{
        id:crypto.randomUUID(),
        category:cCat,
        img:cImg,
        title:cTitle
    }
})