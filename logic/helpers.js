// Fire specified event for element
function fireEvent(element, eventName) {
    var event = new Event(eventName);
    element.dispatchEvent(event);
}

// Returns position in array
function findByPhase(arr, phase) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].phase == phase) {
            return i;
        }
    }

    return undefined;
}
