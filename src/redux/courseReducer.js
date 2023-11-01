import { courseAPI } from "../api/api";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SUBSCRIBE_COURSE = "SUBSCRIBE_COURSE";
const SUBSCRIBE_COURSE_FINISH = "SUBSCRIBE_COURSE_FINISH";

let inicialState = {
    chosenCourse: 
        {
            id:null,
            name:'',
            email:'',
            phone:'',
            subscribeSuccessfull: false
        },
    coursesList: [
        {
            id:1,
            title:"Introduction to Coffee",
            duration:2,
            timeMetrics: "hours",
            price: 25,
            priceMetrics: "per person",
            hoursPerDay: null,
            hoursPerDayMetrics: null,
            tags: [
                { id:1, label: "on site/online"},
                { id:2, label: "beginner"}
            ],
            description: [
                { id:1, label: "Introduction to the history and culture of coffee."},
                { id:2, label: "Analysing journey from the coffee cherry to the cup of coffee."},
                { id:3, label: "Tasting different type of process and variety of coffee beans throw the cupping."}
            ]
        },
        {
            id:2,
            title:"Brewing",
            duration:4,
            timeMetrics: "hours",
            price: 50,
            priceMetrics: "per person",
            hoursPerDay: null,
            hoursPerDayMetrics: null,
            tags: [
                { id:1, label: "on site"},
                { id:2, label: "beginner"}
            ],
            description: [
                { id:1, label: "Introduction to the basic rules of brewing."},
                { id:2, label: "Practice brewing techniques for various types of coffee beans."},
                { id:3, label: "Techniques for brewing coffee using different methods."}
            ]
        },
        {
            id:3,
            title:"Barista skills",
            duration:4,
            timeMetrics: "days",
            price: 120,
            priceMetrics: "per person",
            hoursPerDay: 2,
            hoursPerDayMetrics: "hours per day",
            tags: [
                { id:1, label: "on site"},
                { id:2, label: "professional"}
            ],
            description: [
                { id:1, label: "Learn the fundamentals of coffee: origins, varieties, roasting, and brewing methods."},
                { id:2, label: "Master the art of milk steaming and latte art to create visually appealing drinks."},
                { id:3, label: "Develop customer service skills, to provide exceptional service and build customer loyalty."}
            ]
        },
        {
            id:4,
            title:"Latte art",
            duration:2,
            timeMetrics: "days",
            price: 100,
            priceMetrics: "per person",
            hoursPerDay: 2,
            hoursPerDayMetrics: "hours per day",
            tags: [
                { id:1, label: "on site"},
                { id:2, label: "professional"}
            ],
            description: [
                { id:1, label: "Understanding how to properly steam milk to achieve the right texture and consistency."},
                { id:2, label: "Learning the fundamental designs such as the heart, rosetta, and tulip."},
                { id:3, label: "Advanced latte art techniques  to create more complex designs and elevate their latte art game."}
            ]
        },
        {
            id:5,
            title:"Introduction to Coffee",
            duration:null,
            timeMetrics: null,
            price: 25,
            priceMetrics: "per hour",
            hoursPerDay: null,
            hoursPerDayMetrics: null,
            tags: [
                { id:1, label: "on site/online"},
                { id:2, label: "for business"}
            ],
            description: [
                { id:1, label: "Developing a signature coffee menu that reflects your cafe's brand and style."},
                { id:2, label: "Train staff on proper brewing, milk steaming, and latte art for consistent quality."},
                { id:3, label: "Emphasize customer service to create a welcoming atmosphere that encourages customer loyalty."}
            ]
        },
        {
            id:6,
            title:"Personal request",
            duration:null,
            timeMetrics: null,
            price: 25,
            priceMetrics: "per hour",
            hoursPerDay: null,
            hoursPerDayMetrics: null,
            tags: [
                { id:1, label: "on site/online"},
                { id:2, label: "for all"}
            ],
            description: [
                { id:1, label: "Analysis of a personal request to better understand a learning goal."},
                { id:2, label: "Receive personalized feedback and guidance to improve overall coffee quality and taste."},
                { id:3, label: "Practical sessions tailored to meet your specific needs and goals."}
            ]
        }
    ],
    
}

let getCourseById = (courseID) => {
    inicialState.coursesList.forEach(course => {
        if (course.id == courseID) return course;
    }); 
}


const courseReducer = (state = inicialState, action = {type:INITIALIZED_SUCCESS}) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                isInitialized: true
            }
        }

        case SUBSCRIBE_COURSE: {
            //debugger
            let newSubscription = {
                ...state,
                chosenCourse: {...action.chosenCourse}
            }
            return newSubscription;
        }

        case SUBSCRIBE_COURSE_FINISH: {
            let newSubscription = {
                ...state,
                chosenCourse: {
                    id:null,
                    name:'',
                    email:'',
                    phone:'',
                    subscribeSuccessfull: false
                }
            }
            return newSubscription;
        }

        default:{
           
            return state;
        }
    }
};

export const courseSubscribeTh = (subscriptionData, firstLaunch) => (dispatch) => {
    //debugger;
    inicialState.coursesList.forEach(course => {
        if (course.id == subscriptionData.courseId) subscriptionData.courseName = course.title;
    });
    
    if(firstLaunch){
        dispatch(subscribeCourseAC(subscriptionData));
    }else{
        //debugger;
        return courseAPI.courseSubscribe(subscriptionData).then(response => {
            dispatch(subscribeCourseAC({...subscriptionData, subscribeSuccessfull: true}));
        });
    }
        
}

export const courseSubscribeFinishTh = () => (dispatch) => {
    dispatch(subscribeCourseFinishAC());
}

export const initializedSuccess = () => ({ type: 'INITIALIZED_SUCCESS'});
export const subscribeCourseAC = (chosenCourse) => ({ type: SUBSCRIBE_COURSE, chosenCourse: chosenCourse});
export const subscribeCourseFinishAC = () => ({ type: SUBSCRIBE_COURSE_FINISH});

export default courseReducer;