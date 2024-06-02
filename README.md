# My Blog Project

My first blog project using React through Vite and Firebase (Firestore Database and Firebase storage). You can access it through this [link](https://anandaawblog.vercel.app).

## Installation

Make sure you have already needed to make a react app (node.js, etc.) and also because my app uses Firebase you need to connect the website project to it in order for the CRUD and storage functionality to work. You just need to put your own Firebase Project credentials. Can be seen [here](https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/#:~:text=To%20start%20using%20the%20Cloud,dropdown%2C%20and%20select%20Firestore%20Database.&text=Select%20the%20option%20to%20create,click%20to%20enable%20your%20database.) After creating firebase.js don't forget to write two more lines

This one below the `import { getFirestore } from "firebase/firestore";` in `firebase.js`:
```
import { getFirestorage} from "firbase/storage";
```
This one at the end of the `firebase.js`:
```
export const storage = getFirestorage(app);
```

Clone this project:
```
git clone https://github.com/ananda17gb/anandas-blog.git
```

Navigate to the project directory:
```
cd anandas-blog
```

Get the dependency:
```
npm install
```

Run the project:
```
npm run dev
```
