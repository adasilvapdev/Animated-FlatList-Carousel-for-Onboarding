import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Paginator = ({ data }: any) => {
    return (
        <View style={styles.container}>
            {
                data.map((_: any, i: number) => {
                    return <View style={[styles.dot, { width: 10 }]} key={i.toString()} />
                })
            }
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 64,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: "#493d8a",
        marginHorizontal: 8,

    }
})
