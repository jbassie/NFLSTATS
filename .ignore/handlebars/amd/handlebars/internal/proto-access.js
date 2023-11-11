define(["exports", "./create-new-lookup-object", "../logger"], function (
  exports,
  _createNewLookupObject,
  _logger,
) {
  "use strict";

  exports.__esModule = true;
  exports.createProtoAccessControl = createProtoAccessControl;
  exports.resultIsAllowed = resultIsAllowed;
  exports.resetLoggedProperties = resetLoggedProperties;
  // istanbul ignore next

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var _logger2 = _interopRequireDefault(_logger);

  var loggedProperties = Object.create(null);

  function createProtoAccessControl(runtimeOptions) {
    var defaultMethodWhiteList = Object.create(null);
    defaultMethodWhiteList["constructor"] = false;
    defaultMethodWhiteList["__defineGetter__"] = false;
    defaultMethodWhiteList["__defineSetter__"] = false;
    defaultMethodWhiteList["__lookupGetter__"] = false;

    var defaultPropertyWhiteList = Object.create(null);
    // eslint-disable-next-line no-proto
    defaultPropertyWhiteList["__proto__"] = false;

    return {
      properties: {
        whitelist: _createNewLookupObject.createNewLookupObject(
          defaultPropertyWhiteList,
          runtimeOptions.allowedProtoProperties,
        ),
        defaultValue: runtimeOptions.allowProtoPropertiesByDefault,
      },
      methods: {
        whitelist: _createNewLookupObject.createNewLookupObject(
          defaultMethodWhiteList,
          runtimeOptions.allowedProtoMethods,
        ),
        defaultValue: runtimeOptions.allowProtoMethodsByDefault,
      },
    };
  }

  function resultIsAllowed(result, protoAccessControl, propertyName) {
    if (typeof result === "function") {
      return checkWhiteList(protoAccessControl.methods, propertyName);
    } else {
      return checkWhiteList(protoAccessControl.properties, propertyName);
    }
  }

  function checkWhiteList(protoAccessControlForType, propertyName) {
    if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
      return protoAccessControlForType.whitelist[propertyName] === true;
    }
    if (protoAccessControlForType.defaultValue !== undefined) {
      return protoAccessControlForType.defaultValue;
    }
    logUnexpecedPropertyAccessOnce(propertyName);
    return false;
  }

  function logUnexpecedPropertyAccessOnce(propertyName) {
    if (loggedProperties[propertyName] !== true) {
      loggedProperties[propertyName] = true;
      _logger2["default"].log(
        "error",
        'Handlebars: Access has been denied to resolve the property "' +
          propertyName +
          '" because it is not an "own property" of its parent.\n' +
          "You can add a runtime option to disable the check or this warning:\n" +
          "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details",
      );
    }
  }

  function resetLoggedProperties() {
    Object.keys(loggedProperties).forEach(function (propertyName) {
      delete loggedProperties[propertyName];
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV0QyxXQUFTLHdCQUF3QixDQUFDLGNBQWMsRUFBRTtBQUN2RCxRQUFJLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakQsMEJBQXNCLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQzlDLDBCQUFzQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ25ELDBCQUFzQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ25ELDBCQUFzQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUVuRCxRQUFJLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRW5ELDRCQUF3QixDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQzs7QUFFOUMsV0FBTztBQUNMLGdCQUFVLEVBQUU7QUFDVixpQkFBUyxFQUFFLHVCQWxCUixxQkFBcUIsQ0FtQnRCLHdCQUF3QixFQUN4QixjQUFjLENBQUMsc0JBQXNCLENBQ3RDO0FBQ0Qsb0JBQVksRUFBRSxjQUFjLENBQUMsNkJBQTZCO09BQzNEO0FBQ0QsYUFBTyxFQUFFO0FBQ1AsaUJBQVMsRUFBRSx1QkF6QlIscUJBQXFCLENBMEJ0QixzQkFBc0IsRUFDdEIsY0FBYyxDQUFDLG1CQUFtQixDQUNuQztBQUNELG9CQUFZLEVBQUUsY0FBYyxDQUFDLDBCQUEwQjtPQUN4RDtLQUNGLENBQUM7R0FDSDs7QUFFTSxXQUFTLGVBQWUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFO0FBQ3hFLFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO0FBQ2hDLGFBQU8sY0FBYyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztLQUNqRSxNQUFNO0FBQ0wsYUFBTyxjQUFjLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ3BFO0dBQ0Y7O0FBRUQsV0FBUyxjQUFjLENBQUMseUJBQXlCLEVBQUUsWUFBWSxFQUFFO0FBQy9ELFFBQUkseUJBQXlCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUNuRSxhQUFPLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLENBQUM7S0FDbkU7QUFDRCxRQUFJLHlCQUF5QixDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7QUFDeEQsYUFBTyx5QkFBeUIsQ0FBQyxZQUFZLENBQUM7S0FDL0M7QUFDRCxrQ0FBOEIsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3QyxXQUFPLEtBQUssQ0FBQztHQUNkOztBQUVELFdBQVMsOEJBQThCLENBQUMsWUFBWSxFQUFFO0FBQ3BELFFBQUksZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQzNDLHNCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN0QywwQkFBTyxHQUFHLENBQ1IsT0FBTyxFQUNQLGlFQUErRCxZQUFZLG9JQUNILG9IQUMyQyxDQUNwSCxDQUFDO0tBQ0g7R0FDRjs7QUFFTSxXQUFTLHFCQUFxQixHQUFHO0FBQ3RDLFVBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLEVBQUk7QUFDcEQsYUFBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN2QyxDQUFDLENBQUM7R0FDSiIsImZpbGUiOiJwcm90by1hY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdMb29rdXBPYmplY3QgfSBmcm9tICcuL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdCc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uL2xvZ2dlcic7XG5cbmNvbnN0IGxvZ2dlZFByb3BlcnRpZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sKHJ1bnRpbWVPcHRpb25zKSB7XG4gIGxldCBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnY29uc3RydWN0b3InXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZUdldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19kZWZpbmVTZXR0ZXJfXyddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fbG9va3VwR2V0dGVyX18nXSA9IGZhbHNlO1xuXG4gIGxldCBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cbiAgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0WydfX3Byb3RvX18nXSA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgd2hpdGVsaXN0OiBjcmVhdGVOZXdMb29rdXBPYmplY3QoXG4gICAgICAgIGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCxcbiAgICAgICAgcnVudGltZU9wdGlvbnMuYWxsb3dlZFByb3RvUHJvcGVydGllc1xuICAgICAgKSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogcnVudGltZU9wdGlvbnMuYWxsb3dQcm90b1Byb3BlcnRpZXNCeURlZmF1bHRcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHdoaXRlbGlzdDogY3JlYXRlTmV3TG9va3VwT2JqZWN0KFxuICAgICAgICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0LFxuICAgICAgICBydW50aW1lT3B0aW9ucy5hbGxvd2VkUHJvdG9NZXRob2RzXG4gICAgICApLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvTWV0aG9kc0J5RGVmYXVsdFxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VsdElzQWxsb3dlZChyZXN1bHQsIHByb3RvQWNjZXNzQ29udHJvbCwgcHJvcGVydHlOYW1lKSB7XG4gIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5tZXRob2RzLCBwcm9wZXJ0eU5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaGVja1doaXRlTGlzdChwcm90b0FjY2Vzc0NvbnRyb2wucHJvcGVydGllcywgcHJvcGVydHlOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1doaXRlTGlzdChwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLndoaXRlbGlzdFtwcm9wZXJ0eU5hbWVdID09PSB0cnVlO1xuICB9XG4gIGlmIChwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlO1xuICB9XG4gIGxvZ1VuZXhwZWNlZFByb3BlcnR5QWNjZXNzT25jZShwcm9wZXJ0eU5hbWUpO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxvZ1VuZXhwZWNlZFByb3BlcnR5QWNjZXNzT25jZShwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSAhPT0gdHJ1ZSkge1xuICAgIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHRydWU7XG4gICAgbG9nZ2VyLmxvZyhcbiAgICAgICdlcnJvcicsXG4gICAgICBgSGFuZGxlYmFyczogQWNjZXNzIGhhcyBiZWVuIGRlbmllZCB0byByZXNvbHZlIHRoZSBwcm9wZXJ0eSBcIiR7cHJvcGVydHlOYW1lfVwiIGJlY2F1c2UgaXQgaXMgbm90IGFuIFwib3duIHByb3BlcnR5XCIgb2YgaXRzIHBhcmVudC5cXG5gICtcbiAgICAgICAgYFlvdSBjYW4gYWRkIGEgcnVudGltZSBvcHRpb24gdG8gZGlzYWJsZSB0aGUgY2hlY2sgb3IgdGhpcyB3YXJuaW5nOlxcbmAgK1xuICAgICAgICBgU2VlIGh0dHBzOi8vaGFuZGxlYmFyc2pzLmNvbS9hcGktcmVmZXJlbmNlL3J1bnRpbWUtb3B0aW9ucy5odG1sI29wdGlvbnMtdG8tY29udHJvbC1wcm90b3R5cGUtYWNjZXNzIGZvciBkZXRhaWxzYFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TG9nZ2VkUHJvcGVydGllcygpIHtcbiAgT2JqZWN0LmtleXMobG9nZ2VkUHJvcGVydGllcykuZm9yRWFjaChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgIGRlbGV0ZSBsb2dnZWRQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gIH0pO1xufVxuIl19
