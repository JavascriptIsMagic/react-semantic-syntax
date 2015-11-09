# react-semantic-syntax
Semantic Syntax for className in React for easily working with CSS Frameworks such as Semantic-UI, Bootstrap, and others.

```coffee
React = require 'react'
ReactDOM = require 'react-dom'

semantic = require 'react-semantic-syntax/.coffee'

# React class example:
Segment = React.createClass
  render: semantic ->
    <div ui segment any-class-name-here> Hello Syntax! </div>

# Pure render-only component example:
Segment = semantic ->
  <div ui segment any-class-name-here> Hello Syntax! </div>

# Render to the dom:
ReactDOM.render <Segment />, document.body.firstChild
```
Would render something like this on the dom:
```html
  <div class="ui segment any-class-name-here"> Hello Syntax! </div>
```
