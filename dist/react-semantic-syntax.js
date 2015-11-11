(function() {
  var mergeClassName, semantic,
    slice = [].slice,
    hasProp = {}.hasOwnProperty;

  mergeClassName = function() {
    var className, classNames, i, j, k, len, len1, len2, ref, style, styles, value;
    styles = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    classNames = {};
    for (i = 0, len = styles.length; i < len; i++) {
      style = styles[i];
      if (typeof style === 'string') {
        style = style.split(/\s+/g);
      }
      if (Array.isArray(style)) {
        for (j = 0, len1 = style.length; j < len1; j++) {
          className = style[j];
          if (className) {
            classNames[className] = true;
          }
        }
      } else if (style && typeof style === 'object') {
        for (className in style) {
          if (!hasProp.call(style, className)) continue;
          value = style[className];
          if ((className === 'className') && typeof value === 'string') {
            ref = value.split(/\s+/g);
            for (k = 0, len2 = ref.length; k < len2; k++) {
              className = ref[k];
              classNames[className] = true;
            }
          } else if (value === true) {
            classNames[className] = true;
          }
        }
      }
    }
    delete classNames[''];
    return Object.keys(classNames).join(' ');
  };

  semantic = function(render) {
    return function() {
      var recurse;
      recurse = function(element) {
        var classNames, props;
        if (!React.isValidElement(element)) {
          return element;
        }
        props = {};
        classNames = mergeClassName(element.props);
        if (classNames) {
          props.className = classNames;
        }
        return React.cloneElement(element, props, React.Children.map(element.props.children, recurse));
      };
      return recurse(render.apply(this, arguments));
    };
  };

  semantic.mergeClassName = mergeClassName;

  semantic.semantic = semantic;

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = semantic;
  } else {
    window.SemanticReactSyntax = semantic;
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LXNlbWFudGljLXN5bnRheC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLHdCQUFBO0lBQUE7OztFQUFBLGNBQUEsR0FBaUIsU0FBQTtBQUNmLFFBQUE7SUFEZ0I7SUFDaEIsVUFBQSxHQUFhO0FBQ2IsU0FBQSx3Q0FBQTs7TUFDRSxJQUFHLE9BQU8sS0FBUCxLQUFnQixRQUFuQjtRQUNFLEtBQUEsR0FBUSxLQUFLLENBQUMsS0FBTixDQUFZLE1BQVosRUFEVjs7TUFFQSxJQUFHLEtBQUssQ0FBQyxPQUFOLENBQWMsS0FBZCxDQUFIO0FBQ0UsYUFBQSx5Q0FBQTs7Y0FBNEI7WUFDMUIsVUFBVyxDQUFBLFNBQUEsQ0FBWCxHQUF3Qjs7QUFEMUIsU0FERjtPQUFBLE1BR0ssSUFBRyxLQUFBLElBQVUsT0FBTyxLQUFQLEtBQWdCLFFBQTdCO0FBQ0gsYUFBQSxrQkFBQTs7O1VBQ0UsSUFBRyxDQUFDLFNBQUEsS0FBYSxXQUFkLENBQUEsSUFBK0IsT0FBTyxLQUFQLEtBQWdCLFFBQWxEO0FBQ0U7QUFBQSxpQkFBQSx1Q0FBQTs7Y0FDRSxVQUFXLENBQUEsU0FBQSxDQUFYLEdBQXdCO0FBRDFCLGFBREY7V0FBQSxNQUdLLElBQUcsS0FBQSxLQUFTLElBQVo7WUFDSCxVQUFXLENBQUEsU0FBQSxDQUFYLEdBQXdCLEtBRHJCOztBQUpQLFNBREc7O0FBTlA7SUFhQSxPQUFPLFVBQVcsQ0FBQSxFQUFBO1dBQ2xCLE1BQU0sQ0FBQyxJQUFQLENBQVksVUFBWixDQUNFLENBQUMsSUFESCxDQUNRLEdBRFI7RUFoQmU7O0VBbUJqQixRQUFBLEdBQVcsU0FBQyxNQUFEO1dBQVksU0FBQTtBQUNyQixVQUFBO01BQUEsT0FBQSxHQUFVLFNBQUMsT0FBRDtBQUNSLFlBQUE7UUFBQSxJQUFBLENBQXNCLEtBQUssQ0FBQyxjQUFOLENBQXFCLE9BQXJCLENBQXRCO0FBQUEsaUJBQU8sUUFBUDs7UUFDQSxLQUFBLEdBQVE7UUFDUixVQUFBLEdBQWEsY0FBQSxDQUFlLE9BQU8sQ0FBQyxLQUF2QjtRQUNiLElBQUcsVUFBSDtVQUFtQixLQUFLLENBQUMsU0FBTixHQUFrQixXQUFyQzs7ZUFDQSxLQUFLLENBQUMsWUFBTixDQUFtQixPQUFuQixFQUE0QixLQUE1QixFQUFtQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQWYsQ0FBbUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFqQyxFQUEyQyxPQUEzQyxDQUFuQztNQUxRO2FBTVYsT0FBQSxDQUFRLE1BQU0sQ0FBQyxLQUFQLENBQWEsSUFBYixFQUFnQixTQUFoQixDQUFSO0lBUHFCO0VBQVo7O0VBU1gsUUFBUSxDQUFDLGNBQVQsR0FBMEI7O0VBQzFCLFFBQVEsQ0FBQyxRQUFULEdBQW9COztFQUVwQixJQUFHLG9GQUFIO0lBQ0UsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FEbkI7R0FBQSxNQUFBO0lBR0UsTUFBTSxDQUFDLG1CQUFQLEdBQTZCLFNBSC9COztBQS9CQSIsImZpbGUiOiJyZWFjdC1zZW1hbnRpYy1zeW50YXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJtZXJnZUNsYXNzTmFtZSA9IChzdHlsZXMuLi4pIC0+XHJcbiAgY2xhc3NOYW1lcyA9IHt9XHJcbiAgZm9yIHN0eWxlIGluIHN0eWxlc1xyXG4gICAgaWYgdHlwZW9mIHN0eWxlIGlzICdzdHJpbmcnXHJcbiAgICAgIHN0eWxlID0gc3R5bGUuc3BsaXQgL1xccysvZ1xyXG4gICAgaWYgQXJyYXkuaXNBcnJheSBzdHlsZVxyXG4gICAgICBmb3IgY2xhc3NOYW1lIGluIHN0eWxlIHdoZW4gY2xhc3NOYW1lXHJcbiAgICAgICAgY2xhc3NOYW1lc1tjbGFzc05hbWVdID0geWVzXHJcbiAgICBlbHNlIGlmIHN0eWxlIGFuZCB0eXBlb2Ygc3R5bGUgaXMgJ29iamVjdCdcclxuICAgICAgZm9yIG93biBjbGFzc05hbWUsIHZhbHVlIG9mIHN0eWxlXHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZSBpcyAnY2xhc3NOYW1lJykgYW5kIHR5cGVvZiB2YWx1ZSBpcyAnc3RyaW5nJ1xyXG4gICAgICAgICAgZm9yIGNsYXNzTmFtZSBpbiB2YWx1ZS5zcGxpdCAvXFxzKy9nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXNbY2xhc3NOYW1lXSA9IHllc1xyXG4gICAgICAgIGVsc2UgaWYgdmFsdWUgaXMgeWVzXHJcbiAgICAgICAgICBjbGFzc05hbWVzW2NsYXNzTmFtZV0gPSB5ZXNcclxuICBkZWxldGUgY2xhc3NOYW1lc1snJ11cclxuICBPYmplY3Qua2V5cyBjbGFzc05hbWVzXHJcbiAgICAuam9pbiAnICdcclxuXHJcbnNlbWFudGljID0gKHJlbmRlcikgLT4gLT5cclxuICByZWN1cnNlID0gKGVsZW1lbnQpIC0+XHJcbiAgICByZXR1cm4gZWxlbWVudCB1bmxlc3MgUmVhY3QuaXNWYWxpZEVsZW1lbnQgZWxlbWVudFxyXG4gICAgcHJvcHMgPSB7fVxyXG4gICAgY2xhc3NOYW1lcyA9IG1lcmdlQ2xhc3NOYW1lIGVsZW1lbnQucHJvcHNcclxuICAgIGlmIGNsYXNzTmFtZXMgdGhlbiBwcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWVzXHJcbiAgICBSZWFjdC5jbG9uZUVsZW1lbnQgZWxlbWVudCwgcHJvcHMsIFJlYWN0LkNoaWxkcmVuLm1hcCBlbGVtZW50LnByb3BzLmNoaWxkcmVuLCByZWN1cnNlXHJcbiAgcmVjdXJzZSByZW5kZXIuYXBwbHkgQCwgYXJndW1lbnRzXHJcblxyXG5zZW1hbnRpYy5tZXJnZUNsYXNzTmFtZSA9IG1lcmdlQ2xhc3NOYW1lXHJcbnNlbWFudGljLnNlbWFudGljID0gc2VtYW50aWNcclxuXHJcbmlmIG1vZHVsZT8uZXhwb3J0cz9cclxuICBtb2R1bGUuZXhwb3J0cyA9IHNlbWFudGljXHJcbmVsc2VcclxuICB3aW5kb3cuU2VtYW50aWNSZWFjdFN5bnRheCA9IHNlbWFudGljXHJcbiJdfQ==
