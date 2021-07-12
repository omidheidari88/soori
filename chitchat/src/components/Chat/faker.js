import faker from "faker";

export const fakerMessages = (count = 1) => {
  const messages = [];
  for (let i = 0; i < count; i++) {
    messages.push({
      name: faker.name.firstName(),
      message: faker.lorem.sentence(),
      time: faker.date.recent().toLocaleString(),
      image1: faker.image.avatar(),
      image2: faker.image.avatar(),
      type: Math.random() > 0.5 ? "reciever" : "sender",
    });
  }
  return messages;
};
