import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './page/Home'
import { Posts } from './page/Posts'
import { Repositories } from './page/Repositories'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/repositories" element={<Repositories />} />
      </Route>
    </Routes>
  )
}
