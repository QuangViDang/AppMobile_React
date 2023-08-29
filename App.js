import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/rootReduce'
import TableAndPagination from './screens/PaginationScreen/TableAndPagination'
import InputImageScreen from './screens/inputSreen/InputImageScreen'
import GameStartScreen from './screens/Game/GameStartScreen'
import Assistant_voice from './src/screens/assistant_voice'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'blue' },
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '' },
            }}
        >
            <Drawer.Screen
                name="Assistant_"
                component={Assistant_voice}
                options={{
                    drawerIcon: ({ size }) => (
                        <Ionicons
                            name="heart-circle"
                            color="violet"
                            size={size}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Assistant"
                component={Assistant_voice}
                options={{
                    drawerIcon: ({ size }) => (
                        <Ionicons
                            name="heart-circle"
                            color="violet"
                            size={size}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Your Game"
                component={GameStartScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Ionicons
                            name="heart-circle"
                            color="violet"
                            size={size}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites Food"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Ionicons name="heart" color="red" size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Pagination Test"
                component={TableAndPagination}
                options={{
                    drawerIcon: ({ size }) => (
                        <AntDesign name="frown" size={30} color="black" />
                    ),
                }}
            />
            <Drawer.Screen
                name="InputImage Test"
                component={InputImageScreen}
                options={{
                    drawerIcon: ({ size }) => (
                        <Ionicons name="star" color="orange" size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}
function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: 'white' },
                        headerTintColor: 'black',
                        contentStyle: { backgroundColor: 'white' },
                    }}
                >
                    <Stack.Screen
                        name="Drawer"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        options={({ route }) => {
                            const catId = route.params.categoryId
                            return {
                                title: 'Xin chào với ' + catId,
                            }
                        }}
                    />
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

const store = createStore(rootReducer)
export default () => (
    <Provider store={store}>
        <App />
    </Provider>
)
