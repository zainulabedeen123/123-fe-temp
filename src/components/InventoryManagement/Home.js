import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Tile from './Tile';
import { IoBagHandleSharp } from 'react-icons/io5';
import { FaTag } from "react-icons/fa6";
import { RiBarChart2Fill } from 'react-icons/ri';
import { PiDotsSixVerticalBold } from 'react-icons/pi';

import Component5 from './Component5';
import Component7 from './Component7';
import Component6 from './Component6';

const initialTilesData = [
  {
    id: 'IMtile1',
    icon: <FaTag size={28} className="text-[#2d363d]" />,
    title: 'Value of Stock',
    score: '$1000',
    percentage: '+12.5%',
    iconBgColor: 'bg-[#FB0078]',
  },
  {
    id: 'IMtile2',
    icon: <IoBagHandleSharp size={28} className="text-[#2d363d]" />,
    title: 'No. of Stock',
    score: '1000',
    percentage: '-8.5%',
    iconBgColor: 'bg-emerald-400',
    link: '/dashboard/inventorymanagement/table'
  },
  {
    id: 'IMtile3',
    icon: <RiBarChart2Fill size={28} className="text-[#2d363d]" />,
    title: 'No. of Sold Items',
    score: '1000',
    percentage: '+15.0%',
    iconBgColor: 'bg-[#EB7301]',
    link: '/dashboard/inventorymanagement/table'
  },
  {
    id: 'IMtile4',
    icon: <FaTag size={28} className="text-[#2d363d]" />,
    title: 'Purchased Value',
    score: '$1000',
    percentage: '+15.0%',
    iconBgColor: 'bg-[#F3D42F]',
  }
];

const initialDivs = [
  { id: 'IMdiv1', component: 'tiles', className: 'col-span-12' },
  { id: 'IMdiv5', component: 'Component5', className: 'col-span-12 md:col-span-6 lg:col-span-4' },
  { id: 'IMdiv6', component: 'Component6', className: 'col-span-12 md:col-span-6 lg:col-span-8' },
  { id: 'IMdiv7', component: 'Component7', className: 'col-span-12' },
];

const Home = () => {
  const [dragging, setDragging] = useState(false);
  const [orderIM, setOrderIM] = useState(initialDivs.map(div => div.id));
  const [tilesOrderIM, setTilesOrderIM] = useState(initialTilesData.map(tile => tile.id));
  const [isRowDragging, setIsRowDragging] = useState(false);

  useEffect(() => {
    const savedOrder = localStorage.getItem('orderIM');
    if (savedOrder) {
      setOrderIM(JSON.parse(savedOrder));
    }

    const savedTilesOrder = localStorage.getItem('tilesOrderIM');
    if (savedTilesOrder) {
      setTilesOrderIM(JSON.parse(savedTilesOrder));
    }
  }, []);

  useEffect(() => {
    if (orderIM.length > 0) {
      localStorage.setItem('orderIM', JSON.stringify(orderIM));
    }
  }, [orderIM]);

  useEffect(() => {
    if (tilesOrderIM.length > 0) {
      localStorage.setItem('tilesOrderIM', JSON.stringify(tilesOrderIM));
    }
  }, [tilesOrderIM]);

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
      const updatedOrder = Array.from(orderIM);
      const [reorderedItem] = updatedOrder.splice(result.source.index, 1);
      updatedOrder.splice(result.destination.index, 0, reorderedItem);
      setOrderIM(updatedOrder);
    } else if (result.type === 'tile') {
      const updatedTilesOrder = Array.from(tilesOrderIM);
      const [reorderedItem] = updatedTilesOrder.splice(result.source.index, 1);
      updatedTilesOrder.splice(result.destination.index, 0, reorderedItem);
      setTilesOrderIM(updatedTilesOrder);
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
                  className={`relative grid grid-cols-4 gap-4 ${isRowDragging ? 'opacity-10' : ''}`}
                >
                  {tilesOrderIM.map((id, index) => {
                    const tile = initialTilesData.find(tile => tile.id === id);
                    return (
                      <Draggable key={tile.id} draggableId={tile.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex items-center justify-center col-span-4 md:col-span-2 lg:col-span-1"
                          >
                            <Tile
                              icon={tile.icon}
                              title={tile.title}
                              score={tile.score}
                              percentage={tile.percentage}
                              iconBgColor={tile.iconBgColor}
                              link={tile.link}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                  <PiDotsSixVerticalBold
                    className="absolute right-0 m-2 text-[#a3a3a3]"
                    size={20}
                    onMouseEnter={() => setDragging(true)}
                    onMouseLeave={() => setDragging(false)}
                  />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        );
      case 'Component5':
        return <Component5 setDragging={setDragging} dragging={dragging} />;
      case 'Component6':
        return <Component6 setDragging={setDragging} dragging={dragging} />;
      case 'Component7':
        return <Component7 setDragging={setDragging} dragging={dragging} />;
      default:
        return null;
    }
  };

  const divs = orderIM.map(id => initialDivs.find(div => div.id === id));

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="row">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="grid grid-cols-12 gap-3"
          >
            {divs.map((div, index) => (
            <Draggable key={div.id} draggableId={div.id} index={index} isDragDisabled={!dragging}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`${div.className} ${isRowDragging && div.id === 'IMdiv1' ? 'bg-opacity-10' : ''}`}
                >
                  {renderComponent(div.component)}
                  {div.id === 'IMdiv1' && (
                    <PiDotsSixVerticalBold
                      className="absolute top-0 right-0 m-2 text-[#a3a3a3]"
                      size={20}
                      onMouseEnter={() => setDragging(true)}
                      onMouseLeave={() => setDragging(false)}
                      {...provided.dragHandleProps}
                    />
                  )}
                </div>
              )}
            </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Home;
