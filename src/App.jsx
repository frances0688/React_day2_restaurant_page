import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu';

function App() {
  const dishes = [
    {
      id: 1,
      name: 'Mofongo',
      description: 'Mofongo is a traditional Puerto Rican dish made with fried green plantains mashe' +
          'd with garlic and cracklings.',
      image: 'https://salimaskitchen.com/wp-content/uploads/2022/12/Traditional-Puerto-Rican-M' +
          'ofongo-Salimas-Kitchen-29.jpg',
      price: 12.99
    }, {
      id: 2,
      name: 'Arroz con Gandules',
      description: 'Arroz con Gandules is a classic dish of rice with pigeon peas and pork, seasoned' +
          ' with achiote and other spices.',
      image: 'https://thenoshery.com/wp-content/uploads/2015/12/Arroz-con-Gandules-38.jpg',
      price: 14.99
    }, {
      id: 3,
      name: 'Lechón Asado',
      description: 'Lechón Asado is slow-roasted pork seasoned with adobo and garlic, resulting in c' +
          'rispy skin and juicy meat.',
      image: 'https://foodmetamorphosis.com/wp-content/uploads/2022/12/roast-pork-with-crackli' +
          'ng.jpg',
      price: 16.99
    }, {
      id: 4,
      name: 'Mallorcas',
      description: 'Mallorcas are sweet and fluffy buns, often filled with ham and cheese, perfect f' +
          'or breakfast or a snack.',
      image: 'https://senseandedibility.com/wp-content/uploads/2019/10/Mallorcas-Remix-21.jpg',
      price: 8.99
    }, {
      id: 5,
      name: 'Tostones',
      description: 'Tostones are slices of green plantains fried and then smashed, serving as a deli' +
          'cious appetizer or side dish.',
      image: 'https://thenovicechefblog.com/wp-content/uploads/2022/06/Tostones-Recipe-Image.j' +
          'peg',
      price: 7.99
    }, {
      id: 6,
      name: 'Mamposteao',
      description: 'Mamposteao is a sautéed rice dish with a variety of ingredients like meat, seafo' +
          'od, and vegetables, offering a burst of flavors.',
      image: 'https://farm8.staticflickr.com/7202/6989386944_4ea6e910ae.jpg',
      price: 18.99
    }, {
      id: 7,
      name: 'Pastelón',
      description: 'Pastelón is a Puerto Rican lasagna, with layers of ripe plantains, seasoned grou' +
          'nd meat, and cheese.',
      image: 'https://i.pinimg.com/474x/91/7c/99/917c999b6e55f614d5ff62cee17fa703.jpg',
      price: 13.99
    }, {
      id: 8,
      name: 'Coconut Arepas',
      description: 'Coconut Arepas are small fried coconut cakes, sweet and delicious, perfect as a ' +
          'dessert or snack.',
      image: 'https://salimaskitchen.com/wp-content/uploads/2023/02/5-Ingredient-Arepas-de-Coc' +
          'o-Fried-Coconut-Bread-Salimas-Kitchen-58.jpg',
      price: 9.99
    }, {
      id: 9,
      name: 'Bacalaitos',
      description: 'Bacalaitos are codfish fritters, a crispy and savory fritter that is popular as ' +
          'an appetizer in Puerto Rico.',
      image: 'https://www.kitchengidget.com/wp-content/uploads/2023/05/Bacalaitos.jpg',
      price: 11.99
    }
  ];

  return (
    <div>
      <Header/>
      <Home/>
      <Menu dishes={dishes}/>
    </div>
  )
}

export default App
