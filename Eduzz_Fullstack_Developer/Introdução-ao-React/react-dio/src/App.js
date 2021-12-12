//metodo que gostei

export default function App () {
  return(
    < /*react fragment sem uso de div - clean-code*/> 
    <h1>Minha primeira aplicação com React</h1>
    <ul>
      <a /*href usar barra se nao tiver caminho*/ href="/" /*usar className no react*/ className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
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