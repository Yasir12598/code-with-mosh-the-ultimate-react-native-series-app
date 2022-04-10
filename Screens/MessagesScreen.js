import React, { useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
} from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';


const initialMessages = [
    {
        id: 1,
        title: 'Muhammad Yasir',
        description: 'Jr. React-Native Developer',
        image: require("../asserts/yasir.jpg"),
    },
    {
        id: 2,
        title: 'Komail',
        description: 'React-Native Developer',
        image: require("../asserts/komail.jpg"),
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }
    return (
        <View >
            <FlatList
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({ item }) =>
                    <ListItem style={styles.listItem}
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        DeleteIconView={<ListItemDeleteAction />}
                        onPress={() => handleDelete(item)}
                        selectMessageOnpress={()=> console.log("Message Selected: ",item)}
                    //renderRightActions={ListItemDeleteAction}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'Komail',
                            description: 'React-Native Developer',
                            image: require("../asserts/komail.jpg"),
                        }
                    ])
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        marginTop: 7,
        marginLeft: 7,

    }
})
export default MessagesScreen;