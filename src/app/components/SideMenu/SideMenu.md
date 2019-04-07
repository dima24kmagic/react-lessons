Example:

```js
const { lessonsInArray } = require('../../lessonsData/allLessons')
const { BrowserRouter } = require('react-router-dom')

;<BrowserRouter>
  <div>
    This side menu opens from start
    <SideMenu lessons={lessonsInArray} currentLessonId={null} />
  </div>
</BrowserRouter>
```
