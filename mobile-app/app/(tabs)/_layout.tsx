import { Tabs } from "expo-router";
import { Text } from "react-native";
import { colors } from "@/src/theme";

const TabIcon = ({ symbol, color }: { symbol: string; color: string }) => (
  <Text style={{ color, fontSize: 19 }}>{symbol}</Text>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#82918F",
        tabBarStyle: {
          height: 76,
          paddingTop: 8,
          paddingBottom: 11,
          borderTopColor: colors.border,
          backgroundColor: colors.surface,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "700" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <TabIcon symbol="⌂" color={color} /> }} />
      <Tabs.Screen name="appointments" options={{ title: "Afspraken", tabBarIcon: ({ color }) => <TabIcon symbol="▦" color={color} /> }} />
      <Tabs.Screen name="history" options={{ title: "Historie", tabBarIcon: ({ color }) => <TabIcon symbol="◷" color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profiel", tabBarIcon: ({ color }) => <TabIcon symbol="○" color={color} /> }} />
    </Tabs>
  );
}