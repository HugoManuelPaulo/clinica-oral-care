export type Appointment = { id: string; date: string; day: string; time: string; dentist: string; treatment: string; status: "confirmed" | "completed" | "cancelled" };
export const patient = { firstName: "Hugo", fullName: "Hugo Paulo", email: "demo@oralcare.app", phone: "+31 6 0000 0000" };
export const nextAppointment: Appointment = { id: "apt-1042", date: "24 september", day: "Donderdag", time: "10:30", dentist: "Dr. Sofia Martins", treatment: "Periodieke controle", status: "confirmed" };
export const history: Appointment[] = [
 { id: "apt-0988", date: "12 maart 2026", day: "Donderdag", time: "09:15", dentist: "Dr. Sofia Martins", treatment: "Gebitsreiniging", status: "completed" },
 { id: "apt-0912", date: "8 oktober 2025", day: "Woensdag", time: "14:00", dentist: "Dr. Thomas de Boer", treatment: "Periodieke controle", status: "completed" }
];
export const availableDates = [{ day: "DI", date: "22", label: "22 sep" },{ day: "WO", date: "23", label: "23 sep" },{ day: "DO", date: "24", label: "24 sep" },{ day: "VR", date: "25", label: "25 sep" }];
export const availableTimes = ["09:00", "10:30", "13:15", "14:45", "16:00"];
