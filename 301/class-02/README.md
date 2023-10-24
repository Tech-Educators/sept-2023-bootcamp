# State and Props

## Overview

This class will focus on passing information as `props` from a parent component into a child component. We will also cover the concept of `state` and how individual components can hold state.

## Class Outline

- Warm-up exercise
- Review code challenges
- Introduction of the code challenge topic
- Code review of lab assignment
- Code Demo
- Bootstrap
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- JSON vs XML
- State
- Props
- Netlify
- setState

#### Execute

- Understand and define the concepts of `props` and `state` as they relate to React Components
- Pass both static and dynamic information from a parent component into a child component using `props`
- Hold information as `state` in different components
- Create responsive web pages suitable for desktop or mobile web browsers
- Integrate a 3rd party component library into a React application
- Deploy to Netlify

## Notes

1. What is state?

1. What are props?

1. To Update State: `setLikes(likes + 1)`

1. To send something in props to a child component: `<ChildComponent bananas='randomString' />`

1. To access that variable in the props from the child component: `props.bananas`

1. Information flows in one direction. That direction is ______________.


1. Holding state in a parent component and sending it into a child component:

  ```javaScript
    import React, { useState } from 'react';
    import Child from './path-to-Child-component';

    const Parent = () => {
    const [name, setName] = useState('sue');
    const [childName, setChildName] = useState('bob');

    return (
        <>
        <p>My name is {name}</p>
        <Child kidsName={childName} />
        </>
    );
    };

    export default Parent;


    import React from 'react';

    const Child = (props) => {
    return (
        <p>My name is {props.kidsName}</p>
    );
    };

    export default Child;

  ```