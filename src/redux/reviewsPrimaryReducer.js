let inicialState = {
    reviewsPrimaryList: [
        {
            id:1,
            ava:"",
            name:"Kostya",
            content:"I completed a Brewing course, and it was an unforgettable experience! The trainer truly knows their craft and was able to impart to me numerous techniques and secrets of coffee brewing that I didn't know before. I highly recommend this course to all coffee enthusiasts who wish to enhance their skills and enjoy the exquisite taste of coffee!"
        },
        {
            id:2,
            ava:"",
            name:"Kostya",
            content:"I completed a Brewing course, and it was an unforgettable experience! The trainer truly knows their craft and was able to impart to me numerous techniques and secrets of coffee brewing that I didn't know before. I highly recommend this course to all coffee enthusiasts who wish to enhance their skills and enjoy the exquisite taste of coffee!"
        }
    ]
}


const reviewsPrimaryReducer = (state = inicialState, action) => {
    switch (action.type) {
        default:{
            return state;
        }
    }
};

export default reviewsPrimaryReducer;