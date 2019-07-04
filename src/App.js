import React, { useState } from 'react'
import { useRoutes } from 'hookrouter';
import Bloodsport from './routes/bloodsport'
import NotFoundPage from './routes/notFound'
import TopMenu from './routes/topMenu'
import DashBoard from './routes/dashboard'
import { AuthContext } from './context/initContext'

import './App.css';

const routes = {
  '/': () => <DashBoard />,
  '/bloodsport': () => <Bloodsport />
};

const App = () => {
  const [authenticated, setAuthenticate] = useState(false)
  const routeResult = useRoutes(routes);
  return (
    <div className='content'>
      <AuthContext.Provider value={{ authenticated: authenticated, authenticateUser: setAuthenticate }}>
        <TopMenu />
      </AuthContext.Provider>
      {routeResult || <NotFoundPage />}
    </div>
  )
}

export default App