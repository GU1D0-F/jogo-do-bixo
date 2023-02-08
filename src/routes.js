import { Route, Routes as RoutesDom } from "react-router-dom"

import Home from "./Pages/Home"
// import About from "./About"
// import User from "./User"

const Routes = () => {
  return (
      <RoutesDom>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="user" element={<User />} /> */}
      </RoutesDom>
  )
}

export default Routes