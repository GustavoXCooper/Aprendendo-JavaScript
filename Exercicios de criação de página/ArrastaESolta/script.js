let areas = {
    a: null,
    b: null,
    c: null
}

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', drop);
});

document.querySelectorAll('.neutralArea').forEach(item => {
    item.addEventListener('dragover', dragOverNeutral);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dropNeutral);
});


// Item functions

function dragStart(e){
    e.currentTarget.classList.add('dragging')
}
function dragEnd(e){
    e.currentTarget.classList.remove('dragging')
}

// Area Functions

function dragOver(e){
    if (e.currentTarget.querySelector('.item') === null){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}
function dragLeave(e){
    e.currentTarget.classList.remove('hover');
}
function drop(e){
    e.currentTarget.classList.remove('hover');
    
    if (e.currentTarget.querySelector('.item') === null){
        let dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
        updateAreas()
    }
}

// NeutralArea Functions

function dragOverNeutral(e){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
};

function dropNeutral(e){
    e.currentTarget.classList.remove('hover');

    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas()
};

// Other functions
function updateAreas(){
    document.querySelectorAll('.area').forEach( area => {
        let name = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    })

    if(areas.a == '1' && areas.b == '2' && areas.c == '3') {
            document.querySelector('.areas').classList.add('correct');
        } else {
            document.querySelector('.areas').classList.remove('correct');
        }
};