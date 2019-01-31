Example:

```js
const { BrowserRouter } = require('react-router-dom')
// const { Button } = require('@material-ui/core')

initialState = {
  isOpen: false,
}

const toggleMenu = () => {
  console.log('HELLO')
  setState({
    isOpen: !state.isOpen,
  })
}
;<BrowserRouter>
  <div>
    <Button onClick={toggleMenu}>Open Side Nav</Button>
    <SideMenu
      toggleMenu={toggleMenu}
      isOpen={state.isOpen}
      links={[{ to: 'TEST', text: 'TEST' }]}
    />
  </div>
</BrowserRouter>
```
