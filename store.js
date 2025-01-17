// Créer un store Redux
// Aussi, cela permet de configurer l'extension 'redux devTools'

import { configureStore } from "@reduxjs/toolkit";

// Attention, import automatique NOK
// Modifier le en enlevant les {} permettant de destructurer de l'import fait automatiquement
import counter from "./src/slice/counterSlice";
import cart from "./src/slice/cartSlice";

export default configureStore({
  reducer: { counter, cart },
});
