const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");
const { FundsModel } = require("./model/FundsModel");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGO_URL;
const app = express();

app.use(cors({ origin: ["http://localhost:3000", "http://localhost:3001"], credentials: true }));
app.use(bodyParser.json());

//  JWT Middleware 
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};



mongoose.connect(URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });


app.get("/addPositions", async (req, res) => {
  let templatePostion = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ]
  templatePostion.forEach((item) => {
    let newPosition = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,

    });
    newPosition.save();
  });
  res.send("Done !");

});


app.get("/addOrders", async (req, res) => {
  let templateOrders = [
    {
      name: "RELIANCE",
      qty: 2,
      price: 2150.0,
      mode: "BUY",
    },
    {
      name: "TCS",
      qty: 1,
      price: 3200.5,
      mode: "BUY",
    },
    {
      name: "INFY",
      qty: 3,
      price: 1480.75,
      mode: "SELL",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      price: 1530.2,
      mode: "BUY",
    },
    {
      name: "SBIN",
      qty: 5,
      price: 425.6,
      mode: "SELL",
    },
  ];

  templateOrders.forEach((item) => {
    let newOrder = new OrdersModel({
      name: item.name,
      qty: item.qty,
      price: item.price,
      mode: item.mode,
    });
    newOrder.save();
  });

  res.send("Orders added!");
});

app.get("/allHoldings", authenticateToken, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", authenticateToken, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", authenticateToken, async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", authenticateToken, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  let newOrder = new OrdersModel({ name, qty, price, mode });
  await newOrder.save();
  res.json({ message: "Order placed successfully!", order: newOrder });
});

// ── Auth Routes ──────────────────────────────────────────
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required." });
  try {
    const existing = await UserModel.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "User already exists with this email." });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.status(201).json({ message: "Account created successfully!", token, name: user.name });
  } catch (err) {
    res.status(500).json({ message: "Signup failed.", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required." });
  try {
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password." });

    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.json({ message: "Login successful!", token, name: user.name });
  } catch (err) {
    res.status(500).json({ message: "Login failed.", error: err.message });
  }
});

// ── Protected: verify token
app.get("/me", authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

// ── Funds Routes ──────────────────────────────────────────
app.get("/allFunds", authenticateToken, async (req, res) => {
  try {
    let funds = await FundsModel.findOne({});
    if (!funds) {
      funds = new FundsModel({
        availableMargin: 2452.76,
        usedMargin: 5120.22,
        openingBalance: 7572.98,
        payin: 0,
        span: 3200.0,
        deliveryMargin: 0,
        exposure: 1920.22,
        optionsPremium: 0,
      });
      await funds.save();
    }
    res.json(funds);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch funds.", error: err.message });
  }
});

app.post("/addFunds", authenticateToken, async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount || amount <= 0)
      return res.status(400).json({ message: "Invalid amount." });
    let funds = await FundsModel.findOne({});
    if (!funds) {
      funds = new FundsModel({ availableMargin: amount, openingBalance: amount, payin: amount });
    } else {
      funds.availableMargin += amount;
      funds.openingBalance += amount;
      funds.payin += amount;
      funds.updatedAt = Date.now();
    }
    await funds.save();
    res.json({ message: "Funds added!", funds });
  } catch (err) {
    res.status(500).json({ message: "Failed to add funds.", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});