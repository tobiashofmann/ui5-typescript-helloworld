[**ui5-typescript-helloworld**](../../../README.md)

***

[ui5-typescript-helloworld](../../../modules.md) / [controller/App.controller](../README.md) / default

# Class: default

Defined in: [webapp/controller/App.controller.ts:8](https://github.com/tobiashofmann/ui5-typescript-helloworld/blob/5e7a56281065154b4eb5e32f2dce8267517545a3/webapp/controller/App.controller.ts#L8)

**`Namespace`**

ui5.typescript.helloworld.controller

## Extends

- [`default`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L37335)

## Constructors

### Constructor

> **new default**(`sName`): `App`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37339

Instantiates a (MVC-style) controller.

#### Parameters

##### sName

`string`

The name of the controller to instantiate.

#### Returns

`App`

#### Inherited from

`Controller.constructor`

## Methods

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

`Controller.attachEvent`

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

`Controller.attachEvent`

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

`Controller.attachEventOnce`

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

`Controller.attachEventOnce`

***

### byId()

> **byId**(`sId`): [`UI5Element`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L27424) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37422

Returns an Element of the connected view with the given local ID.

Views automatically prepend their own ID as a prefix to created Elements to make the IDs unique even
in the case of multiple view instances. This method helps to find an element by its local ID only.

If no view is connected or if the view doesn't contain an element with the given local ID, `undefined`
is returned.

#### Parameters

##### sId

`string`

View-local ID

#### Returns

[`UI5Element`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L27424) \| `undefined`

Element by its (view local) ID

#### Inherited from

`Controller.byId`

***

### createId()

> **createId**(`sId`): `string` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37436

Converts a view local ID to a globally unique one by prepending the view ID.

If no view is connected, `undefined` is returned.

#### Parameters

##### sId

`string`

View-local ID

#### Returns

`string` \| `undefined`

Prefixed ID

#### Inherited from

`Controller.createId`

***

### destroy()

> **destroy**(): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12045

Cleans up the internal structures and removes all event handlers.

The object must not be used anymore after destroy was called.
See:
	sap.ui.base.Object#destroy

#### Returns

`void`

#### Inherited from

`Controller.destroy`

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

`Controller.detachEvent`

***

### fireEvent()

> **fireEvent**(`sEventId`, `oParameters?`, `bAllowPreventDefault?`, `bEnableEventBubbling?`): `boolean` \| `App`

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

`boolean` \| `App`

Returns `this` to allow method chaining. When `preventDefault` is supported on the fired event
the function returns `true` if the default action should be executed, `false` otherwise.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`Controller.fireEvent`

***

### getEventingParent()

> **getEventingParent**(): [`EventProvider`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L11891) \| `null`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12107

Returns the parent in the eventing hierarchy of this object.

Per default this returns null, but if eventing is used in objects, which are hierarchically structured,
this can be overwritten to make the object hierarchy visible to the eventing and enables the use of event
bubbling within this object hierarchy.

#### Returns

[`EventProvider`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L11891) \| `null`

The parent event provider

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`Controller.getEventingParent`

***

### getInterface()

> **getInterface**(): [`BaseObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L16097)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:16258

Returns the public facade of this object.

By default, the public facade is implemented as an instance of sap.ui.base.Interface, exposing
the `publicMethods` as defined in the metadata of the class of this object.

See the documentation of the #.extend extend method for an explanation of `publicMethods`.

The facade is created on the first call of `getInterface` and reused for all later calls.

#### Returns

[`BaseObject`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L16097)

A facade for this object, with at least the public methods of the class of this.

#### Inherited from

`Controller.getInterface`

***

### getMetadata()

> **getMetadata**(): [`Metadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L15956)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:16268

Returns the metadata for the class that this object belongs to.

This method is only defined when metadata has been declared by using sap.ui.base.Object.defineClass
or sap.ui.base.Object.extend.

#### Returns

[`Metadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L15956)

metadata for the class of the object

#### Inherited from

`Controller.getMetadata`

***

### getOwnerComponent()

> **getOwnerComponent**(): [`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37452

Gets the component of the controller's view

If there is no Component connected to the view or the view is not connected to the controller, `undefined`
is returned.

#### Returns

[`Component`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L18770) \| `undefined`

Component instance

#### Since

1.23.0

#### Inherited from

`Controller.getOwnerComponent`

***

### getView()

> **getView**(): [`View`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L38441) \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37459

Returns the view associated with this controller or `undefined`.

#### Returns

[`View`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L38441) \| `undefined`

View connected to this controller.

#### Inherited from

`Controller.getView`

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

`Controller.hasListeners`

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

`Controller.isA`

***

### loadFragment()

> **loadFragment**(`mOptions`): `Promise`\<[`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001) \| [`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001)[]\>

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37488

Loads a Fragment by sap.ui.core.Fragment.load.

The fragment content will be added to the `dependents` aggregation of the view by default. This behavior
can be suppressed by setting `mOptions.addToDependents` to false.

The controller is passed to the Fragment by default, so the (event handler) methods referenced in the
Fragment will be called on this Controller.

If the controller has an owner component, it is passed to the fragment content. By default the fragment
content will be prefixed with the view ID to avoid duplicate ID issues. The prefixing can be switched
off with the `autoPrefixId` option.

When `autoPrefixId` is enabled, the fragment content can be accessed by calling sap.ui.core.mvc.Controller.byId.

**Destroy behavior**: Different scenarios concerning the destruction of the fragment's content exist,
of which some must be addressed by the caller, while others are handled automatically.
	 - The controller instance is destroyed before the fragment content creation has finished: In this case,
    the controller instance takes care of asynchronously destroying the fragment content
	 - The fragment content is aggregated within a control (e.g. `dependents` aggregation by default): In
    this case, the content will be destroyed during the regular destroy lifecycle.
	 - The fragment content is not aggregated within a control: In this case, ***it must be destroyed manually***
    in the exit hook of the controller.

#### Parameters

##### mOptions

Options regarding fragment loading

###### addToDependents?

`boolean`

Whether the fragment content should be added to the `dependents` aggregation of the view

###### autoPrefixId?

`boolean`

Whether the IDs of the fragment content will be prefixed by the view ID

###### id?

`string`

the ID of the fragment

###### name

`string`

The fragment name, which must correspond to a fragment which can be loaded via the module system (mOptions.name
+ suffix ".fragment.[typeextension]") and must contain the fragment definition. It can be specified either
in dot notation (`my.sample.myFragment`) or, for JS fragments, in module name syntax (`module:my/sample/myFragment`).

###### type?

`string`

the fragment type, e.g. "XML", "JS", or "HTML" (see above). Default is "XML". If the fragment name is
given in module name syntax (e.g., `module:my/sample/myFragment`) the type must be omitted.

#### Returns

`Promise`\<[`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001) \| [`Control`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L22001)[]\>

A Promise that resolves with the fragment content

#### Since

1.93

#### Inherited from

`Controller.loadFragment`

***

### onAfterRendering()

> **onAfterRendering**(): `void` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37536

This method is called every time the View is rendered, after the HTML is placed in the DOM-Tree. It can
be used to apply additional changes to the DOM after the Renderer has finished. (Even though this method
is declared as "abstract", it does not need to be defined in controllers, if the method does not exist,
it will simply not be called.)
See:
	sap.ui.core.Control.prototype.onAfterRendering

#### Returns

`void` \| `undefined`

This lifecycle hook must not have a return value. Return value `void` is deprecated since 1.120,
as it does not force functions to **not** return something. This implies that, for instance, no async
function returning a Promise should be used.

**Note:** While the return type is currently `void|undefined`, any implementation of this hook must not
return anything but undefined. Any other return value will cause an error log in this version of UI5
and will fail in future major versions of UI5.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`Controller.onAfterRendering`

***

### onBeforeRendering()

> **onBeforeRendering**(): `void` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37555

This method is called every time the View is rendered, before the Renderer is called and the HTML is
placed in the DOM-Tree. It can be used to perform clean-up-tasks before re-rendering. (Even though this
method is declared as "abstract", it does not need to be defined in controllers, if the method does not
exist, it will simply not be called.)
See:
	sap.ui.core.Control.prototype.onBeforeRendering

#### Returns

`void` \| `undefined`

This lifecycle hook must not have a return value. Return value `void` is deprecated since 1.120,
as it does not force functions to **not** return something. This implies that, for instance, no async
function returning a Promise should be used.

**Note:** While the return type is currently `void|undefined`, any implementation of this hook must not
return anything but undefined. Any other return value will cause an error log in this version of UI5
and will fail in future major versions of UI5.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`Controller.onBeforeRendering`

***

### onExit()

> **onExit**(): `void` \| `undefined`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37572

This method is called upon desctuction of the View. The controller should perform its internal destruction
in this hook. It is only called once per View instance, unlike the onBeforeRendering and onAfterRendering
hooks. (Even though this method is declared as "abstract", it does not need to be defined in controllers,
if the method does not exist, it will simply not be called.)

#### Returns

`void` \| `undefined`

This lifecycle hook must not have a return value. Return value `void` is deprecated since 1.120,
as it does not force functions to **not** return something. This implies that, for instance, no async
function returning a Promise should be used.

**Note:** While the return type is currently `void|undefined`, any implementation of this hook must not
return anything but undefined. Any other return value will cause an error log in this version of UI5
and will fail in future major versions of UI5.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Inherited from

`Controller.onExit`

***

### onInit()

> **onInit**(): `void`

Defined in: [webapp/controller/App.controller.ts:10](https://github.com/tobiashofmann/ui5-typescript-helloworld/blob/5e7a56281065154b4eb5e32f2dce8267517545a3/webapp/controller/App.controller.ts#L10)

This method is called upon initialization of the View. The controller can perform its internal setup
in this hook. It is only called once per View instance, unlike the onBeforeRendering and onAfterRendering
hooks. (Even though this method is declared as "abstract", it does not need to be defined in controllers,
if the method does not exist, it will simply not be called.)

**Note:** In component-based apps `this.getOwnerComponent().getModel()` should be used inside `onInit()`
to get a model assigned to the component instead of using `this.getView().getModel()`. The latter call
might return `undefined` because the view might not have been attached to a parent yet (i.e. the component),
and thus the view can't inherit a model from that parent. You could also attach to the `modelContextChange`
event. The event is fired when either the context or the model changes for the control.

#### Returns

`void`

This lifecycle hook must not have a return value. Return value `void` is deprecated since 1.120,
as it does not force functions to **not** return something. This implies that, for instance, no async
function returning a Promise should be used.

**Note:** While the return type is currently `void|undefined`, any implementation of this hook must not
return anything but undefined. Any other return value will cause an error log in this version of UI5
and will fail in future major versions of UI5.

#### Ui5-protected

Do not call from applications (only from related classes in the framework)

#### Overrides

`Controller.onInit`

***

### sayHello()

> **sayHello**(): `void`

Defined in: [webapp/controller/App.controller.ts:18](https://github.com/tobiashofmann/ui5-typescript-helloworld/blob/5e7a56281065154b4eb5e32f2dce8267517545a3/webapp/controller/App.controller.ts#L18)

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:12130

Returns a string representation of this object.

In case there is no class or id information, a simple static string is returned. Subclasses should override
this method.

#### Returns

`string`

A string description of this event provider

#### Inherited from

`Controller.toString`

***

### create()

> `static` **create**(`mOptions`): `Promise`\<[`Controller`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L37335)\>

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37353

Creates an instance of controller class.

#### Parameters

##### mOptions

A map containing the controller configuration options.

###### name

`string`

The controller name that corresponds to a JS module that can be loaded via the module system (mOptions.name
+ suffix ".controller.js"). It can be specified either in dot notation (`my.sample.Controller`) or in
module name syntax (`module:my/sample/Controller`).

#### Returns

`Promise`\<[`Controller`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L37335)\>

the Promise resolves with a new instance of the controller

#### Since

1.56.0

#### Inherited from

`Controller.create`

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

`Controller.defineClass`

***

### extend()

> `static` **extend**\<`T`\>(`sClassName`, `oClassInfo?`, `FNMetaImpl?`): `Function`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37375

Creates a new subclass of class sap.ui.core.mvc.Controller with name `sClassName` and enriches it with
the information contained in `oClassInfo`.

`oClassInfo` might contain the same kind of information as described in sap.ui.base.EventProvider.extend.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `unknown`\>

#### Parameters

##### sClassName

`string`

Name of the class being created

##### oClassInfo?

[`ClassInfo`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L89807)\<`T`, [`Controller`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L37335)\>

Object literal with information about the class

##### FNMetaImpl?

`Function`

Constructor function for the metadata object; if not given, it defaults to the metadata implementation
used by this class

#### Returns

`Function`

Created class / constructor function

#### Inherited from

`Controller.extend`

***

### getMetadata()

> `static` **getMetadata**(): [`Metadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L15956)

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37396

Returns a metadata object for class sap.ui.core.mvc.Controller.

#### Returns

[`Metadata`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/52da2c9cc45f32dd0b0727e0d39ad0f9db301080/types/openui5/sap.ui.core.d.ts#L15956)

Metadata object describing this class

#### Inherited from

`Controller.getMetadata`

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

`Controller.isA`

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

`Controller.isObjectA`

***

### ~~registerExtensionProvider()~~

> `static` **registerExtensionProvider**(`sExtensionProvider`): `void`

Defined in: node\_modules/@types/openui5/sap.ui.core.d.ts:37404

See sap.ui.core.mvc.ControllerExtensionProvider.registerExtensionProvider.

#### Parameters

##### sExtensionProvider

`string`

the module name of the extension provider

#### Returns

`void`

#### Since

1.34.0

#### Deprecated

As of version 1.136.0. without replacement, the extension provider concept is intended for
framework internal use only.

#### Inherited from

`Controller.registerExtensionProvider`
