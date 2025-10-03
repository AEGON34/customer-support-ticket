1. What is JSX, and why is it used?

JSX is like a special syntax that lets us write HTML inside JavaScript. It makes React code easier to read and write because we can design the UI and also add logic in the same place.

2. What is the difference between State and Props?

State is data that belongs to a component and can change over time.

Props are values we pass from one component to another, like function arguments. Props can’t be changed by the child component.

3. What is the useState hook, and how does it work?

The useState hook is used to create and manage state in a functional component. It gives us two things:

the current value,

and a function to update it.

When we update state, React re-renders the component with the new value.

4. How can you share state between components in React?

To share state, we keep the state in a common parent component and then pass it down to child components using props. Another way is using context if we need to share it with many components.

5. How is event handling done in React?

In React, we handle events using camelCase names like onClick, onChange, etc. We pass a function that will run when the event happens.