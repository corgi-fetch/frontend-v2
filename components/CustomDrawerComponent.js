import React, { Component } from "react";

import { DrawerItems, SafeAreaView, TabNavigator } from 'react-navigation';

tabs(categories) {
    return categories.reduce((routes, category) => {
        routes[category.get('id')] = this.tab(category);

        return routes;
    }, {});
}

tab(category) {
    const { t } = this.props;

    const screen = this.getTabForCategory(category);

    return {
        screen: screen,
        navigationOptions: {
            title: t(category.get('selector')),
        }
    }
}

getTabForCategory (category){
    return () => (<ArticlesList category={category} />);
}

render() {
    const { categories } = this.props;

    const Tabs = TabNavigator(this.tabs(categories), {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        tabBarOptions: {
            scrollEnabled: true,
            upperCaseLabel: false,
        }
    });

    return (<Tabs />);
}
