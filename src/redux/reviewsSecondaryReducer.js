let inicialState = {
    reviewsSecondaryList: [
        {
            id:1,
            ava:"",
            name:"Ahmed",
            photo1:"",
            photo2:"",
            content:"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business! I love it! "
        },{
            id:2,
            ava:"",
            name:"Ahmed",
            photo1:"",
            photo2:"",
            content:"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business! I love it! "
        },{
            id:3,
            ava:"",
            name:"Ahmed",
            photo1:"",
            photo2:"",
            content:"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business! I love it! "
        },{
            id:4,
            ava:"",
            name:"Ahmed",
            photo1:"",
            photo2:"",
            content:"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business! I love it! "
        },
    ]
}


const reviewsSecondaryReducer = (state = inicialState, action) => {
    switch (action.type) {
        default:{
            return state;
        }
    }
};

export default reviewsSecondaryReducer;