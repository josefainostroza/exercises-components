import CalculateCircleArea from './components/CalculateCircleArea/CalculateCircleArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import SayHello from './components/sayHello/SayHello';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';

const App = () => {
	return (
		<>
			<SayHello>Josefa</SayHello>
			<CalculateSquareArea side={5}></CalculateSquareArea>
			<CalculateTriangleArea base={4} height={3}></CalculateTriangleArea>
			<CalculateCircleArea r={3}></CalculateCircleArea>
			<CelsiusToFahrenheit celsius={2}></CelsiusToFahrenheit>
			<FahrenheitToCelsius f={5}></FahrenheitToCelsius>
			<TotalPrice price={5.99}></TotalPrice>
			<WriteMessage
				name={'Josefa'}
				material={'plástico'}
				size={'xs'}
				note={'Gracias por su compra'}
			></WriteMessage>
		</>
	);
};

export default App;
