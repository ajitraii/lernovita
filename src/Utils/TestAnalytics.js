import analytics from '@react-native-firebase/analytics';

export const predefinedFun = async() => {
   
        await analytics().logEvent('view_lesson', {
          lesson_id: 'react_native_intro',
          screen: 'LessonScreen',
        });
        alert('Event logged!');

}