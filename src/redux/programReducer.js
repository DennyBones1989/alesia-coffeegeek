let inicialState = {
    programsList: [
        {
            id:1,
            title:"For enthusiasts",
            content:"You will know coffee history and my coffee workshop gives you the bases to improve your skills to make better coffee at home."
        },{
            id:2,
            title:"For professionals",
            content:"With a focus on specialty coffee and advanced  techniques, you will be equipped with the knowledge and skills to create exceptional coffee."
        },{
            id:3,
            title:"For business",
            content:"Your staff will gain skills they need to create exceptional coffee experiences that will keep your customers coming back for more."
        }
    ]
}


const programReducer = (state = inicialState, action) => {
    switch (action.type) {
        default:{
            return state;
        }
    }
};

export default programReducer;