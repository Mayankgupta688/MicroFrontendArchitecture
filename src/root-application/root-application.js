import { start, registerApplication } from 'single-spa'

var reactComponent = import("../react/index.js");

var angularComponent = import('../angular/index.js')

// The third parameter specifies the conditions when the component will be displayed and activated...

// We can specify the location options when the component will be activated.

registerApplication('react', reactComponent, () => true)
registerApplication('angular', angularComponent, () => true)

start()
