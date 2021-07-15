import logo from './logo.svg';
import './App.css';
import MeatComponent from "./components/meals/meatComponent";



function App() {
  return (
    <div>
        <MeatComponent description ={'Veal rolls with sweet pepper\n' +
        '                Ingredients:\n' +
        '                400 g of veal tenderloin,\n' +
        '                1 red and 1 yellow sweet pepper,\n' +
        '                1 cm of ginger root,\n' +
        '                1 st. l. lemon juice,\n' +
        '                olive oil,\n' +
        '                sesame,\n' +
        '                salt, black pepper.'}
                       image ={'https://molbuk.ua/uploads/posts/2019-11/1573745333_12-13-ruletyky.jpg'}/>

        <MeatComponent description ={'Kare of New Zealand lamb in parmesan crust with eggplant (180/90/30 g) --- 235 UAH.\n' +
        '            The smell of ribs, which mixed the aroma of parmesan and roasted meat, can awaken even a sound appetite.\n' +
        '            Incredibly juicy and moderately fatty, the ribs have a slight bitterness from Parmesan breading.\n' +
        '            Ginger sauce, which is also richly seasoned with olive oil, adds freshness to the aroma.\n' +
        '            The taste of the meat seemed neutral without excess salt and pepper, apparently the chef tried to preserve the natural delicate taste of\n' +
        '            New Zealand lamb. Quite a hearty dish,\n' +
        '            the effect of which is also created by the taste of fat-rich eggplants, which acquired a light taste of ribs due to the special action of hosper.'}
                     image ={'https://lasoon.net/photo/id_96854.jpg'}/>
    </div>
  );
}

export default App;
