const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

const sendResponce = (response, statusCode, body) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

exports.addDataset = functions.https.onRequest(async (req, res) => {
  // 送信コードが違う
  if (req.method !== "POST") {
    sendResponce(res, 405, {error: "Invalid Request"});
  } else {
    const dataset = req.body;
    for (const key of Object.keys(dataset)) {
      const data = dataset[key];
      await db.collection("questions").doc(key).set(data);
    }
    sendResponce(res, 200, {message: "Successfully added dataset! WooHoo!"});
  }
});

// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
