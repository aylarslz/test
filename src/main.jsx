import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.jsx'
import './assets/sass/style.scss'
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider } from 'react-use-cart'
import store from './tools/store/configureStore';
import { addNews } from './tools/action/newsAction';
import { Provider } from 'react-redux';
const newstore = store();
import blog_1 from './assets/img/blog/blog_1.jpeg'


newstore.dispatch(addNews({ cCat: "STARTUP", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_12-820x620.jpg", cTitle: "BITE-SIZED BLISS: THE WORLD OF FAST FOOD" }))

newstore.dispatch(addNews({ cCat: "LIFE LESSONS", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_11-820x620.jpg", cTitle: "QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS" }))

newstore.dispatch(addNews({ cCat: "BUSINESS", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_10-820x620.jpg", cTitle: "FAST FOOD FRENZY: A TASTE OF CONVENIENCE" }))

newstore.dispatch(addNews({ cCat: "LIFE LESSONS", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_9-820x620.jpg", cTitle: "SAVORING SPEED: FAST FOOD FAVORITES" }))

newstore.dispatch(addNews({ cCat: "BUSINESS", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_8-820x620.jpg", cTitle: "FROM DRIVE-THRUS TO DELIGHTS: FAST FOOD STORIES" }))

newstore.dispatch(addNews({ cCat: "CREATIVITY", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_7-820x620.jpg", cTitle: "ON-THE-GO GOODNESS: FAST FOOD FEASTS" }))

newstore.dispatch(addNews({ cCat: "LIFE LESSONS", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_6-820x620.jpg", cTitle: "FLAVORS IN A FLASH: EXPLORING FAST FOOD" }))

newstore.dispatch(addNews({ cCat: "STARTUP", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_5-820x620.jpg", cTitle: "FAST FOOD ADVENTURES: A CULINARY RUSH" }))

newstore.dispatch(addNews({ cCat: "LIFE LESSONS", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_4-820x620.jpg", cTitle: "EATING FAST, TASTING GREAT: FAST FOOD SECRETS" }))

newstore.dispatch(addNews({ cCat: "BUSINESS", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_3-820x620.jpg", cTitle: "MUNCH, SIP, REPEAT: THE FAST FOOD LIFESTYLE" }))

newstore.dispatch(addNews({ cCat: "STARTUP", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_2-820x620.jpg", cTitle: "FAST FOOD FLAIR: FLAVOR AT YOUR FINGERTIPS" }))

newstore.dispatch(addNews({ cCat: "LIFE LESSONS", cImg: "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/blog_1-820x620.jpg", cTitle: "FAST FOOD NATION: A GASTRONOMIC JOURNEY" }))





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={newstore}>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </Provider>
</React.StrictMode>,
)
