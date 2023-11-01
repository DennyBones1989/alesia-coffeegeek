import emailjs from 'emailjs-com';

const apiKey = '6vEx58QZLjTXf5-t3';
const serviceId = 'service_combkkc';
const templateId = 'template_2mtf1fw';

export const courseAPI = {
    courseSubscribe(chosenCourseData) {
        let templateParams = {
            course_name: chosenCourseData.courseName,
            subscriber_name: chosenCourseData.participantName,
            subscriber_email: chosenCourseData.participantEmail,
            subscriber_phone: chosenCourseData.participantPhone
        }
        //TODO: Save chosen course to the table in database
        //return true;
        return emailjs.send(serviceId, templateId, templateParams, apiKey).then((result) => {
            console.log('send successfull!');
            return true;
        }, (error) => {
            console.log('send failed!');
            console.log(error);
            return false;
            // show the user an error
        });
    }
}