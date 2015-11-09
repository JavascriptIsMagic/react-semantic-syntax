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
      return recurse(render.apply(null, arguments));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LXNlbWFudGljLXN5bnRheC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLHdCQUFBO0lBQUE7OztFQUFBLGNBQUEsR0FBaUIsU0FBQTtBQUNmLFFBQUE7SUFEZ0I7SUFDaEIsVUFBQSxHQUFhO0FBQ2IsU0FBQSx3Q0FBQTs7TUFDRSxJQUFHLE9BQU8sS0FBUCxLQUFnQixRQUFuQjtRQUNFLEtBQUEsR0FBUSxLQUFLLENBQUMsS0FBTixDQUFZLE1BQVosRUFEVjs7TUFFQSxJQUFHLEtBQUssQ0FBQyxPQUFOLENBQWMsS0FBZCxDQUFIO0FBQ0UsYUFBQSx5Q0FBQTs7Y0FBNEI7WUFDMUIsVUFBVyxDQUFBLFNBQUEsQ0FBWCxHQUF3Qjs7QUFEMUIsU0FERjtPQUFBLE1BR0ssSUFBRyxLQUFBLElBQVUsT0FBTyxLQUFQLEtBQWdCLFFBQTdCO0FBQ0gsYUFBQSxrQkFBQTs7O1VBQ0UsSUFBRyxDQUFDLFNBQUEsS0FBYSxXQUFkLENBQUEsSUFBK0IsT0FBTyxLQUFQLEtBQWdCLFFBQWxEO0FBQ0U7QUFBQSxpQkFBQSx1Q0FBQTs7Y0FDRSxVQUFXLENBQUEsU0FBQSxDQUFYLEdBQXdCO0FBRDFCLGFBREY7V0FBQSxNQUdLLElBQUcsS0FBQSxLQUFTLElBQVo7WUFDSCxVQUFXLENBQUEsU0FBQSxDQUFYLEdBQXdCLEtBRHJCOztBQUpQLFNBREc7O0FBTlA7SUFhQSxPQUFPLFVBQVcsQ0FBQSxFQUFBO1dBQ2xCLE1BQU0sQ0FBQyxJQUFQLENBQVksVUFBWixDQUNFLENBQUMsSUFESCxDQUNRLEdBRFI7RUFoQmU7O0VBbUJqQixRQUFBLEdBQVcsU0FBQyxNQUFEO1dBQVksU0FBQTtBQUNyQixVQUFBO01BQUEsT0FBQSxHQUFVLFNBQUMsT0FBRDtBQUNSLFlBQUE7UUFBQSxJQUFBLENBQXNCLEtBQUssQ0FBQyxjQUFOLENBQXFCLE9BQXJCLENBQXRCO0FBQUEsaUJBQU8sUUFBUDs7UUFDQSxLQUFBLEdBQVE7UUFDUixVQUFBLEdBQWEsY0FBQSxDQUFlLE9BQU8sQ0FBQyxLQUF2QjtRQUNiLElBQUcsVUFBSDtVQUFtQixLQUFLLENBQUMsU0FBTixHQUFrQixXQUFyQzs7ZUFDQSxLQUFLLENBQUMsWUFBTixDQUFtQixPQUFuQixFQUE0QixLQUE1QixFQUFtQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQWYsQ0FBbUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFqQyxFQUEyQyxPQUEzQyxDQUFuQztNQUxRO2FBTVYsT0FBQSxDQUFRLE1BQUEsYUFBTyxTQUFQLENBQVI7SUFQcUI7RUFBWjs7RUFTWCxRQUFRLENBQUMsY0FBVCxHQUEwQjs7RUFDMUIsUUFBUSxDQUFDLFFBQVQsR0FBb0I7O0VBRXBCLElBQUcsb0ZBQUg7SUFDRSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQURuQjtHQUFBLE1BQUE7SUFHRSxNQUFNLENBQUMsbUJBQVAsR0FBNkIsU0FIL0I7O0FBL0JBIiwiZmlsZSI6InJlYWN0LXNlbWFudGljLXN5bnRheC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIm1lcmdlQ2xhc3NOYW1lID0gKHN0eWxlcy4uLikgLT5cclxuICBjbGFzc05hbWVzID0ge31cclxuICBmb3Igc3R5bGUgaW4gc3R5bGVzXHJcbiAgICBpZiB0eXBlb2Ygc3R5bGUgaXMgJ3N0cmluZydcclxuICAgICAgc3R5bGUgPSBzdHlsZS5zcGxpdCAvXFxzKy9nXHJcbiAgICBpZiBBcnJheS5pc0FycmF5IHN0eWxlXHJcbiAgICAgIGZvciBjbGFzc05hbWUgaW4gc3R5bGUgd2hlbiBjbGFzc05hbWVcclxuICAgICAgICBjbGFzc05hbWVzW2NsYXNzTmFtZV0gPSB5ZXNcclxuICAgIGVsc2UgaWYgc3R5bGUgYW5kIHR5cGVvZiBzdHlsZSBpcyAnb2JqZWN0J1xyXG4gICAgICBmb3Igb3duIGNsYXNzTmFtZSwgdmFsdWUgb2Ygc3R5bGVcclxuICAgICAgICBpZiAoY2xhc3NOYW1lIGlzICdjbGFzc05hbWUnKSBhbmQgdHlwZW9mIHZhbHVlIGlzICdzdHJpbmcnXHJcbiAgICAgICAgICBmb3IgY2xhc3NOYW1lIGluIHZhbHVlLnNwbGl0IC9cXHMrL2dcclxuICAgICAgICAgICAgY2xhc3NOYW1lc1tjbGFzc05hbWVdID0geWVzXHJcbiAgICAgICAgZWxzZSBpZiB2YWx1ZSBpcyB5ZXNcclxuICAgICAgICAgIGNsYXNzTmFtZXNbY2xhc3NOYW1lXSA9IHllc1xyXG4gIGRlbGV0ZSBjbGFzc05hbWVzWycnXVxyXG4gIE9iamVjdC5rZXlzIGNsYXNzTmFtZXNcclxuICAgIC5qb2luICcgJ1xyXG5cclxuc2VtYW50aWMgPSAocmVuZGVyKSAtPiAtPlxyXG4gIHJlY3Vyc2UgPSAoZWxlbWVudCkgLT5cclxuICAgIHJldHVybiBlbGVtZW50IHVubGVzcyBSZWFjdC5pc1ZhbGlkRWxlbWVudCBlbGVtZW50XHJcbiAgICBwcm9wcyA9IHt9XHJcbiAgICBjbGFzc05hbWVzID0gbWVyZ2VDbGFzc05hbWUgZWxlbWVudC5wcm9wc1xyXG4gICAgaWYgY2xhc3NOYW1lcyB0aGVuIHByb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNcclxuICAgIFJlYWN0LmNsb25lRWxlbWVudCBlbGVtZW50LCBwcm9wcywgUmVhY3QuQ2hpbGRyZW4ubWFwIGVsZW1lbnQucHJvcHMuY2hpbGRyZW4sIHJlY3Vyc2VcclxuICByZWN1cnNlIHJlbmRlciBhcmd1bWVudHMuLi5cclxuXHJcbnNlbWFudGljLm1lcmdlQ2xhc3NOYW1lID0gbWVyZ2VDbGFzc05hbWVcclxuc2VtYW50aWMuc2VtYW50aWMgPSBzZW1hbnRpY1xyXG5cclxuaWYgbW9kdWxlPy5leHBvcnRzP1xyXG4gIG1vZHVsZS5leHBvcnRzID0gc2VtYW50aWNcclxuZWxzZVxyXG4gIHdpbmRvdy5TZW1hbnRpY1JlYWN0U3ludGF4ID0gc2VtYW50aWNcclxuIl19
