const WriteMessage = props => {
	return (
		<h2>
			{props.name} ha pedido una caja de {props.material} de tamaño {props.size}
			. {props.note}
		</h2>
	);
};
export default WriteMessage;
