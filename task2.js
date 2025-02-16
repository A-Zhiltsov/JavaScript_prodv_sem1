// Создаем Map для хранения поваров и их специализаций
const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"],
  ]);
  
  // Создаем Map для хранения блюд и их поваров
  const dishes = new Map([
    ['Пицца "Маргарита"', "Виктор"],
    ['Пицца "Пепперони"', "Виктор"],
    ['Суши "Филадельфия"', "Ольга"],
    ['Суши "Калифорния"', "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"],
  ]);
  
  // Создаем Map для хранения заказов клиентов
  const orders = new Map();
  
  // Клиенты
  const alexey = { name: "Алексей" };
  const maria = { name: "Мария" };
  const irina = { name: "Ирина" };
  
  // Заказы клиентов
  orders.set(alexey, ['Пицца "Пепперони"', "Тирамису"]);
  orders.set(maria, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
  orders.set(irina, ["Чизкейк"]);
  
  // Функция для вывода информации о заказах
  function showOrders() {
    for (const [client, clientDishes] of orders) {
      console.log(`Клиент ${client.name} заказал:`);
      clientDishes.forEach((dish) => {
        const chef = dishes.get(dish);
        console.log(`— ${dish} (готовит: ${chef})`);
      });
    }
  }
  
  // Выводим информацию о заказах
  showOrders();