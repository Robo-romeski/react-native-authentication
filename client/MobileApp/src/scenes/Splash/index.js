import React from 'react';
import {
	StyleSheet,
} from 'react-native';
import {
	Container,
	Spinner,
	View,
} from 'native-base';

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
	},
});

const Splash = () => (
	<Container>
		<View style={styles.container}>
			<Spinner size="small" color="#dc3c41" />
		</View>
	</Container>
);

export default Splash;
