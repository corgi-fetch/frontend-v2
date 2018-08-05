import React from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'react-native-elements'
import { View, Text, FlatList, StyleSheet, Image, AppRegistry, Button, TouchableOpacity, Alert, Platform, StatusBar } from 'react-native'
import CustomActionButton from '../CustomActionButton'

import TimelineItem from '../TimelineItem/TimelineItem.js'


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	priceContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	rowContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	columnContainer: {
		flex: 1,
		padding: 7,
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	titleText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	text: {
		fontSize: 16,
	},
	photo: {
		height: 40,
		width: 40,
		borderRadius: 20,
		padding: 10,
		margin: 5
	},
	separator: {
		flex: 1,
	},
	buttonContainer: {
		flexDirection : 'row',
	},
	item: {
		backgroundColor: '#ffffff'
	},

	FlatList: {
		backgroundColor: '#ffffff',
		borderTopWidth: 0,
		borderBottomWidth: 0
	},

	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},

});

function TimelineComponent ({
	data,
	listOfGroups,
	listOfPosts,
	onClick
}) {

	timelineItemRenderer = ({item}) => {
		<TimelineItem
			title={item.title}
			description={item.description}
			owner={item.owner}
			payment={item.payment}
			listOfGroups
			listOfPosts
			onClick={onClick}
		/>
	}

	RenderSeparator = () => {
		return (
			<View
				style={{
					borderBottomColor: 'grey',
					borderBottomWidth: 0.5,
					width: '95%',
					alignSelf: 'center'
				}}
			/>
		)
	}
	console.log('listOfGroups ' + listOfGroups)
	console.log('listOfPosts ' + listOfPosts)

	return (
		<View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
			<FlatList
				style={styles.FlatList}
				data={data}
				ItemSeparatorComponent={RenderSeparator}
				renderItem={({ item }) => {
					return(
						<TimelineItem
							title={item.title}
							description={item.description}
							owner={item.owner}
							payment={item.payment}
							listOfGroups={listOfGroups}
							listOfPosts={listOfPosts}
							onClick={onClick}
							id={item.id}
						/>
					)}
				}
				keyExtractor={item => item.id}
			/>
			<CustomActionButton
			/>
		</View>
	)
}

TimelineComponent.PropTypes = {
		dataUrl: PropTypes.string,

		listOfGroups: PropTypes.bool,

		listOfPosts: PropTypes.bool
}

TimelineComponent.defaultProps = {
		dataUrl: null,

		listOfGroups: false,

		listOfPosts: false
}

export default TimelineComponent