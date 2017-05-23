import React, { PropTypes } from 'react';
import {
	StyleSheet,
	Image,
} from 'react-native';
import {
	Container,
	Header,
	Title,
	Button,
	View,
} from 'native-base';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		marginTop: 20,
		alignSelf: 'center',
		width: 150,
	},
	headImg: {
		alignSelf: 'stretch',
	},
});

const Main = (props) => {
	const routeStack = props.navigator.getCurrentRoutes();
	return (
		<Container>
			<View style={styles.container}>
				<Header>
					<Title>Welcome to Sandbox</Title>
				</Header>
				<View>
					<Image style={styles.headImg} source={require('./images/sandbox.png')} />
					<Button
						style={styles.button}
						onPress={() => props.navigator.jumpTo(routeStack[1])
					}
					>
						Login
					</Button>
					<Button
						style={styles.button}
						onPress={() => props.navigator.jumpTo(routeStack[2])
					}
					>
						Register
					</Button>
				</View>
			</View>
		</Container>
	);
};

Main.propTypes = {
	navigator: PropTypes.shape({
		getCurrentRoutes: PropTypes.func,
		jumpTo: PropTypes.func,
	}),
};

export default Main;
