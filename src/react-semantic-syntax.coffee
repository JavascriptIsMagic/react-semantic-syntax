mergeClassName = (styles...) ->
  classNames = {}
  for style in styles
    if typeof style is 'string'
      style = style.split /\s+/g
    if Array.isArray style
      for className in style when className
        classNames[className] = yes
    else if style and typeof style is 'object'
      for own className, value of style
        if (className is 'className') and typeof value is 'string'
          for className in value.split /\s+/g
            classNames[className] = yes
        else if value is yes
          classNames[className] = yes
  delete classNames['']
  Object.keys classNames
    .join ' '

semantic = (render) -> ->
  recurse = (element) ->
    return element unless React.isValidElement element
    props = {}
    classNames = mergeClassName element.props
    if classNames then props.className = classNames
    React.cloneElement element, props, React.Children.map element.props.children, recurse
  recurse render arguments...

semantic.mergeClassName = mergeClassName
semantic.semantic = semantic

if module?.exports?
  module.exports = semantic
else
  window.SemanticReactSyntax = semantic
