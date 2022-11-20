import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Ticket } from "../../types";
import { Feather } from "@expo/vector-icons";

export default function TicketCard(ticket: Ticket) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={ticket.id}
      onPress={() => navigation.navigate("Ticket_details", { id: ticket.id })}
    >
      <View>
        <Text>{ticket.title}</Text>
        <Feather name="arrow-right" size={24} color="black" />
      </View>
      <View>
        <Text>01-01-2022</Text>
        <Text>{ticket.status}</Text>
      </View>
    </TouchableOpacity>
  );
}
