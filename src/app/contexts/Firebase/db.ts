import { db } from './firebase';

// User API
export const doCreateUser = (id: string, username: string, email: string) =>
  db.collection('users').add({
    id,
    email,
    username,
  });

// export const onceGetUsers = () => db.ref('users').once('value');
