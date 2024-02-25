import './App.css'

const list=[
  {
    title: "React",
    url:"https://reactjs.org/",
    author:"Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];


const products = [{
  id: 1,
  price: 20,
  url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbange.tn%2Fproducts%2Fbange-k03&psig=AOvVaw34Bql-QQJdgljBWf_wW0OE&ust=1708544494736000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj7wLnWuoQDFQAAAAAdAAAAABAE",

},
{
  id: 3,
  price: 10,
  url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.exist.com.tn%2F113612-large_default%2Fsac-de-voyage.jpg&tbnid=jDfM7o_iU0idcM&vet=12ahUKEwiu6eau1rqEAxWyqf0HHW2UDs0QMygJegUIARCKAQ..i&imgrefurl=https%3A%2F%2Fwww.exist.com.tn%2Fsacs%2F1595-sac-de-voyage.html&docid=P8DpY-pFz_ryHM&w=829&h=1189&q=sac%20de%20voyage&ved=2ahUKEwiu6eau1rqEAxWyqf0HHW2UDs0QMygJegUIARCKAQ",
}
];

const affordableProducts = products.filter(function(product){
  return product.price <25;
})

const numbers = [1,2,3,4,5];

const sum = numbers.reduce(function
  (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  function App() {
     return(
      <div>
        <h3>Fadwa Chibani G3</h3>
        <h1>My Hacker Stories</h1>

        <label htmlFor="search">Search:</label>
        <input id="search" type="text"/>
        <hr/>

        <ul>
          {list.map(function(item){
            return <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
            </li>;
          })}
        </ul>

        <hr></hr>
        <h1>Filter activity :</h1>
        <h4>the affordable products with price under 25 are</h4>

        {affordableProducts.map(function(item){
          return <li key={item.id}>
            <span>product number {item.id} price {item.price}TND <a href={item.url}> -Click to see product -</a></span>
          </li>;
        })}

        <hr></hr>
        <h1>Reduce activity</h1>
        {numbers.map(function(x){
          return <span>{x}+</span>
        })}

        <span>0=sum={sum}</span>
        <hr></hr>
        
      </div>
     )
  }
  export default App