import { FIREBASE_DOMAIN } from '.env';

export async function getAllMenuItems(category) {
  const response = await fetch(`${FIREBASE_DOMAIN}/menu/${category}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Menu items.");
  }
  const transformedData = [];
  for (const key in data) {
    transformedData.push(data[key]);
  }
  return transformedData;
}

export async function addOrder(orderData) {
  const reponse = await fetch(`${FIREBASE_DOMAIN}/orders/${orderData.id}.json`, {
    method: "PUT",
    body: JSON.stringify(orderData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await reponse.json();
  if (!reponse.ok) {
    throw new Error(data.message || "Order is not send");
  }
  return null;
}
export async function addMealInCategory(orderData) {
  const reponse = await fetch(
    `${FIREBASE_DOMAIN}/menu/${orderData.category}/${orderData.id}.json`,
    {
      method: "PUT",
      body: JSON.stringify(orderData.meal),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await reponse.json();
  if (!reponse.ok) {
    throw new Error(data.message || "Order is not send");
  }
  return null;
}
export async function getAllOrders() {
  const response = await fetch(`${FIREBASE_DOMAIN}/orders.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Menu items.");
  }
 const transformedData = [];
 for (const key in data) {
   transformedData.push(data[key]);
 }
 return transformedData;
}

export async function getDataLength(category) {
  const response = await fetch(`${FIREBASE_DOMAIN}/menu/${category}.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Menu items.");
  }
  const transformedData = [];
  for (const key in data) {
    transformedData.push(data[key]);
  }
  return transformedData.length+1;
}
export async function deleteOrder(orderData) {
  const reponse = await fetch(
    `${FIREBASE_DOMAIN}/orders/${orderData.id}.json`,
    {
      method: "DELETE",
    }
  );
  const data = await reponse.json();
  if (!reponse.ok) {
    throw new Error(data.message || "Order is not send");
  }
  return null;
}
export async function deleteMenuItem(orderData) {
  const reponse = await fetch(
    `${FIREBASE_DOMAIN}/menu/${orderData.category}/${orderData.id}.json`,
    {
      method: "DELETE",
    }
  );
  const data = await reponse.json();
  if (!reponse.ok) {
    throw new Error(data.message || "Order is not send");
  }
  return null;
}