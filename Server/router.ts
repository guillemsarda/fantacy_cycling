import { Request, Response, Router } from "express";
import { RequestContext } from "express-openid-connect";

// import fetchRiderData from './controllers/riderData.controller.js';
import {
  fetchTeam,
  createNewUser,
  addRider,
  removeRider,
  fetchUserData,
  fetchRiders,
  changeTeamName,
  fetchUsers,
} from "./controllers/userData.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const authenticated: RequestContext = req.oidc;
  res.render("index", {
    title: "express Demo",
    isAuthenticated: authenticated.isAuthenticated(),
  });
});
router.get("/allriders", fetchRiders);
router.get("/allUsers", fetchUsers);
router.post("/newTeam", createNewUser); // { username, team, password} = req.body; => returns {id:"1"}
router.get("/team/details/:nickname", fetchUserData); // returns {"name":"natasha", "team-name":"myTeam", "score":0, "money":500}
router.put("/team/:id", changeTeamName);
router.get("/team/:id", fetchTeam); // returns [{"name":"Hendrik"},{"name":"Wout"},...]
router.put("/team/add/:id/:rider", addRider); // currently both id numbers(userId, riderId)
router.put("/team/delete/:id/:rider", removeRider);

router.all("*", (req, res) => res.status(404).send("Does not exist"));

export default router;
