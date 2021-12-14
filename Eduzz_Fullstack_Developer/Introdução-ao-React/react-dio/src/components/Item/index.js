export default function Item (props){
    return(
        <a /*href usar barra se nao tiver caminho*/ href="/" /*usar className no react*/ className="list-group-item list-group-item-action list-group-item-dark">
        {props.texto}
      </a>
    )
}