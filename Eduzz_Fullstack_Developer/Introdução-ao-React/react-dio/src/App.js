import Item from "./components/Item"
import Card from "./components/Card"
//metodo que gostei

export default function App () {
  return(
    < /*react fragment sem uso de div - clean-code*/> 
    <h1>Minha primeira aplicação com React</h1>
    <ul className= "mt-3">
      <Item texto="Item 1"/>
      <Item texto="Item 2"/>
      <Item texto="Item 3"/>
    </ul>
    <Card/>
    </>
  )
}

//com arrow fuction

// const App = () => {
//   return(
//     <h1>Hello Word</h1>
//   )
// }

// export default App;