import { db } from './firebase';

// User API
export const doCreateUser = (id: string, username: string, email: string) => {
  const createUser = db.collection('users').add({
    id,
    email,
    username,
  });
  const year = new Date().getFullYear();
  const initCalendar = db
    .collection('calendarState')
    .doc(id)
    .set({
      [year]: {},
    });
  return Promise.all([createUser, initCalendar]);
};

export const setMood = (userId: string, data: any) => {
  return db
    .collection('calendarState')
    .doc(userId)
    .set(data);
  // .then(() => {
  //   console.log('success :');
  // })
  // .catch(err => {
  //   console.log('err :', err);
  // });
};
export const listenToCalendarStateByUserId = (userId: string, callBack: (data: any) => void) =>
  db
    .collection('calendarState')
    .doc(userId)
    .onSnapshot(doc => {
      console.log('doc :', doc.data());
      callBack(doc.data());
    });
