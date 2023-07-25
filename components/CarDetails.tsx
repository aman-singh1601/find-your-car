import React from 'react'
import { CarProps } from '@/types';

interface CarDetailsProps{
    isOpen:boolean;
    closeModal:()=>void;
    car:CarProps;
}

const CarDetails = ({car,closeModal,isOpen}:CarDetailsProps) => {
  return (
    <div>
        CarDetails
    </div>
  )
}

export default CarDetails
