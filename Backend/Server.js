const express = require("express");
const cors = require("cors");
const products = require("./Products")
const orders = require("./Orders")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "TechNest backend is running!",
  });
});

app.post("/api/chat", (req, res) => {
  const { message, messages } = req.body;

  const userMessage = message.toLowerCase();

  const orderMatch = userMessage.match(/\b\d{4}\b/);

  const foundOrder = orderMatch
    ? orders.find(
        (order) => order.orderNumber === orderMatch[0]
      )
    : null;

  let reply;

  if (foundOrder) {
    reply = `Order #${foundOrder.orderNumber} is currently ${foundOrder.status}. Your ${foundOrder.product} order has a quantity of ${foundOrder.quantity}.`;
  } else if (userMessage.includes("order")) {
    reply = "Sure! What's your 4-digit order number?";
  } else {
    reply = "I'm sorry, I don't understand that yet.";
  }

  res.json({
    reply: reply,
  });
});

app.get("/api/products", (req, res)=>{
  res.json(products)
})
app.get("/api/orders/:orderNumber", (req, res)=>{
  const orderNumber = req.params.orderNumber;

  const order = orders.find((order)=> 
  order.orderNumber === orderNumber)

  if(!order){
    return res.status(404).json({
      message: "Order not found"
    })
  }
  res.json(order)
})
app.listen(4000, () => {
  console.log("TechNest backend running on port 4000");
});