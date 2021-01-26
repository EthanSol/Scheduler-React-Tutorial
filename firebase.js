import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAy_UfTsQ0wV1EFeezo29MRvi7o34vxCp8",
  authDomain: "scheduler-react-tutorial-es.firebaseapp.com",
  databaseURL: "https://scheduler-react-tutorial-es-default-rtdb.firebaseio.com",
  projectId: "scheduler-react-tutorial-es",
  storageBucket: "scheduler-react-tutorial-es.appspot.com",
  messagingSenderId: "929995234343",
  appId: "1:929995234343:web:2d2e018d4e5d6667fac202"
};

firebase.initializeApp(firebaseConfig);

export { firebase };