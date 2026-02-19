import { addDays, subDays, setHours, setMinutes } from 'date-fns';

const today = new Date();

export const MOCK_BUSINESS = {
  id: 1,
  name: "Przykładowy Barber",
  slug: "przykładowy-barber",
  description: "Profesjonalne usługi barberskie w centrum miasta.",
  address: "ul. Marszałkowska 10",
  city: "Warszawa",
  phone: "+48 500 600 700",
  email: "kontakt@barber.pl",
  imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
  categoryOrder: ["Zarost", "Włosy", "Inne"],
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const MOCK_SERVICES = [
  {
    id: 1,
    name: "Strzyżenie Męskie",
    category: "Włosy",
    price: 70.00,
    duration: 45,
    businessId: 1,
  },
  {
    id: 2,
    name: "Trymowanie Brody",
    category: "Zarost",
    price: 50.00,
    duration: 30,
    businessId: 1,
  },
  {
    id: 3,
    name: "Combo (Włosy + Broda)",
    category: "Inne",
    price: 100.00,
    duration: 75,
    businessId: 1,
  },
  {
    id: 4,
    name: "Odsiwianie",
    category: "Włosy",
    price: 60.00,
    duration: 40,
    businessId: 1,
  },
  {
    id: 5,
    name: "Farbowanie",
    category: "Włosy",
    price: 180.00,
    duration: 120,
    businessId: 1,
  },
  {
    id: 6,
    name: "Pielęgnacja zarostu",
    category: "Zarost",
    price: 40.00,
    duration: 20,
    businessId: 1
  }
];

export const MOCK_WORKING_HOURS = [
  { id: 1, dayOfWeek: 1, startTime: "09:00", endTime: "17:00", businessId: 1 },
  { id: 2, dayOfWeek: 2, startTime: "09:00", endTime: "17:00", businessId: 1 },
  { id: 3, dayOfWeek: 3, startTime: "09:00", endTime: "17:00", businessId: 1 },
  { id: 4, dayOfWeek: 4, startTime: "09:00", endTime: "17:00", businessId: 1 },
  { id: 5, dayOfWeek: 5, startTime: "09:00", endTime: "19:00", businessId: 1 },
  { id: 6, dayOfWeek: 6, startTime: "10:00", endTime: "14:00", businessId: 1 },
];

export const MOCK_APPOINTMENTS = [
  {
    id: "uuid-history-1",
    start: setMinutes(setHours(subDays(today, 1), 10), 0),
    end: setMinutes(setHours(subDays(today, 1), 10), 45),
    status: "DONE",
    clientName: "Jan Kowalski",
    clientPhone: "123 456 789",
    clientEmail: "jan@example.com",
    serviceId: 1,
    service: MOCK_SERVICES[0],
    businessId: 1,
    createdAt: subDays(today, 2),
  },
  {
    id: "uuid-history-2",
    start: setMinutes(setHours(subDays(today, 1), 13), 0),
    end: setMinutes(setHours(subDays(today, 1), 13), 30),
    status: "CANCELLED",
    clientName: "Piotr Nowak",
    clientPhone: "987 654 321",
    clientEmail: null,
    serviceId: 2,
    service: MOCK_SERVICES[1],
    businessId: 1,
    createdAt: subDays(today, 3),
  },
  {
    id: "uuid-today-1",
    start: setMinutes(setHours(today, 9), 0),
    end: setMinutes(setHours(today, 10), 15),
    status: "CONFIRMED",
    clientName: "Tomasz Wiśniewski",
    clientPhone: "500 500 500",
    clientEmail: "tomek@example.com",
    serviceId: 3,
    service: MOCK_SERVICES[2],
    businessId: 1,
    createdAt: subDays(today, 1),
  },
  {
    id: "uuid-today-2",
    start: setMinutes(setHours(today, 14), 30),
    end: setMinutes(setHours(today, 15), 15),
    status: "CONFIRMED",
    clientName: "Michał Anioł",
    clientPhone: "600 600 600",
    clientEmail: null,
    serviceId: 1,
    service: MOCK_SERVICES[0],
    businessId: 1,
    createdAt: today,
  },
  {
    id: "uuid-future-1",
    start: setMinutes(setHours(addDays(today, 1), 11), 0),
    end: setMinutes(setHours(addDays(today, 1), 11), 30),
    status: "CONFIRMED",
    clientName: "Robert Lewandowski",
    clientPhone: "999 999 999",
    clientEmail: "robert@goal.com",
    serviceId: 2,
    service: MOCK_SERVICES[1],
    businessId: 1,
    createdAt: today,
  }
];