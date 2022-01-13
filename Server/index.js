import express from 'express'; //npm i express
const app = express();
import cors from 'cors'; //npm i cors
const PORT  = 3005;
import router from './router.js';
import cron from 'node-cron';
import {updateAllData} from './controllers/updateData.controller.js'

//cron.schedule('0 0 0 * * *', async () => { updateAllData() } ); // runs everyday at midnight?
//cron.schedule('0 */1 * * * *', async () => { updateAllData() } ); // runs every minute
  //proper timeline: uae tour (end of february) - il lombardia (beginning of october)
app.use(cors());
app.use(express.json()); // body parser
app.use(router);

// socket.on("error", (err) =>
// console.log("Caught flash policy server socket error: ")
// console.log(err.stack)
// )

(async function () {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port: http://localhost:${PORT}`)
      updateAllData();
    });  
  } catch (e) {
    console.log('error:', e)
  };
})();;



