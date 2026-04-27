[**ui5-typescript-helloworld**](../../README.md)

***

[ui5-typescript-helloworld](../../modules.md) / [Component](../README.md) / default

# Class: default

Defined in: [webapp/Component.ts:8](https://github.com/tobiashofmann/ui5-typescript-helloworld/blob/5e7a56281065154b4eb5e32f2dce8267517545a3/webapp/Component.ts#L8)

**`Namespace`**

ui5.typescript.helloworld

## Extends

- [`default`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L49600)

## Constructors

### Constructor

> **new default**(`mSettings?`): `Component`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49615

As `UIComponent` is an abstract base class for UI components, applications should not call the constructor.
For many use cases the static sap.ui.core.Component.create Component.create factory can be used
to instantiate a `UIComponent`. Depending on the requirements, the framework also provides other ways
to instantiate a `UIComponent`, documented under the ["Component"](https://ui5.sap.com/#/topic/958ead51e2e94ab8bcdc90fb7e9d53d0)
chapter.

The set of allowed entries in the `mSettings` object depends on the concrete subclass and is described
there. See sap.ui.core.Component for a general description of this argument.

Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
objects as well as event handlers. See sap.ui.base.ManagedObject#constructor for a general description
of the syntax of the settings object.

#### Parameters

##### mSettings?

[`$UIComponentSettings`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L50032)

Optional map/JSON-object with initial settings for the new component instance

#### Returns

`Component`

#### Inherited from

`UIComponent.constructor`

### Constructor

> **new default**(`sId?`, `mSettings?`): `Component`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49635

As `UIComponent` is an abstract base class for UI components, applications should not call the constructor.
For many use cases the static sap.ui.core.Component.create Component.create factory can be used
to instantiate a `UIComponent`. Depending on the requirements, the framework also provides other ways
to instantiate a `UIComponent`, documented under the ["Component"](https://ui5.sap.com/#/topic/958ead51e2e94ab8bcdc90fb7e9d53d0)
chapter.

The set of allowed entries in the `mSettings` object depends on the concrete subclass and is described
there. See sap.ui.core.Component for a general description of this argument.

Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
objects as well as event handlers. See sap.ui.base.ManagedObject#constructor for a general description
of the syntax of the settings object.

#### Parameters

##### sId?

`string`

Optional ID for the new control; generated automatically if no non-empty ID is given; Note: this can
be omitted, no matter whether `mSettings` will be given or not

##### mSettings?

[`$UIComponentSettings`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L50032)

Optional map/JSON-object with initial settings for the new component instance

#### Returns

`Component`

#### Inherited from

`UIComponent.constructor`

## Properties

### metadata

> `static` **metadata**: `object`

Defined in: [webapp/Component.ts:10](https://github.com/tobiashofmann/ui5-typescript-helloworld/blob/5e7a56281065154b4eb5e32f2dce8267517545a3/webapp/Component.ts#L10)

#### interfaces

> **interfaces**: `string`[]

#### manifest

> **manifest**: `string` = `"json"`

***

### ~~registry~~

> `static` **registry**: [`registry`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L19548)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:18828

Registry of all `Component`s that currently exist.

#### Since

1.67

#### Deprecated

As of version 1.120. Use [:sap/ui/core/ComponentRegistry](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e0dbc3cdc26d32943bf9f46513c53da54acfc492/types/node/module.d.ts#L735) instead.

#### Inherited from

`UIComponent.registry`

## Methods

### addAggregation()

> **addAggregation**(`sAggregationName`, `oObject`, `bSuppressInvalidate?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12664

Adds some entity `oObject` to the aggregation identified by `sAggregationName`.

If the given object is not valid with regard to the aggregation (if it is not an instance of the type
specified for that aggregation) or when the method is called for an aggregation of cardinality 0..1,
then an Error is thrown (see #validateAggregation.

If the aggregation already has content, the new object will be added after the current content. If the
new object was already contained in the aggregation, it will be moved to the end.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically add an object to an aggregation. Use
the concrete method addXYZ for aggregation 'XYZ' or the generic #applySettings instead.

#### Parameters

##### sAggregationName

`string`

the string identifying the aggregation that `oObject` should be added to.

##### oObject

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

the object to add; if empty, nothing is added

##### bSuppressInvalidate?

`boolean`

if true, this ManagedObject as well as the added child are not marked as changed

#### Returns

`this`

Returns `this` to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.addAggregation`

***

### addAssociation()

> **addAssociation**(`sAssociationName`, `sId`, `bSuppressInvalidate?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12692

Adds some object with the ID `sId` to the association identified by `sAssociationName` and marks this
ManagedObject as changed.

This method does not avoid duplicates.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically add an object to an association. Use
the concrete method addXYZ for association 'XYZ' or the generic #applySettings instead.

#### Parameters

##### sAssociationName

`string`

the string identifying the association the object should be added to.

##### sId

`string` \| [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

the ID of the ManagedObject object to add; if empty, nothing is added; if a `sap.ui.base.ManagedObject`
is given, its ID is added

##### bSuppressInvalidate?

`boolean`

if true, this managed object as well as the newly associated object are not marked as changed

#### Returns

`this`

Returns `this` to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.addAssociation`

***

### applySettings()

> **applySettings**(`mSettings`, `oScope?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12722

Sets all the properties, aggregations, associations and event handlers as given in the object literal
`mSettings`. If a property, aggregation, etc. is not listed in `mSettings`, then its value is not changed
by this method.

For properties and 0..1 aggregations/associations, any given setting overwrites the current value. For
0..n aggregations, the given values are appended; event listeners are registered in addition to existing
ones.

For the possible keys and values in `mSettings` see the general documentation in sap.ui.base.ManagedObject
or the specific documentation of the constructor of the concrete managed object class.

#### Parameters

##### mSettings

[`$ManagedObjectSettings`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14799)

the settings to apply to this managed object

##### oScope?

`object`

Scope object to resolve types and formatters

#### Returns

`this`

Returns `this` to allow method chaining

#### Inherited from

`UIComponent.applySettings`

***

### attachEvent()

#### Call Signature

> **attachEvent**(`sEventId`, `oData`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:11934

Attaches an event handler to the event with the given identifier.

##### Parameters

###### sEventId

`string`

The identifier of the event to listen for

###### oData

`object`

An object that will be passed to the handler along with the event object when the event is fired

###### fnFunction

`Function`

The handler function to call when the event occurs. This function will be called in the context of the
`oListener` instance (if present) or on the event provider instance. The event object (sap.ui.base.Event)
is provided as first argument of the handler. Handlers must not change the content of the event. The
second argument is the specified `oData` instance (if present).

###### oListener?

`object`

The object that wants to be notified when the event occurs (`this` context within the handler function).
If it is not specified, the handler function is called in the context of the event provider.

##### Returns

`this`

Returns `this` to allow method chaining

##### Inherited from

`UIComponent.attachEvent`

#### Call Signature

> **attachEvent**(`sEventId`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:11962

Attaches an event handler to the event with the given identifier.

##### Parameters

###### sEventId

`string`

The identifier of the event to listen for

###### fnFunction

`Function`

The handler function to call when the event occurs. This function will be called in the context of the
`oListener` instance (if present) or on the event provider instance. The event object (sap.ui.base.Event)
is provided as first argument of the handler. Handlers must not change the content of the event. The
second argument is the specified `oData` instance (if present).

###### oListener?

`object`

The object that wants to be notified when the event occurs (`this` context within the handler function).
If it is not specified, the handler function is called in the context of the event provider.

##### Returns

`this`

Returns `this` to allow method chaining

##### Inherited from

`UIComponent.attachEvent`

***

### attachEventOnce()

#### Call Signature

> **attachEventOnce**(`sEventId`, `oData`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:11989

Attaches an event handler, called one time only, to the event with the given identifier.

When the event occurs, the handler function is called and the handler registration is automatically removed
afterwards.

##### Parameters

###### sEventId

`string`

The identifier of the event to listen for

###### oData

`object`

An object that will be passed to the handler along with the event object when the event is fired

###### fnFunction

`Function`

The handler function to call when the event occurs. This function will be called in the context of the
`oListener` instance (if present) or on the event provider instance. The event object (sap.ui.base.Event)
is provided as first argument of the handler. Handlers must not change the content of the event. The
second argument is the specified `oData` instance (if present).

###### oListener?

`object`

The object that wants to be notified when the event occurs (`this` context within the handler function).
If it is not specified, the handler function is called in the context of the event provider.

##### Returns

`this`

Returns `this` to allow method chaining

##### Inherited from

`UIComponent.attachEventOnce`

#### Call Signature

> **attachEventOnce**(`sEventId`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12020

Attaches an event handler, called one time only, to the event with the given identifier.

When the event occurs, the handler function is called and the handler registration is automatically removed
afterwards.

##### Parameters

###### sEventId

`string`

The identifier of the event to listen for

###### fnFunction

`Function`

The handler function to call when the event occurs. This function will be called in the context of the
`oListener` instance (if present) or on the event provider instance. The event object (sap.ui.base.Event)
is provided as first argument of the handler. Handlers must not change the content of the event. The
second argument is the specified `oData` instance (if present).

###### oListener?

`object`

The object that wants to be notified when the event occurs (`this` context within the handler function).
If it is not specified, the handler function is called in the context of the event provider.

##### Returns

`this`

Returns `this` to allow method chaining

##### Inherited from

`UIComponent.attachEventOnce`

***

### attachFormatError()

#### Call Signature

> **attachFormatError**(`oData`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12744

Attaches event handler `fnFunction` to the #event:formatError formatError event of this `sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired when a new value for a bound property should have been propagated from the model, but formatting
the value failed with an exception.

##### Parameters

###### oData

`object`

An application-specific payload object that will be passed to the event handler along with the event
object when firing the event

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachFormatError`

#### Call Signature

> **attachFormatError**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12771

Attaches event handler `fnFunction` to the #event:formatError formatError event of this `sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired when a new value for a bound property should have been propagated from the model, but formatting
the value failed with an exception.

##### Parameters

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachFormatError`

***

### attachModelContextChange()

#### Call Signature

> **attachModelContextChange**(`oData`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12794

Attaches event handler `fnFunction` to the #event:modelContextChange modelContextChange event
of this `sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired when models or contexts are changed on this object (either by calling setModel/setBindingContext
or due to propagation)

##### Parameters

###### oData

`object`

An application-specific payload object that will be passed to the event handler along with the event
object when firing the event

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachModelContextChange`

#### Call Signature

> **attachModelContextChange**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12822

Attaches event handler `fnFunction` to the #event:modelContextChange modelContextChange event
of this `sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired when models or contexts are changed on this object (either by calling setModel/setBindingContext
or due to propagation)

##### Parameters

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachModelContextChange`

***

### attachParseError()

#### Call Signature

> **attachParseError**(`oData`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12844

Attaches event handler `fnFunction` to the #event:parseError parseError event of this `sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired when a new value for a bound property should have been propagated to the model, but parsing the
value failed with an exception.

##### Parameters

###### oData

`object`

An application-specific payload object that will be passed to the event handler along with the event
object when firing the event

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachParseError`

#### Call Signature

> **attachParseError**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12871

Attaches event handler `fnFunction` to the #event:parseError parseError event of this `sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired when a new value for a bound property should have been propagated to the model, but parsing the
value failed with an exception.

##### Parameters

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachParseError`

***

### attachValidationError()

#### Call Signature

> **attachValidationError**(`oData`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12894

Attaches event handler `fnFunction` to the #event:validationError validationError event of this
`sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired when a new value for a bound property should have been propagated to the model, but validating
the value failed with an exception.

##### Parameters

###### oData

`object`

An application-specific payload object that will be passed to the event handler along with the event
object when firing the event

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachValidationError`

#### Call Signature

> **attachValidationError**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12922

Attaches event handler `fnFunction` to the #event:validationError validationError event of this
`sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired when a new value for a bound property should have been propagated to the model, but validating
the value failed with an exception.

##### Parameters

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachValidationError`

***

### attachValidationSuccess()

#### Call Signature

> **attachValidationSuccess**(`oData`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12945

Attaches event handler `fnFunction` to the #event:validationSuccess validationSuccess event of
this `sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired after a new value for a bound property has been propagated to the model. Only fired, when the binding
uses a data type.

##### Parameters

###### oData

`object`

An application-specific payload object that will be passed to the event handler along with the event
object when firing the event

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachValidationSuccess`

#### Call Signature

> **attachValidationSuccess**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12973

Attaches event handler `fnFunction` to the #event:validationSuccess validationSuccess event of
this `sap.ui.base.ManagedObject`.

When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.

Fired after a new value for a bound property has been propagated to the model. Only fired, when the binding
uses a data type.

##### Parameters

###### fnFunction

(`p1`) => `void`

The function to be called when the event occurs

###### oListener?

`object`

Context object to call the event handler with. Defaults to this `sap.ui.base.ManagedObject` itself

##### Returns

`this`

Reference to `this` in order to allow method chaining

##### Inherited from

`UIComponent.attachValidationSuccess`

***

### bindAggregation()

> **bindAggregation**(`sName`, `vBindingInfo`, `vTemplate?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13009

Bind an aggregation to the model.

Whenever the corresponding model becomes available or changes (either via a call to #setModel setModel
or propagated from a #getParent parent), its sap.ui.model.Model#bindList bindList method
will be called to create a new sap.ui.model.ListBinding ListBinding with the configured binding
options.

The bound aggregation will use the given template, clone it for each item which exists in the bound list
and set the appropriate binding context.

This is a generic method which can be used to bind any aggregation to the model. A class may flag aggregations
in its metadata with `bindable: "bindable"` to get typed `bindSomething` and `unbindSomething`
methods for those aggregations.

Also see [List Binding (Aggregation Binding)](https://ui5.sap.com/#/topic/91f057786f4d1014b6dd926db0e91070)
in the documentation.

For more information on the `oBindingInfo.key` property and its usage, see [Extended Change Detection](https://ui5.sap.com/#/topic/7cdff73f308b4b10bdf7d83b7aba72e7).

Providing sorters and/or filters as positional parameters is deprecated as of 1.135.0. Provide them as
part of a `BindingInfo` object instead.

#### Parameters

##### sName

`string`

Name of a public aggregation to bind

##### vBindingInfo

`string` \| [`AggregationBindingInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14436)

A `BindingInfo` object or just the path, if no further properties are required

##### vTemplate?

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302) \| ((`p1`, `p2`) => [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302))

The template to clone for each item in the aggregation; either a template `Element` or a factory function
must be given

#### Returns

`this`

Returns `this` to allow method chaining

#### Inherited from

`UIComponent.bindAggregation`

***

### ~~bindContext()~~

> **bindContext**(`sPath`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13033

Bind the object to the referenced entity in the model, which is used as the binding context to resolve
bound properties or aggregations of the object itself and all of its children relatively to the given
path.

#### Parameters

##### sPath

`string`

the binding path

#### Returns

`this`

reference to the instance itself

#### Deprecated

As of version 1.11.1. please use #bindObject instead.

#### Inherited from

`UIComponent.bindContext`

***

### bindObject()

> **bindObject**(`vBindingInfo`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13065

Bind the object to the referenced entity in the model.

The entity is used as the binding context to resolve bound properties or aggregations of the object itself
and all of its children relatively to the given path. If a relative binding path is used, it will be
evaluated anew whenever the parent context changes.

Whenever the corresponding model becomes available or changes (either via a call to #setModel setModel
or propagated from a #getParent parent), its sap.ui.model.Model#bindContext bindContext
method will be called to create a new sap.ui.model.ContextBinding ContextBinding with the configured
binding options.

There's no difference between `bindObject` and sap.ui.core.Element#bindElement bindElement. Method
`bindObject` was introduced together with `ManagedObject` to make context bindings also available on
`ManagedObject`s. The new name was chosen to reflect that the binding is not necessarily applied to an
`Element`, it also could be applied to a component or some other `ManagedObject`.

Also see [Context Binding](https://ui5.sap.com/#/topic/91f05e8b6f4d1014b6dd926db0e91070) in the
documentation.

As of 1.135, providing 'parameters' as positional parameter is deprecated. Provide them as part of a
`BindingInfo` object instead.

#### Parameters

##### vBindingInfo

`string` \| [`ObjectBindingInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14669)

A `BindingInfo` object or just the path, if no further properties are required

#### Returns

`this`

Returns `this` to allow method chaining

#### Inherited from

`UIComponent.bindObject`

***

### bindProperty()

> **bindProperty**(`sName`, `vBindingInfo`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13138

Binds a property to the model.

Whenever the corresponding model becomes available or changes (either via a call to #setModel setModel
or propagated from a #getParent parent), its sap.ui.model.Model#bindProperty bindProperty
method will be called to create a new sap.ui.model.PropertyBinding PropertyBinding with the configured
binding options.

The Setter for the given property will be called by the binding with the value retrieved from the data
model. When the binding mode is `OneTime`, the property will be set only once. When it is `OneWay`, the
property will be updated whenever the corresponding data in the model changes. In mode `TwoWay`, changes
to the property (not originating in the model) will be reported back to the model (typical use case:
user interaction changes the value of a control).

This is a generic method which can be used to bind any property to the model. A managed object may flag
any property in its metadata with `bindable: "bindable"` to additionally provide named methods to bind
and unbind the corresponding property.

**Composite Binding**
 A composite property binding which combines data from multiple model paths can be declared using the
`parts` parameter instead of `path`. The `formatter` function or a sap.ui.model.CompositeType composite type
then can be used to combine the parts, Properties with a composite binding are also known as "calculated
fields".

Example:
```javascript

  oTxt.bindValue({
    parts: [
      {path: "/firstName", type: "sap.ui.model.type.String"},
      {path: "myModel2>/lastName"}
    ]
  });
```

Note that a composite binding will be forced into mode `OneWay` when one of the binding parts is not
in mode `TwoWay`.

**Static Binding**
 A StaticBinding allows to define static values within a `sap.ui.model.CompositeBinding`. It behaves
like a property binding but always returns the value that is stored in the binding itself. The binding
does not have a `sap.ui.model.Context`, a `sap.ui.model.Model` or a `oBindingInfo.path`. A StaticBinding
is created when a `oBindingInfo.value` is passed instead of a `oBindingInfo.path` or `oBindingInfo.parts[i].path`.

Also see sap.ui.model.StaticBinding StaticBinding in the documentation.

**Formatter Functions**
 When a formatter function is specified for the binding or for a binding part, it will be called with
the value of the bound model property. After setting the initial property value, the formatter function
will only be called again when the bound model property changes (simple property binding) or when at
least one of the bound model properties changes (formatter function of a composite binding). Note that
a binding only monitors the bound model data for changes. Dependencies of the formatter implementation
to other model data is not known to the binding and changes won't be detected.

When the formatter for a property binding (simple or composite) is called, the managed object will be
given as `this` context. For formatters of binding parts in a composite binding, this is not the case.

Also see [Property Binding](https://ui5.sap.com/#/topic/91f0652b6f4d1014b6dd926db0e91070) in the
documentation.

Providing a type, formatter, or bindingMode as a positional parameter is deprecated as of 1.135.0. Provide
them as part of a `BindingInfo` object instead.

#### Parameters

##### sName

`string`

Name of a public property to bind; public aggregations of cardinality 0..1 that have an alternative,
simple type (e.g. "string" or "int") can also be bound with this method

##### vBindingInfo

`string` \| [`PropertyBindingInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14707)

A `BindingInfo` object or just the path, if no further properties are required

#### Returns

`this`

Returns `this` to allow method chaining

#### Inherited from

`UIComponent.bindProperty`

***

### byId()

> **byId**(`sId`): [`UI5Element`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L27424) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49711

Returns an element by its ID in the context of the component.

#### Parameters

##### sId

`string`

Component local ID of the element

#### Returns

[`UI5Element`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L27424) \| `undefined`

element by its ID or `undefined`

#### Inherited from

`UIComponent.byId`

***

### clone()

> **clone**(`sIdSuffix?`, `aLocalIds?`, `oOptions?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13196

Clones a tree of objects starting with the object on which clone is called first (root object).

The IDs within the newly created clone tree are derived from the original IDs by appending the given
`sIdSuffix` (if no suffix is given, one will be created; it will be unique across multiple clone calls).

The `oOptions` configuration object can have the following properties:
	 - The boolean value `cloneChildren` specifies whether associations/aggregations will be cloned
	 - The boolean value `cloneBindings` specifies if bindings will be cloned  Note: In case the configuration
    `oOptions` is specified, the default values `true` no longer apply, which means in case `cloneChildren`
    or `cloneBindings` is not specified, then this ia assumed to be `false` and associations/aggregations
    or bindings are not cloned.

For each cloned object, the following settings are cloned based on the metadata of the object and the
defined options:
	 - All properties that are not bound. If `cloneBindings` is `false`, also the bound properties will
    be cloned; in general, values are referenced 1:1, not cloned. For some property types, however, the getters
    or setters might clone the value (e.g. array types and properties using metadata option `byValue`)
	 - All aggregated objects that are not bound. If `cloneBindings` is `false`, also the ones that are
    bound will be cloned; they are all cloned recursively using the same `sIdSuffix`
	 - All associated controls; when an association points to an object inside the cloned object tree, then
    the cloned association will be modified so that it points to the clone of the target object. When the
    association points to a managed object outside of the cloned object tree, then its target won't be changed.

	 - All models set via `setModel()`; used by reference.
	 - All property and aggregation bindings (if `cloneBindings` is `true`); the pure binding information
    (path, model name) is cloned, but all other information like template control or factory function, data
    type or formatter function are copied by reference. The bindings themselves are created anew as they
    are specific for the combination (object, property, model). As a result, any later changes to a binding
    of the original object are not reflected in the clone, but changes to e.g the type or template etc. are.

Each clone is created by first collecting the above mentioned settings and then creating a new instance
with the normal constructor function. As a result, any side effects of mutator methods (`setProperty`
etc.) or init hooks are repeated during clone creation. There is no need to override `clone()` just to
reproduce these internal settings!

Custom controls however can override `clone()` to implement additional clone steps. They usually will
first call `clone()` on the super class and then modify the returned clone accordingly.

Applications **must never provide** the second parameter `aLocaleIds`. It is determined automatically
for the root object (and its non-existence also serves as an indicator for the root object). Specifying
it will break the implementation of `clone()`.

#### Parameters

##### sIdSuffix?

`string`

a suffix to be appended to the cloned object ID

##### aLocalIds?

`string`[]

an array of local IDs within the cloned hierarchy (internally used)

##### oOptions?

Configuration object; when omitted, both properties default to `true`; when specified, undefined properties
default to `false`

###### cloneBindings?

`boolean`

Whether bindings will be cloned

###### cloneChildren?

`boolean`

Whether associations and aggregations will be cloned

#### Returns

`this`

Reference to the newly created clone

#### Inherited from

`UIComponent.clone`

***

### createComponent()

> **createComponent**(`vUsage`): [`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `Promise`\<[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770)\>

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19207

Creates a nested component that is declared in the `sap.ui5/componentUsages` section of the descriptor
(manifest.json). The following snippet shows the declaration:
```javascript

{
  [...]
  "sap.ui5": {
    "componentUsages": {
      "myUsage": {
        "name": "my.useful.Component"
      }
    }
  }
  [...]
}
```
 The syntax of the configuration object of the component usage matches the configuration object of the
{#link sap.ui.component} factory function.

This is an example of how the `createComponent` function can be used for asynchronous scenarios:
```javascript

oComponent.createComponent("myUsage").then(function(oComponent) {
  oComponent.doSomething();
}).catch(function(oError) {
  Log.error(oError);
});
```

The following example shows how `createComponent` can be used to create a nested component by providing
specific properties like `id`, `async`, `settings`, or `componentData`:
```javascript

var oComponent = oComponent.createComponent({
  usage: "myUsage",
  id: "myId",
  settings: { ... },
  componentData: { ... }
});
```
 The allowed list of properties are defined in the parameter documentation of this function.

The properties can also be defined in the descriptor. These properties can be overwritten by the local
properties of that function.

Synchronous Component creation is deprecated as of 1.135.0.

#### Parameters

##### vUsage

`string` \| \{ `async?`: `boolean`; `componentData?`: `object`; `id?`: `string`; `settings?`: [`$ComponentSettings`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L19658); `usage`: `string`; \}

ID of the component usage or the configuration object that creates the component

`string`

***

###### Type Literal

\{ `async?`: `boolean`; `componentData?`: `object`; `id?`: `string`; `settings?`: [`$ComponentSettings`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L19658); `usage`: `string`; \}

ID of the component usage or the configuration object that creates the component

###### async?

`boolean`

Indicates whether the component creation is done asynchronously (You should use synchronous creation
only if really necessary, because this has a negative impact on performance.)

###### componentData?

`object`

Initial data of the component, see sap.ui.core.Component#getComponentData

###### id?

`string`

ID of the nested component that is prefixed with `autoPrefixId`

###### settings?

[`$ComponentSettings`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L19658)

Settings for the nested component like for {#link sap.ui.component} or the component constructor

###### usage

`string`

ID of component usage

#### Returns

[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `Promise`\<[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770)\>

Component instance or Promise which will be resolved with the component instance (defaults to
Promise / asynchronous behavior)

#### Since

1.47.0

#### Inherited from

`UIComponent.createComponent`

***

### createContent()

> **createContent**(): [`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001) \| `Promise`\<[`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001) \| `null`\> \| `null`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49745

Hook method to create the content (UI Control Tree) of this component.

The default implementation in this class reads the name (and optionally type) of a root view from the
descriptor for this component (path `/sap.ui5/rootView`) or, for backward compatibility, just the name
from static component metadata (property `rootView`). When no type is specified, it defaults to XML.
The method then calls the [view factory](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L88261) to instantiate the root view and returns the
result.

When there is no root view configuration, `null` will be returned.

This method can be overwritten by subclasses if the default implementation doesn't fit their needs. Subclasses
are not limited to views as return type but may return any control, but only a single control (can be
the root of a larger control tree, however).

A `sap.ui.core.UIComponent` subclass can additionally implement the sap.ui.core.IAsyncContentCreation
interface. When implementing this interface the loading and processing of an asynchronous `rootView`
will be chained into the result Promise of the sap.ui.core.Component.create Component.create
factory. An additional async flag can be omitted. See Sample 1 below.

Samples 2 and 3 show how subclasses can overwrite the `createContent` function to run asynchronously.
To create the root control asynchronously, the subclass has to define the `sap.ui.core.IAsyncContentCreation`
interface in the metadata.

#### Returns

[`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001) \| `Promise`\<[`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001) \| `null`\> \| `null`

Root control of the UI tree, or a promise resolving with the root control, or `null`, if none
is configured.

#### Inherited from

`UIComponent.createContent`

***

### createId()

> **createId**(`sId`): `string`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49753

Convert the given component local element ID to a globally unique ID by prefixing it with the component
ID.

#### Parameters

##### sId

`string`

Component local ID of the element

#### Returns

`string`

prefixed id

#### Inherited from

`UIComponent.createId`

***

### destroy()

> **destroy**(`bSuppressInvalidate?`): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13227

Cleans up the resources associated with this object and all its aggregated children.

After an object has been destroyed, it can no longer be used!

Applications should call this method if they don't need the object any longer.

#### Parameters

##### bSuppressInvalidate?

`boolean`

If `true`, this ManagedObject and all its ancestors won't be invalidated.
This flag should be used only during control development to optimize invalidation procedures. It should
not be used by any application code.

#### Returns

`void`

#### Inherited from

`UIComponent.destroy`

***

### destroyAggregation()

> **destroyAggregation**(`sAggregationName`, `bSuppressInvalidate?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13247

Destroys (all) the managed object(s) in the aggregation named `sAggregationName` and empties the aggregation.
If the aggregation did contain any object, this ManagedObject is marked as changed.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically destroy all objects in an aggregation.
Use the concrete method destroyXYZ for aggregation 'XYZ' instead.

#### Parameters

##### sAggregationName

`string`

the name of the aggregation

##### bSuppressInvalidate?

`boolean`

if true, this ManagedObject is not marked as changed

#### Returns

`this`

Returns `this` to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.destroyAggregation`

***

### detachEvent()

> **detachEvent**(`sEventId`, `fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12054

Removes a previously attached event handler from the event with the given identifier.

The passed parameters must match those used for registration with #attachEvent beforehand.

#### Parameters

##### sEventId

`string`

The identifier of the event to detach from

##### fnFunction

`Function`

The handler function to detach from the event

##### oListener?

`object`

The object that wanted to be notified when the event occurred

#### Returns

`this`

Returns `this` to allow method chaining

#### Inherited from

`UIComponent.detachEvent`

***

### detachFormatError()

> **detachFormatError**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13265

Detaches event handler `fnFunction` from the #event:formatError formatError event of this `sap.ui.base.ManagedObject`.

The passed function and listener object must match the ones used for event registration.

#### Parameters

##### fnFunction

(`p1`) => `void`

The function to be called, when the event occurs

##### oListener?

`object`

Context object on which the given function had to be called

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Inherited from

`UIComponent.detachFormatError`

***

### detachModelContextChange()

> **detachModelContextChange**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13284

Detaches event handler `fnFunction` from the #event:modelContextChange modelContextChange event
of this `sap.ui.base.ManagedObject`.

The passed function and listener object must match the ones used for event registration.

#### Parameters

##### fnFunction

(`p1`) => `void`

The function to be called, when the event occurs

##### oListener?

`object`

Context object on which the given function had to be called

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Inherited from

`UIComponent.detachModelContextChange`

***

### detachParseError()

> **detachParseError**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13302

Detaches event handler `fnFunction` from the #event:parseError parseError event of this `sap.ui.base.ManagedObject`.

The passed function and listener object must match the ones used for event registration.

#### Parameters

##### fnFunction

(`p1`) => `void`

The function to be called, when the event occurs

##### oListener?

`object`

Context object on which the given function had to be called

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Inherited from

`UIComponent.detachParseError`

***

### detachValidationError()

> **detachValidationError**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13321

Detaches event handler `fnFunction` from the #event:validationError validationError event of
this `sap.ui.base.ManagedObject`.

The passed function and listener object must match the ones used for event registration.

#### Parameters

##### fnFunction

(`p1`) => `void`

The function to be called, when the event occurs

##### oListener?

`object`

Context object on which the given function had to be called

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Inherited from

`UIComponent.detachValidationError`

***

### detachValidationSuccess()

> **detachValidationSuccess**(`fnFunction`, `oListener?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13340

Detaches event handler `fnFunction` from the #event:validationSuccess validationSuccess event
of this `sap.ui.base.ManagedObject`.

The passed function and listener object must match the ones used for event registration.

#### Parameters

##### fnFunction

(`p1`) => `void`

The function to be called, when the event occurs

##### oListener?

`object`

Context object on which the given function had to be called

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Inherited from

`UIComponent.detachValidationSuccess`

***

### exit()

> **exit**(): `void` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19255

Cleans up the Component instance before destruction.

Applications must not call this hook method directly, it is called by the framework when the element
is #destroy destroyed.

Subclasses of Component should override this hook to implement any necessary cleanup.

#### Returns

`void` \| `undefined`

This hook method must not have a return value. Return value `void` is deprecated since 1.120,
as it does not force functions to **not** return something. This implies that, for instance, no async
function returning a Promise should be used.

**Note:** While the return type is currently `void|undefined`, any implementation of this hook must not
return anything but undefined. Any other return value will cause an error log in this version of UI5
and will fail in future major versions of UI5.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.exit`

***

### findAggregatedObjects()

> **findAggregatedObjects**(`bRecursive?`, `fnCondition?`, `bIncludeBindingTemplates?`): [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)[]

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13366

Searches and returns all aggregated objects that pass the given check function.

When the search is done recursively (`bRecursive === true`), it will be executed depth-first and ancestors
will be added to the result array before their descendants.

If no check function is given, all aggregated objects will pass the check and be added to the result
array.

When setting `bIncludeBindingTemplates` to `true`, binding templates will be included in the search.

**Take care:** this operation might be expensive.

#### Parameters

##### bRecursive?

`boolean`

Whether the whole aggregation tree should be searched

##### fnCondition?

(`p1`) => `boolean`

Objects for which this function returns a falsy value will not be added to the result array

##### bIncludeBindingTemplates?

`boolean`

Whether binding templates should be included

#### Returns

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)[]

Array of aggregated objects that passed the check

#### Inherited from

`UIComponent.findAggregatedObjects`

***

### fireEvent()

> **fireEvent**(`sEventId`, `oParameters?`, `bAllowPreventDefault?`, `bEnableEventBubbling?`): `boolean` \| `Component`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12076

Fires an sap.ui.base.Event event with the given settings and notifies all attached event handlers.

#### Parameters

##### sEventId

`string`

The identifier of the event to fire

##### oParameters?

`object`

Parameters which should be carried by the event

##### bAllowPreventDefault?

`boolean`

Defines whether function `preventDefault` is supported on the fired event

##### bEnableEventBubbling?

`boolean`

Defines whether event bubbling is enabled on the fired event. Set to `true` the event is also forwarded
to the parent(s) of the event provider (#getEventingParent) until the bubbling of the event is
stopped or no parent is available anymore.

#### Returns

`boolean` \| `Component`

Returns `this` to allow method chaining. When `preventDefault` is supported on the fired event
the function returns `true` if the default action should be executed, `false` otherwise.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.fireEvent`

***

### fireFormatError()

> **fireFormatError**(`mParameters?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13387

Fires event #event:formatError formatError to attached listeners.

#### Parameters

##### mParameters?

[`ManagedObject$FormatErrorEventParameters`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14866)

Parameters to pass along with the event

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.fireFormatError`

***

### fireModelContextChange()

> **fireModelContextChange**(`mParameters?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13400

Fires event #event:modelContextChange modelContextChange to attached listeners.

#### Parameters

##### mParameters?

`object`

Parameters to pass along with the event

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.fireModelContextChange`

***

### fireParseError()

> **fireParseError**(`mParameters?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13413

Fires event #event:parseError parseError to attached listeners.

#### Parameters

##### mParameters?

[`ManagedObject$ParseErrorEventParameters`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14917)

Parameters to pass along with the event

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.fireParseError`

***

### fireValidationError()

> **fireValidationError**(`mParameters?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13426

Fires event #event:validationError validationError to attached listeners.

#### Parameters

##### mParameters?

[`ManagedObject$ValidationErrorEventParameters`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14960)

Parameters to pass along with the event

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.fireValidationError`

***

### fireValidationSuccess()

> **fireValidationSuccess**(`mParameters?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13439

Fires event #event:validationSuccess validationSuccess to attached listeners.

#### Parameters

##### mParameters?

[`ManagedObject$ValidationSuccessEventParameters`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L15003)

Parameters to pass along with the event

#### Returns

`this`

Reference to `this` in order to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.fireValidationSuccess`

***

### getActiveTerminologies()

> **getActiveTerminologies**(): `string`[] \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19264

Returns the list of active terminologies. See the sap.ui.core.Component.create Component.create
factory API documentation for more detail.

#### Returns

`string`[] \| `undefined`

List of active terminologies

#### Since

1.76

#### Inherited from

`UIComponent.getActiveTerminologies`

***

### getAggregation()

> **getAggregation**(`sAggregationName`, `oDefaultForCreation?`): [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302) \| [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)[] \| `null`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13463

Returns the aggregated object(s) for the named aggregation of this ManagedObject.

If the aggregation does not contain any objects(s), the given `oDefaultForCreation` (or `null`) is set
as new value of the aggregation and returned to the caller.

**Note:** the need to specify a default value and the fact that it is stored as new value of a so far
empty aggregation is recognized as a shortcoming of this API but can no longer be changed for compatibility
reasons.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically read the content of an aggregation.
Use the concrete method getXYZ for aggregation 'XYZ' instead.

#### Parameters

##### sAggregationName

`string`

Name of the aggregation

##### oDefaultForCreation?

`any`[] \| [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

Object that is used in case the current aggregation is empty. If provided, it must be null for 0..1 aggregations
or an empty array for 0..n aggregations. If not provided, `null` is used.

**Note:** When an empty array is given and used because the aggregation was not set before, then this
array will be used for the aggregation from thereon. Sharing the same empty array between different calls
to this method therefore is not possible and will result in inconsistencies.

#### Returns

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302) \| [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)[] \| `null`

Aggregation array in case of 0..n-aggregations or the managed object or `null` in case of 0..1-aggregations

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.getAggregation`

***

### getAssociation()

> **getAssociation**(`sAssociationName`, `oDefaultForCreation`): `string` \| `string`[] \| `null`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13502

Returns the content of the association with the given name.

For associations of cardinality 0..1, a single string with the ID of an associated object is returned
(if any). For cardinality 0..n, an array with the IDs of the associated objects is returned.

If the association does not contain any objects(s), the given `oDefaultForCreation` is set as new value
of the association and returned to the caller. The only supported values for `oDefaultForCreation` are
`null` and `undefined` in the case of cardinality 0..1 and `null`, `undefined` or an empty array (`[]`)
in case of cardinality 0..n. If the argument is omitted, `null` is used independently from the cardinality.

**Note:** the need to specify a default value and the fact that it is stored as new value of a so far
empty association is recognized as a shortcoming of this API but can no longer be changed for compatibility
reasons.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically retrieve the content of an association.
Use the concrete method getXYZ for association 'XYZ' instead.

#### Parameters

##### sAssociationName

`string`

the name of the association

##### oDefaultForCreation

`any`[] \| `null`

the value that is used in case the current aggregation is empty (only null or empty array is allowed)

#### Returns

`string` \| `string`[] \| `null`

the ID of the associated managed object or an array of such IDs; may be null if the association
has not been populated

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.getAssociation`

***

### getAutoPrefixId()

> **getAutoPrefixId**(): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49772

A method to be implemented by UIComponents, returning the flag whether to prefix the IDs of controls
automatically or not if the controls are created inside the sap.ui.core.UIComponent#createContent
function. By default this feature is not activated.

You can overwrite this function and return `true` to activate the automatic prefixing. In addition the
default behavior can be configured in the manifest by specifying the entry `sap.ui5/autoPrefixId`.

#### Returns

`boolean`

true, if the Controls IDs should be prefixed automatically

#### Since

1.15.1

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.getAutoPrefixId`

***

### getBinding()

> **getBinding**(`sName`): [`Binding`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L57128) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13518

Get the binding object for a specific aggregation/property.

#### Parameters

##### sName

`string`

the name of the property or aggregation

#### Returns

[`Binding`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L57128) \| `undefined`

the binding for the given name

#### Inherited from

`UIComponent.getBinding`

***

### getBindingContext()

> **getBindingContext**(`sModelName?`): [`Context`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L59118) \| `null` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13542

Get the binding context of this object for the given model name.

If the object does not have a binding context set on itself and has no own model set, it will use the
first binding context defined in its parent hierarchy.

**Note:** to be compatible with future versions of this API, you must not use the following model names:

	 - `null`
	 - empty string `""`
	 - string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`)
    is explicitly allowed and refers to the default model.

**Note:** A ManagedObject inherits binding contexts from the Core only when it is a descendant of a UIArea.

#### Parameters

##### sModelName?

`string`

the name of the model or `undefined`

#### Returns

[`Context`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L59118) \| `null` \| `undefined`

The binding context of this object

#### Inherited from

`UIComponent.getBindingContext`

***

### getBindingInfo()

> **getBindingInfo**(`sName`): [`AggregationBindingInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14436) \| [`PropertyBindingInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14707)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13560

Returns the binding info for the given property or aggregation.

The binding info contains information about path, binding object, format options, sorter, filter etc.
for the property or aggregation. As the binding object is only created when the model becomes available,
the `binding` property may be undefined.

#### Parameters

##### sName

`string`

Name of the property or aggregation

#### Returns

[`AggregationBindingInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14436) \| [`PropertyBindingInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L14707)

A binding info object, containing at least a `path` or `parts` property and, depending on the
binding type, additional properties

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.getBindingInfo`

***

### getBindingPath()

> **getBindingPath**(`sName`): `string` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13573

Get the binding path for a specific aggregation/property.

#### Parameters

##### sName

`string`

the name of the property or aggregation

#### Returns

`string` \| `undefined`

the binding path for the given name

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.getBindingPath`

***

### getComponentData()

> **getComponentData**(): `object`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19272

Returns user specific data object

#### Returns

`object`

componentData

#### Since

1.15.0

#### Inherited from

`UIComponent.getComponentData`

***

### getContentDensityClass()

> **getContentDensityClass**(): `string`

Defined in: [webapp/Component.ts:29](https://github.com/tobiashofmann/ui5-typescript-helloworld/blob/5e7a56281065154b4eb5e32f2dce8267517545a3/webapp/Component.ts#L29)

This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
design mode class should be set, which influences the size appearance of some controls.

#### Returns

`string`

css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set

***

### getEventBus()

> **getEventBus**(): [`EventBus`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L28943)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19280

Returns the event bus of this component.

#### Returns

[`EventBus`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L28943)

the event bus

#### Since

1.20.0

#### Inherited from

`UIComponent.getEventBus`

***

### getEventingParent()

> **getEventingParent**(): [`EventProvider`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L11891)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49783

Returns the parent in the eventing hierarchy of this object which will be the UIArea of the containing
ComponentContainer or null.
See:
	sap.ui.base.EventProvider#getEventingParent

#### Returns

[`EventProvider`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L11891)

The parent event provider

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.getEventingParent`

***

### getId()

> **getId**(): `string`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13604

Returns the object's ID.

There is no guarantee or check or requirement for the ID of a `ManagedObject` to be unique. Only some
subclasses of `ManagedObject` introduce this as a requirement, e.g. `Component` or `Element`. All elements
existing in the same window at the same time must have different IDs. A new element will fail during
construction when the given ID is already used by another element. But there might be a component with
the same ID as an element or another `ManagedObject`.

For the same reason, there is no general lookup for `ManagedObject`s via their ID. Only for subclasses
that enforce unique IDs, there might be lookup mechanisms (e.g. sap.ui.core.Element#getElementById sap.ui.core.Element.getElementById
for elements).

#### Returns

`string`

The objects's ID.

#### Inherited from

`UIComponent.getId`

***

### getInterface()

> **getInterface**(): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19289

Components don't have a facade and therefore return themselves as their interface.
See:
	sap.ui.base.Object#getInterface

#### Returns

`this`

`this` as there's no facade for components

#### Inherited from

`UIComponent.getInterface`

***

### getLocalId()

> **getLocalId**(`sId`): `string` \| `null`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49792

Returns the local ID of an element by removing the component ID prefix or `null` if the ID does not contain
a prefix.

#### Parameters

##### sId

`string`

Prefixed ID

#### Returns

`string` \| `null`

ID without prefix or `null`

#### Since

1.39.0

#### Inherited from

`UIComponent.getLocalId`

***

### getManifest()

> **getManifest**(): `object`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19298

Returns the manifest defined in the metadata of the component. If not specified, the return value is
null.

#### Returns

`object`

manifest.

#### Since

1.33.0

#### Inherited from

`UIComponent.getManifest`

***

### getManifestEntry()

> **getManifestEntry**(`sKey`): `any`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19318

Returns the configuration of a manifest section or the value for a specific path. If no section or key
is specified, the return value is null.

Example: ` { "sap.ui5": { "dependencies": { "libs": { "sap.m": {} }, "components": { "my.component.a":
{} } } }); `

The configuration above can be accessed in the following ways:
	 - **By section/namespace**: `oComponent.getManifestEntry("sap.ui5")`
	 - **By path**: `oComponent.getManifestEntry("/sap.ui5/dependencies/libs")`

By section/namespace returns the configuration for the specified manifest section and by path allows
to specify a concrete path to a dedicated entry inside the manifest. The path syntax always starts with
a slash (/).

#### Parameters

##### sKey

`string`

Either the manifest section name (namespace) or a concrete path

#### Returns

`any`

Value of the manifest section or the key (could be any kind of value)

#### Since

1.33.0

#### Inherited from

`UIComponent.getManifestEntry`

***

### getManifestObject()

> **getManifestObject**(): [`Manifest`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L35992)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19331

Returns the manifest object.

#### Returns

[`Manifest`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L35992)

manifest.

#### Since

1.33.0

#### Inherited from

`UIComponent.getManifestObject`

***

### getMetadata()

> **getMetadata**(): [`ComponentMetadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L20511)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19338

Returns the metadata for the specific class of the current instance.

#### Returns

[`ComponentMetadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L20511)

Metadata for the specific class of the current instance.

#### Inherited from

`UIComponent.getMetadata`

***

### getModel()

> **getModel**(`sModelName?`): [`Model`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L61372) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13628

Get the model to be used for data bindings with the given model name. If the object does not have a model
set on itself, it will use the first model defined in its parent hierarchy.

The name can be omitted to reference the default model or it must be a non-empty string.

**Note:** to be compatible with future versions of this API, you must not use the following model names:

	 - `null`
	 - empty string `""`
	 - string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`)
    is explicitly allowed and refers to the default model.

#### Parameters

##### sModelName?

`string`

name of the model to be retrieved

#### Returns

[`Model`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L61372) \| `undefined`

oModel or undefined when there is no such model

#### Inherited from

`UIComponent.getModel`

***

### getObjectBinding()

> **getObjectBinding**(`sModelName?`): [`ContextBinding`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L59240) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13647

Get the object binding object for a specific model.

**Note:** to be compatible with future versions of this API, you must not use the following model names:

	 - `null`
	 - empty string `""`
	 - string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`)
    is explicitly allowed and refers to the default model.

#### Parameters

##### sModelName?

`string`

Non-empty name of the model or `undefined`

#### Returns

[`ContextBinding`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L59240) \| `undefined`

Context binding for the given model name or `undefined`

#### Inherited from

`UIComponent.getObjectBinding`

***

### getOriginInfo()

> **getOriginInfo**(`sPropertyName`): `object`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13665

Returns the origin info for the value of the given property.

The origin info might contain additional information for translatable texts. The bookkeeping of this
information is not active by default and must be activated by configuration. Even then, it might not
be present for all properties and their values depending on where the value came form.

If no origin info is available, `null` will be returned.

#### Parameters

##### sPropertyName

`string`

Name of the property

#### Returns

`object`

|null} An object describing the origin of this property's value or `null`

##### locale

> **locale**: `string`

##### source

> **source**: `string`

#### Inherited from

`UIComponent.getOriginInfo`

***

### getOwnModels()

> **getOwnModels**(): `Record`\<`string`, [`Model`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L61372)\>

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13686

Returns a map of all models assigned to this ManagedObject.

The default model is available on key `undefined`.

**Note:** Models propagated from the parent are not included.

#### Returns

`Record`\<`string`, [`Model`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L61372)\>

The models

#### Since

1.88.0

#### Inherited from

`UIComponent.getOwnModels`

***

### getParent()

> **getParent**(): [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302) \| `null`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13734

Returns the parent managed object or `null` if this object hasn't been added to a parent yet.

The parent returned by this method is the technical parent used for data binding, invalidation, rendering
etc. It might differ from the object on which the application originally added this object (the so called
'API parent'): some composite controls internally use hidden controls or containers to store their children.
This method will return the innermost container that technically contains this object as a child.

**Example:**

Assume that a `Dialog` internally uses a (hidden) `VerticalLayout` to store its content:

```javascript

  Dialog (API parent)
   \__ VerticalLayout (hidden composite part)
      \__ Text (API child)
```

If you add some content by calling the `Dialog.prototype.addContent` API, this will lead to the following
observations:

```javascript

  oDialog.addContent(oText);
  console.log(oText.getParent() === oDialog);  // false
  console.log(oText.getParent() instanceof VerticalLayout); // true
  console.log(oText.getParent().getParent() === oDialog); // true now, but might fail with later versions
```

Technically, from API perspective, `oText` is added as a child to `Dialog`. But internally, the `Dialog`
adds the child to the hidden `VerticalLayout` container. If you now call the `getParent` method of the
child, you will get the internal `VerticalLayout` object and not the `Dialog` API parent.

**Note: ** The internal (hidden) structure of a composite control is not fixed and may be changed (see
also our "Compatibility Rules"). Therefore, you should **never** rely on a specific structure or object
being returned by `getParent`.

**Note: ** There is no API to determine the original API parent.

#### Returns

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302) \| `null`

The technical parent managed object or `null`

#### Inherited from

`UIComponent.getParent`

***

### getProperty()

> **getProperty**(`sPropertyName`): `any`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13746

Returns the value for the property with the given `sPropertyName`.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically retrieve the value of a property.
Use the concrete method getXYZ for property 'XYZ' instead.

#### Parameters

##### sPropertyName

`string`

the name of the property

#### Returns

`any`

the value of the property

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.getProperty`

***

### getRootControl()

> **getRootControl**(): [`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49824

Returns the content of sap.ui.core.UIComponent#createContent. If you specified a `rootView` in
your metadata or in the descriptor file (manifest.json), you will get the instance of the root view.
This getter will only return something if the sap.ui.core.UIComponent#init function was invoked.
If `createContent` is not implemented, and there is no root view, it will return `null`. Here is an example:

```javascript

         var MyExtension = UIComponent.extend("my.Component", {
              metadata: {
                   rootView: "my.View"
              },
              init: function () {
                   this.getRootControl(); // returns null
                   UIComponent.prototype.init.apply(this, arguments);
                   this.getRootControl(); // returns the view "my.View"
              }
         });
    ```

#### Returns

[`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001)

the control created by sap.ui.core.UIComponent#createContent

#### Since

1.44.0

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.getRootControl`

***

### getRouter()

> **getRouter**(): [`Router`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L43338)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49833

Returns the reference to the router instance which has been created by the UIComponent once the routes
in the routing metadata has been defined.

#### Returns

[`Router`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L43338)

the router instance

#### Since

1.16.1

#### Inherited from

`UIComponent.getRouter`

***

### getService()

> **getService**(`sLocalServiceAlias`): `Promise`\<`any`\>

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19399

Returns a service interface for the sap.ui.core.service.Service Service declared in the descriptor
for components (manifest.json). The declaration needs to be done in the `sap.ui5/services` section as
follows:
```javascript

{
  [...]
  "sap.ui5": {
    "services": {
      "myLocalServiceAlias": {
        "factoryName": "my.ServiceFactory",
        ["optional": true]
      }
    }
  }
  [...]
}
```
 The service declaration is used to define a mapping between the local alias for the service that can
be used in the Component and the name of the service factory which will be used to create a service instance.

The `getService` function will look up the service factory and will create a new instance by using the
service factory function sap.ui.core.service.ServiceFactory#createInstance createInstance The
optional property defines that the service is not mandatory and the usage will not depend on the availability
of this service. When requesting an optional service the `getService` function will reject but there
will be no error logged in the console.

When creating a new instance of the service the Component context will be passed as `oServiceContext`
as follows:
```javascript

{
  "scopeObject": this,     // the Component instance
  "scopeType": "component" // the stereotype of the scopeObject
}
```

The service will be created only once per Component and reused in future calls to the `getService` function.
 This function will return a `Promise` which provides the service interface when resolved. If the
`factoryName` could not be found in the sap.ui.core.service.ServiceFactoryRegistry Service Factory Registry
or the service declaration in the descriptor for components (manifest.json) is missing the Promise will
reject.

This is an example of how the `getService` function can be used:
```javascript

oComponent.getService("myLocalServiceAlias").then(function(oService) {
  oService.doSomething();
}).catch(function(oError) {
  Log.error(oError);
});
```

#### Parameters

##### sLocalServiceAlias

`string`

Local service alias as defined in the manifest.json

#### Returns

`Promise`\<`any`\>

Promise which will be resolved with the Service interface

#### Since

1.37.0

#### Inherited from

`UIComponent.getService`

***

### getTargets()

> **getTargets**(): [`Targets`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L45329)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49843

Returns the reference to the Targets instance which has been created by the UIComponent once the targets
in the routing metadata has been defined. If routes have been defined, it will be the Targets instance
created and used by the router.

#### Returns

[`Targets`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L45329)

the targets instance

#### Since

1.28

#### Inherited from

`UIComponent.getTargets`

***

### getUIArea()

> **getUIArea**(): [`UIArea`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L49071)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49850

Returns the reference to the UIArea of the container.

#### Returns

[`UIArea`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L49071)

reference to the UIArea of the container

#### Inherited from

`UIComponent.getUIArea`

***

### hasListeners()

> **hasListeners**(`sEventId`): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12115

Returns whether there are any registered event handlers for the event with the given identifier.

#### Parameters

##### sEventId

`string`

The identifier of the event

#### Returns

`boolean`

Whether there are any registered event handlers

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.hasListeners`

***

### hasModel()

> **hasModel**(): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13760

Check if any model is set to the ManagedObject or to one of its parents (including UIArea and Core).

**Note:** A ManagedObject inherits models from the Core only when it is a descendant of a UIArea.

#### Returns

`boolean`

whether a model reference exists or not

#### Inherited from

`UIComponent.hasModel`

***

### indexOfAggregation()

> **indexOfAggregation**(`sAggregationName`, `oObject`): `number`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13774

Searches for the provided ManagedObject in the named aggregation and returns its 0-based index if found,
or -1 otherwise. Returns -2 if the given named aggregation is of cardinality 0..1 and doesn't reference
the given object.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically determine the position of an object
in an aggregation. Use the concrete method indexOfXYZ for aggregation 'XYZ' instead.

#### Parameters

##### sAggregationName

`string`

the name of the aggregation

##### oObject

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

the ManagedObject whose index is looked for.

#### Returns

`number`

the index of the provided managed object in the aggregation.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.indexOfAggregation`

***

### init()

> **init**(): `void`

Defined in: [webapp/Component.ts:17](https://github.com/tobiashofmann/ui5-typescript-helloworld/blob/5e7a56281065154b4eb5e32f2dce8267517545a3/webapp/Component.ts#L17)

Initializes the component instance after creation.

The primary responsibility of this method is to create the root control of the component and manage its
aggregation in the "rootControl" aggregation. This is performed internally by invoking the sap.ui.core.UIComponent#createContent
method.

Depending on the class metadata (e.g., if the "sap.ui.core.IAsyncContentCreation" interface is implemented),
the root control may be created synchronously or asynchronously.

Additionally, this method is responsible for creating the router and targets instances.

**Note:** Applications must not call this hook method directly; it is invoked by the framework during
the execution of the Component constructor.

Subclasses of `UIComponent` should override this hook to implement any required initialization logic.
**When overriding this method, ensure that you always invoke the `init` method of the `UIComponent` base
class.**

#### Returns

`void`

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Overrides

`UIComponent.init`

***

### insertAggregation()

> **insertAggregation**(`sAggregationName`, `oObject`, `iIndex`, `bSuppressInvalidate?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13806

Inserts managed object `oObject` to the aggregation named `sAggregationName` at position `iIndex`.

If the given object is not valid with regard to the aggregation (if it is not an instance of the type
specified for that aggregation) or when the method is called for an aggregation of cardinality 0..1,
then an Error is thrown (see #validateAggregation.

If the given index is out of range with respect to the current content of the aggregation, it is clipped
to that range (0 for iIndex < 0, n for iIndex > n).

Please note that this method does not work as expected when an object is added that is already part of
the aggregation. In order to change the index of an object inside an aggregation, first remove it, then
insert it again.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically insert an object into an aggregation.
Use the concrete method insertXYZ for aggregation 'XYZ' instead.

#### Parameters

##### sAggregationName

`string`

the string identifying the aggregation the managed object `oObject` should be inserted into.

##### oObject

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

the ManagedObject to add; if empty, nothing is inserted.

##### iIndex

`number`

the `0`-based index the managed object should be inserted at; for a negative value `iIndex`, `oObject`
is inserted at position 0; for a value greater than the current size of the aggregation, `oObject` is
inserted at the last position

##### bSuppressInvalidate?

`boolean`

if true, this ManagedObject as well as the added child are not marked as changed

#### Returns

`this`

Returns `this` to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.insertAggregation`

***

### invalidate()

> **invalidate**(): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13842

Marks this object and its aggregated children as 'invalid'.

The term 'invalid' originally was introduced by controls where a change to the object's state made the
rendered DOM invalid. Later, the concept of invalidation was moved up in the inheritance hierarchy
to `ManagedObject`, but the term was kept for compatibility reasons.

Managed settings (properties, aggregations, associations) invalidate the corresponding object automatically.
Changing the state via the standard mutators, therefore, does not require an explicit call to `invalidate`.
The same applies to changes made via data binding, as it internally uses the standard mutators.

By default, a `ManagedObject` propagates any invalidation to its parent, unless the invalidation is suppressed
on the parent. Controls or UIAreas handle invalidation on their own by triggering a re-rendering.

#### Returns

`void`

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.invalidate`

***

### isA()

> **isA**\<`T`\>(`vTypeName`): `this is T`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:16286

Checks whether this object is an instance of the named type.

This check is solely based on the type names as declared in the class metadata. It compares the given
`vTypeName` with the name of the class of this object, with the names of any base class of that class
and with the names of all interfaces implemented by any of the aforementioned classes.

Instead of a single type name, an array of type names can be given and the method will check if this
object is an instance of any of the listed types (logical or).

Should the UI5 class system in future implement additional means of associating classes with type names
(e.g. by introducing mixins), then this method might detect matches for those names as well.

#### Type Parameters

##### T

`T` *extends* [`BaseObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L16097) = [`BaseObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L16097)

#### Parameters

##### vTypeName

`string` \| `string`[]

Type or types to check for

#### Returns

`this is T`

Whether this object is an instance of the given type or of any of the given types

#### Since

1.56

#### Inherited from

`UIComponent.isA`

***

### isBound()

> **isBound**(`sName`): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13849

Find out whether a property or aggregation is bound

#### Parameters

##### sName

`string`

the name of the property or aggregation

#### Returns

`boolean`

whether a binding exists for the given name

#### Inherited from

`UIComponent.isBound`

***

### isDestroyed()

> **isDestroyed**(): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13862

Returns whether this object is destroyed or not. A destroyed object cannot be used anymore.

#### Returns

`boolean`

Whether the object is destroyed

#### Since

1.93

#### Inherited from

`UIComponent.isDestroyed`

***

### isDestroyStarted()

> **isDestroyStarted**(): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13873

Checks if an object's destruction has been started. During the descruction of an object its ID is still
registered, and child objects could be still aggregated. Creating another object with the same ID would
lead to duplicate ID issues. To check if the destruction is finished, call `isDestroyed`.

#### Returns

`boolean`

Whether an object's destruction has been started

#### Since

1.93

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.isDestroyStarted`

***

### isInvalidateSuppressed()

> **isInvalidateSuppressed**(): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13881

Returns whether re-rendering is currently suppressed on this ManagedObject.

#### Returns

`boolean`

Whether re-rendering is suppressed

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.isInvalidateSuppressed`

***

### isPropertyInitial()

> **isPropertyInitial**(`sPropertyName`): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13891

Returns whether the given property value is initial and has not been explicitly set or bound. Even after
setting the default value or setting null/undefined (which also causes the default value to be set),
the property is no longer initial. A property can be reset to initial state by calling `resetProperty(sPropertyName)`.

#### Parameters

##### sPropertyName

`string`

the name of the property

#### Returns

`boolean`

true if the property is initial

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.isPropertyInitial`

***

### isTreeBinding()

> **isTreeBinding**(`sName`): `boolean`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13907

This method is used internally and should only be overridden by a tree managed object which utilizes
the tree binding. In this case and if the aggregation is a tree node the overridden method should then
return true. If true is returned the tree binding will be used instead of the list binding.

#### Parameters

##### sName

`string`

the aggregation to bind (e.g. nodes for a tree managed object)

#### Returns

`boolean`

whether tree binding should be used or list binding. Default is false. Override method to change
this behavior.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.isTreeBinding`

***

### onActivate()

> **onActivate**(): `void` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19436

This method is called after the component is activated

#### Returns

`void` \| `undefined`

This lifecycle hook must not have a return value.

**Note:** While the return type is currently `void|undefined`, any implementation of this hook must not
return anything but undefined. Any other return value will cause an error log in this version of UI5
and will fail in future major versions of UI5.

#### Since

1.88

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.onActivate`

***

### onAfterRendering()

> **onAfterRendering**(): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49882

Function is called when the rendering of the ComponentContainer is completed.

Applications must not call this hook method directly, it is called from ComponentContainer.

Subclasses of UIComponent override this hook to implement any necessary actions after the rendering.

#### Returns

`void`

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.onAfterRendering`

***

### onBeforeRendering()

> **onBeforeRendering**(): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49892

Function is called when the rendering of the ComponentContainer is started.

Applications must not call this hook method directly, it is called from ComponentContainer.

Subclasses of UIComponent override this hook to implement any necessary actions before the rendering.

#### Returns

`void`

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.onBeforeRendering`

***

### onConfigChange()

> **onConfigChange**(`sConfigKey`): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19443

The hook which gets called when the static configuration of the component has been changed by some configuration
extension.

#### Parameters

##### sConfigKey

`string`

Error message.

#### Returns

`void`

#### Since

1.15.1

#### Inherited from

`UIComponent.onConfigChange`

***

### onDeactivate()

> **onDeactivate**(): `void` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19461

This method is called after the component is deactivated

#### Returns

`void` \| `undefined`

This lifecycle hook must not have a return value.

**Note:** While the return type is currently `void|undefined`, any implementation of this hook must not
return anything but undefined. Any other return value will cause an error log in this version of UI5
and will fail in future major versions of UI5.

#### Since

1.88

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.onDeactivate`

***

### ~~onWindowBeforeUnload()~~

> **onWindowBeforeUnload**(): `string` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19473

The window before unload hook. Override this method in your Component class implementation, to handle
cleanup before the real unload or to prompt a question to the user, if the component should be exited.

#### Returns

`string` \| `undefined`

a string if a prompt should be displayed to the user confirming closing the Component (e.g.
when the Component is not yet saved), or `undefined` if no prompt should be shown.

#### Since

1.15.1

#### Deprecated

As of version 1.119. recommended to use the browser-native page lifecycle API, providing
events such as 'pageshow' and 'pagehide'

#### Inherited from

`UIComponent.onWindowBeforeUnload`

***

### ~~onWindowError()~~

> **onWindowError**(`sMessage`, `sFile`, `iLine`): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19482

The window error hook. Override this method in your Component class implementation to listen to unhandled
errors.

#### Parameters

##### sMessage

`string`

The error message.

##### sFile

`string`

File where the error occurred

##### iLine

`number`

Line number of the error

#### Returns

`void`

#### Since

1.15.1

#### Deprecated

As of version 1.119. recommended to use the browser-native API to listen for errors: window.addEventListener("error",
function() { ... })

#### Inherited from

`UIComponent.onWindowError`

***

### ~~onWindowUnload()~~

> **onWindowUnload**(): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19505

The window unload hook. Override this method in your Component class implementation, to handle cleanup
of the component once the window will be unloaded (e.g. closed).

#### Returns

`void`

#### Since

1.15.1

#### Deprecated

As of version 1.119. Newer browser versions deprecate the browser-native 'unload' event.
Therefore, the former API won't reliably work anymore. Please have a look at the browser-native page
lifecycle API, e.g. its events 'pageshow' and 'pagehide'.

#### Inherited from

`UIComponent.onWindowUnload`

***

### propagateMessages()

> **propagateMessages**(`sName`, `aMessages`): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13919

Generic method which is called, whenever messages for this object exist.

#### Parameters

##### sName

`string`

The property name

##### aMessages

`any`[]

The messages

#### Returns

`void`

#### Since

1.28

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.propagateMessages`

***

### refreshAggregation()

> **refreshAggregation**(`sName`): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13940

Generic method which can be called, when an aggregation needs to be refreshed. This method does not make
any change on the aggregation, but just calls the `getContexts` method of the binding to trigger fetching
of new data.

Subclasses should call this method only in the implementation of a named refresh method and for no other
purposes. The framework might change the conditions under which the method is called and the method implementation
might rely on those conditions.

#### Parameters

##### sName

`string`

name of the aggregation to refresh

#### Returns

`void`

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.refreshAggregation`

***

### removeAggregation()

> **removeAggregation**(`sAggregationName`, `vObject`, `bSuppressInvalidate?`): [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302) \| `null`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:13966

Removes an object from the aggregation named `sAggregationName` with cardinality 0..n.

The removed object is not destroyed nor is it marked as changed.

If the given object is found in the aggregation, it is removed, it's parent relationship is unset and
this ManagedObject is marked as changed. The removed object is returned as result of this method. If
the object could not be found, `null` is returned.

This method must only be called for aggregations of cardinality 0..n. The only way to remove objects
from a 0..1 aggregation is to set a `null` value for them.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically remove an object from an aggregation.
Use the concrete method removeXYZ for aggregation 'XYZ' instead.

#### Parameters

##### sAggregationName

`string`

the string identifying the aggregation that the given object should be removed from

##### vObject

`string` \| `number` \| [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

the position or ID of the ManagedObject that should be removed or that ManagedObject itself; if `vObject`
is invalid, a negative value or a value greater or equal than the current size of the aggregation, nothing
is removed.

##### bSuppressInvalidate?

`boolean`

if true, this ManagedObject is not marked as changed

#### Returns

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302) \| `null`

the removed object or `null`

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.removeAggregation`

***

### removeAllAggregation()

> **removeAllAggregation**(`sAggregationName`, `bSuppressInvalidate?`): [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)[]

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14001

Removes all objects from the 0..n-aggregation named `sAggregationName`.

The removed objects are not destroyed nor are they marked as changed.

Additionally, it clears the parent relationship of all removed objects, marks this ManagedObject as changed
and returns an array with the removed objects.

If the aggregation did not contain any objects, an empty array is returned and this ManagedObject is
not marked as changed.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically remove all objects from an aggregation.
Use the concrete method removeAllXYZ for aggregation 'XYZ' instead.

#### Parameters

##### sAggregationName

`string`

Name of the aggregation to remove all objects from

##### bSuppressInvalidate?

`boolean`

If true, this `ManagedObject` is not marked as changed

#### Returns

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)[]

An array of the removed elements (might be empty)

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.removeAllAggregation`

***

### removeAllAssociation()

> **removeAllAssociation**(`sAssociationName`, `bSuppressInvalidate?`): `any`[]

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14023

Removes all the objects in the 0..n-association named `sAssociationName` and returns an array with their
IDs. This ManagedObject is marked as changed, if the association contained any objects.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically remove all object from an association.
Use the concrete method removeAllXYZ for association 'XYZ' instead.

#### Parameters

##### sAssociationName

`string`

the name of the association

##### bSuppressInvalidate?

`boolean`

if true, this ManagedObject is not marked as changed

#### Returns

`any`[]

an array with the IDs of the removed objects (might be empty)

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.removeAllAssociation`

***

### removeAssociation()

> **removeAssociation**(`sAssociationName`, `vObject`, `bSuppressInvalidate?`): `string` \| `null`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14052

Removes a `ManagedObject` from the association named `sAssociationName`.

If an object is removed, the ID of that object is returned and this `ManagedObject` is marked as changed.
Otherwise `null` is returned.

If the same object was added multiple times to the same association, only a single occurrence of it will
be removed by this method. If the object is not found or if the parameter can't be interpreted neither
as a `ManagedObject` (or ID) nor as an index in the association, nothing will be removed. The same is
true if an index is given and if that index is out of range for the association.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically remove an object from an association.
Use the concrete method removeXYZ for association 'XYZ' instead.

#### Parameters

##### sAssociationName

`string`

the string identifying the association the `ManagedObject` should be removed from.

##### vObject

`string` \| `number` \| [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

the position or ID of the `ManagedObject` to remove or the `ManagedObject` itself; if `vObject` is invalid
input, a negative value or a value greater or equal than the current size of the association, nothing
is removed

##### bSuppressInvalidate?

`boolean`

if `true`, the managed object is not marked as changed

#### Returns

`string` \| `null`

ID of the removed `ManagedObject` or `null`

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.removeAssociation`

***

### render()

> **render**(`oRenderManager`): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49896

Renders the root control of the UIComponent.

#### Parameters

##### oRenderManager

[`RenderManager`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L41221)

a RenderManager instance

#### Returns

`void`

#### Inherited from

`UIComponent.render`

***

### resetProperty()

> **resetProperty**(`sPropertyName`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14082

Resets the given property to the default value and also restores the "initial" state (like it has never
been set).

As subclasses might have implemented side effects in the named setter `setXYZ` for property 'xyz', that
setter is called with a value of `null`, which by convention restores the default value of the property.
This is only done to notify subclasses, the internal state is anyhow reset.

When the property has not been modified so far, nothing will be done.

#### Parameters

##### sPropertyName

`string`

Name of the property

#### Returns

`this`

Returns `this` to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.resetProperty`

***

### rootControlLoaded()

> **rootControlLoaded**(): `Promise`\<[`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001) \| `null`\>

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49921

Returns a Promise representing the loading state of the root control.

For UIComponents implementing the sap.ui.core.IAsyncContentCreation interface, there are two
possible cases:
	 -  The `UIComponent` overwrites the sap.ui.core.UIComponent#createContent function and returns
    a Promise. The `rootControlLoaded` function will then return the same Promise.
	 -  The `UIComponent` defines a root view via its manifest. The root view is then automatically created
    asynchronously, and the `rootControlLoaded` function returns a Promise which resolves with the fully
    loaded and processed root view instance.

For synchronous root control creation the Promise resolves immediately with the root control instance
or null if none was created.

#### Returns

`Promise`\<[`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001) \| `null`\>

resolves with the created root control or null if none was created, rejects with any thrown
error

#### Since

1.90.0

#### Inherited from

`UIComponent.rootControlLoaded`

***

### runAsOwner()

> **runAsOwner**(`fn`): `any`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19517

Calls the function `fn` once and marks all ManagedObjects created during that call as "owned" by this
Component.

Nested calls of this method are supported (e.g. inside a newly created, nested component). The currently
active owner Component will be remembered before executing `fn` and restored afterwards.

#### Parameters

##### fn

`Function`

Function to execute

#### Returns

`any`

result of function `fn`

#### Since

1.25.1

#### Inherited from

`UIComponent.runAsOwner`

***

### setAggregation()

> **setAggregation**(`sAggregationName`, `oObject`, `bSuppressInvalidate?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14120

Sets a new object in the named 0..1 aggregation of this ManagedObject and marks this ManagedObject as
changed.

If the given object is not valid with regard to the aggregation (if it is not an instance of the type
specified for that aggregation) or when the method is called for an aggregation of cardinality 0..n,
then an Error is thrown (see #validateAggregation.

If the new object is the same as the currently aggregated object, then the internal state is not modified
and this ManagedObject is not marked as changed.

If the given object is different, the parent of a previously aggregated object is cleared (it must have
been this ManagedObject before), the parent of the given object is set to this ManagedObject and #invalidate
is called for this object.

Note that this method does neither return nor destroy the previously aggregated object. This behavior
is inherited by named set methods (see below) in subclasses. To avoid memory leaks, applications therefore
should first get the aggregated object, keep a reference to it or destroy it, depending on their needs,
and only then set a new object.

Note that ManagedObject only implements a single level of change tracking: if a first call to setAggregation
recognizes a change, 'invalidate' is called. If another call to setAggregation reverts that change, invalidate()
will be called again, the new status is not recognized as being 'clean' again.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically set an object in an aggregation. Use
the concrete method setXYZ for aggregation 'XYZ' or the generic #applySettings instead.

#### Parameters

##### sAggregationName

`string`

name of an 0..1 aggregation

##### oObject

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

the managed object that is set as aggregated object

##### bSuppressInvalidate?

`boolean`

if true, this ManagedObject is not marked as changed

#### Returns

`this`

Returns `this` to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.setAggregation`

***

### setAssociation()

> **setAssociation**(`sAssociationName`, `sId`, `bSuppressInvalidate?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14149

Sets the associated object for the given managed association of cardinality '0..1' and marks this ManagedObject
as changed.

The associated object can either be given by itself or by its id. If `null` or `undefined` is given,
the association is cleared.

**Note:** This method is a low-level API as described in the class documentation.
Applications or frameworks must not use this method to generically set an object in an association. Use
the concrete method setXYZ for association 'XYZ' or the generic #applySettings instead.

#### Parameters

##### sAssociationName

`string`

name of the association

##### sId

`string` \| [`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

the ID of the managed object that is set as an association, or the managed object itself or null

##### bSuppressInvalidate?

`boolean`

if true, the managed objects invalidate method is not called

#### Returns

`this`

Returns `this` to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.setAssociation`

***

### setBindingContext()

> **setBindingContext**(`oContext`, `sModelName?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14182

Set the binding context for this ManagedObject for the model with the given name.

**Note:** to be compatible with future versions of this API, you must not use the following model names:

	 - `null`
	 - empty string `""`
	 - string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`)
    is explicitly allowed and refers to the default model.

A value of `null` for `oContext` hides the parent context. The parent context will no longer be propagated
to aggregated child controls. A value of `undefined` removes a currently active context or a `null` context
and the parent context gets visible and propagated again.

**Note:** A ManagedObject inherits binding contexts from the Core only when it is a descendant of a UIArea.

#### Parameters

##### oContext

[`Context`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L59118)

the new binding context for this object

##### sModelName?

`string`

the name of the model to set the context for or `undefined`

#### Returns

`this`

reference to the instance itself

#### Inherited from

`UIComponent.setBindingContext`

***

### setContainer()

> **setContainer**(`oContainer`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49929

Sets the reference to the ComponentContainer - later required for the determination of the UIArea for
the UIComponent.

#### Parameters

##### oContainer

[`ComponentContainer`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L19713)

reference to a ComponentContainer

#### Returns

`this`

reference to this instance to allow method chaining

#### Inherited from

`UIComponent.setContainer`

***

### setModel()

> **setModel**(`oModel`, `sName?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14221

Sets or unsets a model for the given model name for this ManagedObject.

The `sName` must either be `undefined` (or omitted) or a non-empty string. When the name is omitted,
the default model is set/unset. To be compatible with future versions of this API, you must not use the
following model names:
	 - `null`
	 - empty string `""`
	 - string literals `"null"` or `"undefined"`

When `oModel` is `null` or `undefined`, a previously set model with that name is removed from this ManagedObject.
If an ancestor (parent, UIArea or Core) has a model with that name, this ManagedObject will immediately
inherit that model from its ancestor.

All local bindings that depend on the given model name are updated (created if the model references became
complete now; updated, if any model reference has changed; removed if the model references became incomplete
now).

Any change (new model, removed model, inherited model) is also applied to all aggregated descendants
as long as a descendant doesn't have its own model set for the given name.

**Note:** By design, it is not possible to hide an inherited model by setting a `null` or `undefined`
model. Applications can set an empty model to achieve the same.

**Note:** A ManagedObject inherits models from the Core only when it is a descendant of a UIArea.

#### Parameters

##### oModel

[`Model`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L61372) \| `null` \| `undefined`

Model to be set or `null` or `undefined`

##### sName?

`string`

the name of the model or `undefined`

#### Returns

`this`

`this` to allow method chaining

#### Inherited from

`UIComponent.setModel`

***

### setProperty()

> **setProperty**(`sPropertyName`, `oValue`, `bSuppressInvalidate?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14255

Sets the given value for the given property after validating and normalizing it, marks this object as
changed.

If the value is not valid with regard to the declared data type of the property, an Error is thrown.
In case `null` or `undefined` is passed, the default value for this property is used (see #validateProperty).
To fully reset the property to initial state, use #resetProperty instead. If the validated and
normalized `oValue` equals the current value of the property, the internal state of this object is not
changed (apart from the result of #isPropertyInitial). If the value changes, it is stored internally
and the #invalidate method is called on this object. In the case of TwoWay databinding, the bound
model is informed about the property change.

Note that ManagedObject only implements a single level of change tracking: if a first call to setProperty
recognizes a change, 'invalidate' is called. If another call to setProperty reverts that change, invalidate()
will be called again, the new status is not recognized as being 'clean' again.

**Note:** This method is a low level API as described in the class documentation.
Applications or frameworks must not use this method to generically set a property. Use the concrete method
setXYZ for property 'XYZ' or the generic #applySettings instead.

#### Parameters

##### sPropertyName

`string`

name of the property to set

##### oValue

`any`

value to set the property to

##### bSuppressInvalidate?

`boolean`

if true, the managed object is not marked as changed

#### Returns

`this`

Returns `this` to allow method chaining

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.setProperty`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14277

Returns a simple string representation of this managed object.

Mainly useful for tracing purposes.

#### Returns

`string`

a string description of this managed object

#### Inherited from

`UIComponent.toString`

***

### unbindAggregation()

> **unbindAggregation**(`sName`, `bSuppressReset`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14287

Unbind the aggregation from the model.

After unbinding, the current content of the aggregation is destroyed by default. When the `bSuppressReset`
parameter is set, it is however retained.

#### Parameters

##### sName

`string`

Name of the aggregation

##### bSuppressReset

`boolean`

Indicates whether destroying the content of the aggregation is skipped

#### Returns

`this`

Reference to this instance itself

#### Inherited from

`UIComponent.unbindAggregation`

***

### ~~unbindContext()~~

> **unbindContext**(`sModelName?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14305

Removes the defined binding context of this object, all bindings will now resolve relative to the parent
context again.

#### Parameters

##### sModelName?

`string`

name of the model to remove the context for.

#### Returns

`this`

reference to the instance itself

#### Deprecated

As of version 1.11.1. please use #unbindObject instead.

#### Inherited from

`UIComponent.unbindContext`

***

### unbindObject()

> **unbindObject**(`sModelName?`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14318

Removes the defined binding context of this object, all bindings will now resolve relative to the parent
context again.

#### Parameters

##### sModelName?

`string`

Name of the model to remove the context for.

#### Returns

`this`

Reference to the instance itself

#### Inherited from

`UIComponent.unbindObject`

***

### unbindProperty()

> **unbindProperty**(`sName`, `bSuppressReset`): `this`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14330

Unbind the property from the model

#### Parameters

##### sName

`string`

the name of the property

##### bSuppressReset

`boolean`

whether the reset to the default value when unbinding should be suppressed

#### Returns

`this`

reference to the instance itself

#### Inherited from

`UIComponent.unbindProperty`

***

### updateAggregation()

> **updateAggregation**(`sName`, `sChangeReason`, `oEventInfo`): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14357

Generic method which is called whenever an aggregation binding has changed.

Depending on the type of the list binding and on additional configuration, this method either destroys
all elements in the aggregation `sName` and recreates them anew or tries to reuse as many existing objects
as possible. It is up to the method which strategy it uses.

In case a managed object needs special handling for an aggregation binding, it can create a named update
method (e.g. `updateRows` for an aggregation `rows`) which then will be called by the framework
instead of this generic method. THe method will be called with two arguments `sChangeReason` and `oEventInfo`.

Subclasses should call this method only in the implementation of such a named update method and for no
other purposes. The framework might change the conditions under which the method is called and the method
implementation might rely on those conditions.

#### Parameters

##### sName

`string`

Name of the aggregation to update

##### sChangeReason

[`ChangeReason`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L57719)

One of the predefined reasons for the change event

##### oEventInfo

Additional information about the change event

###### detailedReason?

`string`

A non-standardized string that further classifies the change event. Model implementations should document
any value that they might provide as detailed reason, and describe under what circumstances each value
will be used.

#### Returns

`void`

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.updateAggregation`

***

### validateAggregation()

> **validateAggregation**(`sAggregationName`, `oObject`, `bMultiple`): `any`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14388

Checks whether the given value is of the proper type for the given aggregation name.

This method is already called by #setAggregation, #addAggregation and #insertAggregation.
In many cases, subclasses of ManagedObject don't need to call it again in their mutator methods.

#### Parameters

##### sAggregationName

`string`

the name of the aggregation

##### oObject

`any`

the aggregated object or a primitive value

##### bMultiple

`boolean`

whether the caller assumes the aggregation to have cardinality 0..n

#### Returns

`any`

the passed object

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.validateAggregation`

***

### validateProperty()

> **validateProperty**(`sPropertyName`, `oValue`): `any`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:14420

Checks whether the given value is of the proper type for the given property name.

In case `null` or `undefined` is passed, the default value for this property is used as value. If no
default value is defined for the property, the default value of the type of the property is used.

If the property has a data type that is an instance of sap.ui.base.DataType and if a `normalize` function
is defined for that type, that function will be called with the resulting value as only argument. The
result of the function call is then used instead of the raw value.

This method is called by #setProperty. In many cases, subclasses of ManagedObject don't need
to call it themselves.

#### Parameters

##### sPropertyName

`string`

Name of the property

##### oValue

`any`

Value to be set

#### Returns

`any`

The normalized value for the passed value or for the default value if `null` or `undefined`
was passed

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`UIComponent.validateProperty`

***

### create()

> `static` **create**(`mOptions`): `Promise`\<[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770)\>

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:18851

Asynchronously creates a new component instance from the given configuration.

If the component class does not already exists, the component class is loaded and afterwards the new
component instance is created.

To optimize the loading process, additional `asyncHints` can be provided. The structure of these hints
and how they impact the loading of components is an internal feature of this API and reserved for UI5
internal use only. Code that wants to be safe wrt. version updates, should not use the `asyncHints` property.

If Components and/or libraries are listed in the `asyncHints`, all the corresponding preload files will
be requested in parallel, loading errors (404s) will be ignored. The constructor class will only be required
after all preloads have been rejected or resolved. Only then, the new instance will be created.

A component can implement the sap.ui.core.IAsyncContentCreation interface. Please see the respective
documentation for more information.

#### Parameters

##### mOptions

Configuration options

###### activeTerminologies?

`string`[]

List of active terminologies. The order of the given active terminologies is significant. The [:sap/base/i18n/ResourceBundle ResourceBundle](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e0dbc3cdc26d32943bf9f46513c53da54acfc492/types/node/module.d.ts#L735)
API documentation describes the processing behavior in more detail. Please have a look at this dev-guide
chapter for general usage instructions: [Text Verticalization](https://ui5.sap.com/#/topic/eba8d25a31ef416ead876e091e67824e).

###### altManifestUrl?

`string`

**Since**

1.61.0 Alternative URL for the manifest.json. If `mOptions.manifest` is set to an object value,
this URL specifies the location to which the manifest object should resolve the relative URLs to.

###### asyncHints?

\{ `components?`: `string`[] \| `object`[]; `libs?`: `string`[] \| `object`[]; `preloadBundles?`: `string`[] \| `object`[]; `waitFor?`: `Promise`\<`any`\> \| `Promise`\<`any`\>[]; \}

Hints for asynchronous loading. **Beware:** This parameter is only used internally by the UI5 framework
and compatibility cannot be guaranteed. The parameter must not be used in productive code, except in
code delivered by the UI5 teams.

###### asyncHints.components?

`string`[] \| `object`[]

a list of components needed by the current component and its subcomponents The framework will try to
preload these components (their Component-preload.js) asynchronously, errors will be ignored. Please
note that the framework has no knowledge about whether a Component provides a preload file or whether
it is bundled in some library preload. If Components are listed in the hints section, they will be preloaded.
Instead of specifying just the names of components, an object might be given that contains a mandatory
`name` property and optionally, an `url` that will be used for a `registerModulePath`, and/or a `lazy`
property. When `lazy` is set to a truthy value, only a necessary `registerModulePath` will be executed,
but the corresponding component won't be preloaded.

###### asyncHints.libs?

`string`[] \| `object`[]

libraries needed by the Component and its subcomponents These libraries should be (pre-)loaded before
the Component. The framework will asynchronously load those libraries, if they're not loaded yet. Instead
of specifying just the names of libraries, an object might be given that contains a mandatory `name`
property and optionally, an `url` that will be used for a `registerModulePath`, and/or a `lazy` property.
When `lazy` is set to a truthy value, only a necessary `registerModulePath` will be executed, but the
corresponding library won't be preloaded.

###### asyncHints.preloadBundles?

`string`[] \| `object`[]

a list of additional preload bundles The framework will try to load these bundles asynchronously before
requiring the Component, errors will be ignored. The named modules must only represent preload bundles.
If they are normal modules, their dependencies will be loaded with the normal synchronous request mechanism
and performance might degrade. Instead of specifying just the names of preload bundles, an object might
be given that contains a mandatory `name` property and optionally, an `url` that will be used for a `registerModulePath`.

###### asyncHints.waitFor?

`Promise`\<`any`\> \| `Promise`\<`any`\>[]

`Promise` or array of `Promise`s for which the Component instantiation should wait

###### componentData?

`object`

Initial data of the Component, see sap.ui.core.Component#getComponentData.

###### handleValidation?

`string`

If set to `true` validation of the component is handled by the `Messaging`

###### id?

`string`

ID of the new Component

###### manifest?

`string` \| `boolean` \| `object`

Whether and from where to load the manifest.json for the Component. When set to any truthy value, the
manifest will be loaded and evaluated before the Component controller. If it is set to a falsy value,
the manifest will not be evaluated before the controller. It might still be loaded synchronously if declared
in the Component metadata. A non-empty string value will be interpreted as the URL to load the manifest
from. If the manifest could not be loaded from a given URL, the Promise returned by the Component.create
factory rejects. A non-null object value will be interpreted as manifest content. **Note:** If a manifest
is provided as URL or plain object, it must use the same major schema version as the original manifest
to avoid incompatible changes in the behavior of the component.

###### name

`string`

Name of the component to load, this is the dot-separated name of the package that contains the Component.js
module; Even when an alternative location is specified from which the manifest should be loaded (`mOptions.manifest`
is set to a non-empty string), then the name specified in that manifest will be ignored and this name
will be used instead to determine the module to be loaded.

###### settings?

[`$ComponentSettings`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L19658)

Settings of the new Component

###### url?

`string`

Alternative location from where to load the Component. If `mOptions.manifest` is set to a non-empty string,
this URL specifies the location of the final component defined via that manifest, otherwise it specifies
the location of the component defined via its name `mOptions.name`.

#### Returns

`Promise`\<[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770)\>

A Promise that resolves with the newly created component instance

#### Since

1.56.0

#### Inherited from

`UIComponent.create`

***

### ~~defineClass()~~

> `static` **defineClass**(`sClassName`, `oStaticInfo`, `FNMetaImpl?`): [`Metadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L15956)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:16119

Creates metadata for a given class and attaches it to the constructor and prototype of that class.

After creation, metadata can be retrieved with getMetadata().

The static info can at least contain the following entries:
	 - baseType: {string} fully qualified name of a base class or empty
	 - publicMethods: {string} an array of method names that will be visible in the interface proxy returned
    by #getInterface

#### Parameters

##### sClassName

`string`

name of an (already declared) constructor function

##### oStaticInfo

static info used to create the metadata object

###### baseType

`string`

qualified name of a base class

###### publicMethods

`string`[]

array of names of public methods

##### FNMetaImpl?

`Function`

constructor function for the metadata object. If not given, it defaults to sap.ui.base.Metadata.

#### Returns

[`Metadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L15956)

the created metadata object

#### Deprecated

As of version 1.3.1. Use the static `extend` method of the desired base class (e.g. sap.ui.base.Object.extend)

#### Inherited from

`UIComponent.defineClass`

***

### escapeSettingsValue()

> `static` **escapeSettingsValue**(`vValue`): `any`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12562

Escapes the given value so it can be used in the constructor's settings object. Should be used when property
values are initialized with static string values which could contain binding characters (curly braces).

#### Parameters

##### vValue

`any`

Value to escape; only needs to be done for string values, but the call will work for all types

#### Returns

`any`

The given value, escaped for usage as static property value in the constructor's settings object
(or unchanged, if not of type string)

#### Since

1.52

#### Inherited from

`UIComponent.escapeSettingsValue`

***

### extend()

> `static` **extend**\<`T`\>(`sClassName`, `oClassInfo?`, `FNMetaImpl?`): `Function`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49655

Creates a new subclass of class `sap.ui.core.UIComponent` with name `sClassName` and enriches it with
the information contained in `oClassInfo`. `oClassInfo` might contain the same kind of information as
described in sap.ui.core.Component.extend.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `unknown`\>

#### Parameters

##### sClassName

`string`

Qualified name of the newly created class

##### oClassInfo?

[`ClassInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L89807)\<`T`, [`UIComponent`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L49600)\>

Object literal with information about the class

##### FNMetaImpl?

`Function`

Constructor function for the metadata object. If not given, it defaults to an internal subclass of `sap.ui.core.ComponentMetadata`.

#### Returns

`Function`

The created class / constructor function

#### Inherited from

`UIComponent.extend`

***

### ~~get()~~

> `static` **get**(`sId`): [`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:18982

Returns an existing component instance, identified by its ID.

#### Parameters

##### sId

`string`

ID of the component.

#### Returns

[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `undefined`

Component instance or `undefined` when no component with the given ID exists.

#### Since

1.56.0

#### Deprecated

As of version 1.120. please use the static sap.ui.core.Component.getComponentById getComponentById
instead.

#### Inherited from

`UIComponent.get`

***

### getComponentById()

> `static` **getComponentById**(`sId`): [`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:18995

Returns an existing component instance, identified by its ID.

#### Parameters

##### sId

`string`

ID of the component.

#### Returns

[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `undefined`

Component instance or `undefined` when no component with the given ID exists.

#### Since

1.120

#### Inherited from

`UIComponent.getComponentById`

***

### getMetadata()

> `static` **getMetadata**(): [`ComponentMetadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L20511)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49675

Returns a metadata object for class sap.ui.core.UIComponent.

#### Returns

[`ComponentMetadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L20511)

Metadata object describing this class

#### Inherited from

`UIComponent.getMetadata`

***

### getOwnerComponentFor()

> `static` **getOwnerComponentFor**(`oObject`): [`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19019

Returns the Component instance in whose "context" the given ManagedObject has been created or `undefined`.

This is a convenience wrapper around sap.ui.core.Component.getOwnerIdFor Component.getOwnerIdFor.
If the owner ID cannot be determined for reasons documented on `getOwnerForId` or when the Component
for the determined ID no longer exists, `undefined` will be returned.

#### Parameters

##### oObject

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

Object to retrieve the owner Component for

#### Returns

[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `undefined`

the owner Component or `undefined`.

#### Since

1.25.1

#### Inherited from

`UIComponent.getOwnerComponentFor`

***

### getOwnerIdFor()

> `static` **getOwnerIdFor**(`oObject`): `string` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19052

Returns the ID of the object in whose "context" the given ManagedObject has been created.

For objects that are not ManagedObjects or for which the owner is unknown, `undefined` will be returned
as owner ID.

**Note**: Ownership for objects is only checked by the framework at the time when they are created. It
is not checked or updated afterwards. And it can only be detected while the sap.ui.core.Component#runAsOwner Component.runAsOwner
function is executing. Without further action, this is only the case while the content of a UIComponent
is sap.ui.core.UIComponent#createContent constructed or when a sap.ui.core.routing.Router Router
creates a new View and its content.

**Note**: This method does not guarantee that the returned owner ID belongs to a Component. Currently,
it always does. But future versions of UI5 might introduce a more fine grained ownership concept, e.g.
taking Views into account. Callers that want to deal only with components as owners, should use the following
method: sap.ui.core.Component.getOwnerComponentFor Component.getOwnerComponentFor. It guarantees
that the returned object (if any) will be a Component.

**Further note** that only the ID of the owner is recorded. In rare cases, when the lifecycle of a ManagedObject
is not bound to the lifecycle of its owner, (e.g. by the means of aggregations), then the owner might
have been destroyed already whereas the ManagedObject is still alive. So even the existence of an owner
ID is not a guarantee for the existence of the corresponding owner.

#### Parameters

##### oObject

[`ManagedObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L12302)

Object to retrieve the owner ID for

#### Returns

`string` \| `undefined`

ID of the owner or `undefined`

#### Since

1.15.1

#### Inherited from

`UIComponent.getOwnerIdFor`

***

### getRouterFor()

> `static` **getRouterFor**(`oControllerOrView`): [`Router`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L43338)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:49699

Returns the reference to the router instance.

The passed controller or view has to be created in the context of a UIComponent to return the router
instance. Otherwise this function will return undefined. You may define the routerClass property in the
config section of the routing to make the Component create your router extension.

Example:
```javascript

routing: {
	config: {
		routerClass : myAppNamespace.MyRouterClass
		...
}
...
```

#### Parameters

##### oControllerOrView

[`Controller`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L37335) \| [`View`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L38441)

either a view or controller

#### Returns

[`Router`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L43338)

the router instance

#### Since

1.16.1

#### Inherited from

`UIComponent.getRouterFor`

***

### ~~isA()~~

> `static` **isA**\<`T`\>(`oObject`, `vTypeName`): `oObject is T`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:16211

Checks whether the given object is an instance of the named type. This function is a short-hand convenience
for sap.ui.base.Object#isA.

Please see the API documentation of sap.ui.base.Object#isA for more details.

#### Type Parameters

##### T

`T` *extends* [`BaseObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L16097) = [`BaseObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L16097)

#### Parameters

##### oObject

`any`

Object which will be checked whether it is an instance of the given type

##### vTypeName

`string` \| `string`[]

Type or types to check for

#### Returns

`oObject is T`

Whether the given object is an instance of the given type or of any of the given types

#### Since

1.56

#### Deprecated

As of version 1.120. please use sap.ui.base.Object.isObjectA.

#### Inherited from

`UIComponent.isA`

***

### isObjectA()

> `static` **isObjectA**\<`T`\>(`oObject`, `vTypeName`): `oObject is T`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:16231

Checks whether the given object is an instance of the named type. This function is a short-hand convenience
for sap.ui.base.Object#isA.

Please see the API documentation of sap.ui.base.Object#isA for more details.

#### Type Parameters

##### T

`T` *extends* [`BaseObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L16097) = [`BaseObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L16097)

#### Parameters

##### oObject

`any`

Object which will be checked whether it is an instance of the given type

##### vTypeName

`string` \| `string`[]

Type or types to check for

#### Returns

`oObject is T`

Whether the given object is an instance of the given type or of any of the given types

#### Since

1.120

#### Inherited from

`UIComponent.isObjectA`

***

### load()

> `static` **load**(`mOptions`): `Promise`\<`Function`\>

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:19081

Asynchronously loads a component class without instantiating it; returns a promise on the loaded class.

Beware: "Asynchronous component loading" doesn't necessarily mean that no more synchronous loading occurs.
Both the framework as well as component implementations might still execute synchronous requests. `Component.load`
just allows to use async calls internally.

When a manifest is referenced in `mOptions`, this manifest is not automatically used for instances of
the Component class that are created after loading. The manifest or the manifest url must be provided
for every instance explicitly.

To optimize the loading process, additional `asyncHints` can be provided. If components and/or libraries
are listed in the `asyncHints`, all the corresponding preload files will be requested in parallel, loading
errors (404s) will be ignored. The constructor class will only be required after all preloads have been
rejected or resolved. The structure of the hints and how they impact the loading of components is an
internal feature of this API and reserved for UI5 internal use only. Code that wants to be safe wrt.
version updates, should not use the `asyncHints` property.

#### Parameters

##### mOptions

Configuration options

###### altManifestUrl?

`string`

**Since**

1.61.0 Alternative URL for the manifest.json. If `mOptions.manifest` is set to an object value,
this URL specifies the location to which the manifest object should resolve the relative URLs to.

###### asyncHints?

\{ `components?`: `string`[] \| `object`[]; `libs?`: `string`[] \| `object`[]; `preloadBundles?`: `string`[] \| `object`[]; `preloadOnly?`: `boolean`; \}

Hints for asynchronous loading. **Beware:** This parameter is only used internally by the UI5 framework
and compatibility cannot be guaranteed. The parameter must not be used in productive code, except in
code delivered by the UI5 teams.

###### asyncHints.components?

`string`[] \| `object`[]

a list of components needed by the current component and its subcomponents The framework will try to
preload these components (their Component-preload.js) asynchronously, errors will be ignored. Please
note that the framework has no knowledge about whether a Component provides a preload file or whether
it is bundled in some library preload. If Components are listed in the hints section, they will be preloaded.
Instead of specifying just the names of components, an object might be given that contains a mandatory
`name` property and optionally, an `url` that will be used for a `registerModulePath`, and/or a `lazy`
property. When `lazy` is set to a truthy value, only a necessary `registerModulePath` will be executed,
but the corresponding component won't be preloaded.

###### asyncHints.libs?

`string`[] \| `object`[]

libraries needed by the Component and its subcomponents These libraries should be (pre-)loaded before
the Component. The framework will asynchronously load those libraries, if they're not loaded yet. Instead
of specifying just the names of libraries, an object might be given that contains a mandatory `name`
property and optionally, an `url` that will be used for a `registerModulePath`, and/or a `lazy` property.
When `lazy` is set to a truthy value, only a necessary `registerModulePath` will be executed, but the
corresponding library won't be preloaded.

###### asyncHints.preloadBundles?

`string`[] \| `object`[]

a list of additional preload bundles The framework will try to load these bundles asynchronously before
requiring the component, errors will be ignored. The named modules must only represent preload bundles.
If they are normal modules, their dependencies will be loaded with the standard module loading mechanism
and performance might degrade. Instead of specifying just the names of preload bundles, an object might
be given that contains a mandatory `name` property and, optionally, a `url` that will be used for a `registerModulePath`.

###### asyncHints.preloadOnly?

`boolean`

Whether only the preloads should be done, but not the loading of the Component controller class itself.

###### manifest?

`string` \| `boolean` \| `object`

Whether and from where to load the manifest.json for the Component. When set to a truthy value, the manifest
will be loaded and evaluated **before** the Component controller. When set to a falsy value, the manifest
will be loaded and evaluated **after** the Component controller. A non-empty string value will be interpreted
as the URL to load the manifest from. This implies that the manifest is loaded and evaluated **before**
the Component controller. A non-null object value will be interpreted as manifest content.

###### name

`string`

Name of the Component to load, as a dot-separated name; Even when an alternative location is specified
from which the manifest should be loaded (`mOptions.manifest` is set to a non-empty string), then the
name specified in that manifest will be ignored and this name will be used instead to determine the module
to be loaded.

###### url?

`string`

Alternative location from where to load the Component. If `mOptions.manifest` is set to a non-empty string,
this URL specifies the location of the final component defined via that manifest, otherwise it specifies
the location of the component defined via its name `mOptions.name`.

#### Returns

`Promise`\<`Function`\>

A Promise that resolves with the loaded component class or `undefined` in case `mOptions.asyncHints.preloadOnly`
is set to `true`

#### Since

1.56.0

#### Inherited from

`UIComponent.load`
