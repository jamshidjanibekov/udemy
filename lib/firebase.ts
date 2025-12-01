import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

const firebaseConfig = {
	apiKey: 'AIzaSyAS6nBmzOLRXjgSm5LcbNJSoTwQUjqTk8k',
	authDomain: 'udemy-4e8ab.firebaseapp.com',
	projectId: 'udemy-4e8ab',
	storageBucket: 'udemy-4e8ab.firebasestorage.app',
	messagingSenderId: '685402902124',
	appId: '1:685402902124:web:b2de7f74faf682f6ea1249',
}

const app = initializeApp(firebaseConfig)

const storage = getStorage(app)

const courseStorageRefs = ref(storage, `/udemy/course/${uuidv4()}`)

export { storage, courseStorageRefs }
