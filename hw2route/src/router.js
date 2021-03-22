import  Home from "./components/Home.vue";
import  Board from "./components/Board.vue";
import  Statics from "./components/Statics.vue";

const router = {
      '/': Home,
      '/board' : Board,
      '/statics' : Statics
}

export default router;