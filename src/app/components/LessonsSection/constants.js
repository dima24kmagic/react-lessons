export const lessons = [
  {
    /** Lesson id */
    id: '1',
    /** Lesson title */
    title: 'Привет React',
    /** is Pure Text */
    body: `
## Добро пожаловать на уроки реакта!
Я думаю, что вы уже знаете, что такое ReactJS, А если нет, то рекоммендую к прочтению [ReactJS](http:reactjsdoc.com)


>    *Для того, чтобы создать ваш первый проект, вам понадобиться* ***create-react-app***

Давайте приступим к созданию первого приложения:  
\`1. run create-react-app <your app name>\`  
\`2. В создавшейся директории откройте файл App.js\`  
\`3. Отредактируйте текст\`  
\`4. run npm start\`  

# Поздравляю! только что вы запустили своё первое React Приложение
`,
  },
  {
    /** Lesson id */
    id: '2',
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
  },
  {
    /** Lesson id */
    id: '3',
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
  },
]
