# My Blog Project

My first blog project using React through Vite and Firebase (Firestore Database and Firebase storage). You can access the website through this [link](https://anandaawblog.vercel.app) or if you want to see the Vercel project page you can use this [link](https://vercel.com/ananda-arti-widigdos-projects/anandablogproject).

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
## Screenshots
![image](https://github.com/ananda17gb/anandas-blog/assets/79387612/f2efce53-54b0-4e9a-8328-63ff706d748c) \
![image](https://github.com/ananda17gb/anandas-blog/assets/79387612/0daaad00-b902-45cf-9071-c4f6817a9733) \
![image](https://github.com/ananda17gb/anandas-blog/assets/79387612/5b618fdd-e6e2-4fe5-9767-5d679cc353c0) \
![image](https://github.com/ananda17gb/anandas-blog/assets/79387612/6e962c40-8cb5-4348-99c5-5f19f37b57c7)



