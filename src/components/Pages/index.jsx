import React from 'react'

function Pages() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
        <Route path='/about' component={About} />
        <Route path='/counter' component={CounterPage} />

        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  )
}
export default Pages;