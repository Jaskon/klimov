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

// For anti-copy-paste
function setDataAttributes(dom, payload) {
    for (let key in payload) {
        dom.setAttribute('data-' + key, payload[key]);
    }
}

function getDataAttribute(dom, key) {
    return dom.getAttribute('data-' + key);
}

// Extract one field (by key) from array of objects
function extractOneField(objects, key) {
    return objects.reduce((accum, obj) => {
        accum.push(obj[key]);
        return accum;
    }, []);
}
