// Execute with command:
// node set-custom-claim.js <<user-id>>

var admin = require("firebase-admin");
var uid = process.argv[2]

var serviceAccount = require("./fir-demo-app-210f8-firebase-adminsdk-m8y2h-ba9cbde698.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.auth().setCustomUserClaims(uid, {admin : true})
    .then(() => {
        console.log('admin custom claim was set for user',uid)
        process.exit();
    })
    .catch((error) => {
        console.log('error setting admin custom claim',error)
        process.exit(1);
    });
