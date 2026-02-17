import React from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";
import type { AppDispatch, RootState } from "../state/store";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <View style={{ alignItems: "center", gap: 16 }}>
            <Text style={{ fontSize: 40, fontWeight: "700" }}>{count}</Text>

            <View style={{ flexDirection: "row", gap: 12 }}>
                <Pressable
                    onPress={() => dispatch(increment())}
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 18,
                        backgroundColor: "#222",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 16 }}>increment</Text>
                </Pressable>

                <Pressable
                    onPress={() => dispatch(decrement())}
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 18,
                        backgroundColor: "#444",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 16 }}>decrement</Text>
                </Pressable>
            </View>

            <View style={{ flexDirection: "row", gap: 12 }}>
                <Pressable
                    onPress={() => dispatch(incrementByAmount(4))}
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 18,
                        backgroundColor: "#222",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 16 }}>incrementByAmount(4)</Text>
                </Pressable>

                <Pressable
                    onPress={() => dispatch(incrementAsync(8))}
                    style={{
                        paddingVertical: 12,
                        paddingHorizontal: 18,
                        backgroundColor: "#222",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 16 }}>incrementAsync(8)</Text>
                </Pressable>
            </View>
        </View>
    );
}
