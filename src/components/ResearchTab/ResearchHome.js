import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ResearchComponent1 from './ResearchComponent1';
import ResearchComponent2 from './ResearchComponent2';
import ResearchComponent3 from './ResearchComponent3';
import ResearchComponent4 from './ResearchComponent4';
import ResearchComponent5 from './ResearchComponent5';
import Searchbar from '../Searchbar';

const ResearchHome = () => {
    const [dragging, setDragging] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const initialDivsAbove = [
        { id: 'div1', content: <ResearchComponent1 setDragging={setDragging} />, className: 'col-span-12 sm:col-span-4 md:col-span-3' },
        { id: 'div2', content: <ResearchComponent2 setDragging={setDragging} />, className: 'col-span-12 sm:col-span-8 md:col-span-6' },
        { id: 'div3', content: <ResearchComponent3 setDragging={setDragging} />, className: 'col-span-12 sm:col-span-4 md:col-span-3' }
    ];

    const initialDivsBelow = [
        { id: 'div4', content: <ResearchComponent4 setDragging={setDragging} />, className: 'col-span-12 md:col-span-6' },
        { id: 'div5', content: <ResearchComponent5 setDragging={setDragging} />, className: 'col-span-12 md:col-span-6' }
    ];

    const getSavedOrder = (key, defaultOrder) => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultOrder.map(div => div.id);
    };

    const [divsAboveOrder, setDivsAboveOrder] = useState(getSavedOrder('divsAboveOrder', initialDivsAbove));
    const [divsBelowOrder, setDivsBelowOrder] = useState(getSavedOrder('divsBelowOrder', initialDivsBelow));

    const divsAbove = divsAboveOrder.map(id => initialDivsAbove.find(div => div.id === id));
    const divsBelow = divsBelowOrder.map(id => initialDivsBelow.find(div => div.id === id));

    useEffect(() => {
        localStorage.setItem('divsAboveOrder', JSON.stringify(divsAboveOrder));
    }, [divsAboveOrder]);

    useEffect(() => {
        localStorage.setItem('divsBelowOrder', JSON.stringify(divsBelowOrder));
    }, [divsBelowOrder]);

    const onDragStart = () => {
        setDragging(true);
    };

    const onDragEnd = (result) => {
        setDragging(false);
        if (!result.destination) return; // If dropped outside the droppable area

        const sourceDroppableId = result.source.droppableId;
        const destinationDroppableId = result.destination.droppableId;

        if (sourceDroppableId === destinationDroppableId) {
            // Reorder within the same list
            const items = sourceDroppableId === 'droppableAbove' ? Array.from(divsAboveOrder) : Array.from(divsBelowOrder);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);

            if (sourceDroppableId === 'droppableAbove') {
                setDivsAboveOrder(items);
            } else {
                setDivsBelowOrder(items);
            }
        }
    };

    return (
        <>
            <div className="flex text-[14px] items-center gap-2 px-2">
                <Link to="/dashboard/research" className={`px-2 py-1 rounded-md ${location.pathname === '/dashboard/research' ? 'text-[#F3941D] bg-[#2D363D]' : ''}`}>Domain</Link>
                <Link to="/dashboard/research/keyword" className={`px-2 py-1 rounded-md ${location.pathname === '/dashboard/research/keyword' ? 'text-[#F3941D] bg-[#2D363D]' : ''}`}>Keyword</Link>
            </div>
            <div className='my-5'>
                <Searchbar />
            </div>

            <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                <Droppable droppableId="droppableAbove">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="grid grid-cols-12 gap-3 flex-wrap"
                        >
                            {divsAbove.map((div, index) => (
                                <Draggable key={div.id} draggableId={div.id} index={index} isDragDisabled={!dragging}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`${div.className}`}
                                        >
                                            {div.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <div className="col-span-12 my-3">Competitors</div>

                <Droppable droppableId="droppableBelow">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="grid grid-cols-12 gap-3"
                        >
                            {divsBelow.map((div, index) => (
                                <Draggable key={div.id} draggableId={div.id} index={index} isDragDisabled={!dragging}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`${div.className}`}
                                        >
                                            {div.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    );
};

export default ResearchHome;
