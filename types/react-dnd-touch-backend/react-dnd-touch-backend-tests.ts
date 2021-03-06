import * as ReactDnd from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";

const component = () => null;

const dndComponent = ReactDnd.DragDropContext(TouchBackend)(component);
const dndComponentMouseEvents = ReactDnd.DragDropContext(TouchBackend({enableMouseEvents: true}))(component);
const dndComponentDelayTouchStart = ReactDnd.DragDropContext(TouchBackend({delayTouchStart: 200}))(component);
const dndComponentDelayMouseStart = ReactDnd.DragDropContext(TouchBackend({enableMouseEvents: true, delayMouseStart: 100}));
const dndComponentKeyboardEvents = ReactDnd.DragDropContext(TouchBackend({enableKeyboardEvents: true}));
const dndComponentOldDelay = ReactDnd.DragDropContext(TouchBackend({delay: 300}));
const dndComponentAllCurrentEvents = ReactDnd.DragDropContext(TouchBackend(
    {enableKeyboardEvents: true, enableMouseEvents: true, delayMouseStart: 100, delayTouchStart: 200}));
const dndComponentWithScrollAngleRanges = ReactDnd.DragDropContext(TouchBackend(
    { scrollAngleRanges: [{ start: 0, end: 0 }, { start: 0 }, { end: 0 }] }));
const dndComponentWithTouchSlop = ReactDnd.DragDropContext(TouchBackend({ touchSlop: 0 }));
const dndComponentWithIgnoreContextMenu = ReactDnd.DragDropContext(TouchBackend({ ignoreContextMenu: true }));
