import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabsLayout() {
    const TabIcon = ({ icon, color }) => {
        return (
            <View className="items-center justify-center gap-2">
                <Ionicons name={icon} size={26} color={color} />
            </View>
        )
    }
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#023E73',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    borderTopColor: "#FFF",
                    height: 84,
                }
            }}
        >
            <Tabs.Screen
                name="feed"
                options={{
                    title: 'Feed',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={(focused ? 'home' : 'home-outline')}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="homework"
                options={{
                    title: 'Homework',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={(focused ? 'book' : 'book-outline')}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Post',
                    headerTitle: 'Create Post',
                    headerShown: true,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={(focused ? 'add-circle' : 'add-circle-outline')}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    title: 'Events',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={(focused ? 'calendar' : 'calendar-outline')}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={(focused ? 'person-circle' : 'person-circle-outline')}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    )
}