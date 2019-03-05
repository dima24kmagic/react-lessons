Example:

```js
const lesson = {
  /** Lesson id */
  id: '1',
  /** Lesson title */
  title: 'Hello React',
  /** is Pure Text */
  body: `
  # This is a header
  ## Hey  
  --------
  And this is a paragraph
  --------
  
  \`\`\`js
  var React = require('react');
  var Markdown = require('react-markdown');
  React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
  );
  \`\`\`
  
  `,
}
;<Lesson lesson={lesson} />
```
