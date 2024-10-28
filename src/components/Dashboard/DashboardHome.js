import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import DashBoardComponent2 from './DashBoardComponent2';
import DashBoardComponent3 from './DashBoardComponent3';
import Tile from './Tile';
import { IoBagHandleSharp } from 'react-icons/io5';
import { MdFileUpload } from 'react-icons/md';
import { RiBarChart2Fill } from 'react-icons/ri';
import { PiDotsSixVerticalBold } from 'react-icons/pi';

const initialTilesData = [
    {
        id: 'tile1',
        icon: <IoBagHandleSharp size={28} className="text-[#2d363d]" />,
        title: 'Competitive Products',
        score: '10/10',
        percentage: '+11.01%',
        iconBgColor: 'bg-pink-600',
        link: '/competitive-products'
    },
    {
        id: 'tile2',
        icon: <MdFileUpload size={28} className="text-[#2d363d]" />,
        title: 'Same Price Products',
        score: '10/10',
        percentage: '-11.01%',
        iconBgColor: 'bg-[#00fba0]',
        link: '/same-price-products'
    },
    {
        id: 'tile3',
        icon: <RiBarChart2Fill size={28} className="text-[#2d363d]" />,
        title: 'Overpriced Products',
        score: '10/10',
        percentage: '+11.01%',
        iconBgColor: 'bg-[#ef840f]',
        link: '/overpriced-products'
    }
];

const initialDivs = [
    { id: 'div1', component: 'tiles', className: 'col-span-12' },
    { id: 'div2', component: 'DashBoardComponent2', className: 'col-span-12' },
    { id: 'div3', component: 'DashBoardComponent3', className: 'col-span-12' }
];

const DashboardHome = () => {
    const [dragging, setDragging] = useState(false);
    const [order, setOrder] = useState(initialDivs.map(div => div.id));
    const [tilesOrder, setTilesOrder] = useState(initialTilesData.map(tile => tile.id));
    const [isRowDragging, setIsRowDragging] = useState(false);

    useEffect(() => {
        const savedOrder = localStorage.getItem('order');
        if (savedOrder) {
            setOrder(JSON.parse(savedOrder));
        }

        const savedTilesOrder = localStorage.getItem('tilesOrder');
        if (savedTilesOrder) {
            setTilesOrder(JSON.parse(savedTilesOrder));
        }
    }, []);

    useEffect(() => {
        if (order.length > 0) {
            localStorage.setItem('order', JSON.stringify(order));
        }
    }, [order]);

    useEffect(() => {
        if (tilesOrder.length > 0) {
            localStorage.setItem('tilesOrder', JSON.stringify(tilesOrder));
        }
    }, [tilesOrder]);

    const onDragStart = (start) => {
        setDragging(true);
        if (start.type === 'row') {
            setIsRowDragging(true);
        }
    };

    const onDragEnd = (result) => {
        setDragging(false);
        setIsRowDragging(false);

        if (!result.destination) return; // If dropped outside the droppable area

        if (result.type === 'row') {
            const updatedOrder = Array.from(order);
            const [reorderedItem] = updatedOrder.splice(result.source.index, 1);
            updatedOrder.splice(result.destination.index, 0, reorderedItem);
            setOrder(updatedOrder);
        } else if (result.type === 'tile') {
            const updatedTilesOrder = Array.from(tilesOrder);
            const [reorderedItem] = updatedTilesOrder.splice(result.source.index, 1);
            updatedTilesOrder.splice(result.destination.index, 0, reorderedItem);
            setTilesOrder(updatedTilesOrder);
        }
    };

    const renderComponent = (component) => {
        switch (component) {
            case 'tiles':
                return (
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="tiles" direction="horizontal" type="tile">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`relative grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-4 ${isRowDragging ? 'opacity-10' : ''}`}
                                >
                                    {tilesOrder.map((id, index) => {
                                        const tile = initialTilesData.find(tile => tile.id === id);
                                        return (
                                            <Draggable key={tile.id} draggableId={tile.id} index={index}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="flex items-center justify-center"
                                                    >
                                                        <Tile
                                                            icon={tile.icon}
                                                            title={tile.title}
                                                            score={tile.score}
                                                            percentage={tile.percentage}
                                                            iconBgColor={tile.iconBgColor}
                                                            // setDragging={setDragging}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                    <PiDotsSixVerticalBold
                                        className="absolute right-0 m-2 text-[#a3a3a3] hidden md:block"
                                        size={20}
                                        onMouseEnter={() => setDragging(true)}
                                        onMouseLeave={() => setDragging(false)}
                                    />
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                );
            case 'DashBoardComponent2':
                return <DashBoardComponent2 setDragging={setDragging} />;
            case 'DashBoardComponent3':
                return <DashBoardComponent3 setDragging={setDragging} />;
            default:
                return null;
        }
    };

    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" type="row">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="grid grid-cols-12 gap-3"
                    >
                        {order.map((id, index) => {
                            const div = initialDivs.find(div => div.id === id);
                            return (
                                <Draggable key={div.id} draggableId={div.id} index={index} isDragDisabled={!dragging}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`${div.className} ${isRowDragging && div.id === 'div1' ? 'bg-opacity-10' : ''}`}
                                        >
                                            {renderComponent(div.component)}
                                            {div.id === 'div1' && (
                                                <PiDotsSixVerticalBold
                                                    className="absolute top-0 right-0 m-2 text-[#a3a3a3]"
                                                    size={20}
                                                    onMouseEnter={() => setDragging(true)}
                                                    onMouseLeave={() => setDragging(false)}
                                                />
                                            )}
                                        </div>
                                    )}
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DashboardHome;
