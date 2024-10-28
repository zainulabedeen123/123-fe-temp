import React, { useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { TimeInput } from "@nextui-org/react";
import { Time, parseAbsoluteToLocal } from "@internationalized/date";

const SelectDay = ({ isOpen, onClose }) => {
    const [selectedDay, setSelectedDay] = useState("Sunday");
    let [date, setDate] = useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const handleTimeChange = (field, value) => {
        setDate((prevTime) => ({
            ...prevTime,
            [field]: value,
        }));
    };

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
            placement="top-center"
            className="bg-[#2D363D] rounded-3xl"
            style={{ maxWidth: '600px' }}
        >
            <ModalContent>
                <div className="relative bg-[#2D363D] rounded-3xl p-3">
                    <ModalBody className=" mb-2">
                        <h2 className="text-[16px] font-semibold text-white">Select Day</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {days.map((day) => (
                                <button
                                    key={day}
                                    className={`p-3 rounded-lg ${selectedDay === day ? "bg-[#252D33] text-white" : "bg-[#3A4249] text-[#a3a3a3]"}`}
                                    onClick={() => handleDayClick(day)}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                        <h2 className="text-[16px] font-semibold text-white mt-1">Select Time</h2>
                        <div className="flex justify-center w-[250px]">
                            <TimeInput
                                granularity="hour"
                                defaultValue={new Time(11)}
                                hourCycle={24}
                                onChange={setDate}
                                endContent="Hr"
                                classNames={{
                                    inputWrapper: [
                                        "bg-transparent",
                                        "border rounded-none h-[30px] w-[70px]"
                                    ],
                                }}
                            />
                            <TimeInput
                                granularity="hour"
                                defaultValue={new Time(0)}
                                hourCycle={24}
                                onChange={setDate}
                                endContent="Min"
                                classNames={{
                                    inputWrapper: [
                                        "bg-transparent",
                                        "border rounded-none h-[30px] w-[70px]"
                                    ],
                                }}
                            />
                            <select
                                value={date.period}
                                onChange={(e) => handleTimeChange("period", e.target.value)}
                                className="p-2 bg-[#3a4249] text-white rounded-md border border-[#505A61]"
                            >
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                    </ModalBody>
                    <ModalFooter className="pt-4 w-full flex justify-center space-x-2">
                        <Button
                            className="text-amber-600 bg-transparent border border-amber-600 rounded-md px-4 py-1"
                            variant="flat"
                            onPress={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-gradient-to-r from-amber-600 to-amber-300 text-white rounded-md px-4 py-1"
                            onPress={onClose}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default SelectDay;
